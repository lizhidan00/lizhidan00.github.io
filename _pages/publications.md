---
layout: academic
title: Publications
permalink: /publications/
redirect_from:
  - /papers/
---

{% if site.author.googlescholar %}
[Google Scholar]({{ site.author.googlescholar }})
{% endif %}

{% assign publication_years = site.data.publications.papers | group_by: "year" %}
{% for year in publication_years %}
<h2 class="publication__year">{{ year.name }}</h2>
{% include publication-list.html papers=year.items %}
{% endfor %}

<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
