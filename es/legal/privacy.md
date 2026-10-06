---
layout: prose
description: "ASVAB Coach no recopila nada: sin SDKs de analytics, sin cuenta, sin IA en la nube. Qué guarda la app, dónde vive y cómo borrarlo."
title: Política de Privacidad
permalink: /es/legal/privacy/
lang: es
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
redirect_from:
  - /es/privacy
  - /es/privacy/
updated: 2026-10-06
effective: 2026-09-06
h1: "Política de Privacidad — ASVAB Coach"
version: "1.7"
related:
  - /es/legal/terms/
  - /es/contact/
summary:
  - "ASVAB Coach no recopila nada: sin cuenta, sin analytics, sin tracking y sin anuncios."
  - "Tu progreso se guarda en tu dispositivo y, de forma opcional, se sincroniza por tu propio iCloud. No hay copia en ningún servidor controlado por nosotros."
  - "El tutor de IA corre en tu dispositivo con Apple Intelligence. Ninguna pregunta que le hagas, ni ninguna respuesta que te dé, sale de tu dispositivo."
  - "La app no tiene ninguna dependencia de terceros."
  - "Si nos escribes, recibimos tu dirección y tu mensaje y los usamos solo para responderte y arreglar lo que reportaste; puedes pedirnos borrarlos."
---

**Fecha de vigencia**: 2026-09-06
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Operador / Responsable del tratamiento**: KHASSINX LLC, una sociedad de responsabilidad limitada de Florida
**Contacto**: legal@khassinx.com

**ASVAB Coach para Mac sigue en la versión 3.4.0**, así que nada de lo que abajo dice «Desde la versión 3.5.0» aplica todavía a ella.

---

## Resumen

**ASVAB Coach no recopila nada. Sin cuenta. Sin analytics. Sin tracking. Sin anuncios. Tus datos viven en tus dispositivos.**

Somos una **app educativa independiente**. No tenemos servidores que almacenen datos de usuario. No conocemos tu correo, tu nombre, tu teléfono, tu dirección IP, tu ubicación, ni ningún identificador que pueda rastrearte.

---

## Qué recopilamos

**Nada.** Específicamente:

<table>
<thead>
<tr><th>Categoría de datos</th><th>¿Recopilamos?</th></tr>
</thead>
<tbody>
<tr><td data-label="Categoría de datos" markdown="span">Identificadores personales (nombre, correo, teléfono, dirección)</td><td data-label="¿Recopilamos?" markdown="span">❌ No</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Identificadores de dispositivo (IDFA, IDFV, ID del dispositivo)</td><td data-label="¿Recopilamos?" markdown="span">❌ No</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Ubicación</td><td data-label="¿Recopilamos?" markdown="span">❌ No</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Contactos</td><td data-label="¿Recopilamos?" markdown="span">❌ No</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Datos de salud</td><td data-label="¿Recopilamos?" markdown="span">❌ No</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Información financiera</td><td data-label="¿Recopilamos?" markdown="span">❌ No (las compras las maneja Apple StoreKit)</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Analytics de uso</td><td data-label="¿Recopilamos?" markdown="span">Sin analíticas propias ni SDK de analíticas. Apple nos pasa datos de uso agregados solo si en los Ajustes de tu aparato elegiste compartir con los desarrolladores.</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Registros de fallos (crash logs)</td><td data-label="¿Recopilamos?" markdown="span">Solo si tú lo eliges — si en los Ajustes de tu aparato elegiste compartir con los desarrolladores, Apple nos pasa los informes de fallos. Esa elección es tuya, en Ajustes, no nuestra. Aparte de eso, la app guarda los diagnósticos de MetricKit **en una carpeta de tu dispositivo** (máximo 30 archivos, se sobrescribe el más viejo) para que un fallo pueda revisarse en el aparato donde ocurrió. Nunca se transmiten, y no existe ninguna ruta de código que pudiera transmitirlos.</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Cookies / píxeles de tracking</td><td data-label="¿Recopilamos?" markdown="span">❌ N/A (somos una app nativa, no un sitio web)</td></tr>
<tr><td data-label="Categoría de datos" markdown="span">Rango de edad</td><td data-label="¿Recopilamos?" markdown="span">❌ No. **Desde la versión 3.5.0:** donde la ley lo exige, la app lo lee en tu dispositivo y lo descarta; ver «Tu rango de edad».</td></tr>
</tbody>
</table>

El manifiesto `PrivacyInfo.xcprivacy` de la app declara `NSPrivacyTracking: false` y un arreglo `NSPrivacyCollectedDataTypes` vacío. Apple lo verifica durante la revisión de la app.

## Dónde viven tus datos

Todo lo que haces en ASVAB Coach se guarda **localmente en tu dispositivo** y (opcionalmente) se sincroniza vía tu cuenta personal de **iCloud**:

<table>
<thead>
<tr><th>Qué</th><th>Dónde</th></tr>
</thead>
<tbody>
<tr><td data-label="Qué" markdown="span">Tu progreso de estudio (conteo de aciertos/errores por categoría)</td><td data-label="Dónde" markdown="span">`UserDefaults` en el dispositivo + `NSUbiquitousKeyValueStore` (iCloud Key-Value Store) para sincronizar entre tu iPhone, iPad y Apple Watch</td></tr>
<tr><td data-label="Qué" markdown="span">Tu selección de rama militar (Army, Navy, etc.)</td><td data-label="Dónde" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="Qué" markdown="span">Tarjetas de repetición espaciada (qué preguntas fallaste, cuándo revisarlas)</td><td data-label="Dónde" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="Qué" markdown="span">Resultados del diagnóstico</td><td data-label="Dónde" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="Qué" markdown="span">Momentum — tu nivel de meta diaria, los créditos de hoy, los días de gracia acumulados, si el anillo se muestra, y **tu fecha de examen si la cargaste** (es opcional; si la dejas vacía, Momentum es un hábito diario y nada más)</td><td data-label="Dónde" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="Qué" markdown="span">Cuáles de los 17 logros conseguiste</td><td data-label="Dónde" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="Qué" markdown="span">**Desde la versión 3.5.0:** un simulacro completo que dejaste a medias, para retomarlo (iPhone, iPad y Mac)</td><td data-label="Dónde" markdown="span">`UserDefaults`, solo en ese dispositivo</td></tr>
</tbody>
</table>

**Desde la versión 3.5.0**, la app guarda además en el dispositivo las marcas de las que depende el reinicio — entre ellas, un token opaco que Apple le entrega a la app para la cuenta de iCloud que tiene la sesión iniciada en el dispositivo, y que la app guarda solo para notar cuándo esa cuenta cambia. Nada de esto nos llega.

La sincronización iCloud usa **tu** Cuenta de Apple. Nunca vemos, accedemos ni tenemos forma de recuperar estos datos. Apple los cifra en tránsito y en reposo. Si borras la app y deshabilitas iCloud para ella, los datos desaparecen. No hay copia en ningún servidor controlado por nosotros.

## Tutor de IA — solo Apple Intelligence en el dispositivo

ASVAB Coach usa **Apple Intelligence (FoundationModels)** para generar explicaciones adaptativas y soluciones de matemática paso a paso para las preguntas de práctica del ASVAB.

Este modelo corre **enteramente en tu dispositivo**. Nunca enviamos tus preguntas, respuestas ni ningún otro dato a OpenAI, Anthropic, Google ni a ningún servicio de IA de terceros. Tampoco los enviamos a un servidor nuestro — no tenemos uno. **Ninguna pregunta que le hagas al tutor, ni ninguna respuesta que te dé, sale jamás de tu dispositivo.** No hay claves API ni IA en la nube — la IA es on-device, punto.

Apple Intelligence requiere un dispositivo Apple reciente con Apple Intelligence habilitado, en una región donde Apple lo ofrezca. Donde no está disponible, las funciones del tutor de IA se ocultan en silencio y la explicación oficial revisada de cada pregunta (siempre presente) sostiene la experiencia.

Para los compromisos de privacidad de Apple, ver la documentación de [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). ASVAB Coach usa **solo** inferencia de Apple Intelligence on-device — nunca Private Cloud Compute, y nunca IA en la nube.

La inferencia de Apple Intelligence es local — sin red. La app abre por su cuenta conexiones de red para dos cosas nada más, las dos de Apple: **Apple StoreKit**, para tu compra única, y el **almacenamiento clave-valor de iCloud**, que lleva tu progreso y tu rama entre tus propios dispositivos, bajo tu propia cuenta de Apple. **Desde la versión 3.5.0** hay una tercera, también de Apple: la **comprobación de rango de edad de Apple**, que corre cada vez que arranca la app y para la que el sistema de Apple puede comunicarse con Apple (ver «Tu rango de edad»). Nunca abre una hacia nosotros, porque no tenemos servidor. Cualquier otra cosa que llegue a internet lo hace porque tocaste un enlace y tu navegador lo siguió — se describe abajo.

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

## Compartir — dos pantallas, y sólo cuando tú lo pides

La app no comparte nada por su cuenta. Hay dos pantallas que pueden entregarle algo a la hoja de
compartir estándar de Apple, y sólo porque tú lo pediste:

- La **tarjeta para el reclutador**: un resumen en texto simple de tu propia preparación — la rama
  que elegiste y su mínimo de AFQT, tu estimado de AFQT del diagnóstico, tu mejor puntaje de Sprint
  y tus días totales de estudio. Se arma en tu dispositivo, con datos que ya estaban ahí.
- El **resumen de estudio**: un PDF que la app genera en tu dispositivo a partir de la guía.

La hoja de compartir es de Apple, corre en tu dispositivo y **tú** eliges el destino: Mensajes,
Mail, Archivos, imprimir, AirDrop, lo que quieras. La app nunca elige por ti, nunca comparte en
segundo plano y nunca guarda ni recibe una copia. Lo que envías llega a donde lo enviaste y a
ningún otro lado — a nosotros nadie nos avisa que compartiste, y no nos llega nada.

Esta sección faltaba en la versión 1.5 de esta política, publicada el 2026-09-05, y en la 1.4
faltaba a medias: la 1.5 se quedó con la mitad de «los enlaces que tocas» y dejó afuera la mitad de
compartir. Lo decimos en vez de agregar la sección en silencio, por la misma razón por la que el
resto de este documento nombra sus propios huecos — una omisión que hace ver a la app más privada
de lo que es, es de los errores que hay que señalar, no sólo corregir.

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

Una verificación automática en nuestro proceso de publicación lo asegura: se rechaza cualquier build que importe un SDK de analytics conocido.

## Este sitio web

Este sitio es estático y no tiene formularios. Nosotros no le agregamos analytics, ni tracking, ni
píxeles, ni ningún script de terceros, y no fijamos ninguna cookie propia. No rastreamos a nadie, así
que no hay nada que una señal "Do Not Track" pueda apagar, y ningún tercero está autorizado a
recopilar información sobre tu actividad en otros sitios a través de este sitio web.

Ahora, lo que sí verás si abres "Ver código fuente" de esta misma página: **Cloudflare puede insertar
scripts suyos al entregarla.** No están en el HTML que escribimos —los agrega Cloudflare en el
camino— y se sirven desde este mismo dominio, bajo `/cdn-cgi/`:

- `/cdn-cgi/challenge-platform/scripts/jsd/main.js` — la detección de bots de Cloudflare. Hace
  comprobaciones en tu navegador para distinguir a una persona del tráfico automatizado, y en ese
  proceso Cloudflare puede fijar una cookie técnica de seguridad. Es protección del sitio: no es
  analytics, no es publicidad y no sigue tu actividad en otros sitios. La Política de Seguridad de Contenido (CSP) de este sitio bloquea el cargador en línea que Cloudflare agrega para él, así que en nuestra prueba del 2026-10-06 no se ejecutó.
- `/cdn-cgi/scripts/…/cloudflare-static/email-decode.min.js` — descifra las direcciones de correo que
  Cloudflare ofusca en la página, para que los programas que buscan correos para enviar spam no las levanten.

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

No recopilamos datos de nadie, a ninguna edad. Eso incluye a los menores de 13 años: no hay cuenta, no hay registro, no hay analíticas propias y no nos llega nada de tu dispositivo salvo lo que Apple nos pasa si elegiste compartir con los desarrolladores — así que no hay información personal de un menor que podamos recopilar, a sabiendas ni de ningún otro modo, ni que podamos divulgar a nadie. Como no recopilamos nada, no hay nada que requiera el consentimiento parental verificable que exige la COPPA. **Desde la versión 3.5.0**, donde la ley lo exige, la app sí lee tu rango de edad a través de Apple, y lo descarta; ver «Tu rango de edad».

## Tu rango de edad — sólo donde la ley lo exige

**Desde la versión 3.5.0.** Algunos lugares, como Texas, ahora exigen que las apps comprueben la categoría de edad de quien las usa. Donde el sistema de Apple le indica a la app que tu región lo exige, ASVAB Coach le pide a Apple tu **rango de edad**, el que administra la función «Rango de edad para apps» de Apple: menos de 13, de 13 a 15, de 16 a 17, o 18 o más — nunca tu edad ni tu fecha de nacimiento. Junto con el rango, la respuesta de Apple puede indicar cómo se confirmó la edad (por ti, por tu padre, madre o tutor, o por otra comprobación) y si están activos ciertos controles parentales de Apple; la app no usa nada de eso. Si Apple te pregunta antes, lo comparte por su cuenta o no lo comparte depende de tu región y de tu configuración de «Rango de edad para apps» (o la de tu padre, madre o tutor, en un grupo familiar), y la aplica la función de Apple, no la app: en algunas regiones la ley hace que se comparta de forma automática con las apps que lo piden. Esa función, y lo que guarda sobre lo que compartiste, son de Apple, no nuestros. La app funciona igual con cualquier respuesta, y también si el rango no se comparte o el sistema no contesta: tiene clasificación 4+ y nada que limitar por edad, así que un menor y un adulto reciben la misma app. La respuesta —el rango y lo que viene con él— se lee en tu dispositivo y se descarta en cuanto llega: la app no la guarda en el dispositivo, no la sincroniza con iCloud, no la escribe en ningún archivo de registro y nunca nos la envía. Cada vez que arranca (y, si el sistema no contestó, otra vez al abrirse otra ventana), la app le pregunta al sistema de Apple si tu región lo exige, y sólo pide el rango si la respuesta es sí; el sistema de Apple atiende las dos preguntas y puede necesitar comunicarse con Apple para contestarlas. El Apple Watch no tiene forma de pedirlo, así que la app del reloj nunca lo hace.

Hasta la versión 3.4.0, la app no pide tu rango de edad en ningún caso.

## Tus derechos

Para los derechos de privacidad que tienes bajo el RGPD (UE/EEE), el RGPD del Reino Unido, la LOPDGDD de España, la CCPA/CPRA de California, otras leyes estatales de EE.UU. y demás — y cómo ejercerlos — consulta el [centro de Derechos de Privacidad](https://khassinx.com/es/legal/your-rights/) de KHASSINX.

Como no tenemos ningún dato sobre ti, la mayoría de esas solicitudes son irrelevantes: no hay nada que borrar, exportar, corregir ni transferir de nuestro lado. Para ejercer cualquier derecho sobre ASVAB Coach, reinicia tus datos en la app o escribe a legal@khassinx.com.

También mantienes control total a través de los mecanismos de Apple:

- **Borrar todos los datos de la app**: borra la app de tu dispositivo. Abre Ajustes → tu nombre → iCloud → Administrar almacenamiento → ASVAB Coach → Borrar datos para eliminar también la copia de iCloud KV
- **Reinicio dentro de la app, hasta la versión 3.4.0**: abre Acerca de (en el iPhone está en "Ver todas las funciones"; en el iPad, en la barra lateral) y toca "Reiniciar progreso"; el mismo botón está también en Mi Progreso. Cuando lo confirmas, borra tu progreso en el dispositivo y en iCloud KV
- **Reinicio dentro de la app, desde la versión 3.5.0**: abre Ajustes → Acerca de (Ajustes está en la barra lateral cuando la app la muestra, como en el iPad y el Mac, y si no, en "Ver todas las funciones", como en el iPhone; en el Apple Watch, es Más → Acerca de) y toca "Reiniciar progreso"; el mismo botón está también en Mi progreso. Si la app detecta tu cuenta de iCloud, borra tu progreso en este dispositivo y, a través de iCloud, en tus otros dispositivos a medida que se sincronizan; para avisarles, deja en tu iCloud la fecha y hora del reinicio. Un dispositivo que ya tenía la app cuando reiniciaste borra su copia entera, incluido lo que hayas estudiado en él desde el reinicio. En el iPhone, el iPad y el Mac solo lo hace si detecta conexión cuando tocas el botón; si no, no borra nada y te pide que te conectes primero. En el Apple Watch no revisa la conexión: borra el reloj en el acto y pasa el reinicio a tus otros dispositivos cuando el reloj se sincroniza. Si la app no detecta una cuenta, borra tu progreso en este dispositivo. En cualquier caso, no se garantiza que un reinicio llegue a todos los dispositivos ni que se sostenga en todos: un dispositivo con una versión anterior de la app conserva su copia, y en algunos casos lo borrado puede volver desde otro dispositivo — por ejemplo, si usas iCloud pero la app no había detectado tu cuenta. No afecta tu compra

## Etiquetas de Privacidad del App Store

En la página de ASVAB Coach en el App Store declaramos **"Datos no recopilados"** en todas las categorías. Eso se verifica contra el manifiesto `PrivacyInfo.xcprivacy` dentro de la app (`NSPrivacyTracking: false`, `NSPrivacyCollectedDataTypes` vacío) y contra el código mismo: cero SDKs de terceros de cualquier tipo, y las únicas conexiones de red que la app abre por su cuenta son Apple StoreKit y el almacenamiento clave-valor de iCloud, que lleva tu progreso entre tus propios dispositivos bajo tu propia cuenta de Apple y que nosotros no podemos leer nunca — y, **desde la versión 3.5.0**, la comprobación de rango de edad de Apple, para la que el sistema de Apple puede comunicarse con Apple y que nunca nos llega (ver «Tu rango de edad»). El tutor de IA es Apple Intelligence on-device y no hace ninguna llamada de red.

Hasta la versión 3.3.3 esta sección cubría además una búsqueda web opcional que le entregaba a Safari lo que escribías, como una búsqueda de Google. **Esa pantalla ahora busca en tu dispositivo y no abre ninguna conexión de red**, así que ya no hay nada que aclarar aparte. Apple define "recopilar" como transmitir datos fuera del dispositivo **de un modo en que el desarrollador o sus socios puedan acceder a ellos**; los enlaces que tocas siguen abriéndose en tu navegador, y lo que le entregas a la hoja de compartir sigue yendo a donde tú lo mandes — ni lo uno ni lo otro nos llega. Los seguimos describiendo completos más arriba, porque mereces saber a dónde van tus palabras, no sólo quién tiene permitido leerlas.

## Cambios a esta política

Si alguna vez modificamos materialmente nuestras prácticas de datos, actualizaremos este documento con una nueva fecha de vigencia y publicaremos un aviso dentro de la app. Al día de esta revisión (2026-09-06), no hay cambios previstos porque genuinamente no recopilamos datos y nuestro modelo de negocio (pago único, sin publicidad) no se beneficia de recopilarlos.

## Jurisdicción

Esta política se rige por las leyes del **Estado de Florida, EE.UU.** Las disputas se resuelven en el Estado de Florida.

El operador y responsable del tratamiento de datos de ASVAB Coach es **KHASSINX LLC**, una sociedad de responsabilidad limitada de Florida. En la medida en que aplique alguna ley de protección de datos, KHASSINX LLC es el responsable — aunque en la práctica la app no procesa ningún dato personal (ver arriba).

## Contacto

Si tienes preocupaciones o preguntas sobre privacidad, escríbenos:

- **Correo**: legal@khassinx.com
- **Correo postal**: disponible si lo solicitas

Procuramos responder dentro de 7 días hábiles.

---

*Última actualización: {{ page.updated | date: "%Y-%m-%d" }} · Versión {{ page.version }}*

*1.7 — 6 oct 2026.* Describe lo que cambia con la versión 3.5.0 de la app, marcado «Desde la versión 3.5.0» donde aparece: donde la ley lo exige, la app lee tu rango de edad a través de Apple en tu dispositivo y lo descarta (sección nueva «Tu rango de edad»); la comprobación de rango de edad de Apple es una tercera conexión de red, también de Apple; un simulacro completo que dejaste a medias se guarda en el dispositivo para que lo retomes; y el reinicio dentro de la app pasa a Ajustes → Acerca de y funciona como se describe en «Tus derechos». Indica que ASVAB Coach para Mac sigue en la versión 3.4.0. Aclara que los informes de fallos y los datos de uso agregados nos llegan solo a través de Apple, y solo si elegiste compartir con los desarrolladores. Lo que la app recopila no cambió.

*1.6 — 9 sep 2026.* Se agregó la sección «Compartir» (la tarjeta para el reclutador y el resumen de estudio, a través de la hoja de compartir de Apple), y se agregó Momentum —nivel de meta diaria, créditos del día, días de gracia acumulados, logros y la fecha de examen opcional— a «Dónde viven tus datos». Nada de la app cambió.

*1.5 — 6 sep 2026.* Desde la versión 3.4.0, la Búsqueda corre en el dispositivo; hasta la 3.3.3 le entregaba a Safari lo que escribías, como una búsqueda de Google. La política ahora lo dice en los cuatro lugares que describían el comportamiento anterior, incluidas «Menores» y «Etiquetas de Privacidad del App Store», y cuenta dos conexiones de red que la app abre por su cuenta: Apple StoreKit y el almacenamiento clave-valor de iCloud.

*1.4 — 6 sep 2026.* «Este sitio web» ahora nombra los dos scripts que Cloudflare inserta al entregar el sitio, y lo que hace cada uno. Nada de la app cambió.

*1.3 — 23 ago 2026.* Se describió la búsqueda web opcional que la app tenía entonces, se retiraron tres afirmaciones que iban más allá de lo que podíamos garantizar, se agregaron los diagnósticos que quedan en el dispositivo a la fila de registros de fallos, y se corrigieron tres fechas contradictorias y un párrafo duplicado. Nada de la app cambió.
