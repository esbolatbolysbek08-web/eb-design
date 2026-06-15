/* ============================================================
 * Shakyrtu.kz — Shared i18n (Қазақша / Русский)
 * Plain vanilla JS, no modules, no build step.
 * Usage in HTML:
 *   <script src="i18n.js" defer></script>
 *   Text:        <span data-i18n="brand.name">Shakyrtu.kz</span>
 *   Placeholder: <input data-i18n-ph="login.refPlaceholder">
 *   Toggle:      <div class="lang-toggle">
 *                  <button class="lang-toggle__btn" data-lang="kk">Қазақша</button>
 *                  <button class="lang-toggle__btn" data-lang="ru">Русский</button>
 *                </div>
 * API: window.setLang('kk'|'ru'), window.getLang(), window.t(key)
 * Persists choice in localStorage key 'shk_lang'. Default 'kk'.
 * ============================================================ */
(function () {
  "use strict";

  var STORE_KEY = "shk_lang";
  var DEFAULT_LANG = "kk";

  var I18N = {
    /* ---------------------------- ҚАЗАҚША ---------------------------- */
    kk: {
      /* --- Brand / global --- */
      "brand.name": "Shakyrtu.kz",
      "brand.tagline": "Қазақша электронды той шақырту жасайтын онлайн платформа.",

      /* --- Language toggle (a11y labels) --- */
      "lang.kk": "Қазақша",
      "lang.ru": "Русский",

      /* --- Landing / Home --- */
      "landing.viewTemplates": "Үлгілерді көру →",
      "landing.features": "Не істей аласыз",
      "landing.contact": "Бізбен байланыс",
      "landing.heroSubtitle": "Қазақша электронды той шақырту жасайтын онлайн платформа.",
      "landing.makeInvite": "Шақырту жаса",
      "landing.login": "Кіру",
      "landing.desc1": "Қазақша электронды той шақырту жасайтын онлайн платформа.",
      "landing.desc2": "Бірнеше минутта өзіңіздің жеке шақырту сайтыңызды дайындап, қонақтарыңызға бір сілтемемен жібересіз.",
      "landing.contactDesc": "Сұрақтар мен ұсыныстарыңызды әлеуметтік желілер арқылы жібере аласыз.",

      /* --- Landing feature bullets (Не істей аласыз) --- */
      "landing.bullet1": "20-дан астам шақырту үлгісінен таңдау",
      "landing.bullet2": "Аты-жөні, күн-уақыт, мекен-жай — барлығын редакциялау",
      "landing.bullet3": "Қонақтардың жауаптарын автоматты жинау",
      "landing.bullet4": "Тілектерді қалдыру + Excel-ге жүктеу",
      "landing.bullet5": "Telegram + WhatsApp арқылы оңай бөлісу",
      "landing.bullet6": "Қыз ұзату және үйлену тойы үлгілері бөлек категорияда",

      /* --- Social links --- */
      "social.instagram": "Instagram",
      "social.telegram": "Telegram",
      "social.telegramBot": "Telegram бот",
      "social.whatsapp": "WhatsApp",
      "social.tiktok": "TikTok",

      /* --- Features (Не істей аласыз) --- */
      "feat.choose": "Үлгі таңда",
      "feat.chooseDesc": "Дайын премиум үлгілерден лайықтысын таңда.",
      "feat.edit": "Мәтінді өзгерт",
      "feat.editDesc": "Есімдер, күн, орын — бәрін өзің реттейсің.",
      "feat.share": "Сілтемемен жібер",
      "feat.shareDesc": "Дайын шақыртуды қонақтарға бір сілтемемен жібер.",

      /* --- Login / Auth --- */
      "login.title": "Кіру",
      "login.telegram": "Telegram-мен кіру",
      "login.or": "НЕМЕСЕ",
      "login.google": "Google арқылы кіру",
      "login.phone": "Нөмір + құпиясөзбен кіру",
      "login.phonePlaceholder": "Телефон нөмірі",
      "login.passwordPlaceholder": "Құпиясөз",
      "login.referral": "РЕФЕРАЛДЫҚ КОД (ҚОСЫМША)",
      "login.refPlaceholder": "Реферал коды",
      "login.submit": "Кіру",
      "login.backHome": "← Басты бетке",

      /* --- Gallery / Templates list --- */
      "gallery.title": "Үлгілер",
      "gallery.backHome": "← Басты бетке",
      "gallery.customize": "Реттеу",
      "gallery.select": "Таңдау →",
      "gallery.siteInvite": "Сайт шақырту",
      "gallery.videoInvite": "Видео шақырту",
      "gallery.soon": "ЖУЫРДА",
      "gallery.preview": "АЛДЫН АЛА ҚАРАУ",
      "gallery.openFull": "Толық ашу",

      /* --- Categories --- */
      "cat.choose": "Категорияны таңдаңыз",
      "cat.wedding": "Үйлену тойы",
      "cat.uzatu": "Қыз ұзату",
      "cat.merey": "Мерей той",
      "cat.tusaukeser": "Тұсаукесер",
      "cat.besik": "Бесік той",
      "cat.sundet": "Сүндет той",

      /* --- Editor --- */
      "editor.backToGallery": "← Үлгілер",
      "editor.customize": "Реттеу",
      "editor.sections": "Бөлімдер",
      "editor.noMusic": "Музыкасыз",
      "editor.envelope": "Конверт",
      "editor.languages": "Тілдер",
      "editor.images": "Суреттер",
      "editor.elements": "Элементтер",
      "editor.layers": "Қабаттар",
      "editor.preview": "АЛДЫН АЛА ҚАРАУ",
      "editor.openFull": "Толық ашу",
      "editor.save": "Сақтау",
      "editor.publish": "Жариялау",

      /* --- Editor onboarding / hints --- */
      "hint.editText.title": "Мәтінмен жұмыс істеу",
      "hint.editText.body": "Кез келген мәтінді басып, тікелей өзгерте аласыз.",
      "hint.gotIt": "Түсінікті",
      "onboard.sub": "Тек басып емес, осындай жолдармен мәтінді басқара аласыз:",
      "onboard.r1.t": "Басыңыз — жазыңыз",
      "onboard.r1.d": "Мәтінге басыңыз — пернетақта ашылады, мәтінді өзгертіңіз.",
      "onboard.r2.t": "Жылжыту режимі",
      "onboard.r2.d": "Тақтадағы [T | ↔] ауыстырғышын басып, мәтінді сүйреп жылжытыңыз. Қайта басу — жазу режиміне қайтады.",
      "onboard.r3.t": "Бұрыштан тартып өлшемін өзгерту",
      "onboard.r3.d": "Жылжыту режимінде алтын бұрышты тартып мәтіннің өлшемін өзгертіңіз.",
      "onboard.r4.t": "Екі саусақпен қысу",
      "onboard.r4.d": "Телефонда: мәтінді кішірейту/үлкейту үшін қос саусақ қозғалысын қолданыңыз.",
      "onboard.r5.t": "Жаңа мәтін қосу",
      "onboard.r5.d": "Оң жақ төменгі бұрыштағы + батырмасын басып, экранның қалаған жеріне нұқыңыз.",

      /* --- Editor: music / sections / modes --- */
      "editor.withMusic": "Музыкамен",
      "editor.modeEdit": "Жазу режимі",
      "editor.modeMove": "Жылжыту режимі",
      "editor.placeHint": "Жаңа мәтінді қою үшін экранға нұқыңыз",
      "editor.newText": "Жаңа мәтін",
      "editor.sectionsTitle": "Бөлімдер",
      "editor.langTitle": "Тілдер",
      "editor.elementsTitle": "Элементтер",
      "editor.layersTitle": "Қабаттар",
      "editor.imagesTitle": "Суреттер",
      "editor.envelopeTitle": "Конверт",
      "editor.imagesHint": "Суретке басып, жаңа сурет жүктеңіз.",
      "editor.elementsHint": "Жуырда қосымша безендіру элементтері қосылады.",
      "editor.layersHint": "Мәтін қабаттары — көрінуін реттеңіз.",
      "editor.envelopeHint": "Шақырту ашылғанда конверт анимациясын көрсету.",
      "editor.envelopeToggle": "Конверт анимациясы",
      "sec.titul": "Титул",
      "sec.date": "Дата/Уақыт",
      "sec.address": "Мекен-жай",
      "sec.program": "Бағдарлама",
      "sec.rsvp": "RSVP",
      "sec.wishes": "Тілектер",

      /* --- Common buttons --- */
      "btn.gotIt": "Түсінікті",
      "btn.close": "Жабу",
      "btn.cancel": "Болдырмау",
      "btn.next": "Келесі",
      "btn.back": "Артқа",

      /* --- Footer --- */
      "footer.rights": "Барлық құқықтар қорғалған.",
      "footer.contact": "Бізбен байланыс",
    },

    /* ---------------------------- РУССКИЙ ---------------------------- */
    ru: {
      /* --- Brand / global --- */
      "brand.name": "Shakyrtu.kz",
      "brand.tagline": "Онлайн-платформа для создания электронных приглашений на казахском.",

      /* --- Language toggle (a11y labels) --- */
      "lang.kk": "Қазақша",
      "lang.ru": "Русский",

      /* --- Landing / Home --- */
      "landing.viewTemplates": "Смотреть шаблоны →",
      "landing.features": "Что вы можете",
      "landing.contact": "Связаться с нами",
      "landing.heroSubtitle": "Онлайн-платформа для создания электронных приглашений на казахском.",
      "landing.makeInvite": "Создать приглашение",
      "landing.login": "Вход",
      "landing.desc1": "Онлайн-платформа для создания электронных приглашений на казахском.",
      "landing.desc2": "За несколько минут вы создаёте собственный сайт-приглашение и отправляете его гостям одной ссылкой.",
      "landing.contactDesc": "Свои вопросы и предложения вы можете отправить нам через социальные сети.",

      /* --- Landing feature bullets (Что вы можете) --- */
      "landing.bullet1": "Выбор более чем из 20 шаблонов приглашений",
      "landing.bullet2": "Имена, дата и время, адрес — редактируйте всё",
      "landing.bullet3": "Автоматический сбор ответов гостей",
      "landing.bullet4": "Сбор пожеланий + выгрузка в Excel",
      "landing.bullet5": "Лёгкий обмен через Telegram и WhatsApp",
      "landing.bullet6": "Проводы невесты и свадьба — в отдельных категориях",

      /* --- Social links --- */
      "social.instagram": "Instagram",
      "social.telegram": "Telegram",
      "social.telegramBot": "Telegram бот",
      "social.whatsapp": "WhatsApp",
      "social.tiktok": "TikTok",

      /* --- Features (Что вы можете) --- */
      "feat.choose": "Выберите шаблон",
      "feat.chooseDesc": "Выберите подходящий из готовых премиум-шаблонов.",
      "feat.edit": "Измените текст",
      "feat.editDesc": "Имена, дата, место — всё настраиваете сами.",
      "feat.share": "Отправьте ссылкой",
      "feat.shareDesc": "Отправьте готовое приглашение гостям одной ссылкой.",

      /* --- Login / Auth --- */
      "login.title": "Вход",
      "login.telegram": "Войти через Telegram",
      "login.or": "ИЛИ",
      "login.google": "Войти через Google",
      "login.phone": "Войти по номеру и паролю",
      "login.phonePlaceholder": "Номер телефона",
      "login.passwordPlaceholder": "Пароль",
      "login.referral": "РЕФЕРАЛЬНЫЙ КОД (НЕОБЯЗАТЕЛЬНО)",
      "login.refPlaceholder": "Реферальный код",
      "login.submit": "Войти",
      "login.backHome": "← На главную",

      /* --- Gallery / Templates list --- */
      "gallery.title": "Шаблоны",
      "gallery.backHome": "← На главную",
      "gallery.customize": "Настроить",
      "gallery.select": "Выбрать →",
      "gallery.siteInvite": "Сайт-приглашение",
      "gallery.videoInvite": "Видео-приглашение",
      "gallery.soon": "СКОРО",
      "gallery.preview": "ПРЕДПРОСМОТР",
      "gallery.openFull": "Открыть полностью",

      /* --- Categories --- */
      "cat.choose": "Выберите категорию",
      "cat.wedding": "Свадьба",
      "cat.uzatu": "Проводы невесты",
      "cat.merey": "Юбилей",
      "cat.tusaukeser": "Тусау кесу",
      "cat.besik": "Бесік той",
      "cat.sundet": "Сүндет той",

      /* --- Editor --- */
      "editor.backToGallery": "← Шаблоны",
      "editor.customize": "Настроить",
      "editor.sections": "Разделы",
      "editor.noMusic": "Без музыки",
      "editor.envelope": "Конверт",
      "editor.languages": "Языки",
      "editor.images": "Изображения",
      "editor.elements": "Элементы",
      "editor.layers": "Слои",
      "editor.preview": "ПРЕДПРОСМОТР",
      "editor.openFull": "Открыть полностью",
      "editor.save": "Сохранить",
      "editor.publish": "Опубликовать",

      /* --- Editor onboarding / hints --- */
      "hint.editText.title": "Работа с текстом",
      "hint.editText.body": "Нажмите на любой текст, чтобы изменить его прямо здесь.",
      "hint.gotIt": "Понятно",
      "onboard.sub": "Текстом можно управлять не только нажатием, но и такими способами:",
      "onboard.r1.t": "Нажмите — пишите",
      "onboard.r1.d": "Нажмите на текст — откроется клавиатура, измените текст.",
      "onboard.r2.t": "Режим перемещения",
      "onboard.r2.d": "Нажмите переключатель [T | ↔] на панели и перетащите текст. Повторное нажатие вернёт режим письма.",
      "onboard.r3.t": "Изменение размера за угол",
      "onboard.r3.d": "В режиме перемещения потяните золотой угол, чтобы изменить размер текста.",
      "onboard.r4.t": "Сведите двумя пальцами",
      "onboard.r4.d": "На телефоне: используйте жест двумя пальцами, чтобы уменьшить или увеличить текст.",
      "onboard.r5.t": "Добавить новый текст",
      "onboard.r5.d": "Нажмите кнопку + в правом нижнем углу и коснитесь нужного места на экране.",

      /* --- Editor: music / sections / modes --- */
      "editor.withMusic": "С музыкой",
      "editor.modeEdit": "Режим письма",
      "editor.modeMove": "Режим перемещения",
      "editor.placeHint": "Коснитесь экрана, чтобы разместить новый текст",
      "editor.newText": "Новый текст",
      "editor.sectionsTitle": "Разделы",
      "editor.langTitle": "Языки",
      "editor.elementsTitle": "Элементы",
      "editor.layersTitle": "Слои",
      "editor.imagesTitle": "Изображения",
      "editor.envelopeTitle": "Конверт",
      "editor.imagesHint": "Нажмите на изображение и загрузите новое.",
      "editor.elementsHint": "Скоро добавятся дополнительные декоративные элементы.",
      "editor.layersHint": "Слои текста — управляйте их видимостью.",
      "editor.envelopeHint": "Показывать анимацию конверта при открытии приглашения.",
      "editor.envelopeToggle": "Анимация конверта",
      "sec.titul": "Титул",
      "sec.date": "Дата/Время",
      "sec.address": "Адрес",
      "sec.program": "Программа",
      "sec.rsvp": "RSVP",
      "sec.wishes": "Пожелания",

      /* --- Common buttons --- */
      "btn.gotIt": "Понятно",
      "btn.close": "Закрыть",
      "btn.cancel": "Отмена",
      "btn.next": "Далее",
      "btn.back": "Назад",

      /* --- Footer --- */
      "footer.rights": "Все права защищены.",
      "footer.contact": "Связаться с нами",
    },
  };

  /* Expose dictionary for debugging / advanced use */
  window.I18N = I18N;

  function readLang() {
    var saved;
    try {
      saved = localStorage.getItem(STORE_KEY);
    } catch (e) {
      saved = null;
    }
    return I18N[saved] ? saved : DEFAULT_LANG;
  }

  var currentLang = DEFAULT_LANG;

  /* Translate a single key for the active language (kk fallback, then key). */
  function t(key) {
    var dict = I18N[currentLang] || I18N[DEFAULT_LANG];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (I18N[DEFAULT_LANG] && Object.prototype.hasOwnProperty.call(I18N[DEFAULT_LANG], key)) {
      return I18N[DEFAULT_LANG][key];
    }
    return key;
  }

  /* Swap all [data-i18n] textContent and [data-i18n-ph] placeholders. */
  function applyTranslations(root) {
    var scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    scope.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (key) el.setAttribute("placeholder", t(key));
    });

    /* Optional: [data-i18n-html] for rich strings (kept for parity). */
    scope.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key);
    });
  }

  /* Update the segmented toggle active state. */
  function syncToggle() {
    document.querySelectorAll(".lang-toggle__btn[data-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  /* Public: switch language, persist, re-render everything. */
  function setLang(lang) {
    currentLang = I18N[lang] ? lang : DEFAULT_LANG;
    try {
      localStorage.setItem(STORE_KEY, currentLang);
    } catch (e) {
      /* storage may be unavailable (file://, private mode) — fail silently */
    }
    if (document.documentElement) document.documentElement.setAttribute("lang", currentLang);
    applyTranslations(document);
    syncToggle();
    /* Let pages react (e.g. re-render template chrome) */
    try {
      window.dispatchEvent(new CustomEvent("shk:langchange", { detail: { lang: currentLang } }));
    } catch (e) {
      /* CustomEvent unsupported — ignore */
    }
    return currentLang;
  }

  /* Public helpers */
  window.setLang = setLang;
  window.getLang = function () { return currentLang; };
  window.t = t;
  window.applyTranslations = applyTranslations; /* for dynamically injected nodes */

  /* Boot: apply saved/default language and wire the toggle. */
  function boot() {
    currentLang = readLang();
    setLang(currentLang);

    /* Delegate clicks so toggles added later still work. */
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".lang-toggle__btn[data-lang]");
      if (btn) {
        e.preventDefault();
        setLang(btn.getAttribute("data-lang"));
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
