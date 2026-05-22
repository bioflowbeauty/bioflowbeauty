/* =====================================================
   BioFlowBeauty Effects — versão com pétalas suaves
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Navbar shadow on scroll
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // 2. Cursor dot rosé (apenas desktop)
  if (window.innerWidth > 768) {
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
  }

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
  btt.style.cssText = 'position:fixed;bottom:28px;right:28px;width:42px;height:42px;background:#8b3a5a;color:white;border:none;border-radius:50%;font-size:18px;cursor:pointer;opacity:0;transform:translateY(10px);transition:opacity 0.3s ease,transform 0.3s ease,background 0.2s ease;z-index:999;box-shadow:0 4px 14px rgba(139,58,90,0.35);';
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

  // 10. Efeito petala dourada no click dos links da navbar
  if (!document.getElementById('bfb-petal-style')) {
    var styleEl = document.createElement('style');
    styleEl.id = 'bfb-petal-style';
    styleEl.textContent = '@keyframes bfbPetal{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:0}}';
    document.head.appendChild(styleEl);
  }
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var petal = document.createElement('span');
      var rect = link.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height) * 2.5;
      petal.style.cssText = 'position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(201,149,108,0.5) 0%,rgba(139,58,90,0.15) 50%,transparent 100%);width:'+size+'px;height:'+size+'px;left:'+(e.clientX-rect.left-size/2)+'px;top:'+(e.clientY-rect.top-size/2)+'px;pointer-events:none;transform:scale(0);animation:bfbPetal 0.7s ease-out forwards;z-index:9999;';
      link.style.position = 'relative';
      link.style.overflow = 'hidden';
      link.appendChild(petal);
      petal.addEventListener('animationend', function(){ petal.remove(); });
    });
  });

});

/* =====================================================
   Pétalas suaves — rastro delicado no toque e mouse
   Funciona bem em mobile e desktop
   ===================================================== */
(function(){

  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99990;';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var petals = [];
  var animId = null;

  // Forma de pétala suave usando bezier
  function drawPetal(ctx, x, y, size, angle, alpha, hue) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    // pétala oval alongada
    ctx.ellipse(0, 0, size * 0.4, size, 0, 0, Math.PI * 2);
    var grad = ctx.createRadialGradient(0, -size*0.3, 0, 0, 0, size);
    grad.addColorStop(0, 'hsla('+hue+',65%,80%,1)');
    grad.addColorStop(1, 'hsla('+hue+',55%,70%,0)');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  function spawnPetals(x, y, count) {
    count = count || 3;
    for (var i = 0; i < count; i++) {
      petals.push({
        x: x + (Math.random()-0.5) * 12,
        y: y + (Math.random()-0.5) * 12,
        vx: (Math.random()-0.5) * 0.8,
        vy: -0.4 - Math.random() * 0.8, // sobe devagar
        size: 4 + Math.random() * 7,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random()-0.5) * 0.04, // rotação lenta
        alpha: 0.6 + Math.random() * 0.3,
        life: 1.0,
        decay: 0.008 + Math.random() * 0.006, // decai muito devagar
        hue: Math.random() > 0.6 ? 340 : (Math.random() > 0.5 ? 20 : 355), // rosé, dourado, rosa
        drift: (Math.random()-0.5) * 0.01 // deriva suave
      });
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var alive = false;

    petals = petals.filter(function(p){
      p.life -= p.decay;
      if (p.life <= 0) return false;
      alive = true;

      // movimento suave ondulante
      p.vx += p.drift;
      p.vy += 0.01; // leve gravidade
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.vAngle;

      var a = p.alpha * p.life;
      drawPetal(ctx, p.x, p.y, p.size * p.life, p.angle, a, p.hue);
      return true;
    });

    if (alive) {
      animId = requestAnimationFrame(loop);
    } else {
      animId = null;
    }
  }

  function startLoop() {
    if (!animId) animId = requestAnimationFrame(loop);
  }

  // Mouse move — rastro suave apenas quando movendo devagar
  var lastX = 0, lastY = 0;
  document.addEventListener('mousemove', function(e){
    var dx = e.clientX - lastX;
    var dy = e.clientY - lastY;
    var speed = Math.sqrt(dx*dx + dy*dy);
    // só spawna se o mouse estiver se movendo devagar (rastro delicado)
    if (speed < 20) {
      if (Math.random() < 0.3) { // nem todo frame
        spawnPetals(e.clientX, e.clientY, 1);
        startLoop();
      }
    }
    lastX = e.clientX;
    lastY = e.clientY;
  });

  // Click — buquê de pétalas
  document.addEventListener('click', function(e){
    spawnPetals(e.clientX, e.clientY, 6);
    startLoop();
  });

  // Touch — rastro de pétalas suave no mobile
  var lastTouchX = 0, lastTouchY = 0;
  document.addEventListener('touchmove', function(e){
    var t = e.touches[0];
    var dx = t.clientX - lastTouchX;
    var dy = t.clientY - lastTouchY;
    var speed = Math.sqrt(dx*dx + dy*dy);
    if (speed < 30 && Math.random() < 0.4) {
      spawnPetals(t.clientX, t.clientY, 2);
      startLoop();
    }
    lastTouchX = t.clientX;
    lastTouchY = t.clientY;
  }, { passive: true });

  document.addEventListener('touchstart', function(e){
    var t = e.touches[0];
    spawnPetals(t.clientX, t.clientY, 4);
    startLoop();
  }, { passive: true });

})();
