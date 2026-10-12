import {saveSettings} from '../shared/storage.js';
export function renderSettings(host,{state,render,navigate}){
 const s=state.settings;
 host.innerHTML=`<div class="eyebrow">PREFERENCES</div><h1>Settings</h1><p>ゲーム操作と表示設定。保存内容はこのブラウザに保持されます。</p><section class="panel" style="max-width:720px"><div class="field"><label for="lanes">レーン数</label><select id="lanes">${[6,8,10,12,16,20].map(n=>`<option value="${n}" ${s.lanes===n?'selected':''}>${n} lanes</option>`).join('')}</select></div><div class="field"><label for="speed">ノーツ速度 <b id="speedValue">${Number(s.noteSpeed).toFixed(2)}x</b></label><input id="speed" type="range" min=".6" max="2.4" step=".05" value="${s.noteSpeed}"></div><div class="field"><label><input id="music" type="checkbox" ${s.music?'checked':''}> 楽曲音声を再生する</label></div><div class="row"><button class="primary" id="save">設定を保存</button><button id="back">楽曲選択に戻る</button></div></section>`;
 host.querySelector('#speed').oninput=e=>host.querySelector('#speedValue').textContent=Number(e.target.value).toFixed(2)+'x';
 host.querySelector('#save').onclick=()=>{s.lanes=Number(host.querySelector('#lanes').value);s.noteSpeed=Number(host.querySelector('#speed').value);s.music=host.querySelector('#music').checked;saveSettings(s);render()};
 host.querySelector('#back').onclick=()=>navigate('game','select');
}
