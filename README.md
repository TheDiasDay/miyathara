# Miyathara · Map Cam

## Preview

Open `index.html` in a recent browser with an internet connection. The cover image is bundled. The logo uses live text and an inline SVG wave, so it stays sharp at any display density or browser zoom. The map uses MapLibre GL JS and OpenFreeMap tiles with attribution shown on the map. If the tiles or WebGL are unavailable, the directory and story cards still work.

## GitHub Pages

1. Extract the archive and upload its contents to the root of the repository. Keep the `assets` directory and `.nojekyll`.
2. In **Settings → Pages**, choose **Deploy from a branch**, select **main / (root)** and save.
3. Open the Pages URL in a private window and test **About**, **How it works**, language selection and **Go to map → Alakol → The Change → Aral Sea**. Repeat at phone width.

## Fonts and content

The font families are configured as local fonts. Use licensed WOFF2 files for Season Serif Bold (logo, weight 800), Avenir Next LT Pro Regular, Avenir Next LT Pro Demi and Apple Garamond Light Italic for identical typography on machines without those fonts. Add their relative URLs as final entries in the matching `@font-face` rules in `style.css`; the Season family alias is `Season Serif-TRIAL`. No font binaries are bundled, so other devices use the specified fallback fonts. The logo scales from a 25px title and 13px tagline at a 1440px viewport, with smaller and larger sizes bounded for readability.

All seven water bodies have four story sections in English, Russian and Kazakh. Editorial content and source links live in `stories.js` and were reviewed on 7 November 2026. Source links are retained for editorial reference and are not displayed in the cards. Historical dates and planned conservation work are distinguished from completed actions; the cards do not represent live measurements. Pin locations use representative coordinates. Map geometry is provided by OpenStreetMap and the underlying OpenFreeMap sources.

All location selections use a 1.7-second MapLibre flight, including long-distance transitions and selections made during another flight. System reduced-motion preferences use an immediate camera change instead.
