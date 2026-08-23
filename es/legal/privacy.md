---
layout: prose
title: Política de Privacidad
permalink: /es/legal/privacy/
lang: es
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-08-23
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

La inferencia de Apple Intelligence es local — sin red. La app abre por su cuenta exactamente un tipo de conexión de red: **Apple StoreKit**, para tu compra única. Nunca abre una hacia nosotros, porque no tenemos servidor. El único caso en que algo sí viaja por internet es la búsqueda web opcional que se describe abajo — y ahí quien se conecta es Safari, sobre una búsqueda que vos escribiste y tocaste.

## Búsqueda web — opcional, y quien se conecta es Safari

ASVAB Coach incluye una pantalla opcional de **Búsqueda web**. Vos escribís una pregunta, la app le
antepone `ASVAB` y le entrega todo a **Safari** como una búsqueda de Google. En iPhone y iPad se abre
en una vista de Safari dentro de la app; en Mac se abre en tu navegador predeterminado.

Lo decimos derecho, porque es el único lugar donde algo sale de tu dispositivo:

- **Google recibe lo que escribiste y tu dirección IP**, exactamente como si hubieras abierto Safari
  y buscado vos. Lo que pase con eso allá lo rige la
  [política de privacidad de Google](https://policies.google.com/privacy), no la nuestra.
- **Nosotros no recibimos nada.** La app le pasa una URL a Safari y se hace a un lado. No hace la
  solicitud, no ve los resultados, no registra la búsqueda ni guarda historial. Tus búsquedas no
  quedan almacenadas en ningún lugar de la app.
- **Sólo ocurre cuando vos lo pedís.** No se busca nada en segundo plano, ni automáticamente. Si
  nunca abrís esa pantalla, no se envía ninguna búsqueda.
- **Todo lo demás sigue siendo local.** El banco de preguntas, las sesiones de práctica, el tutor de
  IA y tu progreso viven en el dispositivo y nunca usan esta vía.

Lo mismo vale para cualquier enlace externo que toques en la app (nuestro sitio, páginas oficiales de
reclutamiento militar): la app le pide al sistema que lo abra, y de ahí en adelante quien se conecta
es tu navegador.

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

Este sitio es estático. No usa cookies propias, no corre ningún tipo de analytics ni tracking, no incrusta scripts ni píxeles de terceros, y no tiene formularios. No rastreamos a nadie, así que no hay nada que una señal "Do Not Track" pueda apagar, y ningún tercero está autorizado a recolectar información sobre tu actividad en otros sitios a través de este sitio web. El sitio lo sirve GitHub Pages, con DNS y entrega a cargo de Cloudflare; como cualquier host web, esos proveedores procesan datos técnicos estándar de las solicitudes (como tu dirección IP) para servir y proteger el sitio, como empresas independientes bajo sus propias políticas de privacidad. Nosotros no recibimos, guardamos ni usamos esos datos.

## Los emails que nos envías

Si nos escribes, recibimos tu dirección de email y tu mensaje. Los usamos solo para responderte y arreglar lo que reportaste — sin listas, sin marketing, sin compartirlos. La correspondencia de soporte se conserva solo el tiempo necesario para ayudarte y para nuestras obligaciones legales, y puedes pedirnos borrarla en cualquier momento en [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Menores

ASVAB Coach está pensada para usuarios de **17 años o más** (edad típica de candidatos al alistamiento militar en EE.UU.). La clasificación del App Store está configurada acordemente. No recopilamos datos de menores de 17 a sabiendas porque — repetimos — no recopilamos datos de nadie, punto.

## Tus derechos

Para los derechos de privacidad que tienes bajo el RGPD (UE/EEE), el RGPD del Reino Unido, la LOPDGDD de España, la CCPA/CPRA de California, otras leyes estatales de EE.UU. y demás — y cómo ejercerlos — consulta el [centro de Derechos de Privacidad](https://khassinx.com/es/legal/your-rights/) de KhassinX.

Como no tenemos ningún dato sobre ti, la mayoría de esas solicitudes son irrelevantes: no hay nada que borrar, exportar, corregir ni transferir de nuestro lado. Para ejercer cualquier derecho sobre ASVAB Coach, reinicia tus datos en la app o escribe a legal@khassinx.com.

También mantienes control total a través de los mecanismos de Apple:

- **Borrar todos los datos de la app**: borra la app de tu dispositivo. Abre Ajustes → tu nombre → iCloud → Administrar almacenamiento → ASVAB Coach → Borrar datos para eliminar también la copia de iCloud KV
- **Reinicio dentro de la app**: abre la app → Menú → Acerca de → "Reiniciar todo el progreso" — borra local + iCloud KV en un toque

## Etiquetas de Privacidad del App Store

En la página de ASVAB Coach en el App Store declaramos **"Datos no recopilados"** en todas las categorías. Eso se verifica contra el manifiesto `PrivacyInfo.xcprivacy` dentro de la app (`NSPrivacyTracking: false`, `NSPrivacyCollectedDataTypes` vacío) y contra el código mismo: cero SDKs de terceros de cualquier tipo, y la única conexión de red que la app abre por su cuenta es Apple StoreKit. El tutor de IA es Apple Intelligence on-device y no hace ninguna llamada de red.

La búsqueda web opcional no cambia esto. Apple define "recopilar" como transmitir datos fuera del dispositivo **de un modo en que el desarrollador o sus socios puedan acceder a ellos**. Ahí es Safari quien se conecta a Google, sobre una búsqueda que vos escribiste, y nosotros nunca la recibimos — así que de nuestro lado no hay nada recopilado. Igual lo describimos completo más arriba, porque merecés saber a dónde van tus palabras, no sólo quién tiene permitido leerlas.

## Cambios a esta política

Si alguna vez modificamos materialmente nuestras prácticas de datos, actualizaremos este documento con una nueva fecha de vigencia y publicaremos un aviso dentro de la app. Al día de esta revisión (2026-08-23), no hay cambios previstos porque genuinamente no recopilamos datos y nuestro modelo de negocio (pago único, sin publicidad) no se beneficia de recopilarlos.

## Jurisdicción

Esta política se rige por las leyes del **Estado de Florida, EE.UU.** Las disputas se resuelven en el Estado de Florida.

El operador y responsable del tratamiento de datos de ASVAB Coach es **KHASSINX LLC**, una sociedad de responsabilidad limitada de Florida. En la medida en que aplique alguna ley de protección de datos, KHASSINX LLC es el responsable — aunque en la práctica la app no procesa ningún dato personal (ver arriba).

## Contacto

Si tienes preocupaciones o preguntas sobre privacidad, escríbenos:

- **Correo**: legal@khassinx.com
- **Correo postal**: disponible si lo solicitas

Procuramos responder dentro de 7 días hábiles.

---

*Última actualización: 2026-08-23 · Versión 1.3*

*Qué cambió en la 1.3 — nada sobre cómo se comporta la app.* Describimos la búsqueda web opcional,
que siempre estuvo en la app pero faltaba en este documento, y retiramos tres frases que afirmaban de
más: un absoluto que no podemos sostener es peor que un límite honesto. También corregimos la fila de
registros de fallos para mencionar los diagnósticos que la app guarda en el dispositivo y nunca
envía, y arreglamos tres fechas contradictorias y un párrafo duplicado.
