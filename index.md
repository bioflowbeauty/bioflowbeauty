---
layout: page
title: BioFlowBeauty
subtitle: Evidence-based beauty and women's health — written by a biomedical scientist
cover-img: false
---

<style>
.bfb-hero-wrap {
  position: relative; display: flex; align-items: center;
  gap: 2rem; margin: 0.5rem 0 2.5rem; min-height: 210px;
}
.bfb-logo-wrap { flex-shrink: 0; position: relative; z-index: 1; width: 90px; height: 90px; }
.bfb-hero-logo { width: 90px; height: 90px; object-fit: contain; display: block; }
.bfb-btn-list { display: flex; flex-direction: column; gap: 0.55rem; flex: 1; position: relative; z-index: 1; }
.bfb-btn {
  display: flex; align-items: center; gap: 0.7rem; padding: 0.75rem 1.1rem;
  border: 1.5px solid #e8c8d4; border-radius: 10px; background: #fdf8f5;
  text-decoration: none; position: relative; overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}
.bfb-btn:hover {
  background: #8b3a5a; border-color: #c9956c; transform: scale(1.02);
  box-shadow: 0 5px 18px rgba(139,58,90,0.22); text-decoration: none;
}
.bfb-btn-icon { font-size: 1.2rem; line-height: 1; flex-shrink: 0; }
.bfb-btn-title { font-size: 0.92rem; font-weight: 600; color: #2d1b14; margin: 0 0 1px; transition: color 0.3s ease; }
.bfb-btn:hover .bfb-btn-title { color: #fff; }
.bfb-btn-desc { font-size: 0.76rem; color: #999; margin: 0; line-height: 1.4; transition: color 0.3s ease; }
.bfb-btn:hover .bfb-btn-desc { color: #f5d8e3; }

.bfb-featured-box {
  background: linear-gradient(135deg,#8b3a5a,#c9956c);
  border-radius: 12px; padding: 1.4rem 1.6rem; margin-bottom: 2rem;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem;
}
.bfb-featured-label { margin: 0 0 0.3rem; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; color: #f5d8e3; text-transform: uppercase; }
.bfb-featured-title { margin: 0 0 0.4rem; font-size: 1rem; font-weight: 700; color: #ffffff; line-height: 1.4; }
.bfb-featured-desc { margin: 0; font-size: 0.82rem; color: #f5ede6; line-height: 1.5; }
.bfb-featured-btn {
  display: inline-block; background: #f5ede6; color: #8b3a5a !important;
  padding: 0.55rem 1.2rem; border-radius: 8px; font-size: 0.88rem; font-weight: 700;
  text-decoration: none !important; white-space: nowrap;
  transition: background 0.2s ease;
}
.bfb-featured-btn:hover { background: #ffffff; }

.bfb-divider { border: none; border-top: 1px solid #f0d8e2; margin: 2rem 0; }
.bfb-posts-title { font-size: 1.05rem; font-weight: 600; color: #2d1b14; margin: 0 0 1.2rem; padding-bottom: 0.5rem; border-bottom: 2px solid #f0d8e2; }

@media (max-width: 580px) {
  .bfb-hero-wrap { flex-direction: column; align-items: center; gap: 1rem; min-height: unset; }
  .bfb-logo-wrap, .bfb-hero-logo { width: 64px; height: 64px; }
  .bfb-btn-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; width: 100%; }
  .bfb-btn { flex-direction: column; align-items: flex-start; padding: 0.85rem 0.9rem; gap: 0.35rem; }
  .bfb-btn:hover { transform: none; }
  .bfb-btn-desc { display: none; }
  .bfb-btn-title { font-size: 0.85rem; }
}
</style>

<div class="bfb-hero-wrap">
  <div class="bfb-logo-wrap">
    <img src="/assets/img/bioflowbeauty-logo.png" alt="BioFlowBeauty" class="bfb-hero-logo">
  </div>
  <div class="bfb-btn-list">
    <a href="/tags#skincare" class="bfb-btn">
      <span class="bfb-btn-icon">✨</span>
      <span><p class="bfb-btn-title">Skin & Beauty</p><p class="bfb-btn-desc">What the science actually says about skincare ingredients and treatments</p></span>
    </a>
    <a href="/tags#hormones" class="bfb-btn">
      <span class="bfb-btn-icon">🌸</span>
      <span><p class="bfb-btn-title">Hormonal Health</p><p class="bfb-btn-desc">Understanding your cycle, perimenopause, thyroid, and more</p></span>
    </a>
    <a href="/tags#nutrition" class="bfb-btn">
      <span class="bfb-btn-icon">🥗</span>
      <span><p class="bfb-btn-title">Nutrition for Women</p><p class="bfb-btn-desc">Evidence-based eating for energy, skin health, and longevity</p></span>
    </a>
    <a href="/tags#weight-management" class="bfb-btn">
      <span class="bfb-btn-icon">⚖️</span>
      <span><p class="bfb-btn-title">Weight & Metabolism</p><p class="bfb-btn-desc">What the research actually supports — beyond trends and fads</p></span>
    </a>
  </div>
</div>

<div class="bfb-featured-box">
  <div>
    <p class="bfb-featured-label">⭐ Start Here</p>
    <p class="bfb-featured-title">5 Science-Backed Health Habits Every Woman Should Know</p>
    <p class="bfb-featured-desc">Sleep, nutrition, stress, movement, and prevention — the five habits with the strongest evidence for women's long-term health and vitality.</p>
  </div>
  <a href="/2026-05-21-5-science-backed-health-habits-for-women/" class="bfb-featured-btn">Read now →</a>
</div>

<hr class="bfb-divider">
<p class="bfb-posts-title">Latest Articles</p>

{% for post in site.posts %}
<div style="margin-bottom:1.5rem; padding-bottom:1.5rem; border-bottom: 1px solid #f0d8e2;">
  <a href="{{ post.url }}" style="font-size:1.05rem; font-weight:600; color:#2d1b14; text-decoration:none;">{{ post.title }}</a>
  <p style="font-size:0.85rem; color:#bbb; margin:0.2rem 0 0.4rem;">{{ post.date | date: "%B %-d, %Y" }}</p>
  <p style="font-size:0.92rem; color:#777; margin:0; line-height:1.6;">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
</div>
{% endfor %}
