---
permalink: /
layout: academic
title: "Zhidan Li"
description: "Zhidan Li is a Ph.D. candidate at Shanghai Jiao Tong University working on approximate counting and sampling."
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<section class="profile" aria-labelledby="profile-name">
  <div class="profile__intro">
    <h1 id="profile-name">{{ site.author.name }} <span lang="zh-Hans">李至丹</span></h1>
    <p class="profile__affiliation">
      Ph.D. candidate in Computer Science<br>
      {{ site.author.bio }}
    </p>
  </div>
  <div class="profile__body">
    <p>I study <strong>approximate counting and sampling</strong> in theoretical computer science, with a focus on random structures and algorithms inspired by statistical physics.</p>
    <p>I am advised by <a href="https://jhc.sjtu.edu.cn/~kuanyang/">Kuan Yang</a>. I received my B.E. in Computer Science from Shanghai Jiao Tong University in 2023 through the ACM Honor Class.</p>
    <ul class="text-links profile__links" role="list">
      <li><a href="{{ '/files/cv.pdf' | relative_url }}">CV</a></li>
      <li><a href="mailto:{{ site.author.email }}">Email</a></li>
      {% if site.author.github %}<li><a href="https://github.com/{{ site.author.github }}" rel="me">GitHub</a></li>{% endif %}
      {% if site.author.orcid %}<li><a href="{{ site.author.orcid }}" rel="me">ORCID</a></li>{% endif %}
    </ul>
  </div>
  <img class="profile__photo" src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" width="1024" height="768" alt="Zhidan Li in front of the pyramids at Giza">
</section>

<section class="recent-publications" aria-labelledby="recent-publications-title">
  <div class="section-heading">
    <h2 id="recent-publications-title">Recent publications</h2>
    <a href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
  </div>
  {% include publication-list.html limit=3 %}
</section>
