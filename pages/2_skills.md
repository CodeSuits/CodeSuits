---
title: 技能图谱
permalink: /skill/
layout: default
nav: true
---

<script>
    var dataStr = '{ {% for cat in site.categories %}{% if cat[0] != site.categories.first[0] %},{% endif %}"{{ cat[0] }}":[{% for post in cat[1] %}{% if post != cat[1].first %},{% endif %}{"url":"{{post.url}}", "title":"{{post.title}}", "date":"{{post.date | date:"%d/%m/%Y"}}"}{% endfor %}]{% endfor %} }';
    data = JSON.parse(dataStr);
    curTag = $.query.get("cat");
    archieves = data[curTag];
    echo archieves;
    echo dataStr;
</script>

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