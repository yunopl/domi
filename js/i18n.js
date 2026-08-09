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
    heroTitle: "Zima, zdjęcia i trochę kodu.",
    heroLede:
      "Moja strona — zdjęcia, projekty i to, czym się teraz zajmuję. Dopiero ją zaczynam, będzie się rozrastać.",
    heroCta: "Zobacz aktualizacje",
    aboutEyebrow: "O mnie",
    aboutTitle: "O mnie",
    aboutBody:
      "Tu będzie krótki opis mnie — na razie placeholder, uzupełnię później.",
    exploreEyebrow: "Odkrywaj",
    exploreTitle: "Co tu jeszcze jest",
    card1Title: "Aktualizacje",
    card1Body: "Krótkie wpisy o tym, co u mnie słychać.",
    card2Title: "Ciekawostki",
    card2Body: "Jeszcze w budowie — wpadnij później.",
    updatesEyebrow: "Aktualizacje",
    updatesTitle: "Co słychać",
    updatesLede: "Krótkie wpisy — najnowsze na górze.",
    updatesEmpty: "Na razie pusto. Pierwszy wpis pojawi się wkrótce.",
    soonEyebrow: "W budowie",
    soonTitle: "Jeszcze tu pusto",
    soonBody: "Coś się szykuje, ale jeszcze nie jest gotowe.",
    soonBack: "Wróć na start",
  },
  en: {
    navHome: "Home",
    navUpdates: "Updates",
    navSoon: "Coming soon",
    heroEyebrow: "Hey, it's Domi",
    heroTitle: "Winter, photos, and a bit of code.",
    heroLede:
      "My site — photos, projects, and whatever I'm into right now. Just getting started, more is coming.",
    heroCta: "See updates",
    aboutEyebrow: "About",
    aboutTitle: "About",
    aboutBody: "A short bio will go here — placeholder for now.",
    exploreEyebrow: "Explore",
    exploreTitle: "What else is here",
    card1Title: "Updates",
    card1Body: "Short posts about what's going on with me.",
    card2Title: "Fun facts",
    card2Body: "Still under construction — check back later.",
    updatesEyebrow: "Updates",
    updatesTitle: "What's new",
    updatesLede: "Short updates — newest first.",
    updatesEmpty: "Nothing here yet. First post coming soon.",
    soonEyebrow: "Under construction",
    soonTitle: "Still empty here",
    soonBody: "Something's coming, just not ready yet.",
    soonBack: "Back to home",
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
