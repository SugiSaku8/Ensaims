import { renderGame } from './game/screens.js';
import { renderPlay } from './game/play.js';
import { renderEditor } from './editor/screens.js';
import { renderSettings } from './game/settings.js';
import { loadSettings } from './shared/storage.js';

const app=document.querySelector('#app');
const state={screen:'game',subscreen:'select',settings:loadSettings(),selectedSong:0,editorMode:'main'};
const songs=[{id:'scales',title:'Scales',artist:'Ensaims Lab',bpm:'160 → 140 → 180 → 120',level:'MASTER',notes:0,duration:'~1:00',kind:'generated'}];
let cleanupCurrent=()=>{};
function navigate(screen,subscreen='main'){cleanupCurrent();cleanupCurrent=()=>{};state.screen=screen;state.subscreen=subscreen;if(screen==='editor')state.editorMode=subscreen==='test'?'test':'main';render()}
function render(){
 app.innerHTML='';const shell=document.createElement('div');shell.className='shell';
 shell.innerHTML=`<header class="topbar"><div><div class="brand">EN<span>SAIMS</span></div><div class="sub">RHYTHM SYSTEM / MODULAR BUILD</div></div><nav class="nav"><button data-nav="game" class="${state.screen==='game'?'active':''}">ゲーム本体</button><button data-nav="editor" class="${state.screen==='editor'?'active':''}">譜面作成</button><button data-nav="settings" class="${state.screen==='settings'?'active':''}">設定</button></nav></header><main id="screen"></main><div class="footer">ENSaims · modular prototype · Scales / B♭ major · 4/4 · tempo changes every 8 bars</div>`;
 app.append(shell);shell.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav,b.dataset.nav==='game'?'select':'main'));
 const host=shell.querySelector('#screen');
 if(state.screen==='game'&&state.subscreen==='play')cleanupCurrent=renderPlay(host,{state,song:songs[state.selectedSong],navigate});
 else if(state.screen==='game')renderGame(host,{state,songs,navigate});
 else if(state.screen==='editor')cleanupCurrent=renderEditor(host,{state,navigate,render});
 else renderSettings(host,{state,render,navigate});
}
render();
