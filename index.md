---
layout: page
title: BioFlowBeauty
subtitle: " "
cover-img: false
---

<style>
.page-subheading { display: none !important; }
.page-heading { display: none !important; }

/* ── Hero Magazine ── */
.bfb-magazine-hero {
  position: relative; overflow: hidden;
  margin: -1rem -1rem 0;
  min-height: 380px;
  display: flex; align-items: stretch;
}
#bfb-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none; z-index: 0;
}
.bfb-hero-left {
  flex: 1.2; background: linear-gradient(160deg, #8b3a5a 0%, #6b2040 100%);
  padding: 3rem 2.5rem; display: flex; flex-direction: column;
  justify-content: center; position: relative; z-index: 1;
}
.bfb-hero-right {
  flex: 1; background: linear-gradient(160deg, #f9eef4 0%, #fdf0ea 100%);
  display: flex; flex-direction: column; justify-content: center;
  padding: 2rem 2rem 2rem 1.5rem; position: relative; z-index: 1;
}
.bfb-mag-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.68rem; font-weight: 500; letter-spacing: 0.18em;
  color: #f5d8e3; text-transform: uppercase; margin: 0 0 1rem;
}
.bfb-mag-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400; color: #fff;
  line-height: 1.15; margin: 0 0 1rem;
}
.bfb-mag-title em { font-style: italic; color: #f5c8a0; }
.bfb-mag-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.88rem; font-weight: 300;
  color: #f0d0dc; line-height: 1.7; margin: 0 0 1.8rem;
}
.bfb-mag-btn {
  display: inline-block; align-self: flex-start;
  background: #fff; color: #8b3a5a !important;
  padding: 0.65rem 1.8rem; border-radius: 50px;
  font-family: 'Jost', sans-serif; font-size: 0.85rem; font-weight: 600;
  letter-spacing: 0.04em; text-decoration: none !important;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.bfb-mag-btn:hover { background: #f5ede6; transform: scale(1.04); }

.bfb-hero-logo {
  width: 64px; margin-bottom: 1.2rem;
  animation: bfbFloat 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(255,255,255,0.2));
}
@keyframes bfbFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

/* right side mini cards */
.bfb-mini-cards { display: flex; flex-direction: column; gap: 0.6rem; }
.bfb-mini-card {
  background: #fff; border-radius: 10px;
  padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.75rem;
  border: 1px solid #f0d8e2;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(139,58,90,0.06);
}
.bfb-mini-card:hover { transform: translateX(4px); box-shadow: 0 4px 16px rgba(139,58,90,0.12); text-decoration: none; }
.bfb-mini-icon { font-size: 1.3rem; flex-shrink: 0; }
.bfb-mini-title { font-family: 'Jost', sans-serif; font-size: 0.84rem; font-weight: 600; color: #2d1b14; margin: 0; }
.bfb-mini-sub { font-family: 'Jost', sans-serif; font-size: 0.72rem; color: #bbb; margin: 0; }
.bfb-mini-arrow { margin-left: auto; color: #c9956c; font-size: 0.9rem; }

/* ── Philosophy band ── */
.bfb-band {
  background: linear-gradient(90deg, #fdf0ea, #fdf8f5, #f9eef4);
  padding: 1.5rem 1.5rem; margin: 0 -1rem 2.5rem;
  display: flex; gap: 0; overflow-x: auto;
}
.bfb-band-item {
  flex: 1; min-width: 120px; text-align: center;
  padding: 0 1rem; border-right: 1px solid #f0d8e2;
}
.bfb-band-item:last-child { border-right: none; }
.bfb-band-icon { font-size: 1.4rem; margin-bottom: 0.3rem; }
.bfb-band-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem; font-weight: 600; color: #8b3a5a; margin: 0 0 0.2rem;
}
.bfb-band-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem; color: #bbb; margin: 0; line-height: 1.4;
}

/* ── Featured story ── */
.bfb-story {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1.5rem; margin-bottom: 2.5rem;
}
.bfb-story-main {
  background: linear-gradient(135deg, #8b3a5a, #c9956c);
  border-radius: 16px; padding: 2rem;
  display: flex; flex-direction: column; justify-content: flex-end;
  min-height: 260px; position: relative; overflow: hidden;
}
.bfb-story-main::before {
  content: ''; position: absolute; inset: 0;
  background: url('/assets/img/posts/women-health-habits-hero.webp') center/cover;
  opacity: 0.18;
}
.bfb-story-label {
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.15em;
  color: #f5d8e3; text-transform: uppercase; margin: 0 0 0.5rem;
  position: relative; z-index: 1;
}
.bfb-story-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem; font-weight: 600; color: #fff;
  line-height: 1.3; margin: 0 0 1rem; position: relative; z-index: 1;
}
.bfb-story-btn {
  display: inline-block; background: rgba(255,255,255,0.2);
  color: #fff !important; padding: 0.4rem 1rem; border-radius: 50px;
  font-size: 0.78rem; font-weight: 500; text-decoration: none !important;
  border: 1px solid rgba(255,255,255,0.4);
  transition: background 0.2s; position: relative; z-index: 1; align-self: flex-start;
}
.bfb-story-btn:hover { background: rgba(255,255,255,0.35); }

.bfb-story-side { display: flex; flex-direction: column; gap: 1rem; }
.bfb-story-card {
  background: #fdf8f5; border: 1px solid #f0d8e2;
  border-radius: 12px; padding: 1.1rem 1.2rem;
  text-decoration: none; flex: 1;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.bfb-story-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139,58,90,0.10);
  border-color: #c9956c; text-decoration: none;
}
.bfb-story-card-icon { font-size: 1.2rem; margin-bottom: 0.4rem; }
.bfb-story-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem; font-weight: 600; color: #2d1b14;
  margin: 0 0 0.3rem; line-height: 1.3;
}
.bfb-story-card-desc { font-size: 0.76rem; color: #bbb; margin: 0; line-height: 1.5; }

/* ── Posts ── */
.bfb-divider { border: none; border-top: 1px solid #f0d8e2; margin: 2rem 0; }
.bfb-posts-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 600; color: #8b3a5a;
  margin: 0 0 1.2rem; padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0d8e2;
}
.bfb-post-item {
  display: flex; gap: 1rem; align-items: flex-start;
  margin-bottom: 1.4rem; padding-bottom: 1.4rem;
  border-bottom: 1px solid #f9eef4;
}
.bfb-post-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 400; color: #f0d8e2;
  line-height: 1; flex-shrink: 0; width: 2rem; text-align: center;
  padding-top: 0.1rem;
}
.bfb-post-content { flex: 1; }
.bfb-post-link {
  font-size: 0.98rem; font-weight: 600; color: #2d1b14;
  text-decoration: none; transition: color 0.2s;
}
.bfb-post-link:hover { color: #8b3a5a; }
.bfb-post-date { font-size: 0.78rem; color: #ccc; margin: 0.2rem 0 0.35rem; }
.bfb-post-excerpt { font-size: 0.87rem; color: #999; margin: 0; line-height: 1.6; }

@media (max-width: 640px) {
  .bfb-magazine-hero { flex-direction: column; min-height: unset; }
  .bfb-hero-left, .bfb-hero-right { padding: 2rem 1.2rem; }
  .bfb-hero-right { display: none; }
  .bfb-story { grid-template-columns: 1fr; }
  .bfb-story-side { flex-direction: row; }
  .bfb-band { gap: 0; }
  .bfb-band-item { min-width: 90px; padding: 0 0.6rem; }
}
</style>

<!-- HERO MAGAZINE -->
<div class="bfb-magazine-hero">
  <canvas id="bfb-canvas"></canvas>

  <div class="bfb-hero-left">
    <img src="/assets/img/bioflowbeauty-logo.png" alt="BioFlowBeauty" class="bfb-hero-logo">
    <p class="bfb-mag-label">Evidence-Based Beauty and Women's Health</p>
    <h1 class="bfb-mag-title">Real beauty<br>starts <em>within</em></h1>
    <p class="bfb-mag-desc">Science-based insights on skincare, hormonal health, nutrition and wellness. Written by a biomedical scientist. No trends. No hype. Just what the research actually says.</p>
    <a href="/2026-05-21-5-science-backed-health-habits-for-women/" class="bfb-mag-btn">Start Reading</a>
  </div>

  <div class="bfb-hero-right">
    <div class="bfb-mini-cards">
      <a href="/tags#skincare" class="bfb-mini-card">
        <span class="bfb-mini-icon">✨</span>
        <span><p class="bfb-mini-title">Skin and Beauty</p><p class="bfb-mini-sub">Ingredients and treatments that work</p></span>
        <span class="bfb-mini-arrow">›</span>
      </a>
      <a href="/tags#hormones" class="bfb-mini-card">
        <span class="bfb-mini-icon">🌸</span>
        <span><p class="bfb-mini-title">Hormonal Health</p><p class="bfb-mini-sub">Cycles, perimenopause and thyroid</p></span>
        <span class="bfb-mini-arrow">›</span>
      </a>
      <a href="/tags#nutrition" class="bfb-mini-card">
        <span class="bfb-mini-icon">🥗</span>
        <span><p class="bfb-mini-title">Nutrition for Women</p><p class="bfb-mini-sub">Energy, skin health and longevity</p></span>
        <span class="bfb-mini-arrow">›</span>
      </a>
      <a href="/tags#weight-management" class="bfb-mini-card">
        <span class="bfb-mini-icon">⚖️</span>
        <span><p class="bfb-mini-title">Weight and Metabolism</p><p class="bfb-mini-sub">What the research supports</p></span>
        <span class="bfb-mini-arrow">›</span>
      </a>
      <a href="/tags#prevention" class="bfb-mini-card">
        <span class="bfb-mini-icon">🛡️</span>
        <span><p class="bfb-mini-title">Disease Prevention</p><p class="bfb-mini-sub">Screenings and habits that matter</p></span>
        <span class="bfb-mini-arrow">›</span>
      </a>
    </div>
  </div>
</div>

<!-- PHILOSOPHY BAND -->
<div class="bfb-band">
  <div class="bfb-band-item">
    <div class="bfb-band-icon">🔬</div>
    <p class="bfb-band-title">Science First</p>
    <p class="bfb-band-desc">Peer-reviewed research only</p>
  </div>
  <div class="bfb-band-item">
    <div class="bfb-band-icon">🌿</div>
    <p class="bfb-band-title">Natural Beauty</p>
    <p class="bfb-band-desc">Health from the inside out</p>
  </div>
  <div class="bfb-band-item">
    <div class="bfb-band-icon">🕊️</div>
    <p class="bfb-band-title">Inner Peace</p>
    <p class="bfb-band-desc">Hormones, stress and sleep</p>
  </div>
  <div class="bfb-band-item">
    <div class="bfb-band-icon">✦</div>
    <p class="bfb-band-title">Your Purpose</p>
    <p class="bfb-band-desc">Feeling well is your foundation</p>
  </div>
</div>

<!-- FEATURED STORIES -->
<div class="bfb-story">
  <div class="bfb-story-main">
    <p class="bfb-story-label">Start Here</p>
    <p class="bfb-story-title">5 Science-Backed Health Habits Every Woman Should Know</p>
    <a href="/2026-05-21-5-science-backed-health-habits-for-women/" class="bfb-story-btn">Read now</a>
  </div>
  <div class="bfb-story-side">
    <a href="/2026-05-21-skincare-science-what-actually-works/" class="bfb-story-card">
      <div class="bfb-story-card-icon">✨</div>
      <p class="bfb-story-card-title">Skincare Science: What Actually Works</p>
      <p class="bfb-story-card-desc">Retinoids, niacinamide, alpha lipoic acid and the evidence behind them</p>
    </a>
    <a href="/2026-05-21-hormonal-health-women/" class="bfb-story-card">
      <div class="bfb-story-card-icon">🌸</div>
      <p class="bfb-story-card-title">Hormonal Health Across the Lifespan</p>
      <p class="bfb-story-card-desc">Cycles, PMS, perimenopause and what the science actually supports</p>
    </a>
    <a href="/2026-05-21-makeup-safety-what-the-science-says/" class="bfb-story-card">
      <div class="bfb-story-card-icon">💄</div>
      <p class="bfb-story-card-title">Makeup Safety: What You Should Know</p>
      <p class="bfb-story-card-desc">PFAS, parabens, heavy metals and how to make informed choices</p>
    </a>
  </div>
</div>

<!-- POSTS LIST -->
<hr class="bfb-divider">
<p class="bfb-posts-title">All Articles</p>

{% assign counter = 1 %}
{% for post in site.posts %}
<div class="bfb-post-item">
  <span class="bfb-post-num">{{ counter }}</span>
  <div class="bfb-post-content">
    <a href="{{ post.url }}" class="bfb-post-link">{{ post.title }}</a>
    <p class="bfb-post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p class="bfb-post-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
  </div>
</div>
{% assign counter = counter | plus: 1 %}
{% endfor %}

<script>
(function(){
  var canvas = document.getElementById('bfb-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var hero = canvas.parentElement;
  var particles = [];
  var W, H;
  function resize(){ W = canvas.width = hero.offsetWidth; H = canvas.height = hero.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  for (var i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * 1200, y: Math.random() * 600,
      r: 1 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.12 - Math.random() * 0.28,
      alpha: 0.08 + Math.random() * 0.25,
      hue: Math.random() > 0.5 ? 340 : 28
    });
  }
  function draw(){
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function(p){
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      g.addColorStop(0, 'hsla('+p.hue+',55%,70%,'+p.alpha+')');
      g.addColorStop(1, 'hsla('+p.hue+',55%,70%,0)');
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>
