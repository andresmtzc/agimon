# Agimon landing page

Static landing page hosted at https://agimon.io/ with GitHub Pages.

- Publish source: repository root on `main`.
- No build step or package installation is needed.
- Keep `index.html` and its supporting folders together.
- `CNAME` preserves the existing `agimon.io` custom domain.
- `.nojekyll` serves all asset filenames directly.
- Existing deck, onboarding, reports and other pages remain in the repository.

To preview locally, run `python3 -m http.server 8080` from this folder and open
http://localhost:8080/. The page must be served at the domain root because its
asset paths start with `/`.

The landing page includes ten languages, bundled fonts and images, and scripted
product animations. Its demo form uses the existing external lead notification
endpoint. No Agimon chat application backend is included here.

See `SOURCE.txt` and bundled attribution files for asset provenance.
