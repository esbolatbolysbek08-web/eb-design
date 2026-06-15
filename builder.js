// =====================================================================
//  ШАҚЫРТУ КОНСТРУКТОРЫ — EB.design
//  ⚙️ БАПТАУ: өз деректеріңізді осында жазыңыз
// =====================================================================
const CONFIG = {
  WHATSAPP: "77765573009",         // қолдау үшін
  KASPI_NUMBER: "+7 776 557 30 09", // Kaspi нөмірі
  KASPI_NAME: "Есболат",            // Kaspi-дегі атыңыз
  PRICE: 3000,                      // шақыртудың бағасы (₸)
  UNLOCK_CODE: "TOI2026",           // ⚠️ ҚҰПИЯ КОД — клиент төлегенде осыны бересіз.
                                    //    Мезгіл-мезгіл өзгертіп тұрыңыз (бөлісіп жіберуді азайту үшін).
};

// =====================================================================
//  Тақырыптар (палитра + анимация)
// =====================================================================
const THEMES = {
  wedding: { bg: "linear-gradient(160deg,#fbf6ef,#f1e3d2)", accent: "#b88a3e", text: "#4a3b2a", anim: "flowers" },
  uzatu:   { bg: "linear-gradient(160deg,#f7eee6,#e7d8c6)", accent: "#9c6b22", text: "#3d2618", anim: "flowers" },
  noir:    { bg: "linear-gradient(160deg,#0c0c0d,#1b1712)", accent: "#d4af37", text: "#f3ece0", anim: "flowers" },
  love:    { bg: "linear-gradient(160deg,#fff0f3,#ffdbe6)", accent: "#e25c79", text: "#6b2738", anim: "hearts" },
  birthday:{ bg: "linear-gradient(160deg,#101331,#2a1d57)", accent: "#ffd34e", text: "#ffffff", anim: "confetti" },
  night:   { bg: "linear-gradient(160deg,#0b1026,#13204a)", accent: "#7c5cff", text: "#eaeaff", anim: "stars" },
};

const KZ_MONTHS = ["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];

// =====================================================================
//  Күй (state) — бастапқы үлгі
// =====================================================================
function defaultDate() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  d.setHours(17, 0, 0, 0);
  const pad = (n) => ("0" + n).slice(-2);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const state = {
  theme: "wedding",
  eyebrow: "Сізді шақырамыз",
  title: "Үйлену тойы",
  names: "Есболат & Аружан",
  message: "Біздің бақытты күнімізге куә болуыңызды сұраймыз!",
  date: defaultDate(),
  place: "Алматы, «Сафир» мейрамханасы",
  phone: "+7 700 000 00 00",
  photo: "",
  music: "",
  anim: "flowers",
};

// =====================================================================
//  Көмекші функциялар
// =====================================================================
const esc = (str) =>
  String(str || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function formatDate(dt) {
  if (!dt) return "";
  const d = new Date(dt);
  if (isNaN(d)) return "";
  const pad = (n) => ("0" + n).slice(-2);
  return `${d.getDate()} ${KZ_MONTHS[d.getMonth()]} ${d.getFullYear()}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function themeInline(s) {
  const T = THEMES[s.theme] || THEMES.wedding;
  return `background:${T.bg};--iv-accent:${T.accent};--iv-text:${T.text};`;
}

// =====================================================================
//  Шақырту ішкі HTML-і (превью де, экспорт та осыны қолданады)
// =====================================================================
function inviteInner(s) {
  const hasDate = !!formatDate(s.date);
  return `
  <div class="iv-particles" data-anim="${s.anim}"></div>
  <button class="iv-music" type="button" aria-label="Музыка">♪</button>
  <audio class="iv-audio" loop ${s.music ? `src="${s.music}"` : ""}></audio>
  <p class="iv-eyebrow">${esc(s.eyebrow)}</p>
  <h1 class="iv-title">${esc(s.title)}</h1>
  <div class="iv-photo" style="${s.photo ? `background-image:url('${s.photo}')` : ""}">${s.photo ? "" : "📷"}</div>
  <h2 class="iv-names">${esc(s.names)}</h2>
  <p class="iv-msg">${esc(s.message)}</p>
  ${hasDate ? `<div class="iv-count" data-date="${s.date}">
    <div><b>0</b><small>күн</small></div>
    <div><b>0</b><small>сағ</small></div>
    <div><b>0</b><small>мин</small></div>
    <div><b>0</b><small>сек</small></div>
  </div>` : `<div class="iv-count-empty">Күн әлі белгіленбеген</div>`}
  <div class="iv-details">
    <div>🗓 <span>${hasDate ? esc(formatDate(s.date)) : "Күн белгіленбеген"}</span></div>
    <div>📍 <span>${esc(s.place)}</span></div>
  </div>
  <a class="iv-rsvp" href="tel:${esc(s.phone.replace(/[^0-9+]/g, ""))}">Қатысатынымды растау</a>
  `;
}

function inviteRootHTML(s) {
  return `<div class="iv-root iv-${s.theme}" style="${themeInline(s)}">${inviteInner(s)}</div>`;
}

// =====================================================================
//  Шақырту CSS-і (бір көзден — превью де, экспорт та)
// =====================================================================
const INVITE_CSS = `
.iv-root{position:relative;width:100%;max-width:480px;margin:0 auto;min-height:640px;border-radius:24px;overflow:hidden;padding:48px 26px 40px;font-family:'Inter',system-ui,sans-serif;color:var(--iv-text);box-shadow:0 30px 70px -30px rgba(0,0,0,.55);text-align:center;display:flex;flex-direction:column;align-items:center;gap:15px}
.iv-particles{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.iv-particles span{position:absolute;top:-30px;animation:ivfall linear infinite;will-change:transform}
@keyframes ivfall{0%{transform:translateY(-40px) rotate(0);opacity:0}10%{opacity:.95}100%{transform:translateY(1400px) rotate(360deg);opacity:0}}
.iv-count-empty{font-size:14px;opacity:.7;font-style:italic;margin:6px 0}
.iv-root > *:not(.iv-particles){position:relative;z-index:1}
.iv-eyebrow{letter-spacing:3px;text-transform:uppercase;font-size:12px;font-weight:600;opacity:.7;margin:0;animation:ivup .7s ease}
.iv-title{font-size:34px;font-weight:800;margin:0;line-height:1.12;animation:ivup .7s ease .05s both}
.iv-photo{width:150px;height:150px;border-radius:50%;background-size:cover;background-position:center;border:4px solid var(--iv-accent);display:grid;place-items:center;font-size:40px;background-color:rgba(150,150,150,.15);animation:ivpop .8s ease .1s both}
.iv-names{font-size:26px;font-weight:700;margin:0;color:var(--iv-accent);animation:ivup .7s ease .15s both}
.iv-msg{font-size:15px;opacity:.85;margin:0;max-width:340px;animation:ivup .7s ease .2s both}
.iv-count{display:flex;gap:9px;margin:6px 0;animation:ivup .7s ease .25s both}
.iv-count div{background:rgba(150,150,150,.14);border:1px solid var(--iv-accent);border-radius:12px;padding:9px 11px;min-width:54px}
.iv-count b{display:block;font-size:22px;font-weight:800;color:var(--iv-accent)}
.iv-count small{font-size:10px;opacity:.75;text-transform:uppercase}
.iv-details{display:flex;flex-direction:column;gap:7px;font-size:14px;animation:ivup .7s ease .3s both}
.iv-details div{display:flex;gap:8px;justify-content:center;align-items:center}
.iv-rsvp{margin-top:8px;background:var(--iv-accent);color:#fff;text-decoration:none;font-weight:700;padding:13px 28px;border-radius:99px;font-size:15px;box-shadow:0 10px 24px -8px rgba(0,0,0,.4);animation:ivpop .7s ease .35s both}
.iv-music{position:absolute;top:14px;right:14px;z-index:2;width:42px;height:42px;border-radius:50%;border:1px solid var(--iv-accent);background:rgba(150,150,150,.18);color:var(--iv-text);font-size:18px;cursor:pointer}
.iv-music.on{animation:ivspin 3s linear infinite}
@keyframes ivpop{0%{transform:scale(.7);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes ivup{0%{transform:translateY(16px);opacity:0}100%{transform:none;opacity:1}}
@keyframes ivspin{to{transform:rotate(360deg)}}

/* ===== Әр стильдің ӨЗ дизайны ===== */
/* Элегант қаріп (нақты үлгілердегідей) — той/ұзату/noir */
.iv-wedding .iv-title,.iv-wedding .iv-names,
.iv-uzatu .iv-title,.iv-uzatu .iv-names,
.iv-noir .iv-title,.iv-noir .iv-names{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;letter-spacing:.5px}
.iv-wedding .iv-title,.iv-uzatu .iv-title,.iv-noir .iv-title{font-size:42px;font-weight:700}

/* NOIR — қара/алтын, тікбұрыш фото, ішкі алтын жиек, әшекелі бөлгіш */
.iv-noir{border:1px solid color-mix(in srgb,var(--iv-accent) 55%,transparent)}
.iv-noir .iv-eyebrow{letter-spacing:6px}
.iv-noir .iv-photo{width:200px;height:240px;border-radius:8px;border-width:1px}
.iv-noir .iv-names::before,.iv-uzatu .iv-names::before{content:"◆";display:block;color:var(--iv-accent);font-size:13px;margin-bottom:2px}
.iv-noir .iv-rsvp,.iv-uzatu .iv-rsvp{border-radius:0;letter-spacing:2px;text-transform:uppercase;font-size:13px}

/* UZATU — қос алтын сақиналы фото, әшекелі */
.iv-uzatu .iv-photo{border-width:2px;box-shadow:0 0 0 6px color-mix(in srgb,var(--iv-accent) 25%,transparent)}
.iv-uzatu .iv-eyebrow{letter-spacing:5px}

/* BIRTHDAY — мерекелік, батыл, дөңгелек */
.iv-birthday .iv-title{font-weight:900;text-transform:uppercase;letter-spacing:1px}
.iv-birthday .iv-photo{border-radius:24px;width:170px;height:170px}
.iv-birthday .iv-rsvp{border-radius:99px}

/* LOVE — жұмсақ, дөңгелек */
.iv-love .iv-title{font-weight:800}
`;

// =====================================================================
//  Runtime (анимация + кері санақ + музыка) — превью де, экспорт та
// =====================================================================
const RUNTIME = `
(function(){
  var box=document.querySelector('.iv-particles');
  if(box){
    var anim=box.getAttribute('data-anim')||'hearts';
    var map={hearts:['❤','💕','💗'],flowers:['🌸','🌷','🌹'],confetti:['🎉','✨','🎊'],snow:['❄','✦','❉'],stars:['✦','★','✧']};
    var set=map[anim]||map.hearts;
    box.innerHTML='';
    for(var i=0;i<20;i++){var s=document.createElement('span');s.textContent=set[i%set.length];s.style.left=(Math.random()*100)+'%';s.style.animationDelay=(Math.random()*9)+'s';s.style.animationDuration=(6+Math.random()*8)+'s';s.style.fontSize=(12+Math.random()*22)+'px';box.appendChild(s);}
  }
  var c=document.querySelector('.iv-count');
  if(c){
    var target=new Date(c.getAttribute('data-date')).getTime();
    if(!isNaN(target)){
      if(window.__ivTimer)clearInterval(window.__ivTimer);
      function upd(){
        var d=target-Date.now(); if(d<0)d=0;
        var days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);
        var b=c.querySelectorAll('b');
        if(b.length>=4){b[0].textContent=days;b[1].textContent=('0'+h).slice(-2);b[2].textContent=('0'+m).slice(-2);b[3].textContent=('0'+s).slice(-2);}
      }
      upd();window.__ivTimer=setInterval(upd,1000);
    }
  }
  var mb=document.querySelector('.iv-music'),au=document.querySelector('.iv-audio');
  if(mb&&au){mb.onclick=function(){ if(!au.getAttribute('src')){alert('Музыка қосылмаған');return;} if(au.paused){au.play();mb.classList.add('on');}else{au.pause();mb.classList.remove('on');} };}
})();
`;

// Превьюде runtime-ды қайта іске қосу
function runInvite() {
  try { new Function(RUNTIME)(); } catch (e) { console.error(e); }
}

// =====================================================================
//  Превьюді жаңарту
// =====================================================================
const inviteEl = document.getElementById("invite");
function render() {
  inviteEl.innerHTML = inviteRootHTML(state);
  runInvite();
}

// CSS-ті бетке енгізу
const styleTag = document.createElement("style");
styleTag.textContent = INVITE_CSS;
document.head.appendChild(styleTag);

// =====================================================================
//  Өңдеу панелі (editor) — өрістерді байланыстыру
// =====================================================================
const bind = (id, key) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.value = state[key];
  el.addEventListener("input", () => {
    state[key] = el.value;
    if (key === "theme") {
      // тема ауысса — сәйкес анимацияны да қойамыз
      state.anim = (THEMES[el.value] || THEMES.wedding).anim;
      const animSel = document.getElementById("f-anim");
      if (animSel) animSel.value = state.anim;
    }
    render();
  });
};
["f-theme:theme","f-eyebrow:eyebrow","f-title:title","f-names:names","f-message:message","f-date:date","f-place:place","f-phone:phone","f-anim:anim"]
  .forEach((p) => { const [id, key] = p.split(":"); bind(id, key); });

// Сурет жүктеу
document.getElementById("f-photo").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { state.photo = reader.result; render(); };
  reader.readAsDataURL(file);
});

// Музыка жүктеу
document.getElementById("f-music").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.music = reader.result;
    render();
    document.getElementById("musicName").textContent = "🎵 " + file.name;
  };
  reader.readAsDataURL(file);
});

// Панельді ашу/жабу (мобильде) — backdrop пен ✕ батырмасымен
const editor = document.getElementById("editor");
const editorBackdrop = document.getElementById("editorBackdrop");
function openEditor() { editor.classList.add("is-open"); editorBackdrop.classList.add("is-open"); }
function closeEditor() { editor.classList.remove("is-open"); editorBackdrop.classList.remove("is-open"); }
document.getElementById("toggleEditor").addEventListener("click", () =>
  editor.classList.contains("is-open") ? closeEditor() : openEditor());
editorBackdrop.addEventListener("click", closeEditor);
document.getElementById("editorClose").addEventListener("click", closeEditor);

// =====================================================================
//  ТӨЛЕМ (Kaspi) + жүктеп алу
// =====================================================================
const modal = document.getElementById("payModal");
document.getElementById("kaspiNum").textContent = CONFIG.KASPI_NUMBER;
document.getElementById("kaspiName").textContent = CONFIG.KASPI_NAME;
document.getElementById("priceTag").textContent = CONFIG.PRICE.toLocaleString("ru-RU") + " ₸";
document.getElementById("priceBtn").textContent = CONFIG.PRICE.toLocaleString("ru-RU") + " ₸";

const STEPS = ["payStep1", "payStep2", "payStep3"];
function showStep(n) {
  STEPS.forEach((id, i) => {
    document.getElementById(id).style.display = i === n - 1 ? "block" : "none";
  });
}

document.getElementById("btnFinish").addEventListener("click", () => {
  showStep(1);
  document.getElementById("codeError").style.display = "none";
  document.getElementById("codeInput").value = "";
  modal.classList.add("is-open");
});
document.getElementById("payClose").addEventListener("click", () => modal.classList.remove("is-open"));
modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("is-open"); });

// Kaspi-ге өту (қолданбаны ашуға тырысады)
document.getElementById("btnKaspiPay").addEventListener("click", () => {
  window.open("https://kaspi.kz/", "_blank");
});

// "Төледім — код алу" → тапсырысты WhatsApp-пен дизайнерге жіберу
document.getElementById("btnGetCode").addEventListener("click", () => {
  const text =
    `Сәлеметсіз бе! Шақырту жасадым, төледім — код керек.%0A%0A` +
    `🎉 ${encodeURIComponent(state.title)} — ${encodeURIComponent(state.names)}%0A` +
    `🗓 ${encodeURIComponent(formatDate(state.date))}%0A` +
    `📍 ${encodeURIComponent(state.place)}%0A` +
    `💰 ${encodeURIComponent(CONFIG.PRICE.toLocaleString("ru-RU"))} ₸%0A%0A` +
    `(Сурет/музыканы осы чатқа жіберемін)`;
  window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${text}`, "_blank");
});

// "Кодым бар" → код енгізу қадамы
document.getElementById("btnHaveCode").addEventListener("click", () => {
  document.getElementById("codeError").style.display = "none";
  showStep(2);
  document.getElementById("codeInput").focus();
});
document.getElementById("btnBackPay").addEventListener("click", () => showStep(1));

// Кодты тексеру → жүктеп алу қадамын ашу
document.getElementById("btnUnlock").addEventListener("click", () => {
  const val = (document.getElementById("codeInput").value || "").trim().toUpperCase();
  if (val === CONFIG.UNLOCK_CODE.toUpperCase()) {
    showStep(3);
  } else {
    document.getElementById("codeError").style.display = "block";
  }
});
document.getElementById("codeInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("btnUnlock").click();
});

// Жүктеп алу (дайын HTML файл)
document.getElementById("btnDownload").addEventListener("click", downloadInvite);

function buildExportHTML() {
  return [
    "<!DOCTYPE html>",
    '<html lang="kk">',
    "<head>",
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "<title>" + esc(state.title) + " — " + esc(state.names) + "</title>",
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet">',
    "<style>",
    "*{box-sizing:border-box}body{margin:0;min-height:100vh;display:flex;justify-content:center;align-items:flex-start;background:#0b0d17;padding:20px;font-family:'Inter',sans-serif}",
    INVITE_CSS,
    "</style>",
    "</head>",
    "<body>",
    inviteRootHTML(state),
    "<script>" + RUNTIME + "<\/script>",
    "</body>",
    "</html>",
  ].join("\n");
}

function downloadInvite() {
  const html = buildExportHTML();
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "shaqyrtu.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// WhatsApp арқылы маған (дизайнерге) жіберу — қолдау/орналастыру үшін
document.getElementById("btnSend").addEventListener("click", () => {
  const text =
    `Сәлеметсіз бе! Шақырту дайын, төледім.%0A` +
    `🎉 ${encodeURIComponent(state.title)} — ${encodeURIComponent(state.names)}%0A` +
    `🗓 ${encodeURIComponent(formatDate(state.date))}`;
  window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${text}`, "_blank");
});

// =====================================================================
//  Бастау
// =====================================================================
render();

// URL-де ?theme=... болса — қолданамыз (галереядан өткенде)
const params = new URLSearchParams(location.search);
const t = params.get("theme");
if (t && THEMES[t]) {
  state.theme = t;
  state.anim = THEMES[t].anim;
  document.getElementById("f-theme").value = t;
  document.getElementById("f-anim").value = state.anim;
  render();
}
