---
layout: prose
title: Privacy Policy
permalink: /legal/privacy/
lang: en
canonical_en: /legal/privacy/
canonical_es: /es/legal/privacy/
redirect_from:
  - /PRIVACY_POLICY
  - /PRIVACY_POLICY/
  - /privacy
  - /privacy/
updated: 2026-05-25
---

# Privacy Policy — ASVAB Coach

**Effective date**: 2026-05-18
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Operator / Data controller**: KHASSINX LLC, a Florida limited liability company
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

## AI Tutor — Apple Intelligence on-device only

ASVAB Coach uses **Apple Intelligence (FoundationModels)** to generate adaptive explanations and step-by-step math solutions for ASVAB practice questions.

This model runs **entirely on your device**. We never send your questions, answers, or any other data to OpenAI, Anthropic, Google, or any third-party AI service. We never send them to a server we control either — we don't have one. **Nothing leaves your device.** There are no API keys and no cloud AI — the AI is on-device, period.

Apple Intelligence requires a recent Apple device with Apple Intelligence enabled, in a region where Apple offers it. Where it isn't available, the AI tutor features are silently hidden and the hand-curated official explanation for each question (always present) carries the experience.

For Apple's own privacy commitments, see Apple's [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/) documentation. ASVAB Coach uses **only on-device** Apple Intelligence inference — never Private Cloud Compute, and never any cloud AI.

The **only** outbound network request the app ever makes is to Apple StoreKit (for your one-time purchase). Apple Intelligence inference is local — no network.

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

Our automated CI gates enforce this: any pull request that imports a known analytics SDK is rejected.

## Children

ASVAB Coach is intended for users **17 and older** (typical age of U.S. military enlistment candidates). The App Store rating is set accordingly. We do not knowingly collect data from anyone under 17 because — to repeat — we do not collect data from anyone, period.

## Your rights

Because we hold no data about you, there is nothing to delete, export, correct, or transfer at our end.

You retain full control through Apple's mechanisms:

- **Delete all app data**: delete the app from your device. Open Settings → Apple ID → iCloud → Manage Storage → ASVAB Coach → Delete Data to also remove the iCloud KV copy
- **In-app reset**: open the app → Menu → About → "Reset all progress" — wipes local + iCloud KV in one tap

## Apple App Privacy Nutrition Labels

In the App Store listing, ASVAB Coach declares **"Data Not Collected"** in all categories. This is verified against the in-app `PrivacyInfo.xcprivacy` manifest and against the actual code (zero analytics SDK imports, no network requests beyond StoreKit; the AI tutor is on-device Apple Intelligence, which is local and makes no network calls).

This is verified against the in-app `PrivacyInfo.xcprivacy` manifest and the actual code: zero analytics SDKs, and the only network request is Apple StoreKit. The AI tutor is on-device Apple Intelligence — nothing leaves your device.

## Changes to this policy

If we ever materially change our data practices, we will update this document with a new effective date and post a notice in the app. As of today (2026-05-18), no change is planned because we genuinely do not collect data and we have no business model that benefits from collecting it (one-time purchase, no advertising).

## Jurisdiction

This policy is governed by the laws of the **State of Florida, USA**. Disputes are resolved in the State of Florida.

The operator and data controller for ASVAB Coach is **KHASSINX LLC**, a Florida limited liability company. To the extent any data-protection law applies, KHASSINX LLC is the controller — though in practice the app processes no personal data (see above).

## Contact

If you have any privacy concerns or questions, reach out:

- **Email**: hello@khassinx.com
- **Mail**: Available on request

We aim to respond within 7 business days.

---

*Last updated: 2026-05-25 · Version 1.1*
