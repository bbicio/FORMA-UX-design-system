#### 1. Pagination Component

**Purpose**: Navigate between pages of content (lists, grids, tables). Shows current page, total pages, and navigation arrows.

**Structure**:
```
[◄ Prev] [1] [2] [3] [4] [5] [...] [Next ►]
```

**Positioning**: Below lists, grids, or tables. Centered or right-aligned.

**Styling**:
- **Colors**: Default #666, Active/Current #E30613 (red), Disabled #D9D9D9
- **Typography**: Open Sans, 14px, weight 400-500
- **Spacing**: 16px between elements, 24px top/bottom margins
- **Border radius**: 4px per item
- **Borders**: 1.5px solid #D9D9D9

**Props**:
```javascript
{
  currentPage: number,
  totalPages: number,
  onPageChange: function,
  showEllipsis: boolean (default: true),
  maxVisiblePages: number (default: 5),
  align: 'center' | 'right',
  size: 'small' | 'medium',
}
```

**States**:
- Default: Gray numbers, current page red
- Hover: Border red #E30613, text red
- Active: Red background, white text
- Disabled: Opacity 0.5, cursor not-allowed

**Variants**:
1. **Numbered**: `[◄] [1] [2] [3] [4] [5] [...] [►]`
2. **Compact**: `[◄] 3 / 10 [►]`
3. **With Info**: `Showing 1-10 of 50 results | [◄] [1] [2] [3] [►]`

**Accessibility**:
- WCAG AA contrast (4.5:1 minimum)
- Keyboard navigation: Tab + Enter
- ARIA labels: `aria-label="Next page"`, `aria-current="page"`
- Semantic HTML: `<nav>`, `<button>`, `<span>`

**Responsive**:
- Desktop (≥1024px): All pages visible
- Tablet (768-1024px): 3 pages + arrows + ellipsis
- Mobile (<768px): Compact variant (arrows + text)

**Example Usage**:
```javascript
<Pagination
  currentPage={3}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
  maxVisiblePages={5}
  align="center"
  size="medium"
/>
```

#### 2. Header Navigation Menu

**Purpose**: Primary navigation menu positioned in the header (90px height). Provides access to main site sections, search functionality, and primary CTA button. Responsive design with mobile hamburger menu.

**Structure**:
- Left: Logo + brand name + menu toggle
- Center: Horizontal navigation items (desktop only)
- Right: Search icon + CTA button + mobile menu toggle

**Positioning**: Fixed in header, spans full width. Height: 90px. Accent bar: 4px red (#E30613) at top.

**Styling**:
- **Colors**: 
  - Background: White
  - Text: Gray #666 (default), Red #E30613 (hover)
  - Logo/brand: Navy #003057
  - Accent bar: Red #E30613
  - Borders: #D9D9D9
  - CTA button: Red #E30613 background, white text

- **Typography**: Open Sans, 14px regular for nav items, 16px bold for brand name
- **Spacing**: 24px padding horizontal, 8px grid for internal elements
- **Border radius**: 4px for CTA button and search input
- **Borders**: 1.5px solid #D9D9D9 on search input

**Props**:
```javascript
{
  navItems: array,           // Navigation links [{label, href}]
  logoText: string,          // Brand name (default: "Menarini")
  ctaLabel: string,          // CTA button text (default: "Get Started")
  onCtaClick: function,      // CTA button click handler
  onSearch: function,        // Search callback
  responsive: boolean,       // Enable responsive behavior (default: true)
}
```

**States**:
- Default: Gray text, white background
- Hover (nav items): Red text #E30613, no underline
- Mobile menu open: Hamburger icon rotates/changes to X, menu expands below header
- Search open: Search bar expands below header
- CTA button hover: Opacity 0.9

**Variants**:
1. **Desktop Full**: All nav items visible horizontally
2. **Tablet Compact**: Menu toggle + hamburger, nav items in dropdown
3. **Mobile Stacked**: Full hamburger menu, nav items stacked vertically

**Accessibility**:
- WCAG AA contrast (4.5:1 minimum)
- Keyboard navigation: Tab through links, Enter to navigate
- ARIA labels: `aria-label="Menu"`, `aria-label="Search"`
- Semantic HTML: `<header>`, `<nav>`, `<button>`, `<input>`
- Skip link to main content (optional)

**Responsive**:
- Desktop (≥1024px): Full navigation visible, logo + nav items + search + CTA
- Tablet (768-1024px): Logo + menu toggle, nav items in dropdown
- Mobile (<768px): Logo + hamburger, full menu expands below, stacked nav items

**Example Usage**:
```javascript
<HeaderNavigation
  navItems={[
    { label: 'Research', href: '#research' },
    { label: 'Pipeline', href: '#pipeline' },
  ]}
  logoText="Menarini"
  ctaLabel="Get Started"
  onCtaClick={() => navigate('/signup')}
  onSearch={(query) => handleSearch(query)}
/>
```

#### 3. Breadcrumbs

**Purpose**: Display navigation path hierarchy. Shows user location in site structure and allows quick navigation back to parent pages. Example: "Home › Research › Pipeline"

**Structure**:
- Chevron-separated items: [Item] › [Item] › [Item]
- Last item is current page (not clickable)
- Previous items are clickable links

**Positioning**: Top of content area, above H1 page title. Full width of content. Padding: 16px bottom before H1.

**Styling**:
- **Colors**: 
  - Default text: Gray #666 (14px)
  - Links: Gray #666 (underline on hover)
  - Links hover: Red #E30613 + underline
  - Current page: Gray #666 (no link)
  - Separator (›): Gray #666

- **Typography**: Open Sans, 14px regular weight
- **Spacing**: 8px gap between items
- **Border radius**: None
- **Borders**: None

**Props**:
```javascript
{
  items: array,              // [{label, href}, {label, href}, {label}]
  separator: string,         // Separator (default: "›")
  onNavigate: function,      // Click handler
  maxItems: number,          // Show ellipsis if more (optional)
}
```

**States**:
- Default: Gray text, no decoration
- Hover (on link): Red text #E30613, underline
- Current (last item): Gray, no link, no hover

**Variants**:
1. **Full Path**: All items visible
2. **Collapsed**: Shows first + last with ellipsis in middle (for long paths)
3. **Mobile**: Single line, responsive truncation

**Accessibility**:
- WCAG AA contrast (4.5:1)
- Semantic HTML: `<nav>`, `<ol>`, `<li>`, `<a>`
- ARIA: `aria-label="Breadcrumb"`, `aria-current="page"` on last item
- Keyboard: Tab through links, Enter to navigate

**Responsive**:
- Desktop (≥1024px): All items visible
- Tablet (768-1024px): Truncate if needed
- Mobile (<768px): Show first + last items only, collapse middle

**Example Usage**:
```javascript
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Pipeline', href: '/research/pipeline' },
    { label: 'Clinical Trials' }
  ]}
  separator="›"
  onNavigate={(href) => navigate(href)}
/>
```

#### 4. Sidebar Navigation

**Purpose**: Vertical navigation menu positioned on left side of content area. Collapsible (200px expanded, 0px collapsed). Primary navigation for app/dashboard pages.

**Structure**:
- Vertical list of navigation items
- Optional header/title at top
- Active state indicator (left border)
- Hover background color

**Positioning**: Left side of content area. Width: 200px (expanded) or 0px (collapsed). Height: Full content height. Never overlaps footer.

**Styling**:
- **Colors**:
  - Background: White
  - Text (default): Gray #666
  - Text (hover): Red #E30613
  - Background (hover): Light gray #F5F5F5
  - Active text: Red #E30613
  - Active left border: Red #E30613 (2px)
  - Border: #E0E0E0 (1px right)

- **Typography**: Open Sans, 14px regular
- **Spacing**: 16px padding per item, 8px left/right
- **Border radius**: None
- **Borders**: 1px solid #E0E0E0 on right side

**Props**:
```javascript
{
  items: array,              // [{label, href, icon?}]
  activeItem: string,        // Currently active href
  isOpen: boolean,           // Expanded/collapsed state
  onToggle: function,        // Toggle callback
  onNavigate: function,      // Item click handler
}
```

**States**:
- Default: Gray text, white background
- Hover: Red text #E30613, light gray background #F5F5F5
- Active: Red text #E30613, 2px red left border
- Collapsed: Width 0, items hidden (smooth animation)

**Variants**:
1. **Expanded**: 200px width, labels visible
2. **Collapsed**: 0px width, hidden
3. **Icons only**: (future variant with small icons)

**Accessibility**:
- WCAG AA contrast (4.5:1)
- Semantic HTML: `<nav>`, `<ul>`, `<li>`, `<button>`
- Keyboard: Tab through items, Enter to navigate
- ARIA: `aria-expanded`, `aria-current="page"` on active

**Responsive**:
- Desktop (≥1024px): Always visible expanded
- Tablet (768-1024px): Collapsible via toggle
- Mobile (<768px): Hidden by default, toggle to show

**Example Usage**:
```javascript
<SidebarNavigation
  items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Research', href: '/research' },
    { label: 'Pipeline', href: '/pipeline' },
    { label: 'Settings', href: '/settings' }
  ]}
  activeItem="/research"
  isOpen={sidebarOpen}
  onToggle={() => setSidebarOpen(!sidebarOpen)}
  onNavigate={(href) => navigate(href)}
/>
```

#### 5. Tabs Navigation

**Purpose**: Horizontal navigation between related content sections within a page. Switch between different views without page reload.

**Structure**:
- Horizontal list of tab buttons
- Active tab indicator (bottom border or background color)
- Optional icons (future variant)

**Positioning**: Inside content area, typically below H2 or above content sections. Full width of container.

**Styling**:
- **Colors**:
  - Tab text (default): Gray #666
  - Tab text (active): Red #E30613
  - Tab background (default): Transparent
  - Tab background (active): Transparent
  - Tab border (active): Red #E30613 (2px bottom)
  - Hover: Light gray background #F5F5F5

- **Typography**: Open Sans, 14px medium (600)
- **Spacing**: 24px gap between tabs, 12px padding vertical
- **Border radius**: None
- **Borders**: 2px bottom border on active tab

**Props**:
```javascript
{
  tabs: array,               // [{label, id}, {label, id}]
  activeTab: string,         // Active tab id
  onTabChange: function,     // Tab click handler
  variant: 'underline' | 'background' // Style variant
}
```

**States**:
- Default: Gray text, transparent background
- Hover: Light gray background #F5F5F5
- Active: Red text #E30613, 2px red bottom border

**Variants**:
1. **Underline** (default): Bottom border on active tab
2. **Background**: Active tab has light red background
3. **Pills**: Tab items styled as buttons with borders

**Accessibility**:
- WCAG AA contrast (4.5:1)
- Semantic HTML: `<div role="tablist">`, `<button role="tab">`
- Keyboard: Arrow keys (left/right) to switch, Enter to activate
- ARIA: `aria-selected`, `aria-controls`

**Responsive**:
- Desktop (≥768px): All tabs visible
- Tablet/Mobile (<768px): Scrollable horizontal OR dropdown selector

**Example Usage**:
```javascript
<TabsNavigation
  tabs={[
    { label: 'Overview', id: 'overview' },
    { label: 'Details', id: 'details' },
    { label: 'History', id: 'history' }
  ]}
  activeTab="overview"
  onTabChange={(tabId) => setActiveTab(tabId)}
  variant="underline"
/>
```

#### 6. Dropdown Menu

**Purpose**: Triggered menu showing list of options. Used in headers (user menu), within forms (select-like), or as context menus. Click to open/close.

**Structure**:
- Trigger button/element (with chevron icon)
- Dropdown panel with list of items
- Items: text-based, may include icons or badges
- Close on: click outside, click item, or Escape key

**Positioning**: Relative to trigger element. Opens downward by default (upward if near viewport edge). Z-index: 40+

**Styling**:
- **Colors**:
  - Background: White
  - Text (default): Gray #666
  - Text (hover): Red #E30613
  - Background (hover): Light gray #F5F5F5
  - Border: #D9D9D9 (1.5px)
  - Shadow: Light shadow for depth

- **Typography**: Open Sans, 14px regular
- **Spacing**: 8px padding per item, 4px top/bottom
- **Border radius**: 4px
- **Borders**: 1.5px solid #D9D9D9

**Props**:
```javascript
{
  trigger: ReactNode,        // Trigger button/text
  items: array,              // [{label, id, onClick}, ...]
  onClose: function,         // Close callback
  align: 'left' | 'right',   // Dropdown alignment
  size: 'small' | 'medium',  // Dropdown size
}
```

**States**:
- Closed: Trigger button visible, menu hidden
- Open: Trigger button (highlight), menu visible
- Hover (item): Red text #E30613, light gray background
- Active (item): Same as hover

**Variants**:
1. **Standard**: Text items only
2. **With icons**: Items have left icons
3. **With badges**: Items have right badges/labels

**Accessibility**:
- WCAG AA contrast (4.5:1)
- Semantic HTML: `<button>`, `<ul>`, `<li>`
- Keyboard: ArrowDown/Up to navigate, Enter to select, Escape to close
- ARIA: `aria-expanded`, `aria-haspopup="menu"`, `role="menuitem"`
- Focus management: Focus moves to first item on open

**Responsive**:
- Desktop (≥768px): Dropdown panel visible below trigger
- Mobile (<768px): Full-width or modal-like behavior (optional)

**Example Usage**:
```javascript
<DropdownMenu
  trigger={<button>Options ▼</button>}
  items={[
    { label: 'Settings', id: 'settings', onClick: () => navigate('/settings') },
    { label: 'Support', id: 'support', onClick: () => openSupport() },
    { label: 'Logout', id: 'logout', onClick: () => logout() }
  ]}
  onClose={() => setDropdownOpen(false)}
  align="right"
/>
```