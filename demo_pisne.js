// UKÁZKOVÝ zpěvník — záloha pro ladění. index.html načítá napřed pisne.js
// (skutečné písně; kvůli autorským právům není v repu ani viditelný při
// ladění — viz .claudeignore) a tento soubor použije, jen když pisne.js chybí.
//
// Písně jsou v prostém textu, naformátuje je až stránka. Formát:
//   ## Název písně ##
//   && Interpret &&
//   [A D E F#mi]   = řádek akordů (začíná nový blok / sloku)
//   text sloky     (prázdný řádek = mezera mezi slokami)
// Nové písně vkládej před závěrečný zpětný apostrof (`).
// V textech nepoužívej znaky ` a ${ — ukončily by tento blok.
// Formátování si můžeš předem zkontrolovat ve formatter.html.
var PISNE_TEXT = `

## Nebe plný hvězd ##
&& ukázková píseň &&

[sloka: Am F C G]
Sedíme u ohně, plamen táhne výš,
dřevo praská tiše, nikdo nemluví víš.
Nebe nad námi se rozsvítilo dnes,
hvězdy jako tečky v modrém plátně nes.

Kytara se ladí, někdo zpívá sám,
vítr přináší vůni smoly k nám.
Tohle místo znám, byl jsem tady vždy,
každé léto stejné — přijdu sem i kdys.

[ref.: C G Am F]
Nebe plný hvězd nad námi dnes stojí,
táborák nám hřeje, nikdo se tu nebojí.
Zpívej, zpívej se mnou, ať nás slyší les,
nebe plný hvězd — to je náš dnes.

[Am F C G]
Ráno přijde brzy, oheň dohořel,
spacák je zas mokrý, rosa na něm spel.
Ale teď je noc ještě před námi,
píseň ať se nese temnými háji.

Hrnky plné čaje, někdo pálí chleba,
kdo chce jít spát dřív, tomu tohle třeba.
Zůstanem tu spolu, dokud svítí tma,
každej z nás to ví — ráno přijde sama.

[s: C G Am F]
Nebe plný hvězd nad námi dnes stojí,
táborák nám hřeje, nikdo se tu nebojí.
Zpívej, zpívej se mnou, ať nás slyší les,
nebe plný hvězd — to je náš dnes.

[Dm Em F G7]
A až bude konec, až zas půjdem pryč,
vzpomenem si na to — nebude to nic.
Tohle bylo naše, tohle bylo tady,
vzpomínka zůstane navždy bez náhrady.

[C G Am F → C]
Nebe plný hvězd nad námi dnes stojí,
táborák nám hřeje, nikdo se tu nebojí.
Zpívej, zpívej se mnou, ať nás slyší les,
nebe plný hvězd — to je náš dnes.

## Červená řeka ##
&& ukázková píseň &&

[D A Bm G]
Tečou vody, tečou vody,
červená řeka protéká polem.
Kdo se napil z té studánky,
ten si odnes píseň s sebou bolem.

[G D A D]
Hej, hej, hej, zpívejme spolu,
u táboráku za letní noci.
Hej, hej, hej, plameny hoří,
srdce nám hřeje do rána mocí.

[D A Bm G]
Za kopcem svítí první hvězda,
kytara hraje tichý zpěv.
Vítr přináší vůni lesa,
sbohem léto, přijdeš zas.

[G D A D]
Hej, hej, hej, zpívejme spolu,
u táboráku za letní noci.
Hej, hej, hej, plameny hoří,
srdce nám hřeje do rána mocí.

`;
