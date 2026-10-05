---
layout: prose
title: Minimum ASVAB Score by Branch
description: "The minimum AFQT score each U.S. military branch requires, with a diploma and with a GED — Army, Navy, Marines, Air Force, Coast Guard and Space Force."
permalink: /scores/minimum-afqt-by-branch/
lang: en
canonical_en: /scores/minimum-afqt-by-branch/
canonical_es: /es/scores/minimum-afqt-by-branch/
updated: 2026-09-26
---

The number a recruiter checks first is not your ASVAB score. It is your **AFQT**: a
percentile from 1 to 99 built from four of the ten ASVAB subtests. An AFQT of 50 means
you scored as well as or better than 50 % of a national reference sample — not that you answered half
the questions correctly.

Every branch sets its own floor. Here is where each one stands, and where the number
comes from.

## The floors, branch by branch

{%- assign ramas = site.data.afqt_minimums.branches %}
{%- comment %}
  `bloqueado:` es el prefijo con el que `verified_on` marca la rama cuya
  fuente NO se pudo abrir: un documento de servicio en un `.mil` que devuelve 403 desde
  afuera. Sin esta frase, el sello de arriba afirma una frescura global sobre seis filas de
  las que dos nunca se pudieron releer — y el lector no tiene forma de saber cuáles.
  El bloque se calcula, así que el día que esa fuente se abra desaparece solo.
{%- endcomment %}
{%- assign bloqueadas = ramas | where_exp: "b", "b.verified_on contains 'bloqueado:'" %}
{%- comment %}
  La cifra que la rama no publica sale MARCADA: la celda dibuja la marca, la nota va
  debajo de la tabla y el sello dice que no la cubre. Qué celda, con qué signo y qué oye
  el lector de pantalla lo dice `_data/afqt_minimums.yml`: acá no se escribe ni el `~`,
  ni la rama, ni el sufijo. La marca va SIEMPRE con `aria-hidden` —VoiceOver diría
  «tilde»—, en la celda, en la nota y en el sello. Al lado de la celda va, oculto a la
  vista, el sufijo hablado; el sello le dice al lector con palabras qué exceptúa.
{%- endcomment %}
{%- assign estimadas = ramas | where_exp: "b", "b.min_afqt_ged_is_estimate" %}
{%- assign marca = site.data.afqt_minimums.estimate_mark %}
{%- assign sufijo = site.data.afqt_minimums.estimate_spoken_suffix.en %}
Verified {{ site.data.afqt_minimums.verified }}{% if estimadas.size > 0 %}<span aria-hidden="true">, except values marked {{ marca }}</span><span class="visually-hidden">, except estimated values</span>{% endif %}.{% if bloqueadas.size > 0 %} {{ bloqueadas.size }} of the {{ ramas.size }} sources are service regulations rather than recruiting pages: {% for b in bloqueadas %}{{ b.name }}{% unless forloop.last %} and {% endunless %}{% endfor %} carr{% if bloqueadas.size == 1 %}ies{% else %}y{% endif %} the date the figure was last confirmed against the regulation.{% endif %}

<table>
<thead>
<tr><th>Branch</th><th>With a high school diploma</th><th>With a GED</th><th>Competitive</th></tr>
</thead>
<tbody>
{% for b in site.data.afqt_minimums.branches -%}
<tr><td data-label="Branch" markdown="span">{{ b.name }}</td><td data-label="With a high school diploma" markdown="span">{{ b.min_afqt }}</td><td data-label="With a GED" markdown="span">{% if b.min_afqt_ged_is_estimate %}<span aria-hidden="true">{{ marca }}</span>{{ b.min_afqt_ged }}<span class="visually-hidden">{{ sufijo }}</span>{% else %}{{ b.min_afqt_ged }}{% endif %}</td><td data-label="Competitive" markdown="span">{{ b.recommended_afqt }}</td></tr>
{% endfor %}
</tbody>
</table>
{%- for b in estimadas %}

<span aria-hidden="true">{{ marca }}</span> {{ b.name }} doesn’t publish its minimum for GED holders; {{ b.min_afqt_ged }} is an estimate. Confirm it with your recruiter.
{%- endfor %}

**Sources.**
{%- for b in ramas %} {{ b.name }} — {{ b.source }}{% if b.verified_on contains 'bloqueado:' %} (service regulation){% endif %}{% unless forloop.last %} ·{% endunless %}
{%- endfor %}

Three columns, three different questions — and mixing them up is the most common way to
talk yourself out of a branch you already qualify for.

## What each column actually means

**With a high school diploma.** The hard floor. Below it, the application does not move
forward at all.
{%- assign s = site.data.afqt_minimums.summary %}
{% if s.floor_is_uniform %}All six branches sit at {{ s.floor_min }}.{% else %}Most sit at {{ s.floor_min }}. The highest floor is {{ s.floor_max }} — {{ s.highest_floor_branches | join: " and " }}.{% endif %}

**With a GED.** Every branch raises the bar when there is no diploma —
{% if s.ged_is_uniform %}all six land on {{ s.ged_min }}{% else %}they land between {{ s.ged_min }} and {{ s.ged_max }}{% endif %}.
That is a jump of {% if s.ged_gap_min == s.ged_gap_max %}{{ s.ged_gap_min }}{% else %}{{ s.ged_gap_min }} to {{ s.ged_gap_max }}{% endif %} points,
and it is the single largest swing on this page. A GED is not a disqualifier; it is a
higher floor, and often a smaller quota of slots.

{%- comment %}
  El sello del GED es SUYO, no el del piso: una rama puede tener el 31 comprobado en una
  página pública y el 50 sólo en una regulación de servicio que no abre desde afuera. El
  bloque de arriba usa `verified_on`, que es el sello del PISO — si se reusara acá, esta
  sección nombraría las ramas equivocadas. Guarda a propósito: mientras el exportador no
  publique `verified_on_ged`, `con_sello_ged` sale vacío y no se imprime nada, en vez de
  imprimir una salvedad falsa. El día que el campo exista, el párrafo aparece solo.
{%- endcomment %}
{%- assign con_sello_ged = ramas | where_exp: "b", "b.verified_on_ged" %}
{%- assign ged_bloqueadas = ramas | where_exp: "b", "b.verified_on_ged contains 'bloqueado:'" %}
{%- assign ged_reglamento = ged_bloqueadas | where_exp: "b", "b.source_ged != ''" %}
{%- assign ged_sin_fuente = ramas | where_exp: "b", "b.source_ged == ''" %}
{% if con_sello_ged.size > 0 and ged_bloqueadas.size > 0 %}Where the GED floor comes from is
not the same question as where the diploma floor comes from.{% if ged_reglamento.size > 0 %}
{% for b in ged_reglamento %}{{ b.name }} ({{ b.source_ged }}){% unless forloop.last %} and {% endunless %}{% endfor %}
state{% if ged_reglamento.size == 1 %}s{% endif %} it in a recruiting regulation.{% endif %}{% if ged_sin_fuente.size > 0 %}
{% for b in ged_sin_fuente %}{{ b.name }}{% unless forloop.last %} and {% endunless %}{% endfor %}:
we found no official document that states its GED floor; the figure on this table is the
one third-party guides report.{% endif %} The figures stay on this table **marked, not
withdrawn** — remove one and someone with a GED reads the diploma floor as if it applied
to them, which is the more expensive mistake of the two. Ask a recruiter to confirm your
GED floor before you plan around it.
{% endif %}

**Competitive.** Not a rule — an observation. Clearing the floor makes you eligible.
Clearing {{ s.recommended_min }} or more is where the list of jobs open to you stops
being short. Nobody publishes this as a requirement, and you should not treat it as one.

## The AFQT is not the score that picks your job

This is the part that surprises most people. The AFQT decides whether you can enlist. It
does **not** decide what you will do.

That comes from **line scores**: different combinations of ASVAB subtests, weighted
differently by each branch, one per job family. An intelligence job and a mechanical one
read the same test and arrive at different numbers. You can clear the AFQT floor
comfortably and still be short for the one specialty you actually want — or the other way
around.

So the honest planning order is:

1. Clear the AFQT floor for the branch.
2. Find out which line score the job you want is built from.
3. Work on the subtests that feed it.

Step 3 is where a study plan earns its keep, and it is different for a
cyber operations job than for an aircraft mechanic.

## Which subtests build the AFQT

Four, and only four:

- **Arithmetic Reasoning** (AR) — word problems.
- **Mathematics Knowledge** (MK) — algebra and geometry.
- **Word Knowledge** (WK) — vocabulary.
- **Paragraph Comprehension** (PC) — reading.

The verbal half (WK and PC) is combined first, then weighted alongside the two math
sections. The practical consequence: the six remaining subtests — General Science,
Electronics, Auto and Shop, Mechanical Comprehension, and Assembling Objects — do not
move your AFQT at all. They move your line scores, which is a different fight.

If your AFQT is what stands between you and enlisting, those four are the whole job.

## Before you use these numbers

Recruiting policy moves, and it moves quietly — and a table like this one can simply be
wrong. Three figures on this page were corrected after checking them against the source:
the Air Force GED floor came down from 65, the Space Force diploma floor from 36, and the
Coast Guard GED floor from 50.

The date above the table is the day each figure was last checked against the source named
beside it — not the day this page was written. Verify with a recruiter before you make a
decision that depends on a single point.

## Practice the four that count

ASVAB Coach drills the four AFQT subtests and estimates where you stand, on iPhone, iPad,
Apple Watch and Mac. Everything runs on your device: no account, no tracking. Your progress
lives on your devices and, if you use iCloud, in your own iCloud — never on our servers.

[See ASVAB Coach](/){:.action}
