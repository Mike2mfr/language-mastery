/* ============ CONTENU ============ */
const UNITS = [
{ id:"bonjou", t:"Bonjou !", sub:"Saluer, remercier, prendre congé",
  note:`<p>En créole, <b>pas de vouvoiement</b> : on dit <span class="kr">ou</span> à tout le monde, à un ami comme à un inconnu. La politesse passe par le ton et par les formules : un bonjour sec est mal perçu.</p><p><span class="kr">Bonjou</span> s'emploie jusqu'à midi, <span class="kr">bonswè</span> ensuite. On renforce souvent avec <span class="kr">bien</span> : <span class="kr">Bien bonjou !</span></p>`,
  culture:`On ajoute volontiers un mot affectueux : <b>chéri-a, doudou-a</b> pour une femme, <b>monboug, frè-a</b> pour un homme. Proverbe : <i>Bonjou pa ka monté mòn</i>, « un bonjour ne grimpe pas les mornes » : être aimable ne coûte rien.`,
  w:[["bonjou","bonjour (le matin)"],["bonswè","bonsoir (après midi)"],["Sa ou fè ?","Comment vas-tu ?"],["Sa ka maché.","Ça va."],["Man bien.","Je vais bien."],["mèsi","merci"],["mèsi anpil","merci beaucoup"],["souplé","s'il te plaît"],["wi","oui"],["non","non"],["a dèmen","à demain"],["a pita","à plus tard"],["babay","au revoir"],["tjenbé rèd","courage ! (tiens bon)"]],
  s:[["Bonjou, sa ou fè ?","Bonjour, comment vas-tu ?"],["Sa ka maché, mèsi.","Ça va, merci."],["Man bien, é wou ?","Je vais bien, et toi ?"],["Bien bonswè, chéri-a !","Bonsoir, ma chérie !"],["A dèmen, si Dié vé !","À demain, si Dieu le veut !"]]},

{ id:"prezante", t:"Man sé…", sub:"Pronoms et présentations",
  note:`<p>Pronoms sujets : <span class="kr">man</span> (je), <span class="kr">ou</span> (tu), <span class="kr">i</span> (il, elle), <span class="kr">nou</span> (nous), <span class="kr">zot</span> (vous), <span class="kr">yo</span> (ils, elles, on). Formes d'insistance : <span class="kr">mwen, wou, li</span>.</p><p>Devant un <b>nom</b>, « être » se dit <span class="kr">sé</span> : <span class="kr">Man sé moun Pari</span>. Devant un <b>adjectif</b> ou un lieu, rien du tout : <span class="kr">I gran</span> (il est grand). À la négation, <span class="kr">sé</span> disparaît : <span class="kr">Man pa moun Pari</span>.</p>`,
  culture:`Pour dire d'où l'on vient : pronom + <b>sé moun</b> + lieu. <i>Ou sé moun ki koté ?</i> mot à mot « tu es quelqu'un de quel endroit ? »`,
  w:[["man / mwen","je, moi"],["ou / wou","tu, toi"],["i / li","il, elle"],["nou","nous"],["zot","vous (pluriel)"],["yo","ils, elles, on"],["sé","c'est, être (+ nom)"],["moun","personne, quelqu'un"],["zanmi","ami, amie"],["kriyé","appeler"],["konnèt","connaître"],["kontan","content"],["ki koté","où (quel endroit)"],["Ki non'w ?","Comment t'appelles-tu ?"]],
  s:[["Yo ka kriyé mwen Lisi.","Je m'appelle Lucie."],["Man sé moun Pari.","Je suis de Paris."],["Ou sé moun ki koté ?","D'où es-tu ?"],["Man kontan konnèt ou.","Je suis content de te connaître."],["I pa moun Matinik.","Il n'est pas de Martinique."],["Nou sé zanmi.","Nous sommes amis."]]},

{ id:"ka", t:"Ka", sub:"Le présent des verbes",
  note:`<p>Les verbes ne se conjuguent pas. On place des <b>marqueurs</b> devant. <span class="kr">ka</span> + verbe = action en cours ou habituelle : <span class="kr">Man ka manjé</span> (je mange).</p><p>Les verbes d'état (<span class="kr">enmen, sav, konnèt, lé, pé, ni</span>) s'emploient <b>sans</b> <span class="kr">ka</span> : <span class="kr">Man enmen dansé</span>.</p><p>Négation : <span class="kr">pa</span> avant le marqueur. <span class="kr">Nou pa ka dòmi</span>. Un verbe d'action seul exprime une action accomplie : <span class="kr">I manjé</span> = il a mangé.</p>`,
  culture:`Pour « habiter » ou « vivre », on dit <b>rété</b> : <i>Man ka rété Fodfrans</i>, j'habite à Fort-de-France.`,
  w:[["palé","parler"],["manjé","manger"],["bwè","boire"],["dòmi","dormir"],["travay","travailler"],["rété","habiter, rester"],["alé","aller"],["vini","venir"],["dansé","danser"],["gadé","regarder"],["konprann","comprendre"],["enmen","aimer"],["lé","vouloir"],["sav","savoir"],["pé","pouvoir"]],
  s:[["Man ka palé kréyòl.","Je parle créole."],["Zot ka palé épi Mari.","Vous parlez avec Marie."],["I ka travay adan an magazen.","Il travaille dans un magasin."],["Nou pa ka dòmi.","Nous ne dormons pas."],["Man enmen dansé.","J'aime danser."],["Ou pé vini ?","Tu peux venir ?"],["Man pa konprann.","Je ne comprends pas."]]},

{ id:"ni", t:"Ni", sub:"Avoir, il y a, la famille",
  note:`<p><span class="kr">ni</span> veut dire « avoir » quand il suit le sujet : <span class="kr">Man ni dé frè</span>. En début de phrase, il veut dire « il y a » : <span class="kr">Ni an moun</span>.</p><p>Négation : <span class="kr">pa ni</span>, souvent contracté en <span class="kr">pani</span> : <span class="kr">Pani pwoblèm !</span></p><p>L'âge se dit avec <span class="kr">ni</span> et le mot <i>an</i> soudé au nombre : <span class="kr">trantan</span> (trente ans), <span class="kr">karantan</span>.</p>`,
  culture:`On dit que <i>tout moun Matinik fanmi</i>, tout le monde est un peu parent. Parrains, marraines et voisins proches sont souvent appelés <b>tonton</b> et <b>tati</b>.`,
  w:[["ni","avoir / il y a"],["pani","il n'y a pas, ne pas avoir"],["laj","âge"],["manman","mère"],["papa","père"],["frè","frère"],["sè","sœur"],["yich","enfant (fils, fille)"],["timanmay","enfant, gamin"],["fi","fille"],["gason","garçon"],["kouzen","cousin"],["tonton","oncle"],["matant","tante"],["granmanman","grand-mère"],["fanmi","famille"]],
  s:[["Man ni dé frè.","J'ai deux frères."],["Ki laj ou ?","Quel âge as-tu ?"],["Man ni trantan.","J'ai trente ans."],["Ni an moun.","Il y a quelqu'un."],["Man pa ni yich.","Je n'ai pas d'enfants."],["Pani pwoblèm !","Pas de problème !"]]},

{ id:"atik", t:"Kay-la", sub:"Les articles",
  note:`<p>L'article défini se place <b>après</b> le nom et change selon la fin du mot :</p><p><span class="kr">-la</span> après une consonne : <span class="kr">kay-la</span><br><span class="kr">-a</span> après une voyelle : <span class="kr">loto-a</span><br><span class="kr">-an</span> après une voyelle nasale : <span class="kr">pen-an</span><br><span class="kr">-lan</span> après m ou n : <span class="kr">moun-lan</span></p><p>Indéfini : <span class="kr">an</span> devant (<span class="kr">an kay</span>). Pluriel : <span class="kr">sé</span> devant + article après : <span class="kr">sé kay-la</span> (les maisons). Sans article, le nom est général : <span class="kr">Man ka manjé pwason</span> (du poisson).</p>`,
  culture:`Beaucoup de mots ont « avalé » l'article français : <b>lanmè</b> (la mer), <b>lapli</b> (la pluie), <b>loto</b> (l'auto), <b>dlo</b> (de l'eau), <b>lavi</b> (la vie).`,
  w:[["kay","maison"],["loto","voiture"],["bato","bateau"],["lari","rue"],["chat","chat"],["chien","chien"],["pen","pain"],["jaden","jardin"],["liv","livre"],["lanmè","mer"],["lapli","pluie"],["dlo","eau"],["lavi","vie"],["lannuit","nuit"],["lanmou","amour"]],
  s:[["Kay-la bèl.","La maison est belle."],["Loto-a pa la.","La voiture n'est pas là."],["Pen-an cho.","Le pain est chaud."],["Sé bato-a ka rivé.","Les bateaux arrivent."],["Man lé an liv.","Je veux un livre."],["Lapli ka tonbé.","Il pleut."],["Moun-lan ka atann.","La personne attend."]]},

{ id:"posesif", t:"Kay-mwen", sub:"Possessifs et pronoms compléments",
  note:`<p>Le possessif suit le nom : <span class="kr">kay-mwen</span> (ma maison), <span class="kr">kay-nou, kay-zot, kay-yo</span>.</p><p>2ᵉ et 3ᵉ personne : forme courte <span class="kr">'w / 'y</span> après une voyelle (<span class="kr">manman'w</span>, <span class="kr">papa'y</span>), forme pleine <span class="kr">-ou / -li</span> après une consonne (<span class="kr">sak-ou</span>, <span class="kr">kay-li</span>).</p><p>Les pronoms compléments ont les mêmes formes et se placent <b>après le verbe</b> : <span class="kr">Man ka wè'w</span> (je te vois), <span class="kr">Ba mwen</span> (donne-moi).</p>`,
  culture:`Pour accueillir quelqu'un : <i>Isi-a sé lakay-ou !</i> Ici, c'est chez toi.`,
  w:[["kay-mwen","ma maison"],["manman'w","ta mère"],["sak-ou","ton sac"],["papa'y","son père"],["kay-li","sa maison"],["lakay","chez soi, la maison"],["ta'w","le tien, la tienne"],["wè","voir"],["ba","donner"],["chèché","chercher"],["atann","attendre"],["édé","aider"],["sak","sac"]],
  s:[["Man ka wè'w.","Je te vois."],["Ba mwen dlo, souplé.","Donne-moi de l'eau, s'il te plaît."],["Sé zanmi-mwen.","C'est mon ami."],["Manman'y ka atann li.","Sa mère l'attend."],["Man ka chèché sak-mwen.","Je cherche mon sac."],["Isi-a sé lakay-ou !","Ici, c'est chez toi !"]]},

{ id:"konte", t:"Konté", sub:"Les nombres et les prix",
  note:`<p><span class="kr">yonn</span> sert à compter (« un »), <span class="kr">an</span> est l'article (« un, une »).</p><p>Les nombres ressemblent au français, avec l'orthographe créole : <span class="kr">tjenz</span> (15), <span class="kr">sèz</span> (16), <span class="kr">diset</span> (17), <span class="kr">dizuit</span> (18), <span class="kr">diznèf</span> (19), <span class="kr">katréven</span> (80).</p><p>Pour un prix, pas de verbe : <span class="kr">I twa éwo</span>, ça fait trois euros.</p>`,
  culture:`Au marché, la question rituelle est <i>Ki pri'y ?</i> (quel est son prix ?) ou <i>Konbien ?</i>`,
  w:[["yonn","un (en comptant)"],["dé","deux"],["twa","trois"],["kat","quatre"],["senk","cinq"],["sis","six"],["sèt","sept"],["uit","huit"],["nèf","neuf"],["dis","dix"],["wonz","onze"],["douz","douze"],["ven","vingt"],["trant","trente"],["san","cent"],["mil","mille"]],
  s:[["Konbien ou lé ?","Combien en veux-tu ?"],["I twa éwo.","Ça fait trois euros."],["Ba mwen dé zaboka.","Donne-moi deux avocats."],["Ki lè i yé ?","Quelle heure est-il ?"],["Man ka rété an mwa.","Je reste un mois."],["Nou sé senk.","Nous sommes cinq."]]},

{ id:"tan", t:"Té, ké, kay", sub:"Passé, futur, conditionnel",
  note:`<p>On combine les marqueurs devant le verbe :</p><p><span class="kr">té</span> passé, antériorité · <span class="kr">té ka</span> imparfait · <span class="kr">ké</span> futur · <span class="kr">kay</span> futur proche · <span class="kr">té ké</span> conditionnel.</p><p>Futur négatif : <span class="kr">pé ké</span> (<span class="kr">Man pé ké vini</span>). Avant le verbe : <span class="kr">ja</span> (déjà) et <span class="kr">poko</span> (pas encore).</p>`,
  culture:`<i>Man té ké enmen…</i> est la façon polie de dire « j'aimerais… ».`,
  w:[["yè","hier"],["jodi-a","aujourd'hui"],["dèmen","demain"],["oswè-a","ce soir"],["bonmaten","tôt le matin"],["atjelman","maintenant"],["ja","déjà"],["poko","pas encore"],["toujou","toujours"],["janmen","jamais"],["tanzantan","de temps en temps"],["simenn","semaine"],["lanné","année"]],
  s:[["Man té ka dòmi.","Je dormais."],["Nou ké manjé lanbi.","Nous mangerons du lambi."],["Man kay alé bodlanmè.","Je vais aller à la plage."],["Man pé ké vini dèmen.","Je ne viendrai pas demain."],["I ja manjé.","Il a déjà mangé."],["Man poko fè valiz-mwen.","Je n'ai pas encore fait ma valise."],["Man té ké enmen rété.","J'aimerais rester."]]},

{ id:"kesyon", t:"Ki moun ?", sub:"Poser des questions",
  note:`<p>Pas d'inversion : c'est l'intonation qui monte. <span class="kr">es</span> (« est-ce que ») est facultatif : <span class="kr">Es ou pé édé mwen ?</span></p><p>Les mots interrogatifs se forment avec <span class="kr">ki</span> (quel) : <span class="kr">ki moun</span> (qui), <span class="kr">ki sa</span> (quoi), <span class="kr">ki koté</span> (où), <span class="kr">ki lè</span> (quand), <span class="kr">ki mannié</span> (comment).</p><p>En fin de question, « être » devient <span class="kr">yé</span> : <span class="kr">Koté ou yé ?</span> (où es-tu ?).</p>`,
  culture:`Se saluer en Martinique, c'est souvent une série de questions : la santé, la famille, les projets. Plus on est proche, plus ça dure.`,
  w:[["ki moun","qui"],["ki sa","quoi, qu'est-ce que"],["ki koté","où"],["éti","où (variante)"],["ki lè","quand, à quelle heure"],["ki mannié","comment"],["poutji","pourquoi"],["pas","parce que"],["konbien","combien"],["es","est-ce que"],["ki jou","quel jour"],["sa","ça, cela"]],
  s:[["Ki sa ou ka fè ?","Qu'est-ce que tu fais ?"],["Koté ou ka rété ?","Où habites-tu ?"],["Poutji i ja ka pati ?","Pourquoi part-il déjà ?"],["Pas i présé.","Parce qu'il est pressé."],["Ki moun ki la ?","Qui est là ?"],["Es ou pé édé mwen ?","Peux-tu m'aider ?"],["Ki tan ou ka vini ?","Quand viens-tu ?"]]},

{ id:"manje", t:"Asou marché-a", sub:"Manger et faire le marché",
  note:`<p>Le complément du nom se colle directement, sans « de » : <span class="kr">blaf pwason</span> (blaff de poisson), <span class="kr">ji koko</span> (jus de coco).</p><p>Pour un souhait : <span class="kr">lé</span> (vouloir) ou <span class="kr">sé</span> (avoir envie) + verbe, sans <span class="kr">ka</span> : <span class="kr">Man sé domi</span>, j'aimerais dormir.</p><p>Faim et soif sans verbe : <span class="kr">Man fen</span>, <span class="kr">Man swèf</span>.</p>`,
  culture:`<b>Manman !</b> en début ou fin de phrase multiplie l'émotion : <i>Manman, sa bon !</i> « qu'est-ce que c'est bon ! ». Le <b>lambi</b> est un gros coquillage, le <b>blaff</b> un poisson poché au citron vert et piment.`,
  w:[["manjé","repas, nourriture"],["diri","riz"],["pwason","poisson"],["lanbi","lambi (coquillage)"],["akra","accras"],["bannann","banane"],["zaboka","avocat"],["mango","mangue"],["piman","piment"],["koko","noix de coco"],["kafé","café"],["ji","jus"],["ti-ponch","ti-punch"],["fen","faim"],["swèf","soif"]],
  s:[["Man fen.","J'ai faim."],["Ki pri'y ?","Quel est son prix ?"],["Ba mwen an liv bannann.","Donne-moi une livre de bananes."],["Manman, sa bon !","Qu'est-ce que c'est bon !"],["Man ké pran an blaf pwason.","Je prendrai un blaff de poisson."],["Ou lé an ti-ponch ?","Tu veux un ti-punch ?"],["Pa mété two piman.","Ne mets pas trop de piment."]]},

{ id:"ko", t:"Kò'w", sub:"Le corps et le mouvement",
  note:`<p>Le réfléchi se fait avec <span class="kr">kò</span> (corps) + possessif : <span class="kr">Lavé kò'w !</span> (lave-toi), <span class="kr">Lonjé kò'w !</span> (allonge-toi).</p><p><span class="kr">Annou</span> + verbe = « allons… » : <span class="kr">Annou kouri !</span></p><p>Pour une douleur : <span class="kr">Man ni mal</span> + partie du corps, ou <span class="kr">… ka fè mwen mal</span>.</p>`,
  culture:`Le <b>danmyé</b> (ou <b>ladja</b>) est l'art de combat dansé de la Martinique, pratiqué en cercle au son du tambour <b>bèlè</b>, cousin de la capoeira.`,
  w:[["kò","corps"],["tèt","tête"],["zié","yeux"],["bouch","bouche"],["lanmen","main"],["bra","bras"],["janm","jambe"],["pié","pied"],["do","dos"],["jounou","genou"],["kouri","courir"],["soté","sauter"],["najé","nager"],["lonjé","allonger, étirer"],["annou","allons, allez"]],
  s:[["Man ni mal tèt.","J'ai mal à la tête."],["Jounou-mwen ka fè mwen mal.","Mon genou me fait mal."],["Annou kouri bodlanmè !","Allons courir au bord de la mer !"],["Lonjé kò'w !","Allonge-toi !"],["I ka najé kon an pwason.","Il nage comme un poisson."],["Plis fòs !","Courage, plus de force !"]]},

{ id:"lavil", t:"Koté'y yé ?", sub:"Se repérer en ville",
  note:`<p>Avec un lieu de l'île, pas de préposition : <span class="kr">I Sent-Mari</span> (il est à Sainte-Marie), <span class="kr">Man ka alé Fodfrans</span>.</p><p>Droite et gauche passent par la main : <span class="kr">asou lanmen dwèt</span>, <span class="kr">asou lanmen gòch</span>.</p><p>« Il faut » : <span class="kr">fò</span> ou <span class="kr">fok</span>, sans sujet : <span class="kr">Fò janbé lari-a</span>.</p>`,
  culture:`<b>Fodfrans</b> (Fort-de-France) s'appelait autrefois Fort-Royal. On dit aussi simplement <b>lavil</b>, « la ville ».`,
  w:[["chimen","chemin"],["lavil","la ville"],["lapòs","la poste"],["lotèl","l'hôtel"],["taksi","taxi"],["bis","bus"],["lanmen dwèt","la droite"],["lanmen gòch","la gauche"],["toudwèt","tout droit"],["pré","près"],["lwen","loin"],["isi-a","ici"],["janbé","traverser"],["pran","prendre"],["fò","il faut"]],
  s:[["Es ou pé di mwen ki chimen pou pran ?","Peux-tu m'indiquer quel chemin prendre ?"],["Pran premié lari-a.","Prends la première rue."],["Zot pa lwen.","Vous n'êtes pas loin."],["Fò janbé lari-a.","Il faut traverser la rue."],["Lotèl-la asou lanmen dwèt.","L'hôtel est à droite."],["Annou pran an taksi.","Prenons un taxi."]]},

{ id:"lanati", t:"Tan-an", sub:"Le temps qu'il fait, la nature",
  note:`<p>Deux façons de parler de la météo : impersonnelle avec <span class="kr">fè</span> (<span class="kr">Ka fè cho</span>), ou en faisant agir les éléments (<span class="kr">Lapli ka tonbé</span>, la pluie tombe).</p><p>Les marqueurs fonctionnent comme partout : <span class="kr">Lapli kay tonbé</span>, il va pleuvoir.</p>`,
  culture:`La Martinique est surnommée <b>Madinina</b>, l'île aux fleurs. Ses collines s'appellent des <b>mòn</b> (mornes) ; le point culminant est la Montagne Pelée. Le <b>kokliko</b> (hibiscus) et le <b>kolibri</b> en sont des emblèmes.`,
  w:[["solèy","soleil"],["van","vent"],["bodlanmè","bord de mer, plage"],["mòn","morne, colline"],["rivyè","rivière"],["piébwa","arbre"],["flè","fleur"],["kokliko","hibiscus"],["kolibri","colibri"],["cho","chaud"],["fwèt","froid"],["bèl","beau, belle"],["anpil","beaucoup"]],
  s:[["Ka fè cho jodi-a.","Il fait chaud aujourd'hui."],["Lapli kay tonbé.","Il va pleuvoir."],["Tan-an bèl.","Il fait beau."],["Lanmè-a démonté.","La mer est agitée."],["Ni anpil flè isi-a.","Il y a beaucoup de fleurs ici."],["Annou monté mòn-lan.","Montons le morne."]]},

{ id:"santiman", t:"Pawòl dous", sub:"Émotions, comparaisons, expressions",
  note:`<p>Comparer : <span class="kr">pasé</span> = plus que (<span class="kr">Jan fen pasé nou</span>, Jean a plus faim que nous). <span class="kr">otan ki</span> = autant que.</p><p>L'adjectif se place directement après le sujet : <span class="kr">Man las</span> (je suis fatigué), <span class="kr">I kontan</span>.</p><p>Exclamations utiles : <span class="kr">Woyoyoy !</span> (oh là là), <span class="kr">Ébé !</span> (ça alors !).</p>`,
  culture:`<i>Anni kité kò'w alé !</i> « laisse simplement ton corps aller » : l'invitation à profiter, danser, lâcher prise. <i>Tjenbé rèd, pa moli</i> : tiens bon, ne faiblis pas.`,
  w:[["kontan","content, heureux"],["tris","triste"],["las","fatigué"],["pè","avoir peur"],["anmizé","s'amuser"],["bon","bon"],["mové","méchant, mauvais"],["doudou","chéri, chérie"],["Woyoyoy !","oh là là !"],["pasé","plus que"],["otan ki","autant que"],["tibren","un peu"],["anni","seulement, juste"]],
  s:[["Man kontan wè'w !","Je suis content de te voir !"],["Jan fen pasé nou.","Jean a plus faim que nous."],["Man enmen lanbi otan ki pwason.","J'aime le lambi autant que le poisson."],["Anni kité kò'w alé !","Laisse-toi aller !"],["Tjenbé rèd, pa moli !","Tiens bon, ne lâche pas !"],["Man tibren las.","Je suis un peu fatigué."],["Pran pié-zot !","Amusez-vous bien !"]]}
];

/* index des mots */
const WORDS = {}; UNITS.forEach((u,ui)=>{u.idx=ui;u.w.forEach((w,i)=>{WORDS[u.id+":"+i]={id:u.id+":"+i,kr:w[0],fr:w[1],u:ui}})});

/* ============ ÉTAT ============ */
const KEY="kreyol-matinik-v1";
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const DAY=864e5;
function fresh(){return{units:{},srs:{},xp:{date:today(),n:0},streak:{last:null,n:0},unlockAll:false,updatedAt:0}}
let S=fresh();
try{const raw=localStorage.getItem(KEY);if(raw)S=Object.assign(fresh(),JSON.parse(raw))}catch(e){}

function save(){
  S.updatedAt=Date.now();
  try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
  }

function addXP(n){if(S.xp.date!==today())S.xp={date:today(),n:0};S.xp.n+=n;
  const t=today(); if(S.streak.last!==t){const y=new Date(Date.now()-DAY);const ys=y.getFullYear()+"-"+String(y.getMonth()+1).padStart(2,"0")+"-"+String(y.getDate()).padStart(2,"0");
  S.streak.n=(S.streak.last===ys)?S.streak.n+1:1;S.streak.last=t}}
function xpToday(){return S.xp.date===today()?S.xp.n:0}
function streakNow(){const t=today();const y=new Date(Date.now()-DAY);const ys=y.getFullYear()+"-"+String(y.getMonth()+1).padStart(2,"0")+"-"+String(y.getDate()).padStart(2,"0");return (S.streak.last===t||S.streak.last===ys)?S.streak.n:0}
const INTERVALS=[0,1,3,7,16,35]; // jours par boîte (1..5)
function dueList(){const now=Date.now();return Object.entries(S.srs).filter(([id,c])=>c.due<=now&&WORDS[id]).map(([id])=>id)}
function unitDone(i){return !!(S.units[UNITS[i].id]&&S.units[UNITS[i].id].done)}
function unlocked(i){return S.unlockAll||i===0||unitDone(i-1)||unitDone(i)}
const GOAL=30;

/* ============ OUTILS ============ */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’']/g,"").replace(/[-.,!?;:«»"]/g," ").replace(/\s+/g," ").trim();
const normKeep=s=>s.toLowerCase().replace(/[’']/g,"").replace(/[-.,!?;:«»"]/g," ").replace(/\s+/g," ").trim();
const SPK=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
let voice=null;
function pickVoice(){try{const vs=speechSynthesis.getVoices();voice=vs.find(v=>/fr[-_](FR|CA)/i.test(v.lang))||vs.find(v=>/^fr/i.test(v.lang))||null}catch(e){}}
try{pickVoice();speechSynthesis.onvoiceschanged=pickVoice}catch(e){}
function say(t){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t.replace(/ \/ .*/,"").replace(/[-’']/g," "));u.lang="fr-FR";if(voice)u.voice=voice;u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
const sayBtn=t=>`<button class="say" data-say="${esc(t)}" aria-label="Écouter ${esc(t)}">${SPK}</button>`;
document.addEventListener("click",e=>{const b=e.target.closest("[data-say]");if(b){e.stopPropagation();say(b.dataset.say)}});

/* ============ NAVIGATION ============ */
let tab="home", view={name:"home"};
function go(v){view=v;render();window.scrollTo(0,0)}
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("button[data-tab]");if(!b)return;tab=b.dataset.tab;go({name:tab});try{localStorage.setItem(KEY+":tab",tab)}catch(e){}});

function chrome(){
  $("#streak").textContent=streakNow(); $("#xpToday").textContent=xpToday();
  const d=dueList().length,b=$("#dueBadge");b.hidden=!d;b.textContent=d;
  document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-current",b.dataset.tab===tab?"page":"false"));
  const inEx=view.name==="ex"||view.name==="result";
  $("#tabs").hidden=inEx; document.querySelector("header.top").hidden=inEx;
}
function render(){chrome();const m=$("#main");
  ({home:vHome,unit:vUnit,ex:vEx,result:vResult,review:vReview,grammar:vGrammar,lex:vLex}[view.name]||vHome)(m)}

/* ============ VUES ============ */
function stars(n){return `<span class="stars" aria-label="${n} étoiles sur 3">${[1,2,3].map(i=>i<=n?"★":`<span class="off">★</span>`).join("")}</span>`}
function vHome(m){
  const doneN=UNITS.filter((u,i)=>unitDone(i)).length;
  const nextI=UNITS.findIndex((u,i)=>!unitDone(i)); const due=dueList().length;
  const pct=Math.min(100,Math.round(xpToday()/GOAL*100));
  m.innerHTML=`<section class="view">
  <div class="today">
    <div style="display:flex;flex-direction:column;gap:8px;min-width:0">
      <span class="lbl">Objectif du jour</span>
      <h2>${xpToday()>=GOAL?"Objectif atteint, bravo !":`${xpToday()} / ${GOAL} points`}</h2>
      <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
      <span class="muted" style="font-size:.9rem">${doneN} leçon${doneN>1?"s":""} sur ${UNITS.length} · ${Object.keys(S.srs).length} mots en mémoire${due?` · <b style="color:var(--hib)">${due} à réviser</b>`:""}</span>
    </div>
  </div>
  ${due?`<button class="btn hib block" id="goRev">Réviser ${due} mot${due>1?"s":""}</button>`:nextI>=0?`<button class="btn block" id="goNext">${doneN?"Continuer":"Commencer"} : ${esc(UNITS[nextI].t)}</button>`:""}
  <div style="display:flex;flex-direction:column;gap:10px"><span class="lbl">Parcours</span>
  <ol class="path">${UNITS.map((u,i)=>{const st=S.units[u.id]||{};const lock=!unlocked(i);const cls=unitDone(i)?"done":(i===nextI?"next":"")+(lock?" locked":"");
    return `<li><button class="unit ${cls}" data-u="${i}" ${lock?'aria-disabled="true"':""}><span class="num">${unitDone(i)?"✓":i+1}</span><span style="min-width:0"><h3>${esc(u.t)}</h3><p>${esc(u.sub)}</p></span>${lock?`<span class="muted" aria-label="verrouillée">🔒</span>`:stars(st.stars||0)}</button></li>`}).join("")}</ol>
  ${S.unlockAll?"":`<button class="linkbtn" id="unlock">Je connais déjà les bases : tout débloquer</button>`}
  </div>
  <div class="backup" id="backup">
    <span class="lbl">Sauvegarde</span>
    <p class="muted" style="margin:0;font-size:.92rem">Ta progression est enregistrée sur cet appareil. Exporte-la de temps en temps pour la garder en lieu sûr ou la passer sur un autre téléphone.${S.lastExport?` Dernier export : ${new Date(S.lastExport).toLocaleDateString("fr-FR")}.`:""}</p>
    <div class="row2"><button class="btn ghost" id="exp">Exporter</button><button class="btn ghost" id="imp">Importer</button></div>
    <input type="file" id="impFile" accept=".json,application/json" hidden>
    <div id="impMsg" role="status"></div>
  </div></section>`;
  m.querySelectorAll(".unit").forEach(b=>b.onclick=()=>{const i=+b.dataset.u;if(!unlocked(i)){b.animate?.([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"none"}],{duration:200});return}go({name:"unit",i})});
  $("#goNext")&&($("#goNext").onclick=()=>go({name:"unit",i:nextI}));
  $("#goRev")&&($("#goRev").onclick=()=>{tab="review";go({name:"review"})});
  $("#unlock")&&($("#unlock").onclick=()=>{S.unlockAll=true;save();render()});
  $("#exp").onclick=exportBackup;
  $("#imp").onclick=()=>$("#impFile").click();
  $("#impFile").onchange=e=>{const f=e.target.files[0];e.target.value="";if(f)readBackup(f)};
}

function vUnit(m){const u=UNITS[view.i];
  m.innerHTML=`<section class="view">
  <button class="back" id="bk">← Parcours</button>
  <div class="lesson-head"><span class="lbl">Leçon ${view.i+1} sur ${UNITS.length}</span><h2>${esc(u.t)}</h2><span class="muted">${esc(u.sub)}</span></div>
  <div class="note">${u.note}</div>
  <div class="culture">${u.culture}</div>
  <div style="display:flex;flex-direction:column;gap:8px"><span class="lbl">Vocabulaire</span>
  <ul class="vocab">${u.w.map(w=>`<li><span class="krw">${esc(w[0])}</span><span class="fr">${esc(w[1])}</span>${sayBtn(w[0])}</li>`).join("")}</ul></div>
  <div class="sent"><span class="lbl">Phrases modèles</span>${u.s.map(s=>`<div><p style="margin:0;min-width:0"><b>${esc(s[0])}</b><span>${esc(s[1])}</span></p>${sayBtn(s[0])}</div>`).join("")}</div>
  <div class="sticky-cta"><button class="btn hib block" id="start">S'entraîner (12 exercices)</button></div>
  </section>`;
  $("#bk").onclick=()=>go({name:"home"}); $("#start").onclick=()=>startEx(view.i);
}

/* ---------- exercices ---------- */
function makeQs(ui){const u=UNITS[ui];
  const pool=Object.values(WORDS);
  const ws=shuffle(u.w.map((w,i)=>WORDS[u.id+":"+i])).slice(0,8);
  const ss=shuffle(u.s).slice(0,4);
  const qs=[];
  ws.forEach((w,k)=>{
    const t=k%3===2&&!w.kr.includes("/")&&w.kr.length<=16?"type":(k%2?"fr2kr":"kr2fr");
    const same=pool.filter(x=>x.id!==w.id&&x.fr!==w.fr&&x.kr!==w.kr);
    const near=shuffle(same.filter(x=>x.u===ui)).concat(shuffle(same.filter(x=>x.u!==ui)));
    const dis=near.slice(0,3);
    qs.push({type:t,w,opts:shuffle([w,...dis])});
  });
  const alltok=UNITS.flatMap(x=>x.s.flatMap(s=>s[0].split(" ")));
  ss.forEach(s=>{const tk=s[0].split(" ");const extra=shuffle(alltok.filter(t=>!tk.includes(t))).filter((t,i,a)=>a.indexOf(t)===i).slice(0,Math.min(4,Math.max(2,6-tk.length+2)));
    qs.push({type:"build",s,tiles:shuffle([...tk,...extra].map((t,i)=>({t,i})))})});
  // mélange : mots d'abord légèrement, phrases intercalées
  const out=[];const W=qs.filter(q=>q.type!=="build"),B=qs.filter(q=>q.type==="build");
  W.forEach((q,i)=>{out.push(q);if(i%2===1&&B.length)out.push(B.shift())});return out.concat(B);
}
let EX=null;
function startEx(ui){EX={ui,qs:makeQs(ui),k:0,ok:0,miss:new Set(),state:"ask",sel:null,built:[]};go({name:"ex"})}
function vEx(m){const q=EX.qs[EX.k];const pct=Math.round(EX.k/EX.qs.length*100);
  let body="";
  if(q.type==="kr2fr")body=`<span class="lbl">Que veut dire…</span><div class="big">${esc(q.w.kr)} ${sayBtn(q.w.kr)}</div><div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-o="${i}">${esc(o.fr)}</button>`).join("")}</div>`;
  if(q.type==="fr2kr")body=`<span class="lbl">Comment dit-on en créole…</span><div class="big">${esc(q.w.fr)}</div><div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-o="${i}">${esc(o.kr)}</button>`).join("")}</div>`;
  if(q.type==="type")body=`<span class="lbl">Écris en créole</span><div class="big">${esc(q.w.fr)}</div><input class="typein" id="tin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta réponse"><div class="accents">${["é","è","ò","'"].map(a=>`<button data-acc="${a}">${a}</button>`).join("")}</div>`;
  if(q.type==="build")body=`<span class="lbl">Traduis en créole</span><div class="big" style="font-size:1.35rem">${esc(q.s[1])}</div><div class="answer-line" id="line" aria-label="Ta phrase">${EX.built.map((ti,j)=>`<button class="tile" data-rm="${j}">${esc(q.tiles[ti].t)}</button>`).join("")}</div><div class="bank">${q.tiles.map((t,i)=>`<button class="tile ${EX.built.includes(i)?"used":""}" data-add="${i}">${esc(t.t)}</button>`).join("")}</div>`;
  m.innerHTML=`<section class="view"><div class="ex-top"><button class="x" id="quit" aria-label="Quitter">×</button><div class="bar"><i style="width:${pct}%;background:var(--gold)"></i></div><span class="muted" style="font-variant-numeric:tabular-nums">${EX.k+1}/${EX.qs.length}</span></div>
  <div class="prompt">${body}</div><div style="height:150px"></div></section>
  <div class="feedback" id="fb"><div class="in"><button class="btn block" id="check" disabled>Vérifier</button></div></div>`;
  $("#quit").onclick=()=>{const ui=EX.ui;EX=null;go({name:"unit",i:ui})};
  const check=$("#check");
  if(q.type==="kr2fr"||q.type==="fr2kr"){m.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(EX.state!=="ask")return;m.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");EX.sel=+b.dataset.o;check.disabled=false})}
  if(q.type==="type"){const tin=$("#tin");tin.focus();tin.oninput=()=>check.disabled=!tin.value.trim();tin.onkeydown=e=>{if(e.key==="Enter"&&tin.value.trim())check.click()};
    m.querySelectorAll("[data-acc]").forEach(b=>b.onclick=()=>{const p=tin.selectionStart??tin.value.length;tin.value=tin.value.slice(0,p)+b.dataset.acc+tin.value.slice(p);tin.focus();tin.setSelectionRange(p+1,p+1);check.disabled=false})}
  if(q.type==="build"){check.disabled=!EX.built.length;
    m.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{if(EX.state!=="ask")return;const i=+b.dataset.add;if(EX.built.includes(i))return;EX.built.push(i);say(q.tiles[i].t);vEx(m)});
    m.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{if(EX.state!=="ask")return;EX.built.splice(+b.dataset.rm,1);vEx(m)})}
  check.onclick=()=>grade(m,q);
}
function grade(m,q){let ok=false,expected="",extra="";
  if(q.type==="kr2fr"||q.type==="fr2kr"){ok=q.opts[EX.sel]===q.w;expected=q.type==="kr2fr"?q.w.fr:q.w.kr;
    m.querySelectorAll(".opt").forEach((b,i)=>{if(q.opts[i]===q.w)b.classList.add("good");else if(i===EX.sel)b.classList.add("bad")})}
  if(q.type==="type"){const v=$("#tin").value;const alts=q.w.kr.split(" / ");ok=alts.some(a=>norm(a)===norm(v));expected=q.w.kr;
    if(ok&&!alts.some(a=>normKeep(a)===normKeep(v)))extra=`Attention aux accents : <b>${esc(q.w.kr)}</b>`;$("#tin").disabled=true}
  if(q.type==="build"){const got=EX.built.map(i=>q.tiles[i].t).join(" ");ok=norm(got)===norm(q.s[0]);expected=q.s[0]}
  const sayT=q.w?q.w.kr:q.s[0];
  if(ok){EX.ok++}else if(q.w)EX.miss.add(q.w.id);
  EX.state="shown"; say(sayT);
  const fb=$("#fb");fb.className="feedback "+(ok?"good":"bad");
  fb.innerHTML=`<div class="in"><h3>${ok?["Bien joué !","Bravo !","Exact !","Sé sa menm !"][Math.floor(Math.random()*4)]:"Pas tout à fait."}</h3>${!ok?`<div>Bonne réponse : <b>${esc(expected)}</b></div>`:extra?`<div>${extra}</div>`:""}<button class="btn ${ok?"":"hib"} block" id="nx">Continuer</button></div>`;
  $("#nx").focus(); $("#nx").onclick=()=>{EX.k++;EX.state="ask";EX.sel=null;EX.built=[];if(EX.k>=EX.qs.length)finishEx();else vEx($("#main"))};
}
function finishEx(){const u=UNITS[EX.ui];const pct=EX.ok/EX.qs.length;const st=pct>=.95?3:pct>=.8?2:pct>=.6?1:0;
  const prev=S.units[u.id]||{};const done=prev.done||pct>=.6;
  S.units[u.id]={done,stars:Math.max(prev.stars||0,st)};
  if(done){u.w.forEach((w,i)=>{const id=u.id+":"+i;if(!S.srs[id])S.srs[id]={box:1,due:Date.now()+DAY}})}
  EX.miss.forEach(id=>{if(S.srs[id])S.srs[id]={box:1,due:Date.now()}});
  addXP(EX.ok*2+(done?5:0));save();
  view={name:"result",i:EX.ui,ok:EX.ok,n:EX.qs.length,st,pass:pct>=.6};render();window.scrollTo(0,0)}
function vResult(m){const v=view;const next=v.i+1<UNITS.length?v.i+1:null;
  m.innerHTML=`<section class="view result"><span class="lbl">${esc(UNITS[v.i].t)}</span><div class="score">${v.ok}/${v.n}</div>${stars(v.st)}
  <p style="max-width:34ch;margin:0">${v.pass?(v.st===3?"Parfait. Les mots de cette leçon entrent dans tes révisions.":"Leçon validée ! Les mots entrent dans tes révisions."):"Encore un essai : il faut 60 % pour valider la leçon."}</p>
  <div style="display:flex;flex-direction:column;gap:10px;width:100%">
  ${v.pass&&next!==null?`<button class="btn hib block" id="nxt">Leçon suivante : ${esc(UNITS[next].t)}</button>`:""}
  <button class="btn ${v.pass?"ghost":"hib"} block" id="again">Refaire les exercices</button>
  <button class="btn ghost block" id="home">Retour au parcours</button></div></section>`;
  $("#again").onclick=()=>startEx(v.i);$("#home").onclick=()=>{tab="home";go({name:"home"})};
  $("#nxt")&&($("#nxt").onclick=()=>go({name:"unit",i:next}));
}

/* ---------- révision espacée ---------- */
let RV=null;
function vReview(m){
  const total=Object.keys(S.srs).length;
  if(!RV||RV.done){const due=shuffle(dueList()).slice(0,20);
    const boxes=[1,2,3,4,5].map(b=>Object.values(S.srs).filter(c=>c.box===b).length);
    if(!total){m.innerHTML=`<section class="view"><h2 style="font-size:1.6rem">Révisions</h2><div class="card"><div class="face">Pa ankò…</div><p class="muted" style="max-width:32ch">Pas encore de mots à réviser. Valide ta première leçon et ses mots arriveront ici, au bon moment pour ne pas les oublier.</p><button class="btn hib" id="toHome">Aller à la leçon 1</button></div></section>`;$("#toHome").onclick=()=>{tab="home";go({name:"unit",i:0})};return}
    m.innerHTML=`<section class="view"><h2 style="font-size:1.6rem">Révisions</h2>
    <p class="muted" style="margin:0">Chaque mot monte d'une boîte quand tu t'en souviens et revient de plus en plus tard (1, 3, 7, 16 puis 35 jours). Un oubli le renvoie en boîte 1.</p>
    <div class="boxes">${boxes.map((n,i)=>`<div><b>${n}</b><span>boîte ${i+1}</span></div>`).join("")}</div>
    ${due.length?`<button class="btn hib block" id="go">Réviser ${due.length} mot${due.length>1?"s":""} maintenant</button>`:`<div class="card" style="min-height:140px"><div class="face" style="font-size:1.4rem">Tout est à jour !</div><p class="muted" style="margin:0">Prochaine révision prévue ${nextDueText()}.</p></div><button class="btn ghost block" id="extra">Réviser 10 mots au hasard</button>`}</section>`;
    const startRV=list=>{RV={list,k:0,flip:false,good:0,done:false,dir:list.map(()=>Math.random()<.5)};vReview(m)};
    $("#go")&&($("#go").onclick=()=>startRV(due));
    $("#extra")&&($("#extra").onclick=()=>startRV(shuffle(Object.keys(S.srs).filter(id=>WORDS[id])).slice(0,10)));
    return}
  const id=RV.list[RV.k],w=WORDS[id],krFirst=RV.dir[RV.k];
  m.innerHTML=`<section class="view"><div class="ex-top"><button class="x" id="q" aria-label="Arrêter">×</button><div class="bar"><i style="width:${Math.round(RV.k/RV.list.length*100)}%;background:var(--sea)"></i></div><span class="muted" style="font-variant-numeric:tabular-nums">${RV.k+1}/${RV.list.length}</span></div>
  <div class="card" id="cd"><span class="lbl">${krFirst?"Créole → français":"Français → créole"}</span><div class="face">${esc(krFirst?w.kr:w.fr)}</div>${krFirst?sayBtn(w.kr):""}
  ${RV.flip?`<div class="back-side"><b style="color:var(--ink)">${esc(krFirst?w.fr:w.kr)}</b></div>${!krFirst?sayBtn(w.kr):""}<span class="muted" style="font-size:.8rem">Leçon : ${esc(UNITS[w.u].t)}</span>`:""}</div>
  ${RV.flip?`<div class="row2"><button class="btn hib" id="no">À revoir</button><button class="btn" id="yes" style="background:var(--leaf);color:#fff">Je savais</button></div>`:`<button class="btn block" id="fl">Voir la réponse</button>`}</section>`;
  $("#q").onclick=()=>{RV=null;vReview(m)};
  $("#fl")&&($("#fl").onclick=()=>{RV.flip=true;if(krFirst)say(w.kr);else say(w.kr);vReview(m)});
  const next=good=>{const c=S.srs[id]||{box:1};
    if(good){c.box=Math.min(5,c.box+1);c.due=Date.now()+INTERVALS[c.box]*DAY;RV.good++}else{c.box=1;c.due=Date.now()+DAY/2}
    S.srs[id]=c;addXP(1);save();RV.k++;RV.flip=false;
    if(RV.k>=RV.list.length){const g=RV.good,n=RV.list.length;RV.done=true;chrome();
      m.innerHTML=`<section class="view result"><span class="lbl">Révision terminée</span><div class="score">${g}/${n}</div><p style="margin:0">${g===n?"Tout est resté en mémoire. Mèsi anpil !":"Les mots oubliés reviendront bientôt."}</p><button class="btn block" id="bk2">Retour</button></section>`;
      $("#bk2").onclick=()=>{RV=null;vReview(m)};return}
    chrome();vReview(m)};
  $("#no")&&($("#no").onclick=()=>next(false));$("#yes")&&($("#yes").onclick=()=>next(true));
}
function nextDueText(){const ds=Object.values(S.srs).map(c=>c.due);if(!ds.length)return"plus tard";const d=Math.min(...ds)-Date.now();const h=Math.round(d/36e5);return h<24?`dans ${Math.max(1,h)} h`:`dans ${Math.round(h/24)} jour${Math.round(h/24)>1?"s":""}`}

/* ---------- grammaire ---------- */
function vGrammar(m){
  const G=[
  ["Prononcer et lire",`<p>L'orthographe créole (dite GEREC) est phonétique : chaque lettre se prononce, toujours de la même façon.</p>
   <div class="tbl"><table><tr><th>Graphie</th><th>Son</th><th>Exemple</th></tr>
   <tr><td class="k">é / è / ò</td><td>é fermé, è ouvert, o ouvert</td><td>bèl, kò, mèsi</td></tr>
   <tr><td class="k">ou</td><td>comme en français</td><td>bouch</td></tr>
   <tr><td class="k">w</td><td>« ou » bref, remplace souvent le r français</td><td>gwo (gros), wouj (rouge)</td></tr>
   <tr><td class="k">an / en / on</td><td>voyelles nasales</td><td>pen, moun</td></tr>
   <tr><td class="k">an-n, ann</td><td>nasale + n prononcé</td><td>lanmè, annou</td></tr>
   <tr><td class="k">i</td><td>remplace le u français</td><td>lalin (lune), jis</td></tr>
   <tr><td class="k">tj / dj</td><td>« ti » / « di » mouillés</td><td>tjè (cœur), tjenbé</td></tr>
   <tr><td class="k">s, j, ch, g</td><td>toujours « ss », « j », « ch », « g dur »</td><td>sik, janm, gason</td></tr></table></div>
   <p class="muted">Le bouton haut-parleur utilise la voix française de ton téléphone : la prononciation est approchée, pas native.</p>`],
  ["Pronoms et possessifs",`<div class="tbl"><table><tr><th>Sujet</th><th>Complément</th><th>Possessif</th><th>Français</th></tr>
   <tr><td class="k">man / mwen</td><td class="k">mwen</td><td class="k">kay-mwen</td><td>je, me, mon</td></tr>
   <tr><td class="k">ou</td><td class="k">ou / 'w</td><td class="k">sak-ou, manman'w</td><td>tu, te, ton</td></tr>
   <tr><td class="k">i</td><td class="k">li / 'y</td><td class="k">kay-li, papa'y</td><td>il/elle, le/la, son</td></tr>
   <tr><td class="k">nou</td><td class="k">nou</td><td class="k">kay-nou</td><td>nous, notre</td></tr>
   <tr><td class="k">zot</td><td class="k">zot</td><td class="k">kay-zot</td><td>vous, votre</td></tr>
   <tr><td class="k">yo</td><td class="k">yo</td><td class="k">kay-yo</td><td>ils/on, les, leur</td></tr></table></div>
   <p><b>'w / 'y</b> après une voyelle, <b>ou / li</b> après une consonne. Le pronom complément suit le verbe : <span class="kr">Man ka wè'y</span>, je le vois.</p>`],
  ["Les articles",`<div class="tbl"><table><tr><th>Fin du nom</th><th>Article</th><th>Exemple</th></tr>
   <tr><td>consonne</td><td class="k">-la</td><td>kay-la, liv-la</td></tr>
   <tr><td>voyelle orale</td><td class="k">-a</td><td>loto-a, lanmè-a</td></tr>
   <tr><td>voyelle nasale</td><td class="k">-an</td><td>pen-an, chien-an</td></tr>
   <tr><td>m, n</td><td class="k">-lan</td><td>moun-lan, mòn-lan</td></tr></table></div>
   <p>Indéfini : <span class="kr">an</span> devant le nom. Pluriel défini : <span class="kr">sé … -la</span>. Démonstratif : <span class="kr">-tala</span> (<span class="kr">taksi-tala</span>, ce taxi). Sans article : sens général ou partitif.</p>`],
  ["Les marqueurs de temps",`<div class="tbl"><table><tr><th>Marqueur</th><th>Valeur</th><th>Exemple</th><th>Français</th></tr>
   <tr><td class="k">(rien)</td><td>passé composé</td><td>Ou dansé.</td><td>Tu as dansé.</td></tr>
   <tr><td class="k">ka</td><td>présent</td><td>Ou ka dansé.</td><td>Tu danses.</td></tr>
   <tr><td class="k">té ka</td><td>imparfait</td><td>Ou té ka dansé.</td><td>Tu dansais.</td></tr>
   <tr><td class="k">té</td><td>plus-que-parfait</td><td>Ou té dansé.</td><td>Tu avais dansé.</td></tr>
   <tr><td class="k">ké</td><td>futur</td><td>Ou ké dansé.</td><td>Tu danseras.</td></tr>
   <tr><td class="k">kay</td><td>futur proche</td><td>Ou kay dansé.</td><td>Tu vas danser.</td></tr>
   <tr><td class="k">té ké</td><td>conditionnel</td><td>Ou té ké dansé.</td><td>Tu danserais.</td></tr>
   <tr><td class="k">—</td><td>impératif</td><td>Dansé !</td><td>Danse !</td></tr></table></div>
   <p>Les verbes d'état (<span class="kr">enmen, sav, konnèt, lé, pé, ni</span>) n'ont pas besoin de <span class="kr">ka</span> au présent, et sans marqueur ils ont un sens présent : <span class="kr">Man sav</span>, je sais.</p>`],
  ["Être : sé, rien ou yé",`<p><b>Devant un nom</b> : <span class="kr">sé</span>. <span class="kr">Man sé moun Pari.</span></p><p><b>Devant un adjectif, un lieu, un âge</b> : rien. <span class="kr">I gran. Nou la. Lotèl-la lwen.</span></p><p><b>En fin de phrase</b> (questions, relatives) : <span class="kr">yé</span>. <span class="kr">Koté ou yé ? Ki lè i yé ?</span></p><p>« C'est » se dit <span class="kr">sé</span>, et sa négation <span class="kr">sé pa</span> : <span class="kr">Sé pa liméwo-tala.</span></p>`],
  ["La négation",`<div class="tbl"><table><tr><th>Forme</th><th>Exemple</th><th>Français</th></tr>
   <tr><td class="k">pa</td><td>Man pa konprann.</td><td>Je ne comprends pas.</td></tr>
   <tr><td class="k">pa ka</td><td>Nou pa ka dòmi.</td><td>Nous ne dormons pas.</td></tr>
   <tr><td class="k">pa té</td><td>I pa té la.</td><td>Il n'était pas là.</td></tr>
   <tr><td class="k">pé ké</td><td>Man pé ké vini.</td><td>Je ne viendrai pas.</td></tr>
   <tr><td class="k">poko</td><td>Man poko manjé.</td><td>Je n'ai pas encore mangé.</td></tr>
   <tr><td class="k">pani</td><td>Pani moun.</td><td>Il n'y a personne.</td></tr>
   <tr><td class="k">piès</td><td>Piès piès piès !</td><td>Pas du tout !</td></tr></table></div>`],
  ["Les questions",`<div class="tbl"><table><tr><th>Créole</th><th>Français</th><th>Exemple</th></tr>
   <tr><td class="k">ki moun</td><td>qui</td><td>Ki moun ki la ?</td></tr>
   <tr><td class="k">ki sa</td><td>quoi</td><td>Ki sa ou lé ?</td></tr>
   <tr><td class="k">ki koté, éti</td><td>où</td><td>Koté ou ka alé ?</td></tr>
   <tr><td class="k">ki lè, ki tan</td><td>quand</td><td>Ki tan ou ka vini ?</td></tr>
   <tr><td class="k">ki mannié</td><td>comment</td><td>Ki mannié ou ka touvé'y ?</td></tr>
   <tr><td class="k">poutji</td><td>pourquoi</td><td>Poutji ou ka ri ?</td></tr>
   <tr><td class="k">konbien</td><td>combien</td><td>Konbien jou ou ka rété ?</td></tr>
   <tr><td class="k">es</td><td>est-ce que</td><td>Es ou fen ?</td></tr></table></div>
   <p>Quand la question porte sur le sujet, on ajoute <span class="kr">ki</span> : <span class="kr">Ki moun ki vini ?</span> (qui est venu ?).</p>`],
  ["Comparer et insister",`<p><span class="kr">pasé</span> : plus que · <span class="kr">mwens … ki</span> : moins que · <span class="kr">otan ki</span> : autant que.</p><p><span class="kr">Lotèl-la lwen pasé lanméri-a.</span> L'hôtel est plus loin que la mairie.</p><p><b>Insister sur un verbe</b> : on le répète en tête avec <span class="kr">sé</span>. <span class="kr">Sé li man ka li.</span> Je lis, rien d'autre.</p><p><b>Exagérer</b> : répéter un nom avec <span class="kr">épi</span>. <span class="kr">I ka manjé pwason épi pwason.</span> Il mange du poisson à n'en plus finir.</p>`]
  ];
  m.innerHTML=`<section class="view"><h2 style="font-size:1.6rem">Grammaire</h2><p class="muted" style="margin:0">L'essentiel de la langue en huit fiches. Le créole a peu de règles, mais elles sont régulières.</p>
  ${G.map((g,i)=>`<details class="g" ${i===3?"open":""}><summary>${g[0]}</summary><div class="body">${g[1]}</div></details>`).join("")}
  <p class="toast">Sources : guide Assimil <i>Créole martiniquais</i> (M. Antoine), R. Damoiseau, <i>Éléments de grammaire comparée français-créole martiniquais</i>, fiche LGIDF (L. Jean-Louis, A. Zribi-Hertz), dictionnaire de R. Confiant. L'orthographe suit surtout l'Assimil ; certaines graphies varient selon les auteurs.</p></section>`;
}

/* ---------- lexique ---------- */
function vLex(m){
  m.innerHTML=`<section class="view"><h2 style="font-size:1.6rem">Lexique</h2>
  <input class="search" id="q" type="search" placeholder="Chercher en créole ou en français" autocomplete="off">
  <p class="muted" id="cnt" style="margin:0;font-size:.9rem"></p><ul class="lex" id="list"></ul></section>`;
  const all=Object.values(WORDS).sort((a,b)=>a.kr.localeCompare(b.kr,"fr"));
  const draw=()=>{const q=norm($("#q").value);const r=q?all.filter(w=>norm(w.kr).includes(q)||norm(w.fr).includes(q)):all;
    $("#cnt").textContent=`${r.length} mot${r.length>1?"s":""}`;
    $("#list").innerHTML=r.map(w=>`<li><span style="min-width:0"><b>${esc(w.kr)}</b><br><span class="u">${esc(UNITS[w.u].t)}${S.srs[w.id]?` · boîte ${S.srs[w.id].box}`:""}</span></span><span class="muted" style="min-width:0">${esc(w.fr)}</span>${sayBtn(w.kr)}</li>`).join("")};
  $("#q").oninput=draw;draw();
}

/* ============ SAUVEGARDE ============ */
function exportBackup(){
  S.lastExport=Date.now();save();
  const data={app:"kreyol-matinik",format:1,exportedAt:new Date().toISOString(),state:S};
  const blob=new Blob([JSON.stringify(data,null,1)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`kreyol-matinik-sauvegarde-${today()}.json`;
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  impMsg(`Fichier <b>${a.download}</b> enregistré dans tes téléchargements.`,"ok");
}
function impMsg(html,kind){const el=$("#impMsg");if(!el)return;el.className="impmsg "+(kind||"");el.innerHTML=html}
function readBackup(file){
  const r=new FileReader();
  r.onload=()=>{let d;try{d=JSON.parse(r.result)}catch(e){return impMsg("Ce fichier n'est pas une sauvegarde lisible. Choisis le fichier .json exporté par l'app.","bad")}
    const st=d&&d.app==="kreyol-matinik"&&d.state;
    if(!st||typeof st.units!=="object"||typeof st.srs!=="object")return impMsg("Ce fichier ne vient pas de Kréyòl Matinik. Choisis un fichier « kreyol-matinik-sauvegarde-….json ».","bad");
    const nU=Object.values(st.units).filter(u=>u&&u.done).length,nW=Object.keys(st.srs).length;
    impMsg(`Sauvegarde du ${new Date(d.exportedAt).toLocaleDateString("fr-FR")} : ${nU} leçon${nU>1?"s":""} validée${nU>1?"s":""}, ${nW} mot${nW>1?"s":""}. Elle remplacera ta progression actuelle.
      <div class="row2" style="margin-top:10px"><button class="btn ghost" id="impNo">Annuler</button><button class="btn hib" id="impYes">Remplacer</button></div>`,"ask");
    $("#impNo").onclick=()=>impMsg("");
    $("#impYes").onclick=()=>{S=Object.assign(fresh(),st);save();render();impMsg("Progression restaurée.","ok")};
  };
  r.onerror=()=>impMsg("Lecture du fichier impossible. Réessaie.","bad");
  r.readAsText(file);
}

/* ============ HORS LIGNE ============ */

/* ============ DÉMARRAGE ============ */
try{const t=localStorage.getItem(KEY+":tab");if(t&&["home","review","grammar","lex"].includes(t)){tab=t;view={name:t}}}catch(e){}
render();
