# Nischay Rajdev — Resume Website

Single-page resume site. Monospace type, toggleable light/dark theme, scroll-triggered roadmap animation, CSS-only layout (no frameworks).

## Features
- **Light/dark theme toggle** — top-right switch, remembers your choice via `localStorage`
- **Hover interactions** — the avatar, nav links, focus tags, and each roadmap entry respond to the cursor (subtle lift, color shift, or highlight)
- **Animated roadmap** — timeline entries start off-screen at alternating corners and glide into place as you scroll them into view, via `IntersectionObserver`
- **Accessible by default** — respects `prefers-reduced-motion` (animations are skipped, content just appears), and everything still renders correctly with JavaScript disabled

## Files
- `index.html` — page structure and content
- `style.css` — all styling (theme tokens, layout, hover states, scroll-reveal animation, responsive rules)
- `script.js` — theme toggle + roadmap scroll-reveal logic
- `assets/photo.jpg` — your photo

## How the roadmap animation works
Each `<li class="timeline-item reveal">` starts hidden and offset toward a corner — odd entries drift in from the top-left, even entries from the top-right. `script.js` watches each entry with an `IntersectionObserver`; the moment ~20% of it scrolls into view, it gets an `in-view` class and CSS transitions it into its normal position. Once revealed, an entry stays revealed (it won't re-hide if you scroll back up).

To tweak the feel:
- **Distance/angle** — edit the `translate3d(...)` values on `.timeline-item.reveal` and `.timeline-item.reveal:nth-child(even)` in `style.css`
- **Speed/easing** — edit the `transition` duration/curve on the same rule
- **Trigger point** — edit `threshold` / `rootMargin` in the `IntersectionObserver` call in `script.js`

## Push to your existing GitHub repo

If you already have the repo from the HTML module cloned locally:

```bash
# from inside your existing repo folder
cp -r path/to/these/files/* .
git add .
git commit -m "Add hover states and scroll-reveal roadmap animation"
git push
```

If you don't have it cloned locally, clone it first:

```bash
git clone https://github.com/NotNish/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
# copy index.html, style.css, script.js, assets/ into this folder
git add .
git commit -m "Add hover states and scroll-reveal roadmap animation"
git push
```

## (Optional) Turn on GitHub Pages to view it live
1. On GitHub, go to your repo → **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to "Deploy from a branch"
3. Pick the `main` branch and `/ (root)` folder → **Save**
4. Your site will be live at `https://notnish.github.io/YOUR-REPO-NAME/` in a minute or two
