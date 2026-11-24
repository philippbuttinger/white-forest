# White Forest — Design System

Premium wealth-protection brand for cryptocurrency investors. White Forest helps
high-net-worth clients **protect, structure and preserve** digital assets —
designing secure inheritance systems, family access plans and long-term
protection strategies. The brand feels like a **private wealth advisory / family
office**, not a crypto startup: trust, security, discretion, sophistication and
long-term thinking.

> Brand promise — *"We ensure that your digital wealth remains secure,
> structured, and accessible—today, tomorrow, and for the people who matter most."*

---

## Sources provided

- `uploads/6d-horizontal-2x.fig` — horizontal logo lockup (mark + "WHITE FOREST" wordmark).
- `uploads/7a-appicon-1024.fig` — the app-icon (geometric mark on an off-white rounded square).

Both `.fig` files are Figma archives; the embedded 400px preview PNGs were
extracted into `assets/`. No component library, codebase or Figma link was
provided — so the component inventory below is an **authored standard set** sized
to the brand's needs (see *Components*). No product screens or copy decks were
supplied; the marketing UI kit and sample slides are original compositions built
strictly from the stated brand direction.

## Font substitution (needs your input)

The wordmark is set in a refined high-contrast serif. No font files were
provided, so the system substitutes the closest Google Fonts families:

- **Cormorant Garamond** — display serif (headlines + wordmark rendering)
- **Jost** — UI / body sans
- **IBM Plex Mono** — data / mono

These load from the Google Fonts CDN (`tokens/fonts.css`); no self-hosted
binaries are bundled. **If White Forest has licensed brand fonts, please send the
files** and we'll swap the `@import` for local `@font-face` rules.

---

## Content fundamentals

How White Forest writes.

- **Voice:** clear, calm, authoritative, reassuring. Confident and simple. We
  never manufacture fear — we emphasise preparation, responsibility and
  continuity for future generations.
- **Person:** address the client as **"you"**; the company is **"we"**. Warm but
  never familiar — the register of private correspondence, not marketing.
- **Sentences:** short and declarative. One idea per sentence. Prefer plain words
  ("protect", "preserve", "accessible") over jargon.
- **Casing:** Sentence case for headlines and body. Tracked **UPPERCASE** only
  for small overlines, labels, badges and buttons (letter-spacing ~0.2em).
  Never all-caps for a full sentence.
- **Numbers & currency:** euro-first (€10,000), grouped with commas. Figures set
  in the display serif when they're a hero statistic.
- **No** emoji, exclamation marks, crypto slang ("HODL", "to the moon"), rockets,
  or return/APY promises. We protect wealth; we do not speculate.
- **Punctuation:** real em dashes (—), curly quotes (“ ”), ellipsis (…).

Example copy:
> *Inheritance, structured.* — *A plan your family can act on.* —
> *Secure access, released only when it should be.* —
> *Regulated custody, audited quarterly.*

---

## Visual foundations

The design language draws on **private banking, Scandinavian minimalism and
modern luxury** — spacious, editorial, quietly confident.

- **Color.** Three brand colors anchor everything: Deep Forest Green `#1E2623`
  (primary dark surface & ink), Off White `#E7E8E6` (light surface) and Sage
  Green `#A3AE9B` (natural accent). **Antique gold `#B99A5B`** is the only
  metallic accent and is used *sparingly* — a hairline rule, an eyebrow, a single
  high-intent button. Neutrals are warm and green-tinted, never pure grey.
  Semantic status hues are muted and discreet. Use **one or at most two**
  background tones per surface: paper/ivory for light, forest for dark.
- **Type.** Editorial pairing — a refined serif (Cormorant Garamond) for display
  and figures, a geometric humanist sans (Jost) for everything functional.
  Headlines are large, tightly tracked (−0.02em) and set in sentence case;
  labels are tiny tracked caps (0.2em+). Generous line-height (1.5–1.7) for body.
- **Spacing & layout.** Lots of whitespace. 4px base scale but layouts breathe
  on the larger steps (48/64/96/128px section rhythm). Max content width
  1240px; narrow reading column 720px. Left-aligned editorial columns, wide
  outer margins.
- **Backgrounds.** Flat color fields — **no gradients, no neon, no textures by
  default**. Optional high-end editorial photography (architectural, natural,
  warm-neutral, low-saturation) may sit full-bleed behind a forest scrim. Never
  blockchain iconography, coins, candlesticks or 3D crypto renders.
- **Borders.** Hairlines everywhere — `1px` at 10–22% forest opacity on light,
  16% off-white opacity on dark. Dividers (often with a centered tracked-caps
  label) are a signature device between sections.
- **Corner radii.** Restrained: 2px (inputs, chips), 4px (buttons), 6–10px
  (cards). Nothing pill-shaped except small toggles and the occasional tag.
- **Shadows.** Whisper-soft and warm-tinted (forest-based rgba), never blue/grey.
  Elevation is expressed more by hairline + surface color than by drop shadow.
- **Cards.** Flat white (or ivory) surface, hairline border, 10px radius, very
  soft shadow, generous 28–36px padding. Inverse cards sit on forest with a
  forest-700 hairline.
- **Motion.** Calm and confident — no bounce. Standard ease
  `cubic-bezier(0.22,0.61,0.36,1)`, entrance `cubic-bezier(0.16,1,0.3,1)`.
  Durations 140/240/480ms. Fades and small rises only; nothing springs or loops.
- **Hover / press.** Hover shifts fill or border one step (e.g. forest-800 →
  forest-700), or lifts opacity slightly. Press nudges 0.5px down — no scale
  pops. Focus shows a soft gold ring (`--focus-ring`).
- **Transparency & blur.** Used rarely — a 2px backdrop blur on modal scrims, and
  low-opacity forest scrims over photography. Not a glassmorphism system.

---

## Iconography

- **No proprietary icon set exists** in the provided sources. The system
  standardises on **[Lucide](https://lucide.dev)** — thin (≈1.5px), rounded,
  outline icons whose restraint matches the brand. Load from CDN:
  `https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js`, then
  `lucide.createIcons()`. UI kit screens and cards use it via `<i data-lucide="…">`.
- Icons are **line, not filled**; single-color, inheriting `currentColor`
  (usually forest or off-white). Sizes 16/18/20/24px. Never multicolor.
- **Emoji are never used.** Occasional refined unicode marks are acceptable as
  typographic devices (— · “ ” … ▾) but not as UI icons.
- **No blockchain / crypto glyphs** (coins, chains, rockets, candlesticks).
  Prefer neutral, trust-coded metaphors: shield, lock, key, vault, document,
  users, compass.
- The **brand mark** (the geometric WF forest-square) is not an icon — reserve it
  for logo lockups and the app icon (`assets/`).

---

## Index — what's in this system

**Root**
- `styles.css` — global entry point (link this one file). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `layout.css` (spacing/radii/shadow/motion),
  `fonts.css` (webfonts), `base.css` (element defaults).
- `assets/` — extracted logos & mark (see below).
- `foundations/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**Assets** (`assets/`)
- `whiteforest-logo-horizontal.png` / `-light.png` — horizontal lockup (dark / off-white).
- `whiteforest-mark.png` / `-light.png` — standalone geometric mark (dark / off-white).
- `whiteforest-appicon.png` — mark on off-white rounded square.

**Components** (React, `window.WhiteForestDesignSystem_3e45e2`)
- Brand: **Logo**
- Forms: **Button**, **IconButton**, **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- Display: **Card**, **Badge**, **Divider**, **Stat**
- Feedback: **Dialog**
- Disclosure: **Accordion**

**UI kit**
- `ui_kits/marketing/` — White Forest marketing website (hero, services, assurance,
  FAQ, footer) as an interactive click-through.

**Slides**
- `slides/` — branded presentation templates (title, statement, agenda, comparison,
  big quote, closing).

### Intentional additions
Because no source defined a component inventory, the set above is a standard
private-wealth UI kit. **Stat**, **Divider** (labelled) and **Accordion** are
included because the marketing surface and advisory FAQs rely on them; flag if any
are unwanted.
