# Lab: HTML, CSS, and Vue.js Fundamentals

This lab is split into two parts:

- **Hour 1 (60 min): HTML (40 min) + CSS (20 min)**
- **Hour 2 (60 min): Vue.js fundamentals**

You’ll alternate between short explanations from the instructor, hands-on exercises,
working with classmates, and brief whole-class discussions.

If you fall behind during lab, this README is designed so you can rejoin at any point.

---

# 🕐 Hour 1 — HTML & CSS

Navigate to the HTML/CSS folder:

```bash
cd hour1-html-css
```

Open `index.html` in your browser (double-click it or use VS Code Live Server).

---

## 🧱 Exercise 1 — Basic HTML Structure (HTML · ~10 min)

**Goal:** Practice writing clean, readable HTML using headings, paragraphs, and sections.

### Steps

1. Open `index.html`.
2. Inside `<main>`:
   - Add an `<h1>` at the top of the page (this is the page title).
   - Add a `<p>` directly below it introducing what the page is about.
3. Inside each `<section>`:
   - Add an `<h2>` as the section title.
   - Add at least one `<p>` of descriptive text.

### Checklist

- [ ] Exactly one `<h1>`
- [ ] Sections use `<h2>` (not `<p>` or `<div>`)
- [ ] Text content is inside `<p>` elements

👥 Compare your structure with a neighbor when finished.

---

## 🧱 Exercise 2 — Semantic HTML (HTML · ~10 min)

**Goal:** Use semantic tags so the page describes *what it is*, not just how it looks.

### Steps

1. Wrap the top of the page in `<header>`.
2. Inside `<header>`:
   - Add a `<nav>` element.
   - Inside `<nav>`, create a list using `<ul>` and `<li>`.
   - Add at least **two navigation links** using `<a>`.
3. Ensure all main content is inside `<main>`.
4. Ensure the bottom of the page is wrapped in `<footer>`.

### Checklist

- [ ] `<header>` contains navigation
- [ ] `<nav>` contains a list of links
- [ ] `<main>` contains the main content
- [ ] `<footer>` is outside `<main>`

💬 Class check-in: What became clearer once you added semantic tags?

---

## 🧱 Exercise 3 — Realistic HTML Content (HTML · ~20 min)

**Goal:** Make the page feel like a small but realistic website.

### Steps

1. Inside one section:
   - Add an **unordered list** (`<ul>` / `<li>`) with at least 3 items.
2. Inside another section:
   - Add an **ordered list** (`<ol>` / `<li>`).
3. Add an image:
   - Use `<img>`.
   - Include meaningful `alt` text that describes the image.
4. Add emphasis where appropriate:
   - Use `<strong>` for importance.
   - Use `<em>` for emphasis (not styling).
5. Review your HTML:
   - Avoid unnecessary `<div>` usage.
   - Ensure the page still makes sense without CSS.

### Checklist

- [ ] One `<ul>` and one `<ol>`
- [ ] `<img>` includes meaningful `alt`
- [ ] `<strong>` and `<em>` used correctly
- [ ] HTML reads like a document

👥 Work in groups of 3 and discuss which tags felt natural vs awkward.

---

# 🎨 CSS Section (Hour 1 · ~20 minutes)

Now we’ll style the page **without changing the HTML structure**.

Open `style.css`.

---

## 🎨 Exercise 4 — CSS Styling (CSS · ~10 min)

**Goal:** Improve readability and appearance using basic CSS.

### Steps

1. Center the main content:
   - Set a maximum width.
   - Center it horizontally.
2. Add spacing:
   - Use `margin` and `padding` to separate sections.
3. Style the navigation:
   - Remove default list styling.
   - Space out links.
4. Style buttons:
   - Add background color.
   - Add padding.
   - Round corners.

### Rules

- ❌ No inline styles
- ❌ Do not modify HTML
- ✅ Use class selectors

### Checklist

- [ ] Page content centered
- [ ] Sections spaced apart
- [ ] Nav links readable
- [ ] Buttons clearly styled

---

## 🎨 Exercise 5 — Flexbox Layout (CSS · ~10 min)

**Goal:** Use Flexbox to control layout intentionally.

### Steps

1. Locate the `.card` class in `style.css`.
2. Add:
   - `display: flex`
   - `flex-direction: column`
   - `gap` for spacing
3. Experiment:
   - Change the gap value.
   - Try adding `align-items`.

### Checklist

- [ ] `.card` uses Flexbox
- [ ] Content stacks vertically
- [ ] Spacing controlled with `gap`

💬 Class discussion: What did Flexbox make easier?

---

# 🧩 Hour 2 — Vue.js

Navigate to the Vue project:

```bash
cd ../hour2-vue
npm install
npm run dev
```

Open the local URL printed in the terminal.

---

## ⚙️ Exercise 6 — Read a Vue Component (Vue · ~8 min)

**Goal:** Connect Vue concepts back to HTML and JavaScript.

### Steps

1. Open `src/App.vue`.
2. Identify:
   - The HTML template.
   - Reactive state (`ref`).
   - Event handlers (`@click`).
3. Compare the template structure to your HTML from Hour 1.

💬 Discuss: Where is the DOM created and updated?

---

## ⚙️ Exercise 7 — Counter State (Vue · ~12 min)

**Goal:** Add reactive state and events.

### Steps

1. In `<script setup>`:
   - Ensure a `count` reactive variable exists.
2. In `<template>`:
   - Display the current count.
   - Add a button that increments the count.
3. Click the button and confirm the UI updates automatically.

### Rules

- ❌ No `document.querySelector`
- ❌ No manual DOM manipulation

---

## ⚙️ Exercise 8 — Conditional Rendering (Vue · ~12 min)

**Goal:** Control the UI based on state.

### Steps

1. Add a **Reset** button:
   - Only visible when `count > 0`.
2. Add a message:
   - Only visible when `count >= 10`.
3. Test:
   - Increment past 10.
   - Reset at different values.

👥 Work in groups of 3 and help each other reason about conditions.

---

# 🧠 Final Discussion (5–7 min)

- How much HTML carried over into Vue?
- What did Vue simplify?
- What still matters even when using a framework?

---

## ✅ Key Takeaways

- HTML defines structure.
- CSS defines appearance.
- Vue manages dynamic behavior.
- You update **state**, not the DOM.
