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
updated: 2026-09-05
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

Apple Intelligence inference is local — no network. The app itself opens exactly two kinds of network connection on its own: **Apple StoreKit**, for your one-time purchase, and **iCloud key-value storage**, which carries your progress and your branch between your own devices under your own Apple Account. It never opens one to us, because we have no server. Anything else that reaches the internet does so because you tapped a link and your browser followed it — see below.

## Search — it runs on your device

ASVAB Coach has a **Search** screen. It searches the content the app already ships with: the study
guide sections and the question bank. **Nothing is sent anywhere.** There is no search engine
behind it, no third party, and no network call of any kind — what you type never leaves the device.

Up to version 3.3.3 this screen worked the other way: it prefixed what you typed with `ASVAB` and
handed it to Safari as a Google search. **That stopped in 3.4.0, and this policy kept describing
the old behaviour until 2026-09-05.** We are naming the gap rather than quietly deleting the
paragraph, because the old screen also carried a footer promising your searches were private while
your text was travelling to Google — and a privacy policy that only ever gets more flattering is
not one you can check.

The one thing that still reaches the internet on your behalf is a link **you** tap:

- **Our own website** — this policy and the terms of use, at `asvab.khassinx.com`. It is a static
  site on GitHub Pages; it has no accounts, no analytics and no cookies, and it sees only what any
  web server sees when a browser asks it for a page.
- **The official recruiting page of the branch you picked** — `goarmy.com`, `navy.com`,
  `marines.com`, `airforce.com`, `gocoastguard.com` or `spaceforce.com`. These are run by the
  United States armed forces, not by us, and what happens there is governed by their privacy
  policies.

In both cases the app asks the system to open the link and steps out: from there your browser is
doing the connecting, exactly as if you had typed the address yourself. Nothing is opened in the
background, and nothing is opened without a tap.

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

This site is static and has no forms. We add no analytics, no tracking, no pixels and no third-party scripts of our own, and we set no cookies of our own. We do not track anyone, so there is nothing for a "Do Not Track" signal to turn off, and no third party is permitted to collect information about your activity across sites through this website.

Now, here is what you will see if you open "View Source" on this very page: **Cloudflare inserts two scripts of its own as it delivers it.** They are not in the HTML we write — Cloudflare adds them on the way out — and they are served from this same domain, under `/cdn-cgi/`:

- `/cdn-cgi/challenge-platform/scripts/jsd/main.js` — Cloudflare's bot detection. It runs checks in your browser to tell a person apart from automated traffic, and in that process Cloudflare may set a technical security cookie. It is site protection: not analytics, not advertising, and it does not follow your activity across other sites.
- `/cdn-cgi/scripts/…/cloudflare-static/email-decode.min.js` — it decodes the email addresses Cloudflare obfuscates on the page, so spam harvesters cannot lift them.

Neither one is ours, neither reports anything to us, and we receive no data from either. We spell it out in this detail because a policy that denies what anyone can check with "View Source" is worth nothing.

The site is served by GitHub Pages, with DNS and delivery by Cloudflare; like any web host, those providers process standard technical request data (such as your IP address) to deliver and protect the site, as independent companies under their own privacy policies. We do not receive, keep, or use that data.

## Email you send us

If you email us, we receive your email address and your message. We use them only to reply and to fix what you reported — no lists, no marketing, no sharing. Support correspondence is kept only as long as needed to help you and for our legal obligations, and you can ask us to delete it at any time at [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Children

ASVAB Coach is rated **4+** in the App Store. It contains no age-restricted material and shows no advertising. What it teaches from — the study guide and the question bank — ships inside the app and is matched on your device. Search runs on your device too, over that same content. Nothing reaches the open web unless you tap a link yourself — our website, or the official recruiting page of the branch you picked — and then it is your browser that opens it. The app is built for people preparing for the ASVAB, typically high school students and older, but nothing inside it is gated by age.

We collect no data from anyone, at any age. That includes children under 13: there is no account, no sign-up, no analytics, and nothing that leaves your device and reaches us — so there is no personal information from a child for us to collect, knowingly or otherwise, and none to disclose to anyone. Because we collect nothing, there is nothing for which COPPA's verifiable parental consent would be required.

## Your rights

For the privacy rights you have under the GDPR (EU/EEA), UK GDPR, Spain's LOPDGDD, California's CCPA/CPRA, other US state laws, and elsewhere — and how to exercise them — see KhassinX's [Privacy Rights center](https://khassinx.com/legal/your-rights/).

Because we hold no data about you, most such requests are moot: there is nothing to delete, export, correct, or transfer at our end. To exercise any right for ASVAB Coach, reset your data in-app or email legal@khassinx.com. You also retain full control through Apple's mechanisms:

- **Delete all app data**: delete the app from your device. Open Settings → your name → iCloud → Manage Storage → ASVAB Coach → Delete Data to also remove the iCloud KV copy
- **In-app reset**: open the app → Menu → About → "Reset all progress" — wipes local + iCloud KV in one tap

## Apple App Privacy Nutrition Labels

In the App Store listing, ASVAB Coach declares **"Data Not Collected"** in every category. That is verified against the in-app `PrivacyInfo.xcprivacy` manifest (`NSPrivacyTracking: false`, empty `NSPrivacyCollectedDataTypes`) and against the code itself: zero third-party SDKs of any kind, and the only network connections the app opens on its own are Apple StoreKit and iCloud key-value storage, which carries your progress between your own devices under your own Apple Account and which we can never read. The AI tutor is on-device Apple Intelligence and makes no network calls.

Until version 3.3.3 this section also covered an optional web search that handed what you typed to Safari as a Google search. **That screen now searches on your device and opens no network connection at all**, so there is nothing left to carve out. Apple defines "collect" as transmitting data off the device **in a way the developer or its partners can access**; the links you tap still open in your browser, and we never receive those either. We keep describing them in full above anyway, because you deserve to know where your words go, not only who is allowed to read them.

## Changes to this policy

If we ever materially change our data practices, we will update this document with a new effective date and post a notice in the app. As of this revision (2026-09-05), no change is planned because we genuinely do not collect data and we have no business model that benefits from collecting it (one-time purchase, no advertising).

## Jurisdiction

This policy is governed by the laws of the **State of Florida, USA**. Disputes are resolved in the State of Florida.

The operator and data controller for ASVAB Coach is **KHASSINX LLC**, a Florida limited liability company. To the extent any data-protection law applies, KHASSINX LLC is the controller — though in practice the app processes no personal data (see above).

## Contact

If you have any privacy concerns or questions, reach out:

- **Email**: legal@khassinx.com
- **Mail**: Available on request

We aim to respond within 7 business days.

---

*Last updated: 2026-09-05 · Version 1.5*

*What changed in 1.5 — the app stopped doing something, and this document was three
versions late in saying so.* Up to 3.3.3 the Search screen handed what you typed to Safari as a
Google search. Version 3.4.0 moved it on-device, and this policy went on describing the old
behaviour — in four places, including the Children section and the nutrition-label carve-out. Every
one of them made us look better than we were entitled to, which is the direction an error in a
privacy policy must never take. They are corrected here, and the old behaviour is named rather than
quietly deleted. We also corrected the count of network connections the app opens on its own: it
was one, and iCloud key-value sync makes it two.

*What changed in 1.4 — nothing about how the app behaves or what data reaches us.* We corrected the
"This website" section. It said the site embeds no third-party scripts, and the page that is served
carries two that Cloudflare inserts on the way out: they are now named one by one, with what each
one does. The previous claim was false at exactly the point anyone can check for themselves.

*What changed in 1.3 — nothing about how the app behaves.* We described the optional web search,
which has always been in the app but was missing from this document, and we retired three sentences
that overstated the case: an absolute we cannot keep is worse than an honest limit. We also corrected
the crash-log row to mention the on-device diagnostics the app keeps and never sends, and fixed three
conflicting dates and a duplicated paragraph.
