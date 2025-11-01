# Forma UX Design System - Shared Foundation

**Version:** 1 (Hybrid Multi-Platform)  
**Status:** Production-ready  
**Last Updated:** October 2025  
**Scope:** Shared design tokens, branding, and principles for Web & Mobile platforms

---

## OVERVIEW

This document defines all **design tokens, branding, and core UX principles** that are shared across both **Forma UX Web** and **Forma UX Mobile**. 

Platform-specific implementations (layout patterns, components, CSS) are documented separately in their respective guides.

---

## DESIGN IDENTITY & PURPOSE

**Brand personality:** Scientific, corporate, trustworthy, and innovation-driven  
**Design tone:** Formal, neutral, professional, and precise  
**Target audience:** Healthcare professionals, partners, researchers, and institutional stakeholders  
**Core values:** Trust, quality, innovation, accessibility, and scientific clarity

---

## PART 1: DESIGN TOKENS

### Colors

#### Neutral Colors (Grays)
- `--color-gray-25`: #FCFCFD (lightest)
- `--color-gray-50`: #F9FAFB
- `--color-gray-100`: #F3F4F6
- `--color-gray-200`: #E5E7EB
- `--color-gray-300`: #D1D5DB
- `--color-gray-400`: #9CA3AF
- `--color-gray-500`: #6B7280
- `--color-gray-600`: #4B5563
- `--color-gray-700`: #374151
- `--color-gray-800`: #1F2937
- `--color-gray-900`: #111827 (darkest)

#### Primary Brand Colors
- `--color-primary-50`: #EEF2FF
- `--color-primary-100`: #E0E7FF
- `--color-primary-200`: #C7D2FE
- `--color-primary-300`: #A5B4FC
- `--color-primary-400`: #818CF8
- `--color-primary-500`: #6366F1 (main brand color)
- `--color-primary-600`: #4F46E5
- `--color-primary-700`: #4338CA
- `--color-primary-800`: #3730A3
- `--color-primary-900`: #312E81

#### Semantic Colors

**Success:**
- `--color-success-50`: #F0FDF4
- `--color-success-500`: #22C55E
- `--color-success-600`: #16A34A
- `--color-success-700`: #15803D

**Warning:**
- `--color-warning-50`: #FFFBEB
- `--color-warning-500`: #F59E0B
- `--color-warning-600`: #D97706
- `--color-warning-700`: #B45309

**Error:**
- `--color-error-50`: #FEF2F2
- `--color-error-500`: #EF4444
- `--color-error-600`: #DC2626
- `--color-error-700`: #B91C1C

**Info:**
- `--color-info-50`: #EFF6FF
- `--color-info-500`: #3B82F6
- `--color-info-600`: #2563EB
- `--color-info-700`: #1D4ED8

#### Text Colors
- `--color-text-primary`: #111827 (on light backgrounds)
- `--color-text-secondary`: #6B7280
- `--color-text-tertiary`: #9CA3AF
- `--color-text-inverse`: #FFFFFF (on dark backgrounds)
- `--color-text-disabled`: #D1D5DB

#### Background Colors
- `--color-bg-primary`: #FFFFFF
- `--color-bg-secondary`: #F9FAFB
- `--color-bg-tertiary`: #F3F4F6
- `--color-bg-inverse`: #111827
- `--color-bg-overlay`: rgba(0, 0, 0, 0.5)

---

### Typography

#### Font Family
- `--font-family-base`: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- `--font-family-mono`: 'Monaco', 'Courier New', monospace

#### Font Sizes
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)

#### Font Weights
- `--font-weight-regular`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

#### Line Heights
- `--line-height-tight`: 1.25
- `--line-height-snug`: 1.375
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.625
- `--line-height-loose`: 2

---

### Spacing

8px grid system:
- `--space-0`: 0px
- `--space-1`: 0.25rem
- `--space-2`: 0.5rem
- `--space-3`: 0.75rem
- `--space-4`: 1rem
- `--space-5`: 1.25rem
- `--space-6`: 1.5rem
- `--space-7`: 1.75rem
- `--space-8`: 2rem
- `--space-10`: 2.5rem
- `--space-12`: 3rem
- `--space-16`: 4rem
- `--space-20`: 5rem

---

### Borders & Radius

#### Border Radius
- `--radius-none`: 0px
- `--radius-xs`: 0.25rem
- `--radius-sm`: 0.5rem
- `--radius-md`: 0.75rem
- `--radius-lg`: 1rem
- `--radius-xl`: 1.5rem
- `--radius-full`: 9999px

#### Border Widths
- `--border-width-1`: 1px
- `--border-width-2`: 2px

#### Border Colors
- `--border-color-light`: #E5E7EB
- `--border-color-default`: #D1D5DB
- `--border-color-dark`: #9CA3AF

---

### Shadows

- `--shadow-xs`: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- `--shadow-sm`: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- `--shadow-md`: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- `--shadow-lg`: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- `--shadow-xl`: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
- `--shadow-2xl`: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

---

### Z-Index Hierarchy

- `--z-base`: 0
- `--z-dropdown`: 100
- `--z-sticky`: 200
- `--z-fixed`: 300
- `--z-backdrop`: 400
- `--z-modal`: 500
- `--z-popover`: 600
- `--z-notification`: 700

---

### Motion & Animation

#### Durations
- `--duration-fast`: 150ms
- `--duration-base`: 300ms
- `--duration-slow`: 500ms

#### Easing Functions
- `--ease-in`: cubic-bezier(0.4, 0, 1, 1)
- `--ease-out`: cubic-bezier(0, 0, 0.2, 1)
- `--ease-in-out`: cubic-bezier(0.4, 0, 0.2, 1)
- `--ease-linear`: linear

---

### Icon Sizes

- `--icon-size-xs`: 16px
- `--icon-size-sm`: 20px
- `--icon-size-md`: 24px
- `--icon-size-lg`: 32px
- `--icon-size-xl`: 48px

---

## PART 2: CORE UX PRINCIPLES

### Consistency
Never redefine global design elements (colors, typography, spacing) across platforms. All visual languages must inherit from this shared system.

### Clarity
Keep layouts and interactions straightforward. Minimize cognitive load through logical information architecture and progressive disclosure.

### Accessibility
All interactive elements must meet **WCAG AA contrast ratio** (4.5:1 minimum). Support keyboard navigation, screen readers, and touch targets (48px minimum on mobile).

### Tone & Voice
- Professional and efficient
- User-focused and empathetic
- Scientific and precise
- Trustworthy and transparent

### State Visibility
Always provide clear visual feedback for user interactions:
- Loading states (spinners, progress indicators)
- Success/error states (notifications, inline validation)
- Disabled states (reduced opacity, cursor: not-allowed)
- Interactive feedback (hover, focus, active states)

### Platform-Specific Considerations

**Web:**
- Supports hover states and mouse interactions
- Multi-column layouts for data density
- Persistent navigation (sidebar + header)
- Desktop-optimized for large screens

**Mobile:**
- Touch-first interactions (no hover)
- Single-column, vertical scrolling layout
- Bottom navigation for frequent actions
- Optimized for small screens (375-430px)

---

## PART 3: CRITICAL DESIGN RULES

✓ **Colors always same:** Design tokens apply to both platforms  
✓ **Typography system:** Consistent font families, sizes, weights across platforms  
✓ **Spacing grid:** 8px grid system applies universally  
✓ **4px border radius:** Default for all components (adjustable per platform need)  
✓ **1.5px border:** Default border width (adjustable for mobile)  
✓ **WCAG AA minimum:** All text and interactive elements must pass contrast checks  
✓ **Motion consistency:** Durations and easing functions shared across platforms  
✓ **Component naming:** Consistent naming conventions for easier documentation  

---

## PART 4: RESPONSIVE BREAKPOINTS

These breakpoints are referenced across both Web and Mobile implementations:

- **Mobile:** 375px - 640px (small phones to large phones)
- **Tablet:** 641px - 1024px (tablets and small laptops)
- **Desktop:** 1025px+ (laptops and large screens)

**Note:** Mobile apps typically target 375-430px viewport width. Web apps support all breakpoints.

---

## IMPLEMENTATION GUIDES

For platform-specific implementations, refer to:

- **Web:** `Forma_UX_Master_Prompt_Web.md`, `Forma_UX_StyleSheet_Web.css`
- **Mobile:** `Forma_UX_Master_Prompt_Mobile.md`, `Forma_UX_StyleSheet_Mobile.css`

For shared components and tokens, refer to:

- **Component Catalogue (Web):** `Forma_UX_Component_Catalogue_Web.md`
- **Component Catalogue (Mobile):** `Forma_UX_Component_Catalogue_Mobile.md`

---

## VERSION HISTORY

- **V1:** Foundation - Shared design tokens and principles for hybrid Web + Mobile system

**Status:** Production-ready  
**Last updated:** October 2025
