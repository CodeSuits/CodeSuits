---
title: 技能图谱
permalink: /skill/
layout: default
nav: true
---

[
{% for post in site.posts %}
  {"title":"{{post.title}}",
  "url":"{{site.url}}{{post.url}}",
  "date":"{{ post.date | date:'%Y-%m-%d' }}",
  "tags":[{% for label in post.labels %}"{{label}}"{% if forloop.last == false %} ,{% endif %}{% endfor %}]}
  {% if forloop.last == false %},{% endif %}{% endfor %}
]

<canvas id="skillboard" width="950" height="450"></canvas>
<script src="/assets/js/lib/arbor/arbor.js"></script>
<script src="/assets/js/lib/arbor/arbor-tween.js"></script>
<script src="/assets/js/lib/arbor/graphics.js"></script>
<script src="/assets/js/arbor_main.js"></script>