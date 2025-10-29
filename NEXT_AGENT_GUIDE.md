# Next Agent / Developer Guide

This document provides technical guidance for future developers or AI agents working on the STERA Pharmacy website.

## 🏗️ Architecture Overview

### Framework Choice: Next.js 15 App Router
- **Static Export Mode**: `output: 'export'` in `next.config.mjs`
- **Why**: No backend required, deploys to any static host, maximum performance
- **Trade-off**: No server-side features (API routes, ISR, SSR)

### Component Architecture
- **Atomic Design**: Small, reusable components in `/components`
- **Page Components**: In `/app` directory using App Router
- **Client Components**: Marked with `"use client"` for interactivity (Framer Motion, useState, etc.)
- **Server Components**: Default for static content

### Data Flow
- Currently: Static data in component files and `lib/blog-posts.ts`
- Future: Replace with CMS calls (see CMS Integration section)

## 📂 File Organization

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (metadata, fonts, providers)
│   ├── page.tsx           # Home page
│   ├── [feature]/         # Feature pages (about, products, etc.)
│   └── [feature]/[slug]/  # Dynamic routes (blog posts)
├── components/            # Reusable UI components
│   ├── *Card.tsx         # Presentational components
│   └── Navbar.tsx        # Layout components
├── lib/                  # Utilities, data, helpers
│   └── blog-posts.ts     # Blog data (replace with CMS)
├── public/               # Static assets
├── styles/               # Global styles
└── [config files]        # next.config.mjs, tailwind.config.ts, etc.
```

## 🔧 Key Technical Decisions

### 1. Static vs. Dynamic
**Current**: Fully static (SSG)
- All pages pre-rendered at build time
- Fast, cacheable, works without JavaScript
- No dynamic data fetching

**To Make Dynamic**:
1. Remove `output: 'export'` from `next.config.mjs`
2. Add data fetching to pages:
   ```typescript
   // This enables ISR
   export const revalidate = 60; // Revalidate every 60 seconds
   
   async function getData() {
     const res = await fetch('https://api.example.com/data', {
       next: { revalidate: 60 }
     });
     return res.json();
   }
   ```

### 2. Image Handling
**Current**: External URLs (Unsplash/Pexels)
- Uses Next.js `<Image>` with `unoptimized: true` (required for static export)
- `remotePatterns` configured for image CDNs

**To Use Next.js Image Optimization**:
1. Remove `output: 'export'`
2. Remove `unoptimized: true` from next.config.mjs
3. Deploy to Vercel or add custom image loader

**Best Practice for Production**:
```typescript
// Upload images to Cloudinary or similar
const CLOUDINARY_URL = 'https://res.cloudinary.com/your-account/';

<Image 
  src={`${CLOUDINARY_URL}image/upload/v1234567890/photo.jpg`}
  alt="Description"
  width={800}
  height={600}
/>
```

### 3. Animations
**Library**: Framer Motion
- Lightweight, React-friendly
- Respects `prefers-reduced-motion`
- Used for: scroll animations, page transitions, hover effects

**To Disable**:
- Remove framer-motion from package.json
- Replace `<motion.div>` with `<div>`
- Remove animation props (`initial`, `animate`, `whileInView`)

### 4. Styling Approach
**TailwindCSS**: Utility-first CSS
- Custom theme in `tailwind.config.ts`
- Global styles in `app/globals.css`
- No CSS modules or styled-components

**Key Custom Classes**:
- `bg-steraGold`, `text-steraGray`, etc. (brand colors)
- `shadow-glow` (custom shadow)
- `bg-stera-gradient` (gradient background)

## 🔌 Integration Points

### CMS Integration (Sanity Example)

**1. Install Sanity**:
```bash
npm install @sanity/client @sanity/image-url
npm install -D @sanity/types
```

**2. Create Sanity client** (`lib/sanity.ts`):
```typescript
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getProducts() {
  return client.fetch(`*[_type == "product"]{ 
    name, slug, description, image 
  }`);
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc){
    title, slug, excerpt, mainImage, publishedAt
  }`);
}
```

**3. Update pages** (`app/products/page.tsx`):
```typescript
import { getProducts } from '@/lib/sanity';

export default async function ProductsPage() {
  const products = await getProducts(); // Server Component fetch
  
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

// Enable ISR
export const revalidate = 3600; // Revalidate every hour
```

**4. Dynamic routes** (`app/blog/[slug]/page.tsx`):
```typescript
import { client } from '@/lib/sanity';

// ⚠️ REQUIRED for static export: Must export generateStaticParams()
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`);
  return posts.map((post) => ({ slug: post.slug.current }));
}

// For current static implementation:
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
```

**Important**: When using `output: 'export'`, ALL dynamic routes must have generateStaticParams(). Without it, the build will fail.

### Form Handling

#### Option A: Serverless Function (Vercel/Netlify)
```typescript
// app/api/contact/route.ts (requires removing static export)
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    await resend.emails.send({
      from: 'contact@stera-pharmacy.co.ke',
      to: 'info@stera-pharmacy.co.ke',
      subject: `Contact Form: ${name}`,
      html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

#### Option B: Web3Forms (Static-friendly)
```typescript
// app/contact/page.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      ...formData,
    }),
  });
  // Handle response
};
```

### E-Commerce Integration

#### Stripe Payment Flow
```bash
npm install @stripe/stripe-js stripe
```

```typescript
// lib/stripe.ts
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY!
);

// app/api/checkout/route.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { items } = await request.json();
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items,
    mode: 'payment',
    success_url: `${request.headers.get('origin')}/success`,
    cancel_url: `${request.headers.get('origin')}/cart`,
  });
  
  return NextResponse.json({ id: session.id });
}
```

## 📋 Common Modifications

### Add a New Page

1. **Create page file**: `app/new-page/page.tsx`
```typescript
export default function NewPage() {
  return (
    <div className="pt-20">
      <h1>New Page</h1>
    </div>
  );
}
```

2. **Add to navigation**: Update `components/Navbar.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { href: "/new-page", label: "New Page" },
];
```

3. **Add to sitemap**: Update `public/sitemap.xml`

### Add a New Component

1. **Create component**: `components/NewComponent.tsx`
```typescript
/**
 * NewComponent
 * Purpose and props description
 * 
 * Props:
 * - prop1: type - description
 */

interface NewComponentProps {
  prop1: string;
}

export default function NewComponent({ prop1 }: NewComponentProps) {
  return <div>{prop1}</div>;
}
```

2. **Import and use**:
```typescript
import NewComponent from '@/components/NewComponent';

<NewComponent prop1="value" />
```

### Update Brand Colors

1. **Edit**: `tailwind.config.ts`
```typescript
colors: {
  steraGold: "#NEW_COLOR",
  // ...
},
```

2. **Rebuild**: Tailwind will regenerate CSS
3. **No code changes needed**: All components use Tailwind classes

## 🐛 Debugging

### Common Issues

**Issue**: `Error: Cannot find module 'next'`
- **Fix**: Run `npm install`

**Issue**: `Error: Page "/blog/[slug]" is missing "generateStaticParams()"`
- **Cause**: Dynamic routes require generateStaticParams() with `output: 'export'`
- **Fix**: Add generateStaticParams() function to the page:
  ```typescript
  export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
  }
  ```
- **Note**: This issue was fixed on October 28, 2025 in `app/blog/[slug]/page.tsx`

**Issue**: Images not loading
- **Fix**: Check `remotePatterns` in `next.config.mjs`
- **Fix**: Ensure image URLs are accessible

**Issue**: `Error: `output: export` does not work with...`
- **Fix**: Feature requires server. Remove `output: 'export'` to use it

**Issue**: Hydration errors
- **Fix**: Ensure server and client render the same HTML
- **Fix**: Move dynamic content to `useEffect` or client components

**Issue**: Replit development server won't start
- **Fix**: Configure workflow with `npm run dev` on port 5000
- **Fix**: Ensure server binds to 0.0.0.0:5000 (already configured in package.json)

### Development Tools

**ESLint**:
```bash
npm run lint
```

**Type Checking**:
```bash
npx tsc --noEmit
```

**Build Test**:
```bash
npm run build
# Check for build errors
```

## 🚀 Performance Optimization

### Current Optimizations
- ✅ Static generation
- ✅ Image lazy loading
- ✅ Code splitting (automatic)
- ✅ Minification (automatic)

### Further Optimizations
1. **Add analytics**: Vercel Analytics, Google Analytics
2. **Compress images**: Use tools like TinyPNG before hosting
3. **Optimize fonts**: Use `next/font` for font optimization
4. **Add caching headers**: Configure in hosting provider

## 📦 Dependency Management

### Core Dependencies
- **next**: Framework
- **react**: UI library
- **framer-motion**: Animations
- **lucide-react**: Icons

**Updating**:
```bash
npm update
# or
npm install next@latest react@latest
```

**Security**:
```bash
npm audit
npm audit fix
```

## 🔒 Security Considerations

### Current Setup
- ✅ No sensitive data in client code
- ✅ Environment variables for secrets (when needed)
- ✅ Content Security Policy headers (configure in hosting)

### When Adding Backend
1. **Validate all inputs**
2. **Use environment variables** for API keys
3. **Enable CORS** properly
4. **Rate limit** API routes
5. **Sanitize** user-generated content

## 📊 Analytics & Monitoring

### Add Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Add Google Analytics
```typescript
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## 🧪 Testing

### Unit Testing (Jest + React Testing Library)
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### E2E Testing (Playwright)
```bash
npm install -D @playwright/test
npx playwright install
```

## 📝 Code Style Guidelines

### TypeScript
- **Always** define prop types with interfaces
- **Use** explicit return types for functions
- **Avoid** `any` type

### Components
- **One component** per file
- **Header comment** describing purpose and props
- **Export** component as default

### Naming
- **Components**: PascalCase (`ProductCard.tsx`)
- **Utilities**: camelCase (`getBlogPosts`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)

---

## 🆘 Need Help?

1. **Check README.md** for general usage
2. **Check ASSETS.md** for image locations
3. **Check QA.md** for testing checklist
4. **Search codebase** for similar implementations
5. **Review Next.js docs**: https://nextjs.org/docs

---

## 🔄 Replit-Specific Notes

### Fresh Agent Instance Setup

**When starting a new Replit agent session:**
1. ✅ Dependencies are already installed - DO NOT run npm install again
2. ✅ Node.js is already configured via Replit
3. ⚠️ You MUST set up workflow for development server
4. ⚠️ Development server is NOT running by default

### Workflow Configuration

**Development Server:**
- Command: `npm run dev`
- Port: 5000 (already configured in package.json)
- Output: webview
- Binds to: 0.0.0.0:5000 (Replit requirement)

**Build Command** (for testing):
- Command: `npm run build`
- Creates `/out` directory with static files

### Deployment from Replit

**To Vercel:**
```bash
npx vercel
```

**To Netlify:**
```bash
npm run build
npx netlify deploy --prod --dir=out
```

**Or use Git integration:**
1. Push to GitHub
2. Connect repo to Vercel/Netlify
3. Auto-deploy on push

---

**Last Updated**: October 28, 2025
**Next.js Version**: 15.1.4
**Node Version**: 18+
**Build Status**: ✅ Fixed (generateStaticParams added to blog pages)
