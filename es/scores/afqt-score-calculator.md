---
layout: prose
title: Calculadora de puntaje AFQT
description: "Convierte tus puntajes estándar VE, AR y MK en tu percentil AFQT con la tabla oficial que publica el DoD, y mira qué pisos por rama alcanza."
permalink: /es/scores/afqt-score-calculator/
lang: es
canonical_en: /scores/afqt-score-calculator/
canonical_es: /es/scores/afqt-score-calculator/
updated: 2026-09-26
extra_css:
  - /assets/css/afqt-calculator.css
extra_js:
  - /assets/js/afqt-calculator.js
---

{%- assign escala = site.data.afqt_scale %}
{%- assign tabla = site.data.afqt_official_conversion %}

Escribe tres puntajes estándar de tu informe del ASVAB —**VE**, **AR** y **MK**— y esta
página aplica el compuesto del DoD, `{{ escala.formula }}`, y busca ese compuesto en la
tabla de percentiles del propio DoD:
[la Tabla {{ tabla.source.table }} de *{{ tabla.source.title }}*]({{ tabla.source.url }})
({{ tabla.source.publisher }}, {{ tabla.source.year }}, páginas {{ tabla.source.pages }}).

Corre entero en tu navegador. No se envía nada a ningún lado y no hay que registrarse.

<div class="afqt-calc"
     id="afqt-calc"
     data-lang="es"
     data-i18n-result="Percentil AFQT: {p}"
     data-i18n-composite="Compuesto:"
     data-i18n-incomplete="Escribe los tres puntajes para ver tu percentil."
     data-i18n-range="Cada puntaje estándar tiene que ser un número entero entre {min} y {max}."
     data-i18n-meets="alcanza"
     data-i18n-short="no alcanza"
     data-i18n-col-branch="Rama"
     data-i18n-col-diploma="Con diploma"
     data-i18n-col-ged="Con GED"
     data-i18n-ged-estimate="{mark} {branch} no publica su mínimo para quienes tienen GED; el {value} es una estimación. Confírmalo con tu reclutador."
     data-i18n-disclaimer="Sale de la tabla que publica el DoD. El AFQT que trae tu informe de puntajes es el que usan los reclutadores.">
  <form id="afqt-form">
    <fieldset>
      <legend>Tus puntajes estándar</legend>
      <div class="afqt-calc__fields">
        <div class="afqt-calc__field">
          <label for="afqt-ve">VE — Verbal Expression</label>
          <input type="number" id="afqt-ve" inputmode="numeric" step="1"
                 min="{{ tabla.input.min }}" max="{{ tabla.input.max }}">
        </div>
        <div class="afqt-calc__field">
          <label for="afqt-ar">AR — Arithmetic Reasoning</label>
          <input type="number" id="afqt-ar" inputmode="numeric" step="1"
                 min="{{ tabla.input.min }}" max="{{ tabla.input.max }}">
        </div>
        <div class="afqt-calc__field">
          <label for="afqt-mk">MK — Mathematics Knowledge</label>
          <input type="number" id="afqt-mk" inputmode="numeric" step="1"
                 min="{{ tabla.input.min }}" max="{{ tabla.input.max }}">
        </div>
      </div>
      <p class="afqt-calc__hint">Escribe los números enteros tal como aparecen en tu informe.
        El resultado se actualiza mientras escribes.</p>
    </fieldset>
  </form>
  <output class="afqt-calc__result" id="afqt-result" for="afqt-ve afqt-ar afqt-mk" aria-live="polite"></output>
</div>

## ¿Y si mi informe no trae el VE?

Entonces esta página no puede terminar el trabajo, y vale la pena saber por qué.

El VE no es un subtest que hayas rendido. Es un compuesto de tus puntajes de Word Knowledge
y Paragraph Comprehension, y el mismo informe del DoD publica cómo se arma (sección 2.3). El
problema es que la fórmula trabaja con puntajes sin redondear, y tu informe muestra
puntajes redondeados. Rehecho a partir del WK y el PC redondeados, el VE puede quedar
desviado en un punto, y un punto de VE mueve el compuesto en dos.

Esta página no adivina. Si tu informe trae el VE, la aritmética desde ahí es exacta. Si no
lo trae, la alternativa honesta es estimarlo con preguntas de práctica, y eso es lo que
hace [la app](/es/): estima la cadena entera y lo dice en pantalla.

## Cómo leer el resultado

**El percentil sale de la tabla del DoD, fila por fila.** La Tabla
{{ tabla.source.table }} da, para cada compuesto de {{ tabla.floor.composite | plus: 1 }} a
{{ tabla.ceiling.composite | minus: 1 }}, el percentil que le corresponde. Todo compuesto
de {{ tabla.floor.composite }} o menos es percentil {{ tabla.floor.afqt }}, y todo
compuesto de {{ tabla.ceiling.composite }} o más es {{ tabla.ceiling.afqt }}.

**El compuesto es exacto.** `{{ escala.formula }}` es aritmética sobre los números enteros
que muestra tu informe, y el DoD también suma los puntajes redondeados (sección
{{ tabla.source.formula_section }} del mismo informe). Si conoces tus tres puntajes
estándar, ese número no es una aproximación.

**Las filas por rama salen de la misma tabla que publica el resto del sitio.** Son los
pisos que están en
[el AFQT mínimo por rama](/es/scores/minimum-afqt-by-branch/), verificados contra las
fuentes que ahí se nombran.

## Lo verbal cuenta doble

Mira la fórmula otra vez: el VE se multiplica por dos, AR y MK no. Un punto de verbal
mueve el compuesto tanto como dos puntos de matemática.

Eso es un hecho sobre este número en particular, no sobre el ASVAB entero. Conviene
tenerlo presente al decidir dónde va una hora de estudio, y es la razón por la que
[la página de percentiles del AFQT](/es/scores/afqt-percentiles-and-categories/) le dedica
tanto espacio a Word Knowledge como al álgebra.

## Entrena los cuatro subtests que lo construyen

ASVAB Coach entrena Arithmetic Reasoning, Mathematics Knowledge, Word Knowledge y
Paragraph Comprehension, y estima dónde estás parado después de cada corrida: en iPhone,
iPad, Apple Watch y Mac. Todo corre en tu dispositivo.

[Ver ASVAB Coach](/es/){:.action}
