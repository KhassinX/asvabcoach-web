---
layout: prose
title: AFQT Percentiles and Categories
description: "What an AFQT percentile actually measures, the six DoD categories, and whether your score is good enough — for which branch, and for what."
permalink: /scores/afqt-percentiles-and-categories/
lang: en
canonical_en: /scores/afqt-percentiles-and-categories/
canonical_es: /es/scores/afqt-percentiles-and-categories/
updated: 2026-09-29
---

{%- assign escala = site.data.afqt_scale %}
{%- assign minimos = site.data.afqt_minimums %}
{%- assign tabla = site.data.afqt_official_conversion %}

An AFQT of {{ escala.categories[2].min }} does not mean you answered
{{ escala.categories[2].min }} % of the questions correctly. It means you scored as well as
or better than {{ escala.categories[2].min }} % of a national reference sample — the same
18-to-23-year-olds the Department of Defense has used as its yardstick since 1997.

That distinction is worth a minute of your time, because it changes what the number can
and cannot tell you.

## Why the middle of the scale is crowded

Percentiles describe where you landed in a crowd, and crowds are not evenly spread. Most
people score near the middle, so near the middle a small change in raw performance moves
you past a lot of other people at once. Out at the edges, the same improvement moves you
past almost nobody.

Two practical consequences:

- **If you are near the middle, a modest improvement is worth more than it feels like.**
  Going from the {{ escala.categories[3].max }} range into the
  {{ escala.categories[2].min }}s is a short climb in questions answered and a long one in
  percentile.
- **If you are already high, the last few points are expensive.** Moving from
  {{ escala.categories[1].max }} to {{ escala.categories[0].min }} costs far more than the
  same jump lower down.

This is also why comparing your AFQT to a friend’s “score out of 100” is meaningless. It
was never out of 100.

## The six categories

The DoD sorts AFQT percentiles into categories. Recruiters use them as shorthand, and some
incentives are written in terms of them rather than raw percentiles.

<table>
<thead>
<tr><th>Category</th><th>Percentile</th><th>What it means</th></tr>
</thead>
<tbody>
{% for c in escala.categories -%}
<tr><td data-label="Category" markdown="span">**{{ c.name }}**</td><td data-label="Percentile" markdown="span">{{ c.min }}–{{ c.max }}</td><td data-label="What it means" markdown="span">{{ c.description_en }}</td></tr>
{% endfor %}
</tbody>
</table>

Two notes on how to read that table.

**These describe a score band, not a person.** A category is a position on a scale, the
same way a percentile is. It is not a statement about what anyone can learn.

**{{ escala.categories[2].name }} is the line most people are actually chasing.** Clearing
a branch floor makes you eligible;
reaching {{ escala.categories[2].min }} is where enlistment incentives start appearing in
the conversation. The floors themselves are lower — see
[minimum AFQT by branch](/scores/minimum-afqt-by-branch/), where every branch sits at
{% if minimos.summary.floor_is_uniform %}{{ minimos.summary.floor_min }}{% else %}{{ minimos.summary.floor_min }} or {{ minimos.summary.floor_max }}{% endif %}
with a diploma.

**{{ escala.categories[4].name }} is capped, not barred.** By law, Category IV may not
exceed 4 percent of a branch’s yearly active-duty enlistments, and the Secretary of Defense
can raise that to 20 percent (10 U.S.C. §520(a)).

**{{ escala.categories[5].name }} is the bottom band.** Below percentile
{{ escala.categories[4].min }}, DoD policy bars enlistment (DoDI 1145.01, ¶3.c(1)).

## Is your AFQT score good?

{%- assign ramas_total = minimos.branches | size %}
{%- assign ramas_altas = minimos.summary.highest_floor_branches | size %}
{%- assign ramas_al_piso = ramas_total | minus: ramas_altas %}
{%- assign bajo_el_techo = minimos.summary.floor_max | minus: 1 %}

“Good” is not a property of the number. It is the answer to three different questions, and
the same score can pass one and fail another.

**Can you enlist at all?** Below {{ minimos.summary.floor_min }}, no branch can take you
with a high school diploma — not because of how you did, but because
{{ minimos.summary.floor_min }} is the lowest floor any of them publishes.

**Which branches?** This is where the floors stop agreeing with each other.
{% if minimos.summary.floor_is_uniform -%}
All {{ ramas_total }} sit at {{ minimos.summary.floor_min }}.
{%- else -%}
The floors split: {{ ramas_al_piso }} of the {{ ramas_total }} branches sit at {{ minimos.summary.floor_min }}, and
{% for rama in minimos.summary.highest_floor_branches %}{{ rama }}{% unless forloop.last %}, {% endunless %}{% endfor %}
asks for {{ minimos.summary.floor_max }}. One point separates “five branches” from “all of
them”.
{%- endif %}

**Which job?** The AFQT does not decide that. Line scores do, and they are built from
subtests the AFQT never touches.

<table>
<thead>
<tr><th>Your percentile</th><th>What it opens</th></tr>
</thead>
<tbody>
<tr><td data-label="Your percentile" markdown="span">Below {{ minimos.summary.floor_min }}</td><td data-label="What it opens" markdown="span">No branch, with a diploma.</td></tr>
{% if minimos.summary.floor_is_uniform == false -%}
<tr><td data-label="Your percentile" markdown="span">{% if minimos.summary.floor_min == bajo_el_techo %}{{ minimos.summary.floor_min }}{% else %}{{ minimos.summary.floor_min }}–{{ bajo_el_techo }}{% endif %}</td><td data-label="What it opens" markdown="span">{{ ramas_al_piso }} of {{ ramas_total }}. {% for rama in minimos.summary.highest_floor_branches %}{{ rama }}{% unless forloop.last %} and {% endunless %}{% endfor %} still out of reach.</td></tr>
{% endif -%}
<tr><td data-label="Your percentile" markdown="span">{{ minimos.summary.floor_max }} and up</td><td data-label="What it opens" markdown="span">All {{ ramas_total }} branches meet you here.</td></tr>
<tr><td data-label="Your percentile" markdown="span">{{ minimos.summary.recommended_min }} and up{% unless minimos.summary.recommended_min == minimos.summary.recommended_max %} ({{ minimos.summary.recommended_max }} for some branches){% endunless %}</td><td data-label="What it opens" markdown="span">Competitive: an observation, not a published requirement — and where incentives start appearing in the conversation.</td></tr>
</tbody>
</table>

Two things that table cannot tell you, and no table can.

**It is a floor, not an offer.** Meeting a branch minimum makes you eligible to be
considered. What you are actually offered depends on what that branch needs the month you
walk in, which is not a number anyone publishes.

**A GED changes the whole picture.** Without a diploma every branch asks for
{% if minimos.summary.ged_is_uniform %}{{ minimos.summary.ged_min }}{% else %}{{ minimos.summary.ged_min }}–{{ minimos.summary.ged_max }}{% endif %}
instead — a jump of {% if minimos.summary.ged_gap_min == minimos.summary.ged_gap_max %}{{ minimos.summary.ged_gap_min }}{% else %}{{ minimos.summary.ged_gap_min }} to {{ minimos.summary.ged_gap_max }}{% endif %}
percentile points. The
[branch-by-branch table](/scores/minimum-afqt-by-branch/) has both columns.

If you have your VE, AR and MK standard scores, the
[AFQT calculator](/scores/afqt-score-calculator/) looks up the percentile they convert to
in the DoD’s published table.

## Where the number comes from

Three steps. The DoD publishes the last two, and the first one happens inside the test:

1. **Each subtest becomes a standard score.** The test scores your answers with an
   item-response model, which weighs which questions you got right and not only how
   many — so a count of right answers cannot be turned into a standard score by hand.
   The scores it produces have a mean of 50 and a standard deviation of 10 in the 1997
   reference sample, and they are not cut off at 20 or 80.
2. **The four are combined:** `{{ escala.formula }}`, where VE is the verbal score
   derived from Word Knowledge and Paragraph Comprehension, AR is Arithmetic Reasoning
   and MK is Mathematics Knowledge. Verbal counts twice.
3. **The composite becomes a percentile** through
   [Table {{ tabla.source.table }}]({{ tabla.source.url }}) of the DoD’s report on the 1997
   score scale: the share of the reference sample that scored at or below that composite.

Steps 2 and 3 are public and exact, so with the three standard scores from your sheet the
[AFQT calculator](/scores/afqt-score-calculator/) reproduces your percentile. Step 1 is
the one no outside calculator can rebuild from a count of right answers, and anyone
claiming otherwise is guessing with more confidence than the data allows.

## What this means for studying

Because VE enters the formula twice, a point of verbal is worth two points of math in the
composite. That does not make vocabulary more important than algebra in general — it makes
it more efficient *for this particular number*, which is the number that decides whether
you can enlist at all.

The four subtests that build the AFQT are Arithmetic Reasoning, Mathematics Knowledge,
Word Knowledge and Paragraph Comprehension. The rest of the ASVAB — see
[the full test format](/test/asvab-sections-and-time-limits/) — does not move this number
by a single point. It moves your line scores, which decide what job you can hold.

## Estimate where you stand

ASVAB Coach runs the four AFQT subtests and estimates your percentile on iPhone, iPad,
Apple Watch and Mac, starting from your practice answers — and it says on screen that the
result is an estimate.

Everything runs on your device: no account, no tracking. Your progress lives on your
devices and, if you use iCloud, in your own iCloud — never on our servers.

[See ASVAB Coach](/){:.action}
