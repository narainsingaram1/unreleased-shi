// Compatibility entry point for existing `node server.mjs` workflows.
import { createServer } from 'vite'
const server = await createServer({
  server: { host: '127.0.0.1', port: Number(process.env.PORT || 3000) },
})
await server.listen()
server.printUrls()
