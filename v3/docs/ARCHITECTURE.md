# GoGreenIn V3 - Architecture & Design System

## 🎨 Design Philosophy

### Core Principles
1. **Simplicity First** - Clean, intuitive interface
2. **Performance** - Fast, responsive, optimized
3. **Accessibility** - Inclusive design for all users
4. **Scalability** - Easy to maintain and extend
5. **Mobile-First** - Optimized for all devices

## 📁 Project Structure

```
v3/
├── index.html                 # Main entry point
├── assets/
│   ├── css/
│   │   ├── core/
│   │   │   ├── reset.css      # CSS reset
│   │   │   ├── variables.css  # Design tokens
│   │   │   ├── typography.css # Font styles
│   │   │   └── utilities.css  # Utility classes
│   │   ├── components/
│   │   │   ├── navbar.css     # Navigation
│   │   │   ├── hero.css       # Hero section
│   │   │   ├── cards.css      # Card components
│   │   │   ├── buttons.css    # Button styles
│   │   │   ├── modals.css     # Modal dialogs
│   │   │   └── forms.css      # Form elements
│   │   ├── sections/
│   │   │   ├── timeline.css   # Journey timeline
│   │   │   ├── events.css     # Events section
│   │   │   ├── impact.css     # Impact dashboard
│   │   │   └── community.css  # Community section
│   │   └── main.css           # Main stylesheet (imports all)
│   ├── js/
│   │   ├── core/
│   │   │   ├── app.js         # Main app logic
│   │   │   ├── router.js      # Navigation router
│   │   │   └── utils.js       # Utility functions
│   │   ├── components/
│   │   │   ├── navbar.js      # Navigation logic
│   │   │   ├── timeline.js    # Timeline interactions
│   │   │   ├── events.js      # Events management
│   │   │   ├── calculator.js  # Impact calculator
│   │   │   └── modals.js      # Modal handlers
│   │   ├── data/
│   │   │   ├── years.js       # Timeline data
│   │   │   ├── events.js      # Events data
│   │   │   └── testimonials.js # Testimonials data
│   │   └── main.js            # Entry point (imports all)
│   └── images/
│       ├── logo/              # Logo variations
│       ├── icons/             # UI icons
│       └── placeholders/      # Placeholder images
├── components/
│   ├── navbar.html            # Reusable navbar
│   ├── footer.html            # Reusable footer
│   └── modals.html            # Modal templates
├── docs/
│   ├── DESIGN_SYSTEM.md       # Design guidelines
│   ├── COMPONENTS.md          # Component documentation
│   └── API.md                 # API documentation
└── config/
    ├── manifest.json          # PWA manifest
    └── sw.js                  # Service worker
```

## 🎨 Design System

### Color Palette

#### Primary Colors
```css
--primary-50:  #e6fff5
--primary-100: #b3ffe0
--primary-500: #00ff88  /* Main brand color */
--primary-700: #00cc6d
--primary-900: #009952
```

#### Secondary Colors
```css
--secondary-50:  #fff3ed
--secondary-100: #ffd9c2
--secondary-500: #ff6b35  /* Accent color */
--secondary-700: #e55a2b
--secondary-900: #cc4921
```

#### Neutral Colors
```css
--neutral-50:  #f8f9fa
--neutral-100: #e9ecef
--neutral-500: #8892b0
--neutral-700: #495057
--neutral-900: #0a0e27  /* Dark background */
```

### Typography Scale

```css
--font-family-primary: 'Inter', sans-serif
--font-family-display: 'Inter', sans-serif

--font-size-xs:   0.75rem   /* 12px */
--font-size-sm:   0.875rem  /* 14px */
--font-size-base: 1rem      /* 16px */
--font-size-lg:   1.125rem  /* 18px */
--font-size-xl:   1.25rem   /* 20px */
--font-size-2xl:  1.5rem    /* 24px */
--font-size-3xl:  1.875rem  /* 30px */
--font-size-4xl:  2.25rem   /* 36px */
--font-size-5xl:  3rem      /* 48px */
--font-size-6xl:  3.75rem   /* 60px */

--font-weight-light:   300
--font-weight-regular: 400
--font-weight-medium:  500
--font-weight-semibold: 600
--font-weight-bold:    700
--font-weight-black:   900
```

### Spacing System

```css
--space-1:  0.25rem  /* 4px */
--space-2:  0.5rem   /* 8px */
--space-3:  0.75rem  /* 12px */
--space-4:  1rem     /* 16px */
--space-5:  1.25rem  /* 20px */
--space-6:  1.5rem   /* 24px */
--space-8:  2rem     /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
```

### Border Radius

```css
--radius-sm:   0.25rem  /* 4px */
--radius-md:   0.5rem   /* 8px */
--radius-lg:   0.75rem  /* 12px */
--radius-xl:   1rem     /* 16px */
--radius-2xl:  1.5rem   /* 24px */
--radius-full: 9999px   /* Fully rounded */
```

### Shadows

```css
--shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md:  0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.15)
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

### Transitions

```css
--transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base:   300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow:   500ms cubic-bezier(0.4, 0, 0.2, 1)
```

## 🧩 Component Library

### 1. Buttons

#### Variants
- Primary (CTA)
- Secondary (Outline)
- Ghost (Transparent)
- Link (Text only)

#### Sizes
- Small (sm)
- Medium (md) - Default
- Large (lg)

### 2. Cards

#### Types
- Event Card
- Impact Card
- Testimonial Card
- Timeline Card

### 3. Navigation

#### Components
- Top Navbar (Fixed)
- Mobile Menu (Drawer)
- Footer Navigation

### 4. Modals

#### Types
- Video Modal
- Image Gallery
- Form Modal
- Confirmation Dialog

### 5. Forms

#### Elements
- Text Input
- Email Input
- Select Dropdown
- Checkbox
- Radio Button
- Submit Button

## 📱 Responsive Breakpoints

```css
--breakpoint-sm:  640px   /* Mobile landscape */
--breakpoint-md:  768px   /* Tablet */
--breakpoint-lg:  1024px  /* Desktop */
--breakpoint-xl:  1280px  /* Large desktop */
--breakpoint-2xl: 1536px  /* Extra large */
```

## ♿ Accessibility Standards

### WCAG 2.1 Level AA Compliance

1. **Color Contrast**
   - Text: 4.5:1 minimum
   - Large text: 3:1 minimum

2. **Keyboard Navigation**
   - All interactive elements accessible
   - Visible focus indicators
   - Logical tab order

3. **Screen Readers**
   - Semantic HTML
   - ARIA labels
   - Alt text for images

4. **Motion**
   - Respect prefers-reduced-motion
   - Optional animations

## 🚀 Performance Goals

### Metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90

### Optimization
- Lazy loading images
- Code splitting
- Minified assets
- CDN delivery (Cloudinary)

## 🔒 Security

### Best Practices
- Content Security Policy
- HTTPS only
- No inline scripts
- Sanitized user input

## 📊 Analytics & Tracking

### Events to Track
- Page views
- Button clicks
- Form submissions
- Video plays
- Scroll depth

## 🎯 User Flows

### Primary Flows
1. **New Visitor** → Learn → Join
2. **Member** → Events → Register
3. **Contributor** → Gallery → Upload

### Key Actions
- Join Community (CTA)
- Register for Event
- View Timeline
- Calculate Impact
- Subscribe Newsletter

## 🧪 Testing Strategy

### Types
1. **Unit Tests** - Component logic
2. **Integration Tests** - User flows
3. **E2E Tests** - Critical paths
4. **Visual Tests** - UI consistency

### Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Success Metrics

### KPIs
- User engagement time
- Conversion rate (joins)
- Event registrations
- Newsletter signups
- Social shares

## 🔄 Maintenance

### Regular Tasks
- Content updates
- Performance monitoring
- Security patches
- Dependency updates
- Backup verification

---

**Version**: 3.0.0  
**Last Updated**: 2025-01-19  
**Maintained By**: GoGreenIn Team
