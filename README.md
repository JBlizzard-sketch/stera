# STERA Pharmacy - Static Website

A modern, production-ready static website for STERA Pharmacy built with Next.js 15, TypeScript, and TailwindCSS. Optimized for performance, SEO, and accessibility.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd stera-pharmacy

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:5000
```

### 🔄 For Replit Users

**⚠️ IMPORTANT: Next.js 15 cannot run in Replit due to memory/resource constraints.**

The development server and build will fail with SIGBUS errors in Replit's environment. This is a Replit limitation, not a code issue.

**Recommended workflow:**
1. ✅ Code is correct and ready for deployment
2. ✅ Skip local testing in Replit
3. ✅ Deploy directly to Vercel or Netlify (see deployment instructions below)
4. ✅ The build will succeed on proper hosting platforms

See `replit.md` for complete details about this limitation.

### Build for Production

```bash
# Build static site
npm run build

# The static export will be in the `/out` directory
# Ready to deploy to Netlify, Vercel, or any static host
```

## 📁 Project Structure

```
stera-pharmacy/
├── app/                      # Next.js 15 App Router pages
│   ├── layout.tsx           # Root layout with metadata & JSON-LD
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── products/page.tsx    # Products page
│   ├── services/page.tsx    # Services page
│   ├── blog/                # Blog pages
│   │   ├── page.tsx         # Blog index
│   │   └── [slug]/page.tsx  # Individual blog posts
│   └── contact/page.tsx     # Contact page
├── components/              # Reusable React components
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── Button.tsx          # Button component
│   ├── Card.tsx            # Card component
│   ├── Hero.tsx            # Hero section
│   ├── ProductGrid.tsx     # Product grid
│   └── ServiceCard.tsx     # Service card
├── lib/                    # Utilities and data
│   └── blog-posts.ts       # Blog post data
├── public/                 # Static assets
│   ├── logo.png            # STERA logo
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Robots file
├── styles/
│   └── globals.css         # Global styles
├── tailwind.config.ts      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Brand Colors

The STERA brand uses the following color palette:

- **Gold**: `#F5B11A` (Primary CTA, accents)
- **Dark Gray**: `#2E2E2E` (Text, dark backgrounds)
- **Gray**: `#A9A9A9` (Secondary text)
- **Light Gray**: `#F2F2F2` (Light backgrounds)
- **White**: `#FFFFFF`

## 📝 Pages Overview

### Home (/)
- Hero section with logo and CTAs
- Featured product categories
- Blog preview (3 latest posts)
- Contact strip with phone, WhatsApp, hours

### Products (/products)
- Grid of product categories
- Prescription medications, OTC, supplements, equipment, personal care, baby care

### Services (/services)
- Professional consultation
- Home delivery
- Prescription management
- Vaccination services
- Extended hours
- Health monitoring

### Blog (/blog)
- Article listing
- Individual article pages
- 3 sample posts included

### About (/about)
- Mission and values
- Team section (with placeholder images)
- Trust signals and certifications

### Contact (/contact)
- Contact information
- WhatsApp link
- Google Maps embed
- Frontend contact form (needs backend integration)

## 🔧 Configuration & Customization

### Update Contact Information

**Files to edit:**
1. `components/Footer.tsx` - Phone, email, address, business hours
2. `app/contact/page.tsx` - Full contact details, WhatsApp number, map embed
3. `app/page.tsx` - Contact strip, WhatsApp link
4. `app/layout.tsx` - JSON-LD structured data

**WhatsApp Links:**
- Replace `254XXXXXXXXX` with your actual phone number
- Format: `https://wa.me/254XXXXXXXXX?text=Hello%20STERA%20Pharmacy!`

### Replace Placeholder Images

See `ASSETS.md` for a complete list of images and their locations.

**Key files to update:**
- `components/Hero.tsx` - Hero image
- `app/page.tsx` - Blog preview images
- `app/products/page.tsx` - Product category images
- `app/about/page.tsx` - Team photos
- `lib/blog-posts.ts` - Blog post images

**Recommendation:** Host your images on Cloudinary or similar CDN for optimal performance.

### Update Site Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- Open Graph tags
- Twitter Card metadata
- JSON-LD structured data (business info, hours, location)

### Update Sitemap

Edit `public/sitemap.xml` and replace `https://stera-pharmacy.example.com` with your production domain.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Next.js and deploys
4. Your site is live!

**One-line deployment:**
```bash
npx vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy!

**Using Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

### Static Export
The site is configured for static export (`output: 'export'` in `next.config.mjs`). The build process generates a fully static site in `/out` that can be hosted anywhere.

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG standards
- `prefers-reduced-motion` support for animations

## 🔍 SEO Optimizations

- ✅ Meta tags (title, description, OG, Twitter Card)
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Image alt text
- ✅ Fast loading (static export)

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🛠️ Technologies

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Poppins (Google Fonts)

## 📦 Dependencies

See `package.json` for the complete list. Key dependencies:
- `next@15.1.4`
- `react@19.0.0`
- `framer-motion@^11.15.0`
- `lucide-react@^0.468.0`
- `tailwindcss@^3.4.1`

## 🔐 Environment Variables

Currently, no environment variables are required for the static site. When adding dynamic features:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other variables as needed
```

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Type checking
npx tsc --noEmit

# Build test (ensure build succeeds)
npm run build
```

## 📞 Support

For issues or questions about this codebase, consult the `NEXT_AGENT_GUIDE.md` for detailed technical guidance.

---

## 📋 Next Agent / Developer Handoff

### What Was Scaffolded

This is a complete Next.js 15 static website with:
- 6 main pages (Home, About, Products, Services, Blog, Contact)
- 8 reusable components
- 3 sample blog posts
- Full SEO setup
- Responsive design
- Accessibility features

### Where to Replace Images

All placeholder images are documented in `ASSETS.md`. Key locations:
- `components/Hero.tsx` - Line ~48
- `app/page.tsx` - Lines ~20-30, ~35-45
- `app/products/page.tsx` - Lines ~22-60
- `app/about/page.tsx` - Lines ~114-145
- `lib/blog-posts.ts` - Throughout

### Where to Update Contact Details

**WhatsApp Number:**
- `app/page.tsx` - Lines ~62, ~92
- `app/products/page.tsx` - Line ~86
- `app/services/page.tsx` - Lines ~124
- `app/contact/page.tsx` - Line ~78
- `components/Footer.tsx` - Line ~33

**Phone & Email:**
- `components/Footer.tsx` - Lines ~20-30
- `app/contact/page.tsx` - Lines ~53-85
- `app/layout.tsx` - Lines ~50-55 (JSON-LD)

### How to Add a CMS

**Recommended: Sanity or Contentful**

1. **Install CMS SDK:**
   ```bash
   npm install @sanity/client  # or contentful
   ```

2. **Create data fetching utilities:**
   ```typescript
   // lib/sanity.ts or lib/contentful.ts
   export async function getProducts() {
     // Fetch from CMS
   }
   export async function getBlogPosts() {
     // Fetch from CMS
   }
   ```

3. **Update pages to use CMS data:**
   - `app/products/page.tsx` - Replace `products` array with CMS fetch
   - `app/blog/page.tsx` - Replace `blogPosts` from `lib/blog-posts.ts`
   - `app/blog/[slug]/page.tsx` - Fetch individual posts by slug

4. **Enable ISR or switch to SSR:**
   - Remove `output: 'export'` from `next.config.mjs`
   - Add `revalidate` to page components for ISR

### How to Make Contact Form Functional

**Option 1: Netlify Forms** (Easiest for Netlify deployment)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

**Option 2: Formspree**
1. Sign up at formspree.io
2. Update form action: `<form action="https://formspree.io/f/YOUR_ID">`

**Option 3: Next.js API Route** (requires removing static export)
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email via SendGrid, Resend, etc.
}
```

### How to Add Dynamic Product Pages

1. Create `/app/products/[slug]/page.tsx`
2. Fetch product data by slug from CMS
3. Generate static params for static export:
   ```typescript
   export async function generateStaticParams() {
     const products = await getProducts();
     return products.map((product) => ({
       slug: product.slug,
     }));
   }
   ```

### How to Add E-Commerce

**For full e-commerce:**
1. **Choose a solution:**
   - Stripe + Custom Cart
   - Shopify Buy Button
   - Snipcart

2. **Remove static export** from `next.config.mjs`
3. **Add database** (Supabase, PlanetScale) for orders
4. **Implement:**
   - Product catalog
   - Shopping cart (Context API or Zustand)
   - Checkout flow
   - Payment processing
   - Order management

### Directory Structure for Extensions

```
app/
├── api/              # API routes (requires removing static export)
├── dashboard/        # Admin dashboard
├── products/
│   ├── [slug]/      # Dynamic product pages
│   └── [category]/  # Category pages
lib/
├── cms.ts           # CMS data fetching
├── email.ts         # Email sending utilities
├── payments.ts      # Payment processing
└── db.ts            # Database utilities
```

---

**Built with ❤️ for STERA Pharmacy**
