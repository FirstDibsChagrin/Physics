# ⚛ Force & Field — AP Physics C Self-Study Companion

An interactive study site for **AP Physics C: Mechanics** and **AP Physics C: Electricity & Magnetism**, built to pair with the AP Classroom Daily Videos: watch a video, then come here to make it stick with simulations, live graphs, and exam-style practice.

## What's inside

- **13 units / 72 topic pages** — one page for every numbered topic in the official College Board Course and Exam Descriptions (effective Fall 2024):
  - Mechanics Units 1–7 (topics 1.1 – 7.5)
  - E&M Units 8–13 (topics 8.1 – 13.6)
- **31 interactive simulations** (64 placements) — projectile motion, energy tracks, collisions, rolling races, orbits, draggable point-charge fields, Gauss's law, capacitor lab, animated circuits, RC/LR/LC dynamics, sliding-rail induction, and more
- **360 practice problems** — 3 multiple-choice (instant feedback + explanations) and 2 FRQ-style problems (full worked solutions) per topic
- **Live graphs everywhere** — x/v/a curves, potential wells, V–I curves, flux/emf traces
- **Auto-built equation sheets** per course, assembled from every topic's key equations
- **Progress tracking** (localStorage) with completion rings per unit/course
- **Quick search** — press `/` anywhere

## Running it

It's a fully static site — no build step, no dependencies to install (KaTeX is vendored).

```bash
# any static server works:
python3 -m http.server 8000
# or
npx http-server -p 8000
```

Then open http://localhost:8000. Opening `index.html` directly from disk also works in most browsers.

### GitHub Pages

Settings → Pages → deploy from branch, root folder. Everything is relative-path, so it works from a project subpath.

## Structure

```
index.html          shell + script loading
css/style.css       design system (dark, glass, gradient accents)
js/plot.js          graph engine (static specs + live streaming plots)
js/simcore.js       simulation harness: controls, animation loop, draw helpers
js/sims-mech.js     20 mechanics simulations
js/sims-em.js       11 E&M simulations
js/app.js           hash router, page renderers, problems, search, progress
data/*.js           course content — one file per CED unit
tools/validate.js   schema/content validator (node tools/validate.js)
vendor/katex/       vendored KaTeX for offline math rendering
CONTENT_GUIDE.md    authoring schema for content files
```

## Study workflow suggestion

1. Watch the AP Daily videos for a topic in AP Classroom.
2. Open the matching topic page (numbering matches the CED exactly).
3. Read the sections, play with the sim until you can predict its behavior.
4. Do the 5 practice problems; read every solution, even ones you got right.
5. Mark the topic complete and let the rings fill up.
6. Before mocks, skim the per-course equation sheet.

*AP® is a registered trademark of the College Board, which was not involved in the production of this site.*
