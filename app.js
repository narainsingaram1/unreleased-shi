const paths={
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
 library:'<rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/>',
 wave:'<path d="M2 10v4M6 6v12M10 3v18M14 7v10M18 5v14M22 10v4"/>',
 heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
 plus:'<path d="M5 12h14M12 5v14"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 'chevron-down':'<path d="m6 9 6 6 6-6"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
 upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
 more:'<circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/>',
 play:'<polygon points="7 4 19 12 7 20 7 4" fill="currentColor" stroke-width="0"/>',
 pause:'<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke-width="0"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke-width="0"/>',
 previous:'<polygon points="19 20 9 12 19 4 19 20" fill="currentColor" stroke-width="0"/><line x1="5" x2="5" y1="19" y2="5"/>',
 next:'<polygon points="5 4 15 12 5 20 5 4" fill="currentColor" stroke-width="0"/><line x1="19" x2="19" y1="5" y2="19"/>',
 shuffle:'<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l6.1 8.6c.8 1.1 2 1.7 3.3 1.7H22"/><path d="m18 22 4-4-4-4"/>',
 repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
 volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
 mute:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
 queue:'<path d="M21 6H3M21 12H9M21 18H7M3 10v4l4-2z"/>',
 list:'<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
 arrow:'<path d="m15 18-6-6 6-6"/>',
 edit:'<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
 download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
 trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
 close:'<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>',
 notes:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
 folder:'<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
 check:'<polyline points="20 6 9 17 4 12"/>',
 up:'<path d="m18 15-6-6-6 6"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 menu:'<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
 bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
};
const icon=(name)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.wave}</svg>`;
const $=(q)=>document.querySelector(q);
const renderMarkup=(element,markup)=>globalThis.stillUI.renderMarkup(element,markup);
const e=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uuid=()=>crypto.randomUUID();
const covers=['blue-hour','after-hours','soft-focus','fragments','sunday-tape','no-name'];
const colors=['#737373','#737373','#737373','#737373','#737373','#737373'];
const coverPath=(name)=>`assets/${name}.svg`;
let state={albums:[],tracks:[]},db,storageError=false,view='library',albumId=null,filter='all',search='',layout='grid',sort='recent',currentId=null,queue=[],shuffling=false,repeating=false,uploadTarget=null,coverTarget=null,busy=false;
const urls=new Map();
const audio=$('#audio');
const modal=$('#modal');
let toastTimer,noteTimer,playGeneration=0;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3600)}
function formatTime(s){s=Number.isFinite(s)?s:0;return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`}
function albumFor(track){return state.albums.find(a=>a.id===track.albumId)}
function tracksFor(a){return state.tracks.filter(t=>t.albumId===a.id).sort((x,y)=>x.order-y.order)}
function durationFor(a){return tracksFor(a).reduce((sum,t)=>sum+t.duration,0)}
function coverOf(a){return a?.cover||coverPath('no-name')}
function dateLabel(timestamp){const day=Math.floor((Date.now()-timestamp)/86400000);return day===0?'Today':day===1?'Yesterday':day<7?`${day} days ago`:new Date(timestamp).toLocaleDateString('en-US',{month:'short',day:'numeric'})}
function makeRequest(req){return new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open('still-studio',1);req.onupgradeneeded=()=>{req.result.createObjectStore('data');req.result.createObjectStore('files')};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);req.onblocked=()=>reject(new Error('Storage is blocked by another tab. Close it and reload.'))})}
async function persist(addFiles=[],removeFiles=[]){
 if(!db)throw new Error('Device storage is unavailable.');
 const snapshot=structuredClone(state);
 await new Promise((resolve,reject)=>{const tx=db.transaction(['data','files'],'readwrite');tx.objectStore('data').put(snapshot,'workspace');for(const [id,blob]of addFiles)tx.objectStore('files').put(blob,id);for(const id of removeFiles)tx.objectStore('files').delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Save failed'))});
}
async function mutate(fn,files=[],removes=[]){const previous=structuredClone(state);try{fn();await persist(files,removes);render();return true}catch(err){state=previous;toast(`Could not save: ${err.message}`);render();return false}}
function demoAudio(seed=1){
 const rate=22050,seconds=18,n=rate*seconds,buffer=new ArrayBuffer(44+n*2),dv=new DataView(buffer);const str=(at,s)=>{for(let i=0;i<s.length;i++)dv.setUint8(at+i,s.charCodeAt(i))};str(0,'RIFF');dv.setUint32(4,36+n*2,true);str(8,'WAVE');str(12,'fmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,rate,true);dv.setUint32(28,rate*2,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);str(36,'data');dv.setUint32(40,n*2,true);
 const roots=[130.81,146.83,110,174.61,164.81,98],base=roots[(seed-1)%6];
 for(let i=0;i<n;i++){const t=i/rate,fade=Math.min(1,t/1.5,(seconds-t)/2),beat=t%(.75),kick=Math.sin(2*Math.PI*(45*beat+12*(1-Math.exp(-beat*25))))*Math.exp(-beat*17)*.12;let sample=0;for(const ratio of [1,1.189207,1.498307,2]){sample+=Math.sin(2*Math.PI*base*ratio*t+Math.sin(t*.7)*.3)*.046*(.7+.3*Math.sin(t*.5+ratio))}sample+=(Math.sin(2*Math.PI*base*4*t)*Math.exp(-(t%1.5)*5))*.025;dv.setInt16(44+i*2,Math.max(-32767,Math.min(32767,(sample+kick)*fade*32767)),true)}
 return new Blob([buffer],{type:'audio/wav'});
}
async function blobFor(t){return t.demo?demoAudio(t.seed):makeRequest(db.transaction('files').objectStore('files').get(t.id))}
function seedState(){
 const names=['Blue hour','After hours','Soft focus','Fragments','Sunday tape','No name yet'];
 const songs=[['the way home','somewhere, slowly','last light','blue hour (outro)'],['2:34 am','empty streets','stay a little'],['blurred edges','almost there','soft focus'],['little things','pieces of you'],['sunday morning','sun through the blinds'],['an idea, maybe']];
 const descriptions=['','','','','',''];
 names.forEach((name,i)=>{const a={id:uuid(),name,description:descriptions[i],cover:coverPath(covers[i]),color:colors[i],status:i===4?'Ready':'In progress',favorite:i===0,createdAt:Date.now()-i*86400000,updatedAt:Date.now()-i*86400000,notes:i===0?'Give the intro a little more room to breathe.\nTry a warmer bass tone on “somewhere, slowly”.':'',sample:true};state.albums.push(a);songs[i].forEach((name,j)=>state.tracks.push({id:uuid(),albumId:a.id,name,order:j,duration:18,size:0,type:'audio/wav',filename:name+'.wav',favorite:false,notes:'',status:j===0?'Demo':'Idea',createdAt:a.createdAt,demo:true,seed:i+1+j}))});
}
function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>renderMarkup(el,icon(el.dataset.icon)))}
function renderSidebar(){
 $('#library-count').textContent=state.albums.length;
 document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
 renderMarkup($('#collection-list'),state.albums.slice(0,8).map(a=>`<button class="collection-item ${albumId===a.id?'active':''}" data-album="${e(a.id)}">${icon('folder')}<span class="collection-text">${e(a.name)}</span></button>`).join(''));
 renderMarkup($('#breadcrumb'),`Library <span>/</span> ${view==='album'?e(state.albums.find(a=>a.id===albumId)?.name||'Album'):view==='tracks'?'All tracks':view==='favorites'?'Favorites':'Albums'}`);
}
function albumCard(a){
 const tracks=tracksFor(a);
 return `<article class="album-card">
  <div class="cover-wrapper">
   <button class="cover-button" data-album="${e(a.id)}" aria-label="Open ${e(a.name)}">
    <img src="${e(coverOf(a))}" alt="${e(a.name)} artwork" loading="lazy">
    <div class="cover-top"><span class="cover-badge">${e(a.status)}</span></div>
   </button>
   <button class="cover-play-btn" data-play-album="${e(a.id)}" aria-label="Play ${e(a.name)}" title="Play">${icon('play')}</button>
  </div>
  <div class="album-info">
   <button class="album-title" data-album="${e(a.id)}">${e(a.name)}</button>
   <div class="album-meta-row">
    <span class="album-meta-text">bruhhhhh</span>
    <div class="album-card-tools">
     <button class="icon-btn" data-edit-album="${e(a.id)}" aria-label="Edit ${e(a.name)}">${icon('more')}</button>
     <button class="icon-btn ${a.favorite?'favorited':''}" data-fav-album="${e(a.id)}" aria-label="${a.favorite?'Unfavorite':'Favorite'} ${e(a.name)}" aria-pressed="${a.favorite}">${icon('heart')}</button>
    </div>
   </div>
  </div>
 </article>`;
}
function toolbar(isTrack=false){
 return `<div class="toolbar">
  <div class="tabs">
   <button class="tab ${filter==='all'?'active':''}" data-filter="all">${isTrack?'All tracks':'All albums'} <span class="tab-count">${isTrack?state.tracks.length:state.albums.length}</span></button>
   <button class="tab ${filter==='recent'?'active':''}" data-filter="recent">Recent</button>
  </div>
  <div class="toolbar-controls">
   <label class="search-wrap">${icon('search')}<input type="search" id="search" placeholder="Search ${isTrack?'tracks':'albums'}" value="${e(search)}" aria-label="Search ${isTrack?'tracks':'albums'}"></label>
   <select class="sort-select" id="sort" aria-label="Sort">
    <option value="recent" ${sort==='recent'?'selected':''}>Last modified</option>
    <option value="name" ${sort==='name'?'selected':''}>Name A–Z</option>
    <option value="oldest" ${sort==='oldest'?'selected':''}>Oldest first</option>
   </select>
   ${!isTrack?`<div class="view-toggle"><button class="icon-btn ${layout==='grid'?'selected':''}" data-layout="grid" aria-label="Grid view">${icon('library')}</button><button class="icon-btn ${layout==='list'?'selected':''}" data-layout="list" aria-label="List view">${icon('list')}</button></div>`:''}
  </div>
 </div>`;
}
function libraryPage(){
 const fav=view==='favorites';
 return `<div class="page-heading">
  <div>
   <h1>${fav?'Favorites':'Albums'}</h1>
   <p class="page-subtitle">${fav?'Your saved albums and tracks.':'Manage your albums and tracks.'}</p>
  </div>
  <div class="heading-actions">
   <button class="btn" data-action="upload">${icon('upload')} Upload tracks</button>
   <button class="btn primary" data-action="create">${icon('plus')} New album</button>
  </div>
 </div>
 ${toolbar()}
 <div id="results"></div>`;
}
function matchingAlbums(){let list=state.albums.filter(a=>(view!=='favorites'||a.favorite)&&a.name.toLowerCase().includes(search.toLowerCase()));if(filter==='recent')list=list.filter(a=>Date.now()-a.updatedAt<7*86400000);list.sort(sort==='name'?(a,b)=>a.name.localeCompare(b.name):sort==='oldest'?(a,b)=>a.createdAt-b.createdAt:(a,b)=>b.updatedAt-a.updatedAt);return list}
function renderLibraryResults(){const list=matchingAlbums();renderMarkup($('#results'),`${list.length?`<div class="album-${layout}">${list.map(albumCard).join('')}${view==='library'&&!search?`<button class="new-album-card" data-action="create"><span class="plus-circle">${icon('plus')}</span><strong>New album</strong><small>Add an album</small></button>`:''}</div>`:`<div class="empty-state">${icon(view==='favorites'?'heart':'folder')}<h2>${search?'No matching albums.':view==='favorites'?'No favorites yet.':'No albums yet.'}</h2><p>${search?'Try a different name.':view==='favorites'?'Tap the heart on an album to keep it here.':'Create an album and drop in your first tracks.'}</p>${view==='library'&&!search?'<button class="btn primary" data-action="create">Create your first album</button>':''}</div>`}${view==='favorites'&&state.tracks.some(t=>t.favorite)?`<div class="section-heading"><h2>Favorite tracks</h2></div>${trackTable(state.tracks.filter(t=>t.favorite&&t.name.toLowerCase().includes(search.toLowerCase())),true)}`:''}`)}
function trackTable(tracks,showAlbum=false){
 if(!tracks.length)return `<div class="empty-state">${icon('wave')}<h2>No tracks yet.</h2><p>Upload a track to get started. MP3, WAV, M4A, FLAC, and more.</p><button class="btn primary" data-action="upload">${icon('upload')} Upload tracks</button></div>`;
 return `<table class="track-table">
  <thead>
   <tr>
    <th style="width:35px">#</th>
    <th>Track name</th>
    ${showAlbum?'<th class="track-hide-tablet">Album</th>':''}
    <th class="track-hide-mobile">Status</th>
    <th>Time</th>
    <th aria-label="Track actions"></th>
   </tr>
  </thead>
  <tbody>
   ${tracks.map((t,i)=>{
    const a=albumFor(t);
    return `<tr data-track="${e(t.id)}" class="${currentId===t.id?'playing':''}">
     <td class="track-number-cell">
      <span class="track-number">${currentId===t.id&&!audio.paused?'<span class="wave-bars"><i></i><i></i><i></i></span>':String(i+1)}</span>
     </td>
     <td class="track-info-cell">
      <div class="track-title-cell">
       ${showAlbum?`<img class="track-mini-art" src="${e(coverOf(a))}" alt="">`:''}
       <div>
        <span class="track-name">${e(t.name)}</span>
        <span class="track-date">${dateLabel(t.createdAt)}</span>
       </div>
      </div>
     </td>
     ${showAlbum?`<td class="track-meta-cell track-hide-tablet">${e(a?.name)}</td>`:''}
     <td class="track-meta-cell track-hide-mobile"><span class="track-status">${e(t.status)}</span></td>
     <td class="track-meta-cell">${formatTime(t.duration)}</td>
     <td class="track-actions-cell">
      <div class="track-tools">
       <button class="icon-btn track-favorite ${t.favorite?'active':''}" data-fav-track="${e(t.id)}" aria-label="${t.favorite?'Unfavorite':'Favorite'} ${e(t.name)}" aria-pressed="${t.favorite}">${icon('heart')}</button>
       <button class="icon-btn" data-edit-track="${e(t.id)}" aria-label="Edit ${e(t.name)}">${icon('more')}</button>
      </div>
     </td>
    </tr>`;
   }).join('')}
  </tbody>
 </table>`;
}
function tracksPage(){return `<div class="page-heading"><div><h1>Tracks</h1><p class="page-subtitle">All tracks in your library.</p></div><button class="btn primary" data-action="upload">${icon('upload')} Upload tracks</button></div>${toolbar(true)}<div id="results"></div>`}
function matchingTracks(){let list=state.tracks.filter(t=>t.name.toLowerCase().includes(search.toLowerCase()));if(filter==='recent')list=list.filter(t=>Date.now()-t.createdAt<7*86400000);list.sort(sort==='name'?(a,b)=>a.name.localeCompare(b.name):sort==='oldest'?(a,b)=>a.createdAt-b.createdAt:(a,b)=>b.createdAt-a.createdAt);return list}
function albumPage(a){
 const tracks=tracksFor(a);
 return `<button class="back-button" data-action="back">${icon('arrow')} Back to library</button>
 <div class="album-hero">
  <img class="album-hero-cover" src="${e(coverOf(a))}" alt="${e(a.name)} artwork">
  <div class="album-hero-text">
   <div class="album-hero-header">
    <div class="album-hero-header-left">
     <h1>${e(a.name)}</h1>
     <div class="album-hero-meta">
      <span>bruhhhhh</span>
      <span>·</span>
      <span>${tracks.length} ${tracks.length===1?'track':'tracks'}</span>
      <span>·</span>
      <span>${formatTime(durationFor(a))}</span>
      <span class="status-pill">${e(a.status)}</span>
     </div>
     ${a.description ? `<div class="album-description">${e(a.description)}</div>` : ''}
    </div>
    <button class="hero-play-btn" data-play-album="${e(a.id)}" aria-label="Play album" title="Play album">${icon('play')}</button>
   </div>
   <button class="btn add-tracks-pill" data-action="upload">${icon('plus')} Add tracks</button>
   <div id="album-tracks">${trackTable(tracks)}</div>
   ${tracks.length?`<button class="track-upload" data-action="upload" style="display:none"></button>`:''}
   <div class="notes-panel">
    <div class="notes-header">
     <span>${icon('notes')} Album notes</span>
     <small id="note-save-status">Saved</small>
    </div>
    <textarea id="album-notes" aria-label="Album notes" placeholder="Add notes…">${e(a.notes)}</textarea>
   </div>
   <div class="heading-actions" style="margin-top:20px;">
    <button class="btn" data-edit-album="${e(a.id)}">${icon('edit')} Edit album</button>
   </div>
  </div>
 </div>`;
}
function render(){renderSidebar();const a=state.albums.find(a=>a.id===albumId);if(view==='album'&&!a){view='library';albumId=null}renderMarkup($('#main'),(storageError?'<div class="error-banner">Device storage is unavailable. Enable browser storage and reload before uploading.</div>':'')+(view==='album'?albumPage(a):view==='tracks'?tracksPage():libraryPage()));if(view==='library'||view==='favorites')renderLibraryResults();if(view==='tracks')renderMarkup($('#results'),trackTable(matchingTracks(),true));bindPage();updatePlayerInfo()}
function bindPage(){const s=$('#search');if(s)s.addEventListener('input',()=>{search=s.value;if(view==='tracks')renderMarkup($('#results'),trackTable(matchingTracks(),true));else renderLibraryResults()});$('#sort')?.addEventListener('change',ev=>{sort=ev.target.value;if(view==='tracks')renderMarkup($('#results'),trackTable(matchingTracks(),true));else renderLibraryResults()});$('#album-notes')?.addEventListener('input',ev=>{const a=state.albums.find(a=>a.id===albumId);if(!a)return;const value=ev.target.value;a.notes=value;a.updatedAt=Date.now();$('#note-save-status').textContent='Saving…';clearTimeout(noteTimer);noteTimer=setTimeout(async()=>{a.notes=value;a.updatedAt=Date.now();try{await persist();if($('#note-save-status'))$('#note-save-status').textContent='Saved'}catch{$('#note-save-status').textContent='Save failed — export a backup';toast('Notes could not be saved.')}},450)})}
function navigate(newView,id=null){if(noteTimer){clearTimeout(noteTimer);noteTimer=null;persist().catch(()=>toast('Notes could not be saved.'))}search='';filter='all';view=newView;albumId=id;location.hash=id?`album/${id}`:newView;render();window.scrollTo(0,0);$('.sidebar').classList.remove('open')}
function fromHash(){const route=location.hash.slice(1);if(route.startsWith('album/')){view='album';albumId=route.slice(6)}else{view=['tracks','favorites'].includes(route)?route:'library';albumId=null}render()}
function showModal(title,body){renderMarkup($('#modal-content'),`<div class="modal-header"><h2>${e(title)}</h2><button class="icon-btn" data-close aria-label="Close dialog">${icon('close')}</button></div><div class="modal-body">${body}</div>`);if(!modal.open)modal.showModal();setTimeout(()=>modal.querySelector('input:not([type=hidden]),select,textarea')?.focus(),50)}
function closeModal(){modal.close();coverTarget=null}
function albumEditor(id=null){const a=state.albums.find(a=>a.id===id);let chosen=a?.cover||coverPath('blue-hour');showModal(a?'Edit album':'New album',`<form id="album-form"><label class="field">Album name<input name="name" maxlength="80" placeholder="Album name" value="${e(a?.name||'')}" required></label><label class="field">Description<textarea name="description" maxlength="600" placeholder="Add a description…">${e(a?.description||'')}</textarea></label><label class="field">Status<select name="status">${['In progress','Ready','Archived'].map(s=>`<option ${a?.status===s?'selected':''}>${s}</option>`).join('')}</select></label><div class="field">Cover artwork</div><div class="cover-options">${covers.map(c=>`<button type="button" class="cover-option ${chosen===coverPath(c)?'selected':''}" data-cover="${coverPath(c)}" aria-label="${c.replaceAll('-',' ')} artwork"><img src="${coverPath(c)}" alt=""></button>`).join('')}<button type="button" class="cover-option cover-custom" id="custom-cover" aria-label="Upload your own artwork">${icon('upload')}</button></div><div class="cover-hint" id="cover-hint">Choose a cover, or upload your own.</div><div class="modal-actions">${a?`<button class="btn danger" type="button" id="delete-album" style="margin-right:auto">${icon('trash')}</button>`:''}<button type="button" class="btn" data-close>Cancel</button><button class="btn primary" type="submit">${a?'Save changes':'Create album'}</button></div></form>`);
 modal.querySelectorAll('[data-cover]').forEach(b=>b.onclick=()=>{chosen=b.dataset.cover;modal.querySelectorAll('[data-cover]').forEach(x=>x.classList.toggle('selected',x===b));$('#custom-cover').classList.remove('selected');$('#cover-hint').textContent='Choose a cover, or upload your own.'});
 $('#custom-cover').onclick=()=>{coverTarget=(data,name)=>{chosen=data;modal.querySelectorAll('[data-cover]').forEach(x=>x.classList.remove('selected'));renderMarkup($('#custom-cover'),`<img src="${e(data)}" alt="Custom artwork">`);$('#custom-cover').classList.add('selected');$('#cover-hint').textContent=name};$('#cover-input').click()};
 $('#album-form').onsubmit=async ev=>{ev.preventDefault();const form=new FormData(ev.target),name=String(form.get('name')).trim();if(!name){toast('Give your album a name.');return}const newId=id||uuid();const ok=await mutate(()=>{if(a){Object.assign(a,{name,description:String(form.get('description')).trim(),status:form.get('status'),cover:chosen,updatedAt:Date.now()})}else state.albums.unshift({id:newId,name,description:String(form.get('description')).trim(),status:form.get('status'),cover:chosen,color:colors[covers.findIndex(c=>coverPath(c)===chosen)]||colors[0],notes:'',favorite:false,createdAt:Date.now(),updatedAt:Date.now()})});if(ok){closeModal();navigate('album',newId);toast(a?'Album updated.':'Album created.')}};
 if(a)$('#delete-album').onclick=()=>deleteAlbum(a);
}
function deleteAlbum(a){showModal('Delete this album?',`<p>“${e(a.name)}” and its ${tracksFor(a).length} tracks will be removed from this device.</p><div class="trash-description">Export a library backup first if you want to keep the audio. This cannot be undone.</div><div class="modal-actions"><button class="btn" data-close>Keep album</button><button class="btn danger" id="confirm-delete">Delete album</button></div>`);$('#confirm-delete').onclick=async()=>{const ids=tracksFor(a).map(t=>t.id);const ok=await mutate(()=>{state.albums=state.albums.filter(x=>x.id!==a.id);state.tracks=state.tracks.filter(t=>t.albumId!==a.id)},[],ids);if(ok){if(ids.includes(currentId))resetPlayer();ids.forEach(revoke);queue=queue.filter(id=>!ids.includes(id));closeModal();navigate('library');toast('Album deleted.')}}}
function uploadDialog(){if(storageError){toast('Enable device storage before uploading.');return}showModal('Upload tracks',`<label class="field">Add to album<select id="upload-album"><option value="new">＋ Create a new album</option>${state.albums.map(a=>`<option value="${e(a.id)}" ${(albumId||state.albums[0]?.id)===a.id?'selected':''}>${e(a.name)}</option>`).join('')}</select></label><button class="upload-zone" id="browse-audio">${icon('upload')}<strong>Drop audio files here</strong><small>or click to browse · MP3, WAV, M4A, FLAC & more</small></button><div class="help-text">Up to 100 MB per file. MP3 and WAV recommended.</div><div class="modal-actions"><button class="btn" data-close>Cancel</button></div>`);$('#browse-audio').onclick=()=>{uploadTarget=$('#upload-album').value;$('#audio-input').click()};$('#browse-audio').ondragover=ev=>ev.preventDefault();$('#browse-audio').ondrop=ev=>{ev.preventDefault();uploadTarget=$('#upload-album').value;processFiles(ev.dataTransfer.files,uploadTarget)}}
function audioDuration(blob){return new Promise(resolve=>{const temp=new Audio(),url=URL.createObjectURL(blob);let done=false;const finish=s=>{if(done)return;done=true;clearTimeout(timer);temp.removeAttribute('src');URL.revokeObjectURL(url);resolve(s)};const timer=setTimeout(()=>finish(0),5000);temp.onloadedmetadata=()=>finish(Number.isFinite(temp.duration)?temp.duration:0);temp.onerror=()=>finish(0);temp.src=url})}
async function processFiles(fileList,target){if(busy){toast('Finishing your previous upload.');return}busy=true;const accepted=[...fileList].filter(f=>f.type.startsWith('audio/')||/\.(mp3|wav|m4a|aac|ogg|flac|aiff?|opus|webm)$/i.test(f.name));if(!accepted.length){toast('Choose audio files: MP3, WAV, M4A, FLAC, or OGG.');busy=false;return}const tooLarge=accepted.some(f=>f.size>100*1024*1024);const files=accepted.filter(f=>f.size<=100*1024*1024&&f.size>0);if(!files.length){toast('Files must be between 1 byte and 100 MB.');busy=false;return}
 try{toast(`Adding ${files.length} ${files.length===1?'track':'tracks'}…`);let a=state.albums.find(a=>a.id===target);const newAlbum=!a;if(!a)a={id:uuid(),name:files[0].name.replace(/\.[^.]+$/,'').replace(/[_-]/g,' ').slice(0,80)||'New album',description:'',cover:coverPath('no-name'),color:colors[5],status:'In progress',notes:'',favorite:false,createdAt:Date.now(),updatedAt:Date.now()};const offset=Math.max(-1,...tracksFor(a).map(t=>t.order))+1,tracks=[],blobs=[];for(const [i,f]of files.entries()){const id=uuid();tracks.push({id,albumId:a.id,name:f.name.replace(/\.[^.]+$/,'').replace(/_/g,' ').slice(0,120),filename:f.name,order:offset+i,duration:await audioDuration(f),size:f.size,type:f.type||'audio/mpeg',favorite:false,notes:'',status:'Demo',createdAt:Date.now(),demo:false});blobs.push([id,f])}const ok=await mutate(()=>{if(newAlbum)state.albums.unshift(a);state.tracks.push(...tracks);a.updatedAt=Date.now()},blobs);if(ok){closeModal();navigate('album',a.id);toast(`${tracks.length} ${tracks.length===1?'track':'tracks'} saved.${tooLarge?' Files over 100 MB skipped.':''}${accepted.length<fileList.length?' Non-audio files skipped.':''}`);if(navigator.storage?.persist)navigator.storage.persist().catch(()=>{})}}
 catch(err){toast(`Could not add tracks: ${err.message}`)}finally{busy=false;$('#audio-input').value=''}
}
function sizeLabel(n){return n>=1048576?`${(n/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round(n/1024))} KB`}
function trackEditor(id){const t=state.tracks.find(t=>t.id===id);if(!t)return;const a=albumFor(t),siblings=tracksFor(a);showModal('Edit track',`<form id="track-form"><label class="field">Track name<input name="name" maxlength="120" value="${e(t.name)}" required></label><label class="field">Album<select name="albumId">${state.albums.map(x=>`<option value="${e(x.id)}" ${x.id===t.albumId?'selected':''}>${e(x.name)}</option>`).join('')}</select></label><label class="field">Status<select name="status">${['Idea','Demo','Mix','Master'].map(s=>`<option ${s===t.status?'selected':''}>${s}</option>`).join('')}</select></label><label class="field">Track notes<textarea name="notes" maxlength="10000" placeholder="Lyrics, mix notes, things to try…">${e(t.notes)}</textarea></label><div class="settings-row"><span><strong>Track order</strong><small>Position ${siblings.indexOf(t)+1} of ${siblings.length}</small></span><span style="display:flex;gap:7px"><button type="button" class="btn" id="move-up" ${siblings.indexOf(t)===0?'disabled':''}>${icon('up')} Up</button><button type="button" class="btn" id="move-down" ${siblings.indexOf(t)===siblings.length-1?'disabled':''}>${icon('down')} Down</button></span></div><div class="modal-actions"><button class="icon-btn danger" type="button" id="delete-track" aria-label="Delete track">${icon('trash')}</button><button class="icon-btn" type="button" id="download-track" aria-label="Download track">${icon('download')}</button><button class="icon-btn ${t.favorite?'active-control':''}" type="button" id="modal-favorite" aria-label="Favorite track">${icon('heart')}</button><button class="btn" type="button" data-close style="margin-left:auto">Cancel</button><button class="btn primary" type="submit">Save changes</button></div></form>`);
 $('#track-form').onsubmit=async ev=>{ev.preventDefault();const f=new FormData(ev.target),name=String(f.get('name')).trim();if(!name){toast('Give your track a name.');return}const oldAlbum=t.albumId,newAlbum=String(f.get('albumId'));const ok=await mutate(()=>{if(newAlbum!==oldAlbum){t.order=Math.max(-1,...state.tracks.filter(x=>x.albumId===newAlbum).map(x=>x.order))+1;a.updatedAt=Date.now()}Object.assign(t,{name,albumId:newAlbum,status:f.get('status'),notes:f.get('notes')});albumFor(t).updatedAt=Date.now()});if(ok){closeModal();toast('Track updated.')}};
 async function move(delta){const i=siblings.indexOf(t),neighbor=siblings[i+delta];if(!neighbor)return;const ok=await mutate(()=>{siblings.forEach((track,i)=>track.order=i);[t.order,neighbor.order]=[neighbor.order,t.order];a.updatedAt=Date.now()});if(ok){trackEditor(id);toast('Track order updated.')}}
 $('#move-up').onclick=()=>move(-1);$('#move-down').onclick=()=>move(1);$('#download-track').onclick=()=>downloadTrack(t);$('#modal-favorite').onclick=async()=>{const ok=await mutate(()=>t.favorite=!t.favorite);if(ok)$('#modal-favorite')?.classList.toggle('active-control',t.favorite)};
 $('#delete-track').onclick=()=>{showModal('Delete this track?',`<p>“${e(t.name)}” will be permanently removed from this library.</p><div class="modal-actions"><button class="btn" data-close>Keep track</button><button class="btn danger" id="confirm-track-delete">Delete track</button></div>`);$('#confirm-track-delete').onclick=async()=>{const ok=await mutate(()=>{state.tracks=state.tracks.filter(x=>x.id!==id);a.updatedAt=Date.now()},[],[id]);if(ok){if(currentId===id)resetPlayer();revoke(id);queue=queue.filter(x=>x!==id);closeModal();toast('Track deleted.')}}}
}
function revoke(id){if(urls.has(id)){URL.revokeObjectURL(urls.get(id));urls.delete(id)}}
async function playTrack(id,ids=null){const t=state.tracks.find(t=>t.id===id);if(!t)return;if(ids)queue=ids.filter(x=>state.tracks.some(t=>t.id===x));if(!queue.includes(id))queue=tracksFor(albumFor(t)).map(x=>x.id);if(currentId===id&&audio.src){audio.paused?audio.play().catch(()=>toast('This audio format cannot be played in this browser.')):audio.pause();return}const generation=++playGeneration;currentId=id;try{if(!urls.has(id)){const blob=await blobFor(t);if(generation!==playGeneration)return;if(!blob)throw new Error('Audio file is missing. Restore a backup.');urls.set(id,URL.createObjectURL(blob))}if(generation!==playGeneration)return;audio.src=urls.get(id);audio.playbackRate=1;await audio.play();updatePlayerInfo();updateTrackRows()}catch(err){if(generation===playGeneration){toast(err.name==='NotSupportedError'?'This format is not supported. Download the file or try MP3/WAV.':`Playback failed: ${err.message}`);updatePlayerInfo()}}}
function playAlbum(id){const a=state.albums.find(a=>a.id===id),tracks=a?tracksFor(a):[];if(!tracks.length){toast('Add a track to this album first.');return}const ids=tracks.map(t=>t.id);if(currentId===ids[0]){queue=ids;if(audio.paused)audio.play().catch(()=>toast('Could not play this file.'));else audio.currentTime=0}else playTrack(ids[0],ids)}
function updatePlayerInfo(){const t=state.tracks.find(t=>t.id===currentId),a=t?albumFor(t):null;$('#player-title').textContent=t?.name||'Nothing playing';$('#player-album').textContent=a?`${a.name}${t.demo?' · Sample audio':''}`:'Select a track';renderMarkup($('#player-art'),a?`<img src="${e(coverOf(a))}" alt="">`:icon('wave'));$('#player-favorite').disabled=!t;$('#player-favorite').classList.toggle('active-control',!!t?.favorite);$('#player-favorite').setAttribute('aria-pressed',!!t?.favorite);renderMarkup($('#play-pause'),icon(audio.paused?'play':'pause'));$('#play-pause').setAttribute('aria-label',audio.paused?'Play':'Pause');$('#total-time').textContent=formatTime(audio.duration||t?.duration||0)}
function updateTrackRows(){if(view==='album'){const a=state.albums.find(a=>a.id===albumId);if(a&&$('#album-tracks'))renderMarkup($('#album-tracks'),trackTable(tracksFor(a)))}else if(view==='tracks'&&$('#results'))renderMarkup($('#results'),trackTable(matchingTracks(),true));else if(view==='favorites'&&$('#results'))renderLibraryResults()}
function resetPlayer(){playGeneration++;audio.pause();audio.removeAttribute('src');audio.load();currentId=null;$('#seek').value=0;$('#seek').style.setProperty('--progress','0%');$('#elapsed').textContent='0:00';updatePlayerInfo()}
function nextTrack(delta=1){if(!queue.length)return;const at=queue.indexOf(currentId);let next;if(shuffling&&delta>0&&queue.length>1){const choices=queue.filter(x=>x!==currentId);next=choices[Math.floor(Math.random()*choices.length)]}else next=queue[(at+delta+queue.length)%queue.length];if(next===currentId){audio.currentTime=0;audio.play().catch(()=>{})}else playTrack(next)}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
async function downloadTrack(t){try{const blob=await blobFor(t);if(!blob)throw new Error('File missing');downloadBlob(blob,t.filename||`${t.name}.wav`);toast('Track download started.')}catch(err){toast(`Download failed: ${err.message}`)}}
async function settings(){showModal('Settings',`<p>Export a backup to keep your music. Clearing browser data removes saved files.</p><div class="settings-row"><span><strong>${state.albums.length} albums · ${state.tracks.length} tracks</strong><small>${sizeLabel(state.tracks.reduce((n,t)=>n+t.size,0))} of uploaded audio</small></span>${icon('wave')}</div><div class="settings-row"><span><strong>Export a backup</strong><small>Albums, notes, artwork, and original audio</small></span><button class="btn" id="export-backup">${icon('download')} Export</button></div><div class="settings-row"><span><strong>Restore a backup</strong><small>Replaces this library with a .still backup</small></span><button class="btn" id="import-backup">${icon('upload')} Import</button></div><div class="settings-row"><span><strong>Sample projects</strong><small>Original 18-second ambient audio studies</small></span><button class="btn" id="remove-samples">Remove</button></div><div class="keyboard-help"><span><kbd>Space</kbd> play / pause</span><span><kbd>Esc</kbd> close dialog</span></div><div class="modal-actions"><button class="btn primary" data-close>Done</button></div>`);$('#export-backup').onclick=exportBackup;$('#import-backup').onclick=()=>$('#import-input').click();$('#remove-samples').onclick=()=>{const samples=state.albums.filter(a=>a.sample);if(!samples.length){toast('No sample projects to remove.');return}showModal('Remove sample projects?',`<p>This removes ${samples.length} sample albums and their tracks. Uploaded tracks added to sample albums will also be removed. Export a backup if you want to keep them.</p><div class="modal-actions"><button class="btn" data-close>Keep them</button><button class="btn danger" id="confirm-samples">Remove samples</button></div>`);$('#confirm-samples').onclick=async()=>{const ids=samples.map(a=>a.id),trackIds=state.tracks.filter(t=>ids.includes(t.albumId)).map(t=>t.id);const ok=await mutate(()=>{state.albums=state.albums.filter(a=>!ids.includes(a.id));state.tracks=state.tracks.filter(t=>!ids.includes(t.albumId))},[],trackIds);if(ok){if(trackIds.includes(currentId))resetPlayer();trackIds.forEach(revoke);queue=queue.filter(id=>!trackIds.includes(id));closeModal();navigate('library');toast('Samples removed.')}}}}
function blobToData(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(blob)})}
async function exportBackup(){if(busy){toast('Wait for the current operation to finish.');return}busy=true;const button=$('#export-backup');if(button)button.disabled=true;try{toast('Preparing your library backup…');const snapshot=structuredClone(state),files={};for(const t of snapshot.tracks.filter(t=>!t.demo)){const blob=await blobFor(t);if(!blob)throw new Error(`Missing audio: ${t.name}`);files[t.id]=await blobToData(blob)}downloadBlob(new Blob([JSON.stringify({format:'still-workspace',version:1,exportedAt:new Date().toISOString(),state:snapshot,files})],{type:'application/json'}),`still-backup-${new Date().toISOString().slice(0,10)}.still`);toast('Backup exported. Store it somewhere safe.')}catch(err){toast(`Backup failed: ${err.message}`)}finally{busy=false;if(button)button.disabled=false}}
function validatedBackup(data){
 if(data.format!=='still-workspace'||data.version!==1||!Array.isArray(data.state?.albums)||!Array.isArray(data.state?.tracks))throw new Error('This is not a valid still. backup.');
 const ids=new Set(),trackIds=new Set(),files=[];
 const albums=data.state.albums.map(a=>{if(typeof a.id!=='string'||ids.has(a.id)||typeof a.name!=='string'||!a.name.trim())throw new Error('Invalid album');ids.add(a.id);if(a.cover&&!/^assets\/(blue-hour|after-hours|soft-focus|fragments|sunday-tape|no-name)\.svg$/.test(a.cover)&&!/^data:image\/(png|jpeg|webp|gif);base64,/.test(a.cover))throw new Error('Invalid cover artwork');return{id:a.id,name:a.name.slice(0,80),description:String(a.description||'').slice(0,600),cover:a.cover||coverPath('no-name'),color:/^#[a-f\d]{6}$/i.test(a.color)?a.color:colors[0],status:['In progress','Ready','Archived'].includes(a.status)?a.status:'In progress',notes:String(a.notes||'').slice(0,100000),favorite:!!a.favorite,sample:!!a.sample,createdAt:Number(a.createdAt)||Date.now(),updatedAt:Number(a.updatedAt)||Date.now()}});
 const tracks=data.state.tracks.map(t=>{if(typeof t.id!=='string'||trackIds.has(t.id)||!ids.has(t.albumId)||typeof t.name!=='string')throw new Error('Invalid track');trackIds.add(t.id);if(!t.demo){const value=data.files?.[t.id];if(typeof value!=='string'||!/^data:[^;]*;base64,/.test(value))throw new Error(`Missing audio: ${t.name}`);const bytes=atob(value.slice(value.indexOf(',')+1));if(bytes.length>100*1024*1024)throw new Error('Audio exceeds 100 MB');const buffer=Uint8Array.from(bytes,c=>c.charCodeAt(0));files.push([t.id,new Blob([buffer],{type:String(t.type||'audio/mpeg')})])}return{id:t.id,albumId:t.albumId,name:t.name.slice(0,120),filename:String(t.filename||t.name+'.wav'),order:Number(t.order)||0,duration:Math.max(0,Number(t.duration)||0),size:t.demo?0:files.at(-1)[1].size,type:String(t.type||'audio/wav'),favorite:!!t.favorite,notes:String(t.notes||'').slice(0,10000),status:['Idea','Demo','Mix','Master'].includes(t.status)?t.status:'Demo',createdAt:Number(t.createdAt)||Date.now(),demo:!!t.demo,seed:Math.max(1,Math.min(100,Math.floor(Number(t.seed)||1)))}});
 return {state:{albums,tracks},files};
}
async function importBackup(file){if(!file)return;if(file.size>500*1024*1024){toast('Backup is too large (500 MB limit).');return}if(busy){toast('Wait for the current operation to finish.');return}try{const backup=validatedBackup(JSON.parse(await file.text()));showModal('Replace this library?',`<p>Restore ${backup.state.albums.length} albums and ${backup.state.tracks.length} tracks. Your current library will be replaced.</p><div class="trash-description">Export your current library first if you want to keep it. Restoring replaces the files saved on this device.</div><div class="modal-actions"><button class="btn" data-close>Cancel</button><button class="btn primary" id="confirm-import">Restore backup</button></div>`);$('#confirm-import').onclick=async()=>{busy=true;$('#confirm-import').disabled=true;try{const old=state.tracks.map(t=>t.id).filter(id=>!backup.state.tracks.some(t=>t.id===id));const ok=await mutate(()=>state=backup.state,backup.files,old);if(ok){resetPlayer();urls.forEach(url=>URL.revokeObjectURL(url));urls.clear();queue=[];closeModal();navigate('library');toast('Backup restored.')}}finally{busy=false;$('#confirm-import')?.removeAttribute('disabled')}}}catch(err){toast(`Cannot restore: ${err.message}`)}}
function showQueue(){const items=queue.map(id=>state.tracks.find(t=>t.id===id)).filter(Boolean);showModal('Queue',`<p>${items.length?'Upcoming tracks.':'Choose an album or a track to start a session.'}</p>${items.map(t=>`<button class="queue-item ${t.id===currentId?'active':''}" data-queue-track="${e(t.id)}">${icon(t.id===currentId&&!audio.paused?'wave':'play')}<span>${e(t.name)}</span><small>${formatTime(t.duration)}</small></button>`).join('')}<div class="modal-actions"><button class="btn" data-close>Close</button></div>`)}

// One delegated click handler keeps controls working after library updates.
document.addEventListener('click',async ev=>{
 const target=ev.target.closest('button,[data-play-album],tr[data-track]');
 if(!target)return;
 if(target.hasAttribute('data-close')){closeModal();return}
 if(target.dataset.playAlbum){ev.stopPropagation();playAlbum(target.dataset.playAlbum);return}
 if(target.dataset.album){navigate('album',target.dataset.album);return}
 if(target.dataset.view){navigate(target.dataset.view);return}
 if(target.dataset.filter){filter=target.dataset.filter;render();return}
 if(target.dataset.layout){layout=target.dataset.layout;renderLibraryResults();document.querySelectorAll('[data-layout]').forEach(b=>b.classList.toggle('selected',b.dataset.layout===layout));return}
 if(target.dataset.favAlbum){const a=state.albums.find(a=>a.id===target.dataset.favAlbum);if(a)await mutate(()=>a.favorite=!a.favorite);return}
 if(target.dataset.favTrack){const t=state.tracks.find(t=>t.id===target.dataset.favTrack);if(t)await mutate(()=>t.favorite=!t.favorite);return}
 if(target.dataset.editAlbum){albumEditor(target.dataset.editAlbum);return}
 if(target.dataset.editTrack){trackEditor(target.dataset.editTrack);return}
 if(target.dataset.queueTrack){playTrack(target.dataset.queueTrack);closeModal();return}
 if(target.dataset.track){const ids=[...document.querySelectorAll('tr[data-track]')].map(tr=>tr.dataset.track);playTrack(target.dataset.track,ids);return}
 if(target.dataset.action==='create')albumEditor();
 if(target.dataset.action==='upload')uploadDialog();
 if(target.dataset.action==='back')navigate('library');
});

$('#sidebar-create').onclick=()=>albumEditor();
$('#settings-btn').onclick=settings;
$('#profile-top').onclick=settings;
$('#mobile-menu').onclick=()=>{
  if(window.innerWidth > 768){
    $('.app-shell').classList.toggle('sidebar-collapsed');
  } else {
    $('.sidebar').classList.toggle('open');
  }
};
$('#sidebar-close')?.addEventListener('click',()=>$('.sidebar').classList.remove('open'));
$('#notifications-top')?.addEventListener('click',()=>toast('No new notifications · Library up to date'));
$('#search-top-btn')?.addEventListener('click',()=>{
  const s=$('#search');
  if(s){ s.focus(); } else { navigate('library'); setTimeout(()=>$('#search')?.focus(),60); }
});
$('#share-link-top')?.addEventListener('click',()=>{
  if(navigator.clipboard){
    navigator.clipboard.writeText(window.location.href).catch(()=>{});
    toast('Project link copied to clipboard');
  } else {
    toast('Sharing link: ' + window.location.href);
  }
});

$('#audio-input').onchange=ev=>processFiles(ev.target.files,uploadTarget);
$('#cover-input').onchange=async ev=>{const file=ev.target.files[0];if(file){if(!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type)){toast('Use a JPG, PNG, WebP, or GIF image.');return}if(file.size>10*1024*1024){toast('Artwork must be under 10 MB.');return}try{const bitmap=await createImageBitmap(file),canvas=document.createElement('canvas');const scale=Math.min(1,1000/Math.max(bitmap.width,bitmap.height));canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();coverTarget?.(canvas.toDataURL('image/jpeg',.85),file.name)}catch{toast('Could not read this image. Try a JPG or PNG.')}}ev.target.value=''};
$('#import-input').onchange=ev=>{importBackup(ev.target.files[0]);ev.target.value=''};
$('#play-pause').onclick=()=>{if(currentId){audio.paused?audio.play().catch(()=>toast('Unable to play this file.')):audio.pause()}else if(state.tracks.length)playTrack(state.tracks[0].id,tracksFor(albumFor(state.tracks[0])).map(t=>t.id));else toast('Upload a track to start listening.')};
$('#next').onclick=()=>nextTrack();
$('#previous').onclick=()=>{if(audio.currentTime>3)audio.currentTime=0;else nextTrack(-1)};
$('#shuffle').onclick=()=>{shuffling=!shuffling;$('#shuffle').classList.toggle('active-control',shuffling);$('#shuffle').setAttribute('aria-pressed',shuffling)};
$('#repeat').onclick=()=>{repeating=!repeating;audio.loop=repeating;$('#repeat').classList.toggle('active-control',repeating);$('#repeat').setAttribute('aria-pressed',repeating)};
$('#queue-btn').onclick=showQueue;
$('#player-favorite').onclick=async()=>{const t=state.tracks.find(t=>t.id===currentId);if(t)await mutate(()=>t.favorite=!t.favorite)};
audio.volume=.7;$('#volume').style.setProperty('--progress','70%');
$('#volume').oninput=ev=>{audio.volume=Number(ev.target.value);audio.muted=false;ev.target.style.setProperty('--progress',`${audio.volume*100}%`);renderMarkup($('#mute'),icon(audio.volume===0?'mute':'volume'));};
$('#mute').onclick=()=>{audio.muted=!audio.muted;renderMarkup($('#mute'),icon(audio.muted?'mute':'volume'));$('#mute').setAttribute('aria-label',audio.muted?'Unmute':'Mute')};
$('#seek').oninput=ev=>{if(Number.isFinite(audio.duration))audio.currentTime=Number(ev.target.value)/1000*audio.duration};
audio.ontimeupdate=()=>{const duration=audio.duration||0;$('#elapsed').textContent=formatTime(audio.currentTime);$('#seek').value=duration?audio.currentTime/duration*1000:0;$('#seek').style.setProperty('--progress',duration?`${audio.currentTime/duration*100}%`:'0%')};
audio.onloadedmetadata=updatePlayerInfo;audio.onplay=()=>{updatePlayerInfo();updateTrackRows()};audio.onpause=()=>{updatePlayerInfo();updateTrackRows()};audio.onended=()=>{if(!repeating){const at=queue.indexOf(currentId);if(shuffling||at<queue.length-1)nextTrack();else updatePlayerInfo()}};
audio.onerror=()=>{if(audio.getAttribute('src'))toast('This audio could not be played. Try MP3 or WAV, or download the original.')};
modal.addEventListener('click',ev=>{if(ev.target===modal){const r=modal.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)closeModal()}});
window.addEventListener('hashchange',fromHash);
document.addEventListener('keydown',ev=>{if(ev.code==='Space'&&!modal.open&&!['INPUT','TEXTAREA','SELECT','BUTTON','A'].includes(document.activeElement.tagName)&&!ev.ctrlKey&&!ev.metaKey){ev.preventDefault();$('#play-pause').click()}});
let dragDepth=0;
window.addEventListener('dragenter',ev=>{if(ev.dataTransfer.types.includes('Files')){ev.preventDefault();dragDepth++;$('#drop-overlay').classList.add('visible')}});
window.addEventListener('dragleave',()=>{dragDepth--;if(dragDepth<=0){dragDepth=0;$('#drop-overlay').classList.remove('visible')}});
window.addEventListener('dragover',ev=>{if(ev.dataTransfer.types.includes('Files'))ev.preventDefault()});
window.addEventListener('drop',ev=>{if(!ev.dataTransfer.files.length)return;ev.preventDefault();dragDepth=0;$('#drop-overlay').classList.remove('visible');if(ev.defaultPrevented&&ev.target.closest('#browse-audio'))return;const target=$('#upload-album')?.value||(view==='album'?albumId:null)||state.albums[0]?.id||'new';processFiles(ev.dataTransfer.files,target)});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&db){clearTimeout(noteTimer);persist().catch(()=>{})}});
window.addEventListener('beforeunload',()=>{clearTimeout(noteTimer);if(db)persist().catch(()=>{})});
async function init(){hydrateIcons();renderMarkup($('#main'),'<div class="loading">Loading…</div>');try{db=await openDB();const saved=await makeRequest(db.transaction('data').objectStore('data').get('workspace'));if(saved)state=saved;else{seedState();await persist()}}catch(err){storageError=true;toast(`Storage unavailable: ${err.message}`)}fromHash()}
init();
