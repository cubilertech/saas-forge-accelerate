
# Vertical Portfolio Slider for Hero Section

## Overview
Add an elegant vertical continuous portfolio image slider on the left side of the hero section, transforming the current centered layout into a split-screen design that showcases your work while maintaining the main messaging.

---

## Layout Transformation

### Current Layout
- Full-width centered hero content
- Floating geometric shapes in background
- Single column text alignment

### New Layout
- **Left side (40%)**: Vertical continuous portfolio slider
- **Right side (60%)**: Main hero content (headline, description, CTAs)
- Responsive: On mobile, slider hides or becomes a subtle top element

---

## Visual Design

### Vertical Slider Characteristics
- Continuous upward scrolling animation (infinite loop)
- Portfolio images displayed as cards with rounded corners
- Subtle shadow and border for depth
- Slight overlap between cards for visual interest
- Gradient fade at top and bottom edges for seamless loop
- Pause on hover for user interaction

### Image Styling
- Rounded corners (12-16px radius)
- Soft shadow with teal accent
- Border with primary color tint
- Hover effect: slight scale and enhanced glow
- Project name overlay at bottom of each card

---

## Technical Implementation

### 1. Create New Component: `VerticalPortfolioSlider.tsx`

A dedicated component with:
- CSS-based infinite scroll animation (translateY)
- Duplicated items for seamless looping
- Gradient masks at top/bottom edges
- Hover pause functionality
- Responsive visibility (hidden on mobile)

### 2. Modify Hero Section Layout

Transform the hero section in `src/pages/Index.tsx`:
- Change from centered single-column to flexbox two-column
- Left column: Portfolio slider (hidden below `lg` breakpoint)
- Right column: Existing hero content (adjust text alignment)

### 3. Add CSS Animation in `src/index.css`

New keyframe animation:
```css
@keyframes scroll-vertical {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
```

### 4. Portfolio Items to Display

Use existing portfolio data:
- AfterHire (dashboard-afterHire.png)
- PriceUp (cde0d446-bc0e-4104-a6a4-fdd973f8ef18.png)
- Pipa (aa7e3655-ae93-4d12-9d84-a267b0cb2e02.png)
- Additional showcase images from lovable-uploads

---

## Hero Section Structure

```text
+----------------------------------+
|           HEADER                 |
+----------------------------------+
|          |                       |
|  [IMG]   |   Your Tech Partner   |
|          |                       |
|  [IMG]   | AI Product & Auto-    |
|          | mation Agency         |
|  [IMG]   |                       |
|   ↑      | We help founders...   |
|  scroll  |                       |
|  [IMG]   | [CTA] [CTA]           |
|          |                       |
+----------------------------------+
```

---

## Responsive Behavior

| Breakpoint | Slider | Hero Content |
|------------|--------|--------------|
| Mobile (<768px) | Hidden | Full width, centered |
| Tablet (768-1024px) | Hidden | Full width, centered |
| Desktop (>1024px) | Visible (40%) | Right-aligned (60%) |

---

## Files to Create/Modify

1. **Create**: `src/components/VerticalPortfolioSlider.tsx`
   - New component for the vertical slider

2. **Modify**: `src/pages/Index.tsx`
   - Update hero section layout to two-column
   - Import and integrate VerticalPortfolioSlider
   - Adjust hero content positioning

3. **Modify**: `src/index.css`
   - Add vertical scroll animation keyframes
   - Add slider-specific utility classes

---

## Animation Details

- **Speed**: 30-40 seconds for full cycle (elegant, not rushed)
- **Direction**: Upward scroll (bottom to top)
- **Easing**: Linear for continuous feel
- **Hover**: Pause animation
- **Fade edges**: 80px gradient at top and bottom

---

## Result

A sophisticated hero section that:
- Immediately showcases portfolio quality
- Creates visual interest and depth
- Maintains focus on primary messaging
- Aligns perfectly with the elegant light theme
- Provides smooth, non-distracting animation
