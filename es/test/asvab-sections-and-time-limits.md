---
layout: prose
title: Secciones del ASVAB y límites de tiempo
description: "Cada sección del ASVAB por computadora: cuántas preguntas, cuántos minutos y cuáles cuatro deciden si puedes enlistarte. Del Fact Sheet oficial."
permalink: /es/test/asvab-sections-and-time-limits/
lang: es
canonical_en: /test/asvab-sections-and-time-limits/
canonical_es: /es/test/asvab-sections-and-time-limits/
updated: 2026-09-29
---

{% assign cat = site.data.cat_subtests -%}
{% assign s = cat.summary -%}

# Secciones del ASVAB y límites de tiempo

Alrededor del 70 % de los postulantes militares rinde el **CAT-ASVAB**, la versión por
computadora, según la hoja informativa oficial del ASVAB. El CAT-ASVAB tiene {{ s.printed_rows }} secciones,
{{ s.total_questions }} preguntas y {{ s.total_minutes }} minutos de examen — poco más de
tres horas, sin contar el trámite que lo rodea.

El promedio da {{ s.average_seconds_per_question }} segundos por pregunta, y es el número
menos útil de esta página. Las secciones no van al mismo ritmo ni de lejos: la más rápida
te da {{ s.fastest_seconds }} segundos por pregunta y la más lenta te da
{{ s.slowest_seconds }} — {{ s.fastest_abbr }} contra {{ s.slowest_abbr }}. Entrar
esperando un ritmo y encontrarte con el otro es la forma más común de perder una sección
cuyo contenido sabías.

## Cada sección, con su reloj

Verificado el {{ cat.verified }} contra el Fact Sheet oficial.

| Sección | Preguntas | Minutos | Segundos por pregunta | Cuenta para el AFQT |
|---|---|---|---|---|
{% for t in cat.printed -%}
| {{ t.name_es }} ({{ t.name_en }}, {{ t.abbr }}) | {{ t.questions }} | {{ t.minutes }} | {{ t.seconds_per_question }} | {% if t.is_afqt %}Sí{% else %}No{% endif %} |
{% endfor %}

**Fuente.** [{{ cat.source_title }}]({{ cat.source_url }}) — columna CAT-ASVAB. El examen
se rinde en inglés y la hoja de resultados llega con los nombres y las siglas en inglés;
por eso van entre paréntesis en la tabla.

## Por qué la hoja del reclutador muestra nueve y no {{ s.printed_rows }}

Auto Information y Shop Information se administran como dos pruebas separadas y después
se combinan en un solo puntaje reportado: **AS**. O sea que te sientas a rendir
{{ s.printed_rows }} secciones y sales con {{ s.reported_scores }} puntajes.

{% assign a = cat.printed | where: "abbr", "AI" | first -%}
{% assign b = cat.printed | where: "abbr", "SI" | first -%}
{% assign as = cat.reported | where: "abbr", "AS" | first -%}
Conviene saberlo antes del día del examen: AI son {{ a.questions }} preguntas en
{{ a.minutes }} minutos y SI son {{ b.questions }} en {{ b.minutes }}, pero el número que
llega a tu expediente es el combinado — {{ as.questions }} preguntas en
{{ as.minutes }} minutos. La combinación no te castiga en nada: es simplemente la forma
en que se reporta ese puntaje.

## Sólo {{ s.afqt_count }} de estas deciden si puedes enlistarte

{% assign afqt = cat.printed | where: "is_afqt", true -%}
{% for t in afqt -%}
- **{{ t.name_es }}** ({{ t.name_en }}, {{ t.abbr }}) — {{ t.questions }} preguntas, {{ t.minutes }} minutos.
{% endfor %}

Esas {{ s.afqt_count }} construyen tu **AFQT**, el percentil que cada rama compara contra
su mínimo. Son {{ s.afqt_questions }} de las {{ s.total_questions }} preguntas y
{{ s.afqt_minutes }} de los {{ s.total_minutes }} minutos — la mayor parte de tu tiempo
sentado ahí, y eso no es casualidad.

Las demás secciones no son relleno. Alimentan los **line scores**, que deciden qué
trabajos se te abren. Pero si tu problema es calificar, el AFQT es todo el problema.

→ [Puntaje mínimo del ASVAB por rama](/es/scores/minimum-afqt-by-branch/) — dónde pone
el piso cada rama y qué cambia si tienes GED en vez de diploma.

## Dos reglas de la versión por computadora que la de papel no tiene

**No puedes volver atrás.** En cuanto contestas una pregunta del CAT-ASVAB, queda
cerrada. No hay volver a ella, ni marcarla para después, ni cambiar de opinión al final.
Léela antes de decidir, y después decide.

**Adivinar al final te cuesta.** El CAT-ASVAB sí penaliza adivinar, y lo que pesa en
contra es una racha de respuestas incorrectas cerca del cierre de una sección. Si te
queda poco tiempo, la guía oficial dice que sigas contestando lo mejor que puedas en vez
de rellenar el resto al azar — descartar opciones y elegir a conciencia todavía te ayuda.

La versión en papel (P&P-ASVAB) funciona al revés en el segundo punto: ahí no hay
penalización por adivinar, así que no dejas ningún casillero vacío. Un consejo escrito
para una versión es incorrecto para la otra, y por eso conviene saber cuál vas a rendir.

## Qué hacer con la tabla de arriba

Toma las {{ s.afqt_count }} filas marcadas con *Sí* y mira su columna de segundos por
pregunta. Esa columna es tu objetivo de práctica — no un plan de estudio, un objetivo de
ritmo. Saber álgebra y quedarte sin reloj da el mismo puntaje que no saber álgebra.

ASVAB Coach practica las {{ s.afqt_count }} secciones del AFQT a su ritmo real y estima
dónde estás parado, en iPhone, iPad, Apple Watch y Mac. Todo corre en tu dispositivo: sin
cuenta, sin rastreo. Tu progreso vive en tus dispositivos y, si usas iCloud, en tu propio
iCloud — nunca en nuestros servidores.

[Ver ASVAB Coach](/es/){:.button}
