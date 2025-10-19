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
