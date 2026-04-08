<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Badr Jouiyah — Portfolio BTS SIO SLAM</title>
  <style>
    :root {
      --bg: #070b14;
      --bg-soft: #0d1320;
      --bg-card: rgba(255,255,255,0.04);
      --bg-card-2: rgba(255,255,255,0.06);
      --stroke: rgba(255,255,255,0.10);
      --stroke-strong: rgba(255,255,255,0.18);
      --text: #edf2ff;
      --muted: #aab5cf;
      --muted-2: #7f8aa5;
      --green: #7cf29a;
      --cyan: #77dbff;
      --purple: #b392ff;
      --gold: #ffd97a;
      --danger: #ff8a8a;
      --shadow: 0 20px 60px rgba(0,0,0,0.35);
      --radius-xl: 28px;
      --radius-lg: 22px;
      --radius-md: 18px;
      --container: 1240px;
      --header-height: 86px;
      --transition: 220ms cubic-bezier(.2,.8,.2,1);
    }

    * { box-sizing: border-box; }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(circle at 10% 10%, rgba(124,242,154,0.10), transparent 28%),
        radial-gradient(circle at 90% 15%, rgba(119,219,255,0.10), transparent 25%),
        radial-gradient(circle at 30% 80%, rgba(179,146,255,0.10), transparent 28%),
        linear-gradient(180deg, #060911 0%, #090d18 45%, #070b14 100%);
      color: var(--text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.55;
      overflow-x: hidden;
    }

    body.menu-open {
      overflow: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .container {
      width: min(var(--container), calc(100% - 32px));
      margin-inline: auto;
    }

    .noise,
    .bg-grid,
    .orb {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -3;
    }

    .noise {
      background-image: radial-gradient(rgba(255,255,255,0.03) 0.8px, transparent 0.8px);
      background-size: 8px 8px;
      opacity: 0.18;
      mix-blend-mode: soft-light;
    }

    .bg-grid {
      background:
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
      background-size: 36px 36px;
      mask-image: linear-gradient(180deg, rgba(0,0,0,.25), rgba(0,0,0,.75));
      opacity: 0.18;
      z-index: -4;
    }

    .orb::before,
    .orb::after {
      content: "";
      position: absolute;
      width: 42vw;
      aspect-ratio: 1;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.14;
    }

    .orb::before {
      left: -10vw;
      top: -12vh;
      background: linear-gradient(135deg, var(--green), transparent 60%);
      animation: floatOrb 16s ease-in-out infinite;
    }

    .orb::after {
      right: -8vw;
      top: 18vh;
      background: linear-gradient(135deg, var(--cyan), transparent 60%);
      animation: floatOrb 18s ease-in-out infinite reverse;
    }

    @keyframes floatOrb {
      0%, 100% { transform: translate3d(0,0,0) scale(1); }
      50% { transform: translate3d(0, 20px, 0) scale(1.05); }
    }

    header.site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      height: var(--header-height);
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      background: rgba(7,11,20,0.72);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      transition: background var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    header.site-header.scrolled {
      background: rgba(7,11,20,0.9);
      border-color: rgba(255,255,255,0.11);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .header-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      width: 100%;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
    }

    .brand-badge {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      border-radius: 16px;
      font-weight: 800;
      letter-spacing: 0.16em;
      background: linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.10);
    }

    .brand-meta {
      min-width: 0;
    }

    .brand-meta strong {
      display: block;
      font-size: 0.95rem;
    }

    .brand-meta span {
      display: block;
      color: var(--muted);
      font-size: 0.83rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    nav.main-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
      border-radius: 999px;
    }

    nav.main-nav a {
      position: relative;
      padding: 12px 16px;
      border-radius: 999px;
      color: var(--muted);
      font-size: 0.92rem;
      transition: color var(--transition), background var(--transition), transform var(--transition);
    }

    nav.main-nav a:hover,
    nav.main-nav a.active {
      color: var(--text);
      background: rgba(255,255,255,0.06);
      transform: translateY(-1px);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .button,
    button {
      font: inherit;
      border: 0;
      cursor: pointer;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 48px;
      padding: 0 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      transition: transform var(--transition), border-color var(--transition), background var(--transition), box-shadow var(--transition);
      white-space: nowrap;
    }

    .button:hover {
      transform: translateY(-2px);
      border-color: rgba(255,255,255,0.16);
    }

    .button.primary {
      color: #071018;
      background: linear-gradient(135deg, #ffffff, #d9f5e2 55%, #c8f4ff);
      box-shadow: 0 10px 30px rgba(200, 244, 255, 0.14);
    }

    .button.secondary {
      background: rgba(255,255,255,0.05);
      color: var(--text);
    }

    .menu-toggle {
      display: none;
      width: 48px;
      height: 48px;
      border-radius: 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      color: var(--text);
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .menu-toggle span,
    .menu-toggle span::before,
    .menu-toggle span::after {
      display: block;
      width: 18px;
      height: 2px;
      border-radius: 999px;
      background: currentColor;
      transition: transform var(--transition), opacity var(--transition);
      content: "";
      position: absolute;
    }

    .menu-toggle span::before { transform: translateY(-6px); }
    .menu-toggle span::after { transform: translateY(6px); }
    .menu-toggle.is-open span { background: transparent; }
    .menu-toggle.is-open span::before { transform: rotate(45deg); }
    .menu-toggle.is-open span::after { transform: rotate(-45deg); }

    .mobile-panel {
      position: fixed;
      inset: var(--header-height) 12px auto 12px;
      padding: 14px;
      background: rgba(7,11,20,0.96);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 24px;
      backdrop-filter: blur(18px);
      box-shadow: var(--shadow);
      display: none;
      z-index: 49;
    }

    .mobile-panel.open {
      display: block;
      animation: fadeUp .25s ease;
    }

    .mobile-panel a,
    .mobile-panel button {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 8px;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    section {
      padding: 100px 0;
      scroll-margin-top: calc(var(--header-height) + 16px);
    }

    .section-header {
      max-width: 820px;
      margin-bottom: 40px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
      color: var(--muted);
      font-size: 0.78rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .eyebrow::before {
      content: "";
      width: 34px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35));
    }

    .section-header h2 {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3.6rem);
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    .section-header p {
      margin: 18px 0 0;
      color: var(--muted);
      font-size: 1.02rem;
      line-height: 1.8;
    }

    .hero {
      padding-top: 54px;
      min-height: calc(100vh - var(--header-height));
      display: flex;
      align-items: center;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.18fr 0.82fr;
      gap: 28px;
      align-items: center;
    }

    .hero-card,
    .glass-card {
      position: relative;
      border: 1px solid var(--stroke);
      background:
        linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03)),
        rgba(255,255,255,0.02);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .glass-card::before,
    .hero-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, rgba(255,255,255,0.06), transparent 35%, transparent 65%, rgba(255,255,255,0.03));
      pointer-events: none;
    }

    .hero-copy {
      padding: 42px;
    }

    .badge-inline {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      border-radius: 999px;
      color: #dfffea;
      background: rgba(124,242,154,0.10);
      border: 1px solid rgba(124,242,154,0.20);
      font-size: 0.9rem;
      font-weight: 600;
    }

    .hero h1 {
      margin: 24px 0 18px;
      font-size: clamp(2.6rem, 6vw, 5.8rem);
      line-height: 0.98;
      letter-spacing: -0.055em;
    }

    .gradient-text {
      background: linear-gradient(135deg, #ffffff 0%, #d1f6dd 35%, #b7ecff 68%, #d9c8ff 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero p.lead {
      max-width: 760px;
      margin: 0;
      color: var(--muted);
      font-size: 1.05rem;
      line-height: 1.9;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }

    .hero-stats {
      margin-top: 34px;
      display: grid;
      grid-template-columns: repeat(4, minmax(0,1fr));
      gap: 12px;
    }

    .stat-card {
      padding: 18px 16px;
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .stat-card strong {
      display: block;
      font-size: 1.5rem;
      letter-spacing: -0.03em;
    }

    .stat-card span {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: 0.88rem;
    }

    .hero-side {
      padding: 0;
    }

    .hero-feature {
      display: flex;
      flex-direction: column;
      min-height: 620px;
    }

    .hero-feature-top {
      padding: 28px 28px 22px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
    }

    .hero-feature-top h3 {
      margin: 12px 0 6px;
      font-size: 2rem;
      line-height: 1.1;
    }

    .hero-feature-top p {
      margin: 0;
      color: var(--muted);
    }

    .hero-feature-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 1px;
      background: rgba(255,255,255,0.08);
      margin-top: auto;
    }

    .hero-feature-cell {
      padding: 20px;
      background: rgba(7,11,20,0.75);
    }

    .hero-feature-cell strong {
      display: block;
      font-size: 1.4rem;
    }

    .hero-feature-cell span {
      display: block;
      margin-top: 6px;
      color: var(--muted);
      font-size: 0.9rem;
    }

    .icon-box {
      width: 54px;
      height: 54px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.05);
      color: var(--text);
      font-size: 1.25rem;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
    }

    .about-grid,
    .contact-grid,
    .veille-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 22px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 22px;
    }

    .panel {
      position: relative;
      padding: 28px;
      border-radius: var(--radius-xl);
      border: 1px solid var(--stroke);
      background: var(--bg-card);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .panel.soft {
      background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.035));
    }

    .panel h3,
    .panel h4 {
      margin: 0;
    }

    .panel p {
      color: var(--muted);
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 18px;
      margin-top: 20px;
    }

    .mini-card {
      padding: 18px;
      border-radius: 18px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .mini-card strong {
      display: block;
      margin-top: 12px;
      font-size: 1rem;
    }

    .mini-card p {
      margin: 8px 0 0;
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .timeline {
      position: relative;
      padding-left: 18px;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 9px;
      top: 6px;
      bottom: 6px;
      width: 1px;
      background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05));
    }

    .timeline-item {
      position: relative;
      margin-bottom: 22px;
      padding-left: 28px;
    }

    .timeline-item:last-child { margin-bottom: 0; }

    .timeline-item::before {
      content: "";
      position: absolute;
      left: 0;
      top: 20px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.18);
      background: #0b101b;
      box-shadow: 0 0 0 5px rgba(255,255,255,0.02);
    }

    .timeline-content {
      padding: 24px;
      border-radius: 24px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .timeline-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 10px;
    }

    .timeline-head strong {
      display: block;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    .timeline-head span {
      color: var(--muted);
      font-size: 0.92rem;
    }

    .tag,
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 600;
      white-space: nowrap;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
      color: var(--text);
    }

    .pill.green { background: rgba(124,242,154,0.10); color: #dbffe6; border-color: rgba(124,242,154,0.22); }
    .pill.cyan { background: rgba(119,219,255,0.10); color: #ddf8ff; border-color: rgba(119,219,255,0.22); }
    .pill.purple { background: rgba(179,146,255,0.10); color: #efe7ff; border-color: rgba(179,146,255,0.22); }
    .pill.gold { background: rgba(255,217,122,0.10); color: #fff0c8; border-color: rgba(255,217,122,0.22); }
    .pill.red { background: rgba(255,138,138,0.10); color: #ffdede; border-color: rgba(255,138,138,0.22); }

    .realization-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 22px;
    }

    .realization-card,
    .project-card,
    .proof-card,
    .skill-card {
      position: relative;
      height: 100%;
      padding: 24px;
      border-radius: 24px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      transition: transform var(--transition), border-color var(--transition), background var(--transition), box-shadow var(--transition);
      overflow: hidden;
    }

    .realization-card::after,
    .project-card::after,
    .proof-card::after,
    .skill-card::after {
      content: "";
      position: absolute;
      inset: auto 0 0 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
      opacity: 0;
      transition: opacity var(--transition);
    }

    .realization-card:hover,
    .project-card:hover,
    .proof-card:hover,
    .skill-card:hover {
      transform: translateY(-6px);
      border-color: rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.05);
      box-shadow: 0 26px 60px rgba(0,0,0,0.32);
    }

    .realization-card:hover::after,
    .project-card:hover::after,
    .proof-card:hover::after,
    .skill-card:hover::after {
      opacity: 1;
    }

    .card-top {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 18px;
    }

    .card-icon {
      flex: 0 0 auto;
      width: 52px;
      height: 52px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      font-size: 1.2rem;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.05);
    }

    .card-title {
      margin: 0;
      font-size: 1.08rem;
      line-height: 1.35;
    }

    .card-subtitle {
      margin: 4px 0 0;
      color: var(--muted);
      font-size: 0.92rem;
    }

    .card-copy {
      margin: 0 0 16px;
      color: var(--muted);
      font-size: 0.96rem;
      line-height: 1.8;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .link-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .mini-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      border-radius: 14px;
      font-size: 0.84rem;
      color: #dafcf3;
      background: rgba(124,242,154,0.08);
      border: 1px solid rgba(124,242,154,0.18);
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 56px;
      padding: 0 18px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.05);
      width: min(100%, 420px);
    }

    .search-bar input {
      width: 100%;
      border: 0;
      outline: none;
      background: transparent;
      color: var(--text);
      font: inherit;
    }

    .search-bar input::placeholder {
      color: var(--muted-2);
    }

    .formation-top {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 40px;
    }

    .skill-wrap {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 22px;
    }

    .skill-card h3 {
      margin: 0 0 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.08rem;
    }

    .list-inline {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .bullet-list {
      display: grid;
      gap: 12px;
      margin-top: 14px;
    }

    .bullet-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: var(--muted);
      font-size: 0.96rem;
    }

    .bullet-item .dot {
      margin-top: 8px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--green), var(--cyan));
      flex: 0 0 auto;
    }

    .proof-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 22px;
    }

    .proof-card h3 {
      margin-bottom: 18px;
    }

    .proof-card .bullet-item {
      font-size: 0.92rem;
    }

    .callout {
      margin-top: 24px;
      padding: 22px 24px;
      border-radius: 24px;
      border: 1px dashed rgba(255,255,255,0.16);
      background: rgba(255,255,255,0.03);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }

    .callout p {
      margin: 0;
      color: var(--muted);
      max-width: 860px;
    }

    .contact-grid {
      align-items: stretch;
    }

    .contact-card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 16px;
      height: 100%;
    }

    .contact-box {
      padding: 20px;
      border-radius: 20px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .contact-box strong {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
    }

    .contact-box p {
      margin: 12px 0 0;
      color: var(--muted);
      line-height: 1.8;
    }

    footer {
      padding: 30px 0 60px;
      color: var(--muted-2);
      font-size: 0.92rem;
    }

    .footer-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
      padding-top: 26px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    .reveal {
      opacity: 0;
      transform: translateY(26px);
      transition: opacity 650ms ease, transform 650ms ease;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .delay-1 { transition-delay: 80ms; }
    .delay-2 { transition-delay: 140ms; }
    .delay-3 { transition-delay: 200ms; }
    .delay-4 { transition-delay: 260ms; }

    @media (max-width: 1180px) {
      .hero-grid,
      .about-grid,
      .contact-grid,
      .veille-grid,
      .grid-3,
      .proof-grid,
      .realization-grid,
      .skill-wrap {
        grid-template-columns: 1fr 1fr;
      }

      .hero-stats {
        grid-template-columns: repeat(2, minmax(0,1fr));
      }
    }

    @media (max-width: 980px) {
      nav.main-nav,
      .header-actions .button.secondary {
        display: none;
      }

      .menu-toggle {
        display: inline-flex;
      }

      .hero-grid,
      .about-grid,
      .contact-grid,
      .veille-grid,
      .grid-2,
      .grid-3,
      .proof-grid,
      .realization-grid,
      .skill-wrap {
        grid-template-columns: 1fr;
      }

      .formation-top {
        flex-direction: column;
        align-items: stretch;
      }

      .hero-copy,
      .hero-feature-top,
      .panel,
      .timeline-content,
      .realization-card,
      .project-card,
      .proof-card,
      .skill-card {
        padding: 22px;
      }

      .hero-feature {
        min-height: auto;
      }
    }

    @media (max-width: 680px) {
      :root {
        --header-height: 78px;
      }

      section {
        padding: 82px 0;
      }

      .container {
        width: min(var(--container), calc(100% - 20px));
      }

      .hero {
        padding-top: 26px;
      }

      .hero h1 {
        font-size: clamp(2.1rem, 12vw, 3.3rem);
      }

      .hero p.lead,
      .section-header p {
        font-size: 0.98rem;
      }

      .hero-actions {
        flex-direction: column;
      }

      .button {
        width: 100%;
      }

      .hero-stats,
      .mini-grid,
      .contact-card-grid,
      .hero-feature-grid {
        grid-template-columns: 1fr;
      }

      .timeline-head {
        flex-direction: column;
        align-items: flex-start;
      }

      .callout {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="orb"></div>
  <div class="noise"></div>

  <header class="site-header" id="siteHeader">
    <div class="container header-wrap">
      <a class="brand" href="#accueil">
        <div class="brand-badge">BJ</div>
        <div class="brand-meta">
          <strong>Badr Jouiyah</strong>
          <span>Portfolio BTS SIO — option SLAM</span>
        </div>
      </a>

      <nav class="main-nav" aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#parcours">Parcours</a>
        <a href="#stages">Stages</a>
        <a href="#formation">Formation</a>
        <a href="#competences">Compétences</a>
        <a href="#veille">Veille</a>
        <a href="#preuves">Preuves</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="header-actions">
        <a class="button secondary" href="#preuves">Voir les preuves</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Ouvrir le menu mobile" aria-expanded="false">
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-panel" id="mobilePanel">
    <a class="button secondary" href="#accueil">Accueil</a>
    <a class="button secondary" href="#apropos">À propos</a>
    <a class="button secondary" href="#parcours">Parcours</a>
    <a class="button secondary" href="#stages">Stages</a>
    <a class="button secondary" href="#formation">Formation</a>
    <a class="button secondary" href="#competences">Compétences</a>
    <a class="button secondary" href="#veille">Veille</a>
    <a class="button secondary" href="#preuves">Preuves</a>
    <a class="button secondary" href="#contact">Contact</a>
  </div>

  <main>
    <section class="hero" id="accueil">
      <div class="container hero-grid">
        <article class="hero-card reveal is-visible">
          <div class="hero-copy">
            <div class="badge-inline">● Portfolio de professionnalisation — BTS SIO SLAM</div>
            <h1>
              Un portfolio <span class="gradient-text">propre, moderne et structuré</span> pour présenter mes stages, mes projets et mes preuves.
            </h1>
            <p class="lead">
              Je suis Badr Jouiyah, étudiant en BTS SIO option SLAM. Ce site rassemble mes réalisations professionnelles, mes projets menés en cours de formation, mes compétences techniques et les éléments utiles pour les épreuves du BTS. J'ai voulu un portfolio lisible, esthétique et crédible : les réalisations sont visibles immédiatement, puis les preuves détaillées sont accessibles dans une section dédiée.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="#stages">Voir mes stages</a>
              <a class="button secondary" href="#formation">Voir mes projets de formation</a>
            </div>
            <div class="hero-stats">
              <div class="stat-card"><strong>2</strong><span>Stages</span></div>
              <div class="stat-card"><strong>6+</strong><span>Projets de formation</span></div>
              <div class="stat-card"><strong>15+</strong><span>Réalisations clés</span></div>
              <div class="stat-card"><strong>SLAM</strong><span>Spécialité</span></div>
            </div>
          </div>
        </article>

        <aside class="hero-card hero-side reveal delay-1 is-visible">
          <div class="hero-feature">
            <div class="hero-feature-top">
              <div class="icon-box">📸</div>
              <h3>Focus principal : Photomaton</h3>
              <p>
                Projet de stage de deuxième année autour d'une application Photomaton avec Flask, SQLite, gestion des utilisateurs, rôles, prompts, association image ↔ prompt, sauvegarde et correction de bugs.
              </p>
            </div>
            <div class="hero-feature-grid">
              <div class="hero-feature-cell">
                <strong>Flask</strong>
                <span>Routes, logique applicative, pages et contrôles</span>
              </div>
              <div class="hero-feature-cell">
                <strong>SQLite</strong>
                <span>Utilisateurs, rôles, prompts, sessions, images</span>
              </div>
              <div class="hero-feature-cell">
                <strong>Admin / user</strong>
                <span>Affichage conditionnel et droits d'accès</span>
              </div>
              <div class="hero-feature-cell">
                <strong>Debug</strong>
                <span>Logs, corrections et amélioration des modules</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section id="apropos">
      <div class="container about-grid">
        <div class="panel soft reveal">
          <div class="section-header" style="margin-bottom:0;">
            <div class="eyebrow">À propos</div>
            <h2>Un portfolio pensé pour le BTS, mais aussi pour montrer mon vrai travail</h2>
            <p>
              Le but de ce site n'est pas seulement d'avoir un beau rendu. Il sert aussi à organiser mon parcours de professionnalisation, montrer ce que j'ai vraiment réalisé, faire le lien avec les compétences du BTS SIO et préparer plus facilement l'oral grâce à une structure claire : d'abord les réalisations, ensuite les preuves.
            </p>
          </div>
        </div>

        <div class="panel reveal delay-1">
          <div class="mini-grid">
            <div class="mini-card">
              <div class="icon-box">💻</div>
              <strong>Développement</strong>
              <p>Applications web, base de données, logique métier, formulaires, rôles utilisateurs et maintenance.</p>
            </div>
            <div class="mini-card">
              <div class="icon-box">🧠</div>
              <strong>Professionnalisation</strong>
              <p>Un premier stage orienté maintenance, puis un second stage plus complet autour d'un vrai projet applicatif.</p>
            </div>
            <div class="mini-card">
              <div class="icon-box">📂</div>
              <strong>Organisation</strong>
              <p>Des sections séparées pour garder un portfolio lisible sans mélanger réalisations et captures d'écran.</p>
            </div>
            <div class="mini-card">
              <div class="icon-box">🎯</div>
              <strong>Objectif</strong>
              <p>Présenter mes activités pour l'E4 / l'E5-E6 et disposer d'un support propre à montrer au professeur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="parcours">
      <div class="container">
        <div class="section-header reveal">
          <div class="eyebrow">Parcours</div>
          <h2>Mon parcours de professionnalisation</h2>
          <p>
            Une lecture rapide de mon évolution pendant le BTS : formation, stage de première année orienté maintenance, puis stage de deuxième année orienté développement autour du projet Photomaton.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-item reveal">
            <div class="timeline-content">
              <div class="timeline-head">
                <div>
                  <strong>BTS SIO option SLAM</strong>
                  <span>Formation en cours</span>
                </div>
                <span class="pill cyan">2024 — 2026</span>
              </div>
              <p>
                Formation centrée sur le développement d'applications, la gestion de bases de données, la conception, la maintenance, les environnements techniques et la professionnalisation à travers les projets et les stages.
              </p>
            </div>
          </div>

          <div class="timeline-item reveal delay-1">
            <div class="timeline-content">
              <div class="timeline-head">
                <div>
                  <strong>Stage de première année — Booster Informatique</strong>
                  <span>Toulouse</span>
                </div>
                <span class="pill gold">Maintenance / assistance</span>
              </div>
              <p>
                Stage orienté maintenance informatique, diagnostic de pannes, installation de logiciels, vérifications post-intervention et environnement réseau de base.
              </p>
            </div>
          </div>

          <div class="timeline-item reveal delay-2">
            <div class="timeline-content">
              <div class="timeline-head">
                <div>
                  <strong>Stage de deuxième année — Projet Photomaton</strong>
                  <span>Projet applicatif</span>
                </div>
                <span class="pill green">Développement / SQLite / Flask</span>
              </div>
              <p>
                Travail sur la gestion des utilisateurs, des rôles, des prompts, des sessions, des images générées, de leur sauvegarde, et correction de bugs via les logs et le débogage applicatif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="stages">
      <div class="container">
        <div class="section-header reveal">
          <div class="eyebrow">Stages</div>
          <h2>Réalisations en milieu professionnel</h2>
          <p>
            Cette partie reprend les deux stages séparément afin de montrer la cohérence du parcours : le premier met en avant la découverte du support et de la maintenance, le second présente un projet de développement beaucoup plus riche techniquement.
          </p>
        </div>

        <div class="panel soft reveal">
          <div class="card-top" style="margin-bottom: 28px; align-items:center;">
            <div class="card-icon">🛠️</div>
            <div>
              <h3 class="card-title" style="font-size:1.55rem;">Stage 1 — Booster Informatique</h3>
              <p class="card-subtitle">Maintenance, diagnostic, logiciels et environnement réseau</p>
            </div>
          </div>
          <div class="realization-grid">
            <article class="realization-card reveal">
              <div class="card-top"><div class="card-icon">🔎</div><div><h4 class="card-title">Diagnostic de pannes sur des postes informatiques</h4></div></div>
              <p class="card-copy">Participation au diagnostic de pannes sur des ordinateurs avec analyse du problème, vérification des composants et tests de fonctionnement.</p>
              <div class="tags"><span class="pill gold">Répondre aux incidents</span><span class="pill cyan">Gérer le patrimoine informatique</span></div>
            </article>

            <article class="realization-card reveal delay-1">
              <div class="card-top"><div class="card-icon">⚙️</div><div><h4 class="card-title">Installation et configuration de logiciels</h4></div></div>
              <p class="card-copy">Installation et configuration de logiciels nécessaires au fonctionnement de postes informatiques.</p>
              <div class="tags"><span class="pill green">Mettre à disposition un service</span><span class="pill cyan">Gérer le patrimoine informatique</span></div>
            </article>

            <article class="realization-card reveal delay-2">
              <div class="card-top"><div class="card-icon">✅</div><div><h4 class="card-title">Vérification du fonctionnement après intervention</h4></div></div>
              <p class="card-copy">Tests de fonctionnement des ordinateurs après réparation pour vérifier le système, les périphériques et la connectivité de base.</p>
              <div class="tags"><span class="pill cyan">Gérer le patrimoine informatique</span></div>
            </article>

            <article class="realization-card reveal">
              <div class="card-top"><div class="card-icon">🧩</div><div><h4 class="card-title">Recherche de l'origine de dysfonctionnements</h4></div></div>
              <p class="card-copy">Identification de l'origine de problèmes sur des postes informatiques et participation à la recherche de solutions.</p>
              <div class="tags"><span class="pill gold">Répondre aux incidents</span></div>
            </article>

            <article class="realization-card reveal delay-1">
              <div class="card-top"><div class="card-icon">🔧</div><div><h4 class="card-title">Maintenance et dépannage sur équipements</h4></div></div>
              <p class="card-copy">Participation à des opérations de maintenance et de dépannage sur différents équipements informatiques.</p>
              <div class="tags"><span class="pill gold">Répondre aux incidents</span><span class="pill cyan">Gérer le patrimoine informatique</span></div>
            </article>

            <article class="realization-card reveal delay-2">
              <div class="card-top"><div class="card-icon">🌐</div><div><h4 class="card-title">Vérification de connexions réseau sur postes</h4></div></div>
              <p class="card-copy">Participation à la vérification de la connectivité réseau et des paramètres réseau sur certains postes informatiques.</p>
              <div class="tags"><span class="pill cyan">Gérer le patrimoine informatique</span><span class="pill green">Mettre à disposition un service</span></div>
            </article>
          </div>
        </div>

        <div style="height:26px"></div>

        <div class="panel soft reveal delay-1">
          <div class="card-top" style="margin-bottom: 28px; align-items:center;">
            <div class="card-icon">📸</div>
            <div>
              <h3 class="card-title" style="font-size:1.55rem;">Stage 2 — Projet Photomaton</h3>
              <p class="card-subtitle">Flask, SQLite, gestion utilisateurs, rôles, prompts, images et débogage</p>
            </div>
          </div>
          <div class="realization-grid">
            <article class="realization-card reveal">
              <div class="card-top"><div class="card-icon">🗃️</div><div><h4 class="card-title">Conception et modification de la base de données SQLite</h4></div></div>
              <p class="card-copy">Conception et modification de la base de données SQLite pour stocker les utilisateurs, les rôles, les prompts, les sessions et les images générées.</p>
              <div class="tags"><span class="pill cyan">Gérer le patrimoine informatique</span><span class="pill green">Mettre à disposition un service</span></div>
              <div class="link-row"><span class="mini-link">→ Schéma BDD</span><span class="mini-link">→ Tables SQLite</span></div>
            </article>

            <article class="realization-card reveal delay-1">
              <div class="card-top"><div class="card-icon">👤</div><div><h4 class="card-title">Gestion des utilisateurs et des droits</h4></div></div>
              <p class="card-copy">Participation au développement du système de gestion des utilisateurs et des droits d'accès (admin / utilisateur) dans l'application photomaton.</p>
              <div class="tags"><span class="pill green">Mettre à disposition un service</span><span class="pill purple">Travailler en mode projet</span></div>
              <div class="link-row"><span class="mini-link">→ Page utilisateurs</span><span class="mini-link">→ Gestion des rôles</span></div>
            </article>

            <article class="realization-card reveal delay-2">
              <div class="card-top"><div class="card-icon">✍️</div><div><h4 class="card-title">Gestion des prompts</h4></div></div>
              <p class="card-copy">Participation au développement du système permettant de créer, modifier et utiliser les prompts dans l'application photomaton.</p>
              <div class="tags"><span class="pill green">Mettre à disposition un service</span><span class="pill purple">Travailler en mode projet</span></div>
              <div class="link-row"><span class="mini-link">→ CRUD prompts</span><span class="mini-link">→ Formulaires</span></div>
            </article>

            <article class="realization-card reveal">
              <div class="card-top"><div class="card-icon">👁️</div><div><h4 class="card-title">Affichage conditionnel selon les rôles</h4></div></div>
              <p class="card-copy">Mise en place de contrôles dans l'interface web afin d'afficher ou masquer certaines fonctionnalités selon le rôle de l'utilisateur.</p>
              <div class="tags"><span class="pill green">Mettre à disposition un service</span><span class="pill cyan">Développer la présence en ligne</span></div>
              <div class="link-row"><span class="mini-link">→ Pages protégées</span><span class="mini-link">→ Boutons masqués</span></div>
            </article>

            <article class="realization-card reveal delay-1">
              <div class="card-top"><div class="card-icon">🖼️</div><div><h4 class="card-title">Association image ↔ prompt et enregistrement</h4></div></div>
              <p class="card-copy">Mise en place du système permettant d'associer les images générées aux prompts correspondants et d'enregistrer ces informations.</p>
              <div class="tags"><span class="pill cyan">Gérer le patrimoine informatique</span></div>
              <div class="link-row"><span class="mini-link">→ Relation image / prompt</span><span class="mini-link">→ Enregistrement en base</span></div>
            </article>

            <article class="realization-card reveal delay-2">
              <div class="card-top"><div class="card-icon">💾</div><div><h4 class="card-title">Sauvegarde des images générées et des prompts associés</h4></div></div>
              <p class="card-copy">Mise en place du système de sauvegarde des images générées et des prompts associés dans le système de fichiers et la base de données.</p>
              <div class="tags"><span class="pill cyan">Gérer le patrimoine informatique</span><span class="pill green">Mettre à disposition un service</span></div>
              <div class="link-row"><span class="mini-link">→ Fichiers</span><span class="mini-link">→ Chemins</span><span class="mini-link">→ Base de données</span></div>
            </article>

            <article class="realization-card reveal">
              <div class="card-top"><div class="card-icon">🐞</div><div><h4 class="card-title">Correction de dysfonctionnements et amélioration des modules</h4></div></div>
              <p class="card-copy">Correction de dysfonctionnements rencontrés lors du développement des modules utilisateurs et prompts, avec utilisation des logs pour faciliter le débogage.</p>
              <div class="tags"><span class="pill gold">Répondre aux incidents</span></div>
              <div class="link-row"><span class="mini-link">→ Logs</span><span class="mini-link">→ Correctifs</span><span class="mini-link">→ Tests manuels</span></div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="formation">
      <div class="container">
        <div class="formation-top reveal">
          <div class="section-header" style="margin-bottom:0; max-width:760px;">
            <div class="eyebrow">En cours de formation</div>
            <h2>Projets réalisés pendant le BTS</h2>
            <p>
              Cette section reprend les principales réalisations menées en cours de formation : développement d'applications, bases de données, déploiement d'environnement serveur et mise en place d'outils techniques.
            </p>
          </div>
          <label class="search-bar" aria-label="Rechercher un projet de formation">
            <span>🔎</span>
            <input id="projectSearch" type="text" placeholder="GSB, M2L, GLPI, SQL..." />
          </label>
        </div>

        <div class="grid-3" id="projectGrid">
          <article class="project-card reveal" data-search="gsb application web gestion frais php sql html visiteurs fiches frais remboursements">
            <div class="card-top"><div class="card-icon">🧾</div><div><h3 class="card-title">Application web de gestion des frais (GSB)</h3><p class="card-subtitle">PHP / SQL / HTML</p></div></div>
            <p class="card-copy">Analyse du cahier des charges et mise en place d'une base de données SQL pour gérer les visiteurs, les fiches de frais et les remboursements.</p>
            <div class="tags"><span class="pill cyan">Développement web</span><span class="pill purple">Base de données</span></div>
          </article>

          <article class="project-card reveal delay-1" data-search="transports application web php sql visiteurs fiches frais remboursements interface">
            <div class="card-top"><div class="card-icon">🚚</div><div><h3 class="card-title">Application web de gestion des transports</h3><p class="card-subtitle">PHP / SQL / HTML</p></div></div>
            <p class="card-copy">Développement d'une application web permettant de gérer les visiteurs, les fiches de frais et le suivi des remboursements.</p>
            <div class="tags"><span class="pill cyan">Application métier</span><span class="pill purple">SQL</span></div>
          </article>

          <article class="project-card reveal delay-2" data-search="m2l club sportif gestion adherents php mariadb html création modification suppression consultation">
            <div class="card-top"><div class="card-icon">🏟️</div><div><h3 class="card-title">Application de gestion pour un club sportif (M2L)</h3><p class="card-subtitle">PHP / MariaDB / HTML</p></div></div>
            <p class="card-copy">Application de gestion des adhérents pour un club sportif avec création, modification, suppression et consultation.</p>
            <div class="tags"><span class="pill cyan">Gestion</span><span class="pill purple">CRUD</span></div>
          </article>

          <article class="project-card reveal" data-search="centralisation import données sql php consultation modification enregistrements">
            <div class="card-top"><div class="card-icon">🗂️</div><div><h3 class="card-title">Centralisation et import de données SQL</h3><p class="card-subtitle">SQL / PHP</p></div></div>
            <p class="card-copy">Import de données dans une base SQL et consultation / modification des enregistrements via une interface web.</p>
            <div class="tags"><span class="pill purple">Données</span><span class="pill cyan">Traitement</span></div>
          </article>

          <article class="project-card reveal delay-1" data-search="lamp apache php mariadb machine virtuelle serveur web déploiement">
            <div class="card-top"><div class="card-icon">🖥️</div><div><h3 class="card-title">Mise en place d'un serveur web LAMP</h3><p class="card-subtitle">Apache / PHP / MariaDB / VM</p></div></div>
            <p class="card-copy">Création d'une machine virtuelle, installation d'un serveur web Apache, de PHP et de MariaDB dans un environnement LAMP.</p>
            <div class="tags"><span class="pill gold">Infrastructure</span><span class="pill cyan">Service</span></div>
          </article>

          <article class="project-card reveal delay-2" data-search="glpi apache mariadb incidents parc informatique déploiement configuration">
            <div class="card-top"><div class="card-icon">📦</div><div><h3 class="card-title">Déploiement de GLPI</h3><p class="card-subtitle">GLPI / Apache / MariaDB</p></div></div>
            <p class="card-copy">Configuration d'une base de données et déploiement de l'outil GLPI pour la gestion des incidents et du parc informatique.</p>
            <div class="tags"><span class="pill gold">Gestion de parc</span><span class="pill cyan">Support</span></div>
          </article>
        </div>
      </div>
    </section>

    <section id="competences">
      <div class="container">
        <div class="section-header reveal">
          <div class="eyebrow">Compétences</div>
          <h2>Langages, outils et notions mobilisés</h2>
          <p>
            Une synthèse lisible des technologies, des outils et des notions que je mobilise dans mes stages et mes projets. Cette partie peut être enrichie plus tard avec des niveaux de maîtrise ou des démonstrations plus détaillées.
          </p>
        </div>

        <div class="skill-wrap">
          <article class="skill-card reveal">
            <h3><span class="icon-box">💡</span> Langages / frameworks</h3>
            <div class="list-inline">
              <span class="pill">Python</span>
              <span class="pill">Flask</span>
              <span class="pill">HTML</span>
              <span class="pill">CSS</span>
              <span class="pill">SQL</span>
              <span class="pill">PHP</span>
              <span class="pill">Java</span>
              <span class="pill">JavaScript</span>
            </div>
          </article>

          <article class="skill-card reveal delay-1">
            <h3><span class="icon-box">🧰</span> Outils / environnements</h3>
            <div class="list-inline">
              <span class="pill">SQLite</span>
              <span class="pill">MariaDB</span>
              <span class="pill">Apache</span>
              <span class="pill">GLPI</span>
              <span class="pill">Git</span>
              <span class="pill">VS Code</span>
              <span class="pill">PuTTY</span>
              <span class="pill">Tailscale</span>
            </div>
          </article>

          <article class="skill-card reveal delay-2">
            <h3><span class="icon-box">📘</span> Notions à savoir expliquer</h3>
            <div class="list-inline">
              <span class="pill">Base de données</span>
              <span class="pill">Gestion des rôles</span>
              <span class="pill">Débogage</span>
              <span class="pill">Architecture web</span>
              <span class="pill">Validation métier</span>
              <span class="pill">Portfolio BTS</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="veille">
      <div class="container veille-grid">
        <div class="panel soft reveal">
          <div class="section-header" style="margin-bottom:0;">
            <div class="eyebrow">Veille technologique</div>
            <h2>Une veille axée cybersécurité</h2>
            <p>
              Ma veille technologique est orientée cybersécurité et vulnérabilités informatiques. Elle me permet de suivre l'actualité du domaine, d'identifier les informations importantes et de nourrir mon portfolio comme mes futures présentations orales.
            </p>
          </div>
        </div>
        <div class="panel reveal delay-1">
          <div class="bullet-list">
            <div class="bullet-item"><span class="dot"></span><div>Sujet principal : cybersécurité et vulnérabilités informatiques.</div></div>
            <div class="bullet-item"><span class="dot"></span><div>Outil principal : Feedly pour centraliser et suivre les sources.</div></div>
            <div class="bullet-item"><span class="dot"></span><div>Objectif : repérer les nouvelles menaces, vulnérabilités et évolutions du domaine.</div></div>
            <div class="bullet-item"><span class="dot"></span><div>Exploitation : sélection des informations utiles pour le dossier et les épreuves du BTS.</div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="preuves">
      <div class="container">
        <div class="section-header reveal">
          <div class="eyebrow">Preuves / détails techniques</div>
          <h2>Une section séparée pour lier les réalisations aux captures, au code et aux comptes rendus</h2>
          <p>
            C'est ici que tu peux mettre les vraies captures, les extraits de code, les schémas, les PDF ou les comptes rendus. Cette séparation respecte exactement ce que tu voulais : le portfolio principal reste propre, et les éléments de preuve sont accessibles dans une section à part.
          </p>
        </div>

        <div class="proof-grid">
          <article class="proof-card reveal">
            <h3>Preuves liées au stage Photomaton</h3>
            <div class="bullet-list">
              <div class="bullet-item"><span class="dot"></span><div>Captures de la page utilisateurs.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Captures de la page prompts.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Extraits de code Flask.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Structure ou schéma de la base SQLite.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Exemples de routes et chemins liés aux images.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Logs utilisés pour le débogage.</div></div>
            </div>
          </article>

          <article class="proof-card reveal delay-1">
            <h3>Preuves liées au stage Booster Informatique</h3>
            <div class="bullet-list">
              <div class="bullet-item"><span class="dot"></span><div>Fiches d'activité ou rapport de stage.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Captures de l'environnement professionnel.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Tableau de réalisations pour l'E4.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Notes ou traces de maintenance / logiciels / réseau.</div></div>
            </div>
          </article>

          <article class="proof-card reveal delay-2">
            <h3>Preuves liées aux projets en formation</h3>
            <div class="bullet-list">
              <div class="bullet-item"><span class="dot"></span><div>Captures d'écran des applications.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Extraits de code SQL / PHP / Java.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Schémas ou modèles de données.</div></div>
              <div class="bullet-item"><span class="dot"></span><div>Documents techniques et comptes rendus.</div></div>
            </div>
          </article>
        </div>

        <div class="callout reveal">
          <p>
            Conseil d'organisation : garde cette page principale comme vitrine de ton parcours, puis ajoute ensuite des pages ou des blocs détaillés du style « Voir le code », « Voir les captures », « Voir le compte rendu ». C'est la structure la plus propre pour un portfolio BTS.
          </p>
          <span class="pill green">Portfolio lisible + preuves séparées</span>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container contact-grid">
        <div class="panel soft reveal">
          <div class="section-header" style="margin-bottom:0;">
            <div class="eyebrow">Contact / suite</div>
            <h2>Une base solide à personnaliser demain avec tes vraies preuves</h2>
            <p>
              Le plus important est déjà là : les sections, les réalisations, la hiérarchie visuelle, la séparation entre portfolio et détails techniques. Demain, tu pourras remplacer les textes génériques restants par tes vraies infos personnelles, ton GitHub, tes PDF, tes captures et tes liens de preuve.
            </p>
          </div>
        </div>

        <div class="panel reveal delay-1">
          <div class="contact-card-grid">
            <div class="contact-box">
              <strong>📧 Email</strong>
              <p>ajoute-ton-adresse@mail.com</p>
            </div>
            <div class="contact-box">
              <strong>💻 GitHub</strong>
              <p>ajoute-ton-profil-github</p>
            </div>
            <div class="contact-box" style="grid-column:1 / -1;">
              <strong>📝 Utilisation conseillée</strong>
              <p>
                Tu peux montrer ce site au professeur comme portfolio d'avancement. Ensuite, enrichis la section preuves avec tes vraies images, captures, extraits de code, schémas et comptes rendus pour rendre le tout encore plus crédible à l'oral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-wrap">
      <span>Portfolio BTS SIO SLAM — Badr Jouiyah</span>
      <span>Version HTML / CSS / JS simple à ouvrir localement</span>
    </div>
  </footer>

  <script>
    const header = document.getElementById('siteHeader');
    const menuToggle = document.getElementById('menuToggle');
    const mobilePanel = document.getElementById('mobilePanel');
    const mobileLinks = mobilePanel.querySelectorAll('a');
    const navLinks = document.querySelectorAll('nav.main-nav a');
    const sections = [...document.querySelectorAll('main section')];
    const reveals = document.querySelectorAll('.reveal');
    const projectSearch = document.getElementById('projectSearch');
    const projectCards = [...document.querySelectorAll('#projectGrid .project-card')];

    const updateHeader = () => {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader);

    menuToggle.addEventListener('click', () => {
      const open = mobilePanel.classList.toggle('open');
      menuToggle.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    const setActiveLink = () => {
      const offset = window.scrollY + 140;
      let currentId = sections[0]?.id || 'accueil';
      for (const section of sections) {
        if (offset >= section.offsetTop) currentId = section.id;
      }
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === '#' + currentId;
        link.classList.toggle('active', isActive);
      });
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    if (projectSearch) {
      projectSearch.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        projectCards.forEach(card => {
          const haystack = card.dataset.search || '';
          card.style.display = haystack.includes(q) ? '' : 'none';
        });
      });
    }
  </script>
</body>
</html>
