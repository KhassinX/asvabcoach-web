---
layout: prose
title: Puntaje mínimo del ASVAB por rama
description: "El AFQT mínimo que exige cada rama de las fuerzas armadas de EE. UU., con diploma y con GED: Army, Navy, Marines, Air Force, Coast Guard y Space Force."
permalink: /es/scores/minimum-afqt-by-branch/
lang: es
canonical_en: /scores/minimum-afqt-by-branch/
canonical_es: /es/scores/minimum-afqt-by-branch/
updated: 2026-10-05
---

Lo primero que mira un reclutador no es tu puntaje del ASVAB. Es tu **AFQT**: un
percentil del 1 al 99 que sale de cuatro de los diez subtests. Un AFQT de 50 significa
que igualaste o superaste al 50 % de una muestra nacional de referencia — no que
contestaste bien la mitad de las preguntas.

Cada rama pone su propio piso. Aquí está dónde quedó cada una, y de dónde sale el número.

## Los pisos, rama por rama

{%- assign ramas = site.data.afqt_minimums.branches %}
{%- comment %}
  Ver el comentario de la página en inglés: `bloqueado:` marca la rama cuya fuente no se pudo
  abrir, y sin esta frase el sello afirma una frescura global sobre filas que nunca se
  pudieron releer. Se calcula: el día que la fuente abra, la frase desaparece sola.
{%- endcomment %}
{%- assign bloqueadas = ramas | where_exp: "b", "b.verified_on contains 'bloqueado:'" %}
{%- comment %}
  Ver la página en inglés: la cifra que la rama no publica sale MARCADA; qué celda, con
  qué signo y qué oye ahí el lector de pantalla lo dice `_data/afqt_minimums.yml`, y la
  marca va oculta al lector en la celda, la nota y el sello.
{%- endcomment %}
{%- assign estimadas = ramas | where_exp: "b", "b.min_afqt_ged_is_estimate" %}
{%- assign marca = site.data.afqt_minimums.estimate_mark %}
{%- assign sufijo = site.data.afqt_minimums.estimate_spoken_suffix.es %}
Verificado el {{ site.data.afqt_minimums.verified }}{% if estimadas.size > 0 %}<span aria-hidden="true">, salvo los valores marcados con {{ marca }}</span><span class="visually-hidden">, salvo los valores estimados</span>{% endif %}.{% if bloqueadas.size > 0 %} {{ bloqueadas.size }} de las {{ ramas.size }} fuentes son regulaciones de servicio, no páginas de reclutamiento: {% for b in bloqueadas %}{% assign n_es = site.branch_names_es[b.id] | default: b.name %}{{ n_es }}{% unless n_es == b.name %} ({{ b.name }}){% endunless %}{% unless forloop.last %} y {% endunless %}{% endfor %} llevan la fecha en que el número se confirmó por última vez contra la regulación.{% endif %}

<table>
<thead>
<tr><th>Rama</th><th>Con diploma de secundaria</th><th>Con GED</th><th>Competitivo</th></tr>
</thead>
<tbody>
{% for b in site.data.afqt_minimums.branches -%}
<tr><td data-label="Rama" markdown="span">{% assign nombre_es = site.branch_names_es[b.id] | default: b.name %}{{ nombre_es }}{% unless nombre_es == b.name %} ({{ b.name }}){% endunless %}</td><td data-label="Con diploma de secundaria" markdown="span">{{ b.min_afqt }}</td><td data-label="Con GED" markdown="span">{% if b.min_afqt_ged_is_estimate %}<span aria-hidden="true">{{ marca }}</span>{{ b.min_afqt_ged }}<span class="visually-hidden">{{ sufijo }}</span>{% else %}{{ b.min_afqt_ged }}{% endif %}</td><td data-label="Competitivo" markdown="span">{{ b.recommended_afqt }}</td></tr>
{% endfor %}
</tbody>
</table>
{%- for b in estimadas %}

{% assign n_es = site.branch_names_es[b.id] | default: b.name %}<span aria-hidden="true">{{ marca }}</span> {{ n_es }}{% unless n_es == b.name %} ({{ b.name }}){% endunless %} no publica su mínimo para quienes tienen GED; el {{ b.min_afqt_ged }} es una estimación. Confírmalo con tu reclutador.
{%- endfor %}

**Fuentes.**
{%- for b in ramas %} {{ site.branch_names_es[b.id] | default: b.name }} — {{ b.source }}{% if b.verified_on contains 'bloqueado:' %} (regulación de servicio){% endif %}{% unless forloop.last %} ·{% endunless %}
{%- endfor %}

Son tres columnas y tres preguntas distintas. Confundirlas es la forma más común de
descartarse solo de una rama para la que ya calificas.

## Qué dice cada columna

**Con diploma de secundaria.** El piso duro. Por debajo, la solicitud no avanza.
{%- assign s = site.data.afqt_minimums.summary %}
{% if s.floor_is_uniform %}Las seis ramas piden {{ s.floor_min }}.{% else %}La mayoría pide {{ s.floor_min }}. El piso más alto es {{ s.floor_max }} — {% assign altas = site.data.afqt_minimums.branches | where: "min_afqt", s.floor_max %}{% for b in altas %}{% assign n_es = site.branch_names_es[b.id] | default: b.name %}{{ n_es }}{% unless n_es == b.name %} ({{ b.name }}){% endunless %}{% unless forloop.last %} y {% endunless %}{% endfor %}.{% endif %}

**Con GED.** Todas suben la vara cuando no hay diploma:
{% if s.ged_is_uniform %}las seis quedan en {{ s.ged_min }}{% else %}quedan entre {{ s.ged_min }} y {{ s.ged_max }}{% endif %}.
Son {% if s.ged_gap_min == s.ged_gap_max %}{{ s.ged_gap_min }}{% else %}entre {{ s.ged_gap_min }} y {{ s.ged_gap_max }}{% endif %} puntos más,
y es el salto más grande de toda esta página. El GED no te descalifica: te sube el piso,
y suele venir con menos cupos disponibles.

{%- comment %}
  Ver el comentario de la página en inglés: el sello del GED es propio y no el del piso.
  La guarda deja la sección muda mientras `verified_on_ged` no exista, en vez de publicar
  una salvedad que nombre las ramas equivocadas.
{%- endcomment %}
{%- assign con_sello_ged = ramas | where_exp: "b", "b.verified_on_ged" %}
{%- assign ged_bloqueadas = ramas | where_exp: "b", "b.verified_on_ged contains 'bloqueado:'" %}
{%- comment %}
  Acá NO se repite el nombre en inglés entre paréntesis, como sí se hace en la tabla y en el
  resto de la página: con el documento ya entre paréntesis al lado, quedaban dos paréntesis
  seguidos —«Ejército (Army) (AR 601-210)»— y el lector no sabe cuál de los dos es la fuente.
  El nombre inglés ya se lo dio la tabla de arriba.
{%- endcomment %}
{%- assign ged_reglamento = ged_bloqueadas | where_exp: "b", "b.source_ged != ''" %}
{%- assign ged_sin_fuente = ramas | where_exp: "b", "b.source_ged == ''" %}
{% if con_sello_ged.size > 0 and ged_bloqueadas.size > 0 %}De dónde sale el piso con GED no
es la misma pregunta que de dónde sale el piso con diploma.{% if ged_reglamento.size > 0 %}
{% for b in ged_reglamento %}{{ site.branch_names_es[b.id] | default: b.name }} ({{ b.source_ged }}){% unless forloop.last %} y {% endunless %}{% endfor %}
lo fija{% if ged_reglamento.size > 1 %}n{% endif %} en su regulación de reclutamiento.{% endif %}{% if ged_sin_fuente.size > 0 %}
{% for b in ged_sin_fuente %}{{ site.branch_names_es[b.id] | default: b.name }}{% unless forloop.last %} y {% endunless %}{% endfor %}:
no encontramos ningún documento oficial que fije su piso con GED; la cifra de la tabla es
la que reportan guías de terceros.{% endif %} Las cifras se quedan en la tabla **marcadas, no
retiradas**: si quitamos una, alguien con GED lee el piso con diploma como si le
aplicara, que es el error más caro de los dos. Pídele a un reclutador que te confirme tu
piso con GED antes de planear con él.
{% endif %}

**Competitivo.** No es una regla, es una observación. Pasar el piso te hace elegible.
Pasar {{ s.recommended_min }} es donde la lista de trabajos que se te abren deja de ser
corta. Nadie lo publica como requisito y no conviene tratarlo como tal.

## El AFQT no es el puntaje que elige tu trabajo

Aquí es donde casi todo el mundo se confunde. El AFQT decide si puedes alistarte. **No**
decide qué vas a hacer.

Eso lo deciden los **line scores**: otras combinaciones de subtests, con pesos distintos
en cada rama, una por familia de trabajos. Un puesto de inteligencia y uno mecánico leen
el mismo examen y llegan a números distintos. Puedes pasar el piso del AFQT con holgura y
quedar corto justo para la especialidad que querías — o al revés.

Así que el orden honesto para planificar es:

1. Pasar el piso del AFQT de la rama.
2. Averiguar con qué line score se arma el trabajo que quieres.
3. Trabajar los subtests que lo alimentan.

El paso 3 es donde un plan de estudio se paga solo, y no es el mismo para un puesto de
operaciones cibernéticas que para mecánico de aeronaves.

## Qué subtests arman el AFQT

Cuatro, y sólo cuatro:

- **Arithmetic Reasoning** (AR) — problemas con enunciado.
- **Mathematics Knowledge** (MK) — álgebra y geometría.
- **Word Knowledge** (WK) — vocabulario.
- **Paragraph Comprehension** (PC) — comprensión de lectura.

La mitad verbal (WK y PC) se combina primero y después se pondera junto a las dos de
matemática. La consecuencia práctica: los otros seis subtests —General Science,
Electronics, Auto and Shop, Mechanical Comprehension y Assembling Objects— no mueven tu
AFQT ni un punto. Mueven tus line scores, que es otra pelea.

Si lo que te separa del alistamiento es el AFQT, esos cuatro son todo el trabajo.

## Antes de usar estos números

La política de reclutamiento se mueve, y se mueve sin aviso — y una tabla como esta
puede, sencillamente, estar mal. Tres cifras de esta página se corrigieron al
contrastarlas con la fuente: el piso con GED de la Fuerza Aérea bajó de 65, el piso con
diploma de la Fuerza Espacial de 36 y el piso con GED de la Guardia Costera de 50.

La fecha sobre la tabla es el día en que cada cifra se contrastó por última vez contra la
fuente que tiene al lado — no el día en que se escribió esta página. Confirma con un
reclutador antes de tomar una decisión que dependa de un solo punto.

## Practica los cuatro que cuentan

ASVAB Coach entrena los cuatro subtests del AFQT y estima dónde estás parado, en iPhone,
iPad, Apple Watch y Mac. Todo corre en tu dispositivo: sin cuenta, sin rastreo. Tu progreso
vive en tus dispositivos y, si usas iCloud, en tu propio iCloud — nunca en nuestros servidores.

[Ver ASVAB Coach](/es/){:.action}
