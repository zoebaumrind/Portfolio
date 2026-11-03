# Zoe Baumrind — Portfolio

A static portfolio site: plain HTML, CSS, and a little JavaScript. No build step, no framework. It deploys directly to GitHub Pages (or Netlify, Vercel, or any static host).

## Pages

| # | Page | File |
|---|------|------|
| 01 | Home — intro, professional interests, project previews | `index.html` |
| 02 | Selected Work — case studies with filters | `work.html` |
| 03 | Culture Lab — essays, a hot take, and my information diet | `culture-lab.html` |
| 04 | About — story, experience timeline, education, skills, resume | `about.html` |
| 05 | Contact — email, LinkedIn, downloadable resume | `contact.html` |

Shared files:

- `assets/css/style.css` — all styling. Colors and fonts are CSS variables at the top of the file.
- `assets/js/main.js` — mobile nav, work filters, active nav link, footer year.
- `assets/docs/Zoe_Baumrind_Resume.pdf` — the resume that every "Download resume" button points to.
- `assets/img/` — put your photo and any project images here.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick the branch (for example `main`) and the `/ (root)` folder. Save.
4. The site appears at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

To use a custom domain, add a `CNAME` file containing the domain and point the domain's DNS at GitHub Pages.

## Previewing locally

Open `index.html` in a browser, or run a tiny server from the folder so the relative links behave exactly as they will online:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing content

### Change your photo

The About page photo is `assets/img/zoe.jpg`. To swap it, replace that file with a new portrait using the same filename. A 4:5 crop (for example 800 by 1000 pixels) fits best.

### Update the resume

Replace `assets/docs/Zoe_Baumrind_Resume.pdf` with a new file using the same name. Every download button keeps working.

### Add a Culture Lab essay

In `culture-lab.html`, copy the `<section class="section on-cream-dark" id="field-notes">` block, give it a new `id`, bump the "Field notes · 01" label to the next number, and write. The `.pull` blockquote is optional. To feature it on the home page, edit the cards under "From the Culture Lab" in `index.html`.

### Update "My information diet" in the Culture Lab

In `culture-lab.html`, edit the short Reading, Watching, and Listening lines in `.diet-grid`, and the full lists inside the `<details class="full-list">` block (`<div class="rotation">`). Each pick is one `<li>` with a `<strong>` title and a `<span class="why">` one-liner. Add or remove `<li>` items freely; the columns adjust.

### Add a Selected Work case study

In `work.html`, copy one of the `<article class="case">` blocks. Set `data-tags` to any of `strategy`, `analytics`, `content`, `leadership` (space-separated) so the filter buttons pick it up. Give it an `id` if you want to link to it from the home page.

To add images to a case, drop them in `assets/img/` and add an `<img>` inside the left column of the case.

### Change colors or fonts

Edit the variables at the top of `assets/css/style.css`:

```css
--red: #8f1d1d;      /* primary */
--cream: #f4ecdc;    /* background */
--ink: #2f0c0c;      /* body text */
```

Fonts are loaded from Google Fonts in the `<head>` of each page: Anton (display), DM Sans (body), Instrument Serif (italic accents).

## Things to review before sharing widely

- The resume PDF on the site is your file exactly as you provided it, including your phone number.
- The Binghamton Marketing Collective dates on the About page are listed as 2024 – 2025; confirm the end date.
- The Selected Work page carries a "work in progress" note. Remove it once the case studies have visuals.
