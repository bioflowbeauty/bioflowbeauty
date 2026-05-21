/* =====================================================
   BioFlowBeauty Effects
   1. Navbar scroll shadow
   2. Cursor dot rosé
   3. Post reveal on scroll
   4. Reading progress bar
   5. Back to top button
   6. Glow rosé no click/tap
   7. Rastro de partículas no drag
   8. Redes sociais do footer em nova aba
   9. Botão de email redireciona para página de contato
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Navbar shadow on scroll
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // 2. Cursor dot rosé
  var cursor = document.createElement('div');
  cursor.id = 'beauty-cursor';
  cursor.style.cssText = 'position:fixed;width:22px;height:22px;background:radial-gradient(circle,rgba(201,149,108,0.30) 0%,rgba(201,149,108,0) 70%);border-radius:50%;pointer-events:none;z-index:99999;transition:transform 0.12s ease,opacity 0.4s ease;opacity:0;';
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', function(e){ cursor.style.left=e.clientX-11+'px'; cursor.style.top=e.clientY-11+'px'; cursor.style.opacity='1'; });
  document.addEventListener('mouseleave', function(){ cursor.style.opacity='0'; });
  document.querySelectorAll('a,button,.btn').forEach(function(el){
    el.addEventListener('mouseenter',function(){ cursor.style.transform='scale(2)'; cursor.style.opacity='0.7'; });
    el.addEventListener('mouseleave',function(){ cursor.style.transform='scale(1)'; cursor.style.opacity='1'; });
  });

  // 3. Post reveal on scroll
  var posts = document.querySelectorAll('.post-preview');
  if (posts.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.style.opacity='1'; entry.target.style.transform='translateY(0)'; observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    posts.forEach(function(post, i){
      post.style.opacity='0'; post.style.transform='translateY(20px)';
      post.style.transition='opacity 0.5s ease '+(i*0.08)+'s,transform 0.5s ease '+(i*0.08)+'s';
      observer.observe(post);
    });
  }

  // 4. Reading progress bar
  if (document.querySelector('article') || document.querySelector('.post-body')) {
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(to right,#8b3a5a,#c9956c);z-index:99998;width:0%;transition:width 0.1s linear;';
    document.body.appendChild(bar);
    window.addEventListener('scroll', function(){
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY/h)*100 : 0)+'%';
    });
  }

  // 5. Back to top
  var btt = document.createElement('button');
  btt.innerHTML = '↑'; btt.title = 'Back to top';
  btt.style.cssText = 'position:fixed;bottom:28px;right:28px;width:42px;height:42px;background:#8b3a5a;color:white;border:none;border-radius:50%;font-size:18px;cursor:pointer;opacity:0;transform:translateY(10px);transition:opacity 0.3s ease,transform 0.3s ease,background 0.2s ease;z-index:9999;box-shadow:0 4px 14px rgba(139,58,90,0.35);';
  document.body.appendChild(btt);
  btt.addEventListener('mouseenter', function(){ btt.style.background='#c9956c'; });
  btt.addEventListener('mouseleave', function(){ btt.style.background='#8b3a5a'; });
  btt.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  window.addEventListener('scroll', function(){
    var show = window.scrollY > 300;
    btt.style.opacity = show ? '1' : '0';
    btt.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
  });

  // 8. Redes sociais do footer em nova aba
  document.querySelectorAll('.footer-links a, .author-social a').forEach(function(a) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  // 9. Email redireciona para contato
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = '/contact';
    });
  });

});

/* =====================================================
   6 + 7. Canvas: Glow rosé no click + Rastro no drag
   ===================================================== */
(function(){

  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99990;';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var glows = [];
  function spawnGlow(x, y) {
    glows.push({ x: x, y: y, r: 0, alpha: 1 });
  }

  var trail = [];
  var dragging = false;

  function spawnTrail(x, y) {
    for (var i = 0; i < 3; i++) {
      trail.push({
        x: x + (Math.random()-0.5)*6,
        y: y + (Math.random()-0.5)*6,
        vx: (Math.random()-0.5)*1.2,
        vy: (Math.random()-0.5)*1.2,
        size: 1.5 + Math.random()*3,
        alpha: 0.7 + Math.random()*0.3,
        life: 1.0,
        decay: 0.025 + Math.random()*0.02,
        hue: 340 + Math.random()*30
      });
    }
  }

  var animId = null;

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var alive = false;

    glows = glows.filter(function(g){
      g.r   += 4;
      g.alpha -= 0.032;
      if (g.alpha <= 0) return false;
      alive = true;
      ctx.beginPath();
      ctx.arc(g.x, g.y, g.r, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(201,149,108,' + g.alpha * 0.6 + ')';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(201,149,108,0.8)';
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(g.x, g.y, g.r * 0.5, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(245,220,200,' + g.alpha * 0.4 + ')';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
      return true;
    });

    trail = trail.filter(function(p){
      p.life  -= p.decay;
      p.x     += p.vx;
      p.y     += p.vy;
      p.size  *= 0.97;
      if (p.life <= 0 || p.size < 0.3) return false;
      alive = true;
      var a = p.alpha * p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fillStyle = 'hsla(' + p.hue + ',60%,65%,' + a + ')';
      ctx.shadowColor = 'hsla(' + p.hue + ',70%,70%,' + a*0.6 + ')';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      return true;
    });

    if (alive || dragging) {
      animId = requestAnimationFrame(loop);
    } else {
      animId = null;
    }
  }

  function startLoop() {
    if (!animId) animId = requestAnimationFrame(loop);
  }

  document.addEventListener('mousedown', function(){ dragging = true; });
  document.addEventListener('mouseup',   function(){ dragging = false; });

  document.addEventListener('click', function(e){
    spawnGlow(e.clientX, e.clientY);
    startLoop();
  });

  document.addEventListener('mousemove', function(e){
    if (!dragging) return;
    spawnTrail(e.clientX, e.clientY);
    startLoop();
  });

  document.addEventListener('touchstart', function(e){
    var t = e.touches[0];
    spawnGlow(t.clientX, t.clientY);
    startLoop();
  }, { passive: true });

  document.addEventListener('touchmove', function(e){
    var t = e.touches[0];
    spawnTrail(t.clientX, t.clientY);
    startLoop();
  }, { passive: true });

})();
