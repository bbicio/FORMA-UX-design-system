# UI KIT Component Catalogue

This catalogue defines all components, design tokens, and patterns for your design system. Copy this into your master prompt under the "Component Catalogue" section.

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

#### Heading Styles

| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 | 3rem (48px) | 700 | 1.25 |
| H2 | 2.25rem (36px) | 700 | 1.25 |
| H3 | 1.875rem (30px) | 600 | 1.375 |
| H4 | 1.5rem (24px) | 600 | 1.375 |
| H5 | 1.25rem (20px) | 600 | 1.375 |
| H6 | 1rem (16px) | 600 | 1.5 |

#### Paragraph Styles

| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Large | 1.125rem (18px) | 400 | 1.625 |
| Base | 1rem (16px) | 400 | 1.5 |
| Small | 0.875rem (14px) | 400 | 1.5 |
| Tiny | 0.75rem (12px) | 400 | 1.5 |

---

### Spacing Scale

Use this scale for consistent margins, padding, and gaps:

- `--space-0`: 0px
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-5`: 1.25rem (20px)
- `--space-6`: 1.5rem (24px)
- `--space-7`: 1.75rem (28px)
- `--space-8`: 2rem (32px)
- `--space-10`: 2.5rem (40px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)
- `--space-20`: 5rem (80px)

---

### Borders & Radius

#### Border Radius
- `--radius-none`: 0px
- `--radius-xs`: 0.25rem (4px) — small, subtle
- `--radius-sm`: 0.5rem (8px) — buttons, inputs
- `--radius-md`: 0.75rem (12px) — cards, modals
- `--radius-lg`: 1rem (16px) — larger components
- `--radius-xl`: 1.5rem (24px) — pills, large buttons
- `--radius-full`: 9999px — fully rounded

#### Border Widths
- `--border-width-0`: 0px
- `--border-width-1`: 1px (default, dividers, subtle borders)
- `--border-width-2`: 2px (emphasized)

#### Border Colors
- `--border-color-light`: #E5E7EB (on light backgrounds)
- `--border-color-default`: #D1D5DB
- `--border-color-dark`: #9CA3AF (on dark backgrounds)

---

### Elevation & Shadows

#### Shadow System (Depth Layers)

| Level | Use Case | Value |
|-------|----------|-------|
| None | Flat elements, no depth | none |
| XS | Subtle depth, small components | 0 1px 2px 0 rgba(0, 0, 0, 0.05) |
| SM | Buttons, input focus | 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) |
| MD | Cards, dropdowns | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) |
| LG | Elevated cards, popovers | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) |
| XL | Modals, floating panels | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) |
| 2XL | Highest priority overlays | 0 25px 50px -12px rgba(0, 0, 0, 0.25) |

#### Z-Index Scale
- `--z-base`: 0 (default)
- `--z-dropdown`: 100 (dropdowns, tooltips)
- `--z-sticky`: 200 (sticky headers)
- `--z-fixed`: 300 (fixed navigation)
- `--z-backdrop`: 400 (modal backdrops)
- `--z-modal`: 500 (modals, dialogs)
- `--z-popover`: 600 (popovers, top-level overlays)
- `--z-notification`: 700 (notifications, toasts)

---

### Motion & Transitions

#### Duration
- `--duration-fast`: 150ms (quick interactions: hover, focus)
- `--duration-base`: 300ms (standard: modals, transitions)
- `--duration-slow`: 500ms (slow: complex animations)

#### Easing Functions
- `--ease-in`: cubic-bezier(0.4, 0, 1, 1) (accelerating)
- `--ease-out`: cubic-bezier(0, 0, 0.2, 1) (decelerating, natural)
- `--ease-in-out`: cubic-bezier(0.4, 0, 0.2, 1) (smooth both ways)
- `--ease-linear`: linear (constant speed)

#### Common Transitions
- `transition-colors: color 150ms var(--ease-out)`
- `transition-all: all 300ms var(--ease-out)`
- `transition-opacity: opacity 150ms var(--ease-out)`
- `transition-transform: transform 300ms var(--ease-out)`

---

### Iconography

#### Icon Grid & Sizes
- `--icon-size-xs`: 16px (small labels, badges)
- `--icon-size-sm`: 20px (form inputs, table icons)
- `--icon-size-md`: 24px (default, buttons, navigation)
- `--icon-size-lg`: 32px (hero, feature icons)
- `--icon-size-xl`: 48px (large heroes, emphasis)

#### Icon Style
- **Grid:** 24x24px base grid (scales to 16, 20, 32, 48)
- **Stroke Weight:** 2px for consistency
- **Style:** Outline (recommended for UI)
- **Format:** SVG preferred
- **Color:** Inherit from `currentColor` (uses text color)

#### Icon Naming Convention
Use prefix + descriptive name (kebab-case):
- `icon-check` (checkmark)
- `icon-x` (close/dismiss)
- `icon-menu` (hamburger)
- `icon-chevron-down`
- `icon-arrow-right`
- `icon-search`
- `icon-user`
- `icon-bell`
- etc.

---

## PART 2: CORE COMPONENTS

### Button Component

#### Overview
Buttons trigger actions. Use semantic classes to communicate intent.

#### Variants

**Primary** (main action, brand color)
```html
<button class="btn btn-primary">Primary Button</button>
```

**Secondary** (secondary action, outline style)
```html
<button class="btn btn-secondary">Secondary Button</button>
```

**Tertiary** (least prominent, ghost style)
```html
<button class="btn btn-tertiary">Tertiary Button</button>
```

**Danger** (destructive action, red)
```html
<button class="btn btn-danger">Delete</button>
```

**Ghost** (minimal, no background)
```html
<button class="btn btn-ghost">Ghost Button</button>
```

#### Sizes

- `.btn-lg` — Large (padding: 12px 24px, font-size: 16px)
- `.btn-md` — Medium/Default (padding: 10px 18px, font-size: 14px)
- `.btn-sm` — Small (padding: 8px 14px, font-size: 14px)
- `.btn-xs` — Extra Small (padding: 6px 12px, font-size: 12px)

#### States

```html
<!-- Hover state (automatic via CSS) -->
<button class="btn btn-primary">Hover me</button>

<!-- Active/Pressed state (automatic) -->
<button class="btn btn-primary">Pressed</button>

<!-- Disabled state -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Loading state (with spinner) -->
<button class="btn btn-primary is-loading">
  <span class="spinner-sm"></span>
  Loading...
</button>

<!-- Icon-only button -->
<button class="btn btn-primary btn-icon-only" aria-label="Close">
  <svg class="icon icon-x"></svg>
</button>

<!-- Button with icon and text -->
<button class="btn btn-primary">
  <svg class="icon icon-md"></svg>
  Button with Icon
</button>
```

#### Full Width
```html
<button class="btn btn-primary btn-full-width">Full Width Button</button>
```

---

### Form Input Component

#### Text Input

```html
<div class="form-group">
  <label for="input-1" class="label">Label Text</label>
  <input 
    type="text" 
    id="input-1" 
    class="input" 
    placeholder="Placeholder text"
  />
  <p class="hint">Helper text goes here</p>
</div>
```

#### Input States

```html
<!-- Default -->
<input type="text" class="input" />

<!-- Focused (automatic) -->
<input type="text" class="input" />

<!-- Filled -->
<input type="text" class="input" value="Some value" />

<!-- Error state -->
<input type="text" class="input is-error" />
<p class="error-text">Error message</p>

<!-- Disabled -->
<input type="text" class="input" disabled />

<!-- With leading icon -->
<div class="input-wrapper input-has-leading-icon">
  <svg class="input-icon input-icon-leading icon-search"></svg>
  <input type="text" class="input" placeholder="Search..." />
</div>

<!-- With trailing icon -->
<div class="input-wrapper input-has-trailing-icon">
  <input type="text" class="input" />
  <svg class="input-icon input-icon-trailing icon-x"></svg>
</div>
```

#### Input Types
- `type="text"` — Standard text
- `type="email"` — Email
- `type="password"` — Password
- `type="number"` — Number
- `type="search"` — Search
- `type="url"` — URL
- `type="tel"` — Telephone

#### Textarea

```html
<div class="form-group">
  <label for="textarea-1" class="label">Label</label>
  <textarea 
    id="textarea-1" 
    class="input input-textarea"
    rows="4"
    placeholder="Enter text..."
  ></textarea>
</div>
```

#### Select/Dropdown

```html
<div class="form-group">
  <label for="select-1" class="label">Choose an option</label>
  <select id="select-1" class="input">
    <option value="">-- Select --</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

#### Input Sizes
- `.input-lg` — Large
- `.input-md` — Medium/Default
- `.input-sm` — Small

---

### Checkbox Component

```html
<div class="form-group">
  <label class="checkbox">
    <input type="checkbox" />
    <span class="checkbox-label">Checkbox label</span>
  </label>
</div>
```

#### States

```html
<!-- Unchecked -->
<label class="checkbox">
  <input type="checkbox" />
  <span class="checkbox-label">Unchecked</span>
</label>

<!-- Checked -->
<label class="checkbox">
  <input type="checkbox" checked />
  <span class="checkbox-label">Checked</span>
</label>

<!-- Disabled -->
<label class="checkbox">
  <input type="checkbox" disabled />
  <span class="checkbox-label">Disabled</span>
</label>

<!-- Checked & Disabled -->
<label class="checkbox">
  <input type="checkbox" checked disabled />
  <span class="checkbox-label">Checked & Disabled</span>
</label>

<!-- Indeterminate (partial selection) -->
<label class="checkbox">
  <input type="checkbox" class="is-indeterminate" />
  <span class="checkbox-label">Indeterminate</span>
</label>
```

---

### Radio Button Component

```html
<div class="form-group">
  <fieldset>
    <legend class="label">Select one option</legend>
    
    <label class="radio">
      <input type="radio" name="option" value="1" />
      <span class="radio-label">Option 1</span>
    </label>
    
    <label class="radio">
      <input type="radio" name="option" value="2" />
      <span class="radio-label">Option 2</span>
    </label>
    
    <label class="radio">
      <input type="radio" name="option" value="3" />
      <span class="radio-label">Option 3</span>
    </label>
  </fieldset>
</div>
```

---

### Toggle/Switch Component

```html
<label class="toggle">
  <input type="checkbox" class="toggle-input" />
  <span class="toggle-slider"></span>
  <span class="toggle-label">Enable notifications</span>
</label>
```

#### States

```html
<!-- Off (default) -->
<label class="toggle">
  <input type="checkbox" class="toggle-input" />
  <span class="toggle-slider"></span>
</label>

<!-- On -->
<label class="toggle">
  <input type="checkbox" class="toggle-input" checked />
  <span class="toggle-slider"></span>
</label>

<!-- Disabled -->
<label class="toggle">
  <input type="checkbox" class="toggle-input" disabled />
  <span class="toggle-slider"></span>
</label>
```

---

### Card Component

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Optional subtitle</p>
  </div>
  
  <div class="card-body">
    <p>Card content goes here</p>
  </div>
  
  <div class="card-footer">
    <button class="btn btn-secondary">Cancel</button>
    <button class="btn btn-primary">Confirm</button>
  </div>
</div>
```

#### Variants

```html
<!-- Default (white with shadow) -->
<div class="card">...</div>

<!-- Elevated (more shadow) -->
<div class="card card-elevated">...</div>

<!-- Bordered (no shadow, border only) -->
<div class="card card-bordered">...</div>

<!-- Flat (no shadow, no border) -->
<div class="card card-flat">...</div>

<!-- With image on top -->
<div class="card">
  <img src="image.jpg" alt="" class="card-image" />
  <div class="card-body">...</div>
</div>

<!-- Interactive card (clickable) -->
<div class="card card-interactive">
  Content
</div>
```

#### Sizes

- `.card-sm` — Small
- `.card-md` — Medium/Default
- `.card-lg` — Large

---

### Badge Component

```html
<span class="badge">Default Badge</span>
```

#### Variants

```html
<!-- Primary (brand color) -->
<span class="badge badge-primary">Primary</span>

<!-- Success (green) -->
<span class="badge badge-success">Success</span>

<!-- Warning (orange) -->
<span class="badge badge-warning">Warning</span>

<!-- Error (red) -->
<span class="badge badge-error">Error</span>

<!-- Info (blue) -->
<span class="badge badge-info">Info</span>

<!-- Gray (neutral) -->
<span class="badge badge-gray">Neutral</span>
```

#### Sizes

```html
<!-- Large -->
<span class="badge badge-lg">Large</span>

<!-- Medium (default) -->
<span class="badge">Medium</span>

<!-- Small -->
<span class="badge badge-sm">Small</span>
```

#### With Icon

```html
<span class="badge badge-success">
  <svg class="icon icon-sm icon-check"></svg>
  Success
</span>
```

#### Dismissible

```html
<span class="badge badge-dismissible">
  Badge text
  <button class="badge-close" aria-label="Remove">
    <svg class="icon icon-x"></svg>
  </button>
</span>
```

---

### Alert Component

```html
<div class="alert alert-primary">
  <div class="alert-content">
    <p class="alert-message">This is an alert message</p>
  </div>
</div>
```

#### Variants

```html
<!-- Primary (info) -->
<div class="alert alert-primary">
  <svg class="alert-icon icon-info"></svg>
  <div class="alert-content">
    <strong class="alert-title">Info</strong>
    <p class="alert-message">Informational message</p>
  </div>
</div>

<!-- Success -->
<div class="alert alert-success">
  <svg class="alert-icon icon-check"></svg>
  <div class="alert-content">
    <strong class="alert-title">Success</strong>
    <p class="alert-message">Operation completed</p>
  </div>
</div>

<!-- Warning -->
<div class="alert alert-warning">
  <svg class="alert-icon icon-alert"></svg>
  <div class="alert-content">
    <strong class="alert-title">Warning</strong>
    <p class="alert-message">Please note this</p>
  </div>
</div>

<!-- Error -->
<div class="alert alert-error">
  <svg class="alert-icon icon-x-circle"></svg>
  <div class="alert-content">
    <strong class="alert-title">Error</strong>
    <p class="alert-message">Something went wrong</p>
  </div>
</div>
```

#### Dismissible Alert

```html
<div class="alert alert-success alert-dismissible">
  <svg class="alert-icon icon-check"></svg>
  <div class="alert-content">
    <p class="alert-message">Message here</p>
  </div>
  <button class="alert-close" aria-label="Close alert">
    <svg class="icon icon-x"></svg>
  </button>
</div>
```

---

### Dropdown/Menu Component

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-trigger" aria-expanded="false">
    Menu
    <svg class="icon icon-chevron-down"></svg>
  </button>
  
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Option 1</a>
    <a href="#" class="dropdown-item">Option 2</a>
    <a href="#" class="dropdown-item">Option 3</a>
  </div>
</div>
```

#### With Divider

```html
<div class="dropdown">
  <button class="dropdown-trigger btn btn-secondary">
    Menu
    <svg class="icon icon-chevron-down"></svg>
  </button>
  
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Edit</a>
    <a href="#" class="dropdown-item">Copy</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item is-danger">Delete</a>
  </div>
</div>
```

#### With Icons

```html
<div class="dropdown">
  <button class="dropdown-trigger btn btn-secondary">
    Actions
    <svg class="icon icon-chevron-down"></svg>
  </button>
  
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">
      <svg class="icon icon-md"></svg>
      <span>Edit</span>
    </a>
    <a href="#" class="dropdown-item">
      <svg class="icon icon-md"></svg>
      <span>Share</span>
    </a>
  </div>
</div>
```

---

### Tooltip Component

```html
<button class="has-tooltip" data-tooltip="This is a tooltip">
  Hover me
</button>
```

#### Positions

```html
<!-- Top (default) -->
<button class="has-tooltip tooltip-top" data-tooltip="Top tooltip">Top</button>

<!-- Bottom -->
<button class="has-tooltip tooltip-bottom" data-tooltip="Bottom tooltip">Bottom</button>

<!-- Left -->
<button class="has-tooltip tooltip-left" data-tooltip="Left tooltip">Left</button>

<!-- Right -->
<button class="has-tooltip tooltip-right" data-tooltip="Right tooltip">Right</button>
```

---

### Pagination Component

```html
<nav class="pagination">
  <a href="#" class="pagination-item is-disabled" aria-label="Previous">
    <svg class="icon icon-chevron-left"></svg>
  </a>
  
  <a href="#" class="pagination-item is-active">1</a>
  <a href="#" class="pagination-item">2</a>
  <a href="#" class="pagination-item">3</a>
  <span class="pagination-ellipsis">...</span>
  <a href="#" class="pagination-item">10</a>
  
  <a href="#" class="pagination-item" aria-label="Next">
    <svg class="icon icon-chevron-right"></svg>
  </a>
</nav>
```

---

### Tabs Component

```html
<div class="tabs">
  <div class="tabs-header">
    <button class="tab-button is-active" aria-selected="true">
      Tab 1
    </button>
    <button class="tab-button" aria-selected="false">
      Tab 2
    </button>
    <button class="tab-button" aria-selected="false">
      Tab 3
    </button>
  </div>
  
  <div class="tabs-content">
    <div class="tab-panel is-active" role="tabpanel">
      Content for Tab 1
    </div>
    <div class="tab-panel" role="tabpanel" hidden>
      Content for Tab 2
    </div>
    <div class="tab-panel" role="tabpanel" hidden>
      Content for Tab 3
    </div>
  </div>
</div>
```

---

### Spinner/Loading Component

```html
<!-- Default spinner -->
<div class="spinner"></div>

<!-- Small spinner (for buttons) -->
<div class="spinner spinner-sm"></div>

<!-- Large spinner -->
<div class="spinner spinner-lg"></div>

<!-- Spinner with text -->
<div class="flex items-center gap-3">
  <div class="spinner spinner-sm"></div>
  <p>Loading...</p>
</div>
```

---

## PART 3: COMPOSITE COMPONENTS

### Navbar Component

#### Overview
Navigation bars are the header of web pages that help users navigate. They contain logo, navigation links, and optional elements like search, notifications, and user menu.

#### Pre-Login Navbar (Simple)

**Composition:** Uses Button, Icon, Dropdown, Spacing

**HTML Example:**
```html
<nav class="navbar navbar-light">
  <div class="navbar-brand">
    <a href="/" class="logo-link">
      <span class="logo">Your Logo</span>
    </a>
  </div>

  <div class="navbar-nav">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link">Products</a>
    <div class="dropdown">
      <button class="nav-link dropdown-trigger">
        Resources
        <svg class="icon icon-chevron-down"></svg>
      </button>
      <div class="dropdown-menu">
        <a href="#" class="dropdown-item">Blog</a>
        <a href="#" class="dropdown-item">Docs</a>
        <a href="#" class="dropdown-item">Tutorials</a>
      </div>
    </div>
    <a href="#" class="nav-link">Pricing</a>
  </div>

  <div class="navbar-cta">
    <a href="#" class="btn btn-secondary btn-sm">Sign In</a>
    <a href="#" class="btn btn-primary btn-sm">Sign Up</a>
  </div>
</nav>
```

**CSS Classes:**
- `.navbar` — container (use `.navbar-light` or `.navbar-dark`)
- `.navbar-brand` — logo area
- `.navbar-nav` — horizontal nav links
- `.nav-link` — individual link
- `.navbar-cta` — right-side buttons

**Variants:**
- `.navbar-light` — white background (default)
- `.navbar-dark` — dark background
- `.navbar-sticky` — stays at top when scrolling

---

#### Post-Login Navbar (With User Menu)

**Composition:** Uses Button, Icon, Dropdown, Avatar, Spacing

**HTML Example:**
```html
<nav class="navbar navbar-light navbar-sticky">
  <div class="navbar-brand">
    <a href="/" class="logo-link">
      <span class="logo">Your Logo</span>
    </a>
  </div>

  <div class="navbar-nav">
    <a href="#" class="nav-link">Dashboard</a>
    <a href="#" class="nav-link">Projects</a>
    <a href="#" class="nav-link">Team</a>
  </div>

  <div class="navbar-tools">
    <!-- Search Box -->
    <div class="navbar-search">
      <input type="search" class="search-input" placeholder="Search...">
      <svg class="search-icon icon-search"></svg>
    </div>

    <!-- Notifications Bell -->
    <button class="navbar-icon-btn" aria-label="Notifications">
      <svg class="icon icon-bell"></svg>
      <span class="notification-badge">3</span>
    </button>

    <!-- User Avatar & Menu -->
    <div class="dropdown">
      <button class="navbar-avatar dropdown-trigger" aria-expanded="false">
        <span class="avatar avatar-sm">
          <span class="avatar-text">JD</span>
        </span>
      </button>
      <div class="dropdown-menu dropdown-right">
        <div class="dropdown-header">
          <p class="dropdown-user-name">John Doe</p>
          <p class="dropdown-user-email">john@example.com</p>
        </div>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">
          <svg class="icon icon-user"></svg>
          <span>Profile</span>
        </a>
        <a href="#" class="dropdown-item">
          <svg class="icon icon-settings"></svg>
          <span>Settings</span>
        </a>
        <a href="#" class="dropdown-item">
          <svg class="icon icon-help"></svg>
          <span>Help & Support</span>
        </a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item is-danger">
          <svg class="icon icon-log-out"></svg>
          <span>Logout</span>
        </a>
      </div>
    </div>
  </div>
</nav>
```

**CSS Classes:**
- `.navbar-tools` — right-side tools container
- `.navbar-search` — search box wrapper
- `.search-input` — search input field
- `.navbar-icon-btn` — icon button (bell, etc.)
- `.notification-badge` — number badge on bell
- `.navbar-avatar` — avatar button trigger
- `.avatar` — user avatar
- `.avatar-text` — initials inside avatar
- `.dropdown-right` — positions dropdown to the right
- `.dropdown-header` — header section in dropdown
- `.dropdown-user-name` — user name in dropdown
- `.dropdown-user-email` — user email in dropdown

---

#### Navbar Mega Menu (Complex)

**Composition:** Uses Button, Icon, Dropdown, Card, Badge, Spacing

**HTML Example:**
```html
<nav class="navbar navbar-light">
  <div class="navbar-brand">
    <a href="/" class="logo-link">
      <span class="logo">Your Logo</span>
    </a>
  </div>

  <div class="navbar-nav">
    <a href="#" class="nav-link">Home</a>
    <div class="dropdown">
      <button class="nav-link dropdown-trigger">
        Products
        <svg class="icon icon-chevron-down"></svg>
      </button>
      <div class="dropdown-menu dropdown-mega">
        <div class="mega-menu-grid">
          <div class="mega-menu-column">
            <h4 class="mega-menu-title">Analytics</h4>
            <a href="#" class="mega-menu-item">
              Reports
              <span class="badge badge-primary">New</span>
            </a>
            <a href="#" class="mega-menu-item">Dashboard</a>
            <a href="#" class="mega-menu-item">Insights</a>
          </div>
          <div class="mega-menu-column">
            <h4 class="mega-menu-title">Integration</h4>
            <a href="#" class="mega-menu-item">API</a>
            <a href="#" class="mega-menu-item">Webhooks</a>
            <a href="#" class="mega-menu-item">Zapier</a>
          </div>
          <div class="mega-menu-column">
            <h4 class="mega-menu-title">Resources</h4>
            <a href="#" class="mega-menu-item">Documentation</a>
            <a href="#" class="mega-menu-item">Support</a>
            <a href="#" class="mega-menu-item">Community</a>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="nav-link">Pricing</a>
  </div>

  <div class="navbar-cta">
    <a href="#" class="btn btn-secondary btn-sm">Sign In</a>
    <a href="#" class="btn btn-primary btn-sm">Sign Up</a>
  </div>
</nav>
```

**CSS Classes:**
- `.dropdown-mega` — mega menu modifier
- `.mega-menu-grid` — grid container
- `.mega-menu-column` — column in grid
- `.mega-menu-title` — section title
- `.mega-menu-item` — item in column

---

#### Navbar States & Features

**Sticky Navbar:**
```html
<nav class="navbar navbar-sticky">...</nav>
```

**Dark Navbar:**
```html
<nav class="navbar navbar-dark">...</nav>
```

**Mobile Hamburger Menu:**
```html
<nav class="navbar">
  <!-- Logo -->
  <div class="navbar-brand">...</div>

  <!-- Nav (hidden on mobile) -->
  <div class="navbar-nav navbar-nav-mobile">...</div>

  <!-- Hamburger Toggle (shown on mobile) -->
  <button class="navbar-toggle" aria-label="Toggle menu">
    <span class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</nav>
```

---

---

### Footer Component

#### Overview
Footers are the section of content at the very bottom of a web page. Good footers provide secondary navigation, company information, legal links, and build trust with users. They're critical for accessibility and SEO.

#### Footer 01 - Minimal Footer

**Composition:** Uses Link, Icon, Grid, Spacing

**HTML Example:**
```html
<footer class="footer footer-minimal">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
          <p class="footer-tagline">Building better products together.</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
          <a href="#" class="footer-link">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**Use Case:** Landing pages, simple one-pagers, checkout flows

---

#### Footer 02 - With Social Links

**Composition:** Uses Link, Icon, Grid, Spacing, Avatar

**HTML Example:**
```html
<footer class="footer footer-social">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
          <p class="footer-tagline">Join us on social</p>
        </div>

        <div class="footer-social-links">
          <a href="#" class="social-link" aria-label="Twitter">
            <svg class="icon icon-twitter"></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg class="icon icon-linkedin"></svg>
          </a>
          <a href="#" class="social-link" aria-label="GitHub">
            <svg class="icon icon-github"></svg>
          </a>
          <a href="#" class="social-link" aria-label="Facebook">
            <svg class="icon icon-facebook"></svg>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
          <a href="#" class="footer-link">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**CSS Classes:**
- `.footer-social-links` — Social icons container
- `.social-link` — Individual social icon button

---

#### Footer 03 - With Newsletter Signup

**Composition:** Uses Input, Button, Link, Grid, Spacing

**HTML Example:**
```html
<footer class="footer footer-newsletter">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
        </div>

        <div class="footer-newsletter">
          <h3 class="footer-section-title">Subscribe to our newsletter</h3>
          <p class="footer-description">Get the latest updates delivered to your inbox.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="newsletter-input">
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>

        <div class="footer-social-links">
          <a href="#" class="social-link" aria-label="Twitter">
            <svg class="icon icon-twitter"></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg class="icon icon-linkedin"></svg>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
          <a href="#" class="footer-link">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

#### Footer 04 - Fat Footer (Sitemap Footer)

**Composition:** Uses Link, Grid, Typography, Spacing

**HTML Example:**
```html
<footer class="footer footer-fat">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
          <p class="footer-description">Building better products together.</p>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4 class="footer-column-title">Product</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Features</a></li>
              <li><a href="#" class="footer-link">Pricing</a></li>
              <li><a href="#" class="footer-link">Security</a></li>
              <li><a href="#" class="footer-link">Roadmap</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Company</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">About us</a></li>
              <li><a href="#" class="footer-link">Blog</a></li>
              <li><a href="#" class="footer-link">Careers</a></li>
              <li><a href="#" class="footer-link">Press</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Resources</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Documentation</a></li>
              <li><a href="#" class="footer-link">API</a></li>
              <li><a href="#" class="footer-link">Templates</a></li>
              <li><a href="#" class="footer-link">Support</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Legal</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Privacy</a></li>
              <li><a href="#" class="footer-link">Terms</a></li>
              <li><a href="#" class="footer-link">Cookies</a></li>
              <li><a href="#" class="footer-link">Status</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-social-links">
          <a href="#" class="social-link" aria-label="Twitter">
            <svg class="icon icon-twitter"></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg class="icon icon-linkedin"></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**CSS Classes:**
- `.footer-columns` — Grid container for columns
- `.footer-column` — Individual column
- `.footer-column-title` — Column heading
- `.footer-links-list` — Vertical link list

---

#### Footer 05 - With Contact Info

**Composition:** Uses Link, Icon, Grid, Spacing, Typography

**HTML Example:**
```html
<footer class="footer footer-contact">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
          <p class="footer-description">We're here to help</p>
        </div>

        <div class="footer-contact-info">
          <div class="contact-item">
            <svg class="icon icon-mail"></svg>
            <div>
              <p class="contact-label">Email</p>
              <a href="mailto:hello@company.com" class="contact-value">hello@company.com</a>
            </div>
          </div>
          <div class="contact-item">
            <svg class="icon icon-phone"></svg>
            <div>
              <p class="contact-label">Phone</p>
              <a href="tel:+1234567890" class="contact-value">+1 (234) 567-8900</a>
            </div>
          </div>
          <div class="contact-item">
            <svg class="icon icon-map-pin"></svg>
            <div>
              <p class="contact-label">Office</p>
              <p class="contact-value">123 Main St, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
          <a href="#" class="footer-link">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

#### Footer 06 - Dark Footer (SaaS)

**Composition:** Uses Link, Grid, Badge, Spacing, Typography

**HTML Example:**
```html
<footer class="footer footer-dark">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
          <p class="footer-description">Modern SaaS platform for teams</p>
          <span class="badge badge-primary">Status: All systems operational</span>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4 class="footer-column-title">Product</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Features</a></li>
              <li><a href="#" class="footer-link">Pricing</a></li>
              <li><a href="#" class="footer-link">Security</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Company</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">About</a></li>
              <li><a href="#" class="footer-link">Blog</a></li>
              <li><a href="#" class="footer-link">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-social-links">
          <a href="#" class="social-link" aria-label="Twitter">
            <svg class="icon icon-twitter"></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg class="icon icon-linkedin"></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

#### Footer 07 - With Trusts/Partners

**Composition:** Uses Link, Image, Grid, Spacing, Typography

**HTML Example:**
```html
<footer class="footer footer-partners">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">Your Logo</span>
          <p class="footer-description">Trusted by leading companies</p>
        </div>

        <div class="footer-partners-section">
          <h4 class="footer-section-title">Our Partners</h4>
          <div class="partners-grid">
            <div class="partner-logo">
              <span>Partner 1</span>
            </div>
            <div class="partner-logo">
              <span>Partner 2</span>
            </div>
            <div class="partner-logo">
              <span>Partner 3</span>
            </div>
            <div class="partner-logo">
              <span>Partner 4</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
          <a href="#" class="footer-link">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

#### Footer 08 - Comprehensive Footer

**Composition:** Uses Link, Input, Button, Icon, Grid, Badge, Spacing

**HTML Example:**
```html
<footer class="footer footer-comprehensive">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand-section">
          <span class="logo">Your Logo</span>
          <p class="footer-description">The complete platform for modern teams</p>
          <div class="footer-social-links">
            <a href="#" class="social-link" aria-label="Twitter">
              <svg class="icon icon-twitter"></svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg class="icon icon-linkedin"></svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg class="icon icon-github"></svg>
            </a>
          </div>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h4 class="footer-column-title">Product</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Features</a></li>
              <li><a href="#" class="footer-link">Pricing</a></li>
              <li><a href="#" class="footer-link">Security</a></li>
              <li><a href="#" class="footer-link">Roadmap</a></li>
              <li><a href="#" class="footer-link">Enterprise</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Company</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">About us</a></li>
              <li><a href="#" class="footer-link">Blog</a></li>
              <li><a href="#" class="footer-link">Careers</a></li>
              <li><a href="#" class="footer-link">Press</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Resources</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Documentation</a></li>
              <li><a href="#" class="footer-link">API Reference</a></li>
              <li><a href="#" class="footer-link">Support</a></li>
              <li><a href="#" class="footer-link">Community</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 class="footer-column-title">Legal</h4>
            <ul class="footer-links-list">
              <li><a href="#" class="footer-link">Privacy Policy</a></li>
              <li><a href="#" class="footer-link">Terms of Service</a></li>
              <li><a href="#" class="footer-link">Cookie Policy</a></li>
              <li><a href="#" class="footer-link">DPA</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-newsletter">
          <h4 class="footer-section-title">Newsletter</h4>
          <p class="footer-description">Get the latest news and updates</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" class="newsletter-input">
            <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-left">
          <p class="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div class="footer-right">
          <select class="footer-language-select">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

#### Footer CSS Classes Reference

**Base Classes:**
- `.footer` — Main footer container
- `.footer-container` — Constrained width container
- `.footer-content` — Content wrapper
- `.footer-top` — Top section with main content
- `.footer-bottom` — Bottom section with copyright/links

**Variants:**
- `.footer-minimal` — Simple minimal footer
- `.footer-social` — With social links
- `.footer-newsletter` — With email signup
- `.footer-fat` — Sitemap/multi-column footer
- `.footer-contact` — With contact information
- `.footer-dark` — Dark background variant
- `.footer-partners` — With partner logos

**Component Classes:**
- `.footer-brand` — Logo and description area
- `.footer-brand-section` — Extended brand section
- `.footer-columns` — Multi-column container
- `.footer-column` — Individual column
- `.footer-column-title` — Column heading
- `.footer-links-list` — Vertical link list
- `.footer-link` — Individual link
- `.footer-social-links` — Social icons container
- `.social-link` — Social icon button
- `.footer-newsletter` — Newsletter signup section
- `.newsletter-form` — Newsletter form
- `.newsletter-input` — Email input field
- `.footer-contact-info` — Contact information container
- `.contact-item` — Individual contact item
- `.footer-divider` — Horizontal divider line

---

**Other (To be expanded as you build complex components)**

**Modal Dialog** — Uses: Card, Button, Overlay, Spacing
**Form Section** — Uses: Input, Label, Checkbox/Radio, Button, Alert
**Product Card** — Uses: Image, Card, Badge, Button, Rating
**User Profile Card** — Uses: Image, Card, Button, Badge, Social Links

---

## PART 4: USAGE GUIDELINES

### When to Use Each Component

**Buttons:**
- Use Primary for the main call-to-action
- Use Secondary for alternative actions
- Use Tertiary for less important actions
- Use Danger only for destructive actions

**Forms:**
- Always pair inputs with labels
- Show helper text for clarity
- Display error states immediately
- Disable submit button during loading

**Cards:**
- Use for grouping related content
- Use elevated variant for interactive cards
- Use bordered for hierarchy within cards

**Alerts:**
- Use for system feedback
- Keep messages concise
- Auto-dismiss non-critical alerts after 5 seconds

### Accessibility Guidelines

- All interactive elements must be keyboard accessible
- Use proper semantic HTML (buttons, labels, fieldsets)
- Maintain sufficient color contrast (WCAG AA minimum)
- Include aria-labels where needed
- Test with screen readers

### Responsive Behavior

- All components stack vertically on mobile
- Use flexbox utilities for flexible layouts
- Test at 320px, 768px, and 1024px+ breakpoints
- Keep touch targets at least 44x44px

---

## PART 5: CSS UTILITY CLASSES

### Layout Utilities

```html
<!-- Flexbox -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- Spacing (margin/padding) -->
<div class="p-4 m-2">Content</div>
<div class="px-6 py-3">Horizontal padding, vertical padding</div>
```

### Text Utilities

```html
<!-- Font sizes -->
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>

<!-- Font weights -->
<p class="font-regular">Regular</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semibold</p>
<p class="font-bold">Bold</p>

<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-gray-600">Gray text</p>
```

### Display & Visibility

```html
<!-- Display -->
<div class="block">Block</div>
<div class="inline-block">Inline Block</div>
<div class="flex">Flex</div>
<div class="hidden">Hidden</div>

<!-- Responsive visibility -->
<div class="hidden lg:block">Show on large screens only</div>
<div class="block lg:hidden">Hide on large screens</div>
```

### Background & Borders

```html
<!-- Background colors -->
<div class="bg-white">White background</div>
<div class="bg-gray-50">Light gray</div>
<div class="bg-primary">Primary color</div>

<!-- Rounded corners -->
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius</div>
<div class="rounded">Medium radius (default)</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-full">Fully rounded</div>

<!-- Borders -->
<div class="border border-gray-300">Simple border</div>
<div class="border-t-2 border-primary">Top border, thick</div>
```

---

## PART 7: NEW COMPONENTS - EXTENDED UI KIT

### Breadcrumbs

Hierarchical navigation component for showing the user's current location within a site structure.

#### Basic Usage

```html
<nav class="breadcrumb">
  <a href="#" class="breadcrumb-item">Home</a>
  <span class="breadcrumb-separator">/</span>
  <a href="#" class="breadcrumb-item">Products</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item active">Product Name</span>
</nav>
```

#### Variants

- **With Slashes**: Use "/" as separator (default)
- **With Arrows**: Use "→" for modern look
- **Customizable Separators**: Use any character or icon

#### CSS Classes

- `.breadcrumb` — Container
- `.breadcrumb-item` — Individual item (linkable)
- `.breadcrumb-item.active` — Current page (not linkable)
- `.breadcrumb-separator` — Visual separator

#### States

| State | Styling |
|-------|---------|
| Default | Color: `--color-text-secondary`, cursor: pointer |
| Hover | Color: `--color-primary-600`, underline |
| Active | Color: `--color-text-primary`, font-weight: semibold, no cursor |

---

### Hero Sections

Full-width hero components for landing pages and page headers.

#### Text-Only Hero

```html
<div class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Welcome to Our Platform</h1>
    <p class="hero-subtitle">Build, design, and scale your digital products</p>
    <div class="hero-cta">
      <button class="btn btn-primary">Get Started</button>
      <button class="btn btn-secondary">Learn More</button>
    </div>
  </div>
</div>
```

#### Hero with Side Image

```html
<div class="hero" style="...">
  <div class="hero-with-image">
    <div class="hero-content">
      <h1 class="hero-title">Professional Design System</h1>
      <p class="hero-subtitle">Everything you need</p>
      <div class="hero-cta">
        <button class="btn btn-primary">Start</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="image.jpg" alt="Hero image">
    </div>
  </div>
</div>
```

#### CSS Classes & Customization

| Class | Purpose |
|-------|---------|
| `.hero` | Main container, gradient background, centered flex |
| `.hero-content` | Text content wrapper |
| `.hero-title` | H1 equivalent, 48px, bold |
| `.hero-subtitle` | Supporting text, 18px, opacity 0.95 |
| `.hero-cta` | Flex container for buttons |
| `.hero-with-image` | Grid layout, 1fr 1fr on desktop, stacks on mobile |
| `.hero-image` | Image container with background |

#### Responsive Behavior

- Desktop: Full width, min-height 400px
- Tablet: Adjusted padding, font sizes reduced
- Mobile: Stacks to single column, min-height 350px

---

### Card Grids

Flexible card component system with multiple layout options.

#### Grid Layouts

```html
<!-- Default (auto-fill, ~300px per card) -->
<div class="grid">...</div>

<!-- 2 Column Grid -->
<div class="grid grid-2">...</div>

<!-- 3 Column Grid -->
<div class="grid grid-3">...</div>

<!-- 4 Column Grid -->
<div class="grid grid-4">...</div>
```

#### Card with Image

```html
<div class="card">
  <div class="card-image-wrapper">
    <img src="image.jpg" alt="Card image">
  </div>
  <div class="card-content">
    <div class="card-header">
      <h4 class="card-title">Card Title</h4>
      <p class="card-subtitle">Subtitle</p>
    </div>
    <p class="card-body">Card description text</p>
    <div class="card-footer">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

#### Card Variants

| Variant | Usage |
|---------|-------|
| `.card` | Standard card with shadow and hover effect |
| `.card-primary` | Primary color gradient background |
| `.card-secondary` | Gray background for secondary items |
| `.card-minimal` | No shadow, subtle background |
| `.card-elevated` | Enhanced shadow for prominence |

#### Card Without Image

```html
<div class="card">
  <div class="card-content">
    <h4 class="card-title">Title</h4>
    <p class="card-body">Content goes here</p>
  </div>
</div>
```

#### Responsive Grid

- Desktop: Multi-column based on grid class
- Tablet: 2 columns (grid-2, grid-3, grid-4)
- Mobile: 1 column

---

### Tabs

Tabbed navigation component for organizing content.

#### Basic Structure

```html
<div class="tabs">
  <div class="tabs-header">
    <button class="tab-button active" onclick="switchTab(event, 'tab1')">
      Tab One
    </button>
    <button class="tab-button" onclick="switchTab(event, 'tab2')">
      Tab Two
    </button>
  </div>
  <div class="tabs-content">
    <div id="tab1" class="tab-panel active">
      Content for tab one
    </div>
    <div id="tab2" class="tab-panel">
      Content for tab two
    </div>
  </div>
</div>
```

#### JavaScript Handler

```javascript
function switchTab(event, tabId) {
  const tabs = event.target.closest('.tabs');
  const buttons = tabs.querySelectorAll('.tab-button');
  const panels = tabs.querySelectorAll('.tab-panel');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}
```

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `.tabs` | Container, flex column |
| `.tabs-header` | Tab buttons container, scrollable |
| `.tab-button` | Individual tab button |
| `.tab-button.active` | Active tab styling (underline, primary color) |
| `.tabs-content` | Content area |
| `.tab-panel` | Individual content panel |
| `.tab-panel.active` | Visible panel with fadeIn animation |

#### States

- **Default**: Gray text, no underline
- **Hover**: Primary text, background-secondary
- **Active**: Primary color text, primary underline

---

### Accordion

Collapsible content component for FAQs and feature lists.

#### Basic Structure

```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header" onclick="toggleAccordion(this)">
      Question or Title
      <span class="accordion-icon">▼</span>
    </button>
    <div class="accordion-body">
      <div class="accordion-content">
        Answer or content goes here
      </div>
    </div>
  </div>
  <!-- More items... -->
</div>
```

#### JavaScript Handler

```javascript
function toggleAccordion(header) {
  const item = header.parentElement;
  const body = item.querySelector('.accordion-body');
  const isActive = header.classList.contains('active');
  
  // Close all other items
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.classList.remove('active');
    h.parentElement.querySelector('.accordion-body').classList.remove('active');
  });
  
  // Open current if not already active
  if (!isActive) {
    header.classList.add('active');
    body.classList.add('active');
  }
}
```

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `.accordion` | Container, bordered, rounded |
| `.accordion-item` | Individual item |
| `.accordion-header` | Clickable header button |
| `.accordion-header.active` | Active header (primary background/color) |
| `.accordion-icon` | Rotation icon, rotates 180° when active |
| `.accordion-body` | Content container, animated height |
| `.accordion-body.active` | Visible content |
| `.accordion-content` | Content wrapper with padding |

#### Animations

- Smooth height transition: 300ms ease-in-out
- Icon rotation: 300ms ease-in-out

---

### Tables

Data table component with multiple styles.

#### Standard Table

```html
<div class="table-wrapper">
  <table class="table">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Striped Table

```html
<div class="table-wrapper">
  <table class="table table-striped">
    <!-- Same structure as above -->
  </table>
</div>
```

#### Compact Table

```html
<table class="table table-compact">
  <!-- Smaller padding, smaller font -->
</table>
```

#### CSS Classes & Styling

| Class | Purpose |
|-------|---------|
| `.table-wrapper` | Wrapper for responsive overflow |
| `.table` | Base table styles |
| `.table-striped` | Alternating row background colors |
| `.table-compact` | Reduced padding for dense tables |
| `thead` | Header row, gray background |
| `th` | Header cells, semibold, uppercase |
| `td` | Data cells, default color |
| `tbody tr:hover` | Row highlight on hover |

#### Responsive Design

- Desktop: Full table display
- Mobile: Horizontal scroll within wrapper

---

### CTA Sections

Call-to-action containers for driving conversions.

#### CTA Primary (High Priority)

```html
<div class="cta cta-primary">
  <div>
    <h3 class="cta-title">Ready to Get Started?</h3>
    <p class="cta-subtitle">Join thousands using our platform</p>
    <div class="cta-buttons">
      <button class="btn">Primary Action</button>
      <button class="btn">Secondary Action</button>
    </div>
  </div>
</div>
```

#### CTA Secondary (Medium Priority)

```html
<div class="cta cta-secondary">
  <!-- Same structure -->
</div>
```

#### CTA Subtle (Low Priority)

```html
<div class="cta cta-subtle">
  <!-- Same structure -->
</div>
```

#### CTA Variants

| Variant | Background | Use Case |
|---------|-----------|----------|
| `.cta-primary` | Gradient primary color | Main conversion goal |
| `.cta-secondary` | Primary light + border | Secondary conversion |
| `.cta-subtle` | Gray background | Informational CTA |

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `.cta` | Main container, centered, padded |
| `.cta-title` | Large, bold heading |
| `.cta-subtitle` | Supporting text with opacity |
| `.cta-buttons` | Flex container for buttons, wraps on mobile |

#### Responsive Behavior

- Desktop: Full width, buttons in row
- Mobile: Reduced padding, buttons stack vertically

---

### Modals & Dialogs

Overlay modal component for forms, confirmations, and alerts.

#### Modal Structure

```html
<div id="modal-example" class="modal-backdrop" onclick="closeModal('modal-example')">
  <div class="modal" onclick="event.stopPropagation()">
    <div class="modal-header">
      <h2 class="modal-title">Modal Title</h2>
      <button class="modal-close" onclick="closeModal('modal-example')">×</button>
    </div>
    <div class="modal-content">
      <p>Modal content goes here</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('modal-example')">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

#### JavaScript Functions

```javascript
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.active').forEach(backdrop => {
      backdrop.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  }
});
```

#### Modal Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| Small (`.modal-sm`) | 400px | Confirmations, alerts |
| Standard (`.modal`) | 500px | Forms, information |
| Large (`.modal-lg`) | 700px | Complex forms, wizard steps |

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `.modal-backdrop` | Full-screen overlay, hidden by default |
| `.modal-backdrop.active` | Visible backdrop with flex center |
| `.modal` | Modal container, shadow, rounded |
| `.modal-header` | Top section with title and close |
| `.modal-title` | Modal heading |
| `.modal-close` | Close button, X icon |
| `.modal-content` | Main content area |
| `.modal-footer` | Action buttons area |

#### Animations

- **Appear**: slideUp animation (translateY 20px → 0, opacity 0 → 1)
- **Duration**: 300ms ease-in-out

#### Accessibility

- Close button (×) top right
- Escape key to close
- Click outside to close (on backdrop)
- Prevents body scroll when open
- Modal-focused interaction

#### Responsive Design

- Desktop: Centered, max 90vh height
- Mobile: Full width minus padding, bottom-aligned possible variant

---

## PART 8: INTEGRATION NOTES FOR MASTER PROMPT

When using these new components in your master prompt:

### Component Ordering

Recommended hierarchy for landing pages:
1. Breadcrumbs (if multi-page)
2. Hero section
3. Feature cards in grid
4. Tabs or accordion (optional)
5. Table/comparison (if applicable)
6. CTA section
7. FAQ accordion
8. Final CTA

### Class Combination Examples

```html
<!-- Premium card grid -->
<div class="grid grid-2">
  <div class="card card-elevated">...</div>
  <div class="card card-primary">...</div>
</div>

<!-- Action sequence -->
<div class="hero">...</div>
<div class="cta cta-primary">...</div>

<!-- Data showcase -->
<div class="tabs">
  <!-- Tab with table inside -->
  <table class="table table-striped">...</table>
</div>
```

### Interactive Component Rules

- **Tabs**: Always include JavaScript handler
- **Accordion**: Always include toggle function
- **Modals**: Always include open/close functions + Escape handler
- **Breadcrumbs**: Use semantic links (`<a href>`) when possible

### Responsive Considerations

All new components are fully responsive:
- Desktop: Full featured experience
- Tablet: Adjusted spacing and layout
- Mobile: Single column, readable text, accessible buttons

### Dark Mode Consideration

These components work in light mode (default). For dark mode variants, apply these overrides:

```css
[data-theme="dark"] .cta {
  background: var(--color-bg-inverse);
  color: white;
}

[data-theme="dark"] .card {
  background: var(--color-gray-800);
  border-color: var(--color-gray-700);
}
```

---

**End of Extended Component Catalogue - Part 8**
