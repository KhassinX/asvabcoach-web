---
layout: prose
title: Puntajes del ASVAB
description: "Cómo se puntúa el ASVAB: el AFQT, qué exige cada rama y qué subtests mueven cada número."
permalink: /es/scores/
lang: es
canonical_en: /scores/
canonical_es: /es/scores/
updated: 2026-09-13
---

El ASVAB produce más de un número, y cada uno contesta una pregunta distinta. El AFQT
decide si puedes alistarte; los line scores deciden qué puedes hacer una vez adentro.

{% assign paginas = site.pages | where_exp: "p", "p.url contains '/scores/'" | where: "lang", page.lang | sort: "title" -%}
{% for p in paginas -%}
{%- unless p.url == page.url %}
- **[{{ p.title }}]({{ p.url }})** — {{ p.description }}
{% endunless -%}
{%- endfor %}
