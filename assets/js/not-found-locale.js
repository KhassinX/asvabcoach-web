// GitHub Pages sirve UN SOLO 404.html para todo el sitio, incluido el arbol /es/:
// no existe /es/404.html ni puede existir. Por eso la pagina lleva los dos idiomas
// y esto esconde el que no corresponde segun el path.
//
// Sin JS se ven los dos bloques, que es la degradacion correcta: un visitante de
// /es/ nunca queda frente a una pagina 100% en ingles, que era el estado hasta el
// 2026-09-20.
//
// Y tiene que ser un ARCHIVO servido, no un `<script>` en la pagina: el CSP del
// sitio es `default-src 'self'` sin `script-src`, asi que un bloque inline se
// parsea y no se ejecuta. Medido en el navegador el 2026-09-20 — el build sale
// verde igual y la pagina se publica con la logica muerta.
// 🔴 Limite conocido, medido el 2026-09-20: esto cambia el CUERPO, no la NAV.
// La barra la pinta `_layouts/base.html` desde `site.nav[lang_key]`, y `lang_key`
// sale de `page.lang` del front-matter, que en un documento unico es `en`. Un
// visitante de /es/ ve el texto en espanol con la nav en ingles. Arreglarlo pide
// emitir las dos navs desde el layout compartido de las 15 paginas: se deja
// declarado en vez de escondido.
(function () {
  var esPath = window.location.pathname.indexOf('/es/') === 0;
  var sobra = document.querySelector(esPath ? '[data-nf-lang="en"]' : '[data-nf-lang="es"]');
  if (sobra) { sobra.hidden = true; }
  if (esPath) { document.documentElement.lang = 'es'; }
})();
