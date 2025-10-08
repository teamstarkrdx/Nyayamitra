# LegalHelp AI - Design Guidelines

## Design Approach
**Selected Approach:** Custom visual system combining gradient mesh backgrounds with professional card-based layouts, inspired by modern legal-tech platforms with enhanced 3D motion design.

**Design Principles:**
- Professional trust and credibility for legal services
- Modern, dynamic visual appeal with 3D animations
- Clear information hierarchy for complex legal content
- Accessibility across Indian languages and devices

---

## Core Design Elements

### A. Color Palette

**Primary Brand Colors:**
- **Deep Blue:** 220 70% 45% (trust, authority, legal professionalism)
- **Royal Purple:** 265 60% 50% (innovation, AI technology)
- **Vibrant Pink:** 320 75% 55% (accessibility, modern appeal)

**Dark Mode:**
- Background: 220 20% 8%
- Card backgrounds: 220 15% 12% with 95% opacity
- Text primary: 0 0% 95%
- Text secondary: 220 10% 70%

**Light Mode:**
- Background: 210 20% 98%
- Card backgrounds: 0 0% 100% with 95% opacity
- Text primary: 220 30% 15%
- Text secondary: 220 15% 45%

**Gradient Mesh Background:**
- Animated gradient shifting through blue (220 70% 55%), purple (265 60% 60%), pink (320 75% 65%)
- Large pulsing orbs with 20-30 second animation cycles
- 12-15 floating geometric shapes with 3D rotation
- Mobile-optimized 60fps performance

---

### B. Typography

**Font Stack:** Inter (Google Fonts) for professional, highly legible legal content

**Hierarchy:**
- **Hero Headlines:** 3xl-6xl, font-bold, gradient text effect (blue to purple)
- **Section Headers:** 2xl-4xl, font-semibold, tracking-tight
- **Card Titles:** xl-2xl, font-semibold
- **Body Text:** base-lg, font-normal, leading-relaxed
- **Legal Content:** sm-base, font-normal, leading-loose (better readability)
- **Captions/Labels:** xs-sm, font-medium, uppercase tracking-wide

---

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, h-8, m-6, py-12, space-y-16)

**Container Strategy:**
- Max width: max-w-7xl for main sections
- Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
- Section spacing: py-12 (mobile), py-16 (tablet), py-24 (desktop)

**Grid Patterns:**
- Legal Guidance Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Rights Preview: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 (6 cards shown)
- How We Help: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

---

### D. Component Library

**Navigation:**
- Sticky header with backdrop-blur and semi-transparent background
- Hamburger menu (top-left) with smooth slide-in drawer
- Dark mode toggle with moon/sun icon transition
- Mobile: full-screen overlay menu with section links

**Cards (Professional Legal Design):**
- White/dark backgrounds with 95% opacity
- Multi-layered shadows: shadow-lg + shadow-xl on hover
- Rounded-2xl borders with subtle border (border-gray-200 dark:border-gray-800)
- 3D hover effects: -translate-y-2 scale-105 transition-all duration-300
- Inner padding: p-6 to p-8
- Icon positioning: Top-left or centered based on card type

**Chatbot Interface:**
- Fixed position bottom-right
- Transparent robot head icon (no blue background)
- Window size: 540px × 720px (desktop), full-screen mobile
- Independent scrolling for messages
- Language selector: Grid of language cards with native names
- Message bubbles: User (blue gradient right-aligned), AI (white/dark left-aligned)
- Input area: Fixed bottom with mic button, text input, send button

**Buttons:**
- Primary CTA: Gradient background (blue to purple), white text, px-8 py-3, rounded-full, hover:scale-105
- Secondary: Outline with backdrop-blur when on images, px-6 py-2.5, rounded-full
- Icon buttons: Circular, p-3, hover:bg-opacity-20

**Modal System (30 Rights Display):**
- Overlay: bg-black/50 backdrop-blur-sm
- Modal container: max-w-6xl, rounded-3xl, shadow-2xl
- Search bar: Sticky top with backdrop-blur
- Category filters: Horizontal scroll tabs with active state
- Rights cards: Grid layout with category badges, star ratings, icons

---

### E. Visual Effects & Animations

**3D Background Animation:**
- Continuous gradient mesh movement
- Floating shapes with rotateX, rotateY, rotateZ transforms
- Blur filters on orbs (blur-3xl)
- Opacity pulsing (0.3 to 0.7)
- Transform-gpu for smooth performance

**Interactive Micro-animations:**
- Card hover: Lift + scale + shadow enhancement (duration-300)
- Button hover: Scale 1.05 + brightness increase
- Language selection: Scale pulse on click
- Copy confirmation: Checkmark fade-in with bounce
- Star ratings: Fill animation on hover/click

**Gradient Text Effects:**
- Hero headlines: bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
- Subheadings: Subtle gradient or solid brand color

---

## Images

**Hero Section:**
- Large hero image showing diverse Indian citizens with AI/legal technology overlay
- Position: Right side on desktop (50% width), full-width on mobile below text
- Style: Modern, professional photography with slight overlay gradient
- Alt: "Indian citizens accessing AI legal assistance"

**Legal Guidance Cards:**
- Icon-based illustrations for each category (Constitutional, Criminal, Civil, Family, Corporate, Education)
- Use Heroicons or Font Awesome legal-themed icons
- Size: 48px × 48px in gradient circle backgrounds

**Chatbot:**
- Transparent robot head icon (SVG) for chat trigger
- Language flags/symbols for language selector (use Unicode flags)

---

## Key UI Patterns

**Section Structure:**
1. Hero: Full viewport height with image, headline, CTA buttons, trust indicators
2. Legal Guidance: Grid of 6 category cards with hover effects
3. How We Help: 4-column feature grid with icons
4. Rights Preview: 6 rights cards with "View All 30 Rights" modal trigger
5. Contact: Split layout (support info + emergency numbers)
6. Footer Reviews: Dynamic testimonials or "Be First to Review" CTA

**Responsive Breakpoints:**
- Mobile: < 768px (single column, full-width cards, hamburger menu)
- Tablet: 768px - 1024px (2-column grids, condensed spacing)
- Desktop: > 1024px (multi-column, full animations, optimal spacing)

**Accessibility:**
- High contrast ratios (WCAG AA minimum)
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Screen reader labels for icons and language options
- Keyboard navigation support
- Dark mode with proper color inversions

---

## Technical Visual Specifications

**Chatbot Window:**
- Desktop: w-[540px] h-[720px]
- Mobile: w-full h-[calc(100vh-80px)]
- Z-index: 50 (above content, below modal overlays)
- Backdrop: blur-md bg-white/95 dark:bg-gray-900/95

**Modal Overlays:**
- Z-index: 60
- Backdrop: blur-sm bg-black/50
- Animation: fade-in + scale-95 to scale-100

**Performance Targets:**
- 60fps animations on all devices
- Optimized 3D transforms using transform-gpu
- Reduced motion support (@media prefers-reduced-motion)
- Battery-efficient mobile animations

This design creates a professional, trustworthy legal platform with modern visual appeal suitable for India's first AI legal assistant.