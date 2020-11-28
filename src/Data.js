
///copiaza primul object din format json si le pui dupa
/// ce le trebe

export const storeProducts = [

{
  id:1,
  title:"Pudra matifianta fixatoare",
  img : 'img/pudra-matifianta-fixatoare.jpg',
  price : 30,
  company:'Tehnic',
  info: " 'Șterge' micile imperfecțiuni ale tenului cu o pudra pulbere ulta fină, transparență ce acoperă imperfecțiunile tenului lăsându-l proaspăt și catifelat",
inCart:false,
count:0,
total:0

},
{
  id:2,
  title:"Ruj Dior",
  img:'img/rouge-dior.jpg',
  price:190,
  company:'Dior',
    info:'Aflat în permanentă în avangardă, Dior și-a provocat echipele de cercetători pentru a reuși să combine dorința de culori intense cu nevoia de confort și de rezistență. Rezultat al unor cercetări îndelungate și al unor studii științifice aprofundate, Rouge Dior Ultra Rouge este primul* ruj compus dintr-un polimer care, împreună cu un ulei vegetal, oferă simultan confort și hidratare absolută, cu o rezistență de 12 ore**, fără senzația de uscat sau de disconfort. ',
  inCart:false,
  count:0,
  total:0
},
{
  id:3,
  title:"Pudra Translucida Profesionala ",
  img:'img/pudra-translucida-profesionala-ingrid-cosmetics-long-lasting-effect-13320-6682.jpg',
  price:25,
  company:'Ingrid cosmetics',
  info:'* Pudra translucidă Long Lasting Effect de la Ingrid Cosmetics netezește perfect pielea și îi oferă un aspect mat pe parcursul întregii zile;\n* Oferă machiajului un finish mat, fără a usca tenul;\n* Nu lasă urme albe și are o rezistență îndelungată!',
  inCart:false,
  count:0,
  total:0
},
{
  id:4,
  title:"Paletă de farduri invite-only",
  img:'img/paleta-invite-only.jpg',
  price:39,
  company:'Invite only',
  info:'Fardurile sunt extrem de pigmentate, cu o textura fină, culori calde care rezistă o zi întreagă și vor face pielea să arate impecabil. Fardurile metalice sunt moi și texturate astfel încât fiecare nuanță în parte este ușor de blenduit. Pigmentate și ușor de aplicat și combinat între ele, fardurile păstrează makeup-ul intact o lungă perioada de timp.',
  inCart:false,
  count:0,
  total:0
},

{
  id:5,
  title:"Eyeliner Pencil Waterproof",
  img:'img/eyeliner-pencil-waterproof_7672_2_1491905594.jpg',
  price:138,
  company:'Dior',
  info:'Creionul indispensabil pentru o linie perfect estompata si care rezista mult timp. \n\n Mod de folosire\n\n- Se traseaza o linie dinspre coltul intern spre coltul extern al ochiului, prin tuse mici, succesive.\n\n- Se estompeaza linia cu pensula pentru a o atenua sau a obtine un efect de umbra.',
  inCart:false,
  count:0,
  total:0
},

{
  id:6,
  title:"OJA PAIETATA PURPLE STONE",
  img:'img/oja-mov.jpg',
  price:26,
  company:'Purple Stone',
  info:' Ojă purple stone te ajută să obții o manichiură perfectă care va atrage toate privirile. Colecția purple stone de Ojă Semipermanenta prezintă o gama de culori ce variază de la îndrăzneț la clasic și este aici pentru a te ajută să realizezi manichiură dorită în cel mai scurt timp.',
  inCart:false,
  count:0,
  total:0
},
{
  id:7,
  title:"Vopsea subtil mix tone ",
  img:'img/vopsea-par-albastra.jpg',
  price:50,
  company:'Mix Tone',
  info:'PIGMENT PUR CONCENTRAT FĂRĂ AMONIAC PENTRU COLORARE OXIDATIVĂ MIX TONE oferă beneficiile unei formule fără-amoniac: menținerea filmului de protecție natural al părului și confort optim pentru scalp. Textura să cosmetică permite un amestec omogen cu toate tipurile de produse de colorare: gel. crema, fluid...',
  inCart:false,
  count:0,
  total:0
},
{
  id:8,
  title:"Cremă mâini",
  img:'img/crema-maini.jpg',
  price:29,
  company:'Intensive-repair',
  info:'O crema de mâini excepțională, special concepută pentru pielea uscată și deteriorată. Efect anti-oxidant și anti-îmbătrânire. Acționează că un cicatrizant. Protejează, hrănește, hidratează și calmează pielea. Îmbunătățește elasticitatea pielii.',
  inCart:false,
  count:0,
  total:0
},
{
  id:9,
  title:"Mascara",
  img:'img/mascara.jpg',
  price:39,
  company:'Lash',
  info:'Culoare intensă: albastru electric. Ideal pentru obținerea unui efect de volum și pentru a conferi intensitate privirii în tonuri îndrăznețe. Chiar aplicat într-un singur strat, textura intens pigmentată îmbracă genele într-un val albastru electric. Rezistență îndelungată. Peria să este special concepută pentru o acoperire uniformă și definirea fiecărei gene în parte. Nu se întinde. Nu curge.Culoare intensă: albastru electric.Ideal pentru obținerea unui efect de volum și pentru a conferi intensitate privirii în tonuri îndrăznețe.Chiar aplicat într-un singur strat, textura intens pigmentată îmbracă genele într-un val albastru electric.Rezistență îndelungată.Peria să este special concepută pentru o acoperire uniformă și definirea fiecărei gene în parte.Nu se întinde.Nu curge.',
  inCart:false,
  count:0,
  total:0
},
{
  id:10,
  title:"Spumă păr",
  img:'img/spuma-par.jpg',
  price:40,
  company:'Subtil',
  info:'Spuma de păr Subtil este o spumă de ultimă generație creată de cosmeticienii dintr-o combinație unică de substanțe ce dau volum părului și ajută la fixarea pe termen lung a coafurii dumneavoastră',
  inCart:false,
  count:0,
  total:0
},
{
  id:11,
  title:"Vopsea sprâncene",
  img:'img/vopsea-sprancene.jpg',
  price:65,
  company:'Dectril',
  info:'Ușor de utilizat astfel încât să puteți obține nuanță dorită a sprâncenelor dumneavoastră chiar și acasă.',
  inCart:false,
  count:0,
  total:0
},
{
  id:12,
  title:"Diluant lac unghii",
  img:'img/diluant-lac-unghii.jpg',
  price:68,
  company:'Lital',
  info:'Special creat pentru a dilua lacurile de unghii. Delicat cu unghiile. Pentru uz profesional.',
  inCart:false,
  count:0,
  total:0
},
{
  id:13,
  title:"Fard pleoape-mat",
  img:'img/fard-pleoape-mat.jpg',
  price:100,
  company:'Kostenic',
  info:'- Pigmenți cu granulație între 10-60 microni - Culori foarte pigmentate - Acoperire foarte mare - Adera foarte bine la piele -Rezistă în timp - Se aplică uniform ',
  inCart:false,
  count:0,
  total:0
},
{
  id:14,
  title:"Paletă farduri",
  img:'img/paleta-farduri-doi.jpg',
  price:150,
  company:'Dior',
  info:'Paleta creată pentru a depozita fardurile preferate. Disponibilă în 3 versiuni: pentru 6, 12 și 24 rezerve. Dimensiuni:• ref 14302: 13.5 cm * 9.5 cm • ref 14303: 17 cm * 13.5 cm  • ref 14304: 24.5 cm * 17 cm Paleta este la interior magnetică, astfel că pastilele de farduri stau bine fixate. Partea din față a păleței este transparență.',
  inCart:false,
  count:0,
  total:0
},
{
  id:15,
  title:"Gene false",
  img:'img/gene-false.jpg',
  price:110,
  company:'Melkior',
  info:'Reprezintă accesoriul perfect pentru un machiaj complet, oferind în același timp flexibilitate, contur accentuat și volum special genelor naturale, firele fiind montate în 2 straturi suprapuse cu lungimi intercalate și stratul superior curbat.',
  inCart:false,
  count:0,
  total:0
},
{
  id:16,
  title:"Parfum Kors Wonderlust ",
  img:'img/parfum-mickael.jpg',
  price:250,
  company:'Michael Kors Wonderlust',
  info:'Michael Kors Wonderlust Eau de Voyage-parfum floral ce scoate in evidenta spiritul aventuros si ziua perfecta in paradis. Notele linistitoare de lavanda aflate in inimia parfumului iti stimuleaza imaginatia ducandu-te intr-ul loc cu acorduri exotice de sare de mare.  Notele acestui parfum, oda a placerilor simple, sunt: Lavanda, Dianthus si acorduri de apa de mare',
  inCart:false,
  count:0,
  total:0
},
{
  id:17,
  title:"Parfum Floral Street ",
  img:'img/floral-street.jpg',
  price:389,
  company:'Floral Street',
  info:'Un parfum pentru delicat, visător, strălucitor și grijuliu. Un parfum floral, fructat și ușor, sofisticat și nu dulce. Captivant, nu drăguț. Vegan. Prietenos cu mediul.Floral Street nu-i place să arate favoritism, dar apreciază foarte mult bujorii. Acest parfum dulce este bogat în bujori, fructe roz și violet. O doză de lemn de cedru conferă o căldură balsamică lemnoasă, în timp ce vetiverul injectează cea mai mică atingere de nuci.',
  inCart:false,
  count:0,
  total:0
}
];

export const detailProduct  = {
    id:1,
    title:"Pudră matifiantă fixatoare",
    img : 'img/pudra-matifianta-fixatoare.jpg',
    price : 30,
    company:'Tehnic',
    info: " 'Șterge' micile imperfecțiuni ale tenului cu o pudra pulbere ulta fină, transparență ce acoperă imperfecțiunile tenului lăsându-l proaspăt și catifelat",
  inCart:false,
  count:0,
  total:0

};
