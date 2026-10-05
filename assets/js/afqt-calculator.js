---
# Este archivo lo GENERA Jekyll: el front matter vacío es lo que hace que Liquid corra.
#
# 🔴 No hay un solo número tipeado acá abajo. La conversión compuesto → percentil es la
# Tabla 2.5 oficial del DoD, que entra por `jsonify` desde
# `web/_data/afqt_official_conversion.yml`, generado del PDF por
# `export_afqt_official_conversion.py` con su md5 verificado. Hasta el 2026-09-23 esta
# página usaba la curva INTERNA de la app y publicaba 83 donde la tabla dice 48.
# Las bandas de categoría y la fórmula siguen saliendo de `afqt_scale.yml`, y los
# mínimos por rama de `afqt_minimums.yml`.
#
# Y el CSP del sitio es `default-src 'self'` sin `script-src`, así que un `<script>` inline
# no se ejecutaría: esto tiene que ser un archivo servido, no un bloque en el Markdown.
---
(function () {
  'use strict';

  var TABLA = {{ site.data.afqt_official_conversion | jsonify }};
  var CATEGORIAS = {{ site.data.afqt_scale.categories | jsonify }};
  var FORMULA = {{ site.data.afqt_scale.formula | jsonify }};
  var MINIMOS = {{ site.data.afqt_minimums | jsonify }};
  var NOMBRES_ES = {{ site.branch_names_es | jsonify }};

  var POR_COMPUESTO = {};
  TABLA.rows.forEach(function (f) { POR_COMPUESTO[f.composite] = f.afqt; });

  function percentil(compuesto) {
    if (compuesto <= TABLA.floor.composite) { return TABLA.floor.afqt; }
    if (compuesto >= TABLA.ceiling.composite) { return TABLA.ceiling.afqt; }
    return POR_COMPUESTO[compuesto];
  }

  function categoria(p) {
    for (var i = 0; i < CATEGORIAS.length; i++) {
      var c = CATEGORIAS[i];
      if (p >= c.min && p <= c.max) { return c; }
    }
    return null;
  }

  function montar() {
    var caja = document.getElementById('afqt-calc');
    if (!caja) { return; }

    var es = caja.getAttribute('data-lang') === 'es';
    function t(clave) { return caja.getAttribute('data-i18n-' + clave) || ''; }

    var campos = ['ve', 'ar', 'mk'].map(function (id) {
      return document.getElementById('afqt-' + id);
    });
    var salida = document.getElementById('afqt-result');
    if (campos.indexOf(null) !== -1 || !salida) { return; }

    var PISO = TABLA.input.min;
    var TECHO = TABLA.input.max;

    function nombreRama(b) {
      if (es && NOMBRES_ES && NOMBRES_ES[b.id]) { return NOMBRES_ES[b.id]; }
      return b.name;
    }

    function leer(campo) {
      if (campo.value.trim() === '') { return null; }
      var v = Number(campo.value);
      if (!isFinite(v) || Math.floor(v) !== v) { return NaN; }
      if (v < PISO || v > TECHO) { return NaN; }
      return v;
    }

    function elemento(tag, texto, clase) {
      var e = document.createElement(tag);
      if (texto !== undefined && texto !== null) { e.textContent = texto; }
      if (clase) { e.className = clase; }
      return e;
    }

    function marcaOculta() {
      var marca = elemento('span', MINIMOS.estimate_mark);
      marca.setAttribute('aria-hidden', 'true');
      return marca;
    }

    function vaciar(nodo) {
      while (nodo.firstChild) { nodo.removeChild(nodo.firstChild); }
    }

    function pintar() {
      vaciar(salida);

      var valores = campos.map(leer);
      if (valores.some(function (v) { return typeof v === 'number' && isNaN(v); })) {
        salida.appendChild(elemento('p',
          t('range').replace('{min}', PISO).replace('{max}', TECHO)));
        return;
      }
      if (valores.some(function (v) { return v === null; })) {
        salida.appendChild(elemento('p', t('incomplete')));
        return;
      }

      var compuesto = 2 * valores[0] + valores[1] + valores[2];
      var p = percentil(compuesto);
      var cat = categoria(p);

      salida.appendChild(elemento('p', t('result').replace('{p}', p)));

      var detalle = elemento('p');
      detalle.appendChild(elemento('strong', t('composite') + ' '));
      detalle.appendChild(document.createTextNode(
        String(compuesto) + ' (' + FORMULA + ')'
      ));
      salida.appendChild(detalle);

      if (cat) {
        var banda = elemento('p');
        banda.appendChild(elemento('strong', cat.name + ' '));
        banda.appendChild(document.createTextNode(
          '(' + cat.min + '–' + cat.max + ') — ' +
          (es ? cat.description_es : cat.description_en)
        ));
        salida.appendChild(banda);
      }

      var tabla = elemento('table');
      var thead = elemento('thead');
      var filaCab = elemento('tr');
      [t('col-branch'), t('col-diploma'), t('col-ged')].forEach(function (titulo) {
        filaCab.appendChild(elemento('th', titulo));
      });
      thead.appendChild(filaCab);
      tabla.appendChild(thead);

      var tbody = elemento('tbody');
      MINIMOS.branches.forEach(function (b) {
        var fila = elemento('tr');
        var celdaRama = elemento('td', nombreRama(b));
        celdaRama.setAttribute('data-label', t('col-branch'));
        fila.appendChild(celdaRama);
        [[b.min_afqt, false], [b.min_afqt_ged, b.min_afqt_ged_is_estimate]]
          .forEach(function (par, i) {
            var piso = par[0];
            var celda = elemento('td',
              (p >= piso ? '✓ ' : '✗ ') + (p >= piso ? t('meets') : t('short')) + ' (');
            celda.setAttribute('data-label', i === 0 ? t('col-diploma') : t('col-ged'));
            if (par[1]) { celda.appendChild(marcaOculta()); }
            celda.appendChild(document.createTextNode(String(piso)));
            if (par[1]) {
              var dicho = MINIMOS.estimate_spoken_suffix[es ? 'es' : 'en'];
              celda.appendChild(elemento('span', dicho, 'visually-hidden'));
            }
            celda.appendChild(document.createTextNode(')'));
            fila.appendChild(celda);
          });
        tbody.appendChild(fila);
      });
      tabla.appendChild(tbody);
      salida.appendChild(tabla);

      MINIMOS.branches.forEach(function (b) {
        if (!b.min_afqt_ged_is_estimate) { return; }
        var nota = elemento('p', null, 'meta');
        t('ged-estimate')
          .replace('{branch}', nombreRama(b))
          .replace('{value}', String(b.min_afqt_ged))
          .split('{mark}')
          .forEach(function (tramo, i) {
            if (i > 0) { nota.appendChild(marcaOculta()); }
            nota.appendChild(document.createTextNode(tramo));
          });
        salida.appendChild(nota);
      });

      salida.appendChild(elemento('p', t('disclaimer'), 'meta'));
    }

    campos.forEach(function (campo) {
      campo.addEventListener('input', pintar);
    });

    var forma = document.getElementById('afqt-form');
    if (forma) {
      forma.addEventListener('submit', function (evento) {
        evento.preventDefault();
        pintar();
      });
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { percentil: percentil, categoria: categoria, TABLA: TABLA };
  }
  if (typeof document !== 'undefined') { montar(); }
})();
