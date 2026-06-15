// ===== БАПТАУ: өз WhatsApp нөміріңізді осында жазыңыз =====
// Халықаралық форматта, + және бос орынсыз. Мысалы: 7 700 123 45 67 -> 77001234567
const WHATSAPP_NUMBER = "77765573009";

// ===================================================================
//  3 ТІЛ (Қазақша / Русский / English)
// ===================================================================
const I18N = {
  kk: {
    "nav.services": "Қызметтер", "nav.gallery": "Жұмыстар", "nav.price": "Баға",
    "nav.faq": "FAQ", "nav.contact": "Байланыс", "nav.order": "Тапсырыс беру", "nav.start": "Бастау",
    "nav.home": "Басты", "nav.templates": "Үлгілер", "nav.biz": "Бизнеске", "tab.tpl": "Үлгілер", "tab.make": "Шақырту",
    "apps.eyebrow": "Не қалайсыз?", "apps.title": "Бір рет басып, бастаңыз",
    "apps.toi": "Тойға шақырту жаса", "apps.toiSub": "Әдемі онлайн шақырту — 5 минутта дайын, сілтемесін қонаққа жібер",
    "apps.tpl": "Дайын үлгілер", "apps.tplSub": "Той · туған күн · ұзату той — дайын әдемі дизайндар",
    "apps.site": "Бизнеске сайт", "apps.siteSub": "Клиент әкелетін заманауи сайт, онлайн-дүкен, лендинг",
    "apps.bot": "Чат-бот", "apps.botSub": "WhatsApp / Telegram бот — тапсырысты 24/7 қабылдайды",
    "hero.badge": "● Жаңа жобаларға ашықпын",
    "hero.title": 'Той шақырту жаса, <span class="grad">бизнеске сайт</span> тапсыр',
    "hero.lead": "Шақырту үлгісін таңдап, өзің өңде немесе бизнеске заманауи сайт/бот тапсыр — бәрі бір жерде.",
    "hero.cta1": "Шақырту жаса", "hero.cta2": "Бизнеске сайт",
    "hero.stat1": "жоба", "hero.stat2": "орташа күн", "hero.stat3": "мобильге бейім",
    "hero.float1": "💬 Жаңа клиент жазды", "hero.float2": "📈 Конверсия +48%",
    "services.eyebrow": "Қызметтер", "services.title": "Сізге не керек болса — соны жасаймын",
    "s1t": "Лендинг (бір беттік)", "s1d": "Бір қызметті сатуға арналған, клиент бірден байланысқа шығатын сайт.",
    "s2t": "Бизнес-сайт", "s2d": "Компания туралы, қызметтер, бағалар, пікірлер мен байланыс — толық презентация.",
    "s3t": "Онлайн-дүкен", "s3d": "Тауар каталогы, себет және тапсырыс. Клиент сайттан тікелей сатып ала алады.",
    "s4t": "Дизайн жаңарту", "s4d": "Ескі сайтыңызды заманауи әрі жылдам нұсқаға айналдырамын.",
    "s5t": "Мобильге бейімдеу", "s5d": "Телефонда да, компьютерде де мінсіз көрінеді.",
    "s6t": "Жылдамдық пен SEO", "s6d": "Тез ашылатын, Google-да жоғары тұратын сайт.",
    "s7t": "Чат-боттар", "s7d": "WhatsApp және Telegram боттары — тапсырыс қабылдау, сұрақтарға автоматты жауап, 24/7 жұмыс.",
    "gallery.eyebrow": "Шақырту конструкторы", "gallery.title": "Өз шақыртуыңды өзің жаса", "gallery.sub": "Үлгіні таңда — мәтін, сурет, музыка қос. 5 минутта дайын.", "gallery.cta": "✨ Өз шақыртуыңды жаса", "gallery.ctaNote": "Үлгіні таңда → мәтін, сурет, музыка қос → дайын шақыртуыңды ал", "gallery.or": "Үлгіні таңда → «Осы үлгіні өңде» → мәтін мен суретті өзгерт → ал", "gallery.view": "👁 Көру", "gallery.edit": "✏️ Осы үлгіні өңде",
    "why.eyebrow": "Неге мен", "why.title": "Сайт — әдемі ғана емес, табыс әкелуі керек",
    "w1t": "Сатуға бағытталған", "w1d": "Әр блок клиентті байланысқа шығуға жетелейді.",
    "w2t": "Жылдам жеткізу", "w2d": "Көп жобаны 5–7 күнде дайын етемін.",
    "w3t": "3 тілде", "w3d": "Сайт мәтінін мақсатты аудиторияңызға бейімдеймін.",
    "w4t": "Қолдау", "w4d": "Іске қосқаннан кейін де өзгерістерге көмектесемін.",
    "calc.eyebrow": "Калькулятор", "calc.title": "Бағаны бірден есептеңіз", "calc.sub": "Опцияларды таңдаңыз — болжамды бағаны лезде көресіз.",
    "calc.lblType": "Сайт түрі", "calc.type1": "Лендинг", "calc.type2": "Бизнес-сайт", "calc.type3": "Онлайн-дүкен",
    "calc.lblAddons": "Қосымша опциялар", "calc.add1": "Уникал дизайн", "calc.add2": "Көп тіл", "calc.add3": "Онлайн төлем", "calc.add4": "SEO баптау", "calc.add5": "Админ-панель", "calc.add6": "Чат-бот (WhatsApp/TG)",
    "calc.lblSpeed": "Қаншалықты жылдам керек?", "calc.speed1": "Қалыпты (7 күн)", "calc.speed2": "Жедел (3 күн)",
    "calc.resultLabel": "Болжамды баға", "calc.note": "Бұл — шамамен баға. Нақтысын талқылаудан кейін бекітеміз.", "calc.order": "Осы есеппен тапсырыс беру",
    "faq.eyebrow": "FAQ", "faq.title": "Жиі қойылатын сұрақтар",
    "faq.q1": "Сайт қанша уақытта дайын болады?", "faq.a1": "Лендинг — 3–5 күн, бизнес-сайт — 5–7 күн. Жедел нұсқасы тезірек.",
    "faq.q2": "Маған не дайындау керек?", "faq.a2": "Бизнесіңіз туралы қысқаша мәлімет пен (бар болса) логотип/суреттер. Қалғанын өзім жасаймын.",
    "faq.q3": "Сайтты өзім өзгерте аламын ба?", "faq.a3": "Иә. Қаласаңыз админ-панель қосамын немесе кейінгі өзгерістерге көмектесемін.",
    "faq.q4": "Домен мен хостинг қалай?", "faq.a4": "Доменді таңдауға және хостингке орналастыруға толық көмектесемін.",
    "faq.q5": "Төлем қалай жүреді?", "faq.a5": "Әдетте 50% алдын ала, 50% сайт дайын болғанда.",
    "contact.eyebrow": "Байланыс", "contact.title": "Жобаңызды талқылайық", "contact.p": "Формаға жазыңыз немесе бірден хабарласыңыз. Идеяңызды тегін бағалап беремін.", "contact.wa": "🟢 WhatsApp-қа жазу",
    "form.name": "Атыңыз", "form.namePh": "Мысалы: Бекзат", "form.phone": "Телефон / WhatsApp", "form.type": "Не керек?",
    "form.opt1": "Лендинг (бір беттік)", "form.opt2": "Бизнес-сайт", "form.opt3": "Онлайн-дүкен", "form.opt4": "Дизайн жаңарту", "form.opt6": "Чат-бот (WhatsApp/Telegram)", "form.opt5": "Әлі білмеймін",
    "form.msg": "Қысқаша сипаттама", "form.msgPh": "Бизнесіңіз туралы бірер сөз...", "form.submit": "WhatsApp арқылы жіберу", "form.note": "Батырманы бассаңыз, хабарлама WhatsApp-та ашылады.",
    "footer.text": "© 2026 EB.design · Есболат — Веб-дизайн", "footer.up": "Жоғарыға ↑",
    "tab.home": "Басты", "tab.work": "Жұмыс", "tab.price": "Баға", "tab.contact": "Байланыс",
    "wa.leadIntro": "Сәлеметсіз бе! Сайт/бот жасатқым келеді.", "wa.name": "👤 Аты", "wa.phone": "📞 Телефон", "wa.kind": "🖥 Не керек", "wa.desc": "📝 Сипаттама",
    "wa.calcIntro": "Сәлеметсіз бе! Калькулятор бойынша тапсырыс бергім келеді.", "wa.picked": "✅ Таңдалғаны", "wa.price": "💰 Болжамды баға",
  },
  ru: {
    "nav.services": "Услуги", "nav.gallery": "Работы", "nav.price": "Цена",
    "nav.faq": "FAQ", "nav.contact": "Контакты", "nav.order": "Заказать", "nav.start": "Начать",
    "nav.home": "Главная", "nav.templates": "Шаблоны", "nav.biz": "Для бизнеса", "tab.tpl": "Шаблоны", "tab.make": "Создать",
    "apps.eyebrow": "Что хотите?", "apps.title": "Нажмите — и начните",
    "apps.toi": "Создать приглашение", "apps.toiSub": "Красивое онлайн-приглашение — готово за 5 минут, отправь ссылку гостям",
    "apps.tpl": "Готовые шаблоны", "apps.tplSub": "Свадьба · день рождения · узату той — готовые дизайны",
    "apps.site": "Сайт для бизнеса", "apps.siteSub": "Современный сайт, который приводит клиентов: лендинг, магазин",
    "apps.bot": "Чат-бот", "apps.botSub": "Бот в WhatsApp / Telegram — принимает заказы 24/7",
    "hero.badge": "● Открыт для новых проектов",
    "hero.title": 'Создай приглашение, <span class="grad">закажи сайт</span> для бизнеса',
    "hero.lead": "Выбери шаблон приглашения и измени сам — или закажи современный сайт/бот для бизнеса. Всё в одном месте.",
    "hero.cta1": "Создать приглашение", "hero.cta2": "Сайт для бизнеса",
    "hero.stat1": "проектов", "hero.stat2": "дней в среднем", "hero.stat3": "адаптив",
    "hero.float1": "💬 Новый клиент написал", "hero.float2": "📈 Конверсия +48%",
    "services.eyebrow": "Услуги", "services.title": "Сделаю то, что вам нужно",
    "s1t": "Лендинг (одностраничник)", "s1d": "Сайт для продажи одной услуги, где клиент сразу выходит на связь.",
    "s2t": "Бизнес-сайт", "s2d": "О компании, услуги, цены, отзывы и контакты — полная презентация.",
    "s3t": "Интернет-магазин", "s3d": "Каталог, корзина и заказ. Клиент покупает прямо на сайте.",
    "s4t": "Редизайн", "s4d": "Превращу старый сайт в современный и быстрый.",
    "s5t": "Адаптив под телефон", "s5d": "Идеально выглядит и на телефоне, и на компьютере.",
    "s6t": "Скорость и SEO", "s6d": "Быстрый сайт, высокие позиции в Google.",
    "s7t": "Чат-боты", "s7d": "Боты для WhatsApp и Telegram — приём заказов, автоответы на вопросы, работа 24/7.",
    "gallery.eyebrow": "Конструктор приглашений", "gallery.title": "Создай своё приглашение сам", "gallery.sub": "Выбери шаблон — добавь текст, фото, музыку. Готово за 5 минут.", "gallery.cta": "✨ Создать приглашение", "gallery.ctaNote": "Выбери шаблон → добавь текст, фото, музыку → получи готовое приглашение", "gallery.or": "Выбери шаблон → «Изменить шаблон» → меняй текст и фото → получи", "gallery.view": "👁 Посмотреть", "gallery.edit": "✏️ Изменить этот шаблон",
    "why.eyebrow": "Почему я", "why.title": "Сайт должен не просто быть красивым, а приносить деньги",
    "w1t": "Нацелен на продажи", "w1d": "Каждый блок ведёт клиента к контакту.",
    "w2t": "Быстрая сдача", "w2d": "Большинство проектов готовы за 5–7 дней.",
    "w3t": "На 3 языках", "w3d": "Адаптирую тексты под вашу аудиторию.",
    "w4t": "Поддержка", "w4d": "Помогаю с правками и после запуска.",
    "calc.eyebrow": "Калькулятор", "calc.title": "Рассчитайте цену сразу", "calc.sub": "Выберите опции — увидите примерную цену мгновенно.",
    "calc.lblType": "Тип сайта", "calc.type1": "Лендинг", "calc.type2": "Бизнес-сайт", "calc.type3": "Интернет-магазин",
    "calc.lblAddons": "Доп. опции", "calc.add1": "Уникальный дизайн", "calc.add2": "Несколько языков", "calc.add3": "Онлайн-оплата", "calc.add4": "SEO-настройка", "calc.add5": "Админ-панель", "calc.add6": "Чат-бот (WhatsApp/TG)",
    "calc.lblSpeed": "Насколько срочно?", "calc.speed1": "Обычно (7 дней)", "calc.speed2": "Срочно (3 дня)",
    "calc.resultLabel": "Примерная цена", "calc.note": "Это ориентировочная цена. Точную определим после обсуждения.", "calc.order": "Заказать по этому расчёту",
    "faq.eyebrow": "FAQ", "faq.title": "Частые вопросы",
    "faq.q1": "За сколько будет готов сайт?", "faq.a1": "Лендинг — 3–5 дней, бизнес-сайт — 5–7 дней. Срочный вариант быстрее.",
    "faq.q2": "Что мне нужно подготовить?", "faq.a2": "Краткую информацию о бизнесе и (если есть) логотип/фото. Остальное сделаю сам.",
    "faq.q3": "Смогу ли я сам менять сайт?", "faq.a3": "Да. По желанию добавлю админ-панель или помогу с правками позже.",
    "faq.q4": "Как с доменом и хостингом?", "faq.a4": "Полностью помогу с выбором домена и размещением на хостинге.",
    "faq.q5": "Как происходит оплата?", "faq.a5": "Обычно 50% предоплата, 50% после готовности.",
    "contact.eyebrow": "Контакты", "contact.title": "Обсудим ваш проект", "contact.p": "Напишите в форму или свяжитесь сразу. Оценю вашу идею бесплатно.", "contact.wa": "🟢 Написать в WhatsApp",
    "form.name": "Имя", "form.namePh": "Например: Бекзат", "form.phone": "Телефон / WhatsApp", "form.type": "Что нужно?",
    "form.opt1": "Лендинг (одностраничник)", "form.opt2": "Бизнес-сайт", "form.opt3": "Интернет-магазин", "form.opt4": "Редизайн", "form.opt6": "Чат-бот (WhatsApp/Telegram)", "form.opt5": "Пока не знаю",
    "form.msg": "Краткое описание", "form.msgPh": "Пару слов о вашем бизнесе...", "form.submit": "Отправить через WhatsApp", "form.note": "По кнопке сообщение откроется в WhatsApp.",
    "footer.text": "© 2026 EB.design · Есболат — Веб-дизайн", "footer.up": "Наверх ↑",
    "tab.home": "Главная", "tab.work": "Работы", "tab.price": "Цена", "tab.contact": "Контакт",
    "wa.leadIntro": "Здравствуйте! Хочу заказать сайт/бот.", "wa.name": "👤 Имя", "wa.phone": "📞 Телефон", "wa.kind": "🖥 Что нужно", "wa.desc": "📝 Описание",
    "wa.calcIntro": "Здравствуйте! Хочу заказать по расчёту.", "wa.picked": "✅ Выбрано", "wa.price": "💰 Примерная цена",
  },
  en: {
    "nav.services": "Services", "nav.gallery": "Work", "nav.price": "Pricing",
    "nav.faq": "FAQ", "nav.contact": "Contact", "nav.order": "Order now", "nav.start": "Start",
    "nav.home": "Home", "nav.templates": "Templates", "nav.biz": "Business", "tab.tpl": "Templates", "tab.make": "Create",
    "apps.eyebrow": "What do you want?", "apps.title": "Tap once to start",
    "apps.toi": "Create an invitation", "apps.toiSub": "A beautiful online invite — ready in 5 min, share the link with guests",
    "apps.tpl": "Ready templates", "apps.tplSub": "Wedding · birthday · uzatu toi — ready-made designs",
    "apps.site": "Website for business", "apps.siteSub": "A modern site that brings clients: landing, online store",
    "apps.bot": "Chatbot", "apps.botSub": "WhatsApp / Telegram bot — takes orders 24/7",
    "hero.badge": "● Open for new projects",
    "hero.title": 'Create an invitation, <span class="grad">order a business site</span>',
    "hero.lead": "Pick an invitation template and edit it yourself — or order a modern website/bot for your business. All in one place.",
    "hero.cta1": "Create invitation", "hero.cta2": "Business website",
    "hero.stat1": "projects", "hero.stat2": "days avg", "hero.stat3": "responsive",
    "hero.float1": "💬 New client messaged", "hero.float2": "📈 Conversion +48%",
    "services.eyebrow": "Services", "services.title": "Whatever you need — I'll build it",
    "s1t": "Landing page", "s1d": "A one-page site to sell one service, where clients reach out instantly.",
    "s2t": "Business website", "s2d": "About, services, pricing, reviews and contact — a full presentation.",
    "s3t": "Online store", "s3d": "Catalog, cart and checkout. Clients buy directly on the site.",
    "s4t": "Redesign", "s4d": "I'll turn your old site into a modern, fast one.",
    "s5t": "Mobile-friendly", "s5d": "Looks perfect on both phone and desktop.",
    "s6t": "Speed & SEO", "s6d": "Fast-loading site that ranks high on Google.",
    "s7t": "Chatbots", "s7d": "WhatsApp & Telegram bots — take orders, auto-answer questions, work 24/7.",
    "gallery.eyebrow": "Invitation builder", "gallery.title": "Create your own invitation", "gallery.sub": "Pick a template — add text, photo, music. Ready in 5 minutes.", "gallery.cta": "✨ Create an invitation", "gallery.ctaNote": "Pick a template → add text, photo, music → get your ready invitation", "gallery.or": "Pick a template → «Edit template» → change text & photos → get it", "gallery.view": "👁 Preview", "gallery.edit": "✏️ Edit this template",
    "why.eyebrow": "Why me", "why.title": "A site shouldn't just look good — it should make money",
    "w1t": "Sales-focused", "w1d": "Every block guides the client toward contact.",
    "w2t": "Fast delivery", "w2d": "Most projects are ready in 5–7 days.",
    "w3t": "3 languages", "w3d": "I adapt the copy to your target audience.",
    "w4t": "Support", "w4d": "I help with changes even after launch.",
    "calc.eyebrow": "Calculator", "calc.title": "Get an instant price", "calc.sub": "Pick the options — see an estimate instantly.",
    "calc.lblType": "Site type", "calc.type1": "Landing", "calc.type2": "Business site", "calc.type3": "Online store",
    "calc.lblAddons": "Add-ons", "calc.add1": "Custom design", "calc.add2": "Multi-language", "calc.add3": "Online payment", "calc.add4": "SEO setup", "calc.add5": "Admin panel", "calc.add6": "Chatbot (WhatsApp/TG)",
    "calc.lblSpeed": "How urgent?", "calc.speed1": "Normal (7 days)", "calc.speed2": "Rush (3 days)",
    "calc.resultLabel": "Estimated price", "calc.note": "This is an estimate. The final price is set after a chat.", "calc.order": "Order with this estimate",
    "faq.eyebrow": "FAQ", "faq.title": "Frequently asked questions",
    "faq.q1": "How long until the site is ready?", "faq.a1": "Landing — 3–5 days, business site — 5–7 days. Rush option is faster.",
    "faq.q2": "What do I need to prepare?", "faq.a2": "A short brief about your business and (if any) logo/photos. I'll handle the rest.",
    "faq.q3": "Can I edit the site myself?", "faq.a3": "Yes. I can add an admin panel or help with edits later.",
    "faq.q4": "What about domain & hosting?", "faq.a4": "I'll fully help you choose a domain and deploy to hosting.",
    "faq.q5": "How does payment work?", "faq.a5": "Usually 50% upfront, 50% on completion.",
    "contact.eyebrow": "Contact", "contact.title": "Let's discuss your project", "contact.p": "Fill the form or reach out directly. I'll evaluate your idea for free.", "contact.wa": "🟢 Message on WhatsApp",
    "form.name": "Name", "form.namePh": "e.g. Bekzat", "form.phone": "Phone / WhatsApp", "form.type": "What do you need?",
    "form.opt1": "Landing page", "form.opt2": "Business website", "form.opt3": "Online store", "form.opt4": "Redesign", "form.opt6": "Chatbot (WhatsApp/Telegram)", "form.opt5": "Not sure yet",
    "form.msg": "Short description", "form.msgPh": "A few words about your business...", "form.submit": "Send via WhatsApp", "form.note": "The button opens a pre-filled WhatsApp message.",
    "footer.text": "© 2026 EB.design · Esbolat — Web design", "footer.up": "Back to top ↑",
    "tab.home": "Home", "tab.work": "Work", "tab.price": "Price", "tab.contact": "Contact",
    "wa.leadIntro": "Hi! I'd like to order a website/bot.", "wa.name": "👤 Name", "wa.phone": "📞 Phone", "wa.kind": "🖥 Need", "wa.desc": "📝 Details",
    "wa.calcIntro": "Hi! I'd like to order based on this estimate.", "wa.picked": "✅ Selected", "wa.price": "💰 Estimated price",
  },
};

let currentLang = localStorage.getItem("lang") || "kk";

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.kk[key] || key;
}

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : "kk";
  localStorage.setItem("lang", currentLang);
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = t(el.dataset.i18nHtml);
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const v = t(el.dataset.i18nPh);
    if (v) el.placeholder = v;
  });

  document.querySelectorAll("#lang .lang__btn").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.lang === currentLang)
  );
}

const langEl = document.getElementById("lang");
if (langEl) langEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang__btn");
  if (btn) applyLang(btn.dataset.lang);
});
applyLang(currentLang);

// ===================================================================
//  Лид формасы → WhatsApp
// ===================================================================
const form = document.getElementById("leadForm");
if (form) form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").trim();
  const phone = (data.get("phone") || "").trim();
  const type = data.get("type") || "";
  const message = (data.get("message") || "").trim();

  const text =
    `${t("wa.leadIntro")}%0A%0A` +
    `${t("wa.name")}: ${encodeURIComponent(name)}%0A` +
    `${t("wa.phone")}: ${encodeURIComponent(phone)}%0A` +
    `${t("wa.kind")}: ${encodeURIComponent(type)}%0A` +
    (message ? `${t("wa.desc")}: ${encodeURIComponent(message)}` : "");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});

// ===== Тема ауыстырғыш (қараңғы/жарық) =====
const themeToggle = document.getElementById("themeToggle");
const savedLight = localStorage.getItem("theme") === "light";
if (savedLight) document.body.classList.add("light");
if (themeToggle) {
  if (savedLight) themeToggle.textContent = "☀️";
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

// ===== Мобильді бургер-меню =====
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if (burger && navLinks) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    navLinks.classList.toggle("is-open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("is-open");
      navLinks.classList.remove("is-open");
    })
  );
}

// ===== Скроллда жанданатын санауыштар =====
function animateCount(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || "";
  const duration = 1200;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== Скролл-анимация (reveal) + санауыштар =====
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("reveal")) entry.target.classList.add("is-in");
        if (entry.target.classList.contains("count")) animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".reveal, .count").forEach((el) => io.observe(el));

// ===== FAQ аккордеон =====
document.querySelectorAll(".faq__item").forEach((item) => {
  const q = item.querySelector(".faq__q");
  const a = item.querySelector(".faq__a");
  if (!q || !a) return;
  q.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    document.querySelectorAll(".faq__item").forEach((i) => {
      i.classList.remove("is-open");
      const ia = i.querySelector(".faq__a");
      if (ia) ia.style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("is-open");
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});

// ===== Баға калькуляторы =====
const calc = document.querySelector(".calc");
if (calc) {
  const priceEl = document.getElementById("calcPrice");
  const format = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  calc.querySelectorAll(".chips:not(.chips--multi)").forEach((group) => {
    group.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      group.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      recalc();
    });
  });
  calc.querySelectorAll(".chips--multi").forEach((group) => {
    group.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      chip.classList.toggle("is-active");
      recalc();
    });
  });

  function recalc() {
    let total = 0;
    calc.querySelectorAll(".chip.is-active").forEach((c) => (total += +c.dataset.price));
    priceEl.textContent = format(total);
    return total;
  }
  recalc();

  document.getElementById("calcOrder").addEventListener("click", () => {
    const total = recalc();
    const picked = [];
    calc.querySelectorAll(".chip.is-active").forEach((c) => picked.push(c.textContent.trim()));
    const text =
      `${t("wa.calcIntro")}%0A%0A` +
      `${t("wa.picked")}: ${encodeURIComponent(picked.join(", "))}%0A` +
      `${t("wa.price")}: ${encodeURIComponent(format(total))} ₸`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  });
}

// ===== Мобиль tab bar — скроллда белсенді бөлімді белгілеу =====
const tabbar = document.getElementById("tabbar");
if (tabbar) {
  const tabItems = [...tabbar.querySelectorAll(".tabbar__item")];
  const sections = tabItems
    .map((a) => {
      const href = a.getAttribute("href");
      return href && href.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          tabItems.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ============================================================
   ✦ Aurora scroll-reveal — элементтер айналдырғанда жұмсақ шығады
   ============================================================ */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".appcard, .tpl-card, .feature, .section h2, .section__sub, .eyebrow, .stats, .contact, .calc, .templates__or"
  );
  if (!targets.length || reduce || !("IntersectionObserver" in window)) return; // JS жоқ/reduce → бәрі көрінеді
  document.body.classList.add("reveal-ready");
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 5) * 70 + "ms";
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  targets.forEach(function (el) { io.observe(el); });
})();
