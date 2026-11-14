# Native-script landing fonts

Downloaded November 14, 2026, from the official Google Fonts CSS API and Google Fonts GitHub repository. The WOFF2 bytes are unmodified Google-hosted script subsets. Only Arabic and Devanagari subsets are bundled; existing Lausanne / Latin fonts remain the Latin fallback.

CSS request: https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400..800&family=Noto+Sans+Devanagari:wght@400..800&display=swap

## Included subsets

- `noto-sans-arabic-arabic-variable.woff2`: **400–800 variable weight**, normal style, normal width; 165,960 bytes.
  Source: https://fonts.gstatic.com/s/notosansarabic/v33/nwpCtLGrOAZMl5nJ_wfgRg3DrWFZWsnVBJ_sS6tlqHHFlj4wv4r4xA.woff2
  SHA-256: `ce85091f020920b65762b387b194ef59457ea5b25b760f2dcc35240a94bb8669`

```css
@font-face {
  font-family: 'Noto Sans Arabic';
  font-style: normal;
  font-weight: 400 800;
  font-stretch: 100%;
  font-display: swap;
  src: url(/assets/fonts/noto-sans-arabic-arabic-variable.woff2) format('woff2');
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC7, U+10EC9-10EEE, U+10EF0-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;
}
```

- `noto-sans-devanagari-devanagari-variable.woff2`: **400–800 variable weight**, normal style, normal width; 120,056 bytes.
  Source: https://fonts.gstatic.com/s/notosansdevanagari/v33/TuG7UUFzXI5FBtUq5a8bjKYTZjtRU6Sgv3NaV_SNmI0b8QQCQmHN5TV_9qo.woff2
  SHA-256: `6c354352c14e6c5507f8c0fc8985134407d09f12c1577f5706ca58e62fb4cd2f`

```css
@font-face {
  font-family: 'Noto Sans Devanagari';
  font-style: normal;
  font-weight: 400 800;
  font-stretch: 100%;
  font-display: swap;
  src: url(/assets/fonts/noto-sans-devanagari-devanagari-variable.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF4, U+1CF7-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B0A;
}
```

Noto Sans Arabic covers Arabic and Urdu through the Arabic script subset, including Urdu-specific Arabic letters. Use the font at 800 for the hero, and 400–600 for UI. Apply `dir="rtl"` separately for Arabic/Urdu; a font does not establish text direction. Noto Sans Devanagari covers Hindi. Preserve shaping across joined letters; do not split Arabic/Urdu words into individual animated characters.

## Licenses

- `NotoSansArabic-OFL.txt`: https://raw.githubusercontent.com/google/fonts/main/ofl/notosansarabic/OFL.txt
- `NotoSansDevanagari-OFL.txt`: https://raw.githubusercontent.com/google/fonts/main/ofl/notosansdevanagari/OFL.txt

Both are licensed under SIL Open Font License 1.1. The license files are copied verbatim.
