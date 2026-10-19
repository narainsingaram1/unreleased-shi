import React from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import parse, { attributesToProps, domToReact } from 'html-react-parser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import './theme.css'
import '../styles.css'

// Keep the existing storage and audio controller independent of React.
// All interactive markup is rendered through the installed shadcn primitives.
const roots = new Map()
const tableParts = { table: Table, thead: TableHeader, tbody: TableBody, tr: TableRow, th: TableHead, td: TableCell }
const options = {
  replace(node) {
    if (node.type !== 'tag') return
    const props = attributesToProps(node.attribs)
    const classes = (props.className || '').split(/\s+/)
    const children = () => domToReact(node.children, options)
    if (node.name === 'button') {
      const variant = classes.includes('primary') || classes.includes('play-main') ? 'default' : classes.includes('btn') ? 'outline' : 'ghost'
      return <Button {...props} variant={variant} size={classes.includes('icon-btn') ? 'icon' : 'default'}>{children()}</Button>
    }
    // Inputs remain uncontrolled so the controller can read FormData and update playback.
    if (node.name === 'input' && !['range', 'file'].includes(props.type)) {
      const { value, ...rest } = props
      return <Input {...rest} defaultValue={value} />
    }
    if (node.name === 'textarea') return <Textarea {...props} defaultValue={node.children.map(n => n.data || '').join('')} />
    if (node.name === 'article' && classes.includes('album-card')) return <Card {...props}>{children()}</Card>
    if (node.name === 'span' && classes.some(c => ['track-status', 'status-pill', 'cover-badge', 'tab-count'].includes(c))) return <Badge {...props} variant="secondary">{children()}</Badge>
    if (tableParts[node.name]) { const Component = tableParts[node.name]; return <Component {...props}>{children()}</Component> }
    if (node.name === 'select') {
      const { value, ...rest } = props
      const selected = node.children.find(child => child.attribs?.selected !== undefined)
      const defaultValue = value ?? (selected ? selected.attribs.value ?? selected.children.map(n => n.data || '').join('') : undefined)
      const label = node.parent?.name === 'label' ? node.parent.children.filter(n => n.type === 'text').map(n => n.data).join('').trim() : undefined
      return <select {...rest} aria-label={props['aria-label'] || label} defaultValue={defaultValue}>{children()}</select>
    }
    if (node.name === 'option') { const { selected, ...rest } = props; return <option {...rest}>{children()}</option> }
  },
}
function renderMarkup(element, markup) {
  // Dispose nested roots before replacing a page; this keeps navigation leak-free.
  for (const [container, root] of roots) {
    if (container !== element && element.contains(container)) {
      flushSync(() => root.unmount())
      roots.delete(container)
    }
  }
  if (!roots.has(element)) { element.replaceChildren(); roots.set(element, createRoot(element)) }
  flushSync(() => roots.get(element).render(parse(markup, options)))
}
window.stillUI = { renderMarkup }
for (const selector of ['.app-shell', '.player']) {
  const element = document.querySelector(selector)
  renderMarkup(element, element.innerHTML)
}
await import('../app.js')
