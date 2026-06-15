/* ============================================================
 * Shakyrtu.kz — Invitation templates data
 * Plain vanilla JS, no modules, no build step.
 *
 * window.SHK_TEMPLATES : Array<{
 *   id:    string,                  // stable unique id
 *   name:  { kk:string, ru:string },// display name
 *   category: string,               // matches i18n cat.* (wedding|uzatu|merey|...)
 *   variant: string,                // visual style label
 *   html:  string                   // self-contained 9:16 invitation markup
 * }>
 *
 * Editor targeting contract:
 *   - Editable TEXT nodes carry class "shk-editable" (+ data-shk-field id).
 *   - Editable IMAGES carry class "shk-img" (+ data-shk-field id).
 *   - Calligraphic names use font-family "Great Vibes".
 *
 * Helper:
 *   window.renderTemplate(id, mountEl) -> the rendered root element (or null).
 *     Injects the template html into mountEl and returns it.
 *
 * NOTE: html uses inline styles only so each invitation renders correctly
 * without depending on styles.css (preview/iframe/standalone safe).
 * Make sure Google Fonts (Great Vibes, Cormorant Garamond, Inter) are
 * linked on the host page.
 * ============================================================ */
(function () {
  "use strict";

  /* Shared frame: locks every template to a vertical 9:16 card. */
  function frame(inner, bgStyle) {
    return (
      '<div class="shk-invite" style="position:relative;width:100%;max-width:400px;' +
      "aspect-ratio:9/16;margin:0 auto;border-radius:22px;overflow:hidden;" +
      "box-shadow:0 20px 60px rgba(0,0,0,.18);" +
      "font-family:'Cormorant Garamond',Georgia,serif;" +
      'display:flex;flex-direction:column;' + bgStyle + '">' +
      inner +
      "</div>"
    );
  }

  /* A tiny inline floral/leaf SVG used as decoration (gold). */
  var LEAF =
    '<svg width="54" height="54" viewBox="0 0 64 64" fill="none" aria-hidden="true" style="opacity:.9">' +
    '<path d="M32 6C20 18 12 30 12 44c0 8 6 14 14 14M32 6c12 12 20 24 20 38 0 8-6 14-14 14M32 6v52" ' +
    'stroke="#C9A55C" stroke-width="1.4" stroke-linecap="round"/>' +
    '<path d="M22 22c4 2 7 5 9 9M42 22c-4 2-7 5-9 9M18 38c5 1 9 4 12 8M46 38c-5 1-9 4-12 8" ' +
    'stroke="#C9A55C" stroke-width="1.2" stroke-linecap="round"/></svg>';

  var SHK_TEMPLATES = [
    /* ---------------------------------------------------------------
     * 1) DARK ELEGANT — deep olive/black, gold calligraphy, wedding
     * --------------------------------------------------------------- */
    {
      id: "dark-elegant",
      name: { kk: "Қою сәнді", ru: "Тёмный элегантный" },
      category: "wedding",
      cats: ["wedding", "uzatu", "sundet", "besik"],
      variant: "dark-elegant",
      html: frame(
        '<div style="position:absolute;inset:0;background:' +
          "radial-gradient(120% 80% at 50% 0%,#26301f 0%,#1a2016 55%,#10130c 100%);\"></div>" +
        '<div style="position:absolute;top:18px;left:50%;transform:translateX(-50%);">' + LEAF + "</div>" +
        '<div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;' +
          'align-items:center;justify-content:center;text-align:center;padding:48px 28px;color:#EFE7D6;">' +
          '<div class="shk-editable" data-shk-field="eyebrow" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.34em;font-size:11px;text-transform:uppercase;color:#C9A55C;margin-bottom:22px;">' +
            "Сіздерді тойымызға шақырамыз</div>" +
          '<div class="shk-editable" data-shk-field="names" style="font-family:\'Great Vibes\',cursive;' +
            'font-size:52px;line-height:1.05;color:#C9A55C;margin:6px 0 4px;">Алпамыс &amp; Арайлым</div>' +
          '<div style="width:70px;height:1px;background:#C9A55C;opacity:.6;margin:22px 0;"></div>' +
          '<div class="shk-editable" data-shk-field="body" style="font-size:19px;line-height:1.5;' +
            'max-width:260px;color:#D8D0BE;">Біздің бақытты күнімізге куә болуыңызды сұраймыз</div>' +
          '<div class="shk-editable" data-shk-field="date" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.28em;font-size:18px;margin-top:30px;color:#EFE7D6;">12 . 06 . 2026</div>' +
          '<div class="shk-editable" data-shk-field="venue" style="font-size:17px;margin-top:10px;' +
            'color:#9B9285;">«Алтын Орда» мейрамханасы, 18:00</div>' +
        "</div>" +
        '<div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%) rotate(180deg);">' +
          LEAF + "</div>",
        "background:#10130c;"
      ),
    },

    /* ---------------------------------------------------------------
     * 2) CREAM MINIMAL — cream/beige, gold, airy, uzatu toi
     * --------------------------------------------------------------- */
    {
      id: "cream-minimal",
      name: { kk: "Кремді минимал", ru: "Кремовый минимал" },
      category: "uzatu",
      cats: ["wedding", "uzatu", "merey", "tusaukeser"],
      variant: "cream-minimal",
      html: frame(
        '<div style="position:absolute;inset:0;background:' +
          "linear-gradient(180deg,#FBF7F0 0%,#F5F0E8 100%);\"></div>" +
        '<div style="position:absolute;top:0;left:0;right:0;height:6px;background:#C9A55C;"></div>' +
        '<div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;' +
          'align-items:center;justify-content:center;text-align:center;padding:54px 30px;color:#1F1B16;">' +
          '<div class="shk-editable" data-shk-field="eyebrow" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.36em;font-size:11px;text-transform:uppercase;color:#9B9285;margin-bottom:28px;">' +
            "Құрметті қонақтар!</div>" +
          '<div class="shk-editable" data-shk-field="title" style="font-size:22px;letter-spacing:.04em;' +
            'color:#2B2B2B;margin-bottom:6px;">Қыз ұзату тойы</div>' +
          '<div class="shk-editable" data-shk-field="names" style="font-family:\'Great Vibes\',cursive;' +
            'font-size:60px;line-height:1;color:#C9A55C;margin:14px 0;">Аружан</div>' +
          '<div class="shk-editable" data-shk-field="body" style="font-size:19px;line-height:1.55;' +
            'max-width:250px;color:#5b5347;">Сіздерді шаңырағымыздағы қуанышты сәтке шақырамыз</div>' +
          '<div style="display:flex;align-items:center;gap:14px;margin-top:30px;">' +
            '<span style="width:34px;height:1px;background:#C9A55C;"></span>' +
            '<span class="shk-editable" data-shk-field="date" style="font-family:Inter,sans-serif;' +
              'letter-spacing:.2em;font-size:17px;color:#1F1B16;">12 . 06 . 2026</span>' +
            '<span style="width:34px;height:1px;background:#C9A55C;"></span>' +
          "</div>" +
          '<div class="shk-editable" data-shk-field="venue" style="font-size:16px;margin-top:12px;' +
            'color:#9B9285;">Той сағат 17:00-де басталады</div>' +
        "</div>",
        "background:#F5F0E8;"
      ),
    },

    /* ---------------------------------------------------------------
     * 3) NATURE / GARDEN — photo + green garden overlay, merey toi
     * --------------------------------------------------------------- */
    {
      id: "nature-garden",
      name: { kk: "Бақ / табиғат", ru: "Сад / природа" },
      category: "merey",
      cats: ["wedding", "merey", "besik", "tusaukeser"],
      variant: "nature-garden",
      html: frame(
        '<img class="shk-img" data-shk-field="bg" alt="" ' +
          'src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&amp;fit=crop&amp;w=800&amp;q=70" ' +
          'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">' +
        '<div style="position:absolute;inset:0;background:' +
          "linear-gradient(180deg,rgba(20,38,24,.30) 0%,rgba(20,38,24,.55) 60%,rgba(12,24,15,.82) 100%);\"></div>" +
        '<div style="position:absolute;top:18px;left:50%;transform:translateX(-50%);">' + LEAF + "</div>" +
        '<div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;' +
          'align-items:center;justify-content:flex-end;text-align:center;padding:40px 28px 50px;color:#FBF7F0;">' +
          '<div class="shk-editable" data-shk-field="eyebrow" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.32em;font-size:11px;text-transform:uppercase;color:#E7D9B6;margin-bottom:14px;">' +
            "Құрметті қонақтар!</div>" +
          '<div class="shk-editable" data-shk-field="names" style="font-family:\'Great Vibes\',cursive;' +
            'font-size:56px;line-height:1.05;color:#F0E2BC;text-shadow:0 2px 18px rgba(0,0,0,.4);margin-bottom:6px;">' +
            "Серік аға 60 жаста</div>" +
          '<div class="shk-editable" data-shk-field="body" style="font-size:19px;line-height:1.5;' +
            'max-width:260px;color:#EDE7DA;">Сіздерді мерейлі мерекемізге шақырамыз</div>' +
          '<div class="shk-editable" data-shk-field="date" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.26em;font-size:18px;margin-top:24px;color:#fff;">12 . 06 . 2026</div>' +
          '<div class="shk-editable" data-shk-field="venue" style="font-size:16px;margin-top:8px;' +
            'color:#cfc8b8;">«Жайлау» демалыс орны, 13:00</div>' +
        "</div>",
        "background:#142618;"
      ),
    },

    /* ---------------------------------------------------------------
     * 4) BLACK GOLD — pure black, gold foil frame, sundet toi
     * --------------------------------------------------------------- */
    {
      id: "black-gold",
      name: { kk: "Қара алтын", ru: "Чёрное золото" },
      category: "sundet",
      cats: ["wedding", "sundet", "merey", "uzatu"],
      variant: "black-gold",
      html: frame(
        '<div style="position:absolute;inset:0;background:' +
          "radial-gradient(120% 90% at 50% 30%,#1c1a14 0%,#000 100%);\"></div>" +
        '<div style="position:absolute;inset:18px;border:1px solid #C9A55C;border-radius:14px;opacity:.65;"></div>' +
        '<div style="position:absolute;inset:24px;border:1px solid rgba(201,165,92,.35);border-radius:10px;"></div>' +
        '<div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;' +
          'align-items:center;justify-content:center;text-align:center;padding:54px 34px;color:#F3E9CE;">' +
          '<div style="margin-bottom:10px;">' + LEAF + "</div>" +
          '<div class="shk-editable" data-shk-field="eyebrow" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.4em;font-size:11px;text-transform:uppercase;color:#C9A55C;margin-bottom:18px;">' +
            "Сіздерді тойымызға шақырамыз</div>" +
          '<div class="shk-editable" data-shk-field="title" style="font-size:20px;letter-spacing:.06em;' +
            'color:#E7D9B6;margin-bottom:4px;">Сүндет той</div>' +
          '<div class="shk-editable" data-shk-field="names" style="font-family:\'Great Vibes\',cursive;' +
            'font-size:58px;line-height:1;color:#D4AF52;margin:10px 0;">Айсұлтан</div>' +
          '<div style="width:64px;height:1px;background:linear-gradient(90deg,transparent,#C9A55C,transparent);margin:18px 0;"></div>' +
          '<div class="shk-editable" data-shk-field="body" style="font-size:19px;line-height:1.5;' +
            'max-width:250px;color:#D8CDAE;">Қуанышымызды бөлісуге шақырамыз</div>' +
          '<div class="shk-editable" data-shk-field="date" style="font-family:Inter,sans-serif;' +
            'letter-spacing:.3em;font-size:18px;margin-top:26px;color:#F3E9CE;">12 . 06 . 2026</div>' +
          '<div class="shk-editable" data-shk-field="venue" style="font-size:16px;margin-top:10px;' +
            'color:#9B9285;">«Сarai» сарайы, 12:00</div>' +
        "</div>",
        "background:#000;"
      ),
    },
  ];

  /* Expose data */
  window.SHK_TEMPLATES = SHK_TEMPLATES;

  /* Lookup by id */
  window.getTemplate = function (id) {
    for (var i = 0; i < SHK_TEMPLATES.length; i++) {
      if (SHK_TEMPLATES[i].id === id) return SHK_TEMPLATES[i];
    }
    return null;
  };

  /* Render a template's html into a mount element.
   * mountEl may be an element or a CSS selector string.
   * Returns the mount element (with html injected) or null. */
  window.renderTemplate = function (id, mountEl) {
    var tpl = window.getTemplate(id);
    var el = typeof mountEl === "string" ? document.querySelector(mountEl) : mountEl;
    if (!tpl || !el) return null;
    el.innerHTML = tpl.html;
    el.setAttribute("data-shk-template", tpl.id);
    return el;
  };
})();
