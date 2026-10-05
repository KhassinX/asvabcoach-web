---
layout: prose
title: AFQT Score Calculator
description: "Turn your VE, AR and MK standard scores into your AFQT percentile with the DoD’s published conversion table, and see which branch floors it clears."
permalink: /scores/afqt-score-calculator/
lang: en
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

Enter three standard scores from your ASVAB results — **VE**, **AR** and **MK** — and this
page applies the DoD composite, `{{ escala.formula }}`, then looks that composite up in the
DoD’s own percentile table:
[Table {{ tabla.source.table }} of *{{ tabla.source.title }}*]({{ tabla.source.url }})
({{ tabla.source.publisher }}, {{ tabla.source.year }}, pages {{ tabla.source.pages }}).

It runs entirely in your browser. Nothing is sent anywhere, and there is nothing to sign
up for.

<div class="afqt-calc"
     id="afqt-calc"
     data-lang="en"
     data-i18n-result="AFQT percentile: {p}"
     data-i18n-composite="Composite:"
     data-i18n-incomplete="Enter all three scores to see your percentile."
     data-i18n-range="Each standard score has to be a whole number between {min} and {max}."
     data-i18n-meets="clears"
     data-i18n-short="short"
     data-i18n-col-branch="Branch"
     data-i18n-col-diploma="With a diploma"
     data-i18n-col-ged="With a GED"
     data-i18n-ged-estimate="{mark} {branch} doesn’t publish its minimum for GED holders; {value} is an estimate. Confirm it with your recruiter."
     data-i18n-disclaimer="Looked up in the DoD’s published table. The AFQT printed on your score report is the one recruiters use.">
  <form id="afqt-form">
    <fieldset>
      <legend>Your standard scores</legend>
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
      <p class="afqt-calc__hint">Use the whole numbers exactly as your score sheet shows them.
        The result updates as you type.</p>
    </fieldset>
  </form>
  <output class="afqt-calc__result" id="afqt-result" for="afqt-ve afqt-ar afqt-mk" aria-live="polite"></output>
</div>

## What if my sheet does not list VE?

Then this page cannot finish the job, and it is worth knowing why.

VE is not a subtest you sat. It is a composite of your Word Knowledge and Paragraph
Comprehension scores, and the same DoD report publishes how it is built (section 2.3). The
catch is that the formula runs on unrounded scores, and your sheet shows rounded ones.
Rebuilt from the rounded WK and PC, VE can land one point off — and one point of VE moves
the composite by two.

This page does not guess. If your sheet gives VE, the arithmetic from there is exact. If it
does not, an estimate from practice questions is the honest alternative, and that is what
[the app](/) does: it estimates the whole chain and says so on screen.

## How to read the result

**The percentile comes from the DoD’s table, row by row.** Table {{ tabla.source.table }}
lists every composite from {{ tabla.floor.composite | plus: 1 }} to
{{ tabla.ceiling.composite | minus: 1 }} with the percentile it converts to. Every
composite of {{ tabla.floor.composite }} or less is percentile {{ tabla.floor.afqt }}, and
every composite of {{ tabla.ceiling.composite }} or more is {{ tabla.ceiling.afqt }}.

**The composite is exact.** `{{ escala.formula }}` is arithmetic on the whole numbers your
sheet shows, and the DoD adds the rounded scores too (section
{{ tabla.source.formula_section }} of the same report). If you know your three standard
scores, that number is not an approximation.

**The branch rows come from the same table the rest of this site publishes.** They are
the floors listed under [minimum AFQT by branch](/scores/minimum-afqt-by-branch/), checked
against the sources named there.

## Verbal counts twice

Look at the formula again: VE is multiplied by two, AR and MK are not. One point of verbal
moves the composite as much as two points of math.

That is a fact about this specific number, not about the ASVAB as a whole. It is worth
knowing when you are deciding where an hour of study goes — and it is the reason
[the AFQT percentile page](/scores/afqt-percentiles-and-categories/) spends as much time
on Word Knowledge as on algebra.

## Practice the four subtests behind it

ASVAB Coach drills Arithmetic Reasoning, Mathematics Knowledge, Word Knowledge and
Paragraph Comprehension, and estimates where you stand after each run — on iPhone, iPad,
Apple Watch and Mac. Everything runs on your device.

[See ASVAB Coach](/){:.action}
