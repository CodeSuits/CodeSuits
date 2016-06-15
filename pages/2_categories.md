---
title: 所有分类
permalink: /categories.html
layout: default
nav: true
---

<script type="text/javascript">
// prepare data from jekyll
var $J = {
  baseUrl: "{{ site.baseurl }}/categories.html/?label=",
  staticUrl: "{{ site.static_url }}",
  categories: [
    "显示全部",
    {% for post in site.posts %}
      {% if post.release %}
        {% for category in post.categories %}
          "{{ category }}",
        {% endfor %}
      {% endif %}
    {% endfor %}
  ],
  posts: [
    {% for post in site.posts %}
      {% if post.release %}
      {
        title: "{{ post.title }}",
        date: "{{ post.date | date: "%Y-%m-%d" }}",
        link: "{{ post.url | prepend: site.baseurl }}",
        categories: [
        {% for category in post.categories %}
          "{{ category }}",
        {% endfor %}
        ]
      },
      {% endif %}
    {% endfor %}
  ]
};
</script>

<div id="main"></div>

<script src="/assets/js/lib/react/react.js"></script>
<script src="/assets/js/lib/react/JSXTransformer.js"></script>
<script type="text/jsx" src="/pages/categories.js"></script>