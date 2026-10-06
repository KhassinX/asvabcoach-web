---
layout: prose
description: "ASVAB Coach collects nothing: no analytics SDKs, no account, no cloud AI. What the app stores, where it lives, and how to erase it."
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
updated: 2026-10-06
effective: 2026-09-06
h1: "Privacy Policy — ASVAB Coach"
version: "1.7"
related:
  - /legal/terms/
  - /contact/
summary:
  - "ASVAB Coach collects nothing: no account, no analytics, no tracking and no ads."
  - "Your progress is stored on your device and, optionally, synced through your own iCloud. There is no copy on any server we control."
  - "The AI tutor runs on your device with Apple Intelligence. No question you ask it, and no answer it gives, leaves your device."
  - "The app has no third-party SDKs."
  - "If you email us, we receive your address and message and use them only to reply and fix what you reported; you can ask us to delete them."
---

**Effective date**: 2026-09-06
**App**: ASVAB Coach ([App Store](https://apps.apple.com/us/app/asvab-coach/id6761384966))
**Operator / Data controller**: KHASSINX LLC, a Florida limited liability company
**Contact**: legal@khassinx.com

**On every device**, what's marked "From version 3.5.0" applies once that device has version 3.5.0 or later.

---

## TL;DR

**ASVAB Coach collects nothing. No account. No analytics. No tracking. No ads. Your data lives on your devices.**

We are an **independent educational app**. We have zero servers that store user data. We do not have your email, your name, your phone, your IP address, your location, or any identifier that could trace back to you.

---

## What we collect

**Nothing.** Specifically:

<table>
<thead>
<tr><th>Data category</th><th>Do we collect?</th></tr>
</thead>
<tbody>
<tr><td data-label="Data category" markdown="span">Personal identifiers (name, email, phone, address)</td><td data-label="Do we collect?" markdown="span">❌ No</td></tr>
<tr><td data-label="Data category" markdown="span">Device identifiers (IDFA, IDFV, device ID)</td><td data-label="Do we collect?" markdown="span">❌ No</td></tr>
<tr><td data-label="Data category" markdown="span">Location</td><td data-label="Do we collect?" markdown="span">❌ No</td></tr>
<tr><td data-label="Data category" markdown="span">Contacts</td><td data-label="Do we collect?" markdown="span">❌ No</td></tr>
<tr><td data-label="Data category" markdown="span">Health data</td><td data-label="Do we collect?" markdown="span">❌ No</td></tr>
<tr><td data-label="Data category" markdown="span">Financial info</td><td data-label="Do we collect?" markdown="span">❌ No (purchases handled by Apple StoreKit)</td></tr>
<tr><td data-label="Data category" markdown="span">Usage analytics</td><td data-label="Do we collect?" markdown="span">No analytics of our own and no analytics SDK. Apple passes us aggregated usage data only if you chose in your device's Settings to share with app developers.</td></tr>
<tr><td data-label="Data category" markdown="span">Crash logs</td><td data-label="Do we collect?" markdown="span">Only if you opt in — if you chose in your device's Settings to share with app developers, Apple passes crash reports on to us. That choice is yours, in Settings, not ours. Separately, the app keeps Apple's MetricKit diagnostics **in a folder on your device** (capped at 30 files, oldest overwritten first) so a crash can be looked at on the device it happened on. They are never transmitted, and there is no code path that could transmit them.</td></tr>
<tr><td data-label="Data category" markdown="span">Cookies / tracking pixels</td><td data-label="Do we collect?" markdown="span">❌ N/A (we are a native app, not a website)</td></tr>
<tr><td data-label="Data category" markdown="span">Age range</td><td data-label="Do we collect?" markdown="span">❌ No. **From version 3.5.0:** where the law requires it, the app reads it on your device and discards it — see "Your age range".</td></tr>
</tbody>
</table>

The `PrivacyInfo.xcprivacy` manifest in the app declares `NSPrivacyTracking: false` and an empty `NSPrivacyCollectedDataTypes` array. Apple verifies this during app review.

## Where your data lives

Everything you do in ASVAB Coach is stored **locally on your device** and (optionally) synced via your personal **iCloud** account:

<table>
<thead>
<tr><th>What</th><th>Where</th></tr>
</thead>
<tbody>
<tr><td data-label="What" markdown="span">Your study progress (correct/incorrect counts per category)</td><td data-label="Where" markdown="span">`UserDefaults` on device + `NSUbiquitousKeyValueStore` (iCloud Key-Value Store) for sync between your iPhone, iPad, and Apple Watch</td></tr>
<tr><td data-label="What" markdown="span">Your branch selection (Army, Navy, etc.)</td><td data-label="Where" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="What" markdown="span">Spaced-repetition cards (which questions you've missed, when to review)</td><td data-label="Where" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="What" markdown="span">Diagnostic results</td><td data-label="Where" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="What" markdown="span">Momentum — your daily goal level, credits earned today, banked grace days, whether the ring is shown, and **your exam date if you set one** (optional; leave it empty and Momentum is a plain daily habit)</td><td data-label="Where" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="What" markdown="span">Which of the 17 achievements you have earned</td><td data-label="Where" markdown="span">`UserDefaults` + iCloud KV</td></tr>
<tr><td data-label="What" markdown="span">**From version 3.5.0:** a full practice exam you left unfinished, so you can resume it (iPhone, iPad and Mac)</td><td data-label="Where" markdown="span">`UserDefaults`, on that device only</td></tr>
</tbody>
</table>

**From version 3.5.0**, the app also keeps on the device the markers its reset relies on — among them an opaque token Apple gives the app for the iCloud account signed in on the device, which the app keeps only to notice when that account changes. None of this is sent to us.

iCloud sync uses **your** Apple Account. We never see, access, or have any way to retrieve this data. It is encrypted in transit and at rest by Apple. If you delete the app and disable iCloud for it, the data is gone. There is no copy on any server we control.

## AI Tutor — Apple Intelligence on-device only

ASVAB Coach uses **Apple Intelligence (FoundationModels)** to generate adaptive explanations and step-by-step math solutions for ASVAB practice questions.

This model runs **entirely on your device**. We never send your questions, answers, or any other data to OpenAI, Anthropic, Google, or any third-party AI service. We never send them to a server we control either — we don't have one. **No question you ask the tutor, and no answer it gives, ever leaves your device.** There are no API keys and no cloud AI — the AI is on-device, period.

Apple Intelligence requires a recent Apple device with Apple Intelligence enabled, in a region where Apple offers it. Where it isn't available, the AI tutor features are silently hidden and the hand-curated official explanation for each question (always present) carries the experience.

For Apple's own privacy commitments, see Apple's [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/) documentation. ASVAB Coach uses **only on-device** Apple Intelligence inference — never Private Cloud Compute, and never any cloud AI.

Apple Intelligence inference is local — no network. The app itself opens network connections on its own for two things only, both of them Apple's: **Apple StoreKit**, for your one-time purchase, and **iCloud key-value storage**, which carries your progress and your branch between your own devices under your own Apple Account. **From version 3.5.0** there is a third, also Apple's: **Apple's age-range check**, which runs each time the app starts and for which Apple's system may contact Apple (see "Your age range"). It never opens one to us, because we have no server. Anything else that reaches the internet does so because you tapped a link and your browser followed it — see below.

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

## Sharing — two screens, and only when you tap

Nothing in the app shares anything on its own. Two screens can hand something to the standard
Apple share sheet, and only because you asked for it:

- The **recruiter card** — a plain-text summary of your own prep: the branch you picked and its
  AFQT minimum, your diagnostic AFQT estimate, your best Sprint score, and your total study days.
  It is generated on your device from data that was already on your device.
- The **cheat sheet** — a PDF the app builds on your device from the study guide.

The share sheet is Apple's, it runs on your device, and **you** pick the destination: Messages,
Mail, Files, print, AirDrop, whatever you choose. The app never picks one for you, never shares in
the background, and never keeps or receives a copy. What you send goes where you sent it, and
nowhere else — we are not told that you shared, and nothing reaches us.

This section was missing from version 1.5 of this policy, published 2026-09-05, and from 1.4 it was
only half-missing: 1.5 kept the "links you tap" half and dropped the sharing half. We are saying so
rather than adding the section quietly, for the same reason the rest of this document names its own
gaps — an omission that makes the app look more private than it is, is the kind of error that has
to be pointed at, not just fixed.

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

An automated check in our release process enforces this: a build that imports a known analytics SDK is rejected.

## This website

This site is static and has no forms. We add no analytics, no tracking, no pixels and no third-party scripts of our own, and we set no cookies of our own. We do not track anyone, so there is nothing for a "Do Not Track" signal to turn off, and no third party is permitted to collect information about your activity across sites through this website.

Now, here is what you will see if you open "View Source" on this very page: **Cloudflare may insert scripts of its own as it delivers it.** They are not in the HTML we write — Cloudflare adds them on the way out — and they are served from this same domain, under `/cdn-cgi/`:

- `/cdn-cgi/challenge-platform/scripts/jsd/main.js` — Cloudflare's bot detection. It runs checks in your browser to tell a person apart from automated traffic, and in that process Cloudflare may set a technical security cookie. It is site protection: not analytics, not advertising, and it does not follow your activity across other sites. This site\'s Content Security Policy blocks the inline loader Cloudflare adds for it, so in our test on 2026-10-06 it did not run.
- `/cdn-cgi/scripts/…/cloudflare-static/email-decode.min.js` — it decodes the email addresses Cloudflare obfuscates on the page, so spam harvesters cannot lift them.

Neither one is ours, neither reports anything to us, and we receive no data from either. We spell it out in this detail because a policy that denies what anyone can check with "View Source" is worth nothing.

The site is served by GitHub Pages, with DNS and delivery by Cloudflare; like any web host, those providers process standard technical request data (such as your IP address) to deliver and protect the site, as independent companies under their own privacy policies. We do not receive, keep, or use that data.

## Email you send us

If you email us, we receive your email address and your message. We use them only to reply and to fix what you reported — no lists, no marketing, no sharing. Support correspondence is kept only as long as needed to help you and for our legal obligations, and you can ask us to delete it at any time at [`legal@khassinx.com`](mailto:legal@khassinx.com).

## Children

ASVAB Coach is rated **4+** in the App Store. It contains no age-restricted material and shows no advertising. What it teaches from — the study guide and the question bank — ships inside the app and is matched on your device. Search runs on your device too, over that same content. Nothing reaches the open web unless you tap a link yourself — our website, or the official recruiting page of the branch you picked — and then it is your browser that opens it. The app is built for people preparing for the ASVAB, typically high school students and older, but nothing inside it is gated by age.

We collect no data from anyone, at any age. That includes children under 13: there is no account, no sign-up, no analytics of our own, and nothing that reaches us from your device except what Apple passes on if you chose to share with app developers — so there is no personal information from a child for us to collect, knowingly or otherwise, and none to disclose to anyone. Because we collect nothing, there is nothing for which COPPA's verifiable parental consent would be required. **From version 3.5.0**, where the law requires it, the app does read your age range from Apple, and discards it; see "Your age range".

## Your age range — only where the law requires it

**From version 3.5.0.** Some places, such as Texas, now require apps to check the age category of the person using them. Where Apple's system tells the app that your region requires it, ASVAB Coach asks Apple for your **age range**, the one Apple's Age Range for Apps feature manages: under 13, 13 to 15, 16 to 17, or 18 and over — never your age or your birthdate. Along with the range, Apple's answer can say how the age was confirmed (by you, by a parent or guardian, or by another check) and whether certain Apple parental controls are on; the app doesn't use any of it. Whether Apple asks you first, shares it on its own, or doesn't share it depends on your region and on your Age Range for Apps settings (or a parent's or guardian's, in a family group), and Apple's feature applies them, not the app: in some regions the law has it shared automatically with apps that ask. That feature, and what it keeps about what you shared, are Apple's, not ours. The app works the same whatever the answer, and also if the range isn't shared or the system doesn't answer: it is rated 4+ and has nothing to restrict by age, so a minor and an adult get the same app. The answer — the range and what comes with it — is read on your device and discarded as soon as it arrives: the app doesn't store it on the device, doesn't sync it to iCloud, doesn't write it to any log, and never sends it to us. Each time it starts (and, if the system didn't answer, again when another window opens), the app asks Apple's system whether your region requires it, and asks for the range only if the answer is yes; Apple's system handles both questions and may need to contact Apple to answer them. Apple Watch has no way to ask, so the watch app never does.

Up to version 3.4.0 the app doesn't ask for your age range at all.

## Your rights

For the privacy rights you have under the GDPR (EU/EEA), UK GDPR, Spain's LOPDGDD, California's CCPA/CPRA, other US state laws, and elsewhere — and how to exercise them — see KHASSINX's [Privacy Rights center](https://khassinx.com/legal/your-rights/).

Because we hold no data about you, most such requests are moot: there is nothing to delete, export, correct, or transfer at our end. To exercise any right for ASVAB Coach, reset your data in-app or email legal@khassinx.com. You also retain full control through Apple's mechanisms:

- **Delete all app data**: delete the app from your device. Open Settings → your name → iCloud → Manage Storage → ASVAB Coach → Delete Data to also remove the iCloud KV copy
- **In-app reset, up to version 3.4.0**: open About (on iPhone it is under "See all features"; on iPad, in the sidebar) and tap "Reset all progress"; the same button is also in My Progress. Once you confirm, it wipes your progress on the device and in iCloud KV
- **In-app reset, from version 3.5.0**: open Settings → About (Settings is in the sidebar whenever the app shows one, as on iPad and Mac, and otherwise under "See all features", as on iPhone; on Apple Watch, it's More → About) and tap "Reset all progress"; the same button is also in My Progress. If the app detects your iCloud account, it erases your progress on this device and, through iCloud, on your other devices as they sync; to let them know, it leaves the date and time of the reset in your iCloud. A device that already had the app when you reset erases its whole copy, including anything studied on it since the reset. On iPhone, iPad and Mac it does this only if it detects a connection when you tap the button; otherwise it erases nothing and asks you to connect first. On Apple Watch it doesn't check the connection: it erases the watch right away and passes the reset on to your other devices once the watch syncs. If the app doesn't detect an account, it erases your progress on this device. Either way, a reset isn't guaranteed to reach or hold on every device: a device with an older version of the app keeps its copy, and in some cases erased progress can come back from another device — for example, if you use iCloud but the app hadn't detected your account. Your purchase isn't affected

## Apple App Privacy Nutrition Labels

In the App Store listing, ASVAB Coach declares **"Data Not Collected"** in every category. That is verified against the in-app `PrivacyInfo.xcprivacy` manifest (`NSPrivacyTracking: false`, empty `NSPrivacyCollectedDataTypes`) and against the code itself: zero third-party SDKs of any kind, and the only network connections the app opens on its own are Apple StoreKit and iCloud key-value storage, which carries your progress between your own devices under your own Apple Account and which we can never read — and, **from version 3.5.0**, Apple's age-range check, for which Apple's system may contact Apple and which never reaches us (see "Your age range"). The AI tutor is on-device Apple Intelligence and makes no network calls.

Until version 3.3.3 this section also covered an optional web search that handed what you typed to Safari as a Google search. **That screen now searches on your device and opens no network connection at all**, so there is nothing left to carve out. Apple defines "collect" as transmitting data off the device **in a way the developer or its partners can access**; the links you tap still open in your browser, and what you hand to the share sheet still goes wherever you send it — we never receive either one. We keep describing both in full above anyway, because you deserve to know where your words go, not only who is allowed to read them.

## Changes to this policy

If we ever materially change our data practices, we will update this document with a new effective date and post a notice in the app. As of this revision (2026-09-06), no change is planned because we genuinely do not collect data and we have no business model that benefits from collecting it (one-time purchase, no advertising).

## Jurisdiction

This policy is governed by the laws of the **State of Florida, USA**. Disputes are resolved in the State of Florida.

The operator and data controller for ASVAB Coach is **KHASSINX LLC**, a Florida limited liability company. To the extent any data-protection law applies, KHASSINX LLC is the controller — though in practice the app processes no personal data (see above).

## Contact

If you have any privacy concerns or questions, reach out:

- **Email**: legal@khassinx.com
- **Mail**: Available on request

We aim to respond within 7 business days.

---

*Last updated: {{ page.updated | date: "%Y-%m-%d" }} · Version {{ page.version }}*

*1.7 — 6 Oct 2026.* Describes what changes with version 3.5.0 of the app, marked "From version 3.5.0" wherever it appears: where the law requires it, the app reads your age range from Apple on your device and discards it (new section "Your age range"); Apple's age-range check is a third network connection, also Apple's; a full practice exam left unfinished is kept on the device so you can resume it; and the in-app reset moves to Settings → About and works as described under "Your rights". Notes that what is marked applies on each device once it has version 3.5.0 or later. States that crash reports and aggregated usage data reach us only through Apple, and only if you chose to share with app developers. What the app collects did not change.

*1.6 — 9 Sep 2026.* Added the "Sharing" section (the recruiter card and the cheat sheet, through Apple's share sheet), and added Momentum — daily goal level, credits earned today, banked grace days, achievements and the optional exam date — to "Where your data lives". Nothing about the app changed.

*1.5 — 6 Sep 2026.* Since version 3.4.0, Search runs on the device; up to 3.3.3 it handed what you typed to Safari as a Google search. The policy now says so in the four places that described the old behaviour, including "Children" and "Apple App Privacy Nutrition Labels", and counts two network connections the app opens on its own: Apple StoreKit and iCloud key-value storage.

*1.4 — 6 Sep 2026.* "This website" now names the two scripts Cloudflare inserts when it delivers the site, and what each one does. Nothing about the app changed.

*1.3 — 23 Aug 2026.* Described the optional web search the app had at the time, removed three statements that went further than we could guarantee, added the on-device diagnostics to the crash-log row, and fixed three conflicting dates and a duplicated paragraph. Nothing about the app changed.
