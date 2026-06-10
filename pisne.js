// Zpěvník — písně pro index.html.
// Nové písně z formatter.html vkládej před závěrečný zpětný apostrof (`).
// V textech nepoužívej znaky ` a ${ — ukončily by tento blok.
var PISNE_HTML = `

<article class="pisen">
  <div class="pisen-hlavicka">
    <div class="pisen-titul">
      <span class="pisen-cislo"></span>
      <span class="pisen-nazev">Nebe plný hvězd</span>
      <span class="pisen-interpret">ukázková píseň</span>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">Am F C G</div>
    <div class="blok-text">
      <div class="radek">Sedíme u ohně, plamen táhne výš,</div>
      <div class="radek">dřevo praská tiše, nikdo nemluví víš.</div>
      <div class="radek">Nebe nad námi se rozsvítilo dnes,</div>
      <div class="radek">hvězdy jako tečky v modrém plátně nes.</div>
      <div class="mezera"></div>
      <div class="radek">Kytara se ladí, někdo zpívá sám,</div>
      <div class="radek">vítr přináší vůni smoly k nám.</div>
      <div class="radek">Tohle místo znám, byl jsem tady vždy,</div>
      <div class="radek">každé léto stejné — přijdu sem i kdys.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">C G Am F</div>
    <div class="blok-text">
      <div class="radek">Nebe plný hvězd nad námi dnes stojí,</div>
      <div class="radek">táborák nám hřeje, nikdo se tu nebojí.</div>
      <div class="radek">Zpívej, zpívej se mnou, ať nás slyší les,</div>
      <div class="radek">nebe plný hvězd — to je náš dnes.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">Am F C G</div>
    <div class="blok-text">
      <div class="radek">Ráno přijde brzy, oheň dohořel,</div>
      <div class="radek">spacák je zas mokrý, rosa na něm spel.</div>
      <div class="radek">Ale teď je noc ještě před námi,</div>
      <div class="radek">píseň ať se nese temnými háji.</div>
      <div class="mezera"></div>
      <div class="radek">Hrnky plné čaje, někdo pálí chleba,</div>
      <div class="radek">kdo chce jít spát dřív, tomu tohle třeba.</div>
      <div class="radek">Zůstanem tu spolu, dokud svítí tma,</div>
      <div class="radek">každej z nás to ví — ráno přijde sama.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">C G Am F</div>
    <div class="blok-text">
      <div class="radek">Nebe plný hvězd nad námi dnes stojí,</div>
      <div class="radek">táborák nám hřeje, nikdo se tu nebojí.</div>
      <div class="radek">Zpívej, zpívej se mnou, ať nás slyší les,</div>
      <div class="radek">nebe plný hvězd — to je náš dnes.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">Dm Em F G7</div>
    <div class="blok-text">
      <div class="radek">A až bude konec, až zas půjdem pryč,</div>
      <div class="radek">vzpomenem si na to — nebude to nic.</div>
      <div class="radek">Tohle bylo naše, tohle bylo tady,</div>
      <div class="radek">vzpomínka zůstane navždy bez náhrady.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">C G Am F → C</div>
    <div class="blok-text">
      <div class="radek">Nebe plný hvězd nad námi dnes stojí,</div>
      <div class="radek">táborák nám hřeje, nikdo se tu nebojí.</div>
      <div class="radek">Zpívej, zpívej se mnou, ať nás slyší les,</div>
      <div class="radek">nebe plný hvězd — to je náš dnes.</div>
    </div>
  </div>
</article>

<article class="pisen">
  <div class="pisen-hlavicka">
    <div class="pisen-titul">
      <span class="pisen-cislo"></span>
      <span class="pisen-nazev">Červená řeka</span>
      <span class="pisen-interpret">ukázková píseň</span>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">D A Bm G</div>
    <div class="blok-text">
      <div class="radek">Tečou vody, tečou vody,</div>
      <div class="radek">červená řeka protéká polem.</div>
      <div class="radek">Kdo se napil z té studánky,</div>
      <div class="radek">ten si odnes píseň s sebou bolem.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">G D A D</div>
    <div class="blok-text">
      <div class="radek">Hej, hej, hej, zpívejme spolu,</div>
      <div class="radek">u táboráku za letní noci.</div>
      <div class="radek">Hej, hej, hej, plameny hoří,</div>
      <div class="radek">srdce nám hřeje do rána mocí.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">D A Bm G</div>
    <div class="blok-text">
      <div class="radek">Za kopcem svítí první hvězda,</div>
      <div class="radek">kytara hraje tichý zpěv.</div>
      <div class="radek">Vítr přináší vůni lesa,</div>
      <div class="radek">sbohem léto, přijdeš zas.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">G D A D</div>
    <div class="blok-text">
      <div class="radek">Hej, hej, hej, zpívejme spolu,</div>
      <div class="radek">u táboráku za letní noci.</div>
      <div class="radek">Hej, hej, hej, plameny hoří,</div>
      <div class="radek">srdce nám hřeje do rána mocí.</div>
    </div>
  </div>
</article>

<article class="pisen">
  <div class="pisen-hlavicka">
    <div class="pisen-titul">
      <span class="pisen-cislo"></span>
      <span class="pisen-nazev">Valerie</span>
      <span class="pisen-interpret">Amy Winehouse / The Zutons</span>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">F Gm</div>
    <div class="blok-text">
      <div class="radek">Well sometimes I go out by myself</div>
      <div class="radek">and I look across the water.</div>
      <div class="radek">And I think of all the things,</div>
      <div class="radek">what you're doing and in my head I paint a picture.</div>
      <div class="mezera"></div>
      <div class="radek">Since I've come home, well my body's been a mess,</div>
      <div class="radek">and I miss your ginger hair and the way you like to dress.</div>
      <div class="radek">Won't you come on over, stop making a fool out of me?</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">A# F Gm D#</div>
    <div class="blok-text">
      <div class="radek">Valerie, Valerie,</div>
      <div class="radek">Valerie, Valerie.</div>
      <div class="radek">Why won't you come on over,</div>
      <div class="radek">stop making a fool out of me.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">F Gm</div>
    <div class="blok-text">
      <div class="radek">Did you have to go to jail, put your house up for sale?</div>
      <div class="radek">Did you get a good lawyer? I hope you won't forget me</div>
      <div class="radek">'cause I know you won't, I know you won't.</div>
    </div>
  </div>

  <div class="blok">
    <div class="akordy">A# F Gm D#</div>
    <div class="blok-text">
      <div class="radek">Valerie, Valerie,</div>
      <div class="radek">Valerie, Valerie.</div>
      <div class="radek">Why won't you come on over,</div>
      <div class="radek">stop making a fool out of me.</div>
    </div>
  </div>
</article>

`;
