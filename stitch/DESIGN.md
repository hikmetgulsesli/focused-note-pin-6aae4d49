---
name: Deterministic Utility
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 1rem
  margin-page: 2rem
  stack-compact: 0.5rem
  stack-default: 1rem
  inset-squish: 0.25rem 0.75rem
  inset-square: 0.75rem
---

## Brand & Style
The design system is engineered for high-performance cognition and professional reliability. It targets users who manage complex information hierarchies and require a tool that feels stable, predictable, and quiet. 

The aesthetic is **Modern Corporate Minimalism** with a focus on **Functional Density**. It avoids decorative flourishes, instead finding beauty in structural precision and typographic clarity. The interface should feel like a well-calibrated instrument—utilitarian, crisp, and deterministic. It prioritizes content over container, using subtle borders rather than heavy shadows to define the workspace.

## Colors
The palette is architectural, leaning heavily on a range of cool slates to provide depth without visual noise.

- **Primary (Deep Slate):** Used for high-contrast text, primary navigation backgrounds, and structural anchors.
- **Secondary (Refined Teal):** An intentional accent used sparingly for primary actions and "active" states to draw focus without causing fatigue.
- **Tertiary (Muted Blue-Gray):** Used for secondary text, icons, and non-interactive metadata.
- **Neutral (Ice White/Slate):** A scale of backgrounds ranging from `#FFFFFF` for the main workspace to `#F1F5F9` for sidebars and secondary surfaces.

Use a high-contrast ratio for all functional text. Borders should utilize a consistent `#E2E8F0` to maintain definition in dense layouts.

## Typography
This design system utilizes **Geist** for its technical precision and exceptional legibility at small sizes. The typographic scale is compact to support high information density.

- **Headlines:** Use semi-bold weights with slight negative letter-spacing to maintain a "locked-in" professional look.
- **Body:** The standard reading size is 14px. For dense data tables or sidebars, 13px is preferred.
- **Labels:** Use 12px Medium for form labels and 11px Bold Uppercase for category headers or metadata tags to create clear visual separation from body content.

## Layout & Spacing
The layout follows a **Strict Grid System** that emphasizes vertical alignment and modularity.

- **Desktop:** 12-column grid with 16px gutters. Sidebars are fixed-width (240px - 280px) to ensure the primary workspace remains stable.
- **Density:** High. Vertical rhythm is tight (8px base unit). Use "squished" padding for buttons and inputs (top/bottom padding is 1/3 of left/right) to maintain a sleek, horizontal profile.
- **Responsive:** On mobile, sidebars collapse into bottom sheets or full-screen overlays. The 12-column grid transitions to a 4-column layout with 16px margins.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

- **Level 0 (Background):** `#F8FAFC` — used for the application canvas.
- **Level 1 (Card/Surface):** `#FFFFFF` — used for the primary content area, outlined with a 1px solid border in `#E2E8F0`.
- **Level 2 (Popovers/Modals):** `#FFFFFF` with a very subtle, sharp 4px blur shadow (`rgba(0,0,0,0.05)`) and a `#CBD5E1` border.
- **Active State:** Elements being dragged or focused should receive a 1px border of the Secondary Teal color to indicate state change without shifting layout.

## Shapes
Shapes are conservative and crisp. The "Soft" (4px) setting is applied to almost all components to take the "edge" off the industrial aesthetic while remaining strictly professional.

- **Small Components (Buttons, Inputs):** 4px (0.25rem) radius.
- **Large Components (Cards, Modals):** 8px (0.5rem) radius.
- **Selections:** Selection indicators in lists should have a 2px radius or remain sharp at the edges where they meet container borders.

## Components

- **Buttons:** Crisp, medium-weight text. Primary buttons use the Deep Slate background with white text. Secondary buttons use a white background with a Slate border. No gradients.
- **Inputs:** 1px solid borders (`#E2E8F0`). On focus, the border changes to the Secondary Teal (`#0D9488`) with a subtle 2px outer glow of the same color at 10% opacity.
- **Data Tables:** Zebra-striping is avoided. Use 1px horizontal dividers only. Header cells should have a subtle gray background (`#F1F5F9`) and use the `label-sm` typography style.
- **Chips/Tags:** Small, rectangular with a 2px radius. Use a light tinted background (e.g., Teal at 10% opacity) with dark colored text for high legibility at 11px.
- **Lists:** High-density rows (32px - 40px height). Use a 2px vertical "accent bar" on the far left of a list item to indicate the active/selected state.
- **Navigation:** Vertical sidebar with icon + label. Icons should be 18px, linear, and use a consistent 1.5pt stroke weight.