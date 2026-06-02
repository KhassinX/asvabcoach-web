---
layout: prose
title: Política de Privacidad
permalink: /es/legal/privacy/
lang: es
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
updated: 2026-05-25
---

# Política de Privacidad — ASVAB Coach

**Fecha de vigencia**: 2026-05-18
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Desarrollador**: KhassinX
**Contacto**: hello@khassinx.com

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
| Registros de fallos (crash logs) | ❌ No (el reporte opcional de fallos de Apple lo controlás vos en Ajustes de iOS, no nosotros) |
| Cookies / píxeles de tracking | ❌ N/A (somos una app nativa, no un sitio web) |

El manifiesto `PrivacyInfo.xcprivacy` de la app declara `NSPrivacyTracking: false` y un arreglo `NSPrivacyCollectedDataTypes` vacío. Apple lo verifica durante la revisión de la app.

## Dónde viven tus datos

Todo lo que hacés en ASVAB Coach se guarda **localmente en tu dispositivo** y (opcionalmente) se sincroniza vía tu cuenta personal de **iCloud**:

| Qué | Dónde |
|---|---|
| Tu progreso de estudio (conteo de aciertos/errores por categoría) | `UserDefaults` en el dispositivo + `NSUbiquitousKeyValueStore` (iCloud Key-Value Store) para sincronizar entre tu iPhone, iPad y Apple Watch |
| Tu selección de rama militar (Army, Navy, etc.) | `UserDefaults` + iCloud KV |
| Tarjetas de repetición espaciada (qué preguntas fallaste, cuándo revisarlas) | `UserDefaults` + iCloud KV |
| Fecha de inicio del trial gratuito (anti-fraude) | **Keychain** de iOS (cifrado, sobrevive desinstalación, **no** se sincroniza entre dispositivos) |
| Resultados del diagnóstico | `UserDefaults` + iCloud KV |

La sincronización iCloud usa **tu** Apple ID. Nunca vemos, accedemos ni tenemos forma de recuperar estos datos. Apple los cifra en tránsito y en reposo. Si borrás la app y deshabilitás iCloud para ella, los datos desaparecen. No hay copia en ningún servidor controlado por nosotros.

## Tutor de IA — Dos Caminos (NORMA 36 v2, actualizado 2026-05-31 para v2.7.0)

ASVAB Coach v2.7.0+ incluye **dos caminos de IA**. El predeterminado es idéntico a versiones anteriores; el segundo es una función opt-in para usuarios avanzados.

### Camino 1 — Apple Intelligence on-device (POR DEFECTO para todos)

Por defecto, ASVAB Coach usa **Apple Intelligence (FoundationModels)** para generar explicaciones adaptativas y soluciones paso a paso de matemáticas para las preguntas de práctica del ASVAB.

Este modelo corre **completamente en tu dispositivo**. En este camino nunca enviamos tus preguntas, respuestas, ni ningún otro dato a OpenAI, Anthropic, Google ni a ningún servicio de IA externo. Tampoco los enviamos a un servidor nuestro — no tenemos.

Apple Intelligence requiere iOS 26+ y un iPhone 15 Pro o posterior. En dispositivos sin Apple Intelligence, las funciones del tutor de IA en este camino se ocultan silenciosamente.

Para los compromisos de privacidad de Apple, consultá [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). ASVAB Coach usa **solo** inferencia on-device — nunca Private Cloud Compute.

### Camino 2 — Power User Mode (BYOK, opt-in)

Si elegís habilitar **Power User Mode** en Configuración → Tutor de IA, podés pegar tu propia clave API de Anthropic (Claude), OpenAI (ChatGPT) o Google (Gemini). Cuando lo hacés:

- **Tu clave queda en el Keychain de iOS**, sincronizada entre tus dispositivos Apple ID vía iCloud Keychain (para que el Apple Watch también la pueda usar sin volver a pegarla).
- **Tus consultas y respuestas van DIRECTO desde tu dispositivo al endpoint del proveedor** (api.anthropic.com / api.openai.com / generativelanguage.googleapis.com). Este es el ÚNICO camino de red en toda la app que envía datos a un tercero.
- **ASVAB Coach no tiene proxy en el medio**. Nunca vemos tu clave API. Nunca vemos tus consultas. Nunca vemos las respuestas. La conexión HTTPS es entre tu dispositivo y el proveedor que elegiste, igual que si vos llamaras la API desde una app propia.
- **El uso de datos en este modo está gobernado por la política de privacidad del proveedor que elegiste**, no por la nuestra. Aceptaste esos términos cuando te registraste con Claude / ChatGPT / Gemini. Leé sus políticas:
  - [Política de Privacidad de Anthropic](https://www.anthropic.com/legal/privacy)
  - [Política de Privacidad de OpenAI](https://openai.com/policies/row-privacy-policy/)
  - [Privacidad de Google AI](https://policies.google.com/privacy)
- **Estimado de uso local**: Guardamos contadores diarios de tokens (números enteros, sin contenido) en `UserDefaults` de tu dispositivo para que veas un estimado rodante de 30 días. Estos contadores nunca salen de tu dispositivo, nunca sincronizan a iCloud, y se borran cuando quitás la clave.
- **Podés deshabilitar Power User Mode en cualquier momento**: Configuración → Tutor de IA → Quitar Clave. Esto borra la clave del Keychain y limpia los contadores locales.

Si NUNCA activás Power User Mode, ASVAB Coach hace CERO solicitudes de red salientes más allá de Apple StoreKit (para tu compra única) y Apple Intelligence on-device (que es local — sin red).

## Compras dentro de la app

Las compras las maneja **Apple StoreKit 2**. Solo vemos:

- Un valor booleano: "este Apple ID pagó por acceso completo" (vía `Transaction.currentEntitlements`)
- La fecha de revocación de la transacción (para reembolsos)

**No** vemos tu Apple ID, tu nombre, tu método de pago, tu dirección de facturación ni ningún otro metadato de la compra. Apple lo maneja todo. Los reembolsos y la gestión de suscripciones pasan directamente por Apple.

Usamos un modelo de **pago único** — sin suscripciones recurrentes, sin renovaciones automáticas.

## SDKs de terceros

**Cero.** ASVAB Coach no tiene ninguna dependencia de terceros:

- Sin Firebase, sin Google Analytics, sin Facebook SDK, sin Mixpanel, sin Amplitude, sin Sentry, sin Crashlytics
- Sin redes publicitarias (sin AdMob, sin Meta Audience Network, sin AppLovin)
- Sin plataformas de A/B testing
- Sin SDKs de atribución (sin AppsFlyer, sin Adjust)

Nuestros gates automáticos de CI lo aseguran: cualquier pull request que importe un SDK de analytics conocido es rechazado.

## Menores

ASVAB Coach está pensada para usuarios de **17 años o más** (edad típica de candidatos al alistamiento militar en EE.UU.). La clasificación del App Store está configurada acordemente. No recopilamos datos de menores de 17 a sabiendas porque — repetimos — no recopilamos datos de nadie, punto.

## Tus derechos

Como no tenemos ningún dato sobre vos, no hay nada que borrar, exportar, corregir ni transferir de nuestro lado.

Mantenés control total a través de los mecanismos de Apple:

- **Borrar todos los datos de la app**: borrá la app de tu dispositivo. Abrí Ajustes → Apple ID → iCloud → Administrar almacenamiento → ASVAB Coach → Borrar datos para eliminar también la copia de iCloud KV
- **Reinicio dentro de la app**: abrí la app → Menú → Acerca de → "Reiniciar todo el progreso" — borra local + iCloud KV en un toque

## Etiquetas de Privacidad del App Store de Apple

En la página de ASVAB Coach en el App Store declaramos **"Datos no recopilados"** en todas las categorías. Esto se verifica contra el manifiesto `PrivacyInfo.xcprivacy` dentro de la app y contra el código mismo (cero importaciones de SDK de analytics, sin llamadas de red más allá de StoreKit y — si el usuario activó Power User Mode opt-in — llamadas directas desde su dispositivo al proveedor que eligió usando su propia clave API).

**Por qué "Datos no recopilados" sigue válido incluso con Power User Mode**: en modo BYOK, no somos el responsable del tratamiento de datos y no recopilamos nada. El usuario dirige sus consultas al proveedor usando la clave/cuenta propia. ASVAB Coach funciona como cliente liviano de la suscripción AI existente del usuario. El proveedor puede recopilar datos según su propia política (que el usuario aceptó al registrarse con Claude / ChatGPT / Gemini) — pero esa es recopilación del proveedor, no nuestra. Nosotros nunca vemos los datos en tránsito.

## Cambios a esta política

Si alguna vez modificamos materialmente nuestras prácticas de datos, actualizaremos este documento con una nueva fecha de vigencia y publicaremos un aviso dentro de la app. Al día de hoy (2026-05-18), no hay cambios previstos porque genuinamente no recopilamos datos y nuestro modelo de negocio (pago único, sin publicidad) no se beneficia de recopilarlos.

## Jurisdicción

Esta política se rige por las leyes del **Estado de Florida, EE.UU.** Las disputas se resuelven en el Estado de Florida.

## Contacto

Si tenés preocupaciones o preguntas sobre privacidad, escribinos:

- **Correo**: hello@khassinx.com
- **Correo postal**: disponible si lo solicitás

Procuramos responder dentro de 7 días hábiles.

---

*Última actualización: 2026-05-25 · Versión 1.1*
