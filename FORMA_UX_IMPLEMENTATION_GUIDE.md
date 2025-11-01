# 🚀 FORMA UX HYBRID SYSTEM - IMPLEMENTATION GUIDE

**Version:** 1  
**Platform:** Web + Mobile  
**Status:** Production-ready  
**Last Updated:** October 2025

---

## OVERVIEW: WHAT YOU NOW HAVE

You now have a **complete hybrid design system** that supports both **web applications** and **mobile applications** using shared design tokens and platform-specific implementations.

### The 6 New Files:

1. **Forma_UX_Design_System.md** ← SHARED (all design tokens, colors, typography)
2. **Forma_UX_Master_Prompt_Web.md** ← WEB ONLY (layout, workflow, components)
3. **Forma_UX_Master_Prompt_Mobile.md** ← MOBILE ONLY (touch, layout, workflow)
4. **Forma_UX_Component_Catalogue_Mobile.md** ← MOBILE ONLY (BottomTabBar, FAB, ActionSheet, etc.)
5. **Forma_UX_Knowledge_Base_Mobile.md** ← MOBILE ONLY (7 mobile layout patterns)
6. **Forma_UX_StyleSheet_Mobile.css** ← MOBILE ONLY (375px, touch-optimized CSS)

### What Stays the Same:

- **Forma_UX_Component_Catalogue.md** (your existing web components)
- **Forma_UX_StyleSheet.css** (your existing web CSS)
- **Forma_UX_knowledge_base.md** (your existing web patterns)

---

## FOLDER STRUCTURE (RECOMMENDED)

Organize your files like this:

```
Forma_UX_System/
├── 📄 Forma_UX_Design_System.md (SHARED)
│
├── 📁 WEB/
│   ├── Forma_UX_Master_Prompt_Web.md
│   ├── Forma_UX_Component_Catalogue_Web.md (rename your existing file)
│   ├── Forma_UX_Knowledge_Base_Web.md (rename your existing file)
│   └── Forma_UX_StyleSheet_Web.css (rename your existing file)
│
└── 📁 MOBILE/
    ├── Forma_UX_Master_Prompt_Mobile.md
    ├── Forma_UX_Component_Catalogue_Mobile.md
    ├── Forma_UX_Knowledge_Base_Mobile.md
    └── Forma_UX_StyleSheet_Mobile.css
```

---

## QUICK START: HOW TO USE THIS SYSTEM

### Starting a Web Mockup Session:

1. Provide:
   - `Forma_UX_Design_System.md`
   - `Forma_UX_Master_Prompt_Web.md`
   - `Forma_UX_Component_Catalogue_Web.md`
   - `Forma_UX_StyleSheet_Web.css`

2. Say: **"Let's design a web mockup. Starting with Forma UX Web workflow."**

3. I will:
   - Show the FORMA banner with "WEB VERSION" label
   - Ask for language (Step 0.0)
   - Ask for Component Test Mode or Full Workflow (Step 0.5)
   - Proceed with web-specific layout patterns, components, and CSS

### Starting a Mobile Mockup Session:

1. Provide:
   - `Forma_UX_Design_System.md`
   - `Forma_UX_Master_Prompt_Mobile.md`
   - `Forma_UX_Component_Catalogue_Mobile.md`
   - `Forma_UX_StyleSheet_Mobile.css`

2. Say: **"Let's design a mobile mockup. Starting with Forma UX Mobile workflow."**

3. I will:
   - Show the FORMA banner with "MOBILE VERSION" label
   - Ask for language (Step 0.0)
   - Ask for Component Test Mode or Full Workflow (Step 0.5)
   - Proceed with mobile-specific layout patterns, components, and CSS

---

## KEY DIFFERENCES: WEB vs MOBILE

### Navigation

**Web:**
- Fixed header + persistent sidebar
- Top navigation + left navigation
- Multi-column layout support

**Mobile:**
- Fixed header + floating action button (FAB) OR bottom tab bar
- Drawer menu (slides from left)
- Single-column layout (default)

### Components

**Web:**
- Tables, DataGrids, multi-column cards
- Breadcrumbs in header
- Tooltips, popovers, dropdown menus
- Persistent navigation

**Mobile:**
- BottomTabBar, SegmentControl
- ActionSheet, BottomSheet
- FAB (Floating Action Button)
- Simple list items, single-column stacks
- Full-width cards

### Layout Patterns

**Web:** 7 patterns (header+footer, multi-column, master-detail split, etc.)

**Mobile:** 7 patterns (bottom tabs, drawer, stacked nav, hero+scroll, modal/sheet, single-focus, hybrid)

### Interaction Model

**Web:**
- Mouse hover (hover states essential)
- Keyboard navigation
- Click-based
- Scrolling (horizontal + vertical)

**Mobile:**
- Touch-only (tap, swipe, long-press)
- No hover states (use active/pressed instead)
- 48px minimum touch targets
- Vertical scrolling only

### Viewport

**Web:**
- Supports 375px to 4K+ (fully responsive)
- Desktop-first or mobile-first approach

**Mobile:**
- Optimized for 375-430px
- Portrait or landscape (optional)
- Respects safe areas (notch, home indicator)

---

## DESIGN TOKENS HIERARCHY

All platforms inherit from `Forma_UX_Design_System.md`:

```
Forma_UX_Design_System.md (SHARED)
├── Colors (all platforms use same palette)
├── Typography (same fonts, adjusted sizes per platform)
├── Spacing (8px grid applies to both)
├── Shadows (same shadow system)
└── Motion (same animations)
    ↓
    ├── WEB Implementation
    │   ├── Larger headings (H1: 48px)
    │   ├── Multi-column support
    │   ├── Hover states
    │   └── Forma_UX_StyleSheet_Web.css
    │
    └── MOBILE Implementation
        ├── Smaller headings (H1: 24px)
        ├── Single-column only
        ├── No hover (active states)
        └── Forma_UX_StyleSheet_Mobile.css
```

---

## COMPONENT NAMING CONVENTIONS

### Web Components:
- `.btn` (button)
- `.table` (table)
- `.sidebar` (sidebar)
- `.breadcrumb` (breadcrumbs)
- `.modal` (modal dialog)
- `.tab` (tabs)

### Mobile Components:
- `.mobile-btn` (button)
- `.mobile-tab-bar` (bottom tab navigation)
- `.mobile-drawer` (drawer menu)
- `.mobile-fab` (floating action button)
- `.mobile-action-sheet` (bottom action sheet)
- `.mobile-list-item` (list item)
- `.mobile-card` (card)
- `.mobile-toast` (notification toast)

---

## PLATFORM SELECTION CHECKLIST

### Choose **WEB** if:
- ✅ Users work on desktop/laptop primarily
- ✅ Need multi-column layouts for data density
- ✅ Dashboard or complex enterprise application
- ✅ Large amounts of information to display
- ✅ Frequent use of tables, spreadsheets
- ✅ Keyboard navigation important
- ✅ Hover interactions expected

### Choose **MOBILE** if:
- ✅ Users on smartphones/tablets primarily
- ✅ App must work on small screens (375px)
- ✅ Task-focused workflows
- ✅ Bottom navigation makes sense
- ✅ Touch-first interaction model
- ✅ Single-column content layout
- ✅ Offline or progressive web app

### Choose **BOTH** (Responsive) if:
- ✅ Need to support both web and mobile
- ✅ Same users on different devices
- ✅ Responsive design with breakpoints
- ✅ Progressive enhancement strategy

---

## WORKFLOW COMPARISON

### WEB WORKFLOW (Steps 0.0 - 7.0)

```
0.0 Language Selection → "English" or "Italian"
   ↓
0.5 Component Test Mode → "YES" (fast) or "NO" (full workflow)
   ↓
IF "YES": Skip to Step 5.0 (generate immediately)
IF "NO": Continue full workflow
   ↓
1.0 Strategic Brief → Purpose, Actions, Context, User, Success Metric
   ↓
1.6 UX Strategy → Command Center, Guided Workflow, etc.
   ↓
2.0 Layout Pattern → Fixed Header, Two-Column, Master-Detail Split, etc.
   ↓
2.5 Constraints Locked → Header, Sidebar, Content behavior defined
   ↓
3.0 Detailed Requirements → Content, sections, interactions
   ↓
4.0 Component Specifications → Table, Card, Form, Modal, etc.
   ↓
5.0 Pre-Generation Validation → Final check before artifact
   ↓
6.0 Generate HTML Mockup → Full web application mockup
   ↓
7.0 Iteration & Refinement → /UPDATE-ARTIFACT or /REWRITE-ARTIFACT
```

### MOBILE WORKFLOW (Steps 0.0 - 7.0)

```
0.0 Language Selection → "English" or "Italian"
   ↓
0.5 Component Test Mode → "YES" (fast) or "NO" (full workflow)
   ↓
IF "YES": Skip to Step 5.0 (generate immediately)
IF "NO": Continue full workflow
   ↓
1.0 Strategic Brief → Purpose, Actions, Context, User, Success Metric
   (Same structure as web, but focused on mobile use case)
   ↓
1.6 UX Strategy → Tab Navigation, Drawer Nav, Stacked Nav, etc.
   (Mobile-specific frameworks)
   ↓
2.0 Layout Pattern → Bottom Tabs, Drawer, Stacked, Hero+Scroll, etc.
   (Mobile-only patterns, 375px-optimized)
   ↓
2.5 Constraints Locked → Header, Navigation, Content, Safe Areas
   (Mobile-specific constraints: touch targets, bottom nav, safe areas)
   ↓
3.0 Detailed Requirements → Sections, interactions, gestures
   (Tap, swipe, long-press instead of hover/click)
   ↓
4.0 Component Specifications → BottomTabBar, FAB, ActionSheet, List, etc.
   (Mobile-specific components from catalogue)
   ↓
5.0 Pre-Generation Validation → 48px touch targets, no hover, safe areas
   ↓
6.0 Generate Mobile Mockup → 375px-wide responsive mockup
   (HTML or React Native markup)
   ↓
7.0 Iteration & Refinement → /UPDATE-ARTIFACT or /REWRITE-ARTIFACT
```

---

## MANDATORY CHECKPOINTS (BOTH PLATFORMS)

These checkpoints **cannot be skipped** on either platform:

- ✓ **Step 2.4 – Constraints locked** (MANDATORY before mockup)
- ✓ **Step 2.6 – Constraints confirmation** (MANDATORY before Step 3.0)
- ✓ **Step 4.4 – Components confirmed** (MANDATORY before mockup)
- ✓ **Step 5.1 – Pre-generation validation** (MANDATORY before artifact)
- ✓ **Step 6.0 – Resource monitoring** (MANDATORY after mockup)

---

## SHARED FILES TO KEEP

These files are shared between Web and Mobile (use for both):

- `Forma_UX_Design_System.md` ← Colors, typography, spacing, tokens
- Any custom component libraries (if you build reusable components)

---

## MIGRATING FROM OLD SYSTEM

If you were using the original single prompt:

### STEP 1: Backup
- Keep your original files in case of issues

### STEP 2: Rename existing files to "WEB"
```
Forma_UX_Master_Prompt_WITH_APP.md 
  → Forma_UX_Master_Prompt_Web.md

Forma_UX_Component_Catalogue.md 
  → Forma_UX_Component_Catalogue_Web.md

Forma_UX_knowledge_base.md 
  → Forma_UX_Knowledge_Base_Web.md

Forma_UX_StyleSheet.css 
  → Forma_UX_StyleSheet_Web.css
```

### STEP 3: Add new files
- Copy the 6 new files from this implementation
- Extract `Forma_UX_Design_System.md` (shared tokens)
- Add Mobile variants in separate folder

### STEP 4: Update references
- In web prompt, change internal links to point to web-specific files
- In mobile prompt, change internal links to point to mobile-specific files
- Both reference `Forma_UX_Design_System.md`

---

## ADVANCED: USING BOTH WEB + MOBILE IN ONE SESSION

If you want to design both web and mobile mockups in the same conversation:

1. **Start with Web:**
   ```
   Provide Web files + Design System
   Say: "Let's start with a web mockup"
   Complete web workflow (Steps 0.0-7.0)
   ```

2. **Switch to Mobile:**
   ```
   Say: "/SWITCH-TO-PLATFORM-MOBILE"
   I will reset to Step 0.0 with Mobile version
   Provide Mobile files + Design System (shared)
   Complete mobile workflow (Steps 0.0-7.0)
   ```

3. **Compare side-by-side:**
   - Both use same design tokens (colors, typography)
   - But different layouts, components, CSS
   - Different interaction patterns

---

## CONTROL COMMANDS (BOTH PLATFORMS)

| Comando | Effetto |
|---------|---------|
| `/RESET-TO-STEP-[X.X]` | Ricarica il checkpoint di Step X.X |
| `/SHOW-STEP-TRACKER` | Mostra status attuale di tutti gli step |
| `/SAVE-CONTINUATION-KIT` | Genera il Continuation Kit da salvare |
| `/UPDATE-ARTIFACT` | Aggiorna l'artifact (modifiche minori) |
| `/REWRITE-ARTIFACT` | Riscrivi l'artifact (ristruturazioni maggiori) |
| `/SWITCH-TO-PLATFORM-MOBILE` | Switch to mobile workflow (only if in web session) |
| `/SWITCH-TO-PLATFORM-WEB` | Switch to web workflow (only if in mobile session) |

---

## BEST PRACTICES

### Do ✅

- **Use shared design tokens** – All colors/typography come from Design System
- **Respect platform constraints** – Web uses multi-column, mobile uses single-column
- **Test responsiveness** – Web should work at 375px, mobile should work at 375-430px
- **Use proper components** – Web uses tables, Mobile uses lists
- **Follow touch guidelines** – Mobile: 48px touch targets, no hover
- **Organize files** – Keep Web and Mobile in separate folders
- **Document decisions** – Why you chose web vs mobile for this project

### Don't ❌

- **Don't mix web and mobile components** – Use platform-specific components only
- **Don't override design tokens** – Keep them in Design System (shared)
- **Don't assume responsiveness** – Web at 375px ≠ Mobile app
- **Don't forget safe areas** – Mobile: notches, home indicators
- **Don't use hover on mobile** – Use active/pressed states instead
- **Don't create huge lists on mobile** – Virtualize or paginate content
- **Don't forget touch zones** – Bottom 40% of screen is thumbs-friendly on mobile

---

## TROUBLESHOOTING

### "The components don't look right on mobile"
→ Check if you're using Web components on Mobile prompt. Use mobile-specific components only.

### "My web mockup doesn't fill the width"
→ Set max-width constraints or use full-width classes. Web supports wider layouts.

### "Touch targets are too small on mobile"
→ All interactive elements must be 48px minimum. Check CSS is using `--touch-target-min`.

### "I need both web and mobile designs"
→ Provide both file sets. I'll ask which platform you want to start with in Step 0.0.

### "Colors look different on web vs mobile"
→ They shouldn't! Both inherit from `Forma_UX_Design_System.md`. If different, check CSS files are correctly applying tokens.

---

## NEXT STEPS

1. **Organize your file structure** – Use the folder layout recommended above
2. **Save all 6 files** – Keep them safe and organized
3. **Start a session** – Choose Web or Mobile, provide the appropriate files
4. **Test the workflow** – Go through Steps 0.0-7.0 to verify everything works
5. **Provide feedback** – Let me know what works, what doesn't, what improvements needed

---

## VERSION HISTORY

- **V1:** Hybrid system supporting Web + Mobile with shared design tokens

**Status:** Production-ready  
**Platform:** Web + Mobile  
**Last updated:** October 2025

---

## SUMMARY

You now have a **professional, scalable design system** that:

✅ Supports **web applications** (dashboards, complex UIs, multi-column)  
✅ Supports **mobile applications** (375px, touch-first, bottom nav)  
✅ Shares **design tokens** (colors, typography, spacing)  
✅ Has **platform-specific** workflows, components, CSS  
✅ Uses **deterministic component selection** (no guessing)  
✅ Includes **7 layout patterns** per platform  
✅ Maintains **design consistency** across platforms  

**Ready to build? Pick a platform and let's design! 🚀**
