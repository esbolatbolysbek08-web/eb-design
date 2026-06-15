/* =====================================================================
 *  EB.design — нақты үлгіге өңдеу қабаты (мәтін + сурет + фон) + Kaspi жүктеу
 *  Tilda көшірмесінің ҮСТІНЕ қосылады. Дизайнды өзгертпейді — клиент мәтін/суретті
 *  өзгертіп, өз нұсқасын жүктеп ала алады.
 * ===================================================================== */
(function () {
  "use strict";

  // Қайта-қосылудан қорғаныс (қос include / Tilda кэші)
  if (document.getElementById("ebedit-bar")) return;

  // ⚙️ БАПТАУ
  var CFG = {
    WHATSAPP: "77765573009",
    KASPI: "+7 776 557 30 09",
    NAME: "Есболат",
    PRICE: 5000,
    CODE: "TOI2026", // ⚠️ құпия код — төлегеннен кейін клиентке бересіз
  };
  var BLUE = "#3b82f6"; // Telegram көк

  var editing = false;
  var hint = null;

  // ---------- Стиль ----------
  var st = document.createElement("style");
  st.id = "ebedit-style";
  st.textContent =
    "#ebedit-bar{position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:2147483000;display:flex;gap:8px;font-family:'Inter',Arial,sans-serif}" +
    "#ebedit-bar button{border:none;border-radius:12px;padding:13px 20px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 12px 30px rgba(0,0,0,.4)}" +
    "#ebedit-toggle{background:" + BLUE + ";color:#fff}" +
    "#ebedit-toggle.on{background:#e2483b}" +
    "#ebedit-get{background:#2563eb;color:#fff}" +
    ".ebedit-on [data-ebtext]{background:rgba(59,130,246,.12);box-shadow:0 0 0 1px rgba(59,130,246,.5);border-radius:5px;cursor:text}" +
    ".ebedit-on [data-ebtext]:hover{background:rgba(59,130,246,.2)}" +
    ".ebedit-on [data-ebtext]:focus{background:rgba(59,130,246,.06);box-shadow:0 0 0 2px " + BLUE + ";outline:none}" +
    ".ebedit-on .ebedit-img{box-shadow:0 0 0 3px rgba(59,130,246,.85)!important;cursor:pointer!important}" +
    ".ebedit-on .ebedit-img:hover{box-shadow:0 0 0 4px " + BLUE + "!important}" +
    "#ebedit-hint{position:fixed;left:50%;transform:translateX(-50%);top:14px;z-index:2147483000;background:#111;color:#fff;font-family:'Inter',Arial,sans-serif;font-size:13px;padding:9px 16px;border-radius:99px;box-shadow:0 8px 20px rgba(0,0,0,.4)}" +
    "#ebedit-modal{position:fixed;inset:0;z-index:2147483600;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.7);font-family:'Inter',Arial,sans-serif;padding:18px}" +
    "#ebedit-modal.on{display:flex}" +
    "#ebedit-box{background:#fff;color:#161827;border-radius:20px;max-width:360px;width:100%;padding:26px;text-align:center;position:relative}" +
    "#ebedit-box .k{display:inline-block;background:#F14635;color:#fff;font-weight:800;font-size:20px;padding:7px 14px;border-radius:10px}" +
    "#ebedit-box h3{font-size:20px;margin:14px 0 6px}" +
    "#ebedit-box p{color:#5a6075;font-size:14px;margin:0 0 14px}" +
    "#ebedit-box .price{font-size:32px;font-weight:900;color:" + BLUE + ";margin:6px 0 14px}" +
    "#ebedit-box .card{background:#f6f7fb;border-radius:12px;padding:12px 14px;margin-bottom:14px;font-size:14px;text-align:left}" +
    "#ebedit-box .card b{float:right}" +
    "#ebedit-box button{display:block;width:100%;border:none;border-radius:11px;padding:13px;font-size:15px;font-weight:700;cursor:pointer;margin-top:8px;font-family:inherit}" +
    "#ebedit-box .b1{background:#F14635;color:#fff}#ebedit-box .b2{background:#25d366;color:#fff}#ebedit-box .b3{background:" + BLUE + ";color:#fff}#ebedit-box .bg{background:#eef0f7;color:#161827}" +
    "#ebedit-box input{width:100%;text-align:center;letter-spacing:4px;text-transform:uppercase;font-size:20px;font-weight:800;padding:12px;border:2px solid #e2e5ef;border-radius:11px;margin-bottom:8px;font-family:inherit}" +
    "#ebedit-box .err{color:#e2483b;font-size:13px;font-weight:600;display:none;margin:0 0 8px}" +
    "#ebedit-box .x{position:absolute;top:12px;right:14px;background:none;border:none;font-size:20px;width:auto;margin:0;color:#888;cursor:pointer}" +
    "#ebedit-music,#ebedit-date{background:#1f3149;color:#fff}" +
    "#ebedit-flash{position:fixed;left:50%;bottom:80px;transform:translateX(-50%);z-index:2147483600;background:#111;color:#fff;font-family:'Inter',Arial,sans-serif;font-size:14px;font-weight:600;padding:11px 18px;border-radius:99px;box-shadow:0 10px 24px rgba(0,0,0,.45);transition:opacity .4s}" +
    "#ebedit-datebox{position:fixed;inset:0;z-index:2147483600;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.7);font-family:'Inter',Arial,sans-serif;padding:18px}" +
    "#ebedit-datebox.on{display:flex}" +
    "#ebedit-datebox .ebd-card{background:#fff;color:#161827;border-radius:20px;max-width:330px;width:100%;padding:24px;text-align:center;position:relative}" +
    "#ebedit-datebox h3{font-size:19px;margin:0 0 6px}" +
    "#ebedit-datebox p{font-size:13px;color:#5a6075;margin:0 0 14px}" +
    "#ebedit-datebox input[type=date]{width:100%;font-size:17px;padding:12px;border:2px solid #e2e5ef;border-radius:11px;margin-bottom:14px;font-family:inherit;text-align:center}" +
    "#ebedit-datebox .b3{display:block;width:100%;border:none;border-radius:11px;padding:13px;font-size:15px;font-weight:700;cursor:pointer;background:" + BLUE + ";color:#fff}" +
    "#ebedit-datebox .x{position:absolute;top:10px;right:14px;background:none;border:none;font-size:20px;color:#888;cursor:pointer}";
  (document.head || document.documentElement).appendChild(st);

  // ---------- Toolbar ----------
  var bar = document.createElement("div");
  bar.id = "ebedit-bar";
  bar.innerHTML =
    '<button id="ebedit-toggle" type="button">✏️ Өңдеу</button>' +
    '<button id="ebedit-music" type="button" style="display:none">🎵 Музыка</button>' +
    '<button id="ebedit-date" type="button" style="display:none">📅 Күні</button>' +
    '<button id="ebedit-get" type="button" style="display:none">✅ Дайын — алу</button>';
  document.body.appendChild(bar);

  // ---------- Көмекшілер ----------
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, svg: 1, SVG: 1, IMG: 1, BUTTON: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1 };
  function inUI(el) {
    return el && el.closest && el.closest("#ebedit-bar,#ebedit-modal,#ebedit-hint,#ebedit-style");
  }
  function isExcluded(el) {
    // батырма / сілтеме / Tilda жапсырмасы — өңделмейді
    return !!(el.closest && el.closest(
      'a,button,.t-btn,.t-submit,.t396__submit,.t-menu__link,.tn-atom__btn-text,.t-tildalabel,.t-copyright,[data-elem-type="button"],[href]'
    ));
  }
  function isSkippable(el) {
    return !el || SKIP[el.tagName] || inUI(el) || isExcluded(el);
  }
  function hasText(el) {
    return el.textContent && el.textContent.replace(/\s/g, "").length > 0;
  }
  function markText(el) {
    el.setAttribute("data-ebtext", "1");
    el.setAttribute("contenteditable", "true");
    el.setAttribute("spellcheck", "false");
    el.setAttribute("autocapitalize", "off");
    el.setAttribute("autocorrect", "off");
  }

  function enableTextEditing() {
    var atoms = document.querySelectorAll(
      ".tn-atom, .t-text, .t-name, .t-descr, .t-title, .t-heading, .t-card__title, .t-card__descr"
    );
    for (var i = 0; i < atoms.length; i++) {
      var a = atoms[i];
      if (isSkippable(a) || !hasText(a)) continue;
      if (a.querySelector(".tn-atom")) continue;
      if (a.querySelector("img,svg,input,textarea,button")) continue;
      markText(a);
    }
    var nodes = document.querySelectorAll("h1,h2,h3,h4,h5,p,span,li,td,th,strong,em,b");
    for (var j = 0; j < nodes.length; j++) {
      var el = nodes[j];
      if (isSkippable(el) || !hasText(el)) continue;
      if (el.closest("[data-ebtext]")) continue;
      var hasChildEl = false;
      for (var k = 0; k < el.childNodes.length; k++) {
        if (el.childNodes[k].nodeType === 1) { hasChildEl = true; break; }
      }
      if (!hasChildEl) markText(el);
    }
  }

  // ---------- Суреттер (<img> + фон) ----------
  function collectImgs() {
    var out = [];
    var list = document.querySelectorAll("img");
    for (var i = 0; i < list.length; i++) {
      var im = list[i];
      if (inUI(im)) continue;
      var r = im.getBoundingClientRect();
      if (r.width < 32 && r.height < 32) continue;
      out.push(im);
    }
    return out;
  }
  function collectBgEls() {
    var out = [], seen = [];
    var list = document.querySelectorAll(
      "[data-original]:not(img), .t-cover__carrier, .t396__carrier, .t-bgimg, [data-bgimgfield]"
    );
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.tagName === "IMG" || inUI(el)) continue;
      var bg = "";
      try { bg = getComputedStyle(el).backgroundImage; } catch (e) {}
      var hasBg = el.hasAttribute("data-original") || (bg && bg.indexOf("url(") > -1);
      if (!hasBg) continue;
      var r = el.getBoundingClientRect();
      if (r.width < 40 && r.height < 40) continue;
      if (seen.indexOf(el) > -1) continue;
      seen.push(el);
      out.push(el);
    }
    return out;
  }

  // Суретті сығу (телефон фотолары үлкен болмауы үшін)
  function fileToDataURL(file, cb) {
    var r = new FileReader();
    r.onload = function () {
      var raw = r.result;
      var img = new Image();
      img.onload = function () {
        try {
          var MAX = 1600;
          var ratio = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight));
          var w = Math.round(img.naturalWidth * ratio);
          var h = Math.round(img.naturalHeight * ratio);
          var c = document.createElement("canvas");
          c.width = w; c.height = h;
          var ctx = c.getContext("2d");
          var isPng = /png/i.test(file.type);
          if (!isPng) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); }
          ctx.drawImage(img, 0, 0, w, h);
          var out = isPng ? c.toDataURL("image/png") : c.toDataURL("image/jpeg", 0.82);
          cb(out.length < raw.length ? out : raw);
        } catch (e) { cb(raw); }
      };
      img.onerror = function () { cb(raw); };
      img.src = raw;
    };
    r.readAsDataURL(file);
  }

  function swapTarget(el) {
    var inp = document.createElement("input");
    inp.type = "file";
    inp.accept = "image/*";
    inp.onchange = function () {
      var f = inp.files[0];
      if (!f) return;
      fileToDataURL(f, function (data) {
        if (el.tagName === "IMG") {
          el.removeAttribute("data-original");
          el.removeAttribute("srcset");
          el.removeAttribute("data-srcset");
          el.src = data;
        } else {
          el.removeAttribute("data-original");
          el.classList.remove("lazyload", "t-bgimg");
          el.style.backgroundImage = "url('" + data + "')";
          el.style.backgroundSize = el.style.backgroundSize || "cover";
          el.style.backgroundPosition = el.style.backgroundPosition || "center";
        }
      });
    };
    inp.click();
  }

  function bindImg(el, isBg) {
    el.classList.add("ebedit-img");
    el.addEventListener("click", el._ebh = function (e) {
      if (!editing) return;
      if (isBg && e.target !== el) return; // фон контейнерінде мәтінді бассa — өткіземіз
      e.preventDefault();
      e.stopPropagation();
      swapTarget(el);
    });
  }

  // Өңдеу кезінде сілтеме навигациясын/Tilda popup-ын бұғаттау (capture)
  function clickGuard(e) {
    if (!editing) return;
    var t = e.target;
    if (inUI(t)) return;
    if (t.classList && t.classList.contains("ebedit-img")) return;
    if (t.closest && t.closest(".ebedit-img")) return;
    var a = t.closest && t.closest("a");
    if (a) { e.preventDefault(); e.stopPropagation(); }
  }

  function enableEdit() {
    editing = true;
    document.body.classList.add("ebedit-on");
    enableTextEditing();
    collectImgs().forEach(function (im) { bindImg(im, false); });
    collectBgEls().forEach(function (el) { bindImg(el, true); });
    if (!document._ebGuard) {
      document._ebGuard = clickGuard;
      document.addEventListener("click", document._ebGuard, true);
    }
    var tg = document.getElementById("ebedit-toggle");
    tg.textContent = "✓ Болды";
    tg.classList.add("on");
    document.getElementById("ebedit-get").style.display = "";
    var mbtn = document.getElementById("ebedit-music");
    if (mbtn) mbtn.style.display = pageHasAudio() ? "" : "none";
    var dbtn = document.getElementById("ebedit-date");
    if (dbtn) dbtn.style.display = pageHasCountdown() ? "" : "none";
    if (!hint) {
      hint = document.createElement("div");
      hint.id = "ebedit-hint";
      hint.textContent = "Мәтін/суретті бас та өзгерт · 🎵 музыка · 📅 күні — батырмалар";
      document.body.appendChild(hint);
    }
  }

  function disableEdit() {
    editing = false;
    document.body.classList.remove("ebedit-on");
    var tg = document.getElementById("ebedit-toggle");
    tg.textContent = "✏️ Өңдеу";
    tg.classList.remove("on");
    var mbtn = document.getElementById("ebedit-music"); if (mbtn) mbtn.style.display = "none";
    var dbtn = document.getElementById("ebedit-date"); if (dbtn) dbtn.style.display = "none";
    if (hint) { hint.remove(); hint = null; }
  }

  // ---------- Шағын тост хабарлама ----------
  function flash(msg) {
    var t = document.createElement("div");
    t.id = "ebedit-flash";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.style.opacity = "0"; }, 1700);
    setTimeout(function () { if (t.parentNode) t.remove(); }, 2200);
  }

  // ---------- 🎵 Музыка ауыстыру ----------
  function pageHasAudio() {
    if (document.querySelector("audio")) return true;
    var s = document.querySelectorAll("script");
    for (var i = 0; i < s.length; i++) {
      if (!s[i].src && /\.mp3/i.test(s[i].textContent)) return true;
    }
    return false;
  }
  function rewriteMp3InScripts(dataUri) {
    var s = document.querySelectorAll("script");
    for (var i = 0; i < s.length; i++) {
      if (s[i].src) continue;
      if (/https?:\/\/[^"'\s)]*\.mp3/i.test(s[i].textContent)) {
        s[i].textContent = s[i].textContent.replace(/https?:\/\/[^"'\s)]*\.mp3/gi, dataUri);
      }
    }
  }
  function swapMusic() {
    var inp = document.createElement("input");
    inp.type = "file"; inp.accept = "audio/*,.mp3";
    inp.onchange = function () {
      var f = inp.files[0]; if (!f) return;
      if (f.size > 12 * 1024 * 1024) { flash("⚠️ Файл тым үлкен (12МБ-тан кем болсын)"); return; }
      flash("🎵 Жүктелуде...");
      var r = new FileReader();
      r.onload = function () {
        var data = r.result;
        var auds = document.querySelectorAll("audio");
        for (var i = 0; i < auds.length; i++) {
          var a = auds[i];
          var srcs = a.querySelectorAll("source");
          for (var j = 0; j < srcs.length; j++) { srcs[j].removeAttribute("srcset"); srcs[j].src = data; }
          a.src = data;
          try { a.load(); } catch (e) {}
        }
        rewriteMp3InScripts(data);
        flash("🎵 Музыка ауыстырылды ✓");
      };
      r.readAsDataURL(f);
    };
    inp.click();
  }

  // ---------- 📅 Күні (кері санақ) ----------
  function findCountdownScripts() {
    var out = [], s = document.querySelectorAll("script");
    for (var i = 0; i < s.length; i++) {
      if (s[i].src) continue;
      var m = s[i].textContent.match(/new Date\(\s*["'](\d{4}-\d{2}-\d{2})[^"']*["']\s*\)/);
      if (m) out.push({ el: s[i], date: m[1] });
    }
    return out;
  }
  function pageHasCountdown() { return findCountdownScripts().length > 0; }
  function applyDate(newDate) {
    var cs = findCountdownScripts();
    if (!cs.length) return;
    // ескі санақтарды тоқтату (қайталанбау үшін)
    var maxId = setInterval(function () {}, 100000);
    clearInterval(maxId);
    for (var k = 1; k <= maxId; k++) { clearInterval(k); }
    // датаны жаңартып, скриптті қайта іске қосу
    cs.forEach(function (c) {
      var newText = c.el.textContent.replace(/(new Date\(\s*["'])\d{4}-\d{2}-\d{2}/, "$1" + newDate);
      var fresh = document.createElement("script");
      fresh.textContent = newText;
      if (c.el.parentNode) c.el.parentNode.replaceChild(fresh, c.el);
    });
    flash("📅 Күні жаңартылды ✓");
  }
  function openDateEditor() {
    var cs = findCountdownScripts();
    if (!cs.length) { flash("Санақ табылмады"); return; }
    var box = document.getElementById("ebedit-datebox");
    if (!box) {
      box = document.createElement("div");
      box.id = "ebedit-datebox";
      box.innerHTML =
        '<div class="ebd-card"><button class="x" type="button" data-dclose>✕</button>' +
        '<h3>📅 Мереке күні</h3><p>Кері санақ осы күнге дейін есептейді</p>' +
        '<input type="date" id="ebd-input"><button class="b3" type="button" data-dapply>Сақтау</button></div>';
      document.body.appendChild(box);
      box.addEventListener("click", function (e) {
        if (e.target.hasAttribute("data-dclose") || e.target === box) { box.classList.remove("on"); return; }
        if (e.target.hasAttribute("data-dapply")) {
          var v = document.getElementById("ebd-input").value;
          if (v) { applyDate(v); box.classList.remove("on"); }
        }
      });
    }
    document.getElementById("ebd-input").value = findCountdownScripts()[0].date;
    box.classList.add("on");
  }

  document.getElementById("ebedit-music").addEventListener("click", swapMusic);
  document.getElementById("ebedit-date").addEventListener("click", openDateEditor);

  document.getElementById("ebedit-toggle").addEventListener("click", function () {
    editing ? disableEdit() : enableEdit();
  });

  // ---------- Жүктеу алдында lazyload суреттерін «материалдандыру» ----------
  function pickFromSrcset(ss) {
    if (!ss) return "";
    var best = "", bestW = -1;
    ss.split(",").forEach(function (part) {
      var seg = part.trim().split(/\s+/);
      var url = seg[0];
      var w = seg[1] ? parseInt(seg[1], 10) : 0;
      if (url && w >= bestW) { bestW = w; best = url; }
    });
    return best;
  }
  function materialize() {
    // <img>: placeholder/бос src-ті нақты URL-мен толтыру
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      if (inUI(im)) continue;
      var src = im.getAttribute("src") || "";
      if (/^data:image\/(png|jpeg|jpg|webp)/i.test(src)) continue; // ауыстырылған — қалдырамыз
      var orig = im.getAttribute("data-original") ||
        pickFromSrcset(im.getAttribute("data-srcset")) ||
        pickFromSrcset(im.getAttribute("srcset"));
      if (orig && (!src || /^data:image\/gif/i.test(src) || /transparent|spacer|placeholder|blank/i.test(src))) {
        im.setAttribute("src", orig);
      }
      im.removeAttribute("data-original");
      im.removeAttribute("srcset");
      im.removeAttribute("data-srcset");
    }
    // фон: computed немесе data-original-ды inline жазу
    var bgs = document.querySelectorAll("[data-original], .t-cover__carrier, .t396__carrier, .t-bgimg, [data-bgimgfield]");
    for (var j = 0; j < bgs.length; j++) {
      var el = bgs[j];
      if (el.tagName === "IMG" || inUI(el)) continue;
      if (el.style && el.style.backgroundImage && el.style.backgroundImage.indexOf("data:") > -1) {
        el.removeAttribute("data-original");
        continue; // ауыстырылған фон
      }
      var bg = "";
      try { bg = getComputedStyle(el).backgroundImage; } catch (e) {}
      if (bg && bg !== "none" && bg.indexOf("url(") > -1) {
        if (!el.style.backgroundImage) el.style.backgroundImage = bg;
      } else if (el.getAttribute("data-original")) {
        el.style.backgroundImage = "url('" + el.getAttribute("data-original") + "')";
        el.style.backgroundSize = el.style.backgroundSize || "cover";
        el.style.backgroundPosition = el.style.backgroundPosition || "center";
      }
      el.removeAttribute("data-original");
    }
  }

  function downloadEdited() {
    materialize(); // тірі DOM-ды дайындау
    var clone = document.documentElement.cloneNode(true);
    ["#ebedit-bar", "#ebedit-style", "#ebedit-modal", "#ebedit-hint", "#ebedit-datebox", "#ebedit-flash"].forEach(function (sel) {
      var el = clone.querySelector(sel);
      if (el) el.remove();
    });
    var ce = clone.querySelectorAll("[contenteditable]");
    for (var i = 0; i < ce.length; i++) {
      ce[i].removeAttribute("contenteditable");
      ce[i].removeAttribute("data-ebtext");
      ce[i].removeAttribute("spellcheck");
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

  // ---------- Kaspi модалы ----------
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
    var err = document.getElementById("eb-err");
    if (err) err.style.display = "none";
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
    if (t.hasAttribute("data-havecode")) { show("eb-code"); return; }
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
