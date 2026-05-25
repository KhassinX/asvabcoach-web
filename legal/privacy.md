---
title: Privacy Policy
layout: default
permalink: /legal/privacy/
redirect_from:
  - /PRIVACY_POLICY
  - /PRIVACY_POLICY/
  - /privacy
  - /privacy/
---

# Privacy Policy — ASVAB Coach

**Effective date**: 2026-05-18
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Developer**: Abraham K. Alonso (KhassinX), Tampa, FL, USA
**Contact**: hello@khassinx.com

---

## TL;DR

**ASVAB Coach collects nothing. No account. No analytics. No tracking. No ads. Your data lives on your devices.**

We are an **independent educational app**. We have zero servers that store user data. We do not have your email, your name, your phone, your IP address, your location, or any identifier that could trace back to you.

---

## What we collect

**Nothing.** Specifically:

| Data category | Do we collect? |
|---|---|
| Personal identifiers (name, email, phone, address) | ❌ No |
| Device identifiers (IDFA, IDFV, device ID) | ❌ No |
| Location | ❌ No |
| Contacts | ❌ No |
| Health data | ❌ No |
| Financial info | ❌ No (purchases handled by Apple StoreKit) |
| Usage analytics | ❌ No |
| Crash logs | ❌ No (Apple's optional Apple-side crash reporting is opt-in by you in iOS Settings, not us) |
| Cookies / tracking pixels | ❌ N/A (we are a native app, not a website) |

The `PrivacyInfo.xcprivacy` manifest in the app declares `NSPrivacyTracking: false` and an empty `NSPrivacyCollectedDataTypes` array. Apple verifies this during app review.

## Where your data lives

Everything you do in ASVAB Coach is stored **locally on your device** and (optionally) synced via your personal **iCloud** account:

| What | Where |
|---|---|
| Your study progress (correct/incorrect counts per category) | `UserDefaults` on device + `NSUbiquitousKeyValueStore` (iCloud Key-Value Store) for sync between your iPhone, iPad, and Apple Watch |
| Your branch selection (Army, Navy, etc.) | `UserDefaults` + iCloud KV |
| Spaced-repetition cards (which questions you've missed, when to review) | `UserDefaults` + iCloud KV |
| Free-trial start date (anti-abuse) | iOS **Keychain** (encrypted, survives uninstall, does **not** sync between devices) |
| Diagnostic results | `UserDefaults` + iCloud KV |

iCloud sync uses **your** Apple ID. We never see, access, or have any way to retrieve this data. It is encrypted in transit and at rest by Apple. If you delete the app and disable iCloud for it, the data is gone. There is no copy on any server we control.

## Apple Intelligence (on-device AI tutor)

ASVAB Coach uses **Apple Intelligence (FoundationModels)** to generate adaptive explanations and step-by-step math solutions for ASVAB practice questions.

This model runs **entirely on your device**. We never send your questions, answers, or any other data to OpenAI, Anthropic, Google, or any third-party AI service. We never send them to a server we control either — we don't have one.

Apple Intelligence eligibility requires iOS 26+ and an iPhone 15 Pro or later. On devices without Apple Intelligence, the AI tutor features are silently hidden, and the rest of the app works normally.

For Apple's own privacy commitments about Apple Intelligence, see Apple's [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/) documentation. ASVAB Coach uses **only on-device** inference — never Private Cloud Compute.

## In-App Purchases

Purchases are handled by **Apple StoreKit 2**. We see only:

- A boolean: "this Apple ID has paid for full access" (via `Transaction.currentEntitlements`)
- The transaction's revocation date (for refunds)

We do **not** see your Apple ID, your name, your payment method, your billing address, or any other purchase metadata. Apple handles all of that. Refunds and subscription management go through Apple directly.

We use a **one-time purchase** model — no recurring subscriptions, no auto-renewals.

## Third-party SDKs

**Zero.** ASVAB Coach has no third-party dependencies whatsoever:

- No Firebase, no Google Analytics, no Facebook SDK, no Mixpanel, no Amplitude, no Sentry, no Crashlytics
- No advertising networks (no AdMob, no Meta Audience Network, no AppLovin)
- No A/B testing platforms
- No attribution SDKs (no AppsFlyer, no Adjust)

Our `audit_question_bank.sh` CI gate enforces this: any pull request that imports a known analytics SDK is rejected.

## Children

ASVAB Coach is intended for users **17 and older** (typical age of U.S. military enlistment candidates). The App Store rating is set accordingly. We do not knowingly collect data from anyone under 17 because — to repeat — we do not collect data from anyone, period.

## Your rights

Because we hold no data about you, there is nothing to delete, export, correct, or transfer at our end.

You retain full control through Apple's mechanisms:

- **Delete all app data**: delete the app from your device. Open Settings → Apple ID → iCloud → Manage Storage → ASVAB Coach → Delete Data to also remove the iCloud KV copy
- **In-app reset**: open the app → Menu → About → "Reset all progress" — wipes local + iCloud KV in one tap

## Apple App Privacy Nutrition Labels

In the App Store listing, ASVAB Coach declares **"Data Not Collected"** in all categories. This is verified against the in-app `PrivacyInfo.xcprivacy` manifest and against the actual code (zero analytics SDK imports, no network requests beyond StoreKit and Apple Intelligence on-device inference).

## Changes to this policy

If we ever materially change our data practices, we will update this document with a new effective date and post a notice in the app. As of today (2026-05-18), no change is planned because we genuinely do not collect data and we have no business model that benefits from collecting it (one-time purchase, no advertising).

## Jurisdiction

This policy is governed by the laws of the **State of Florida, USA**. We are a sole proprietorship (Abraham K. Alonso, Tampa, FL). Disputes are resolved in Hillsborough County, Florida.

## Contact

If you have any privacy concerns or questions, reach out:

- **Email**: hello@khassinx.com
- **Mail**: Available on request

We aim to respond within 7 business days.

---

# Política de Privacidad — ASVAB Coach (Español)

**Fecha efectiva**: 2026-05-18
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Desarrollador**: Abraham K. Alonso (KhassinX), Tampa, FL, EE.UU.
**Contacto**: hello@khassinx.com

---

## TL;DR

**ASVAB Coach no recopila nada. Sin cuenta. Sin analytics. Sin tracking. Sin anuncios. Tus datos viven en tus dispositivos.**

Somos una **app educativa independiente**. Tenemos cero servidores que almacenan datos de usuario. No tenemos tu email, tu nombre, tu teléfono, tu IP, tu ubicación, ni ningún identificador que pudiera rastrearte.

## Qué recopilamos

**Nada.** El manifesto `PrivacyInfo.xcprivacy` de la app declara `NSPrivacyTracking: false` y un array `NSPrivacyCollectedDataTypes` vacío. Apple lo verifica durante la revisión.

## Dónde viven tus datos

Todo lo que haces en ASVAB Coach se guarda **localmente en tu dispositivo** y (opcionalmente) se sincroniza vía tu cuenta personal de **iCloud**:

- Progreso de estudio → `UserDefaults` + `NSUbiquitousKeyValueStore` (iCloud KV)
- Selección de rama militar → `UserDefaults` + iCloud KV
- Tarjetas de repetición espaciada → `UserDefaults` + iCloud KV
- Fecha de inicio del trial gratuito → **Keychain** de iOS (cifrado, sobrevive a desinstalación, NO sincroniza entre dispositivos)

iCloud sync usa **tu** Apple ID. Nunca vemos, accedemos, ni podemos recuperar estos datos.

## Apple Intelligence (tutor IA on-device)

ASVAB Coach usa **Apple Intelligence (FoundationModels)** para generar explicaciones adaptadas y soluciones paso a paso de matemáticas.

Este modelo corre **completamente en tu dispositivo**. Nunca enviamos tus preguntas, respuestas, o cualquier dato a OpenAI, Anthropic, Google, ni a ningún servicio de IA externo. Tampoco a un servidor nuestro — no tenemos.

Apple Intelligence requiere iOS 26+ y iPhone 15 Pro o más reciente. En dispositivos sin Apple Intelligence, las funciones de tutor IA se ocultan silenciosamente y el resto de la app funciona normal.

## Compras In-App

Las compras las maneja **Apple StoreKit 2**. Solo vemos:

- Un booleano: "este Apple ID ha pagado por acceso completo"
- La fecha de revocación de la transacción (para reembolsos)

No vemos tu Apple ID, tu nombre, tu método de pago, tu dirección de facturación, ni ninguna otra metadata de compra. Apple lo maneja todo.

Modelo: **pago único** — sin suscripciones, sin renovación automática.

## SDKs de terceros

**Cero.** Sin Firebase, sin Google Analytics, sin Facebook SDK, sin redes publicitarias, sin SDKs de atribución. El CI gate `audit_question_bank.sh` lo enforce.

## Menores

ASVAB Coach está destinada a usuarios **17 años o más** (edad típica de candidatos a alistamiento militar US). No recopilamos datos de nadie menor de 17 porque — repetimos — no recopilamos datos de nadie, punto.

## Tus derechos

Como no tenemos datos sobre ti, no hay nada que borrar, exportar, corregir, o transferir de nuestro lado.

Retienes control completo:

- **Borrar todo**: desinstala la app. Settings → Apple ID → iCloud → Manage Storage → ASVAB Coach → Delete Data para borrar también la copia iCloud KV
- **Reset in-app**: abre la app → Menú → Acerca de → "Reiniciar progreso" — borra local + iCloud KV de un toque

## Cambios a esta política

Si cambian materialmente nuestras prácticas de datos, actualizaremos este documento con nueva fecha efectiva y publicaremos aviso en la app. Al día de hoy (2026-05-18), no se planea cambio porque genuinamente no recopilamos datos.

## Jurisdicción

Esta política se rige por las leyes del **Estado de Florida, EE.UU.** Somos sole proprietorship (Abraham K. Alonso, Tampa, FL). Disputas se resuelven en Hillsborough County, Florida.

## Contacto

- **Email**: hello@khassinx.com
- **Respuesta**: dentro de 7 días hábiles

---

*Última revisión: 2026-05-18 · Versión 1.0*
