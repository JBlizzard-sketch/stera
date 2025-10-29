# Quality Assurance Checklist

This checklist ensures the STERA Pharmacy website is production-ready before deployment.

## ✅ Development Environment

- [x] `npm install` runs without errors
- [x] `npm run dev` starts development server successfully
- [x] Development server runs on http://localhost:5000
- [x] Hot reload works when editing files
- [x] No console errors in browser dev tools

## 🏗️ Build & Production

- [ ] `npm run build` completes successfully
- [ ] Build produces `/out` directory with static files
- [ ] `/out` contains all expected pages (HTML files)
- [ ] Build completes in reasonable time (<5 minutes)
- [ ] No build warnings or errors

## 📱 Responsive Design

### Mobile (320px - 767px)
- [ ] All pages display correctly on mobile
- [ ] Navigation menu works (hamburger menu)
- [ ] Images scale appropriately
- [ ] Text is readable without zooming
- [ ] Buttons are easily tappable (minimum 44x44px)
- [ ] Forms are usable on mobile

### Tablet (768px - 1023px)
- [ ] Layout adapts properly for tablet screens
- [ ] Navigation displays correctly
- [ ] Grid layouts adjust appropriately
- [ ] Images scale well

### Desktop (1024px+)
- [ ] Full desktop layout displays correctly
- [ ] Maximum width container works (max-w-7xl)
- [ ] All content is accessible
- [ ] Hover effects work

## 🖼️ Images

- [ ] Logo displays correctly on all pages
- [ ] All placeholder images are replaced with real photos
- [ ] Images load correctly (no broken links)
- [ ] Image alt text is descriptive and accurate
- [ ] Images are lazy-loaded (check network tab)
- [ ] Images are optimized (<200KB each when possible)
- [ ] Hero image displays properly
- [ ] Product images display in grid correctly
- [ ] Team photos display on About page
- [ ] Blog post images load

## 🔗 Navigation & Links

### Internal Links
- [ ] Home page loads from `/`
- [ ] About page loads from `/about`
- [ ] Products page loads from `/products`
- [ ] Services page loads from `/services`
- [ ] Blog page loads from `/blog`
- [ ] Contact page loads from `/contact`
- [ ] Blog post detail pages load from `/blog/[slug]`

### External Links
- [ ] WhatsApp links work and open WhatsApp
- [ ] WhatsApp number is correct
- [ ] Social media links (if added) work
- [ ] Google Maps embed displays correctly
- [ ] External links open in new tab (if applicable)

### Navigation Components
- [ ] Navbar appears on all pages
- [ ] Navbar becomes sticky on scroll
- [ ] Navbar blur effect works on scroll
- [ ] Mobile menu opens/closes correctly
- [ ] Footer appears on all pages
- [ ] Footer links work
- [ ] "Back to Blog" link works on blog posts

## 🎨 Styling & Design

### Brand Colors
- [ ] Gold (#F5B11A) used for CTAs and accents
- [ ] Dark gray (#2E2E2E) used for text
- [ ] Color scheme is consistent across all pages
- [ ] Shadows and glows display correctly

### Typography
- [ ] Poppins font loads correctly
- [ ] Font weights render properly (300, 400, 600, 700)
- [ ] Headings use correct font sizes (responsive)
- [ ] Text is readable on all backgrounds
- [ ] Line height and spacing is appropriate

### Components
- [ ] Buttons hover effect works (scale 1.05)
- [ ] Cards display with proper shadows
- [ ] Cards have hover effects
- [ ] Hero section animations play
- [ ] Service cards display in grid
- [ ] Product grid is responsive

## ♿ Accessibility

### General
- [ ] Color contrast meets WCAG AA standards
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] Skip to content link (if added) works

### Images
- [ ] All images have descriptive alt text
- [ ] Decorative images use empty alt (`alt=""`)
- [ ] Icons have appropriate labels

### Forms
- [ ] Form labels are associated with inputs
- [ ] Required fields are indicated
- [ ] Form validation messages are clear
- [ ] Error messages are accessible

### Animations
- [ ] Respects `prefers-reduced-motion`
- [ ] Animations can be disabled
- [ ] No seizure-inducing animations

## 🔍 SEO

### Meta Tags
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions are present (check `layout.tsx`)
- [ ] Open Graph tags are configured
- [ ] Twitter Card tags are configured
- [ ] Canonical URLs are set (if applicable)

### Structured Data
- [ ] JSON-LD schema present in `layout.tsx`
- [ ] LocalBusiness schema is correctly configured
- [ ] Business hours are accurate
- [ ] Contact information is correct
- [ ] Address is correct

### Content
- [ ] Headings use proper hierarchy (H1 → H2 → H3)
- [ ] Each page has one H1
- [ ] Content is unique per page
- [ ] URLs are clean and descriptive

### Technical SEO
- [ ] `sitemap.xml` exists in `/public`
- [ ] `robots.txt` exists in `/public`
- [ ] Site URLs are updated in sitemap (not example.com)
- [ ] Robots.txt allows crawling

## 📄 Content Accuracy

### Contact Information
- [ ] Phone number is correct in Footer
- [ ] Phone number is correct in Contact page
- [ ] Email address is correct
- [ ] Business address is correct
- [ ] Business hours are accurate
- [ ] WhatsApp number is correct (all instances)
- [ ] Google Maps location is correct

### Blog Content
- [ ] Blog posts display correctly
- [ ] Blog post dates are formatted properly
- [ ] Blog post categories work
- [ ] Blog content is error-free
- [ ] "Read more" links work

### Product & Service Information
- [ ] Product categories are accurate
- [ ] Service descriptions are correct
- [ ] Product descriptions match offerings
- [ ] Pricing (if shown) is current

## 🔧 Functionality

### Forms
- [ ] Contact form displays correctly
- [ ] Form validation works (client-side)
- [ ] Required field validation works
- [ ] Email format validation works
- [ ] Form shows appropriate message (static form notice)
- [ ] Form is styled correctly

### Interactive Elements
- [ ] All buttons are clickable
- [ ] Hover states work
- [ ] Active states work
- [ ] Disabled states work (if applicable)
- [ ] Dropdown/menu interactions work

### Animations
- [ ] Framer Motion animations play
- [ ] Scroll animations trigger correctly
- [ ] No animation jank or glitches
- [ ] Performance is smooth

## ⚡ Performance

### Load Times
- [ ] Home page loads in <3 seconds
- [ ] Subsequent pages load quickly
- [ ] Images load progressively
- [ ] No blocking resources

### Optimization
- [ ] Images are optimized
- [ ] CSS is minified (automatic in build)
- [ ] JavaScript is minified (automatic in build)
- [ ] No unused dependencies
- [ ] Bundle size is reasonable

### Lighthouse Scores (Target: 90+)
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

**Run Lighthouse**:
1. Open DevTools
2. Go to Lighthouse tab
3. Generate report
4. Review and address issues

## 🖥️ Browser Compatibility

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)
- [ ] Samsung Internet (if available)

## 🐛 Error Handling

- [ ] 404 page exists and works (if custom 404 added)
- [ ] Error boundaries work (if added)
- [ ] Broken links show appropriate errors
- [ ] Invalid blog slugs show "Not Found" message
- [ ] No console errors on any page

## 📚 Documentation

- [ ] README.md is complete and accurate
- [ ] NEXT_AGENT_GUIDE.md is present
- [ ] ASSETS.md lists all images
- [ ] QA.md (this file) is complete
- [ ] Code comments are present where needed
- [ ] NEXT_AGENT_NOTE comments are in place

## 🚀 Pre-Deployment

### Configuration
- [ ] Environment variables are set (if needed)
- [ ] Sitemap URLs updated with production domain
- [ ] Robots.txt updated with production domain
- [ ] JSON-LD schema updated with real data
- [ ] Next.js config is correct for deployment
- [ ] Package.json scripts are correct

### Content
- [ ] All placeholder content replaced
- [ ] Contact details are final
- [ ] Business information is accurate
- [ ] Legal pages added (if required)
- [ ] Privacy policy added (if collecting data)

### Final Checks
- [ ] Git repository is clean
- [ ] No sensitive data in code
- [ ] No API keys in client code
- [ ] Environment variables properly configured
- [ ] Build passes without warnings

## 🎯 Deployment Checklist

### Vercel
- [ ] Project connected to Git repository
- [ ] Build settings are correct
- [ ] Environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] Deploy preview works
- [ ] Production deploy successful

### Netlify
- [ ] Repository connected
- [ ] Build command: `npm run build`
- [ ] Publish directory: `out`
- [ ] Environment variables set
- [ ] Custom domain configured (if applicable)
- [ ] Deploy successful

### Post-Deployment
- [ ] Production site loads correctly
- [ ] All pages are accessible
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain works (if configured)
- [ ] Analytics tracking works (if added)
- [ ] Forms work (if backend connected)

## 📊 Testing Checklist Summary

**Critical** (Must fix before launch):
- [ ] Build completes successfully
- [ ] All pages load without errors
- [ ] Mobile responsive design works
- [ ] Contact information is correct
- [ ] WhatsApp links work
- [ ] Images load correctly

**Important** (Should fix before launch):
- [ ] Lighthouse scores >90
- [ ] SEO meta tags complete
- [ ] Accessibility compliant
- [ ] Browser compatibility verified
- [ ] All placeholder images replaced

**Nice to Have** (Can fix post-launch):
- [ ] Animation polish
- [ ] Performance optimizations
- [ ] Additional content
- [ ] Enhanced features

---

## 🔄 Regular Maintenance

After launch, review quarterly:
- [ ] Update dependencies (`npm update`)
- [ ] Check for security vulnerabilities (`npm audit`)
- [ ] Review and update content
- [ ] Check broken links
- [ ] Review analytics
- [ ] Update blog content

---

**Last QA Run**: _[Date]_
**Tested By**: _[Name]_
**Status**: ⚠️ In Development
**Ready for Production**: ❌ No / ✅ Yes
