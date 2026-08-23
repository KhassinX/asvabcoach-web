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
updated: 2026-08-23
---

# Privacy Policy — ASVAB Coach

**Effective date**: 2026-05-18
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Operator / Data controller**: KHASSINX LLC, a Florida limited liability company
**Contact**: legal@khassinx.com

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
| Crash logs | ❌ No — nothing reaches us. Apple's own crash reporting is opt-in by you in iOS Settings, not by us. Separately, the app keeps Apple's MetricKit diagnostics **in a folder on your device** (capped at 30 files, oldest overwritten first) so a crash can be looked at on the device it happened on. They are never transmitted, and there is no code path that could transmit them. |
| Cookies / tracking pixels | ❌ N/A (we are a native app, not a website) |

The `PrivacyInfo.xcprivacy` manifest in the app declares `NSPrivacyTracking: false` and an empty `NSPrivacyCollectedDataTypes` array. Apple verifies this during app review.

## Where your data lives

Everything you do in ASVAB Coach is stored **locally on your device** and (optionally) synced via your personal **iCloud** account:

| What | Where |
|---|---|
| Your study progress (correct/incorrect counts per category) | `UserDefaults` on device + `NSUbiquitousKeyValueStore` (iCloud Key-Value Store) for sync between your iPhone, iPad, and Apple Watch |
| Your branch selection (Army, Navy, etc.) | `UserDefaults` + iCloud KV |
| Spaced-repetition cards (which questions you've missed, when to review) | `UserDefaults` + iCloud KV |
| Diagnostic results | `UserDefaults` + iCloud KV |

iCloud sync uses **your** Apple Account. We never see, access, or have any way to retrieve this data. It is encrypted in transit and at rest by Apple. If you delete the app and disable iCloud for it, the data is gone. There is no copy on any server we control.

## AI Tutor — Apple Intelligence on-device only

ASVAB Coach uses **Apple Intelligence (FoundationModels)** to generate adaptive explanations and step-by-step math solutions for ASVAB practice questions.

This model runs **entirely on your device**. We never send your questions, answers, or any other data to OpenAI, Anthropic, Google, or any third-party AI service. We never send them to a server we control either — we don't have one. **No question you ask the tutor, and no answer it gives, ever leaves your device.** There are no API keys and no cloud AI — the AI is on-device, period.

Apple Intelligence requires a recent Apple device with Apple Intelligence enabled, in a region where Apple offers it. Where it isn't available, the AI tutor features are silently hidden and the hand-curated official explanation for each question (always present) carries the experience.

For Apple's own privacy commitments, see Apple's [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/) documentation. ASVAB Coach uses **only on-device** Apple Intelligence inference — never Private Cloud Compute, and never any cloud AI.

Apple Intelligence inference is local — no network. The app itself opens exactly one kind of network connection on its own: **Apple StoreKit**, for your one-time purchase. It never opens one to us, because we have no server. The one case where something does travel over the internet is the optional web search described below — and there it is Safari that connects, on a search you typed and tapped.

## Web Search — optional, and it's Safari that connects

ASVAB Coach includes an optional **Web Search** screen. You type a question, the app prefixes it with
`ASVAB` and hands the whole thing to **Safari** as a Google search. On iPhone and iPad it opens in a
Safari view inside the app; on Mac it opens in your default browser.

Being straight about what that means, because it is the one place where something leaves your device:

- **Google receives what you typed and your IP address**, exactly as if you had opened Safari and
  searched yourself. What happens to it there is governed by
  [Google's privacy policy](https://policies.google.com/privacy), not ours.
- **We receive nothing.** The app hands a URL to Safari and steps out. It does not make the request,
  does not see the results, does not log the search, and keeps no history of it. Your searches are
  not stored anywhere in the app.
- **It only happens when you ask for it.** Nothing is searched in the background, and never
  automatically. If you never open that screen, no search is ever sent.
- **Everything else stays local.** The question bank, the practice sessions, the AI tutor and your
  progress are all on-device and never use this path.

The same applies to any external link you tap in the app (our website, official military recruiting
pages): the app asks the system to open it, and from there your browser is doing the connecting.

## In-App Purchases

Purchases are handled by **Apple StoreKit 2**. We see only:

- A boolean: "this Apple Account has paid for full access" (via `Transaction.currentEntitlements`)
- The transaction's revocation date (for refunds)

We do **not** see your Apple Account, your name, your payment method, your billing address, or any other purchase metadata. Apple handles all of that. Refunds and subscription management go through Apple directly.

We use a **one-time purchase** model — no recurring subscriptions, no auto-renewals.

## Third-party SDKs

**Zero.** ASVAB Coach has no third-party dependencies whatsoever:

- No Firebase, no Google Analytics, no Facebook SDK, no Mixpanel, no Amplitude, no Sentry, no Crashlytics
- No advertising networks (no AdMob, no Meta Audience Network, no AppLovin)
- No A/B testing platforms
- No attribution SDKs (no AppsFlyer, no Adjust)

Our automated CI gates enforce this: any pull request that imports a known analytics SDK is rejected.

## This website

This site is static. It sets no cookies of its own, runs no analytics or tracking of any kind, embeds no third-party scripts or pixels, and has no forms. We do not track anyone, so there is nothing for a "Do Not Track" signal to turn off, and no third party is permitted to collect information about your activity across sites through this website. The site is served by GitHub Pages with DNS and delivery by Cloudflare; like any web host, those providers process standard technical request data (such as your IP address) to deliver and protect the site, as independent companies under their own privacy policies. We do not receive, keep, or use that data.

## Email you send us

If you email us, we receive your email address and your message. We use them only to reply and to fix what you reported — no lists, no marketing, no sharing. Support correspondence is kept only as long as needed to help you and for our legal obligations, and you can ask us to delete it at any time at [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Children

ASVAB Coach is intended for users **17 and older** (typical age of U.S. military enlistment candidates). The App Store rating is set accordingly. We do not knowingly collect data from anyone under 17 because — to repeat — we do not collect data from anyone, period.

## Your rights

For the privacy rights you have under the GDPR (EU/EEA), UK GDPR, Spain's LOPDGDD, California's CCPA/CPRA, other US state laws, and elsewhere — and how to exercise them — see KhassinX's [Privacy Rights center](https://khassinx.com/legal/your-rights/).

Because we hold no data about you, most such requests are moot: there is nothing to delete, export, correct, or transfer at our end. To exercise any right for ASVAB Coach, reset your data in-app or email legal@khassinx.com. You also retain full control through Apple's mechanisms:

- **Delete all app data**: delete the app from your device. Open Settings → your name → iCloud → Manage Storage → ASVAB Coach → Delete Data to also remove the iCloud KV copy
- **In-app reset**: open the app → Menu → About → "Reset all progress" — wipes local + iCloud KV in one tap

## Apple App Privacy Nutrition Labels

In the App Store listing, ASVAB Coach declares **"Data Not Collected"** in every category. That is verified against the in-app `PrivacyInfo.xcprivacy` manifest (`NSPrivacyTracking: false`, empty `NSPrivacyCollectedDataTypes`) and against the code itself: zero third-party SDKs of any kind, and the only network connection the app opens on its own is Apple StoreKit. The AI tutor is on-device Apple Intelligence and makes no network calls.

The optional web search does not change this. Apple defines "collect" as transmitting data off the device **in a way the developer or its partners can access**. There, Safari makes the connection to Google on a search you typed, and we never receive it — so there is nothing collected on our side. We describe it in full above anyway, because you deserve to know where your words go, not only who is allowed to read them.

## Changes to this policy

If we ever materially change our data practices, we will update this document with a new effective date and post a notice in the app. As of this revision (2026-08-23), no change is planned because we genuinely do not collect data and we have no business model that benefits from collecting it (one-time purchase, no advertising).

## Jurisdiction

This policy is governed by the laws of the **State of Florida, USA**. Disputes are resolved in the State of Florida.

The operator and data controller for ASVAB Coach is **KHASSINX LLC**, a Florida limited liability company. To the extent any data-protection law applies, KHASSINX LLC is the controller — though in practice the app processes no personal data (see above).

## Contact

If you have any privacy concerns or questions, reach out:

- **Email**: legal@khassinx.com
- **Mail**: Available on request

We aim to respond within 7 business days.

---

*Last updated: 2026-08-23 · Version 1.3*

*What changed in 1.3 — nothing about how the app behaves.* We described the optional web search,
which has always been in the app but was missing from this document, and we retired three sentences
that overstated the case: an absolute we cannot keep is worse than an honest limit. We also corrected
the crash-log row to mention the on-device diagnostics the app keeps and never sends, and fixed three
conflicting dates and a duplicated paragraph.
