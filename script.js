/* =========================================================
   AGUS TAUFIK RAHMAN | PORTOFOLIO
   Terang, ringan, tanpa blur kaca dan animasi berjalan terus
========================================================= */

:root {
  --paper: #eef1f4;
  --surface: #ffffff;
  --ink: #101820;
  --ink-2: #46515c;
  --line: #cdd5dc;
  --tint: #e2e7ec;
  --accent: #ffc400;
  --focus: #0b57a4;

  --head: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
  --body: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  --wrap: 1040px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 72px;
  -webkit-text-size-adjust: 100%;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; }
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--body);
  line-height: 1.65;
  padding-bottom: 88px;
}

img,
video {
  display: block;
  max-width: 100%;
}

a { color: inherit; }

button {
  font: inherit;
  color: inherit;
  cursor: pointer;
}

:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.wrap {
  width: min(var(--wrap), calc(100% - 40px));
  margin-inline: auto;
}

.skip {
  position: absolute;
  left: -999px;
  top: 8px;
  z-index: 100;
  padding: 8px 14px;
  background: var(--ink);
  color: #fff;
}

.skip:focus { left: 8px; }


/* =========================================================
   TOPBAR
========================================================= */

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(238, 241, 244, 0.97);
  border-bottom: 1px solid var(--line);
}

.topbar-in {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 60px;
}

.brand {
  font-family: var(--head);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;
}

.nav::-webkit-scrollbar { display: none; }

.nav a {
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--ink-2);
  font-size: 0.92rem;
  text-decoration: none;
  white-space: nowrap;
}

.nav a:hover {
  background: var(--tint);
  color: var(--ink);
}


/* =========================================================
   HERO
========================================================= */

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  padding: 72px 0 48px;
}

.hero-role {
  margin-bottom: 14px;
  color: var(--ink-2);
  font-size: 0.95rem;
}

h1 {
  font-family: var(--head);
  font-size: clamp(3.4rem, 10vw, 7rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.01em;
}

.hero-tagline {
  max-width: 26ch;
  margin-top: 26px;
  font-size: clamp(1.25rem, 2.6vw, 1.7rem);
  font-weight: 600;
  line-height: 1.3;
}

.hero-desc {
  max-width: 52ch;
  margin-top: 14px;
  color: var(--ink-2);
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 0 20px;
  border: 2px solid var(--ink);
  border-radius: 6px;
  background: transparent;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.btn:hover {
  background: var(--ink);
  color: #fff;
}

.btn-primary {
  background: var(--accent);
}

.btn-primary:hover {
  background: var(--ink);
  color: var(--accent);
}

.hero-photo {
  width: 100%;
  max-width: 380px;
  justify-self: end;
}

.hero-photo img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: #dfe5ea;
  border-bottom: 8px solid var(--accent);
}


/* =========================================================
   PLAT DATA
========================================================= */

.plate {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  border: 2px solid var(--ink);
  border-radius: 10px;
  background: var(--line);
}

.plate::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(circle at 11px 11px, #aab4be 0 3px, transparent 3.5px),
    radial-gradient(circle at calc(100% - 11px) 11px, #aab4be 0 3px, transparent 3.5px),
    radial-gradient(circle at 11px calc(100% - 11px), #aab4be 0 3px, transparent 3.5px),
    radial-gradient(circle at calc(100% - 11px) calc(100% - 11px), #aab4be 0 3px, transparent 3.5px);
}

.plate > div {
  padding: 28px 24px;
  background: var(--surface);
}

.plate dt {
  margin-bottom: 4px;
  color: var(--ink-2);
  font-size: 0.82rem;
}

.plate dd {
  font-weight: 600;
  line-height: 1.4;
}

.plate dd span {
  display: block;
  margin-top: 2px;
  color: var(--ink-2);
  font-size: 0.9rem;
  font-weight: 400;
}


/* =========================================================
   SECTION
========================================================= */

.section {
  padding: 88px 0 0;
}

h2 {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  font-family: var(--head);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  line-height: 1;
}

h2::before {
  content: "";
  flex: none;
  width: 14px;
  height: 0.8em;
  background: var(--accent);
}

.section-note {
  max-width: 60ch;
  margin: -12px 0 28px;
  color: var(--ink-2);
}

.prose {
  max-width: 68ch;
}

.prose p {
  margin-bottom: 1.1em;
  color: #27323c;
  font-size: 1.05rem;
}


/* =========================================================
   PENGALAMAN
========================================================= */

.xp {
  list-style: none;
  border-top: 2px solid var(--ink);
}

.xp-item {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 22px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}

.xp-logo {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  padding: 8px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
}

.xp-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.xp-logo-text {
  font-family: var(--head);
  font-size: 1.4rem;
  font-weight: 700;
}

.xp-type {
  color: var(--ink-2);
  font-size: 0.88rem;
}

.xp-body h3 {
  margin-top: 2px;
  font-family: var(--head);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.1;
}

.xp-loc {
  margin-top: 6px;
  color: var(--ink-2);
  font-size: 0.88rem;
  line-height: 1.55;
}

.xp-body > p:not(.xp-type):not(.xp-loc) {
  max-width: 70ch;
  margin-top: 14px;
  color: #27323c;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 18px;
  list-style: none;
}

.tags li {
  padding: 2px 10px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: var(--surface);
  color: var(--ink-2);
  font-size: 0.8rem;
}


/* ---------- Alat ---------- */

.tools {
  margin-top: 64px;
}

.tools h3 {
  margin-bottom: 18px;
  font-family: var(--head);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.1;
}

.tool-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.tool-group {
  padding: 22px 24px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
}

.tool-group h4 {
  margin-bottom: 8px;
  color: var(--ink-2);
  font-size: 0.88rem;
  font-weight: 600;
}

.tool-group ul {
  list-style: none;
}

.tool-group li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-top: 1px solid var(--line);
}

.tool-group strong { font-weight: 600; }

.tool-group span {
  color: var(--ink-2);
  font-size: 0.9rem;
  text-align: right;
}


/* =========================================================
   KARYA + SERTIFIKAT
========================================================= */

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  scrollbar-width: none;
}

.filters::-webkit-scrollbar { display: none; }

.chip {
  flex: none;
  min-height: 40px;
  padding: 0 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.9rem;
  transition: background 0.15s, color 0.15s;
}

.chip:hover { border-color: var(--ink); }

.chip.is-active {
  border-color: var(--ink);
  background: var(--ink);
  color: #fff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  text-align: left;
  transition: border-color 0.15s;
}

.card:hover { border-color: var(--ink); }

.card-media {
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #dfe5ea;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-media.is-doc { background: #f4f6f8; }

.card-media.is-doc img { object-fit: contain; }

.card-media.is-video .play {
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 26px solid var(--ink);
  margin-left: 8px;
}

.card-body {
  display: block;
  padding: 18px 20px 22px;
}

.card-cat {
  display: block;
  color: var(--ink-2);
  font-size: 0.82rem;
}

.card-title {
  display: block;
  margin-top: 2px;
  font-family: var(--head);
  font-size: 1.65rem;
  font-weight: 700;
  line-height: 1.1;
}

.card-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 8px;
  overflow: hidden;
  color: #33404b;
  font-size: 0.93rem;
  line-height: 1.55;
}

.card-desc-full {
  display: block;
  -webkit-line-clamp: unset;
}

.card-open {
  display: inline-block;
  margin-top: 14px;
  border-bottom: 3px solid var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
}


/* =========================================================
   KONTAK
========================================================= */

.contact-list {
  max-width: 640px;
  list-style: none;
  border-top: 2px solid var(--ink);
}

.contact-list a {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 6px;
  border-bottom: 1px solid var(--line);
  text-decoration: none;
}

.contact-list a:hover { background: var(--surface); }

.contact-list span:first-child { font-weight: 600; }

.contact-list span:last-child {
  color: var(--ink-2);
  text-align: right;
  overflow-wrap: anywhere;
}

.contact-cv { margin-top: 28px; }

.footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 96px;
  padding: 24px 0 36px;
  border-top: 1px solid var(--line);
  color: var(--ink-2);
  font-size: 0.85rem;
}


/* =========================================================
   DIALOG KARYA
========================================================= */

.dlg {
  width: min(960px, calc(100% - 24px));
  max-height: 92vh;
  margin: auto;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: var(--surface);
  color: var(--ink);
}

.dlg::backdrop { background: rgba(16, 24, 32, 0.6); }

.dlg-in {
  position: relative;
  padding: 32px;
}

.dlg-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--paper);
  font-size: 1.4rem;
  line-height: 1;
}

.dlg-close:hover { border-color: var(--ink); }

.dlg-cat {
  color: var(--ink-2);
  font-size: 0.85rem;
}

.dlg h2 {
  display: block;
  margin: 2px 0 0;
  padding-right: 56px;
}

.dlg h2::before { display: none; }

.dlg-desc {
  max-width: 64ch;
  margin-top: 14px;
  color: #27323c;
}

.dlg-media {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.dlg-media img,
.dlg-media video {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: contain;
  border-radius: 8px;
  background: var(--tint);
}

.dlg-media img { cursor: zoom-in; }


/* =========================================================
   PRATINJAU MEDIA
========================================================= */

.viewer {
  width: 100vw;
  height: 100dvh;
  max-width: none;
  max-height: none;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: transparent;
  color: #fff;
}

.viewer::backdrop { background: rgba(8, 12, 18, 0.92); }

.viewer-stage {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 60px 12px 88px;
}

.viewer-stage img,
.viewer-stage video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.25s;
}

.viewer-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 1.4rem;
  line-height: 1;
}

.viewer-tools {
  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.viewer-tools button {
  min-height: 42px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.9rem;
}

.viewer-close:hover,
.viewer-tools button:hover { background: rgba(255, 255, 255, 0.24); }


/* =========================================================
   MUSIK
========================================================= */

.player {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(300px, calc(100% - 32px));
  padding: 8px 10px 8px 8px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  background: var(--surface);
}

.player-cover {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: #dfe5ea;
  object-fit: cover;
}

.player-info {
  flex: 1;
  min-width: 0;
}

.player-title {
  display: block;
  overflow: hidden;
  font-size: 0.85rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-bar {
  display: flex;
  align-items: center;
  height: 16px;
  cursor: pointer;
}

.player-track {
  position: relative;
  width: 100%;
  height: 3px;
  background: var(--line);
}

.player-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0;
  background: var(--ink);
}

.player-btn {
  min-height: 38px;
  padding: 0 14px;
  border: 0;
  border-radius: 8px;
  background: var(--accent);
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 700;
}

.player-btn:hover { background: var(--ink); color: var(--accent); }


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 860px) {

  .hero {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 48px 0 40px;
  }

  .hero-photo {
    max-width: 300px;
    justify-self: start;
  }

  .plate { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .section { padding-top: 72px; }

  .tool-groups { grid-template-columns: 1fr; }
}


@media (max-width: 640px) {

  .brand { display: none; }

  .topbar-in { justify-content: flex-start; }

  .nav a { padding: 8px 10px; font-size: 0.88rem; }

  .grid { grid-template-columns: 1fr; }

  .xp-item {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 14px;
    padding: 24px 0;
  }

  .xp-logo { width: 48px; height: 48px; padding: 6px; border-radius: 8px; }

  .xp-logo-text { font-size: 1.1rem; }

  .xp-body h3 { font-size: 1.5rem; }

  .dlg-in { padding: 26px 18px 22px; }

  .dlg-media { grid-template-columns: 1fr; }

  .contact-list a { flex-direction: column; gap: 2px; }

  .contact-list span:last-child { text-align: left; }
}


@media (max-width: 520px) {

  .plate { grid-template-columns: 1fr; }

  .plate > div { padding: 22px 24px; }
}
