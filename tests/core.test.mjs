import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {webcrypto} from 'node:crypto';
const source=await readFile(new URL('../app.js',import.meta.url),'utf8');
// Load pure core functions without starting the browser UI or registering events.
const pure=source.slice(0,source.indexOf('// One delegated click handler'));
const context=vm.createContext({Blob,DataView,ArrayBuffer,Uint8Array,crypto:webcrypto,structuredClone,atob,setTimeout,clearTimeout,URL,console,document:{querySelector:()=>({}),querySelectorAll:()=>[]}});
vm.runInContext(pure,context);
const run=code=>vm.runInContext(code,context);
test('generated samples are valid mono PCM WAVs with the declared duration',async()=>{const blob=run('demoAudio(2)'),v=new DataView(await blob.arrayBuffer());assert.equal(blob.type,'audio/wav');assert.equal(v.getUint32(24,true),22050);assert.equal(v.getUint16(22,true),1);assert.equal(v.getUint32(40,true),22050*18*2);assert.equal(v.byteLength,44+22050*18*2);let peak=0;for(let i=44;i<v.byteLength;i+=2)peak=Math.max(peak,Math.abs(v.getInt16(i,true)));assert.ok(peak>1000&&peak<32767,'sample has audible, unclipped content')});
test('user text is escaped before interpolation into markup',()=>{context.userText="<script>\"&'</script>";assert.equal(run('e(userText)'),'&lt;script&gt;&quot;&amp;&#39;&lt;/script&gt;')});
test('time formatting handles unknown durations',()=>{assert.equal(run('formatTime(NaN)'),'0:00');assert.equal(run('formatTime(185.8)'),'3:05')});
test('sample seed creates correctly ordered tracks belonging to real albums',()=>{run('state={albums:[],tracks:[]};seedState()');assert.equal(run('state.albums.length'),6);assert.equal(run('state.tracks.length'),15);assert.equal(run('state.tracks.every(t=>state.albums.some(a=>a.id===t.albumId))'),true);assert.equal(run('durationFor(state.albums[0])'),72);assert.equal(run('tracksFor(state.albums[0]).map(t=>t.order).join()'),'0,1,2,3')});
test('backup validator rejects missing audio, duplicate ids, and remote artwork',()=>{run(`globalThis.backup={format:'still-workspace',version:1,state:structuredClone(state),files:{}}`);assert.equal(run('validatedBackup(backup).state.tracks.length'),15);run('backup.state.albums[0].cover="https://untrusted.example/cover.svg"');assert.throws(()=>run('validatedBackup(backup)'),/Invalid cover artwork/);run('backup.state=structuredClone(state);backup.state.albums.push({...backup.state.albums[0]})');assert.throws(()=>run('validatedBackup(backup)'),/Invalid album/);run('backup.state=structuredClone(state);backup.state.tracks[0].demo=false');assert.throws(()=>run('validatedBackup(backup)'),/Missing audio/)});
test('backup import reconstructs real uploaded audio bytes and metadata',()=>{run(`backup.state=structuredClone(state);backup.state.tracks[0].demo=false;backup.files[backup.state.tracks[0].id]='data:audio/wav;base64,AQIDBA==';globalThis.restored=validatedBackup(backup)`);assert.equal(run('restored.files.length'),1);assert.equal(run('restored.files[0][1].size'),4);assert.equal(run('restored.state.tracks[0].size'),4);assert.equal(run('restored.state.tracks[0].demo'),false)});
