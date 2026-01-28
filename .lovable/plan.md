

# Implement Option A: Transparent Gradient Fade

## Changes to `src/components/VerticalPortfolioSlider.tsx`

### Line 55 (Top gradient)
**Before:**
```css
h-24 bg-gradient-to-b from-background via-background/80 to-transparent
```

**After:**
```css
h-16 bg-gradient-to-b from-white/90 via-white/40 to-transparent
```

### Line 58 (Bottom gradient)
**Before:**
```css
h-24 bg-gradient-to-t from-background via-background/80 to-transparent
```

**After:**
```css
h-16 bg-gradient-to-t from-white/90 via-white/40 to-transparent
```

## Summary of Changes
- Gradient color: `from-background` → `from-white/90` (semi-transparent white)
- Mid gradient: `via-background/80` → `via-white/40` (softer blend)
- Height: `h-24` (96px) → `h-16` (64px) for less aggressive fade

This creates a softer, cleaner fade that eliminates the visual noise while maintaining the seamless loop effect.

