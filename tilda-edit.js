/* =====================================================================
 *  EB.design — нақты үлгіге өңдеу қабаты (text + image) + Kaspi жүктеу
 *  Бұл скрипт Tilda көшірмесінің ҮСТІНЕ қосылады. Дизайнды өзгертпейді —
 *  тек клиентке мәтін/суретті өзгертіп, өз нұсқасын жүктеуге мүмкіндік береді.
 * ===================================================================== */
(function () {
  "use strict";

  // ⚙️ БАПТАУ
  var CFG = {
    WHATSAPP: "77765573009",
    KASPI: "+7 776 557 30 09",
    NAME: "Есболат",
    PRICE: 2990,
    CODE: "TOI2026", // ⚠️ құпия код — төлегеннен кейін клиентке бересіз
  };

  var editing = false;

  // ---------- Стиль ----------
  var st = document.createElement("style");
  st.id = "ebedit-style";
  st.textContent =
    "#ebedit-bar{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:2147483000;display:flex;gap:8px;font-family:'Inter',Arial,sans-serif}" +
    "#ebedit-bar button{border:none;border-radius:12px;padding:13px 20px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 12px 30px rgba(0,0,0,.4)}" +
    "#ebedit-toggle{background:#7c5cff;color:#fff}" +
    "#ebedit-toggle.on{background:#e2483b}" +
    "#ebedit-get{background:#19c8c0;color:#fff}" +
    ".ebedit-on [data-ebtext]{outline:2px dashed #7c5cff;outline-offset:3px;cursor:text;min-width:8px}" +
    ".ebedit-on .ebedit-img{outline:3px dashed #19c8c0;outline-offset:2px;cursor:pointer}" +
    "#ebedit-hint{position:fixed;left:50%;transform:translateX(-50%);top:14px;z-index:2147483000;background:#111;color:#fff;font-family:'Inter',Arial,sans-serif;font-size:13px;padding:9px 16px;border-radius:99px;box-shadow:0 8px 20px rgba(0,0,0,.4)}" +
    "#ebedit-modal{position:fixed;inset:0;z-index:2147483600;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.7);font-family:'Inter',Arial,sans-serif;padding:18px}" +
    "#ebedit-modal.on{display:flex}" +
    "#ebedit-box{background:#fff;color:#161827;border-radius:20px;max-width:360px;width:100%;padding:26px;text-align:center;position:relative}" +
    "#ebedit-box .k{display:inline-block;background:#F14635;color:#fff;font-weight:800;font-size:20px;padding:7px 14px;border-radius:10px}" +
    "#ebedit-box h3{font-size:20px;margin:14px 0 6px}" +
    "#ebedit-box p{color:#5a6075;font-size:14px;margin:0 0 14px}" +
    "#ebedit-box .price{font-size:32px;font-weight:900;color:#7c5cff;margin:6px 0 14px}" +
    "#ebedit-box .card{background:#f6f7fb;border-radius:12px;padding:12px 14px;margin-bottom:14px;font-size:14px;text-align:left}" +
    "#ebedit-box .card b{float:right}" +
    "#ebedit-box button{display:block;width:100%;border:none;border-radius:11px;padding:13px;font-size:15px;font-weight:700;cursor:pointer;margin-top:8px;font-family:inherit}" +
    "#ebedit-box .b1{background:#F14635;color:#fff}#ebedit-box .b2{background:#25d366;color:#fff}#ebedit-box .b3{background:#7c5cff;color:#fff}#ebedit-box .bg{background:#eef0f7;color:#161827}" +
    "#ebedit-box input{width:100%;text-align:center;letter-spacing:4px;text-transform:uppercase;font-size:20px;font-weight:800;padding:12px;border:2px solid #e2e5ef;border-radius:11px;margin-bottom:8px;font-family:inherit}" +
    "#ebedit-box .err{color:#e2483b;font-size:13px;font-weight:600;display:none;margin:0 0 8px}" +
    "#ebedit-box .x{position:absolute;top:12px;right:14px;background:none;border:none;font-size:20px;width:auto;margin:0;color:#888;cursor:pointer}";
  document.head.appendChild(st);

  // ---------- Toolbar ----------
  var bar = document.createElement("div");
  bar.id = "ebedit-bar";
  bar.innerHTML =
    '<button id="ebedit-toggle" type="button">✏️ Өңдеу</button>' +
    '<button id="ebedit-get" type="button" style="display:none">✅ Дайын — алу</button>';
  document.body.appendChild(bar);

  var hint = null;

  // ---------- Өңделетін элементтерді белгілеу ----------
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, svg: 1, SVG: 1 };
  function isLeafText(el) {
    if (!el || SKIP[el.tagName]) return false;
    if (el.closest("#ebedit-bar,#ebedit-modal,#ebedit-hint")) return false;
    if (!el.childNodes.length) return false;
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === 1) return false; // элемент-бала бар
    }
    return el.textContent.replace(/\s/g, "").length > 0;
  }

  function eachTextEl(fn) {
    var nodes = document.querySelectorAll(
      "div,span,p,h1,h2,h3,h4,h5,a,li,td,th,strong,em,b"
    );
    for (var i = 0; i < nodes.length; i++) if (isLeafText(nodes[i])) fn(nodes[i]);
  }

  function collectImages() {
    var imgs = [];
    var list = document.querySelectorAll("img");
    for (var i = 0; i < list.length; i++) {
      var im = list[i];
      if (im.closest("#ebedit-bar,#ebedit-modal")) continue;
      if (im.width < 30 && im.height < 30) continue; // ұсақ иконкалар
      imgs.push(im);
    }
    return imgs;
  }

  function swapImage(img) {
    var inp = document.createElement("input");
    inp.type = "file";
    inp.accept = "image/*";
    inp.onchange = function () {
      var f = inp.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        img.removeAttribute("data-original");
        img.removeAttribute("srcset");
        img.src = r.result;
      };
      r.readAsDataURL(f);
    };
    inp.click();
  }

  function enableEdit() {
    editing = true;
    document.body.classList.add("ebedit-on");
    eachTextEl(function (el) {
      el.setAttribute("data-ebtext", "1");
      el.setAttribute("contenteditable", "true");
    });
    collectImages().forEach(function (im) {
      im.classList.add("ebedit-img");
      im.addEventListener("click", im._ebh = function (e) {
        if (!editing) return;
        e.preventDefault();
        e.stopPropagation();
        swapImage(im);
      });
    });
    var tg = document.getElementById("ebedit-toggle");
    tg.textContent = "✓ Болды";
    tg.classList.add("on");
    document.getElementById("ebedit-get").style.display = "";
    if (!hint) {
      hint = document.createElement("div");
      hint.id = "ebedit-hint";
      hint.textContent = "Мәтінді басып өзгертіңіз · суретті басып ауыстырыңыз";
      document.body.appendChild(hint);
    }
  }

  function disableEdit() {
    editing = false;
    document.body.classList.remove("ebedit-on");
    var tg = document.getElementById("ebedit-toggle");
    tg.textContent = "✏️ Өңдеу";
    tg.classList.remove("on");
    if (hint) { hint.remove(); hint = null; }
  }

  document.getElementById("ebedit-toggle").addEventListener("click", function () {
    if (editing) disableEdit();
    else enableEdit();
  });

  // ---------- Жүктеп алу (өңделген бетті) ----------
  function downloadEdited() {
    var clone = document.documentElement.cloneNode(true);
    // өңдегіш іздерін тазалау
    ["#ebedit-bar", "#ebedit-style", "#ebedit-modal", "#ebedit-hint"].forEach(function (sel) {
      var el = clone.querySelector(sel);
      if (el) el.remove();
    });
    var ce = clone.querySelectorAll("[contenteditable]");
    for (var i = 0; i < ce.length; i++) {
      ce[i].removeAttribute("contenteditable");
      ce[i].removeAttribute("data-ebtext");
    }
    var bodyEl = clone.querySelector("body");
    if (bodyEl) bodyEl.classList.remove("ebedit-on");
    var imgs = clone.querySelectorAll(".ebedit-img");
    for (var j = 0; j < imgs.length; j++) imgs[j].classList.remove("ebedit-img");

    var html = "<!DOCTYPE html>\n" + clone.outerHTML;
    var blob = new Blob([html], { type: "text/html;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "menin-shaqyrtuym.html";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ---------- Kaspi модалы (код-жүйесі) ----------
  var modal = document.createElement("div");
  modal.id = "ebedit-modal";
  modal.innerHTML =
    '<div id="ebedit-box">' +
    '<button class="x" type="button" data-close>✕</button>' +
    '<div id="eb-pay">' +
    '<span class="k">kaspi.kz</span>' +
    "<h3>Шақыртуды алу</h3>" +
    "<p>Шақыртуыңыз дайын! Алу үшін:</p>" +
    '<div class="price">' + CFG.PRICE.toLocaleString("ru-RU") + " ₸</div>" +
    '<div class="card">Kaspi нөмірі <b>' + CFG.KASPI + "</b><br>Алушы <b>" + CFG.NAME + "</b></div>" +
    '<button class="b1" data-kaspi>🔴 Kaspi-де төлеу</button>' +
    '<button class="b2" data-getcode>💬 Төледім — WhatsApp-пен код алу</button>' +
    '<button class="bg" data-havecode>🔑 Кодым бар</button>' +
    "</div>" +
    '<div id="eb-code" style="display:none">' +
    '<span class="k">kaspi.kz</span>' +
    "<h3>Кодты енгізіңіз</h3>" +
    "<p>Дизайнер берген кодты жазыңыз.</p>" +
    '<input id="eb-codein" type="text" placeholder="КОД" autocomplete="off">' +
    '<p class="err" id="eb-err">Код қате. Қайта тексеріңіз.</p>' +
    '<button class="b3" data-unlock>🔓 Ашу</button>' +
    '<button class="bg" data-back>← Артқа</button>' +
    "</div>" +
    '<div id="eb-done" style="display:none">' +
    '<div style="font-size:48px">🎉</div>' +
    "<h3>Рахмет! Дайын</h3>" +
    "<p>Файлды жүктеп алып, қонақтарға жіберіңіз.</p>" +
    '<button class="b3" data-download>⬇️ Шақыртуды жүктеп алу</button>' +
    "</div>" +
    "</div>";
  document.body.appendChild(modal);

  function show(id) {
    ["eb-pay", "eb-code", "eb-done"].forEach(function (s) {
      document.getElementById(s).style.display = s === id ? "block" : "none";
    });
  }

  document.getElementById("ebedit-get").addEventListener("click", function () {
    show("eb-pay");
    modal.classList.add("on");
  });

  modal.addEventListener("click", function (e) {
    var t = e.target;
    if (t.hasAttribute("data-close") || t === modal) { modal.classList.remove("on"); return; }
    if (t.hasAttribute("data-kaspi")) { window.open("https://kaspi.kz/", "_blank"); return; }
    if (t.hasAttribute("data-getcode")) {
      var txt = "Сәлеметсіз бе! Шақырту дайындадым, төледім — код керек.%0A(Үлгі: " +
        encodeURIComponent(document.title) + ")";
      window.open("https://wa.me/" + CFG.WHATSAPP + "?text=" + txt, "_blank");
      return;
    }
    if (t.hasAttribute("data-havecode")) { document.getElementById("eb-err").style.display = "none"; show("eb-code"); return; }
    if (t.hasAttribute("data-back")) { show("eb-pay"); return; }
    if (t.hasAttribute("data-unlock")) {
      var v = (document.getElementById("eb-codein").value || "").trim().toUpperCase();
      if (v === CFG.CODE.toUpperCase()) show("eb-done");
      else document.getElementById("eb-err").style.display = "block";
      return;
    }
    if (t.hasAttribute("data-download")) { downloadEdited(); return; }
  });

  // #edit сілтемесімен ашылса — бірден өңдеу режимі
  if (location.hash === "#edit") {
    if (document.readyState === "complete") enableEdit();
    else window.addEventListener("load", enableEdit);
  }
})();
