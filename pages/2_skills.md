---
title: 技能图谱
permalink: /skill/
layout: skill
nav: true
---

{% assign freestyle = "" %}
{% for post in site.posts %}
  {% for label in post.labels %}
  	{{label}}
  {% endfor %}
{% endfor %}

<canvas id="skillboard" width="950" height="450"></canvas>
<script src="/assets/js/lib/arbor/arbor.js"></script>
<script src="/assets/js/lib/arbor/arbor-tween.js"></script>
<script src="/assets/js/lib/arbor/graphics.js"></script>
<script src="/assets/js/arbor_main.js"></script>