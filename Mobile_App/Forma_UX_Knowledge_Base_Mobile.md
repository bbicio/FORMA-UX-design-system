# Forma UX Mobile Knowledge Base - Layout Patterns & Best Practices

**Version:** 1  
**Platform:** Mobile Application (iOS/Android)  
**Last Updated:** October 2025  
**Related:** Forma_UX_Master_Prompt_Mobile.md, Forma_UX_Component_Catalogue_Mobile.md

---

## OVERVIEW

This document defines **7 standard mobile layout patterns** and best practices for designing mobile screens. All patterns are optimized for 375-430px viewport and touch-first interaction.

---

## FOUNDATIONAL MOBILE PRINCIPLES

### Mobile-First Mental Model

**Vertical thinking:** Content flows top-to-bottom  
**Touch zones:** Bottom 40% is thumb-friendly (frequent actions here)  
**One task per screen:** Each screen has one primary goal  
**Progressive disclosure:** Hide secondary content, reveal on tap  
**Minimal scrolling:** No more than 3-4 full-screen scrolls  
**Single column:** Default layout is always single-column  

### Screen Real Estate Optimization

- **Status bar:** 20-44px (reserved by system)
- **Header:** 44-56px (navigation, title)
- **Content:** Flexible (scrollable if needed)
- **Bottom bar:** 56-64px (navigation or actions)
- **Safe areas:** Account for notches (top) and home indicators (bottom)

### Touch Target Standards

- **Minimum tap target:** 48px × 48px
- **Recommended spacing:** 8px between targets
- **Labels on buttons:** Should be clear and concise (1-2 words)
- **Icon guidelines:** 24px standard size, scalable to 32px

---

## PATTERN 1: BOTTOM TAB NAVIGATION

**Description:** App-level navigation via fixed tabs at bottom. Ideal for apps with 3-5 primary sections (home, explore, profile, settings, etc.).

**Characteristics:**
- **Header:** Fixed/floating with title and back button
- **Content:** Scrollable main content area
- **Navigation:** Fixed bottom tab bar (56-64px)
- **Behavior:** Switching tabs replaces content (no nesting)
- **Best for:** Multi-section apps like social media, email, health tracking

### Layout Structure

```
┌─────────────────────────┐
│ 📱 STATUS BAR (20-44px) │
├─────────────────────────┤
│ ← TITLE          ⋯     │ ← Header (44px)
├─────────────────────────┤
│                         │
│  CONTENT AREA           │ ← Scrollable
│  (Cards, Lists, etc.)   │
│                         │
│                         │
├─────────────────────────┤
│ 🏠 📋 🔍 👤 ⚙️          │ ← Bottom Tab Bar (56px)
└─────────────────────────┘
```

### UX Guidelines

- **Tab count:** 3-5 tabs maximum (iOS often uses 4-5, Android uses 3-4)
- **Icons only or icons + labels?** Labels recommended for clarity
- **Switching behavior:** Instant tab switch; no animation needed
- **Deep linking:** Each tab can have its own navigation stack
- **Badge support:** Show unread counts or notifications on tab icons

### Implementation Tips

- Use `.mobile-tab-bar` wrapper with `.mobile-tab-item` children
- Active tab has `.active` class with underline or highlight
- Each tab links to a unique page/section (no nested tabs)
- Use deep linking to save user state (e.g., user's position in list)

### Best Use Cases

- Email app (Inbox, Drafts, Sent, Settings)
- Social media (Feed, Search, Notifications, Profile, Menu)
- Health app (Home, History, Goals, Profile)
- eCommerce (Shop, Search, Cart, Account, Menu)

### Pitfalls to Avoid

- ❌ More than 5 tabs (use drawer for additional options)
- ❌ Changing tab content while user is scrolled mid-page
- ❌ No label on tabs (icon-only is unclear)
- ❌ Nesting tab navigation (confusing interaction model)

---

## PATTERN 2: DRAWER + MAIN CONTENT (Hamburger Menu)

**Description:** Primary navigation in a side drawer, accessed via hamburger icon. Main content area is full-width. Ideal for apps with many navigation options or for prioritizing content visibility.

**Characteristics:**
- **Header:** Title + hamburger icon (fixed)
- **Drawer:** Slides from left (280-320px wide)
- **Content:** Full-width main area (scrollable)
- **Overlay:** Semi-transparent backdrop when drawer open
- **Best for:** Content-first apps, apps with deep navigation trees

### Layout Structure

```
DRAWER CLOSED:
┌─────────────────────────┐
│ ☰ TITLE          ⋯     │ ← Header
├─────────────────────────┤
│                         │
│  CONTENT AREA           │
│  (Full-width)           │
│                         │
└─────────────────────────┘

DRAWER OPEN:
┌─────────┬───────────────┐
│ ☰ MENU  │ (Overlay)     │
├─────────┤               │
│ 🏠 Home │ CONTENT       │
│ 📋 List │ (Dimmed)      │
│ ⚙️ Sett │               │
│ ❓ Help │               │
│ 🚪 Logoff               │
├─────────┤               │
│ Version │               │
└─────────┴───────────────┘
```

### UX Guidelines

- **Drawer width:** 280px standard (up to 320px on large phones)
- **Icon + label:** Always show both for clarity
- **Sections:** Group related items with dividers
- **Footer:** Profile, help, logout options
- **Animation:** Smooth slide-in from left edge
- **Gesture:** Swipe from left edge or tap hamburger icon to open
- **Dismiss:** Tap overlay or swipe left to close

### Implementation Tips

- Use `.mobile-drawer` wrapper, `.mobile-drawer-item` for menu items
- Drawer should be `.drawer-open` on toggle
- Add `.backdrop` overlay when drawer opens (`.backdrop.active`)
- Use left edge swipe or hamburger icon to toggle
- Keep drawer width fixed, content scrolls horizontally

### Best Use Cases

- News apps (Categories: Politics, Sports, Tech, Entertainment)
- Productivity apps (Projects, Teams, Settings, Help)
- Document management (Folders, Recent, Archive, Shared)
- Enterprise apps (multiple sections and options)

### Pitfalls to Avoid

- ❌ Drawer too wide (hides content completely)
- ❌ No visible hamburger icon when drawer closed
- ❌ Nested drawers (confusing)
- ❌ Drawer content not labeled clearly
- ❌ No way to close drawer other than tapping overlay

---

## PATTERN 3: STACKED NAVIGATION (Linear Workflow)

**Description:** Linear stack of screens (home → list → detail → form). Back button returns to previous screen. Ideal for workflows with a clear progression.

**Characteristics:**
- **Header:** Back button (left), title (center), optional action (right)
- **Content:** Full-width scrollable content
- **Navigation:** Linear progression (no tabs or drawer)
- **Back button:** Always available (except on home screen)
- **Best for:** Workflows, wizards, detail views, search results

### Layout Structure

```
SCREEN 1 (HOME):
┌─────────────────────────┐
│              TITLE ⋯    │ ← No back button
├─────────────────────────┤
│ [List of items]         │
│ • Item 1                │
│ • Item 2                │
│ • Item 3                │
└─────────────────────────┘

SCREEN 2 (DETAIL):
┌─────────────────────────┐
│ ← ITEM 1 TITLE    ♡    │ ← Back button, title, action
├─────────────────────────┤
│ [Detail view]           │
│ Image                   │
│ Description             │
│ [Share] [Edit] [Delete] │
└─────────────────────────┘

SCREEN 3 (EDIT FORM):
┌─────────────────────────┐
│ ← EDIT ITEM 1           │ ← Back button
├─────────────────────────┤
│ [Form inputs]           │
│ Name: [________]        │
│ Email: [________]       │
│ [Cancel] [Save]         │
└─────────────────────────┘
```

### UX Guidelines

- **Back button:** Always top-left (except home)
- **Title:** Center, changes per screen
- **Right action:** Optional (share, edit, delete, menu)
- **History:** Use back button stack (not multiple back buttons)
- **Home:** Clear entry point to return to first screen
- **Transition:** Slide animation for visual continuity

### Implementation Tips

- Back button uses `.back-button` class or `← symbol`
- Each screen is a separate view/component
- Use router/navigation stack to manage screens
- Title updates per screen
- Smooth slide transition between screens

### Best Use Cases

- Multi-step forms (wizard pattern)
- Search → Results → Detail flow
- List → Detail → Edit flow
- Onboarding workflows
- Settings workflows

### Pitfalls to Avoid

- ❌ No back button when user expects one
- ❌ Losing user's position when navigating back
- ❌ Multiple back buttons on same screen
- ❌ Unclear title (user gets lost)
- ❌ No home shortcut (hard to return to start)

---

## PATTERN 4: SINGLE-SCREEN FOCUS (Modal/Overlay)

**Description:** One primary action on a focused screen, with minimal distractions. Modals or bottom sheets for secondary actions. Ideal for critical workflows, onboarding, payment screens.

**Characteristics:**
- **Full-screen immersion:** One task, nothing else
- **Modal:** For critical actions (login, payment, confirmation)
- **Bottom sheet:** For non-critical secondary options
- **Minimal options:** Only essential buttons
- **Best for:** Login, payment, checkout, confirmation, onboarding

### Layout Structure

```
MAIN SCREEN (FULL FOCUS):
┌─────────────────────────┐
│         HEADER          │ ← Minimal; no navigation
├─────────────────────────┤
│                         │
│  PRIMARY ACTION         │
│  [Large, Clear Content] │
│                         │
├─────────────────────────┤
│   [PRIMARY BUTTON]      │ ← CTA
│   [Secondary Button]    │
└─────────────────────────┘

MODAL (CRITICAL):
┌─────────────────────────┐
│ Confirm Delete          │ ← Simple question
├─────────────────────────┤
│ Are you sure?           │
│                         │
│   [Delete] [Cancel]     │
└─────────────────────────┘

BOTTOM SHEET (SECONDARY):
┌─────────────────────────┐
│ ▬▬▬▬▬▬ (drag handle)    │
├─────────────────────────┤
│ Share                   │
│ • Email                 │
│ • Message               │
│ • WhatsApp              │
├─────────────────────────┤
│ [Cancel]                │
└─────────────────────────┘
```

### UX Guidelines

- **One primary action:** Bold, prominent CTA
- **Modal styling:** Full-screen or center overlay
- **Minimal content:** Only essential information
- **Action buttons:** Stack vertically (1 per row on mobile)
- **Dismiss:** Easy to close (back button, X, cancel)

### Implementation Tips

- Main content uses `.full-screen-focus` wrapper
- Modal uses `.modal.modal-sm` or `.modal` class
- Bottom sheet uses `.bottom-sheet` class
- Reduce visual noise (no tabs, drawers, or sidebars)

### Best Use Cases

- Login / Sign-up forms
- Payment / Checkout
- Confirmation dialogs
- Onboarding steps
- Critical alerts

### Pitfalls to Avoid

- ❌ Too much content (use scrolling, not cramming)
- ❌ Multiple CTAs (confusing which one to tap)
- ❌ No clear close/back option
- ❌ Slow form validation (user frustrated)

---

## PATTERN 5: TAB + DRAWER HYBRID

**Description:** Combines bottom tabs (primary navigation) with a drawer (secondary/settings). Useful for apps with both frequent primary actions and many secondary options.

**Characteristics:**
- **Tabs:** 3-4 primary sections
- **Drawer:** Additional options (help, settings, profile)
- **Content:** Scrollable main area
- **Hierarchy:** Tabs for primary, drawer for secondary
- **Best for:** Complex apps with many features (enterprise, media)

### Layout Structure

```
DRAWER OPEN:
┌─────────┬───────────────┐
│ ☰ MENU  │ (Overlay)     │
├─────────┤               │
│ 🏠 Home │ CONTENT       │
│ 📋 List │ (Dimmed)      │
│ ⚙️ Sett │               │
│ ❓ Help │               │
├─────────┤               │
│ Profile │               │
└─────────┴───────────────┘
          ↓ (Drawer closes, tabs visible)

┌─────────────────────────┐
│ ☰ HOME TITLE      ⋯    │
├─────────────────────────┤
│ CONTENT                 │
│ (Scrollable)            │
│                         │
├─────────────────────────┤
│ 🏠 📋 🔍 👤 ⋯           │ ← Tabs + more icon
└─────────────────────────┘
```

### UX Guidelines

- **Tabs:** 3-4 only (most frequent tasks)
- **Drawer:** Secondary options, settings, help
- **"More" button:** On tab bar if space limited
- **Consistency:** Drawer items match tab structure

### Implementation Tips

- Combine `.mobile-tab-bar` and `.mobile-drawer` classes
- Last tab can be a "More" menu (hamburger icon)
- Drawer items include less-frequent actions

---

## PATTERN 6: HERO + SCROLLABLE CONTENT

**Description:** Hero image/section at top, content scrolls below. Common in media, content, and e-commerce apps. Hero collapses on scroll for more space.

**Characteristics:**
- **Hero:** Full-width image or banner (200-300px)
- **Header:** Collapses/adapts on scroll
- **Content:** Scrollable sections below
- **Best for:** Article readers, product pages, media apps

### Layout Structure

```
INITIAL STATE:
┌─────────────────────────┐
│    HERO IMAGE (300px)   │
├─────────────────────────┤
│ TITLE                   │
├─────────────────────────┤
│ CONTENT SECTION 1       │
│ Lorem ipsum...          │
│                         │
│ CONTENT SECTION 2       │
│ More content...         │
└─────────────────────────┘

AFTER SCROLLING:
┌─────────────────────────┐
│ ← TITLE          ⋯     │ ← Header collapses
├─────────────────────────┤
│ CONTENT (continues)     │
│ Lorem ipsum...          │
│ [More scrolling...]     │
└─────────────────────────┘
```

### UX Guidelines

- **Hero height:** 200-300px initially
- **Collapse behavior:** Hero reduces to just title
- **Parallax:** Optional subtle parallax effect
- **Smooth transition:** No jarring header changes

---

## PATTERN 7: MODAL / BOTTOM-SHEET FLOW

**Description:** Main screen + modal or bottom sheet for focused interactions (filters, forms, additional options).

**Characteristics:**
- **Main screen:** Visible in background
- **Modal/sheet:** Overlays main screen
- **Focus:** User attention on modal content
- **Dismiss:** Swipe, back button, or overlay tap
- **Best for:** Filters, quick forms, action menus

### Layout Structure

```
MAIN SCREEN:
┌─────────────────────────┐
│ TITLE              ☰    │
├─────────────────────────┤
│ [List items]            │
│ • Item 1                │
│ • Item 2                │
│ • Item 3                │
└─────────────────────────┘

BOTTOM SHEET OVERLAY:
┌─────────────────────────┐  
│ (Dimmed main content)   │
│                         │
│  ┌─────────────────────┐│
│  │ ▬▬▬▬▬ Filter       ││
│  ├─────────────────────┤│
│  │ Category:           ││
│  │ [x] Option 1        ││
│  │ [ ] Option 2        ││
│  │ [x] Option 3        ││
│  │                     ││
│  │  [Apply] [Reset]    ││
│  └─────────────────────┘│
└─────────────────────────┘
```

### UX Guidelines

- **Sheet height:** 40-60% of screen (scrollable if needed)
- **Drag handle:** Visual indicator at top
- **Close button:** Not always needed (swipe to close)
- **Safe area:** Content avoids bottom notches
- **Backdrop:** Semi-transparent to show main content

---

## MOBILE LAYOUT BEST PRACTICES

### Spacing & Padding
- **Screen margins:** 16px left/right on mobile
- **Section padding:** 16px top/bottom
- **Card margin:** 12px between cards
- **Icon spacing:** 8-12px between icon and text

### Typography for Small Screens
- **Screen title (H1):** 24px bold
- **Section header (H2):** 18px semibold
- **Body text:** 16px regular
- **Labels/hints:** 14px regular
- **Captions:** 12px regular

### Touch Zones (Thumb Accessibility)
- **Reachable zone:** Bottom 40% of screen (easiest to tap)
- **Medium zone:** Middle 30% (comfortable reach)
- **Difficult zone:** Top 30% (requires hand repositioning)
- **Bottom actions:** FAB or button bar in reachable zone

### Performance & Load
- **Lazy load images:** Only load when needed
- **List virtualization:** Only render visible items
- **Minimize scrolling:** Content shouldn't exceed 3-4 viewports
- **Fast interactions:** Instant feedback on tap

### Responsive Considerations
- **Viewport width:** 375px target (supports 320-430px)
- **Landscape mode:** Consider or lock to portrait
- **Fold devices:** Account for screen folds (if applicable)
- **Safe areas:** Notches, home indicators, status bars

---

## VERSION HISTORY

- **V1:** Mobile layout patterns with best practices

**Status:** Production-ready  
**Last updated:** October 2025
