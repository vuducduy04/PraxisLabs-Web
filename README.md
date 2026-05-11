# PraxisLabs — Corporate Website

> **Kinetic Precision** — Precision Data that Fuels the Next Generation of Robotics.

Official corporate website for **PraxisLabs Co., Ltd.**, a robotics data infrastructure company accelerating hardware and software adoption across Vietnam and Southeast Asia.

🌐 **Company Links**
- LinkedIn: [PraxisLabs Co., Ltd.](https://www.linkedin.com/company/praxis-labs-co-ltd/)
- GitHub: [praxislabs-gh](https://github.com/praxislabs-gh)

---

## 📋 Overview

This is a **Single-Page Application (SPA)** built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required. All navigation between pages is handled client-side via a lightweight custom router.

---

## 🗂️ Project Structure

```
praxis_ui/
├── index.html                          # Main HTML — all pages live here
├── index.css                           # Full design system & component styles
├── app.js                              # SPA router, FAQ, team renderer, form handler
└── praxislabs_robotics_data_website/
    ├── photos/                         # Image assets
    │   ├── logo.png
    │   ├── icon-LinkedIn.png
    │   ├── icon-Github.png
    │   ├── icon-X.png
    │   ├── icon-Youtube.png
    │   ├── icon-Facebook.png
    │   ├── pMinh.png                   # CEO photo
    │   ├── pPhuc.png                   # CTO photo
    │   ├── pHanh.jpg                   # Software engineer photo
    │   └── pDuy.jpg                    # Hardware engineer photo
    ├── home_praxislabs/                # Design reference assets — Home page
    ├── about_us_praxislabs/            # Design reference assets — About Us page
    ├── support_praxislabs/             # Design reference assets — Support page
    ├── contact_us_praxislabs/          # Design reference assets — Contact Us page
    └── kinetic_precision/              # Brand & design system reference
```

---

## 📄 Pages

| Page | Route Key | Description |
|---|---|---|
| **Home** | `home` | Hero section, core services overview, CTA banner |
| **Products** | `products` | Coming soon placeholder |
| **Support** | `support` | FAQ accordion, contact options (email, ticket, phone) |
| **About Us** | `about` | Mission & vision, company story, timeline, team grid |
| **Contact Us** | `contact` | Contact form, HQ address, direct contact info, social links |

---

## ⚙️ How It Works

### SPA Navigation (`app.js`)
- All pages are rendered in the DOM simultaneously as `<div class="page">` blocks.
- The router toggles the `.active` class to show/hide pages without any reload.
- Any element with a `data-page="<key>"` attribute triggers navigation on click.

### Key JavaScript Features
- **`renderFAQ()`** — Dynamically injects FAQ items from a local data array into `#faq-list`.
- **`renderTeam()`** — Dynamically renders the core team cards into `#team-grid`.
- **`toggleFaq(i)`** — Toggles the `.open` class on a FAQ item to expand/collapse its answer.
- **`handleSubmit(e)`** — Handles the contact form submission (currently logs to console and shows a confirmation alert).
- **Hamburger menu** — Toggles `.mobile-open` on the nav links for responsive mobile navigation.

### Design System (`index.css`)
- Built around **CSS custom properties** (variables) for colors, spacing, and shadows.
- Typography: **Hanken Grotesk** (headings), **Inter** (body), **JetBrains Mono** (labels/chips).
- Icons: **Google Material Symbols Outlined**.
- Fully responsive with breakpoints at `1024px` and `768px`.

---

## 🚀 Running Locally

No build step needed. Simply open `index.html` directly in your browser, or serve it with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## 🎨 Design System Tokens

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#001e30` | Primary text, headings |
| `--primary-container` | `#0c344c` | Navbar, hero background |
| `--secondary-container` | `#fc5a29` | Accent / CTA buttons |
| `--background` | `#faf9fb` | Page background |
| `--light-gray` | `#E7EBED` | Footer background |
| `--safety-orange` | `#F45424` | Brand accent |

---

## 👥 Core Team

| Name | Role |
|---|---|
| Mr. Dinh The Minh | CEO |
| Mr. Chau Hoang Phuc | CTO |
| Ms. Nguyen Thi Hong Hanh | Software Engineer |
| Mr. Vu Duc Duy | Hardware Engineer |

---

## 📬 Contact

- **Executive:** ceo@praxis.com
- **Support:** support@praxis.com
- **Headquarters:** Gia Lam District, Hanoi, Vietnam

---

© 2026 PraxisLabs Co., Ltd. All rights reserved.
