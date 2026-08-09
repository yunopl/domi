/*
  Delikatny śnieg w tle. Lekki (canvas, brak bibliotek),
  wyłącza się dla użytkowników z prefers-reduced-motion.
  Ambient snowfall. Lightweight (canvas, no libraries),
  disabled for users with prefers-reduced-motion.
*/
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const canvas = document.getElementById("snow-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w, h, flakes;
  const COUNT = 70;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function makeFlake() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.6 + 0.25,
      drift: Math.random() * 0.6 - 0.3,
      sway: Math.random() * Math.PI * 2,
    };
  }

  function init() {
    resize();
    flakes = Array.from({ length: COUNT }, makeFlake);
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(238, 244, 251, 0.85)";

    for (const f of flakes) {
      f.y += f.speed;
      f.sway += 0.01;
      f.x += f.drift + Math.sin(f.sway) * 0.15;

      if (f.y > h + 4) {
        f.y = -4;
        f.x = Math.random() * w;
      }
      if (f.x > w + 4) f.x = -4;
      if (f.x < -4) f.x = w + 4;

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  init();
  requestAnimationFrame(tick);
})();
