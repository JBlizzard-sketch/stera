# STERA Pharmacy - Image Assets Documentation

This file documents all images used in the STERA Pharmacy website, their locations, and credits.

## 📸 Image Inventory

### Logo
| Image | Location | Type | Source |
|-------|----------|------|--------|
| STERA Pharmacy Logo | `public/logo.png` | Local | Provided by client |

### Stock Images (Placeholders)

All stock images below are **placeholders** and should be replaced with real STERA Pharmacy photos.

#### Home Page (`app/page.tsx`)

| Description | URL | Usage | Credit |
|-------------|-----|-------|--------|
| Pharmacist arranging medication | `https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg` | Featured product - Prescription Medications | Pexels |
| Health supplements and vitamins | `https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg` | Featured product - Health Supplements | Pexels |
| Medical equipment | `https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg` | Featured product - Medical Equipment | Pexels |
| Medication close-up | `https://images.pexels.com/photos/3825456/pexels-photo-3825456.jpeg` | Blog preview 1 | Pexels |
| Fresh produce | `https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg` | Blog preview 2 | Pexels |
| Healthcare consultation | `https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg` | Blog preview 3 | Pexels |

#### Hero Component (`components/Hero.tsx`)

| Description | URL | Usage | Credit |
|-------------|-----|-------|--------|
| Pharmacist at work | `/pharmacist_arranging_98026948.jpg` (local copy) | Hero section background | Pexels |

#### Products Page (`app/products/page.tsx`)

| Description | URL | Usage | Credit |
|-------------|-----|-------|--------|
| Prescription medications | `https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg` | Product category card | Pexels |
| OTC medicines | `https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg` | Product category card | Pexels |
| Vitamins and supplements | `https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg` | Product category card | Pexels |
| Medical equipment | `https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg` | Product category card | Pexels |
| Personal care products | `https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg` | Product category card | Pexels |
| Baby care products | `https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg` | Product category card | Pexels |

#### About Page (`app/about/page.tsx`)

| Description | URL | Usage | Credit |
|-------------|-----|-------|--------|
| Pharmacist team member 1 | `https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?w=600` | Team photo | Pexels |
| Pharmacist team member 2 | `https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?w=600` | Team photo | Pexels |
| Pharmacy technician | `https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?w=600` | Team photo | Pexels |

#### Blog Posts (`lib/blog-posts.ts`)

| Description | URL | Usage | Credit |
|-------------|-----|-------|--------|
| Medication labels | `https://images.pexels.com/photos/3825456/pexels-photo-3825456.jpeg` | Blog post header | Pexels |
| Healthy food | `https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg` | Blog post header | Pexels |
| Healthcare monitoring | `https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg` | Blog post header | Pexels |

## 🔄 Replacement Instructions

### Priority 1: Replace Immediately
1. **Team photos** (`app/about/page.tsx`)
   - Use real STERA Pharmacy staff photos
   - Recommended size: 600x800px (portrait)
   - Format: JPG or WebP

2. **Hero image** (`components/Hero.tsx`, `public/pharmacist_arranging_98026948.jpg`)
   - Use STERA Pharmacy storefront or interior
   - Recommended size: 1200x800px
   - Format: JPG or WebP

### Priority 2: Replace for Brand Consistency
3. **Product category images** (`app/products/page.tsx`)
   - Use actual product photos from STERA inventory
   - Recommended size: 800x600px
   - Format: JPG or WebP

4. **Blog post images** (`lib/blog-posts.ts`)
   - Use custom graphics or relevant STERA photos
   - Recommended size: 1200x630px (social media optimized)
   - Format: JPG or WebP

### How to Replace Images

#### Method 1: Host on Cloudinary (Recommended)

1. **Sign up** at cloudinary.com
2. **Upload** your images
3. **Get URLs** from Cloudinary dashboard
4. **Update code** with new URLs:

```typescript
// Before
<Image src="https://images.pexels.com/..." alt="..." />

// After
<Image src="https://res.cloudinary.com/your-account/image/upload/v1234/photo.jpg" alt="..." />
```

5. **Update** `next.config.mjs` remotePatterns:
```javascript
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'res.cloudinary.com',
  },
],
```

#### Method 2: Store Locally in `/public`

1. **Optimize images** first (use TinyPNG, Squoosh, etc.)
2. **Place in** `/public/images/` directory
3. **Update code**:

```typescript
// Before
<Image src="https://images.pexels.com/..." alt="..." />

// After
<Image src="/images/your-photo.jpg" alt="..." />
```

**Warning**: This increases repository size. Use CDN for production.

## 🎨 Image Guidelines

### Technical Specifications

**Format**:
- Use WebP for best compression
- Fallback to JPG for compatibility
- PNG only for graphics with transparency

**Size Recommendations**:
- **Hero images**: 1920x1080px (16:9)
- **Product cards**: 800x600px (4:3)
- **Team photos**: 600x800px (portrait)
- **Blog headers**: 1200x630px (social sharing optimized)

**Optimization**:
- Compress images to <200KB when possible
- Use responsive images via `<Image>` component
- Set appropriate `sizes` attribute

### Brand Guidelines

**Photography Style**:
- ✅ Bright, well-lit spaces
- ✅ Clean, clinical aesthetic
- ✅ Warm, welcoming atmosphere
- ✅ Real people (staff, customers)
- ❌ Dark or gloomy images
- ❌ Generic stock photos
- ❌ Overly filtered/edited

**Colors**:
- Feature STERA gold (#F5B11A) where appropriate
- Maintain professional healthcare aesthetic
- Avoid clashing with brand colors

## 📝 Image Attribution

### Stock Images Used

All stock images are from Pexels (https://www.pexels.com) and are free to use under the Pexels License:
- ✅ Free for personal and commercial use
- ✅ No attribution required (but appreciated)
- ✅ Can be modified

### Pexels License
https://www.pexels.com/license/

## 🔍 Finding Images

If you need more stock images while building features:

**Free Stock Photo Sites**:
1. **Pexels** (pexels.com) - Used in this project
2. **Unsplash** (unsplash.com) - High quality, free
3. **Pixabay** (pixabay.com) - Large collection

**Search Terms for Pharmacy**:
- "pharmacy"
- "pharmacist"
- "medication"
- "pills"
- "medical equipment"
- "healthcare professional"
- "customer service pharmacy"
- "prescription"

## 🚨 Important Notes

### Before Going Live

1. **Replace ALL stock images** with real STERA Pharmacy photos
2. **Verify image rights** if using third-party images
3. **Optimize all images** for web performance
4. **Test image loading** on all pages
5. **Check mobile display** of all images

### Copyright Compliance

- ❌ Do NOT use images from Google Image Search without verification
- ❌ Do NOT use copyrighted images without license
- ✅ Use licensed stock photos (Pexels, Unsplash)
- ✅ Use your own original photography
- ✅ Properly attribute when required

## 📊 Image Checklist

Use this checklist before deployment:

- [ ] Logo replaced with official STERA logo
- [ ] Hero image is STERA Pharmacy storefront/interior
- [ ] All team photos are actual STERA staff
- [ ] Product images show real STERA inventory
- [ ] Blog images are relevant and licensed
- [ ] All images optimized (<200KB each)
- [ ] Image ALT text is descriptive and accurate
- [ ] Images load correctly on mobile
- [ ] Images load correctly on desktop
- [ ] CDN configured (if using Cloudinary/similar)
- [ ] remotePatterns updated in next.config.mjs

---

**Last Updated**: October 28, 2025

**Total Images**: 17 stock images (to be replaced)
**Logo**: 1 (provided)

**Status**: ⚠️ All stock images are placeholders - replace before production deployment
