// Sdílené formátování písní — používá index.html i formatter.html.
//
// Vstupní formát (obsah pisne.js / vstup formatteru):
//   ## Název písně ##
//   && Interpret &&
//   [A D E F#mi]    ... řádek akordů
//   text sloky      ... prázdný řádek = mezera mezi slokami
//
// Každý řádek "## Název ##" začíná novou píseň.

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Akordy se oddělují jednou mezerou; viditelný rozestup řeší CSS (word-spacing).
function radekAkordu(obsah) {
  return obsah.trim().split(/\s+/).join(' ');
}

// Akordy s béčkem (Bb, Eb, A♭…) včetně basů za lomítkem — do zpěvníku nepatří.
function najdiBecka(obsahAkordu) {
  var becka = [];
  obsahAkordu.trim().split(/\s+/).forEach(function (akord) {
    akord.split('/').forEach(function (cast) {
      if (/^[A-H][b♭]/.test(cast)) becka.push(akord);
    });
  });
  return becka;
}

// Znaky, které by rozbily šablonu (template literal) v pisne.js
function najdiZakazane(text) {
  var nalezy = [];
  if (text.indexOf('`') !== -1) nalezy.push('`');
  if (text.indexOf('${') !== -1) nalezy.push('${');
  return nalezy;
}

function rozdelNaPisne(text) {
  var pisne = [];
  var aktualniPisen = null;
  var aktualniBlok = null;

  function novaPisen(nazev) {
    aktualniPisen = { nazev: nazev || 'Bez názvu', interpret: '', bloky: [], becka: [] };
    aktualniBlok = null;
    pisne.push(aktualniPisen);
  }

  text.split(/\r?\n/).forEach(function (radek) {
    var r = radek.trim();
    var m;
    if ((m = r.match(/^##\s*(.*?)\s*##$/))) { novaPisen(m[1]); return; }
    if (!aktualniPisen) {
      if (r === '') return;
      novaPisen('');
    }
    if ((m = r.match(/^&&\s*(.*?)\s*&&$/))) { aktualniPisen.interpret = m[1]; return; }
    if ((m = r.match(/^\[(.*)\]$/))) {
      aktualniPisen.becka = aktualniPisen.becka.concat(najdiBecka(m[1]));
      aktualniBlok = { akordy: radekAkordu(m[1]), radky: [] };
      aktualniPisen.bloky.push(aktualniBlok);
      return;
    }
    if (!aktualniBlok) {
      if (r === '') return;
      aktualniBlok = { akordy: null, radky: [] };
      aktualniPisen.bloky.push(aktualniBlok);
    }
    aktualniBlok.radky.push(r);
  });

  return pisne;
}

function htmlPisne(pisen) {
  var html = '<article class="pisen">\n';
  html += '  <div class="pisen-hlavicka">\n';
  html += '    <div class="pisen-titul">\n';
  html += '      <span class="pisen-cislo"></span>\n';
  html += '      <span class="pisen-nazev">' + escapeHtml(pisen.nazev) + '</span>\n';
  if (pisen.interpret) {
    html += '      <span class="pisen-interpret">' + escapeHtml(pisen.interpret) + '</span>\n';
  }
  html += '    </div>\n';
  html += '  </div>\n';

  pisen.bloky.forEach(function (blok) {
    // odstranit prázdné řádky na začátku a konci bloku
    var r = blok.radky.slice();
    while (r.length && r[0] === '') r.shift();
    while (r.length && r[r.length - 1] === '') r.pop();
    if (!r.length && blok.akordy === null) return;

    html += '\n  <div class="blok">\n';
    if (blok.akordy !== null) {
      html += '    <div class="akordy">' + escapeHtml(blok.akordy) + '</div>\n';
    }
    html += '    <div class="blok-text">\n';
    r.forEach(function (radek) {
      html += radek === ''
        ? '      <div class="mezera"></div>\n'
        : '      <div class="radek">' + escapeHtml(radek) + '</div>\n';
    });
    html += '    </div>\n';
    html += '  </div>\n';
  });

  return html + '</article>';
}

// Celý zpěvník (jedna i více písní) -> { html, becka }
function formatujZpevnik(text) {
  var becka = [];
  var html = rozdelNaPisne(text).map(function (pisen) {
    becka = becka.concat(pisen.becka);
    return htmlPisne(pisen);
  }).join('\n\n');
  return { html: html, becka: becka };
}

// První slovo každého řádku zesvětlí; má-li do tří písmen, zvýrazní i druhé slovo.
function zvyrazniPrvniSlova(koren) {
  koren.querySelectorAll('.radek').forEach(function (radek) {
    var text = radek.textContent;
    var slova = text.split(' ');
    var pocet = 1;
    var pismen = (slova[0].match(/[\p{L}\p{N}]/gu) || []).length;
    if (slova.length > 1 && pismen <= 3) pocet = 2;
    var prvni = slova.slice(0, pocet).join(' ');
    var zbytek = text.slice(prvni.length);
    radek.textContent = '';
    var span = document.createElement('span');
    span.className = 'prvni-slovo';
    span.textContent = prvni;
    radek.appendChild(span);
    radek.appendChild(document.createTextNode(zbytek));
  });
}
