---
layout: prose
title: Política de Privacidad
permalink: /es/legal/privacy/
lang: es
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-09-05
---

# Política de Privacidad — ASVAB Coach

**Fecha de vigencia**: 2026-05-18
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Operador / Responsable del tratamiento**: KHASSINX LLC, una sociedad de responsabilidad limitada de Florida
**Contacto**: legal@khassinx.com

---

## Resumen

**ASVAB Coach no recopila nada. Sin cuenta. Sin analytics. Sin tracking. Sin anuncios. Tus datos viven en tus dispositivos.**

Somos una **app educativa independiente**. No tenemos servidores que almacenen datos de usuario. No conocemos tu correo, tu nombre, tu teléfono, tu dirección IP, tu ubicación, ni ningún identificador que pueda rastrearte.

---

## Qué recopilamos

**Nada.** Específicamente:

| Categoría de datos | ¿Recopilamos? |
|---|---|
| Identificadores personales (nombre, correo, teléfono, dirección) | ❌ No |
| Identificadores de dispositivo (IDFA, IDFV, ID del dispositivo) | ❌ No |
| Ubicación | ❌ No |
| Contactos | ❌ No |
| Datos de salud | ❌ No |
| Información financiera | ❌ No (las compras las maneja Apple StoreKit) |
| Analytics de uso | ❌ No |
| Registros de fallos (crash logs) | ❌ No — no nos llega nada. El reporte opcional de fallos de Apple lo controlas tú en Ajustes de iOS, no nosotros. Aparte de eso, la app guarda los diagnósticos de MetricKit **en una carpeta de tu dispositivo** (máximo 30 archivos, se sobrescribe el más viejo) para que un fallo pueda revisarse en el aparato donde ocurrió. Nunca se transmiten, y no existe ninguna ruta de código que pudiera transmitirlos. |
| Cookies / píxeles de tracking | ❌ N/A (somos una app nativa, no un sitio web) |

El manifiesto `PrivacyInfo.xcprivacy` de la app declara `NSPrivacyTracking: false` y un arreglo `NSPrivacyCollectedDataTypes` vacío. Apple lo verifica durante la revisión de la app.

## Dónde viven tus datos

Todo lo que haces en ASVAB Coach se guarda **localmente en tu dispositivo** y (opcionalmente) se sincroniza vía tu cuenta personal de **iCloud**:

| Qué | Dónde |
|---|---|
| Tu progreso de estudio (conteo de aciertos/errores por categoría) | `UserDefaults` en el dispositivo + `NSUbiquitousKeyValueStore` (iCloud Key-Value Store) para sincronizar entre tu iPhone, iPad y Apple Watch |
| Tu selección de rama militar (Army, Navy, etc.) | `UserDefaults` + iCloud KV |
| Tarjetas de repetición espaciada (qué preguntas fallaste, cuándo revisarlas) | `UserDefaults` + iCloud KV |
| Resultados del diagnóstico | `UserDefaults` + iCloud KV |

La sincronización iCloud usa **tu** Cuenta de Apple. Nunca vemos, accedemos ni tenemos forma de recuperar estos datos. Apple los cifra en tránsito y en reposo. Si borras la app y deshabilitas iCloud para ella, los datos desaparecen. No hay copia en ningún servidor controlado por nosotros.

## Tutor de IA — solo Apple Intelligence en el dispositivo

ASVAB Coach usa **Apple Intelligence (FoundationModels)** para generar explicaciones adaptativas y soluciones de matemática paso a paso para las preguntas de práctica del ASVAB.

Este modelo corre **enteramente en tu dispositivo**. Nunca enviamos tus preguntas, respuestas ni ningún otro dato a OpenAI, Anthropic, Google ni a ningún servicio de IA de terceros. Tampoco los enviamos a un servidor nuestro — no tenemos uno. **Ninguna pregunta que le hagas al tutor, ni ninguna respuesta que te dé, sale jamás de tu dispositivo.** No hay claves API ni IA en la nube — la IA es on-device, punto.

Apple Intelligence requiere un dispositivo Apple reciente con Apple Intelligence habilitado, en una región donde Apple lo ofrezca. Donde no está disponible, las funciones del tutor de IA se ocultan en silencio y la explicación oficial revisada de cada pregunta (siempre presente) sostiene la experiencia.

Para los compromisos de privacidad de Apple, ver la documentación de [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). ASVAB Coach usa **solo** inferencia de Apple Intelligence on-device — nunca Private Cloud Compute, y nunca IA en la nube.

La inferencia de Apple Intelligence es local — sin red. La app abre por su cuenta exactamente dos tipos de conexión de red: **Apple StoreKit**, para tu compra única, y el **almacenamiento clave-valor de iCloud**, que lleva tu progreso y tu rama entre tus propios dispositivos, bajo tu propia cuenta de Apple. Nunca abre una hacia nosotros, porque no tenemos servidor. Cualquier otra cosa que llegue a internet lo hace porque tocaste un enlace y tu navegador lo siguió — se describe abajo.

## Búsqueda — corre en tu dispositivo

ASVAB Coach tiene una pantalla de **Búsqueda**. Busca dentro del contenido que la app ya trae: las
secciones de la guía de estudio y el banco de preguntas. **No se envía nada a ningún lado.** No hay
un buscador detrás, no hay terceros y no hay ninguna llamada de red — lo que escribes nunca sale del
dispositivo.

Hasta la versión 3.3.3 esta pantalla funcionaba al revés: le anteponía `ASVAB` a lo que escribías y
se lo entregaba a Safari como una búsqueda de Google. **Eso terminó en la 3.4.0, y esta política
siguió describiendo el comportamiento viejo hasta el 2026-09-05.** Lo decimos en vez de borrar el
párrafo sin más, porque aquella pantalla además llevaba al pie una promesa de que tus búsquedas eran
privadas mientras tu texto viajaba a Google — y una política de privacidad que sólo se vuelve más
favorable no es una política que se pueda verificar.

Lo único que todavía llega a internet en tu nombre es un enlace que **tú** tocas:

- **Nuestro propio sitio** — esta política y los términos de uso, en `asvab.khassinx.com`. Es un
  sitio estático en GitHub Pages: no tiene cuentas, ni analítica, ni cookies, y sólo ve lo que ve
  cualquier servidor web cuando un navegador le pide una página.
- **La página oficial de reclutamiento de la rama que elegiste** — `goarmy.com`, `navy.com`,
  `marines.com`, `airforce.com`, `gocoastguard.com` o `spaceforce.com`. Las operan las fuerzas
  armadas de los Estados Unidos, no nosotros, y lo que pase ahí lo rigen sus propias políticas de
  privacidad.

En los dos casos la app le pide al sistema que abra el enlace y se hace a un lado: de ahí en
adelante quien se conecta es tu navegador, exactamente como si hubieras tecleado la dirección tú.
Nada se abre en segundo plano, y nada se abre sin un toque.

## Compras dentro de la app

Las compras las maneja **Apple StoreKit 2**. Solo vemos:

- Un valor booleano: "esta Cuenta de Apple pagó por acceso completo" (vía `Transaction.currentEntitlements`)
- La fecha de revocación de la transacción (para reembolsos)

**No** vemos tu Cuenta de Apple, tu nombre, tu método de pago, tu dirección de facturación ni ningún otro metadato de la compra. Apple lo maneja todo. Los reembolsos y la gestión de suscripciones pasan directamente por Apple.

Usamos un modelo de **pago único** — sin suscripciones recurrentes, sin renovaciones automáticas.

## SDKs de terceros

**Cero.** ASVAB Coach no tiene ninguna dependencia de terceros:

- Sin Firebase, sin Google Analytics, sin Facebook SDK, sin Mixpanel, sin Amplitude, sin Sentry, sin Crashlytics
- Sin redes publicitarias (sin AdMob, sin Meta Audience Network, sin AppLovin)
- Sin plataformas de A/B testing
- Sin SDKs de atribución (sin AppsFlyer, sin Adjust)

Nuestros gates automáticos de CI lo aseguran: cualquier pull request que importe un SDK de analytics conocido es rechazado.

## Este sitio web

Este sitio es estático y no tiene formularios. Nosotros no le agregamos analytics, ni tracking, ni
píxeles, ni ningún script de terceros, y no fijamos ninguna cookie propia. No rastreamos a nadie, así
que no hay nada que una señal "Do Not Track" pueda apagar, y ningún tercero está autorizado a
recolectar información sobre tu actividad en otros sitios a través de este sitio web.

Ahora, lo que sí verás si abres "Ver código fuente" de esta misma página: **Cloudflare inserta dos
scripts suyos al entregarla.** No están en el HTML que escribimos —los agrega Cloudflare en el
camino— y se sirven desde este mismo dominio, bajo `/cdn-cgi/`:

- `/cdn-cgi/challenge-platform/scripts/jsd/main.js` — la detección de bots de Cloudflare. Hace
  comprobaciones en tu navegador para distinguir a una persona del tráfico automatizado, y en ese
  proceso Cloudflare puede fijar una cookie técnica de seguridad. Es protección del sitio: no es
  analytics, no es publicidad y no sigue tu actividad en otros sitios.
- `/cdn-cgi/scripts/…/cloudflare-static/email-decode.min.js` — descifra las direcciones de correo que
  Cloudflare ofusca en la página, para que los recolectores de spam no las levanten.

Ninguno de los dos es nuestro, ninguno nos reporta nada y de ninguno recibimos dato alguno. Lo
decimos con este detalle porque una política que niegue lo que cualquiera puede comprobar con "Ver
código fuente" no vale nada.

El sitio lo sirve GitHub Pages, con DNS y entrega a cargo de Cloudflare; como cualquier host web,
esos proveedores procesan datos técnicos estándar de las solicitudes (como tu dirección IP) para
servir y proteger el sitio, como empresas independientes bajo sus propias políticas de privacidad.
Nosotros no recibimos, guardamos ni usamos esos datos.

## Los emails que nos envías

Si nos escribes, recibimos tu dirección de email y tu mensaje. Los usamos solo para responderte y arreglar lo que reportaste — sin listas, sin marketing, sin compartirlos. La correspondencia de soporte se conserva solo el tiempo necesario para ayudarte y para nuestras obligaciones legales, y puedes pedirnos borrarla en cualquier momento en [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Menores

ASVAB Coach tiene clasificación **4+** en el App Store. No contiene material restringido por edad y no muestra publicidad. Aquello con lo que enseña —la guía de estudio y el banco de preguntas— viene adentro de la app y se busca en tu dispositivo. La Búsqueda también corre en tu dispositivo, sobre ese mismo contenido. Nada llega a la web abierta salvo que toques un enlace tú: nuestro sitio, o la página oficial de reclutamiento de la rama que elegiste — y ahí lo abre tu navegador. La app está hecha para quien se prepara para el ASVAB, en general estudiantes de secundaria en adelante, pero nada dentro de ella está limitado por edad.

No recopilamos datos de nadie, a ninguna edad. Eso incluye a los menores de 13 años: no hay cuenta, no hay registro, no hay analytics y nada sale de tu dispositivo hacia nosotros — así que no hay información personal de un menor que podamos recolectar, a sabiendas ni de ningún otro modo, ni que podamos divulgar a nadie. Como no recopilamos nada, no hay nada que requiera el consentimiento parental verificable que exige la COPPA.

## Tus derechos

Para los derechos de privacidad que tienes bajo el RGPD (UE/EEE), el RGPD del Reino Unido, la LOPDGDD de España, la CCPA/CPRA de California, otras leyes estatales de EE.UU. y demás — y cómo ejercerlos — consulta el [centro de Derechos de Privacidad](https://khassinx.com/es/legal/your-rights/) de KhassinX.

Como no tenemos ningún dato sobre ti, la mayoría de esas solicitudes son irrelevantes: no hay nada que borrar, exportar, corregir ni transferir de nuestro lado. Para ejercer cualquier derecho sobre ASVAB Coach, reinicia tus datos en la app o escribe a legal@khassinx.com.

También mantienes control total a través de los mecanismos de Apple:

- **Borrar todos los datos de la app**: borra la app de tu dispositivo. Abre Ajustes → tu nombre → iCloud → Administrar almacenamiento → ASVAB Coach → Borrar datos para eliminar también la copia de iCloud KV
- **Reinicio dentro de la app**: abre la app → Menú → Acerca de → "Reiniciar todo el progreso" — borra local + iCloud KV en un toque

## Etiquetas de Privacidad del App Store

En la página de ASVAB Coach en el App Store declaramos **"Datos no recopilados"** en todas las categorías. Eso se verifica contra el manifiesto `PrivacyInfo.xcprivacy` dentro de la app (`NSPrivacyTracking: false`, `NSPrivacyCollectedDataTypes` vacío) y contra el código mismo: cero SDKs de terceros de cualquier tipo, y las únicas conexiones de red que la app abre por su cuenta son Apple StoreKit y el almacenamiento clave-valor de iCloud, que lleva tu progreso entre tus propios dispositivos bajo tu propia cuenta de Apple y que nosotros no podemos leer nunca. El tutor de IA es Apple Intelligence on-device y no hace ninguna llamada de red.

Hasta la versión 3.3.3 esta sección cubría además una búsqueda web opcional que le entregaba a Safari lo que escribías, como una búsqueda de Google. **Esa pantalla ahora busca en tu dispositivo y no abre ninguna conexión de red**, así que ya no hay nada que aclarar aparte. Apple define "recopilar" como transmitir datos fuera del dispositivo **de un modo en que el desarrollador o sus socios puedan acceder a ellos**; los enlaces que tocas siguen abriéndose en tu navegador, y esos tampoco los recibimos. Los seguimos describiendo completos más arriba, porque mereces saber a dónde van tus palabras, no sólo quién tiene permitido leerlas.

## Cambios a esta política

Si alguna vez modificamos materialmente nuestras prácticas de datos, actualizaremos este documento con una nueva fecha de vigencia y publicaremos un aviso dentro de la app. Al día de esta revisión (2026-09-05), no hay cambios previstos porque genuinamente no recopilamos datos y nuestro modelo de negocio (pago único, sin publicidad) no se beneficia de recopilarlos.

## Jurisdicción

Esta política se rige por las leyes del **Estado de Florida, EE.UU.** Las disputas se resuelven en el Estado de Florida.

El operador y responsable del tratamiento de datos de ASVAB Coach es **KHASSINX LLC**, una sociedad de responsabilidad limitada de Florida. En la medida en que aplique alguna ley de protección de datos, KHASSINX LLC es el responsable — aunque en la práctica la app no procesa ningún dato personal (ver arriba).

## Contacto

Si tienes preocupaciones o preguntas sobre privacidad, escríbenos:

- **Correo**: legal@khassinx.com
- **Correo postal**: disponible si lo solicitas

Procuramos responder dentro de 7 días hábiles.

---

*Última actualización: 2026-09-05 · Versión 1.5*

*Qué cambió en la 1.5 — la app dejó de hacer algo, y este documento tardó tres versiones
en decirlo.* Hasta la 3.3.3 la pantalla de Búsqueda le entregaba a Safari lo que escribías, como una
búsqueda de Google. La versión 3.4.0 la movió al dispositivo, y esta política siguió describiendo el
comportamiento viejo — en cuatro lugares, incluidas la sección de Menores y la salvedad de las
etiquetas de privacidad. Todos ellos nos hacían quedar mejor de lo que nos correspondía, que es la
dirección que un error en una política de privacidad no puede tomar nunca. Acá quedan corregidos, y
el comportamiento viejo se nombra en vez de borrarse sin más. También corregimos el conteo de
conexiones de red que la app abre por su cuenta: decía una, y la sincronización clave-valor de
iCloud la vuelve dos.

*Qué cambió en la 1.4 — nada sobre cómo se comporta la app ni sobre qué datos recibimos.* Corregimos
la sección «Este sitio web». Decía que el sitio no incrusta scripts de terceros, y la página que se
sirve lleva dos que Cloudflare inserta al entregarla: ahora están nombrados uno por uno, con lo que
hace cada uno. La afirmación anterior era falsa justo en el punto que cualquiera puede comprobar solo.

*Qué cambió en la 1.3 — nada sobre cómo se comporta la app.* Describimos la búsqueda web opcional,
que siempre estuvo en la app pero faltaba en este documento, y retiramos tres frases que afirmaban de
más: un absoluto que no podemos sostener es peor que un límite honesto. También corregimos la fila de
registros de fallos para mencionar los diagnósticos que la app guarda en el dispositivo y nunca
envía, y arreglamos tres fechas contradictorias y un párrafo duplicado.
