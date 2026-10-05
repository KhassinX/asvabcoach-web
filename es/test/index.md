---
layout: prose
title: El examen ASVAB
description: "Qué es el ASVAB en concreto: cuántas secciones tiene, cuánto dura cada una, cómo funciona la versión por computadora y qué partes deciden si puedes enlistarte."
permalink: /es/test/
lang: es
canonical_en: /test/
canonical_es: /es/test/
updated: 2026-09-13
---

Antes de estudiar para él conviene saber qué es: cuántas secciones tiene, cuánto duran y
cuáles deciden algo de verdad.

{% assign paginas = site.pages | where_exp: "p", "p.url contains '/test/'" | where: "lang", page.lang | sort: "title" -%}
{% for p in paginas -%}
{%- unless p.url == page.url %}
- **[{{ p.title }}]({{ p.url }})** — {{ p.description }}
{% endunless -%}
{%- endfor %}
