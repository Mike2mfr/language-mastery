// ===== Leçons =====
const LESSONS = [
{t:'Lire et prononcer', b:`
<p>Le wolof s'écrit avec l'alphabet latin, mais certaines lettres ne se lisent pas comme en français. Chaque lettre se prononce : il n'y a pas de lettre muette.</p>
<table><tr><th>Lettre</th><th>Se dit</th><th>Exemple</th></tr>
<tr><td>c</td><td>tch</td><td>ceeb (riz)</td></tr>
<tr><td>j</td><td>dj</td><td>jabar (épouse)</td></tr>
<tr><td>x</td><td>kh, comme la jota espagnole</td><td>xorom (sel)</td></tr>
<tr><td>ñ</td><td>gn de « campagne »</td><td>ñaar (deux)</td></tr>
<tr><td>ŋ</td><td>ng de « ding-dong »</td><td>kereyoŋ (crayon)</td></tr>
<tr><td>u</td><td>ou</td><td>suba (matin)</td></tr>
<tr><td>ë</td><td>eu de « bœufs »</td><td>bët (œil)</td></tr>
<tr><td>e / é</td><td>è ouvert / é fermé</td><td>dem / dégg</td></tr>
<tr><td>ó</td><td>ô fermé et court</td><td>góor (homme)</td></tr>
<tr><td>g</td><td>toujours dur : gu</td><td>gis (voir)</td></tr>
<tr><td>s</td><td>toujours ss</td><td>yaasa</td></tr></table>
<p><b>Voyelle doublée = voyelle longue.</b> La durée change le sens : <i>set</i> (être propre) / <i>seet</i> (regarder).</p>
<p><b>Consonne doublée = consonne appuyée</b> : <i>bët</i> (œil) / <i>bëtt</i> (trouer).</p>
<p><b>mb, nd, ng, nj</b> forment un seul son : on dit « ndokh », jamais « èn-dokh ».</p>`},
{t:'Les pronoms', b:`
<table><tr><th></th><th>Sujet</th><th>Tonique</th><th>Complément</th></tr>
<tr><td>je</td><td>ma</td><td>man</td><td>ma</td></tr>
<tr><td>tu</td><td>nga</td><td>yow</td><td>la</td></tr>
<tr><td>il/elle</td><td>mu</td><td>moom</td><td>ko</td></tr>
<tr><td>nous</td><td>nu</td><td>nun</td><td>nu</td></tr>
<tr><td>vous</td><td>ngeen</td><td>yeen</td><td>leen</td></tr>
<tr><td>ils/elles</td><td>ñu</td><td>ñoom</td><td>leen</td></tr></table>
<p>Il n'y a <b>pas de vouvoiement</b> : on tutoie tout le monde, même un inconnu ou un aîné. <i>Yeen</i> désigne toujours plusieurs personnes.</p>
<p>Pas de masculin ni de féminin : <i>moom</i> veut dire « lui » comme « elle ».</p>`},
{t:'Le nom et l\'article', b:`
<p>L'article se place <b>après</b> le nom. Il commence par une consonne de « classe » qui dépend du mot, puis <b>-i</b> (proche) ou <b>-a</b> (éloigné).</p>
<ul><li><i>xale bi</i> : l'enfant (ici) · <i>xale ba</i> : l'enfant (là-bas)</li>
<li><i>kër gi</i> : la maison · <i>ndox mi</i> : l'eau · <i>fas wi</i> : le cheval</li>
<li>Pluriel : <i>xale yi</i>, les enfants ; pour les personnes parfois <i>ñi</i> : <i>nit ñi</i>, les gens</li></ul>
<p>Les classes au singulier : b, g, j, k, l, m, s, w. La plus fréquente est <b>b</b> ; les mots empruntés prennent presque toujours <i>bi</i>.</p>
<p><b>Démonstratifs :</b> <i>xale bii</i> (cet enfant-ci), <i>xale bale</i> (cet enfant-là), <i>xale boobu</i> (cet enfant près de toi).</p>
<p><b>Indéfini :</b> <i>benn xale</i> (un enfant), <i>ay xale</i> (des enfants).</p>`},
{t:'Conjuguer : la marque bouge, pas le verbe', b:`
<p>Le verbe wolof ne change presque jamais. C'est une petite marque à côté qui porte la personne et le sens. Avec <i>lekk</i> (manger) :</p>
<table><tr><th>Forme</th><th>Exemple</th><th>Sens</th></tr>
<tr><td>Présentatif</td><td>maa ngi lekk</td><td>je suis en train de manger</td></tr>
<tr><td>Accompli</td><td>lekk naa</td><td>j'ai mangé</td></tr>
<tr><td>Explicatif</td><td>dama lekk</td><td>(c'est que) j'ai mangé</td></tr>
<tr><td>Inaccompli</td><td>damay lekk</td><td>je mange, je vais manger</td></tr>
<tr><td>Futur</td><td>dinaa lekk</td><td>je mangerai</td></tr>
<tr><td>Passé</td><td>lekkoon naa</td><td>j'avais mangé</td></tr></table>
<p>Le <b>-y</b> (damay, laay, ngay) marque une action en cours, habituelle ou à venir.</p>
<p>Les adjectifs sont des verbes : <i>sonn naa</i> = je suis fatigué ; <i>dafa tàng</i> = il fait chaud.</p>
<p>Accompli complet : lekk naa, lekk nga, lekk na, lekk nanu, lekk ngeen, lekk nañu.</p>`},
{t:'La négation', b:`
<p>On ajoute <b>-ul</b> au verbe. Devant un pronom, le <i>l</i> tombe :</p>
<p><i>lekkuma, lekkuloo, lekkul, lekkunu, lekkuleen, lekkuñu</i> : je n'ai pas mangé…</p>
<p>Après une voyelle, on glisse un <b>w</b> : <i>sori</i> → <i>soriwul</i> (ce n'est pas loin).</p>
<p><b>Futur négatif :</b> <i>duma dem</i> (je n'irai pas), doo, du, dunu, dungeen, duñu.</p>
<p><b>Du + nom</b> = ne pas être : <i>duma turist</i>, je ne suis pas touriste.</p>
<p><b>Défense :</b> <i>bul dem!</i> ne pars pas ! · <i>buleen dem!</i> ne partez pas !</p>`},
{t:'Mettre un mot en avant', b:`
<p>En wolof, on place en tête ce qui est important, avec une marque qui dit quoi :</p>
<ul><li><b>Le complément</b> avec <i>laa</i> : <i>Ceeb laa lekk</i>, c'est du riz que j'ai mangé. <i>Maam laa tudd</i>, je m'appelle Maam.</li>
<li><b>Le sujet</b> avec <i>maa / yaa / moo / noo / yeena / ñoo</i> : <i>Maa lekk</i>, c'est moi qui ai mangé. <i>Kan moo ñów?</i> qui est venu ?</li>
<li><b>Le verbe</b> avec <i>na</i> : <i>Lekk naa</i>, j'ai (bien) mangé.</li>
<li><b>L'explication</b> avec <i>dafa</i> : <i>Dama sonn</i>, (c'est que) je suis fatigué.</li></ul>
<p>Les questions utilisent la même logique : <i>Lan nga lekk?</i> qu'as-tu mangé ? <i>Fan nga dëkk?</i> où habites-tu ?</p>`},
{t:'Les suffixes utiles', b:`
<p>Le wolof colle des petits morceaux au verbe pour en changer le sens :</p>
<table><tr><th>Suffixe</th><th>Sens</th><th>Exemple</th></tr>
<tr><td>-al</td><td>impératif</td><td>lekkal! mange !</td></tr>
<tr><td>-leen</td><td>impératif pluriel</td><td>lekkleen! mangez !</td></tr>
<tr><td>-oon</td><td>passé, politesse</td><td>dama bëggoon… je voudrais…</td></tr>
<tr><td>-aat</td><td>encore, de nouveau</td><td>waxaatal! redis-le !</td></tr>
<tr><td>-i</td><td>aller faire</td><td>lekki, aller manger</td></tr>
<tr><td>-si</td><td>venir faire</td><td>lekksi, venir manger</td></tr>
<tr><td>-u</td><td>se (pronominal)</td><td>sangu, se laver</td></tr>
<tr><td>-agul</td><td>pas encore</td><td>demaguma, je ne suis pas encore parti</td></tr></table>
<p>Exemple d'empilement : <i>amatuma ndox</i> = am (avoir) + at (encore) + u (pas) + ma (je) → je n'ai plus d'eau.</p>`},
{t:'Possessifs', b:`
<table><tr><th>Un objet</th><th>Plusieurs</th><th></th></tr>
<tr><td>sama kër</td><td>samay kër</td><td>ma / mes maisons</td></tr>
<tr><td>sa kër</td><td>say kër</td><td>ta / tes</td></tr>
<tr><td>këram</td><td>ay këram</td><td>sa / ses (suffixe -am)</td></tr>
<tr><td>sunu kër</td><td>sunuy kër</td><td>notre / nos</td></tr>
<tr><td>seen kër</td><td>seeni kër</td><td>votre, leur</td></tr></table>
<p>Pour « de », on ajoute <b>-u</b> au premier nom : <i>xaritu Fanta</i>, l'ami de Fanta ; <i>ceebu jën</i>, riz au poisson.</p>`},
{t:'Compter et payer', b:`
<p>Le système est en base 5 puis 10 : <i>juróom</i> (5), <i>juróom benn</i> (5+1 = 6), <i>fukk</i> (10), <i>ñaar fukk</i> (20).</p>
<p>Devant un nom, le nombre prend <b>-i</b> : <i>ñaari doom</i>, deux enfants ; <i>ñetti xar</i>, trois moutons.</p>
<p><b>Au marché</b>, on compte souvent en <i>dërëm</i>, une unité de 5 francs CFA. Pour convertir, on divise le prix en francs par 5 : 1 000 F = <i>ñaari téeméer</i> (200 dërëm). Si le vendeur dit « téeméer », il veut dire 500 F, pas 100 F.</p>`},
{t:'Les salutations, un rituel', b:`
<p>Saluer prend du temps, et c'est voulu : on montre sa considération. Après <i>Salaamaalekum</i>, on enchaîne les questions sur la personne, puis la famille, le travail, les enfants. La réponse reste presque toujours positive : <i>jàmm rekk</i>, <i>maa ngi fi rekk</i>, <i>alxamdulilaay</i>.</p>
<p>Utiliser le <b>nom de famille</b> de la personne rend la salutation plus chaleureuse.</p>
<p><i>Ngoon</i> commence après le déjeuner et <i>guddi</i> au crépuscule : « bonsoir » se dit donc <i>jàmm nga yendu</i> dès l'après-midi.</p>
<p>Pour refuser poliment un service, on évite un « déedéet » sec : <i>Fi ma tollu, mënuma ko</i> (en ce moment, je ne peux pas).</p>`}
];

// ===== Utilitaires =====
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const MIN = 60000, DAY = 86400000;
function hash(s){let h=5381;for(const c of s)h=((h<<5)+h+c.codePointAt(0))|0;return (h>>>0).toString(36)}
function dayStart(t=Date.now()){const d=new Date(t);if(d.getHours()<4)d.setDate(d.getDate()-1);d.setHours(4,0,0,0);return d.getTime()}
function dayKey(t=Date.now()){const d=new Date(dayStart(t));return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}

// Prononciation approximative pour lecteur francophone
const PR = [['aa','â'],['àa','â'],['ee','èè'],['ée','é'],['éé','é'],['ii','î'],['oo','ô'],['óo','ô'],['uu','oû'],['ëë','eu'],['c','tch'],['j','dj'],['x','kh'],['ñ','gn'],['ŋ','ng'],['q','kk'],['ë','eu'],['u','ou'],['à','a'],['ó','ô'],['e','è'],['s','s']];
function autoPron(w){
  const s = w.toLowerCase(); let out='';
  for(let i=0;i<s.length;){
    if(s[i]==='g' && /[eiéëè]/.test(s[i+1]||'')){out+='gu';i++;continue}
    let hit=null; for(const [k,v] of PR){ if(s.startsWith(k,i)){hit=[k,v];break} }
    if(hit){out+=hit[1];i+=hit[0].length}else{out+=s[i];i++}
  }
  return out.charAt(0).toUpperCase()+out.slice(1);
}
function norm(s){return s.toLowerCase().replace(/ŋ/g,'ng').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let i=1;i<=m;i++){let c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}

// ===== Cartes =====
const CARDS = {}; const DECK_CARDS = {};
for(const d of DECKS){
  DECK_CARDS[d.id]=[];
  for(const line of d.rows.trim().split('\n')){
    const [w,f,n,p] = line.split('|').map(x=>(x||'').trim());
    const id = d.id+'.'+hash(w);
    CARDS[id] = {id, deck:d.id, w, f, n, p: p || autoPron(w), given: !!p};
    DECK_CARDS[d.id].push(id);
  }
}
const DECK = Object.fromEntries(DECKS.map(d=>[d.id,d]));
const TOTAL = Object.keys(CARDS).length;

// ===== État =====
const LS_KEY = 'wolof-progress-v1';
const DEFAULT_SETTINGS = {newPerDay:10, goal:40, sessionSize:30, typing:true, pron:true, prod:true, active:['salut','conge','pres','nombres']};
function freshState(){return {v:1, items:{}, log:{}, newDay:{d:'',n:0}, settings:{...DEFAULT_SETTINGS}, created:Date.now(), updated:0}}
function hydrate(o){const s=freshState();if(o&&typeof o==='object'){Object.assign(s,o);s.settings={...DEFAULT_SETTINGS,...(o.settings||{})};s.items=o.items||{};s.log=o.log||{};s.newDay=o.newDay||{d:'',n:0}}s.settings.active=(s.settings.active||[]).filter(id=>DECK[id]);return s}
let S;
try{S=hydrate(JSON.parse(localStorage.getItem(LS_KEY)||'null'))}catch(e){S=freshState()}

// item: [stage, due, ivl, ease, reps, lapses, step]  stage: 0 new(débloquée) 1 apprentissage 2 révision 3 réapprentissage
function itemKey(id,dir){return id+'|'+dir}
function getItem(k){const a=S.items[k];return a?{s:a[0],due:a[1],ivl:a[2],ease:a[3]/100,reps:a[4],lapses:a[5],step:a[6]}:null}
function putItem(k,it){S.items[k]=[it.s,Math.round(it.due),it.ivl,Math.round(it.ease*100),it.reps,it.lapses,it.step]}
function newItem(){return {s:0,due:0,ivl:0,ease:2.5,reps:0,lapses:0,step:0}}
const STEPS=[1,10];
function schedule(it0, g, now=Date.now()){
  const it={...it0}; it.reps++;
  const reviewDue = ivl => dayStart(now)+ivl*DAY;
  if(it.s===0||it.s===1){
    if(g===0){it.s=1;it.step=0;it.due=now+STEPS[0]*MIN}
    else if(g===1){it.s=1;it.due=now+(it.step===0?6:STEPS[it.step])*MIN}
    else if(g===2){it.step++; if(it.step>=STEPS.length){it.s=2;it.ivl=1;it.due=reviewDue(1)} else {it.s=1;it.due=now+STEPS[it.step]*MIN}}
    else {it.s=2;it.ivl=4;it.due=reviewDue(4)}
  } else if(it.s===3){
    if(g<=1){it.due=now+10*MIN}
    else {it.s=2;it.due=reviewDue(it.ivl+(g===3?1:0))}
  } else {
    if(g===0){it.lapses++;it.ease=Math.max(1.3,it.ease-.2);it.ivl=Math.max(1,Math.round(it.ivl*.3));it.s=3;it.due=now+10*MIN}
    else if(g===1){it.ease=Math.max(1.3,it.ease-.15);it.ivl=Math.max(it.ivl+1,Math.round(it.ivl*1.2));it.due=reviewDue(it.ivl)}
    else if(g===2){it.ivl=Math.max(it.ivl+1,Math.round(it.ivl*it.ease));it.due=reviewDue(it.ivl)}
    else {it.ease+=.15;it.ivl=Math.max(it.ivl+2,Math.round(it.ivl*it.ease*1.3));it.due=reviewDue(it.ivl)}
  }
  return it;
}
function fmtIvl(it, now=Date.now()){
  const d=it.due-now; if(d<60*MIN) return Math.max(1,Math.round(d/MIN))+' min';
  if(it.s===2) return it.ivl<31? it.ivl+' j' : it.ivl<365? Math.round(it.ivl/30)+' mois' : (it.ivl/365).toFixed(1).replace('.',',')+' an';
  return Math.round(d/3600000)+' h';
}

function todayLog(){const k=dayKey();return S.log[k]||(S.log[k]={r:0,c:0,n:0,t:0,q:0})}
function newToday(){return S.newDay.d===dayKey()?S.newDay.n:0}
function bumpNew(){if(S.newDay.d!==dayKey())S.newDay={d:dayKey(),n:0};S.newDay.n++}

// ===== Sauvegarde sur l'appareil + export / import =====
const APP_VERSION='1.0.0';
function saveLocal(){try{localStorage.setItem(LS_KEY,JSON.stringify(S));return true}catch(e){toast('Impossible d\'enregistrer : exporte ta progression dans Progrès > Sauvegarde');return false}}
function touch(){S.updated=Date.now();saveLocal()}
function setSync(){const el=$('#sync');if(!el)return;const off=!navigator.onLine;el.textContent=off?'Hors ligne · tout fonctionne':'Enregistré sur cet appareil';el.dataset.s=off?'busy':'ok'}
async function initStorage(){
  // Demande au navigateur de ne pas effacer les données de l'app quand l'espace manque
  try{if(navigator.storage&&navigator.storage.persist&&!(await navigator.storage.persisted()))await navigator.storage.persist()}catch(e){}
  setSync();
}
window.addEventListener('online',setSync);window.addEventListener('offline',setSync);
function hasProgress(){return Object.keys(S.items).length>0}
function backupName(){return 'jang-wolof-sauvegarde-'+dayKey()+'.json'}
function backupBlob(){return new Blob([JSON.stringify({app:'jang-wolof',version:APP_VERSION,exported:new Date().toISOString(),...S})],{type:'application/json'})}
function markExported(){S.lastExport=Date.now();saveLocal()}
function exportBackup(){
  const a=document.createElement('a');a.href=URL.createObjectURL(backupBlob());a.download=backupName();
  document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},2000);
  markExported();toast('Sauvegarde téléchargée : '+backupName());renderAll();
}
function canShareFile(){try{return !!(navigator.canShare&&navigator.canShare({files:[new File(['{}'],'t.json',{type:'application/json'})]}))}catch(e){return false}}
async function shareBackup(){
  const f=new File([backupBlob()],backupName(),{type:'application/json'});
  try{await navigator.share({files:[f],title:'Sauvegarde Jàng Wolof'});markExported();toast('Sauvegarde partagée');renderAll()}
  catch(e){if(e&&e.name==='AbortError')return;exportBackup()}
}
function lastExportText(){
  if(!S.lastExport)return 'Aucune sauvegarde exportée pour l\'instant.';
  const d=Math.floor((Date.now()-S.lastExport)/DAY);
  return 'Dernière sauvegarde : '+(d===0?'aujourd\'hui':d===1?'hier':'il y a '+d+' jours')+'.';
}
function importBackup(file, after){
  const r=new FileReader();
  r.onload=()=>{
    let o; try{o=JSON.parse(r.result);if(!o||typeof o.items!=='object')throw 0}catch(_){toast('Fichier invalide : choisis une sauvegarde de Jàng Wolof (.json)');return}
    const n=Object.keys(o.items).filter(k=>k.endsWith('|r')).length;
    const when=o.exported?new Date(o.exported).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}):'date inconnue';
    openSheet(`<h2 class="title">Restaurer cette sauvegarde ?</h2><p>Sauvegarde du <b>${esc(when)}</b> avec <b>${n}</b> mots étudiés.</p><p class="muted">Ta progression actuelle sur cet appareil sera remplacée.</p>
      <div class="sheet-actions"><button class="btn ghost" id="i-no">Annuler</button><button class="btn primary" id="i-yes">Restaurer</button></div>`);
    $('#i-no').onclick=closeSheet;
    $('#i-yes').onclick=()=>{S=hydrate(o);delete S.app;delete S.version;delete S.exported;touch();closeSheet();renderAll();toast('Progression restaurée');after&&after()};
  };
  r.readAsText(file);
}
function backupBlockHTML(){
  return `<section class="block" id="backup"><div class="eyebrow">Sauvegarde</div>
  <p class="muted" style="margin-bottom:12px">Ta progression reste sur ce téléphone. ${esc(lastExportText())} Exporte-la régulièrement pour la garder en lieu sûr ou la passer sur un autre appareil.</p>
  <div class="sheet-actions">
    <button class="btn primary" data-backup="export">Exporter</button>
    ${canShareFile()?'<button class="btn ghost" data-backup="share">Envoyer (Drive, e-mail…)</button>':''}
    <label class="btn ghost" for="imp-file">Importer</label><input type="file" id="imp-file" accept=".json,application/json" hidden>
  </div></section>`;
}
function bindBackup(root){
  $$('[data-backup]',root).forEach(b=>b.onclick=()=>b.dataset.backup==='share'?shareBackup():exportBackup());
  const f=$('#imp-file',root); if(f)f.onchange=e=>{const x=e.target.files[0];e.target.value='';if(x)importBackup(x)};
}

// ===== Installation et mises à jour (PWA) =====
let installEvt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEvt=e;renderAll()});
window.addEventListener('appinstalled',()=>{installEvt=null;toast('Jàng Wolof est installée');renderAll()});
async function promptInstall(){if(!installEvt)return;installEvt.prompt();await installEvt.userChoice;installEvt=null;renderAll()}
let waitingSW=null;
function showUpdate(w){waitingSW=w;const t=$('#update');t.hidden=false}

// ===== Statistiques =====
function cardStatus(id){
  const r=getItem(itemKey(id,'r')); if(!r) return 'new';
  if(r.s===1||r.s===3||r.s===0) return 'learn';
  return r.ivl>=21?'mature':'young';
}
function deckStats(did){
  const ids=DECK_CARDS[did]; let seen=0,mast=0,due=0; const now=Date.now();
  for(const id of ids){const st=cardStatus(id); if(st!=='new')seen++; if(st==='mature'||st==='young'&&getItem(itemKey(id,'r')).ivl>=7)mast++;
    for(const dir of ['r','p']){const it=getItem(itemKey(id,dir)); if(it&&it.s>0&&it.due<=now)due++}}
  return {total:ids.length,seen,mast,due};
}
function dueCounts(deckFilter){
  const now=Date.now(); let due=0,learn=0,prodNew=0;
  for(const k in S.items){const id=k.split('|')[0]; if(!CARDS[id])continue; if(deckFilter&&CARDS[id].deck!==deckFilter)continue;
    const it=getItem(k); if(k.endsWith('|p')&&!S.settings.prod)continue;
    if(it.s===0)prodNew++; else if(it.due<=now){if(it.s===2)due++;else learn++}}
  return {due,learn,prodNew};
}
function newAvailable(deckFilter){
  const ids=[]; const decks=deckFilter?[deckFilter]:S.settings.active;
  for(const d of decks) for(const id of DECK_CARDS[d]) if(!S.items[itemKey(id,'r')]) ids.push(id);
  return ids;
}
function streak(){
  let n=0; let t=dayStart(); const has=k=>S.log[k]&&(S.log[k].r+S.log[k].q)>0;
  if(!has(dayKey(t))) t-=DAY;
  while(has(dayKey(t+3600e3))){n++;t-=DAY}
  return n;
}
function learnedCount(){let n=0;for(const id in CARDS){const st=cardStatus(id);if(st==='young'||st==='mature')n++}return n}

// ===== Session de révision =====
let session=null;
function buildSession(deckFilter, extraNew=0){
  const now=Date.now(), cfg=S.settings;
  const due=[], learning=[], prodNew=[];
  for(const k in S.items){const id=k.split('|')[0]; if(!CARDS[id])continue; if(deckFilter&&CARDS[id].deck!==deckFilter)continue;
    if(k.endsWith('|p')&&!cfg.prod)continue;
    const it=getItem(k);
    if(it.s===0)prodNew.push(k); else if(it.s!==2) learning.push(k); else if(it.due<=now) due.push(k)}
  due.sort((a,b)=>S.items[a][1]-S.items[b][1]);
  const size=cfg.sessionSize;
  const nNew=Math.max(0,cfg.newPerDay-newToday())+extraNew;
  const news=newAvailable(deckFilter).slice(0,Math.min(nNew,size)).map(id=>itemKey(id,'r'));
  const revs=due.slice(0,Math.max(0,size-news.length));
  const pn=shuffle(prodNew).slice(0,Math.max(0,Math.min(8,size-news.length-revs.length)));
  // entrelacer : 1 nouvelle toutes les 3 révisions
  const queue=[]; const r=[...revs,...pn]; let ni=0;
  for(let i=0;i<r.length;i++){queue.push(r[i]); if(i%3===2&&ni<news.length)queue.push(news[ni++])}
  while(ni<news.length)queue.push(news[ni++]);
  const lq=learning.map(k=>({k,due:S.items[k][1]}));
  return {queue, learn:lq, done:0, total:queue.length+lq.length, correct:0, start:Date.now(), deck:deckFilter||null, cur:null, revealed:false, intro:false, typed:null};
}
function nextKey(){
  const s=session, now=Date.now();
  s.learn.sort((a,b)=>a.due-b.due);
  if(s.learn.length&&s.learn[0].due<=now) return s.learn.shift().k;
  if(s.queue.length) return s.queue.shift();
  if(s.learn.length) return s.learn.shift().k;
  return null;
}
function startSession(deckFilter, extraNew=0){
  session=buildSession(deckFilter, extraNew);
  if(!session.total){toast(deckFilter?'Rien à réviser dans ce paquet pour l\'instant.':'Tout est à jour. Ajoute un paquet ou reviens plus tard.');session=null;return}
  $('#study').hidden=false; document.body.classList.add('locked');
  advance();
}
function advance(){
  const k=nextKey(); if(!k){finishSession();return}
  session.cur=k; session.revealed=false; session.typed=null; session.shown=Date.now();
  const it=getItem(k); session.intro=!it;
  renderCard();
}
function renderCard(){
  const s=session, [id,dir]=s.cur.split('|'), c=CARDS[id], it=getItem(s.cur)||newItem();
  const done=s.total-s.queue.length-s.learn.length-1;
  $('#prog-bar').style.width=Math.min(100,Math.max(0,done/s.total*100))+'%';
  $('#prog-txt').textContent=Math.max(0,s.queue.length+s.learn.length+1)+' restantes';
  const box=$('#card'); const pron=S.settings.pron?`<div class="pron">≈ ${esc(c.p)}</div>`:'';
  const note=c.n?`<div class="note">${esc(c.n)}</div>`:'';
  const deck=`<div class="card-deck">${esc(DECK[c.deck].name)}${s.intro?' · <b>nouveau mot</b>':dir==='p'?' · français → wolof':' · wolof → français'}</div>`;
  if(s.intro){
    box.innerHTML=`${deck}<div class="w big">${esc(c.w)}</div>${pron}<div class="sep"></div><div class="f">${esc(c.f)}</div>${note}`;
    $('#actions').innerHTML=`<button class="btn primary wide" id="b-intro">Je retiens, on continue</button>`;
    $('#b-intro').onclick=()=>{bumpNew();todayLog().n++;const n=newItem();putItem(s.cur,{...n,s:1,step:0,due:Date.now()+MIN});s.learn.push({k:s.cur,due:Date.now()+MIN});touch();advance()};
    return;
  }
  if(dir==='r'){
    box.innerHTML=`${deck}<div class="w big">${esc(c.w)}</div>${pron}${s.revealed?`<div class="sep"></div><div class="f">${esc(c.f)}</div>${note}`:''}`;
  } else {
    let ans='';
    if(s.revealed){
      const res=s.typed?`<div class="typed ${s.typed.ok?'ok':s.typed.near?'near':'no'}">${s.typed.ok?'Juste':s.typed.near?'Presque : vérifie l\'orthographe':'Ta réponse'} : <b>${esc(s.typed.v||'—')}</b></div>`:'';
      ans=`<div class="sep"></div>${res}<div class="w big">${esc(c.w)}</div>${pron}${note}`;
    }
    const input=(!s.revealed&&S.settings.typing)?`<form id="type-form" class="type-form" autocomplete="off"><input id="type-in" class="type-in" type="text" placeholder="Écris en wolof…" autocapitalize="off" spellcheck="false" aria-label="Ta réponse en wolof"><div class="keys">${['à','ë','é','ó','ñ','ŋ'].map(x=>`<button type="button" class="key" data-k="${x}">${x}</button>`).join('')}</div></form>`:'';
    box.innerHTML=`${deck}<div class="f big">${esc(c.f)}</div>${input}${ans}`;
    if(input){const inp=$('#type-in');setTimeout(()=>inp.focus(),50);
      $$('.key',box).forEach(b=>b.onclick=()=>{const p=inp.selectionStart??inp.value.length;inp.value=inp.value.slice(0,p)+b.dataset.k+inp.value.slice(inp.selectionEnd??p);inp.focus();inp.setSelectionRange(p+1,p+1)});
      $('#type-form').onsubmit=e=>{e.preventDefault();checkTyped()}}
  }
  if(!s.revealed){
    $('#actions').innerHTML=dir==='p'&&S.settings.typing?`<button class="btn ghost" id="b-skip">Je ne sais pas</button><button class="btn primary" id="b-check">Vérifier</button>`:`<button class="btn primary wide" id="b-show">Voir la réponse</button>`;
    if($('#b-show'))$('#b-show').onclick=reveal;
    if($('#b-check'))$('#b-check').onclick=checkTyped;
    if($('#b-skip'))$('#b-skip').onclick=()=>{s.typed={v:'',ok:false,near:false};reveal()};
  } else {
    const labels=['Encore','Difficile','Bien','Facile'];
    const sugg=s.typed?(s.typed.ok?2:s.typed.near?1:0):-1;
    $('#actions').innerHTML=`<div class="grades">${labels.map((l,g)=>`<button class="btn grade g${g}${sugg===g?' sugg':''}" data-g="${g}"><span>${l}</span><small>${fmtIvl(schedule(it,g))}</small></button>`).join('')}</div>`;
    $$('.grade').forEach(b=>b.onclick=()=>grade(+b.dataset.g));
  }
}
function checkTyped(){
  const s=session, c=CARDS[s.cur.split('|')[0]], v=$('#type-in').value;
  const a=norm(v), b=norm(c.w.replace(/\.\.\.|…/g,''));
  const ok=a===b, near=!ok&&a.length>0&&lev(a,b)<=Math.max(1,Math.floor(b.length/8));
  s.typed={v,ok,near}; reveal();
}
function reveal(){session.revealed=true;renderCard()}
function grade(g){
  const s=session, k=s.cur, now=Date.now();
  const it=schedule(getItem(k)||newItem(), g, now);
  const wasStage=getItem(k)?.s;
  putItem(k,it);
  const L=todayLog(); L.r++; if(g>0){L.c++;s.correct++}
  L.t+=Math.min(60,Math.round((now-(s.shown||now))/1000));
  // débloquer français → wolof quand la reconnaissance est acquise
  if(k.endsWith('|r')&&it.s===2&&wasStage!==2){const pk=k.replace('|r','|p');if(!S.items[pk])putItem(pk,newItem())}
  if(it.s!==2) s.learn.push({k,due:it.due});
  s.done++; touch(); advance();
}
function finishSession(){
  const s=session; const mins=Math.max(1,Math.round((Date.now()-s.start)/60000));
  $('#card').innerHTML=`<div class="card-deck">Séance terminée</div><div class="w big">Baax na!</div><div class="pron">C'est bien !</div><div class="sep"></div>
  <div class="done-grid"><div><b>${s.done}</b><span>réponses</span></div><div><b>${s.done?Math.round(s.correct/s.done*100):0} %</b><span>réussite</span></div><div><b>${mins}</b><span>min</span></div></div>`;
  $('#actions').innerHTML=`<button class="btn primary wide" id="b-close">Retour</button>`;
  $('#prog-bar').style.width='100%'; $('#prog-txt').textContent='Terminé';
  $('#b-close').onclick=closeStudy; session=null; touch();
}
function closeStudy(){session=null;$('#study').hidden=true;document.body.classList.remove('locked');renderAll()}

// ===== Quiz =====
let quiz=null;
function startQuiz(deckFilter){
  let pool=Object.keys(CARDS).filter(id=>(!deckFilter||CARDS[id].deck===deckFilter)&&cardStatus(id)!=='new');
  if(pool.length<6){pool=deckFilter?[...DECK_CARDS[deckFilter]]:S.settings.active.flatMap(d=>DECK_CARDS[d])}
  if(pool.length<4){toast('Pas assez de mots pour un quiz.');return}
  const qs=shuffle([...pool]).slice(0,10).map(id=>{
    const dir=Math.random()<.5?'r':'p'; const c=CARDS[id];
    const same=DECK_CARDS[c.deck].filter(x=>x!==id&&CARDS[x].f!==c.f&&CARDS[x].w!==c.w);
    const others=shuffle(same.length>=3?same:Object.keys(CARDS).filter(x=>x!==id)).slice(0,3);
    return {id,dir,opts:shuffle([id,...others])};
  });
  quiz={qs,i:0,score:0,deck:deckFilter,answered:false};
  $('#study').hidden=false;document.body.classList.add('locked');renderQuiz();
}
function renderQuiz(){
  const q=quiz.qs[quiz.i], c=CARDS[q.id];
  $('#prog-bar').style.width=(quiz.i/quiz.qs.length*100)+'%';$('#prog-txt').textContent='Quiz · '+(quiz.i+1)+' / '+quiz.qs.length;
  const prompt=q.dir==='r'?`<div class="w big">${esc(c.w)}</div>${S.settings.pron?`<div class="pron">≈ ${esc(c.p)}</div>`:''}`:`<div class="f big">${esc(c.f)}</div>`;
  $('#card').innerHTML=`<div class="card-deck">Quiz · ${q.dir==='r'?'que veut dire…':'comment dit-on…'}</div>${prompt}<div class="mc">${q.opts.map(o=>`<button class="opt" data-o="${o}">${esc(q.dir==='r'?CARDS[o].f:CARDS[o].w)}</button>`).join('')}</div>`;
  $('#actions').innerHTML='';
  $$('.opt').forEach(b=>b.onclick=()=>{
    if(quiz.answered)return; quiz.answered=true; const ok=b.dataset.o===q.id;
    if(ok)quiz.score++; todayLog().q++;
    $$('.opt').forEach(x=>{if(x.dataset.o===q.id)x.classList.add('right');else if(x===b)x.classList.add('wrong')});
    // une erreur au quiz remet la carte en révision
    if(!ok){const k=itemKey(q.id,q.dir);const it=getItem(k);if(it&&it.s===2){it.due=Date.now();putItem(k,it)}}
    touch();
    $('#actions').innerHTML=`<button class="btn primary wide" id="b-next">${quiz.i+1<quiz.qs.length?'Question suivante':'Voir le score'}</button>`;
    $('#b-next').onclick=()=>{quiz.answered=false;quiz.i++;if(quiz.i<quiz.qs.length)renderQuiz();else endQuiz()};
  });
}
function endQuiz(){
  const n=quiz.qs.length,sc=quiz.score;
  $('#card').innerHTML=`<div class="card-deck">Quiz terminé</div><div class="w big">${sc} / ${n}</div><div class="pron">${sc===n?'Parfait ! Yaa ngi am xel!':sc>=n*.7?'Baax na lool, très bien !':'Ndànk-ndànk : continue tes révisions.'}</div>`;
  $('#actions').innerHTML=`<button class="btn ghost" id="b-again">Rejouer</button><button class="btn primary" id="b-close">Retour</button>`;
  $('#prog-bar').style.width='100%';
  const d=quiz.deck; $('#b-again').onclick=()=>startQuiz(d); $('#b-close').onclick=()=>{quiz=null;closeStudy()};
}

// ===== Rendu des onglets =====
function greeting(){const h=new Date().getHours();return h<12?['Jàmm nga fanaan?','Bonjour (as-tu passé la nuit en paix ?)']:['Jàmm nga yendu?','Bonjour (as-tu passé la journée en paix ?)']}
function proverbOfDay(){const ids=DECK_CARDS.proverbes;const n=Math.floor(dayStart()/DAY);return CARDS[ids[n%ids.length]]}
function renderHome(){
  const [g1,g2]=greeting(); const L=todayLog(); const goal=S.settings.goal;
  const dc=dueCounts(); const nn=Math.min(Math.max(0,S.settings.newPerDay-newToday()),newAvailable().length);
  const pct=Math.min(1,L.r/goal); const R=44,C=2*Math.PI*R;
  const pv=proverbOfDay(); const st=streak(); const learned=learnedCount();
  const total=dc.due+dc.learn+Math.min(8,dc.prodNew)+nn;
  $('#v-home').innerHTML=`
  <section class="hello"><h1 class="greet">${g1}</h1><p class="muted">${g2}</p></section>
  ${installEvt?`<section class="banner"><div><b>Installer l'application</b><span>Une icône sur ton écran d'accueil, et ça marche sans connexion.</span></div><button class="btn primary small" id="b-install">Installer</button></section>`:''}
  ${hasProgress()&&(!S.lastExport||Date.now()-S.lastExport>7*DAY)&&learnedCount()>=10?`<section class="banner"><div><b>Pense à sauvegarder</b><span>${esc(lastExportText())}</span></div><button class="btn ghost small" id="b-backup">Exporter</button></section>`:''}
  <section class="today">
    <div class="ring"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="${R}" class="ring-bg"/><circle cx="50" cy="50" r="${R}" class="ring-fg" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-pct)}"/></svg>
      <div class="ring-txt"><b>${L.r}</b><span>/ ${goal}</span></div></div>
    <div class="today-info"><div class="eyebrow">Objectif du jour</div>
      <div class="counts"><span><b>${dc.due+dc.learn}</b> à revoir</span><span><b>${nn}</b> nouveaux</span>${dc.prodNew&&S.settings.prod?`<span><b>${dc.prodNew}</b> à produire</span>`:''}</div>
      <button class="btn primary" id="b-start" ${total?'':'disabled'}>${total?'Commencer la séance':'Tout est à jour'}</button>
      ${!total?`<button class="btn ghost small" id="b-more">Ajouter 5 nouveaux mots</button>`:''}
    </div>
  </section>
  <section class="kpis three">
    <div><b>${st}</b><span>${st>1?'jours d\'affilée':'jour d\'affilée'}</span></div>
    <div><b>${learned}</b><span>mots appris sur ${TOTAL}</span></div>
    <div><b>${L.q}</b><span>quiz aujourd'hui</span></div>
  </section>
  <section class="block"><div class="eyebrow">Proverbe du jour</div><p class="proverb">${esc(pv.w)}</p><p class="muted">${esc(pv.f)}${pv.n?' · '+esc(pv.n):''}</p></section>
  <section class="block"><div class="row-head"><div class="eyebrow">Paquets en cours</div><button class="link" data-go="decks">Gérer</button></div>
    <div class="deck-list">${S.settings.active.map(deckRow).join('')||'<p class="muted">Aucun paquet actif. Active-en un dans l\'onglet Paquets.</p>'}</div></section>
  <section class="block quick"><button class="btn ghost" id="b-quiz">Quiz rapide (10 questions)</button></section>`;
  $('#b-start')&&($('#b-start').onclick=()=>startSession());
  $('#b-more')&&($('#b-more').onclick=()=>startSession(null,5));
  $('#b-quiz').onclick=()=>startQuiz();
  $('#b-install')&&($('#b-install').onclick=promptInstall);
  $('#b-backup')&&($('#b-backup').onclick=()=>canShareFile()?shareBackup():exportBackup());
  bindDeckRows($('#v-home'));
  $$('[data-go]',$('#v-home')).forEach(b=>b.onclick=()=>go(b.dataset.go));
}
function deckRow(did){
  const d=DECK[did], st=deckStats(did); const a=S.settings.active.includes(did);
  return `<button class="deck-row" data-deck="${did}"><div class="dr-main"><div class="dr-name">${esc(d.name)}</div>
  <div class="dr-sub">${st.seen}/${st.total} vus · ${st.mast} maîtrisés${st.due?` · <b>${st.due} à revoir</b>`:''}</div>
  <div class="bar"><i style="width:${st.seen/st.total*100}%"></i><i class="m" style="width:${st.mast/st.total*100}%"></i></div></div>
  <span class="pill ${a?'on':''}">${a?'actif':'inactif'}</span></button>`;
}
function bindDeckRows(root){$$('.deck-row',root).forEach(b=>b.onclick=()=>openDeck(b.dataset.deck))}
function renderDecks(){
  const tags=[...new Set(DECKS.map(d=>d.tag))];
  $('#v-decks').innerHTML=`<h2 class="title">Paquets</h2>
  <div class="search"><input id="q" type="search" placeholder="Chercher un mot (wolof ou français)" aria-label="Chercher un mot"></div>
  <div id="results"></div>
  <div id="deck-groups">${tags.map(t=>`<section class="block"><div class="eyebrow">${t}</div><div class="deck-list">${DECKS.filter(d=>d.tag===t).map(d=>deckRow(d.id)).join('')}</div></section>`).join('')}</div>`;
  bindDeckRows($('#v-decks'));
  $('#q').oninput=e=>{const q=norm(e.target.value);const res=$('#results'),grp=$('#deck-groups');
    if(q.length<2){res.innerHTML='';grp.hidden=false;return}
    const hits=Object.values(CARDS).filter(c=>norm(c.w).includes(q)||norm(c.f).includes(q)).slice(0,40);
    grp.hidden=true; res.innerHTML=`<div class="card-list">${hits.map(cardLine).join('')||'<p class="muted">Aucun résultat.</p>'}</div>`};
}
function cardLine(c){const st=cardStatus(c.id);const lab={new:'nouveau',learn:'en cours',young:'appris',mature:'maîtrisé'}[st];
  return `<div class="cl"><div class="cl-w">${esc(c.w)}<small>≈ ${esc(c.p)}</small></div><div class="cl-f">${esc(c.f)}<small>${esc(DECK[c.deck].name)}</small></div><span class="dot ${st}" title="${lab}">${lab}</span></div>`}
function openDeck(did){
  const d=DECK[did], st=deckStats(did), a=S.settings.active.includes(did);
  const nleft=newAvailable(did).length;
  openSheet(`<div class="eyebrow">${esc(d.tag)}</div><h2 class="title">${esc(d.name)}</h2>
  <p class="muted">${st.total} cartes · ${st.seen} vues · ${st.mast} maîtrisées</p>
  <div class="sheet-actions">
    <button class="btn primary" id="d-study" ${st.due||nleft?'':'disabled'}>Étudier ce paquet</button>
    <button class="btn ghost" id="d-quiz">Quiz</button>
    <button class="btn ghost" id="d-toggle">${a?'Retirer des séances':'Ajouter aux séances'}</button>
  </div>
  <div class="card-list">${DECK_CARDS[did].map(id=>cardLine(CARDS[id])).join('')}</div>`);
  $('#d-study').onclick=()=>{closeSheet();startSession(did,5)};
  $('#d-quiz').onclick=()=>{closeSheet();startQuiz(did)};
  $('#d-toggle').onclick=()=>{const L=S.settings.active;if(a)S.settings.active=L.filter(x=>x!==did);else L.push(did);touch();closeSheet();renderAll();toast(a?'Paquet retiré des séances':'Paquet ajouté : ses nouveaux mots arriveront dans tes séances')};
}
function renderLessons(){
  $('#v-lessons').innerHTML=`<h2 class="title">Leçons</h2><p class="muted">Les règles essentielles, à lire puis à pratiquer avec le paquet « Grammaire en phrases ».</p>
  <div class="lessons">${LESSONS.map((l,i)=>`<details class="lesson"${i===0?' open':''}><summary><span class="ln">${i+1}</span>${esc(l.t)}</summary><div class="lb">${l.b}</div></details>`).join('')}</div>
  <button class="btn ghost" id="b-gram">Pratiquer la grammaire</button>`;
  $('#b-gram').onclick=()=>startSession('gram',5);
}
function renderStats(){
  const days=[]; for(let i=29;i>=0;i--){const t=dayStart()-i*DAY+3600e3;const k=dayKey(t);const l=S.log[k]||{r:0,c:0,q:0,t:0};days.push({k,t,...l})}
  const max=Math.max(S.settings.goal,...days.map(d=>d.r+d.q));
  const W=320,H=120,bw=W/30;
  const bars=days.map((d,i)=>{const h=(d.r+d.q)/max*(H-14);return `<rect x="${i*bw+1}" y="${H-h}" width="${bw-2}" height="${h}" rx="1.5" class="${d.r+d.q>=S.settings.goal?'hit':''}"><title>${d.k} : ${d.r} révisions, ${d.q} quiz</title></rect>`}).join('');
  const gy=H-S.settings.goal/max*(H-14);
  const tot=days.reduce((a,d)=>a+d.r,0), cor=days.reduce((a,d)=>a+d.c,0);
  // prévision 7 jours
  const fc=Array(7).fill(0); const ds=dayStart();
  for(const k in S.items){const it=S.items[k];if(it[0]!==2)continue;if(k.endsWith('|p')&&!S.settings.prod)continue;const i=Math.max(0,Math.floor((it[1]-ds)/DAY));if(i<7)fc[i]++}
  const fmax=Math.max(1,...fc); const dn=['dim','lun','mar','mer','jeu','ven','sam'];
  // statut des cartes
  const cnt={new:0,learn:0,young:0,mature:0}; for(const id in CARDS)cnt[cardStatus(id)]++;
  // calendrier 15 semaines
  const weeks=15, cells=[]; const today=new Date(dayStart()); const startT=dayStart()-((weeks-1)*7+((today.getDay()+6)%7))*DAY;
  for(let i=0;i<weeks*7;i++){const t=startT+i*DAY+3600e3;if(t>Date.now()+DAY)break;const l=S.log[dayKey(t)];const v=l?l.r+l.q:0;const lv=v===0?0:v<S.settings.goal*.5?1:v<S.settings.goal?2:3;cells.push(`<i class="h${lv}" style="grid-column:${Math.floor(i/7)+1};grid-row:${i%7+1}" title="${dayKey(t)} : ${v}"></i>`)}
  const totalRev=Object.values(S.log).reduce((a,l)=>a+(l.r||0),0); const totalMin=Math.round(Object.values(S.log).reduce((a,l)=>a+(l.t||0),0)/60);
  $('#v-stats').innerHTML=`<h2 class="title">Progrès</h2>
  <section class="kpis"><div><b>${streak()}</b><span>jours d'affilée</span></div><div><b>${learnedCount()}</b><span>mots appris</span></div><div><b>${tot?Math.round(cor/tot*100):0} %</b><span>réussite sur 30 jours</span></div><div><b>${totalRev}</b><span>révisions au total · ${totalMin} min</span></div></section>
  <section class="block"><div class="eyebrow">Activité sur 30 jours</div>
    <svg class="chart" viewBox="0 0 ${W} ${H+16}" role="img" aria-label="Révisions par jour sur 30 jours">${bars}<line x1="0" x2="${W}" y1="${gy}" y2="${gy}" class="goal"/><text x="${W}" y="${gy-4}" text-anchor="end" class="ax">objectif ${S.settings.goal}</text><text x="0" y="${H+13}" class="ax">${days[0].k.slice(5).split('-').reverse().join('/')}</text><text x="${W}" y="${H+13}" text-anchor="end" class="ax">aujourd'hui</text></svg></section>
  <section class="block"><div class="eyebrow">Régularité · 15 semaines</div><div class="heat">${cells.join('')}</div>
    <div class="legend"><span>moins</span><i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i><span>objectif atteint</span></div></section>
  <section class="block"><div class="eyebrow">Tes ${TOTAL} cartes</div>
    <div class="stack"><i class="s-mature" style="flex:${cnt.mature}"></i><i class="s-young" style="flex:${cnt.young}"></i><i class="s-learn" style="flex:${cnt.learn}"></i><i class="s-new" style="flex:${cnt.new}"></i></div>
    <div class="stack-leg"><span><i class="s-mature"></i>Maîtrisées (21 j +) <b>${cnt.mature}</b></span><span><i class="s-young"></i>Apprises <b>${cnt.young}</b></span><span><i class="s-learn"></i>En cours <b>${cnt.learn}</b></span><span><i class="s-new"></i>Pas encore vues <b>${cnt.new}</b></span></div></section>
  <section class="block"><div class="eyebrow">À revoir les 7 prochains jours</div>
    <div class="fc">${fc.map((n,i)=>`<div><div class="fcb"><i style="height:${n/fmax*100}%"></i></div><b>${n}</b><span>${i===0?'auj.':dn[new Date(ds+i*DAY+3600e3).getDay()]}</span></div>`).join('')}</div></section>
  <section class="block"><div class="eyebrow">Par paquet</div><div class="deck-list">${DECKS.map(d=>deckRow(d.id)).join('')}</div></section>
  ${backupBlockHTML()}`;
  bindDeckRows($('#v-stats')); bindBackup($('#v-stats'));
}
function openSettings(){
  const s=S.settings; const opt=(id,vals,cur,suf='')=>`<select id="${id}">${vals.map(v=>`<option value="${v}"${v==cur?' selected':''}>${v}${suf}</option>`).join('')}</select>`;
  openSheet(`<h2 class="title">Réglages</h2>
  <div class="set"><label for="s-new">Nouveaux mots par jour</label>${opt('s-new',[5,10,15,20,30],s.newPerDay)}</div>
  <div class="set"><label for="s-goal">Objectif quotidien (réponses)</label>${opt('s-goal',[20,40,60,100,150],s.goal)}</div>
  <div class="set"><label for="s-size">Cartes max par séance</label>${opt('s-size',[20,30,50,80],s.sessionSize)}</div>
  <div class="set"><label for="s-prod">Pratiquer aussi français → wolof</label><input type="checkbox" id="s-prod" ${s.prod?'checked':''}></div>
  <div class="set"><label for="s-typing">Écrire la réponse en wolof</label><input type="checkbox" id="s-typing" ${s.typing?'checked':''}></div>
  <div class="set"><label for="s-pron">Afficher la prononciation</label><input type="checkbox" id="s-pron" ${s.pron?'checked':''}></div>
  <div class="eyebrow" style="margin-top:20px">Sauvegarde</div>
  <p class="muted">${esc(lastExportText())}</p>
  <div class="sheet-actions"><button class="btn ghost" id="s-export">Exporter</button>${canShareFile()?'<button class="btn ghost" id="s-share">Envoyer</button>':''}<label class="btn ghost" for="s-import">Importer</label><input type="file" id="s-import" accept=".json,application/json" hidden></div>
  <div class="eyebrow" style="margin-top:20px">Recommencer</div>
  <div id="reset-zone"><button class="btn danger" id="s-reset">Effacer ma progression</button></div>
  <p class="muted" style="margin-top:20px;font-size:13px">Jàng Wolof · version ${APP_VERSION} · fonctionne hors ligne</p>`);
  const bind=(id,key,num)=>$(id).onchange=e=>{S.settings[key]=num?+e.target.value:e.target.checked;touch();renderAll()};
  bind('#s-new','newPerDay',1);bind('#s-goal','goal',1);bind('#s-size','sessionSize',1);bind('#s-prod','prod');bind('#s-typing','typing');bind('#s-pron','pron');
  $('#s-export').onclick=exportBackup; if($('#s-share'))$('#s-share').onclick=shareBackup;
  $('#s-import').onchange=e=>{const x=e.target.files[0];e.target.value='';if(x){closeSheet();importBackup(x)}};
  $('#s-reset').onclick=()=>{$('#reset-zone').innerHTML=`<p>Toute ta progression sera effacée de cet appareil. Exporte une sauvegarde avant si tu veux pouvoir la récupérer.</p><div class="sheet-actions"><button class="btn ghost" id="r-no">Annuler</button><button class="btn danger" id="r-yes">Oui, tout effacer</button></div>`;
    $('#r-no').onclick=()=>openSettings();$('#r-yes').onclick=()=>{const keep=S.settings;S=freshState();S.settings=keep;touch();closeSheet();renderAll();toast('Progression effacée')}};
}

// ===== Navigation, feuilles, toasts =====
let tab='home';
function go(t){tab=t;$$('.view').forEach(v=>v.hidden=v.id!=='v-'+t);$$('.nav button').forEach(b=>b.setAttribute('aria-current',b.dataset.tab===t?'page':'false'));render(t);window.scrollTo(0,0)}
function render(t){({home:renderHome,decks:renderDecks,lessons:renderLessons,stats:renderStats})[t]()}
function renderAll(){render(tab)}
function openSheet(html){$('#sheet-body').innerHTML=html;$('#sheet').hidden=false;document.body.classList.add('locked')}
function closeSheet(){$('#sheet').hidden=true;if($('#study').hidden)document.body.classList.remove('locked')}
let toastT; function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2800)}

$$('.nav button').forEach(b=>b.onclick=()=>go(b.dataset.tab));
$('#b-settings').onclick=openSettings;
$('#sheet-close').onclick=closeSheet;
$('#sheet').onclick=e=>{if(e.target.id==='sheet')closeSheet()};
$('#study-close').onclick=()=>{quiz=null;if(session){touch()}closeStudy()};
document.addEventListener('keydown',e=>{
  if($('#study').hidden||quiz)return; if(e.target.tagName==='INPUT')return;
  if(!session)return;
  if(e.key===' '||e.key==='Enter'){e.preventDefault();if(session.intro)$('#b-intro')?.click();else if(!session.revealed)reveal()}
  else if(session.revealed&&'1234'.includes(e.key))grade(+e.key-1);
});
$('#b-update').onclick=()=>{if(session||quiz){toast('Termine ta séance, la mise à jour se fera ensuite');return}waitingSW&&waitingSW.postMessage('skipWaiting')};
// Raccourcis de l'icône (appui long sur Android) : #reviser et #progres
const startHash=location.hash.slice(1);
go(startHash==='progres'?'stats':'home'); initStorage();
if(startHash==='reviser')setTimeout(()=>startSession(),0);
if(startHash)history.replaceState(null,'',location.pathname);
