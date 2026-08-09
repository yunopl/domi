# Strona — Domi

Prosta, statyczna strona (bez buildowania, bez frameworków). Motyw zimowy,
dwujęzyczna (PL/EN), z przezroczystymi "szklanymi" panelami.

## Struktura

```
index.html          -> strona główna
aktualizacje.html    -> lista aktualizacji (timeline)
wkrotce.html          -> placeholder / strona w budowie
css/style.css         -> cały styl (kolory, typografia, layout)
js/i18n.js             -> słownik PL/EN + przełącznik języka
js/updates-data.js     -> TU dodajesz nowe aktualizacje
js/updates.js          -> renderuje aktualizacje na stronie
js/snow.js              -> animacja śniegu w tle (canvas)
```

## Jak dodać nową aktualizację

Otwórz `js/updates-data.js` i dodaj nowy obiekt na **początku** tablicy
`UPDATES` (najnowsze wpisy są na górze):

```js
{
  date: "2026-08-20",
  title_pl: "Tytuł po polsku",
  title_en: "Title in English",
  body_pl: "Treść po polsku.",
  body_en: "Content in English.",
},
```

Nic więcej nie trzeba ruszać — strona `aktualizacje.html` sama to wyrenderuje.

## Jak dodać nowy tekst w dwóch językach (nie na stronie aktualizacji)

1. W `js/i18n.js` dodaj nowy klucz do obiektów `I18N.pl` i `I18N.en`.
2. W HTML dodaj do elementu atrybut `data-i18n="twojKlucz"`.

## Jak dodać nową podstronę

1. Skopiuj `wkrotce.html` jako punkt startowy (ma już nawigację, śnieg, stopkę).
2. Zmień `<title>` i treść w `<main>`.
3. Dodaj link do niej w sekcji `.nav-links` na każdej stronie (`index.html`,
   `aktualizacje.html`, `wkrotce.html`) — najprościej: znajdź i zamień we
   wszystkich plikach na raz.

## Uruchomienie lokalnie

Strona nie wymaga serwera ani buildowania — wystarczy otworzyć `index.html`
w przeglądarce. Do podglądu z „prawdziwym” adresem można też użyć np.:

```
python3 -m http.server 8000
```

i wejść na `http://localhost:8000`.

## Wrzucenie na GitHub Pages

1. Wrzuć całą zawartość tego folderu do repozytorium na GitHubie.
2. W ustawieniach repo: **Settings → Pages → Branch: main → folder: / (root)**.
3. Strona pojawi się pod adresem `https://<twoj-user>.github.io/<repo>/`.

## Licencja

- Kod (HTML/CSS/JS) — MIT, patrz `LICENSE`.
- Zdjęcia i treści — wszelkie prawa zastrzeżone, patrz `CONTENT-LICENSE.md`.

Wybierając licencję repo na GitHubie zaznacz **MIT License** — dotyczy
kodu. Ochronę treści zapewniają dodatkowo oba pliki powyżej.

## Co warto podmienić

- Nazwę „Domi” w `<a class="brand">` i w treściach — jeśli chcesz coś innego.
- Linki `href="#"` w stopce (Instagram, e-mail) na prawdziwe.
- Tekst w sekcji „O mnie” na `index.html` (obecnie placeholder, PL i EN
  w `js/i18n.js` pod kluczem `aboutBody`).
- Fonty ładowane są z Google Fonts (Fraunces, Public Sans, JetBrains Mono) —
  jeśli wolisz działać offline, można je pobrać lokalnie.
