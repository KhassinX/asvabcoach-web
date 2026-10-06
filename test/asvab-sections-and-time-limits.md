---
layout: prose
title: ASVAB Sections and Time Limits
description: "Every section of the computer-adaptive ASVAB: how many questions, how many minutes, and which four decide whether you can enlist. From the official Fact Sheet."
permalink: /test/asvab-sections-and-time-limits/
lang: en
canonical_en: /test/asvab-sections-and-time-limits/
canonical_es: /es/test/asvab-sections-and-time-limits/
updated: 2026-10-05
---

{% assign cat = site.data.cat_subtests -%}
{% assign s = cat.summary -%}

About 70% of military applicants take the **CAT-ASVAB**, the computer version, according
to the official ASVAB Fact Sheet. The CAT-ASVAB
has {{ s.printed_rows }} sections, {{ s.total_questions }} questions and
{{ s.total_minutes }} minutes of testing time — a little over three hours, before the
paperwork around it.

That averages {{ s.average_seconds_per_question }} seconds per question, and the average
is the least useful number on this page. The sections are nowhere near evenly paced: the
fastest gives you {{ s.fastest_seconds }} seconds per question and the slowest gives you
{{ s.slowest_seconds }} — {{ s.fastest_abbr }} against {{ s.slowest_abbr }}. Walking in
expecting one pace and meeting the other is how people lose a section they knew the
material for.

## Every section, with its clock

Verified {{ cat.verified }} against the official Fact Sheet.

<table>
<thead>
<tr><th>Section</th><th>Questions</th><th>Minutes</th><th>Seconds per question</th><th>Counts toward AFQT</th></tr>
</thead>
<tbody>
{% for t in cat.printed -%}
<tr><td data-label="Section" markdown="span">{{ t.name_en }} ({{ t.abbr }})</td><td data-label="Questions" markdown="span">{{ t.questions }}</td><td data-label="Minutes" markdown="span">{{ t.minutes }}</td><td data-label="Seconds per question" markdown="span">{{ t.seconds_per_question }}</td><td data-label="Counts toward AFQT" markdown="span">{% if t.is_afqt %}Yes{% else %}No{% endif %}</td></tr>
{% endfor %}
</tbody>
</table>

**Source.** [{{ cat.source_title }}]({{ cat.source_url }}) — CAT-ASVAB column.

## Why the recruiter’s sheet shows nine, not {{ s.printed_rows }}

Auto Information and Shop Information are administered as two separate tests, then
combined into a single reported score labeled **AS**. So you sit for
{{ s.printed_rows }} sections and walk out with {{ s.reported_scores }} scores.

{% assign a = cat.printed | where: "abbr", "AI" | first -%}
{% assign b = cat.printed | where: "abbr", "SI" | first -%}
{% assign as = cat.reported | where: "abbr", "AS" | first -%}
That one is worth knowing before test day: AI is {{ a.questions }} questions in
{{ a.minutes }} minutes and SI is {{ b.questions }} in {{ b.minutes }}, but the number
that reaches your record is the combined {{ as.questions }} questions in
{{ as.minutes }} minutes. Nothing about the combination is a penalty — it is simply how
the score is reported.

## Only {{ s.afqt_count }} of these decide whether you can enlist

{% assign afqt = cat.printed | where: "is_afqt", true -%}
{% for t in afqt -%}
- **{{ t.name_en }}** ({{ t.abbr }}) — {{ t.questions }} questions, {{ t.minutes }} minutes.
{% endfor %}

Those {{ s.afqt_count }} build your **AFQT**, the percentile a branch checks against its
minimum. They are {{ s.afqt_questions }} of the {{ s.total_questions }} questions and
{{ s.afqt_minutes }} of the {{ s.total_minutes }} minutes — the majority of your time in
the chair, which is not an accident.

The other sections are not filler. They feed the **line scores** that decide which jobs
open up for you. But if your problem is qualifying at all, the AFQT is the whole problem.

→ [Minimum ASVAB score by branch](/scores/minimum-afqt-by-branch/) — where each branch
sets its floor, and what a GED changes.

## Two rules of the computer version that the paper one does not have

**You cannot go back.** Once you answer a question in the CAT-ASVAB, it is locked. There
is no returning to it, no flagging it for later, no changing your mind at the end. Read
each one before you commit, and then commit.

**Guessing costs you.** The official Fact Sheet says the CAT-ASVAB has a penalty for
guessing. If you are short on time, the
official guidance is to keep answering as well as you can rather than filling the rest at
random — eliminating options and choosing deliberately still helps you.

The paper version (P&P-ASVAB) works the opposite way on the second point: there is no
guessing penalty, so you leave nothing blank. Advice written for one version is wrong for
the other, which is why it pays to know which one you are sitting.

## What to do with the table above

Pick the {{ s.afqt_count }} rows marked *Yes* and look at their seconds-per-question
column. That column is your practice target — not a study plan, a pacing target. Knowing
algebra and running out of clock produces the same score as not knowing algebra.

ASVAB Coach drills the {{ s.afqt_count }} AFQT sections at their real pace and estimates
where you stand, on iPhone, iPad, Apple Watch and Mac. Everything runs on your device: no
account, no tracking. Your progress lives on your devices and, if you use iCloud, in your
own iCloud — never on our servers.

[See ASVAB Coach](/){:.action}
