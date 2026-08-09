/*
  Prosty system PL/EN.
  Jak dodać nowy tekst:
  1. Dodaj klucz w obiekcie I18N.pl i I18N.en poniżej.
  2. W HTML dodaj do elementu atrybut: data-i18n="twojKlucz"
     -> tekst elementu zostanie podmieniony automatycznie.
  Simple PL/EN system.
  To add new text:
  1. Add the key in both I18N.pl and I18N.en objects below.
  2. In HTML, add data-i18n="yourKey" to the element
     -> its text will be swapped automatically.
*/

const I18N = {
  pl: {
    navHome: "Start",
    navUpdates: "Aktualizacje",
    navSoon: "Wkrótce",
    heroEyebrow: "Cześć, tu Domi",
    heroTitle: "Zima, obiektywy i trochę kodu.",
    heroLede:
      "To moje małe miejsce w sieci — zdjęcia, projekty i to, czym akurat się zajmuję. Strona dopiero raczkuje, będzie się rozrastać.",
    heroCta: "Zobacz aktualizacje",
    aboutEyebrow: "O mnie",
    aboutTitle: "Kilka słów na start",
    aboutBody:
      "To miejsce na placeholder — opis, zdjęcie, cokolwiek chcesz tu wstawić. Docelowo tu wyląduje krótkie 'o mnie'.",
    exploreEyebrow: "Odkrywaj",
    exploreTitle: "Co tu jeszcze znajdziesz",
    card1Title: "Aktualizacje",
    card1Body: "Krótkie wpisy o tym, co się u mnie dzieje.",
    card2Title: "Ciekawostki",
    card2Body: "Podstrona w budowie — wpadnij tu później.",
    updatesEyebrow: "Aktualizacje",
    updatesTitle: "Co słychać",
    updatesLede: "Krótkie wpisy z życia — najnowsze na górze.",
    updatesEmpty: "Na razie pusto. Pierwszy wpis pojawi się tutaj wkrótce.",
    soonEyebrow: "W budowie",
    soonTitle: "Ta strona jeszcze marznie",
    soonBody: "Coś tu się szykuje, ale jeszcze nie jest gotowe. Zajrzyj później.",
    soonBack: "Wróć na start",
    footerNote: "Zbudowane własnoręcznie, zimą.",
  },
  en: {
    navHome: "Home",
    navUpdates: "Updates",
    navSoon: "Coming soon",
    heroEyebrow: "Hey, it's Domi",
    heroTitle: "Winter, lenses, and a bit of code.",
    heroLede:
      "This is my little corner of the web — photos, projects, and whatever I'm into right now. Still early days, more is coming.",
    heroCta: "See updates",
    aboutEyebrow: "About",
    aboutTitle: "A few words to start",
    aboutBody:
      "This is a placeholder spot — bio, photo, whatever you want here. A short 'about me' will eventually live in this spot.",
    exploreEyebrow: "Explore",
    exploreTitle: "What else is here",
    card1Title: "Updates",
    card1Body: "Short posts about what's going on with me.",
    card2Title: "Fun facts",
    card2Body: "Subpage under construction — check back later.",
    updatesEyebrow: "Updates",
    updatesTitle: "What's new",
    updatesLede: "Short life updates — newest first.",
    updatesEmpty: "Nothing here yet. The first entry will show up soon.",
    soonEyebrow: "Under construction",
    soonTitle: "This page is still freezing over",
    soonBody: "Something's coming, just not ready yet. Check back later.",
    soonBack: "Back to home",
    footerNote: "Built by hand, in winter.",
  },
};

function getLang() {
  return localStorage.getItem("lang") || "pl";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  const dict = I18N[lang] || I18N.pl;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) toggle.textContent = lang === "pl" ? "EN" : "PL";

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());

  const toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      setLang(getLang() === "pl" ? "en" : "pl");
    });
  }
});
