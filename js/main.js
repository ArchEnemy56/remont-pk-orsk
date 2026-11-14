const NS = "http://www.w3.org/2000/svg";

const ICONS = {
  cpu: [
    ["rect", { x: 5, y: 5, width: 14, height: 14, rx: 2.5 }],
    ["rect", { x: 10, y: 10, width: 4, height: 4 }],
    ["path", { d: "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" }]
  ],
  gamepad: [
    ["line", { x1: 6, y1: 12, x2: 10, y2: 12 }],
    ["line", { x1: 8, y1: 10, x2: 8, y2: 14 }],
    ["line", { x1: 15, y1: 13, x2: 15.01, y2: 13 }],
    ["line", { x1: 18, y1: 11, x2: 18.01, y2: 11 }],
    ["rect", { x: 2, y: 6, width: 20, height: 12, rx: 2 }]
  ],
  monitor: [
    ["rect", { x: 2, y: 3, width: 20, height: 14, rx: 2 }],
    ["line", { x1: 8, y1: 21, x2: 16, y2: 21 }],
    ["line", { x1: 12, y1: 17, x2: 12, y2: 21 }]
  ],
  wrench: [
    ["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }]
  ],
  search: [
    ["circle", { cx: 11, cy: 11, r: 8 }],
    ["line", { x1: 21, y1: 21, x2: 16.65, y2: 16.65 }]
  ],
  wind: [
    ["path", { d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" }]
  ],
  laptop: [
    ["rect", { x: 3, y: 4, width: 18, height: 12, rx: 2 }],
    ["line", { x1: 2, y1: 20, x2: 22, y2: 20 }]
  ],
  thermo: [
    ["path", { d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" }]
  ],
  layers: [
    ["polygon", { points: "12 2 2 7 12 12 22 7 12 2" }],
    ["polyline", { points: "2 17 12 22 22 17" }],
    ["polyline", { points: "2 12 12 17 22 12" }]
  ],
  plug: [
    ["path", { d: "M12 22v-3" }],
    ["path", { d: "M9 8V2" }],
    ["path", { d: "M15 8V2" }],
    ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z" }]
  ],
  windows: [
    ["rect", { x: 3, y: 3, width: 7.5, height: 7.5 }],
    ["rect", { x: 13.5, y: 3, width: 7.5, height: 7.5 }],
    ["rect", { x: 13.5, y: 13.5, width: 7.5, height: 7.5 }],
    ["rect", { x: 3, y: 13.5, width: 7.5, height: 7.5 }]
  ],
  download: [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["polyline", { points: "7 10 12 15 17 10" }],
    ["line", { x1: 12, y1: 15, x2: 12, y2: 3 }]
  ],
  package: [
    ["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }],
    ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }],
    ["line", { x1: 12, y1: 22.08, x2: 12, y2: 12 }]
  ],
  sliders: [
    ["line", { x1: 4, y1: 21, x2: 4, y2: 14 }],
    ["line", { x1: 4, y1: 10, x2: 4, y2: 3 }],
    ["line", { x1: 12, y1: 21, x2: 12, y2: 12 }],
    ["line", { x1: 12, y1: 8, x2: 12, y2: 3 }],
    ["line", { x1: 20, y1: 21, x2: 20, y2: 16 }],
    ["line", { x1: 20, y1: 12, x2: 20, y2: 3 }],
    ["line", { x1: 1, y1: 14, x2: 7, y2: 14 }],
    ["line", { x1: 9, y1: 8, x2: 15, y2: 8 }],
    ["line", { x1: 17, y1: 16, x2: 23, y2: 16 }]
  ],
  printer: [
    ["polyline", { points: "6 9 6 2 18 2 18 9" }],
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
    ["rect", { x: 6, y: 14, width: 12, height: 8 }]
  ],
  wifi: [
    ["path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }],
    ["path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }],
    ["path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }],
    ["line", { x1: 12, y1: 20, x2: 12.01, y2: 20 }]
  ],
  rocket: [
    ["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }],
    ["path", { d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
  ],
  list: [
    ["line", { x1: 8, y1: 6, x2: 21, y2: 6 }],
    ["line", { x1: 8, y1: 12, x2: 21, y2: 12 }],
    ["line", { x1: 8, y1: 18, x2: 21, y2: 18 }],
    ["line", { x1: 3, y1: 6, x2: 3.01, y2: 6 }],
    ["line", { x1: 3, y1: 12, x2: 3.01, y2: 12 }],
    ["line", { x1: 3, y1: 18, x2: 3.01, y2: 18 }]
  ],
  chat: [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]
  ],
  shield: [
    ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }]
  ],
  handshake: [
    ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }],
    ["path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }],
    ["path", { d: "m21 3 1 11h-2" }],
    ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }],
    ["path", { d: "M3 4h8" }]
  ],
  check: [
    ["polyline", { points: "20 6 9 17 4 12" }]
  ],
  pin: [
    ["path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }],
    ["circle", { cx: 12, cy: 10, r: 3 }]
  ],
  clock: [
    ["circle", { cx: 12, cy: 12, r: 10 }],
    ["polyline", { points: "12 6 12 12 16 14" }]
  ],
  mail: [
    ["rect", { x: 2, y: 4, width: 20, height: 16, rx: 2 }],
    ["polyline", { points: "22,6 12,13 2,6" }]
  ],
  zap: [
    ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }]
  ],
  arrow: [
    ["line", { x1: 5, y1: 12, x2: 19, y2: 12 }],
    ["polyline", { points: "12 5 19 12 12 19" }]
  ],
  plus: [
    ["line", { x1: 12, y1: 5, x2: 12, y2: 19 }],
    ["line", { x1: 5, y1: 12, x2: 19, y2: 12 }]
  ],
  phone: [
    ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" }]
  ],
  tg: [
    ["path", { d: "M21.9 4.6c.3-1.4-.5-2-1.5-1.6L2.7 9.9c-1.4.6-1.4 1.4-.2 1.7l4.5 1.4 1.7 5.3c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8l3.1-14.5z" }]
  ],
  up: [
    ["path", { d: "M12 19V5M5 12l7-7 7 7" }]
  ]
};

const makeShape = (desc) => {
  const node = document.createElementNS(NS, desc[0]);
  const attrs = desc[1];
  for (const key of Object.keys(attrs)) {
    node.setAttribute(key, attrs[key]);
  }
  return node;
};

const makeIcon = (name) => {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");

  if (name === "tg") {
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("stroke", "none");
  } else {
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.9");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
  }

  const shapes = ICONS[name] || ICONS.cpu;
  for (const shape of shapes) {
    svg.appendChild(makeShape(shape));
  }
  return svg;
};

let maxGradSeq = 0;
const makeMaxIcon = () => {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");

  const gid = `maxg${++maxGradSeq}`;
  const defs = document.createElementNS(NS, "defs");
  const lg = document.createElementNS(NS, "linearGradient");
  lg.setAttribute("id", gid);
  lg.setAttribute("gradientUnits", "userSpaceOnUse");
  lg.setAttribute("x1", "4");
  lg.setAttribute("y1", "20");
  lg.setAttribute("x2", "21");
  lg.setAttribute("y2", "6");

  const stops = [
    { offset: "0", color: "#35c3f2" },
    { offset: "0.5", color: "#2f4bf0" },
    { offset: "1", color: "#c02fe0" }
  ];

  for (const stop of stops) {
    const s = document.createElementNS(NS, "stop");
    s.setAttribute("offset", stop.offset);
    s.setAttribute("stop-color", stop.color);
    lg.appendChild(s);
  }

  defs.appendChild(lg);
  svg.appendChild(defs);

  const ring = document.createElementNS(NS, "path");
  ring.setAttribute("fill", `url(#${gid})`);
  ring.setAttribute("fill-rule", "evenodd");
  ring.setAttribute("d", "M12 1.5 A9 9 0 1 1 11.99 1.5 Z M12.6 5.8 A4.6 4.6 0 1 0 12.61 5.8 Z");
  svg.appendChild(ring);

  const tail = document.createElementNS(NS, "path");
  tail.setAttribute("fill", `url(#${gid})`);
  tail.setAttribute("d", "M8.2 15.6 C7 17.8 5.8 19.9 4.6 21.8 C6.9 21.3 9.2 20.3 11 18.9 Z");
  svg.appendChild(tail);

  return svg;
};

const injectIcons = () => {
  const nodes = document.querySelectorAll("[data-icon]");
  nodes.forEach((el) => {
    let name = el.getAttribute("data-icon");
    if (name === "chat" && el.closest(".max")) name = "max";
    const svg = name === "max" ? makeMaxIcon() : makeIcon(name);
    svg.setAttribute("class", el.className || "ic");
    if (el.parentNode) el.parentNode.replaceChild(svg, el);
  });
};

const buildMobileMenu = () => {
  const list = document.getElementById("mmServices");
  const dd = document.querySelector(".dd-menu");
  if (!list || !dd || list.children.length) return;

  dd.querySelectorAll("a").forEach((a) => {
    const c = a.cloneNode(true);
    c.className = "sub";
    list.appendChild(c);
  });
};

const initBurger = () => {
  const burger = document.getElementById("burger");
  const mmenu = document.getElementById("mmenu");
  if (!burger || !mmenu) return;

  burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });

  mmenu.addEventListener("click", (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
};

const initDropdown = () => {
  const toggles = document.querySelectorAll(".dd-toggle");
  toggles.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const dd = btn.closest(".dd");
      const open = dd.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dd")) {
      document.querySelectorAll(".dd.open").forEach((d) => {
        d.classList.remove("open");
        const t = d.querySelector(".dd-toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      });
    }
  });
};

const initActiveNav = () => {
  const current = location.pathname;

  const matches = (href) => {
    if (!href) return false;
    try {
      return new URL(href, location.href).pathname === current;
    } catch {
      return false;
    }
  };

  document.querySelectorAll("nav.main a.nl").forEach((a) => {
    if (matches(a.getAttribute("href"))) a.classList.add("active");
  });

  document.querySelectorAll(".dd-menu a").forEach((a) => {
    if (matches(a.getAttribute("href"))) {
      a.classList.add("active");
      const t = document.querySelector(".dd-toggle");
      if (t) t.classList.add("active");
    }
  });
};

const initReveal = () => {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el) => io.observe(el));
};

const initCounters = () => {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  counters.forEach((el) => {
    const target = parseFloat(el.getAttribute("data-count"));
    const dec = parseInt(el.getAttribute("data-dec") || "0", 10);

    if (!("IntersectionObserver" in window)) {
      el.textContent = target.toFixed(dec);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        io.disconnect();
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1400, 1);
          const val = target * (1 - Math.pow(1 - p, 3));
          el.textContent = val.toFixed(dec) + (target >= 100 ? "+" : "");
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    io.observe(el);
  });
};

const initFaq = () => {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;

    q.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      a.style.maxHeight = isOpen ? `${a.scrollHeight}px` : "";
      q.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
};

let revTimer = null;

const initReviews = () => {
  const track = document.getElementById("revTrack");
  if (!track) return;

  const slides = track.children.length;
  let idx = 0;
  const dots = document.getElementById("revDots");
  const prev = document.getElementById("revPrev");
  const next = document.getElementById("revNext");
  if (!dots) return;

  dots.innerHTML = "";
  for (let i = 0; i < slides; i++) {
    const d = document.createElement("i");
    d.setAttribute("data-i", i);
    if (i === 0) d.className = "on";
    dots.appendChild(d);
  }

  const go = (n) => {
    idx = (n + slides) % slides;
    track.style.transform = `translateX(-${idx * 100}%)`;
    Array.from(dots.children).forEach((x, k) => {
      x.classList.toggle("on", k === idx);
    });
  };

  const restart = () => {
    clearInterval(revTimer);
    revTimer = setInterval(() => go(idx + 1), 6000);
  };

  if (prev) prev.addEventListener("click", () => { go(idx - 1); restart(); });
  if (next) next.addEventListener("click", () => { go(idx + 1); restart(); });

  dots.addEventListener("click", (e) => {
    const di = e.target.getAttribute("data-i");
    if (di !== null) { go(parseInt(di, 10)); restart(); }
  });

  let startX = 0;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) { go(idx + (dx < 0 ? 1 : -1)); restart(); }
  }, { passive: true });

  go(0);
  restart();
};

const initFilters = () => {
  const pf = document.getElementById("pfFilters");
  const grid = document.getElementById("pfGrid");
  if (!pf || !grid) return;

  pf.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;

    pf.querySelectorAll(".chip").forEach((x) => x.classList.remove("on"));
    chip.classList.add("on");

    const cat = chip.getAttribute("data-cat");
    grid.querySelectorAll(".pf-item").forEach((it) => {
      it.classList.toggle("hide", cat !== "Все" && it.getAttribute("data-cat") !== cat);
    });
  });
};

let lb = null;
let lbImg = null;
let lbCap = null;
let lbList = [];
let lbI = 0;

const createLightbox = () => {
  if (lb) return;

  lb = document.createElement("div");
  lb.className = "lb";
  lb.id = "lb";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-label", "Просмотр фотографии");

  const bx = document.createElement("button");
  bx.type = "button";
  bx.className = "lb-x";
  bx.setAttribute("aria-label", "Закрыть");
  bx.textContent = "✕";

  const bp = document.createElement("button");
  bp.type = "button";
  bp.className = "lb-p";
  bp.setAttribute("aria-label", "Предыдущее фото");
  bp.textContent = "‹";

  lbImg = document.createElement("img");
  lbImg.id = "lbImg";
  lbImg.alt = "Фотография работы";

  const bn = document.createElement("button");
  bn.type = "button";
  bn.className = "lb-n";
  bn.setAttribute("aria-label", "Следующее фото");
  bn.textContent = "›";

  lbCap = document.createElement("div");
  lbCap.className = "lb-cap";
  lbCap.id = "lbCap";

  lb.appendChild(bx);
  lb.appendChild(bp);
  lb.appendChild(lbImg);
  lb.appendChild(bn);
  lb.appendChild(lbCap);
  document.body.appendChild(lb);

  bx.addEventListener("click", closeLb);
  bp.addEventListener("click", () => lbNav(-1));
  bn.addEventListener("click", () => lbNav(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
};

const showLb = () => {
  lbImg.src = lbList[lbI].img;
  lbImg.alt = lbList[lbI].title;
  lbCap.textContent = lbList[lbI].title;
  lb.classList.add("on");
  document.body.style.overflow = "hidden";
};

const lbNav = (d) => {
  lbI = (lbI + d + lbList.length) % lbList.length;
  showLb();
};

const closeLb = () => {
  if (!lb) return;
  lb.classList.remove("on");
  document.body.style.overflow = "";
};

const initLightbox = () => {
  createLightbox();

  document.addEventListener("click", (e) => {
    const fig = e.target.closest(".pf-item");
    if (!fig) return;
    const grid = fig.closest(".pf-grid");
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll(".pf-item")).filter(
      (x) => !x.classList.contains("hide")
    );

    lbList = items.map((x) => {
      const img = x.querySelector("img");
      const cap = x.querySelector(".cap b");
      return {
        img: img.getAttribute("src"),
        title: cap ? cap.textContent : img.getAttribute("alt")
      };
    });

    lbI = items.indexOf(fig);
    if (lbI < 0) lbI = 0;
    showLb();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeLb(); closeModal(); }
    if (!lb || !lb.classList.contains("on")) return;
    if (e.key === "ArrowRight") lbNav(1);
    if (e.key === "ArrowLeft") lbNav(-1);
  });
};

let modal = null;
let modalBody = null;

const createModal = () => {
  if (modal) return;

  modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-label", "Форма заявки");

  const box = document.createElement("div");
  box.className = "modal-box";

  const bx = document.createElement("button");
  bx.type = "button";
  bx.className = "modal-x";
  bx.setAttribute("aria-label", "Закрыть окно");
  bx.textContent = "✕";

  modalBody = document.createElement("div");
  modalBody.id = "modalBody";

  box.appendChild(bx);
  box.appendChild(modalBody);
  modal.appendChild(box);
  document.body.appendChild(modal);

  bx.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
};

const openModal = (topic) => {
  if (!modal) createModal();

  modalBody.innerHTML = "";

  const h = document.createElement("h3");
  h.textContent = topic || "Заявка";

  const p = document.createElement("p");
  p.textContent = "Оставьте контакты — перезвоню в течение 15 минут и бесплатно проконсультирую.";

  modalBody.appendChild(h);
  modalBody.appendChild(p);

  const src = document.querySelector(".lead-form");
  if (src) {
    const form = src.cloneNode(true);
    form.querySelectorAll("[id]").forEach((el) => { el.id = `${el.id}-md`; });
    form.querySelectorAll("label[for]").forEach((el) => {
      el.setAttribute("for", `${el.getAttribute("for")}-md`);
    });
    modalBody.appendChild(form);
  }

  modal.classList.add("on");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("on");
  document.body.style.overflow = "";
};

const initModalTriggers = () => {
  createModal();
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".js-open-modal");
    if (b) openModal(b.getAttribute("data-topic"));
  });
};

const initForms = () => {
  document.addEventListener("submit", (e) => {
    const f = e.target;
    if (!f.classList || !f.classList.contains("lead-form")) return;
    e.preventDefault();

    const name = f.querySelector('[name="name"]');
    const phone = f.querySelector('[name="phone"]');
    const consent = f.querySelector('[name="consent"]');
    let ok = true;

    const mark = (el, bad) => {
      if (!el) return;
      const row = el.closest(".f-row") || el.closest(".consent");
      if (!row) return;
      row.classList.toggle("invalid", bad);
      if (bad) ok = false;
    };

    mark(name, !name.value.trim() || name.value.trim().length < 2);
    mark(phone, phone.value.replace(/\D/g, "").length < 11);
    if (consent) mark(consent, !consent.checked);
    if (!ok) return;

    const wrap = document.createElement("div");
    wrap.className = "form-ok";

    const ic = document.createElement("div");
    ic.className = "ok-ic";
    const okSvg = makeIcon("check");
    okSvg.setAttribute("class", "ic");
    ic.appendChild(okSvg);

    const h = document.createElement("h3");
    h.textContent = "Заявка отправлена!";
    const p = document.createElement("p");
    p.style.color = "var(--muted)";
    p.style.marginTop = "8px";
    p.textContent = "Свяжусь с вами в течение 15 минут. А пока — напишите в Telegram или MAX, это быстрее всего.";

    const links = document.createElement("div");
    links.className = "cta-btns";

    const aTg = document.createElement("a");
    aTg.className = "btn sm";
    aTg.href = "https://t.me/ArtemNasukha";
    aTg.target = "_blank";
    aTg.rel = "noopener";
    aTg.textContent = "Telegram";

    const aMax = document.createElement("a");
    aMax.className = "btn sm ghost";
    aMax.href = "https://max.ru";
    aMax.target = "_blank";
    aMax.rel = "noopener";
    aMax.textContent = "MAX";

    links.appendChild(aTg);
    links.appendChild(aMax);

    wrap.appendChild(ic);
    wrap.appendChild(h);
    wrap.appendChild(p);
    wrap.appendChild(links);

    f.innerHTML = "";
    f.appendChild(wrap);
  });

  document.addEventListener("input", (e) => {
    const i = e.target;
    if (!i.getAttribute || i.getAttribute("name") !== "phone") return;

    let d = i.value.replace(/\D/g, "");
    if (d.charAt(0) === "8") d = "7" + d.slice(1);
    if (d.charAt(0) !== "7") d = "7" + d;
    d = d.slice(0, 11);

    let r = "+7";
    if (d.length > 1) r += ` (${d.slice(1, 4)}`;
    if (d.length >= 4) r += `) ${d.slice(4, 7)}`;
    if (d.length >= 7) r += `-${d.slice(7, 9)}`;
    if (d.length >= 9) r += `-${d.slice(9, 11)}`;

    i.value = r;

    const row = i.closest(".f-row");
    if (row) row.classList.remove("invalid");
  });
};

const initToTop = () => {
  const fab = document.getElementById("fabUp");
  if (!fab) return;

  window.addEventListener("scroll", () => {
    fab.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });

  fab.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  buildMobileMenu();
  initBurger();
  initDropdown();
  initActiveNav();
  initReveal();
  initCounters();
  initFaq();
  initReviews();
  initFilters();
  initLightbox();
  initModalTriggers();
  initForms();
  initToTop();
});
