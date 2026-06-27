# Design Specification: SVARNA Bali (Version 2)

**Design Style:** Elevated Tropical Heritage Minimalism (Contemporary Balinese vernacular fused with Editorial Serif layout and raw organic materiality).

**Concept:** "Sanctuary of Stone and Sea" — A narrative-driven visual experience showcasing the juxtaposition of Jimbaran's rugged limestone cliffs, the azure Indian Ocean, and authentic Balinese cultural craftsmanship.

**Canvas:** 
*   Background: `#f6f3e7` (Warm Chalky Cream) as primary surface, `#eeead9` (Muted Sandstone) for secondary containers, transitioning to absolute black (`#000000`) for night/bar experiences.
*   Container bounds: Max-width 1440px with generous margins (80px desktop, 24px mobile) to force breathing room.

**Mood:** Meditative, ultra-premium, quiet luxury, tactile, authentic.

**Color Palette:**
*   **Background:** 
    *   Primary: `oklch(0.96 0.015 85)` (`#f6f3e7`) — Reflects local Jimbaran limestone.
    *   Secondary: `oklch(0.93 0.02 85)` (`#eeead9`) — Muted sea-sand texture.
*   **Surface/Card:** `oklch(0.90 0.025 85)` (`#e5dfcc`) — Organic stone paving.
*   **Text:** 
    *   Primary: `oklch(0.25 0.005 85)` (`#333330`) — Obsidian volcanic rock.
    *   Secondary: `oklch(0.45 0.005 85)` (`#666663`) — Weathered teak wood grey.
    *   Muted: `oklch(0.65 0.005 85)` (`#999995`) — Ash-white clay.
*   **Accent:** 
    *   Primary: `oklch(0.70 0.06 70)` (`#cca972`) — Patinated gold/woven straw.

**Typography:**
*   **Headings (h1, h2, h3):**
    *   Classification: Display Serif
    *   Font Family: "Cormorant Garamond", Georgia, serif
    *   Weight: 300 (Light) & 400 (Regular)
    *   Spacing: `tracking-wide` (0.05em)
    *   Scale: h1 (5rem desktop, 2.5rem mobile), h2 (3.5rem desktop, 2rem mobile)
*   **Subheadings & UI Elements:**
    *   Classification: Humanist Sans-Serif
    *   Font Family: "Inter", system-ui, sans-serif
    *   Weight: 500 (Medium)
    *   Spacing: `tracking-[0.2em]` (extreme letter-spacing for high-end feel)
    *   Scale: 11px to 13px (compact uppercase)
*   **Body Text:**
    *   Classification: Editorial Serif
    *   Font Family: "Cormorant Garamond", serif (for literary narrative sections) & "Inter" (for secondary/grid descriptions)
    *   Weight: 400
    *   Scale: 16px to 18px (Garamond), 14px (Inter)

**Layout:**
*   Grid: 12-column variable grid with offset margins. Components should intentionally cross grid boundaries to create visual tension and asymmetrical breathing room.
*   Asymmetry: 60/40 splits for key sections rather than boring 50/50 blocks. Text blocks are offset from their accompanying media containers.

**Illustration:**
*   None. Vector graphics must be strictly functional (hairline borders, minimal arrows, geographic coordinate indicators). No cartoon or tech startup vectors.

**Photography:**
*   Style: Editorial travel photography featuring high contrast, deep shadows, warm natural sunlight highlights, and organic framing.
*   Cropping: Oversized, full-viewport bleeds or raw asymmetrical portrait shots. No generic stock feel.
*   Subject Treatment: Focus on authentic architectural details, crashing waves, raw materials (teak, basalt, limestone), and serene human interactions with nature.

**Graphic Language:**
*   Annotations: Raw geographical coordinates (e.g. `8.6725° S, 115.1542° E`), thin 1px dividers, and compact architectural labels.
*   Feeling: Brutalist-Luxury (brutalist layout rigor combined with luxury materials and typographic spacing).

**Materiality:**
*   Digital equivalents of tactile luxury print assets:
    *   Uncoated textured deckle-edge paper (represented by `#f6f3e7` background and soft noise overlays).
    *   Brushed brass, matte black basalt stone, and natural hand-woven rattan.

**Components:**
*   **Cover/Hero:** Seamless viewport video/media display with overlaying thin borders, minimalist play controls, and a floating coordinate panel.
*   **Grid Showcase:** Offset cards with alternating heights (staggered layouts) to reflect the natural landscape of Jimbaran cliff lines.
*   **Booking Widget:** Compact, ultra-clean horizontal bar utilizing raw inputs with custom date indicators.

**Effects:**
*   Transitions: 1200ms ease-in-out cubic-bezier curves on hovers. Smooth fade-in-up animations for content load. Sticky parallax scrolling for split headers.

**Rules:**
*   Maintain a minimum of 40% empty space (negative space) in every page block.
*   All CTAs must use compact uppercase sans-serif text with minimum 0.15em tracking.
*   No rounded corners on buttons or cards (`rounded-none`).

**Anti-Rules:**
*   Never use standard borders larger than 1px.
*   Never use corporate colors (blue, vibrant green) or gradients.
*   Avoid standard button pill shapes. All buttons must be strict geometric rectangles.

**Quality Standards:**
*   The final page must feel like a luxury publication print page or high-end architectural portfolio.
