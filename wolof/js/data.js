// Format de chaque ligne : wolof | français | note (optionnelle) | prononciation (optionnelle, sinon générée)
const DECKS = [
{id:'salut', name:'Salutations', tag:'Bases', rows:`
Salaamaalekum|Bonjour (que la paix soit sur vous)|Salutation utilisable à tout moment de la journée|Sa-lâ-ma-lé-koum
Maalekum salaam|Et sur vous la paix (réponse)||Mâ-lé-koum sa-lâm
Jàmm nga fanaan?|Bonjour (le matin)|Litt. « as-tu passé la nuit en paix ? »|Djamm nga fa-nân
Jàmm nga yendu?|Bonjour / bonsoir (après-midi)|Litt. « as-tu passé la journée en paix ? »|Djamm nga yèn-dou
Jàmm nga am?|Ça va ? (as-tu la paix ?)
Jàmm rekk|La paix seulement (réponse standard)||Djamm rèkk
Mbaa yaa ngi ci jàmm?|Es-tu en paix ?||Mbâ yâ-ngui tchi djamm
Naka nga def?|Comment vas-tu ?|Variante courante : Nanga def ?|Na-ka nga dèf
Maa ngi fi rekk|Je vais bien (je suis là)||Mâ-ngui fi rèkk
Sant Yàlla|Bien, Dieu merci|Litt. « remercie Dieu »
Alxamdulilaay|Grâce à Dieu|Réponse très fréquente|Al-kham-dou-li-lâï
Naka waa kër ga?|Comment va la famille ?||Na-ka wâ kèr ga
Ñu ngi fa|Ils vont bien (ils sont là)||Gnou-ngui fa
Naka liggéey bi?|Comment va le travail ?||Na-ka lig-guéy bi
Naka xale yi?|Comment vont les enfants ?||Na-ka kha-lé yi
Naka nga def ak coono bi?|Comment vas-tu avec la fatigue ?|Se dit à quelqu'un qui travaille|Na-ka nga dèf ak tchô-no bi
Mari, mu ngi ci jàmm|Marie va bien
Géjoon naa la gis|Ça faisait longtemps !
Nammoon naa la|Tu m'as manqué
Dalal ak jàmm!|Bienvenue !
Bisimilaay!|Bienvenue ! / Sers-toi !|Pour inviter à entrer ou à partager le repas|Bi-si-mi-lâï
Jërëjëf|Merci
Maa ngi lay sant bu baax|Merci beaucoup
Amul solo|De rien (ce n'est rien)
Noo ko bokk|Je t'en prie|Litt. « nous le partageons »
Baal ma|Excuse-moi / Pardon||Bâl ma
Baal naa la|Je t'excuse
Su la neexee|S'il te plaît
Waaw|Oui||Wâw
Waaw waaw|Bien sûr
Déedéet|Non
Baax na|D'accord / C'est bien
Xamuma|Je ne sais pas
`},
{id:'conge', name:'Prendre congé', tag:'Bases', rows:`
Ci jàmm!|Au revoir ! (en paix)||Tchi djamm
Ba beneen yoon!|À une prochaine fois !||Ba bé-nèn yôn
Ba beneen!|Au revoir !
Yendul ak jàmm|Passe une bonne journée||Yèn-doul ak djamm
Fanaanal ak jàmm|Passe une bonne nuit||Fa-nâ-nal ak djamm
Nu fanaan ak jàmm|Passons une bonne nuit
Amiin|Amen (réponse aux vœux)
Ba ëllëg ci suba|À demain matin
Ba ngoon|À cet après-midi||Ba ngôn
Ba guddi|À ce soir||Ba goud-di
Ba ëllëg|À demain||Ba eul-leug
Ba suba|À demain (matin)
Ba ci kanam|À bientôt||Ba tchi ka-nam
Ba ci jamano yii|À bientôt (un de ces jours)
Demal te ñów|À tout à l'heure (pars et reviens)
Na sa yoon neex!|Bon voyage !
`},
{id:'pres', name:'Se présenter', tag:'Bases', rows:`
Naka nga tudd?|Comment t'appelles-tu ?|Variante gambienne : Nanga tudd ?|Na-ka nga toudd
Maa ngi tudd Maam|Je m'appelle Maam
Maam laa tudd|Je m'appelle Maam|Mise en relief : « c'est Maam que je m'appelle »|Mâm lâ toudd
Naka nga sant?|Quel est ton nom de famille ?
Baas laa sant|Mon nom de famille est Baas||Bâs lâ sant
Waa fan nga?|D'où viens-tu ?||Wâ fan nga
Waa Faraas laa|Je suis français(e)|Waa + pays + laa
Waa Moritani laa|Je viens de Mauritanie||Wâ Mo-ri-ta-ni lâ
Sama jabar waa Moritani la|Ma femme vient de Mauritanie
Sa jabar waa fan la?|D'où vient ta femme ?
Moom, waa fan la?|Et lui / elle, d'où vient-il/elle ?
John la tudd|Il s'appelle John
Hogan la sant|Son nom de famille est Hogan
John du waa Moritani, waa Amerig la|John n'est pas de Mauritanie, il vient d'Amérique
Waa Amerig nga?|Viens-tu d'Amérique ?
Déedéet, duma waa Amerig|Non, je ne viens pas d'Amérique
Fan nga dëkk?|Où habites-tu ?
Ndakaaru laa dëkk|J'habite à Dakar|Ndakaaru = Dakar
Ñaata at nga am?|Quel âge as-tu ?
Am naa ñaar fukki at ak juróom|J'ai vingt-cinq ans
Lan ngay liggéey?|Qu'est-ce que tu fais comme travail ?
Jàngalekat laa|Je suis enseignant(e)
Sama jabar du jàngalekat|Ma femme n'est pas enseignante
Doktoor la|Il / elle est médecin
Damay jàng|Je suis étudiant(e) (j'étudie)
Damay wut liggéey|Je cherche du travail
Am naa jabar|Je suis marié (j'ai une épouse)
Amuma jëkkër|Je ne suis pas mariée (je n'ai pas de mari)
Am naa ñaari doom|J'ai deux enfants
Nuyul sama xarit|Je te présente mon ami|Litt. « salue mon ami »
Maa ngiy bége xamante bi|Enchanté(e) de te connaître
Man itam|Moi aussi
Dégg nga wolof?|Parles-tu (comprends-tu) le wolof ?
Waaw, dégg naa wolof tuuti rekk|Oui, je parle un peu wolof
Dégguma bu baax wolof|Je ne comprends pas bien le wolof
Léegi laa tàmbalee jàng wolof|Je viens de commencer à apprendre le wolof
Mën nga wax ndànk?|Peux-tu parler lentement ?
Naka lañu koy waxe ci wolof?|Comment dit-on ça en wolof ?
Lan la tekki?|Qu'est-ce que ça veut dire ?
Waxaatal|Répète (redis-le)
`},
{id:'nombres', name:'Nombres', tag:'Bases', rows:`
Benn|Un (1)||Bènn
Ñaar|Deux (2)||Gnâr
Ñett|Trois (3)|Variante : ñatt|Gnètt
Ñeent|Quatre (4)||Gnèènt
Juróom|Cinq (5)||Djou-rôm
Juróom benn|Six (6)|5 + 1
Juróom ñaar|Sept (7)|5 + 2
Juróom ñett|Huit (8)|5 + 3
Juróom ñeent|Neuf (9)|5 + 4
Fukk|Dix (10)||Foukk
Fukk ak benn|Onze (11)|10 et 1
Fukk ak ñaar|Douze (12)
Fukk ak ñett|Treize (13)
Fukk ak ñeent|Quatorze (14)
Fukk ak juróom|Quinze (15)
Fukk ak juróom benn|Seize (16)
Fukk ak juróom ñaar|Dix-sept (17)
Fukk ak juróom ñett|Dix-huit (18)
Fukk ak juróom ñeent|Dix-neuf (19)
Ñaar fukk|Vingt (20)|2 × 10|Gnâr foukk
Ñaar fukk ak benn|Vingt et un (21)
Fanweer|Trente (30)|Litt. « jours de lune » ; aussi ñett fukk
Ñeent fukk|Quarante (40)
Juróom fukk|Cinquante (50)
Téeméer|Cent (100)||Té-mèr
Ñaari téeméer|Deux cents (200)|Ñaar + i devant un nom
Junni|Mille (1000)||Djoun-ni
Dërëm|5 francs CFA (unité de compte)|Au marché on compte en dërëm : prix en F CFA ÷ 5
Téeméer dërëm|500 francs CFA|100 dërëm × 5 F
Ñaari téeméer dërëm|1 000 francs CFA|Au marché, on dit souvent juste « ñaari téeméer »
Junni dërëm|5 000 francs CFA|1000 × 5 F
`},
{id:'temps', name:'Jours et temps', tag:'Bases', rows:`
Altine|Lundi||Al-ti-né
Talaata|Mardi||Ta-lâ-ta
Àllarba|Mercredi||Al-lar-ba
Alxames|Jeudi|Variante gambienne : Akmis|Al-kha-mès
Àjjuma|Vendredi||Adj-djou-ma
Gaawu|Samedi|Aussi : Samdi, Aseer|Gâ-wou
Dibéer|Dimanche|Aussi : Dimaas|Di-bèr
Bés|Jour||Béss
Ayubés|Semaine||A-you-béss
Weer|Mois (et lune)||Wèèr
At|Année
Tey|Aujourd'hui||Tèy
Démb|Hier
Ëllëg|Demain|Aussi : suba|Eul-leug
Bërki-démb|Avant-hier
Gannaaw-ëllëg|Après-demain
Léegi|Maintenant / bientôt||Lé-gui
Suba|Matin||Sou-ba
Bëccëg|Journée / midi||Beutch-tcheug
Ngoon|Après-midi, fin de journée|Commence après le déjeuner|Ngôn
Guddi|Nuit|Commence au crépuscule|Goud-di
Njël|Aube
Timis|Crépuscule
Waxtu|Heure / moment||Wakh-tou
Ban waxtu moo jot?|Quelle heure est-il ?
Ban bés lanu nekk tey?|Quel jour sommes-nous ?
Kañ?|Quand ?||Kagn
Teel|Tôt
Yàgg|Longtemps (durer)
Déwén|L'année prochaine
Bés bu nekk|Tous les jours||Béss bou nèkk
Suba su nekk|Tous les matins||Sou-ba sou nèkk
Ngoon su nekk|Tous les après-midis||Ngôn sou nèkk
Guddi gu nekk|Toutes les nuits||Goud-di gou nèkk
Altine bu nekk|Tous les lundis
Àjjuma ju nekk|Tous les vendredis
Ayubés bu nekk|Toutes les semaines
Weer wu nekk|Tous les mois
At mu nekk|Tous les ans
Nawet|Saison des pluies (hivernage)
`},
{id:'famille', name:'Famille et personnes', tag:'Vocabulaire', rows:`
Man|Je / moi||Mann
Yow|Tu / toi||Yôw
Moom|Il / elle / lui||Môm
Nun|Nous||Noun
Yeen|Vous (pluriel)|Il n'y a pas de vouvoiement en wolof|Yèèn
Ñoom|Ils / elles / eux||Gnôm
Jigéen|Femme||Dji-guéén
Góor|Homme||Gôr
Ay jigéen|Des femmes
Ay góor|Des hommes
Xale|Enfant||Kha-lé
Ay xale|Des enfants
Xale bu jigéen|Une fille||Kha-lé bou dji-guéén
Xale yu jigéen|Des filles
Xale bu góor|Un garçon
Xale yu góor|Des garçons
Doom|Enfant (fils ou fille de quelqu'un)
Waa kër|La famille (la maisonnée)||Wâ kèr
Mbokk|Parent, membre de la famille
Waajur|Parents (père et mère)
Yaay|Mère||Yâï
Baay|Père||Bâï
Jabar|Épouse||Dja-bar
Jëkkër|Mari||Djeuk-keur
Mag bu jigéen|Sœur aînée
Rakk bu jigéen|Sœur cadette
Mag bu góor|Frère aîné
Rakk bu góor|Frère cadet
Maam|Grand-parent
Nijaay|Oncle maternel
Bàjjen|Tante paternelle
Jarbaat|Neveu / nièce
Sët|Petit-enfant
Goro|Belle-famille
Xarit|Ami(e)||Kha-rit
Nit|Personne, être humain
Nit ñi|Les gens
Sëriñ bi|Monsieur (respectueux)
Soxna si|Madame
`},
{id:'objets', name:'Maison et objets', tag:'Vocabulaire', rows:`
Kër|Maison||Kèr
Néeg|Chambre, pièce||Nég
Waañ|Cuisine||Wâgn
Wanag|Toilettes||Wa-nag
Bunt|Porte||Bount
Palanteer|Fenêtre||Pa-lan-tèr
Taabal|Table
Siis|Chaise, siège
Lal|Lit||Lal
Mbaaj|Couverture
Darab|Drap||Da-rab
Basaŋ|Natte
Caabi|Clé
Làmp|Lampe
Bale|Balai
Kuddu|Cuillère||Koud-dou
Paaka|Couteau||Pâ-ka
Aset|Assiette|Aussi : palaat
Kaas|Verre
Ndab|Récipient, bol
Téere|Livre||Té-ré
Kayit|Papier, document
Istilo|Stylo||Is-ti-lo
Kereyoŋ|Crayon
Tablo|Tableau noir
Saak|Sac||Sâk
Yére|Vêtements||Yé-ré
Simis|Chemise
Tubey|Pantalon||Tou-bèy
Dàll|Chaussures
Mbubb|Boubou
Lonet|Lunettes
Welo|Vélo||Wé-lo
Oto|Voiture|Aussi : woto
Telefon|Téléphone
Xaalis|Argent||Khâ-lis
`},
{id:'manger', name:'Nourriture et boissons', tag:'Vocabulaire', rows:`
Ndox|Eau||Ndokh
Àttaaya|Thé (à la sénégalaise)||A-tâ-ya
Kafe|Café
Meew|Lait||Mééw
Suukar|Sucre
Xorom|Sel||Kho-rom
Ceeb|Riz||Tchéb
Jën|Poisson||Djeun
Yàpp|Viande||Yapp
Ganaar|Poulet
Nen|Œuf
Mburu|Pain
Soble|Oignon
Tamaate|Tomate
Kaani|Piment
Diwlin|Huile
Gerte|Arachide
Dugub|Mil
Cere|Couscous de mil
Ñàmbi|Manioc
Banaana|Banane
Màngo|Mangue
Limoŋ|Citron
Soraas|Orange
Ceebu jën|Riz au poisson (plat national)||Tché-bou djeun
Yaasa|Yassa (sauce aux oignons)
Maafe|Mafé (sauce arachide)
Ndékki|Petit-déjeuner||Ndék-ki
Añ|Déjeuner||Agn
Reer|Dîner||Rèèr
Lekk|Manger
Naan|Boire
Togg|Cuisiner
Dama xiif|J'ai faim||Da-ma khîf
Xiifuma|Je n'ai pas faim
Dama mar|J'ai soif
Maruma|Je n'ai pas soif
Suur naa|Je suis rassasié(e)
Neex na lool!|C'est délicieux !
Kaay lekk!|Viens manger !
Lekkal bu baax!|Bon appétit !
Jar aw lakk!|Merci pour le repas !|Se dit à la cuisinière : ton effort en valait la peine
Na rees ak jàmm|Bonne digestion (réponse)
Dumay lekk yàpp|Je ne mange pas de viande
`},
{id:'lieux', name:'Lieux', tag:'Vocabulaire', rows:`
Lekool|École|Aussi : ekool
Kalaas|Salle de classe
Mbaar|Abri, hangar de paille||Mbâr
Xayma|Tente||Khay-ma
Dispañseer|Dispensaire
Opitaal|Hôpital
Farmasi|Pharmacie
Marse|Marché||Mar-sé
Bitik|Boutique
Biro|Bureau
Bànk|Banque
Post|Poste
Jàkka|Mosquée|Aussi : jumaa
Dex|Fleuve, rivière||Dèkh
Teen|Puits||Tèèn
Pomp|Pompe à eau
Tool|Champ||Tôl
Sardeŋ|Jardin
Liggéeyukaay|Lieu de travail
Kaar|Car, autobus
Gaar|Gare (ferroviaire)
Gaaraas|Gare routière (et garage)
Ayeropoor|Aéroport
Tefes|Plage
Géej|Mer||Guéj
Dëkk|Ville, village (et habiter)
Réew|Pays
Mbedd|Rue
Yoon|Chemin, route (et fois)
Ndakaaru|Dakar
Ndar|Saint-Louis
Cees|Thiès||Tchèès
`},
{id:'phrases', name:'Phrases du quotidien', tag:'Phrases', rows:`
Dama sonn|Je suis fatigué(e)||Da-ma sonn
Dama gëmmentu|J'ai sommeil
Dafa tàng|Il fait chaud||Da-fa tang
Tàngul|Il ne fait pas chaud
Dafa sedd|Il fait froid||Da-fa sèdd
Seddul|Il ne fait pas froid
Fan nga jëm?|Où vas-tu ?||Fan nga djeum
Maa ngi jëm kër ga|Je rentre à la maison
Maa ngi jëm lekool|Je vais à l'école
John mu ngi jëm marse|John va au marché
Mu ngi jëm ci bitik bi|Il va à la boutique
Jëmuma biro ba|Je ne vais pas au bureau
John déggul wolof|John ne parle pas wolof
Bëgguma kafe|Je n'aime pas le café
Jennifer dafa bëgg wolof|Jennifer aime le wolof
Damay jàng|J'étudie
Damay lekk|Je mange
Damay liggéey|Je travaille
Moom jàngul|Il n'étudie pas
Moom lekkul|Elle ne mange pas
Ñoom liggéeyuñu|Ils ne travaillent pas
Damay nelaw tuuti|Je fais une petite sieste
Liggéeyuma léegi|Je ne travaille pas maintenant
Dama bëgg noppalu|Je veux me reposer
Dama réer|Je suis perdu(e)
Damay wut...|Je cherche...
Dama bëggoon...|Je voudrais...|Le passé -oon rend la demande polie
Soxlawuma ko|Je n'en ai pas besoin
Fi ma tollu, mënuma ko|En ce moment, je ne peux pas|Façon polie de refuser
Wax nga dëgg|Tu as raison (tu dis vrai)
Ag mbégte!|Avec plaisir !
Rafet na|C'est beau
Neexul|Ce n'est pas agréable
Am na solo|C'est important / intéressant
Su neexee Yàlla|Si Dieu le veut
Teraanga|Hospitalité|Valeur centrale au Sénégal
May ma sama jàmm!|Laisse-moi tranquille !
`},
{id:'questions', name:'Questions et petits mots', tag:'Grammaire', rows:`
Fan?|Où ?
Kañ?|Quand ?||Kagn
Naka?|Comment ?
Lu tax?|Pourquoi ?||Lou takh
Ndaxte|Parce que||Ndakh-tè
Kan?|Qui ?
Lan?|Quoi ? Qu'est-ce que ?
Ñaata?|Combien ?||Gnâ-ta
Ban?|Quel / quelle ?
Ndax...?|Est-ce que... ?|Introduit une question oui/non|Ndakh
Lan la?|Qu'est-ce que c'est ?
Ana...?|Où est... ?|Ana wanag wi? Où sont les toilettes ?
Am nga...?|As-tu... ?
Ak|Et / avec
Waaye|Mais||Wâ-yé
Walla|Ou
Rekk|Seulement
Itam|Aussi
Lool|Très / beaucoup||Lôl
Tuuti|Un peu||Toû-ti
Bu baax|Bien
Bari|Beaucoup, nombreux
Dara|Rien / quelque chose
Kenn|Personne / quelqu'un
Fii|Ici
Fale|Là-bas
Ci|Dans, à, sur||Tchi
Ba|Jusqu'à
Kon|Alors, donc
`},
{id:'verbes', name:'Verbes essentiels', tag:'Grammaire', rows:`
Dem|Aller, partir||Dèm
Ñów|Venir||Gnôw
Lekk|Manger||Lèkk
Naan|Boire||Nân
Nelaw|Dormir||Né-law
Liggéey|Travailler||Lig-guéy
Jàng|Étudier, apprendre, lire||Djang
Jàngale|Enseigner
Wax|Parler, dire||Wakh
Làkk|Parler (une langue)
Dégg|Entendre, comprendre||Dègg
Gis|Voir
Xam|Savoir, connaître||Kham
Bëgg|Vouloir, aimer||Beugg
Sopp|Aimer (affection)
Am|Avoir
Jënd|Acheter||Djeund
Jaay|Vendre||Djâï
Fey|Payer
Def|Faire
Jox|Donner||Djokh
Jël|Prendre||Djeul
Togg|Cuisiner
Sangu|Se laver, se baigner
Toog|S'asseoir, être assis
Taxaw|Se tenir debout, s'arrêter||Ta-khaw
Dox|Marcher, fonctionner||Dokh
Daw|Courir
Bind|Écrire
Seet|Regarder, rendre visite
Wut|Chercher||Wout
Xaar|Attendre||Khâr
Dellu|Revenir
Ubbi|Ouvrir
Tëj|Fermer||Teudj
Mën|Pouvoir, savoir faire
Dugg|Entrer
Génn|Sortir
Tukki|Voyager
Wàcc|Descendre
Àgg|Arriver
Noppalu|Se reposer
Fo|Jouer
Fecc|Danser||Fètch
Woy|Chanter
Tàmbali|Commencer
Jeex|Finir, être épuisé
Fàtte|Oublier
Fàttaliku|Se souvenir
Sonn|Être fatigué
Feebar|Être malade
Rafet|Être beau
Neex|Être bon, agréable
Baax|Être bon, gentil
Sori|Être loin
Jege|Être près
Mag|Être grand, âgé
Ndaw|Être petit, jeune
Seer|Être cher
Yomb|Être bon marché, facile
`},
{id:'gram', name:'Grammaire en phrases', tag:'Grammaire', rows:`
Maa ngi lekk|Je suis en train de manger|Présentatif : maa ngi / yaa ngi / mu ngi
Yaa ngi lekk|Tu es en train de manger
Mu ngi lekk|Il / elle est en train de manger
Lekk naa|J'ai mangé|Accompli : verbe + naa / nga / na / nanu / ngeen / nañu
Lekk nga|Tu as mangé
Lekk na|Il / elle a mangé
Lekk nanu|Nous avons mangé
Lekk nañu|Ils ont mangé
Lekkuma|Je n'ai pas mangé|Négation : verbe + uma / uloo / ul / unu / uleen / uñu
Lekkul|Il / elle n'a pas mangé
Sonn naa|Je suis fatigué(e)|Avec un verbe d'état, na donne un présent
Dinaa lekk|Je mangerai|Futur : dinaa / dinga / dina / dinanu / dingeen / dinañu
Dina ñów|Il / elle viendra
Duma lekk|Je ne mangerai pas|Futur négatif : duma / doo / du / dunu / dungeen / duñu
Damay lekk|Je mange (d'habitude) / je vais manger|Explicatif + inaccompli -y
Dama lekk|J'ai mangé (c'est que j'ai mangé)|Explicatif : dama / danga / dafa / danu / dangeen / dañu
Dafa sori|C'est loin
Ceeb laa lekk|C'est du riz que j'ai mangé|Mise en relief du complément : laa / nga / la / lanu / ngeen / lañu
Ceeb laay lekk|C'est du riz que je mange
Maa lekk|C'est moi qui ai mangé|Mise en relief du sujet : maa / yaa / moo / noo / yeena / ñoo
Kan moo ñów?|Qui est venu ?
Lekkal!|Mange !|Impératif : -al au singulier
Lekkleen!|Mangez !|Impératif : -leen au pluriel
Bul lekk!|Ne mange pas !
Lekkoon naa|J'avais mangé|Passé : -oon
Dama bëggoon kafe|Je voudrais un café|-oon de politesse
Lekkaat|Manger encore|-aat : répétition
Amatuma ndox|Je n'ai plus d'eau|am + at + u + ma
Demaguma|Je ne suis pas encore parti(e)|-agul : pas encore
Mës nga dem Ndar?|Es-tu déjà allé à Saint-Louis ?|mës : avoir déjà fait
Lekki|Aller manger|-i : aller faire
Lekksi|Venir manger|-si : venir faire
Sama kër|Ma maison
Sa kër|Ta maison
Këram|Sa maison (à lui / à elle)|-am suffixé
Sunu kër|Notre maison
Seen kër|Votre / leur maison
Samay xarit|Mes amis
Xale bi|L'enfant (ici)|L'article suit le nom : consonne de classe + i
Xale ba|L'enfant (là-bas)|-a : éloigné
Xale bii|Cet enfant-ci
Xale bale|Cet enfant-là
Xale yi|Les enfants|Pluriel : yi
Kër gi|La maison
Ndox mi|L'eau
Benn xale|Un enfant
Ay xale|Des enfants
Su ma demee|Si je pars / quand je serai parti
Bu ma ñówee|Quand je serai venu(e)
`},
{id:'ville', name:'Directions', tag:'Situations', rows:`
Ci kow|En haut, sur
Ci suuf|En bas, par terre
Ci wet|À côté
Ci kanam|Devant
Ci gannaaw|Derrière
Ci biir|À l'intérieur
Ci digg|Au milieu
Ndeyjoor|Droite||Ndèy-djôr
Càmmoñ|Gauche||Tcham-mogn
Tàllalal!|Va tout droit !
Jàddal ci ndeyjoor|Tourne à droite
Jàddal ci càmmoñ|Tourne à gauche
Fan la ... nekk?|Où se trouve ... ?
Dafa sori?|C'est loin ?
Soriwul|Ce n'est pas loin
Dafa jege|C'est tout près
Ana yoonu Cees?|Quelle est la route de Thiès ?
Fan laa wara wàcc?|Où dois-je descendre ?
Taxawal fii!|Arrête-toi ici !
Fii la|C'est ici
Dellul gannaaw|Fais demi-tour
`},
{id:'marche', name:'Au marché', tag:'Situations', rows:`
Ñaata la?|C'est combien ?
Ñaata lay jar?|Combien ça coûte ?
Dafa seer lool|C'est trop cher
Seerul|Ce n'est pas cher
Dafa xawa seer|C'est un peu cher
Wàññil ma ci tuuti|Baisse un peu le prix
Doo ma defal njëg lu baax?|Tu me fais un bon prix ?
Dama koy jël|Je le prends
Defal ma kilo|Mets-m'en un kilo
Ak lan?|Et avec ça ?
Loolu rekk, jërëjëf|Ce sera tout, merci
Sa weccit a ngi|Voici ta monnaie
Amuma xaalis bu doy|Je n'ai pas assez d'argent
Am nga...?|As-tu... ?
Jox ma...|Donne-moi...
Jaaykat|Vendeur, commerçant
Jaay|Vendre
Jënd|Acheter
Ku mujj?|Qui est le dernier (dans la file) ?
`},
{id:'voyage', name:'Transport et voyage', tag:'Situations', rows:`
Taksi|Taxi
Saxaar|Train||Sa-khâr
Awiyoŋ|Avion
Gaal|Pirogue, embarcation
Biye|Billet
Paas|Prix du trajet, ticket
Bagaas|Bagages
Dama bëggoon dem Ndar|Je voudrais aller à Saint-Louis
Ñaata waxtu la?|Combien de temps (d'heures) ?
Kañ ngay dem?|Quand pars-tu ?
Ban waxtu lanuy dem?|À quelle heure partons-nous ?
Dañuy xaar oto bi fees|On attend que le véhicule soit plein
Ndax dinga taxaw...?|Est-ce que tu t'arrêtes à... ?
Fan la gaaraas bi nekk?|Où est la gare routière ?
Ndax am nga néeg bu féex?|As-tu une chambre libre ?
Guddi gi, ñaata la?|C'est combien la nuit ?
Oteel bu yomb|Un hôtel pas cher
`},
{id:'sante', name:'Corps et santé', tag:'Situations', rows:`
Bopp|Tête
Bët|Œil||Beut
Nopp|Oreille
Bakkan|Nez
Gémmiñ|Bouche
Bëñ|Dent||Beugn
Loxo|Main, bras||Lo-kho
Tànk|Pied, jambe
Biir|Ventre (et intérieur)
Gannaaw|Dos (et derrière)
Dënn|Poitrine
Xol|Cœur||Khol
Yaram|Corps
Kawar|Cheveux
Sama yaram neexul|Je ne me sens pas bien
Dama feebar|Je suis malade
Sama bopp dafay metti|J'ai mal à la tête
Sama biir dafay metti|J'ai mal au ventre
Sama yaram dafa tàng|J'ai de la fièvre
Damay sëqët|Je tousse
Damay liw|J'ai des frissons
Garab|Médicament (et arbre)
Ana opitaal bi?|Où est l'hôpital ?
Wooleen doktoor!|Appelez un médecin !
Wóoy!|Au secours !
`},
{id:'nature', name:'Animaux et nature', tag:'Vocabulaire', rows:`
Xaj|Chien||Khadj
Muus|Chat||Mouss
Nag|Vache, bœuf
Xar|Mouton||Khar
Bëy|Chèvre
Fas|Cheval
Mbaam|Âne
Ganaar|Poule, poulet
Golo|Singe
Gaynde|Lion
Bukki|Hyène
Jasig|Crocodile
Yoo|Moustique
Weñ|Mouche
Jant|Soleil
Weer|Lune
Biddiw|Étoile
Asamaan|Ciel
Taw|Pluie, pleuvoir
Dafay taw|Il pleut
Ngelaw|Vent
Garab|Arbre
Guy|Baobab
Suuf|Sable, terre
Àll|Brousse
`},
{id:'proverbes', name:'Proverbes', tag:'Culture', rows:`
Ndànk-ndànk mooy jàpp golo ci naay|Doucement, doucement, on attrape le singe dans la forêt|La patience mène au but
Nit nit ay garabam|L'homme est le remède de l'homme|On a besoin des autres
Dig, bor la|La promesse est une dette
Benn loxo du tàccu|Une seule main ne peut pas applaudir|Il faut s'entraider
Golo ñaawul, baay ba la niru|Le singe n'est pas laid, il ressemble à son père
Dëkkandoo, jàmm a ci gën|Entre voisins, la paix vaut mieux
Xamul aay na, waaye laajtewul a yées|Ne pas savoir est mal, ne pas demander est pire
Bant, lu mu yàgg yàgg ci dex, du ko taxa soppaliku jasig|Le bois a beau rester dans le fleuve, il ne devient pas crocodile|Notre nature ne change pas
`}
];
