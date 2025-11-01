# Forma UX Component Catalogue - MOBILE VERSION

**Platform:** Mobile Application  
**Version:** 1  
**Status:** Production-ready  
**Last Updated:** October 2025  
**Related:** Forma_UX_Design_System.md (shared tokens), Forma_UX_StyleSheet_Mobile.css

---

## OVERVIEW

This catalogue defines all **mobile-specific components, design tokens, and patterns** for the Forma UX Mobile design system. All components inherit design tokens from `Forma_UX_Design_System.md`.

**Note:** Web components are documented separately in `Forma_UX_Component_Catalogue_Web.md`. Mobile components are optimized for 375-430px viewport, touch interaction, and single-column layout.

---

## PART 1: SHARED DESIGN TOKENS

All design tokens are inherited from `Forma_UX_Design_System.md`. Mobile-specific variants are defined below.

### Mobile-Specific Spacing Adjustments

For mobile, spacing is slightly more generous to accommodate 48px touch targets:

- `--space-touch-target-min`: 48px (all interactive elements)
- `--space-card-mobile`: 12px (gap between cards on list)
- `--space-section-mobile`: 24px (gap between sections)

### Mobile-Specific Typography

Font sizes adjusted for readability on small screens:

- **H1 (Screen Title):** 24px (vs 48px on web)
- **H2 (Section Header):** 18px (vs 36px on web)
- **Body Text:** 16px (same as web)
- **Label:** 14px (same as web)
- **Caption:** 12px (same as web)

---

## PART 2: CORE MOBILE COMPONENTS

### A. NAVIGATION COMPONENTS

#### 1. Bottom Tab Bar (Primary Navigation)

**Purpose:** Frequently used app sections at bottom (thumb-friendly zone)

**Properties:**
- Height: 56px (iOS) / 64px (Material Design)
- Icon size: 24px
- Label size: 12px
- Touch target: 48px minimum (full tab)
- Badge support: 24px red badge with white number

**Visual States:**
- **Inactive:** Gray icon + gray label
- **Active:** Blue icon + blue label, with underline indicator
- **Badge:** Red circle with count in top-right

**Content & Data:**
- Icon + label
- Optional badge count
- Max 4-5 tabs recommended

**User Actions:**
- Tap to navigate to section
- Long-press to show menu (optional)

**Mobile HTML Structure:**
```html
<nav class="mobile-tab-bar">
  <a class="mobile-tab-item active" href="#home">
    <span class="mobile-tab-icon">🏠</span>
    <span class="mobile-tab-label">Home</span>
  </a>
  <a class="mobile-tab-item" href="#list">
    <span class="mobile-tab-icon">📋</span>
    <span class="mobile-tab-label">List</span>
  </a>
</nav>
```

---

#### 2. Drawer Navigation (Secondary Navigation)

**Purpose:** Access secondary options, settings, or primary nav alternative

**Properties:**
- Width: 280px (standard, up to 320px on large phones)
- Slides in from left edge
- Overlay backdrop (semi-transparent)
- Can be swiped closed

**Visual States:**
- **Closed:** Hidden off-screen
- **Open:** Slides in with slide animation
- **Item hover/active:** Background highlight

**Content & Data:**
- Drawer header (user info or app name)
- Menu items with icons
- Sections with dividers
- Optional footer (logout, settings)

**User Actions:**
- Tap hamburger icon to toggle
- Tap menu item to navigate
- Swipe left to close
- Tap backdrop to close

---

#### 3. Tab Navigation (Secondary)

**Purpose:** Switch between content sections within a screen (not primary navigation)

**Properties:**
- Height: 44px
- Tab item min-width: 80px
- Scrollable horizontally if many tabs
- Fixed underline indicator

**Visual States:**
- **Inactive:** Gray text
- **Active:** Blue text + underline
- **Disabled:** Grayed text, not tappable

**Content & Data:**
- Text label or icon + label
- Max 3-5 visible tabs (scroll for more)

**User Actions:**
- Tap tab to switch content
- Swipe content area to switch tabs (optional)

---

### B. ACTION COMPONENTS

#### 4. Floating Action Button (FAB)

**Purpose:** Primary action easily accessible from any scroll position

**Properties:**
- Size: 56px diameter (standard)
- Position: Bottom-right, 16px margin from edges
- Elevation: shadow-lg (floats above content)
- Icon size: 24px
- Color: Primary blue (#6366F1)

**Visual States:**
- **Default:** Blue background, white icon
- **Hover/Active:** Darker blue background, ripple effect
- **Disabled:** Grayed out, not tappable

**Content & Data:**
- Icon (single action recommended)
- Optional tooltip on long-press

**User Actions:**
- Tap to trigger primary action
- May expand to show sub-actions (optional)

**Mobile HTML Structure:**
```html
<button class="mobile-fab" aria-label="Add new">
  <span class="mobile-fab-icon">➕</span>
</button>
```

---

#### 5. Action Sheet (Bottom Modal Menu)

**Purpose:** Contextual menu for actions (edit, delete, share, etc.)

**Properties:**
- Slides up from bottom
- Covers ~60% of screen (scrollable if many actions)
- Cancel button always visible
- Backdrop overlay

**Visual States:**
- **Closed:** Hidden below screen
- **Open:** Slides up with animation
- **Item hover:** Background highlight

**Content & Data:**
- Title (optional)
- List of actions (5-8 items max)
- Cancel button (always at bottom)
- Optional destructive action (red)

**User Actions:**
- Tap action to execute
- Swipe down to close
- Tap cancel or backdrop to close

---

### C. INPUT COMPONENTS

#### 6. Mobile Form Input

**Purpose:** User input on mobile (optimized for touch and mobile keyboards)

**Properties:**
- Height: 44-48px
- Padding: 12px
- Font size: 16px (prevents zoom-on-focus on iOS)
- Full width (unless inline)
- Touch-friendly tap target

**Visual States:**
- **Default:** Border gray
- **Focus:** Border blue, keyboard visible
- **Error:** Border red, error text below
- **Disabled:** Grayed out

**Content & Data:**
- Label above
- Placeholder text
- Optional hint text below
- Error message on validation

**User Actions:**
- Tap to focus (keyboard appears)
- Type to input
- Swipe on number field to change value (optional)

---

#### 7. Segment Control (iOS-style Tab Switcher)

**Purpose:** Choose between 2-3 related options (smaller alternative to tabs)

**Properties:**
- Height: 32px
- Background: Light gray
- Segments: 2-3 maximum
- Selected: Blue background

**Visual States:**
- **Inactive:** Gray text
- **Active:** Blue background, white text

**Content & Data:**
- Text label per segment
- Icon optional

---

### D. CARD & LIST COMPONENTS

#### 8. Mobile List Item

**Purpose:** Repeatable unit in a scrollable list

**Properties:**
- Height: 56-64px minimum (touch target)
- Padding: 12px
- Touch target: Full item
- Border bottom for divider
- Optional thumbnail/icon

**Visual States:**
- **Default:** White background
- **Tap/Active:** Light gray background
- **Unread/Badge:** Optional badge indicator

**Content & Data:**
- Title (16px bold)
- Subtitle (14px gray)
- Optional icon/avatar (40px)
- Optional trailing icon (chevron, more menu)

**User Actions:**
- Tap to navigate/select
- Swipe for quick actions (edit, delete - optional)
- Long-press for context menu (optional)

---

#### 9. Mobile Card

**Purpose:** Grouped content block with shadow/border

**Properties:**
- Border radius: 12px
- Padding: 16px
- Shadow: shadow-md
- Full width (minus 12px margin)
- Margin between cards: 12px

**Visual States:**
- **Default:** White background
- **Active/Tap:** Slight elevation increase
- **Disabled:** Grayed

**Content & Data:**
- Title
- Description
- Image (optional)
- Action button (optional)

---

### E. FEEDBACK COMPONENTS

#### 10. Toast Notification

**Purpose:** Temporary message feedback (success, error, info)

**Properties:**
- Position: Bottom-center, 12px from bottom
- Height: 48px
- Width: 90% of screen (up to 320px)
- Duration: 3-4 seconds
- Dismissible by swipe/tap

**Visual States:**
- **Success:** Green background
- **Error:** Red background
- **Info:** Blue background
- **Warning:** Orange background

**Content & Data:**
- Icon (16px)
- Message text
- Optional action button

---

#### 11. Badge

**Purpose:** Notification count or status indicator

**Properties:**
- Size: 24px diameter (standard)
- Background: Red (#EF4444)
- Text: White, 12px bold
- Position: Top-right of element

**Content & Data:**
- Number (1-99+)
- Optional dot (just indicator, no number)

---

#### 12. Loading Spinner

**Purpose:** Progress indication during async operations

**Properties:**
- Size: 40px (small), 56px (standard)
- Color: Primary blue
- Animation: Continuous rotation
- Overlay: Optional semi-transparent backdrop

---

### F. DIALOG COMPONENTS

#### 13. Mobile Modal/Alert

**Purpose:** Critical information or confirmation required

**Properties:**
- Full-screen (mobile) or center overlay (web)
- Header with close button
- Scrollable content if long
- Action buttons at bottom

**Visual States:**
- **Closed:** Hidden
- **Open:** Full-screen or centered overlay

**Content & Data:**
- Title
- Message/content
- 1-2 action buttons
- Optional cancel/dismiss

**User Actions:**
- Tap button to confirm/cancel
- Swipe down to dismiss (optional)

---

#### 14. Bottom Sheet

**Purpose:** Drawer-like panel from bottom for content or actions

**Properties:**
- Slides up from bottom
- Can be dragged to dismiss
- Covers 40-60% of screen
- Rounded top corners

**Visual States:**
- **Closed:** Hidden
- **Open:** Visible with animation
- **Dragging:** Responsive to user drag

---

### G. SPECIALIZED MOBILE COMPONENTS

#### 15. Mobile Search Bar

**Purpose:** Search input optimized for mobile

**Properties:**
- Height: 44px
- Full width
- Icon: Magnifying glass (left)
- Clear button (right, appears on input)
- Mobile keyboard: Search keyboard type

---

#### 16. Pill/Chip

**Purpose:** Removable tag or filter chip

**Properties:**
- Height: 32px
- Padding: 8px 12px
- Border radius: 16px (pill shape)
- Icon (optional) + text
- Close icon (if removable)

**Visual States:**
- **Default:** Gray background
- **Selected:** Blue background
- **Active/Tap:** Darker shade

---

### H. DATA DISPLAY COMPONENTS

#### 17. Mobile List with Sections

**Purpose:** Grouped list with section headers

**Properties:**
- Section header: Sticky, 44px height
- List items: 56-64px height
- Sticky headers remain visible on scroll

**Content & Data:**
- Section title (bold, gray background)
- List items within section
- Optional section footer

---

#### 18. Progress Bar

**Purpose:** Visual progress indication (multi-step forms, uploads)

**Properties:**
- Height: 4px
- Full width
- Background: Light gray
- Progress: Primary blue

**Content & Data:**
- Filled percentage
- Optional label above/below

---

## PART 3: COMPONENT COMPOSITION RULES

### Touch Target Rules (Accessibility)
- **Minimum:** 48px × 48px for all tappable elements
- **Spacing:** 8px minimum between touch targets
- **Exception:** Icons within large buttons (can be smaller)

### Mobile List Best Practices
- **Item height:** 56px minimum (single line with icon)
- **Item height:** 64px minimum (title + subtitle)
- **No horizontal scrolling:** All content fits 375px width

### Mobile Form Best Practices
- **Font size:** 16px+ (prevents auto-zoom on iOS)
- **Input height:** 44-48px for easy tapping
- **Full width:** Inputs span full width
- **Labels:** Always above input (not placeholder-only)
- **Error handling:** Inline validation with red text

### Mobile Modal Best Practices
- **Avoid small modals:** Use full-screen when possible
- **Action buttons:** Stack vertically on mobile
- **Safe areas:** Respect notches and home indicators
- **Dismiss gesture:** Allow swipe or tap outside

---

## PART 4: MOBILE COMPONENT IMPLEMENTATION

Each component includes:
1. **Purpose:** When and why to use it
2. **Properties:** Size, color, spacing, animation
3. **Visual States:** Default, active, disabled, error, etc.
4. **Content & Data:** What goes inside
5. **User Actions:** How users interact with it
6. **HTML Structure:** Code example (if applicable)

---

## PART 5: MOBILE-FIRST APPROACH

**Single-column layout:** All components arranged vertically  
**Touch optimization:** 48px minimum tap targets  
**No hover states:** Use active/pressed states instead  
**Vertical scrolling:** Primary content consumption pattern  
**Bottom navigation:** Frequent actions within thumb reach  
**Full-width content:** Utilize the 375px width fully  

---

## COMPATIBILITY NOTES

- **iOS:** Support Safe Area (notch, home indicator)
- **Android:** Support status bar and navigation bar
- **Landscape:** Optional; components adapt or lock to portrait
- **Dark mode:** Consider dark mode variants for all components

---

## VERSION HISTORY

- **V1:** Mobile-specific component library with touch-optimized interactions

**Status:** Production-ready  
**Last updated:** October 2025
