---
layout: page
title: BioFlowBeauty
subtitle: " "
cover-img: false
---

<style>
/* ── Reset subtitle ── */
.page-subheading { display: none !important; }

/* ── Fonts ── */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

/* ── Hero ── */
.bfb-hero {
  position: relative; overflow: hidden;
  text-align: center; padding: 3.5rem 1.5rem 2.5rem;
  margin: -1rem -1rem 2.5rem;
  background: linear-gradient(160deg, #fdf0ea 0%, #fdf8f5 50%, #f9eef4 100%);
  border-radius: 0 0 32px 32px;
}
#bfb-canvas {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none; z-index: 0;
}
.bfb-hero-inner { position: relative; z-index: 1; }
.bfb-tagline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 400; font-style: italic;
  color: #8b3a5a; line-height: 1.35;
  margin: 0 0 0.6rem;
}
.bfb-tagline span { color: #c9956c; }
.bfb-sub {
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem; font-weight: 300;
  color: #a0706e; letter-spacing: 0.04em;
  margin: 0 0 1.8rem;
}
.bfb-logo-hero {
  width: 80px; height: 80px; object-fit: contain;
  margin: 0 auto 1.2rem; display: block;
  filter: drop-shadow(0 4px 16px rgba(139,58,90,0.18));
  animation: bfbFloat 4s ease-in-out infinite;
}
@keyframes bfbFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.bfb-hero-btn {
  display: inline-block;
  background: linear-gradient(135deg, #8b3a5a, #c9956c);
  color: #fff !important; text-decoration: none !important;
  padding: 0.75rem 2rem; border-radius: 50px;
  font-family: 'Jost', sans-serif; font-size: 0.92rem; font-weight: 500;
  letter-spacing: 0.05em;
  box-shadow: 0 6px 20px rgba(139,58,90,0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.bfb-hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(139,58,90,0.35);
}

/* ── Philosophy strip ── */
.bfb-philosophy {
  display: flex; gap: 1rem; margin: 0 0 2.5rem;
  flex-wrap: wrap;
}
.bfb-phil-card {
  flex: 1; min-width: 140px;
  background: #fdf8f5; border: 1px solid #f0d8e2;
  border-radius: 14px; padding: 1.2rem 1rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.bfb-phil-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(139,58,90,0.10);
}
.bfb-phil-icon { font-size: 1.6rem; margin-bottom: 0.5rem; }
.bfb-phil-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem; font-weight: 600; color: #8b3a5a;
  margin: 0 0 0.3rem;
}
.bfb-phil-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.76rem; color: #a0706e; margin: 0; line-height: 1.5;
}

/* ── Category buttons ── */
.bfb-cats { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 2.5rem; }
.bfb-cat {
  display: flex; align-items: center; gap: 0.8rem;
  padding: 0.9rem 1.1rem; border-radius: 12px;
  border: 1.5px solid #f0d8e2; background: #fdf8f5;
  text-decoration: none; overflow: hidden; position: relative;
  transition: background 0.3s, border-color 0.3s, transform 0.2s, box-shadow 0.3s;
}
.bfb-cat::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, #8b3a5a, #c9956c);
  opacity: 0; transition: opacity 0.3s;
}
.bfb-cat:hover::before { opacity: 1; }
.bfb-cat:hover { transform: scale(1.02); box-shadow: 0 6px 20px rgba(139,58,90,0.20); text-decoration: none; }
.bfb-cat-icon { font-size: 1.3rem; position: relative; z-index: 1; }
.bfb-cat-info { position: relative; z-index: 1; }
.bfb-cat-title { font-size: 0.88rem; font-weight: 600; color: #2d1b14; margin: 0 0 2px; transition: color 0.3s; }
.bfb-cat:hover .bfb-cat-title { color: #fff; }
.bfb-cat-desc { font-size: 0.72rem; color: #bbb; margin: 0; transition: color 0.3s; line-height: 1.4; }
.bfb-cat:hover .bfb-cat-desc { color: #f5d8e3; }

/* ── Featured ── */
.bfb-featured {
  background: linear-gradient(135deg, #8b3a5a 0%, #a0486e 50%, #c9956c 100%);
  border-radius: 16px; padding: 1.6rem 1.8rem;
  margin-bottom: 2.5rem; position: relative; overflow: hidden;
}
.bfb-featured::after {
  content: '✦'; position: absolute;
  right: 1.5rem; top: 50%; transform: translateY(-50%);
  font-size: 5rem; color: rgba(255,255,255,0.06);
  pointer-events: none;
}
.bfb-feat-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem; font-weight: 500; letter-spacing: 0.12em;
  color: #f5d8e3; text-transform: uppercase; margin: 0 0 0.5rem;
}
.bfb-feat-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 600; color: #fff;
  margin: 0 0 0.5rem; line-height: 1.35;
}
.bfb-feat-desc { font-size: 0.84rem; color: #f5ede6; margin: 0 0 1.2rem; line-height: 1.6; }
.bfb-feat-btn {
  display: inline-block; background: #fff; color: #8b3a5a !important;
  padding: 0.5rem 1.4rem; border-radius: 50px;
  font-size: 0.86rem; font-weight: 600;
  text-decoration: none !important;
  transition: background 0.2s, transform 0.2s;
}
.bfb-feat-btn:hover { background: #f5ede6; transform: scale(1.04); }

/* ── Posts list ── */
.bfb-divider { border: none; border-top: 1px solid #f0d8e2; margin: 2rem 0; }
.bfb-posts-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 600; color: #8b3a5a;
  margin: 0 0 1.2rem; padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0d8e2;
}
.bfb-post-item { margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #f9eef4; }
.bfb-post-link { font-size: 1.02rem; font-weight: 600; color: #2d1b14; text-decoration: none; transition: color 0.2s; }
.bfb-post-link:hover { color: #8b3a5a; }
.bfb-post-date { font-size: 0.8rem; color: #ccc; margin: 0.2rem 0 0.4rem; }
.bfb-post-excerpt { font-size: 0.9rem; color: #888; margin: 0; line-height: 1.6; }

@media (max-width: 580px) {
  .bfb-hero { padding: 2.5rem 1rem 2rem; margin: -0.5rem -0.5rem 2rem; }
  .bfb-cats { grid-template-columns: 1fr; }
  .bfb-philosophy { flex-direction: column; }
  .bfb-featured::after { display: none; }
}
</style>

<!-- HERO -->
<div class="bfb-hero">
  <canvas id="bfb-canvas"></canvas>
  <div class="bfb-hero-inner">
    <img src="/assets/img/bioflowbeauty-logo.png" alt="BioFlowBeauty" class="bfb-logo-hero">
    <p class="bfb-tagline">
      Real beauty starts<br>with <span>understanding your body</span>
    </p>
    <p class="bfb-sub">Science-based. Honest. Built for women who want to feel well — inside and out.</p>
    <a href="/2026-05-21-5-science-backed-health-habits-for-women/" class="bfb-hero-btn">Start Here →</a>
  </div>
</div>

<!-- PHILOSOPHY -->
<div class="bfb-philosophy">
  <div class="bfb-phil-card">
    <div class="bfb-phil-icon">🔬</div>
    <p class="bfb-phil-title">Science First</p>
    <p class="bfb-phil-desc">Every article grounded in peer-reviewed research — not trends</p>
  </div>
  <div class="bfb-phil-card">
    <div class="bfb-phil-icon">🌿</div>
    <p class="bfb-phil-title">Natural Beauty</p>
    <p class="bfb-phil-desc">Skin, hair and body health from the inside out</p>
  </div>
  <div class="bfb-phil-card">
    <div class="bfb-phil-icon">🕊️</div>
    <p class="bfb-phil-title">Inner Peace</p>
    <p class="bfb-phil-desc">Hormonal balance, stress, sleep and purpose — all connected</p>
  </div>
  <div class="bfb-phil-card">
    <div class="bfb-phil-icon">✦</div>
    <p class="bfb-phil-title">Your Purpose</p>
    <p class="bfb-phil-desc">Feeling well is not vanity — it is the foundation for everything</p>
  </div>
</div>

<!-- CATEGORIES -->
<div class="bfb-cats">
  <a href="/tags#skincare" class="bfb-cat">
    <span class="bfb-cat-icon">✨</span>
    <span class="bfb-cat-info">
      <p class="bfb-cat-title">Skin & Beauty</p>
      <p class="bfb-cat-desc">Ingredients, treatments and what works</p>
    </span>
  </a>
  <a href="/tags#hormones" class="bfb-cat">
    <span class="bfb-cat-icon">🌸</span>
    <span class="bfb-cat-info">
      <p class="bfb-cat-title">Hormonal Health</p>
      <p class="bfb-cat-desc">Cycles, perimenopause, thyroid and more</p>
    </span>
  </a>
  <a href="/tags#nutrition" class="bfb-cat">
    <span class="bfb-cat-icon">🥗</span>
    <span class="bfb-cat-info">
      <p class="bfb-cat-title">Nutrition for Women</p>
      <p class="bfb-cat-desc">Eating well for energy, skin and longevity</p>
    </span>
  </a>
  <a href="/tags#weight-management" class="bfb-cat">
    <span class="bfb-cat-icon">⚖️</span>
    <span class="bfb-cat-info">
      <p class="bfb-cat-title">Weight & Metabolism</p>
      <p class="bfb-cat-desc">What the research actually supports</p>
    </span>
  </a>
  <a href="/tags#hair" class="bfb-cat">
    <span class="bfb-cat-icon">💆</span>
    <span class="bfb-cat-info">
      <p class="bfb-cat-title">Hair Health</p>
      <p class="bfb-cat-desc">Biology of growth, loss and care</p>
    </span>
  </a>
  <a href="/tags#prevention" class="bfb-cat">
    <span class="bfb-cat-icon">🛡️</span>
    <span class="bfb-cat-info">
      <p class="bfb-cat-title">Disease Prevention</p>
      <p class="bfb-cat-desc">The screenings and habits that matter most</p>
    </span>
  </a>
</div>

<!-- FEATURED -->
<div class="bfb-featured">
  <p class="bfb-feat-label">⭐ Start Here</p>
  <p class="bfb-feat-title">5 Science-Backed Health Habits Every Woman Should Know</p>
  <p class="bfb-feat-desc">Sleep, nutrition, stress, movement and prevention — the five habits with the strongest evidence for women's long-term health and vitality, explained by a biomedical scientist.</p>
  <a href="/2026-05-21-5-science-backed-health-habits-for-women/" class="bfb-feat-btn">Read now →</a>
</div>

<!-- POSTS -->
<hr class="bfb-divider">
<p class="bfb-posts-title">Latest Articles</p>

{% for post in site.posts %}
<div class="bfb-post-item">
  <a href="{{ post.url }}" class="bfb-post-link">{{ post.title }}</a>
  <p class="bfb-post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
  <p class="bfb-post-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
</div>
{% endfor %}

<!-- PARTICLES CANVAS -->
<script>
(function(){
  var canvas = document.getElementById('bfb-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var hero = canvas.parentElement;
  var particles = [];
  var W, H;

  function resize(){
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // spawn particles
  for (var i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * 1200,
      y: Math.random() * 600,
      r: 1.2 + Math.random() * 2.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -0.15 - Math.random() * 0.35,
      alpha: 0.15 + Math.random() * 0.45,
      hue: Math.random() > 0.5 ? 340 : 30
    });
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function(p){
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;

      var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
      g.addColorStop(0, 'hsla(' + p.hue + ',60%,65%,' + p.alpha + ')');
      g.addColorStop(1, 'hsla(' + p.hue + ',60%,65%,0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>
