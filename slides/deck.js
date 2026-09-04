(() => {
  const stage = document.querySelector(".stage");
  const slides = [...document.querySelectorAll(".slide")];
  const progress = document.querySelector(".progress > i");
  const counter = document.querySelector("[data-counter]");
  const elapsedEl = document.querySelector("[data-elapsed]");
  const help = document.querySelector(".help");
  const timerEl = document.querySelector("[data-fair-timer]");
  const timerRail = document.querySelector("[data-fair-rail]");
  const TOTAL = slides.length;

  let index = 0;
  let frag = 0;
  let blackout = false;
  let startedAt = null;
  let showElapsed = false;
  let fairLeft = 300;
  let fairTick = null;
  let vote = 0;

  const frags = (slide) => [...slide.querySelectorAll(".frag")];

  function fit() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    document.documentElement.style.setProperty("--scale", String(s));
  }

  function parseHash() {
    const n = parseInt(location.hash.replace("#", ""), 10);
    if (n >= 1 && n <= TOTAL) index = n - 1;
  }

  function renderFrags(slide) {
    frags(slide).forEach((el, i) => {
      el.classList.toggle("in", i < frag);
    });
  }

  function setVote(n) {
    vote = n;
    document.querySelectorAll("[data-vote]").forEach((el) => {
      el.classList.toggle("vote", Number(el.dataset.vote) === n);
    });
    document.querySelectorAll(".fork tr[data-fork]").forEach((el) => {
      el.classList.toggle("on", Number(el.dataset.fork) === n);
    });
    const game = document.querySelector("[data-title-game]");
    if (game) game.classList.toggle("called", n === 4);
  }

  function show() {
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.classList.toggle("on", on);
      if (!on) {
        frags(slide).forEach((el) => el.classList.remove("in"));
      }
    });
    const slide = slides[index];
    const all = frags(slide);
    if (frag > all.length) frag = all.length;
    renderFrags(slide);
    progress.style.setProperty("--progress", String(index / Math.max(TOTAL - 1, 1)));
    counter.textContent = String(index + 1).padStart(2, "0") + " / " + String(TOTAL).padStart(2, "0");
    history.replaceState(null, "", "#" + (index + 1));
    stage.classList.toggle(
      "on-title",
      slide.classList.contains("title-slide") || slide.classList.contains("intro-slide")
    );

    const seats = slide.querySelector("[data-seats]");
    if (seats) {
      seats.classList.toggle("lit", frag >= 1);
      seats.classList.toggle("gap", frag >= 2);
    }
  }

  function next() {
    if (!startedAt) startedAt = Date.now();
    const slide = slides[index];
    const all = frags(slide);
    if (frag < all.length) {
      frag += 1;
      renderFrags(slide);
      const seats = slide.querySelector("[data-seats]");
      if (seats) {
        seats.classList.toggle("lit", frag >= 1);
        seats.classList.toggle("gap", frag >= 2);
      }
      return;
    }
    if (index < TOTAL - 1) {
      index += 1;
      frag = 0;
      show();
    }
  }

  function prev() {
    const slide = slides[index];
    if (frag > 0) {
      frag -= 1;
      renderFrags(slide);
      const seats = slide.querySelector("[data-seats]");
      if (seats) {
        seats.classList.toggle("lit", frag >= 1);
        seats.classList.toggle("gap", frag >= 2);
      }
      return;
    }
    if (index > 0) {
      index -= 1;
      frag = frags(slides[index]).length;
      show();
    }
  }

  function go(n) {
    index = Math.max(0, Math.min(TOTAL - 1, n));
    frag = 0;
    show();
  }

  function paintFair(sec) {
    const m = String(Math.floor(Math.max(sec, 0) / 60)).padStart(2, "0");
    const s = String(Math.max(sec, 0) % 60).padStart(2, "0");
    const stamp = m + ":" + s;
    if (timerEl) timerEl.textContent = stamp;
    if (timerRail) timerRail.textContent = stamp;
  }

  function toggleFair() {
    if (!timerEl && !timerRail) return;
    if (fairTick) {
      clearInterval(fairTick);
      fairTick = null;
      return;
    }
    if (fairLeft <= 0) fairLeft = 300;
    if (timerRail) timerRail.hidden = false;
    paintFair(fairLeft);
    fairTick = setInterval(() => {
      fairLeft -= 1;
      paintFair(fairLeft);
      if (fairLeft <= 0) {
        clearInterval(fairTick);
        fairTick = null;
      }
    }, 1000);
  }

  function tickElapsed() {
    if (!showElapsed || !startedAt || !elapsedEl) return;
    const sec = Math.floor((Date.now() - startedAt) / 1000);
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    elapsedEl.textContent = m + ":" + s;
  }

  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const k = e.key;

    if (help.classList.contains("on") && k === "Escape") {
      help.classList.remove("on");
      return;
    }

    if (k === "?" || k === "h") {
      help.classList.toggle("on");
      e.preventDefault();
      return;
    }

    if (k === "b") {
      blackout = !blackout;
      document.body.classList.toggle("blackout", blackout);
      e.preventDefault();
      return;
    }

    if (k === "f") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
      e.preventDefault();
      return;
    }

    if (k === "c") {
      showElapsed = !showElapsed;
      elapsedEl.hidden = !showElapsed;
      e.preventDefault();
      return;
    }

    if (k === "t") {
      toggleFair();
      e.preventDefault();
      return;
    }

    if (k >= "1" && k <= "8") {
      setVote(Number(k));
      e.preventDefault();
      return;
    }

    if (k === "ArrowRight" || k === "PageDown" || k === " " || k === "Enter") {
      next();
      e.preventDefault();
    } else if (k === "ArrowLeft" || k === "PageUp" || k === "Backspace") {
      prev();
      e.preventDefault();
    } else if (k === "Home") {
      go(0);
      e.preventDefault();
    } else if (k === "End") {
      go(TOTAL - 1);
      e.preventDefault();
    }
  });

  help.addEventListener("click", (e) => e.stopPropagation());

  stage.addEventListener("click", (e) => {
    if (e.target.closest("a, button, .help")) return;
    next();
  });

  window.addEventListener("resize", fit);
  window.addEventListener("hashchange", () => {
    parseHash();
    frag = 0;
    show();
  });

  document.querySelectorAll("[data-seats]").forEach((el) => {
    if (el.children.length) return;
    for (let i = 0; i < 80; i += 1) {
      const seat = document.createElement("i");
      seat.className = "seat";
      el.appendChild(seat);
    }
  });

  document.querySelectorAll("[data-dots]").forEach((el) => {
    if (el.children.length) return;
    const n = Number(el.dataset.dots) || 0;
    const lit = Number(el.dataset.lit) || 0;
    for (let i = 0; i < n; i += 1) {
      const dot = document.createElement("i");
      dot.className = i < lit ? "dot on" : "dot";
      el.appendChild(dot);
    }
  });

  fit();
  parseHash();
  show();
  setInterval(tickElapsed, 1000);
})();
