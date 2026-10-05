---
layout: prose
title: ASVAB Scores
description: "How ASVAB scoring works: the AFQT, what each branch requires, and which subtests move which number."
permalink: /scores/
lang: en
canonical_en: /scores/
canonical_es: /es/scores/
updated: 2026-09-13
---

# ASVAB Scores

The ASVAB produces more than one number, and they answer different questions. The AFQT
decides whether you can enlist; the line scores decide what you can do once you are in.

{% assign paginas = site.pages | where_exp: "p", "p.url contains '/scores/' and p.lang == page.lang" | sort: "title" -%}
{% for p in paginas -%}
{%- unless p.url == page.url %}
- **[{{ p.title }}]({{ p.url }})** — {{ p.description }}
{% endunless -%}
{%- endfor %}
