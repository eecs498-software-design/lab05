# Lab: HTML, CSS, and Vue.js Fundamentals

This lab is split into two parts:

- **Part 1:** HTML, CSS, and the DOM (6 small exercises in this folder)
- **Part 2:** Vue.js fundamentals (using the official Vue tutorial)

You’ll alternate between short explanations from the instructor and hands‑on exercises.

---

## 🔧 Setup: Open the project with Live Server

1. Open this folder (`lab05`) in VS Code.
2. Install the **Live Server** extension (by _Ritwick Dey_):
   - In VS Code, go to the **Extensions** panel.
   - Search for **“Live Server”**.
   - Install the extension.
3. In the Explorer, right‑click `index.html` and choose **“Open with Live Server”**.
4. Your browser should open to a local URL (e.g. `http://127.0.0.1:5500/...`).

You’ll work only with three files in this part:

- `index.html`
- `style.css`
- `src/main.js`

Keep them open side‑by‑side as you work.

---

## Exercise 1 — Describe Yourself & Movies (HTML)

**Goal:** Practice writing basic content in HTML.

- In `index.html`, find **“Exercise 1”**.
- Under the Exercise 1 comment:
  - Add a **paragraph** that briefly describes yourself.
  - Add an **ordered list** (`<ol>`) of your **3 favorite movies**, each in its own `<li>`.

**Checklist**

- [ ] A paragraph about you
- [ ] An ordered list with 3 movies

---

## Exercise 2 — Image & Link (HTML)

**Goal:** Practice HTML attributes using images and links.

- In `index.html`, find **“Exercise 2”**.
- Under the Exercise 2 comment:
  - Add an **image of yourself** (or any picture that represents you) using `<img>`.
    - Include meaningful `alt` text.
  - Add a **link** (`<a>`) to your favorite YouTube video.

**Checklist**

- [ ] `<img>` with a real (or placeholder) URL
- [ ] `alt` text describes the image
- [ ] `<a>` link opens a YouTube video

---

## Exercise 3 — A Button That Logs to the Console (HTML + Dev Tools)

**Goal:** See how buttons can have event listeners using HTML.

- In `index.html`, find **“Exercise 3”**.
- Under the Exercise 3 comment:
  - Add a `<button>` that says something like **“Log Message”**.
  - When clicked, it should log `"Button clicked"` to the browser console.

You can do this with an inline `onclick="console.log('Button clicked')"` attribute

**Checklist**

- [ ] A visible button under Exercise 3
- [ ] Clicking it prints `"Button clicked"` in the dev tools console

---

## Exercise 4 — Toggle the Page Title (DOM + Events)

**Goal:** Use JavaScript to change text in the DOM based on events.

Add a button that toggles the title text between `"HTML and the DOM"` and `"Lab 05: HTML and the DOM"`

1. In `index.html`, under **Exercise 4**, add a button such as **“Toggle Title”**.
2. In `src/main.js`, find the comment for **Exercise 4**.
3. Add JavaScript that:
   - Selects the title element with `id="page-title"`.
   - Listens for clicks on your new button.
   - Toggles the text between:
     - `"HTML and the DOM"` and
     - `"Lab 05: HTML and the DOM"`.

**Checklist**

- [ ] New button appears under Exercise 4
- [ ] Clicking it swaps the page title back and forth

---

## Exercise 5 — CSS Selectors (Tags, IDs, Classes)

**Goal:** Practice styling using different kinds of selectors.

Open `style.css` and read the **Exercise 5** comment at the top. Implement the TODOs:

- **Tag selector:** Style **all `<h2>` headings** to have an underline.
- **ID selector:** Style the intro text (`"This text is written directly in HTML."`) so the text is blue.
- **Class selector:** Style the **counter buttons** (they use the class `counter-button`) so they have a red border.

**Checklist**

- [ ] All `<h2>` elements look underlined
- [ ] Intro text is blue
- [ ] Counter buttons are visibly styled with a red border

---

## Exercise 6 — Change Color When Count Is High (DOM + CSS)

**Goal:** React to changing state in JavaScript by updating styles.

Files involved: `style.css` and `src/main.js`.

1. In `style.css`, read the **Exercise 6** comment.
2. In `src/main.js`, find the **Exercise 6** comment near the `render()` function.
3. Update `render()` so that when `count >= 10`, the counter display text becomes **red**.

**Checklist**

- [ ] Counter still increments and resets correctly
- [ ] When `count >= 10`, the count text turns red
- [ ] When you reset, the color goes back to normal

---

## Part 2 — Vue.js Fundamentals (Official Tutorial)

For the Vue portion of the lab, you’ll work through **the official Vue tutorial** instead of custom steps here.

   - [Vue.js Tutorial – Step 1](https://vuejs.org/tutorial/#step-1)

Focus on connecting what you see in Vue (templates, reactivity, events) back to what you just did with plain HTML, CSS, and DOM code.
