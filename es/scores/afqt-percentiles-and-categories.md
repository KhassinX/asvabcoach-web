---
layout: prose
title: Percentiles y categorías del AFQT
description: "Qué mide en realidad un percentil AFQT, las seis categorías del DoD, y si tu puntaje es bueno: para cuál rama, y para qué."
permalink: /es/scores/afqt-percentiles-and-categories/
lang: es
canonical_en: /scores/afqt-percentiles-and-categories/
canonical_es: /es/scores/afqt-percentiles-and-categories/
updated: 2026-09-29
---

{%- assign escala = site.data.afqt_scale %}
{%- assign minimos = site.data.afqt_minimums %}
{%- assign tabla = site.data.afqt_official_conversion %}

Un AFQT de {{ escala.categories[2].min }} no significa que contestaste bien el
{{ escala.categories[2].min }} % de las preguntas. Significa que te fue igual o mejor que
al {{ escala.categories[2].min }} % de una muestra nacional de referencia: los mismos jóvenes
de 18 a 23 años que el Departamento de Defensa usa como vara desde 1997.

Vale la pena detenerse en esa diferencia, porque cambia lo que el número te puede decir y
lo que no.

## Por qué el medio de la escala está apretado

Un percentil describe dónde quedaste dentro de una multitud, y las multitudes no se
reparten parejo. La mayoría puntúa cerca del medio, así que ahí una mejora chica te hace
pasar a mucha gente de golpe. En los extremos, esa misma mejora casi no te mueve.

Dos consecuencias prácticas:

- **Si estás cerca del medio, mejorar un poco rinde más de lo que parece.** Pasar del
  rango de {{ escala.categories[3].max }} a los {{ escala.categories[2].min }} es una
  subida corta en preguntas acertadas y larga en percentil.
- **Si ya estás arriba, los últimos puntos son caros.** Ir de
  {{ escala.categories[1].max }} a {{ escala.categories[0].min }} cuesta mucho más que el
  mismo salto más abajo.

Por eso tampoco sirve comparar tu AFQT con el «puntaje sobre 100» de un amigo. Nunca fue
sobre 100.

## Las seis categorías

El DoD ordena los percentiles AFQT en categorías. Los reclutadores las usan como atajo, y
algunos incentivos están escritos en términos de ellas y no del percentil crudo.

<table>
<thead>
<tr><th>Categoría</th><th>Percentil</th><th>Qué significa</th></tr>
</thead>
<tbody>
{% for c in escala.categories -%}
<tr><td data-label="Categoría" markdown="span">**{{ c.name | replace: 'Category', 'Categoría' }}**</td><td data-label="Percentil" markdown="span">{{ c.min }}–{{ c.max }}</td><td data-label="Qué significa" markdown="span">{{ c.description_es }}</td></tr>
{% endfor %}
</tbody>
</table>

Dos aclaraciones sobre cómo leer esa tabla.

**Describen una banda de puntaje, no a una persona.** Una categoría es una posición en una
escala, igual que un percentil. No dice nada sobre lo que alguien puede aprender.

**La {{ escala.categories[2].name }} es la línea que casi todos persiguen de verdad.**
Pasar el piso de una rama te hace elegible; llegar a
{{ escala.categories[2].min }} es donde los incentivos de alistamiento empiezan a aparecer
en la conversación. Los pisos son más bajos: mira
[el AFQT mínimo por rama](/es/scores/minimum-afqt-by-branch/), donde cada rama está en
{% if minimos.summary.floor_is_uniform %}{{ minimos.summary.floor_min }}{% else %}{{ minimos.summary.floor_min }} o {{ minimos.summary.floor_max }}{% endif %}
con diploma.

**La {{ escala.categories[4].name }} tiene tope, no está prohibida.** Por ley, la Categoría IV
no puede pasar del 4 % de los alistamientos anuales a servicio activo de una rama, y el
Secretario de Defensa puede subir ese tope al 20 % (10 U.S.C. §520(a)).

**La {{ escala.categories[5].name }} es la banda más baja.** Por debajo del percentil
{{ escala.categories[4].min }} la política del DoD prohíbe el alistamiento
(DoDI 1145.01, ¶3.c(1)).

## ¿Tu puntaje del AFQT es bueno?

{%- assign ramas_total = minimos.branches | size %}
{%- assign ramas_altas_lista = minimos.branches | where: "min_afqt", minimos.summary.floor_max %}
{%- assign ramas_altas = ramas_altas_lista | size %}
{%- assign ramas_al_piso = ramas_total | minus: ramas_altas %}
{%- assign bajo_el_techo = minimos.summary.floor_max | minus: 1 %}

«Bueno» no es una propiedad del número. Es la respuesta a tres preguntas distintas, y el
mismo puntaje puede aprobar una y reprobar otra.

**¿Puedes alistarte, para empezar?** Por debajo de {{ minimos.summary.floor_min }} ninguna
rama te puede tomar con diploma de secundaria — no por cómo te fue, sino porque
{{ minimos.summary.floor_min }} es el piso más bajo que alguna de ellas publica.

**¿En cuáles ramas?** Acá es donde los pisos dejan de coincidir entre sí.
{% if minimos.summary.floor_is_uniform -%}
Las {{ ramas_total }} están en {{ minimos.summary.floor_min }}.
{%- else -%}
Los pisos se parten: {{ ramas_al_piso }} de las {{ ramas_total }} ramas están en {{ minimos.summary.floor_min }}, y
{% for b in ramas_altas_lista %}{% assign n_es = site.branch_names_es[b.id] | default: b.name %}{{ n_es }}{% unless n_es == b.name %} ({{ b.name }}){% endunless %}{% unless forloop.last %} y {% endunless %}{% endfor %}
pide {{ minimos.summary.floor_max }}. Un punto separa «cinco ramas» de «todas».
{%- endif %}

**¿Para qué trabajo?** Eso no lo decide el AFQT. Lo deciden las line scores, que se arman
con subtests que el AFQT ni toca.

<table>
<thead>
<tr><th>Tu percentil</th><th>Qué te abre</th></tr>
</thead>
<tbody>
<tr><td data-label="Tu percentil" markdown="span">Menos de {{ minimos.summary.floor_min }}</td><td data-label="Qué te abre" markdown="span">Ninguna rama, con diploma.</td></tr>
{% if minimos.summary.floor_is_uniform == false -%}
<tr><td data-label="Tu percentil" markdown="span">{% if minimos.summary.floor_min == bajo_el_techo %}{{ minimos.summary.floor_min }}{% else %}{{ minimos.summary.floor_min }}–{{ bajo_el_techo }}{% endif %}</td><td data-label="Qué te abre" markdown="span">{{ ramas_al_piso }} de {{ ramas_total }}. {% for b in ramas_altas_lista %}{% assign n_es = site.branch_names_es[b.id] | default: b.name %}{{ n_es }}{% unless forloop.last %} y {% endunless %}{% endfor %} todavía fuera de alcance.</td></tr>
{% endif -%}
<tr><td data-label="Tu percentil" markdown="span">{{ minimos.summary.floor_max }} o más</td><td data-label="Qué te abre" markdown="span">Las {{ ramas_total }} ramas te aceptan acá.</td></tr>
<tr><td data-label="Tu percentil" markdown="span">{{ minimos.summary.recommended_min }} o más{% unless minimos.summary.recommended_min == minimos.summary.recommended_max %} ({{ minimos.summary.recommended_max }} en algunas ramas){% endunless %}</td><td data-label="Qué te abre" markdown="span">Competitivo: una observación, no un requisito publicado — y donde los incentivos empiezan a aparecer en la conversación.</td></tr>
</tbody>
</table>

Dos cosas que esa tabla no te puede decir, y ninguna tabla puede.

**Es un piso, no una oferta.** Llegar al mínimo de una rama te hace elegible para que te
consideren. Lo que de verdad te ofrezcan depende de lo que esa rama necesite el mes en que
entras, y eso no es un número que nadie publique.

**El GED cambia el cuadro entero.** Sin diploma, cada rama pide
{% if minimos.summary.ged_is_uniform %}{{ minimos.summary.ged_min }}{% else %}entre {{ minimos.summary.ged_min }} y {{ minimos.summary.ged_max }}{% endif %}
en su lugar — un salto de {% if minimos.summary.ged_gap_min == minimos.summary.ged_gap_max %}{{ minimos.summary.ged_gap_min }}{% else %}{{ minimos.summary.ged_gap_min }} a {{ minimos.summary.ged_gap_max }}{% endif %}
puntos de percentil. La
[tabla rama por rama](/es/scores/minimum-afqt-by-branch/) trae las dos columnas.

Si tienes tus puntajes estándar VE, AR y MK, la
[calculadora del AFQT](/es/scores/afqt-score-calculator/) busca el percentil que les
corresponde en la tabla que publica el DoD.

## De dónde sale el número

Tres pasos. El DoD publica los dos últimos, y el primero ocurre dentro del examen:

1. **Cada subtest se convierte en un puntaje estándar.** El examen califica tus respuestas
   con un modelo de respuesta al ítem, que toma en cuenta cuáles preguntas acertaste y no
   solo cuántas, así que un conteo de aciertos no se puede convertir a mano en un puntaje
   estándar. Los puntajes que salen tienen media 50 y desviación estándar 10 en la muestra
   de referencia de 1997, y no se cortan en 20 ni en 80.
2. **Los cuatro se combinan:** `{{ escala.formula }}`, donde VE es el puntaje verbal que
   sale de Word Knowledge y Paragraph Comprehension, AR es Arithmetic Reasoning y MK es
   Mathematics Knowledge. Lo verbal cuenta doble.
3. **El compuesto se convierte en percentil** con la
   [Tabla {{ tabla.source.table }}]({{ tabla.source.url }}) del informe del DoD sobre la
   escala de 1997: el porcentaje de la muestra de referencia que sacó ese compuesto o menos.

Los pasos 2 y 3 son públicos y exactos: con los tres puntajes estándar de tu informe, la
[calculadora del AFQT](/es/scores/afqt-score-calculator/) reproduce tu percentil. El paso 1
es el que ninguna calculadora externa puede rehacer a partir de un conteo de aciertos, y
quien diga lo contrario está adivinando con más seguridad de la que los datos permiten.

## Qué significa esto para estudiar

Como el VE entra dos veces en la fórmula, un punto de verbal vale dos de matemática dentro
del compuesto. Eso no hace que el vocabulario importe más que el álgebra en general: lo
hace más eficiente **para este número en particular**, que es el que decide si puedes
alistarte.

Los cuatro subtests que construyen el AFQT son Arithmetic Reasoning, Mathematics
Knowledge, Word Knowledge y Paragraph Comprehension. El resto del ASVAB —mira
[el formato completo del examen](/es/test/asvab-sections-and-time-limits/)— no mueve este
número ni un punto. Mueve tus line scores, que deciden qué trabajo puedes tener.

## Estima dónde estás parado

ASVAB Coach entrena los cuatro subtests del AFQT y estima tu percentil en iPhone, iPad,
Apple Watch y Mac a partir de tus respuestas de práctica, y dice en pantalla que el
resultado es una estimación.

Todo corre en tu dispositivo: sin cuenta, sin rastreo. Tu progreso vive en tus dispositivos
y, si usas iCloud, en tu propio iCloud — nunca en nuestros servidores.

[Ver ASVAB Coach](/es/){:.action}
