# Yugal Joshi — Personal Website

A responsive GitHub Pages-ready personal site for Yugal Joshi, built as a static site using **Bootstrap 5.3 + custom CSS**. It includes a polished light/dark theme, responsive navigation, research/work sections, timeline, and contact links.

## Run locally

Because this is a static site, you can simply open `index.html`. For a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

1. Create a repository (for example, `yugs-codes.github.io`).
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, then select the `main` branch and `/root`.
5. Save. GitHub will publish the site.

The site uses CDN-hosted Bootstrap, Bootstrap Icons, and Google Fonts, so no Node.js build step is required.

## Files

- `index.html` — page content and theme toggle logic
- `styles.css` — custom UI, layout and responsive styles
- `resume.pdf` — resume linked from the site
