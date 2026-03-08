# CCB Landscape - Next.js SEO Engine

## Overview
Programmatic SEO website generating **177 static pages** from templates + data:
- 8 service pages
- 18 location pages
- 144 service+city combo pages (targeting keywords like "commercial landscape maintenance Yorba Linda")
- Automatic sitemap, schema markup, internal linking

## Tech Stack
- Next.js 15 (App Router, Static Export)
- Tailwind CSS
- Zero runtime dependencies - pure static HTML

## Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Build & Deploy
```bash
npm run build
# Output: /out directory with all 177 static pages
```

## Deploy to Vercel

### Option A: GitHub → Vercel (Recommended)
1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial CCB Next.js SEO engine"
git remote add origin https://github.com/YOUR_USERNAME/ccb-landscape.git
git push -u origin main
```

2. Connect to Vercel:
   - Go to vercel.com
   - Import repository
   - Deploy (auto-detects Next.js)

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Custom Domain Setup
1. In Vercel dashboard → Settings → Domains
2. Add: ccblandscape.com
3. Update DNS as instructed

## Hybrid Setup (with Framer)
To integrate with Framer marketing pages (`/`, `/about`, `/contact`):

1. Deploy this Next.js site to Vercel first
2. Get the Vercel URL (e.g., ccb-landscape.vercel.app)
3. Add `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/",
      "destination": "https://your-framer-site.framer.website/"
    },
    {
      "source": "/about",
      "destination": "https://your-framer-site.framer.website/about"
    },
    {
      "source": "/contact",
      "destination": "https://your-framer-site.framer.website/contact"
    }
  ]
}
```

This routes marketing pages to Framer while keeping SEO pages in Next.js.

## Adding Cities/Services

### Add a City
Edit `lib/data.js`:
```javascript
cities.push({
  slug: "new-city",
  name: "New City",
  county: "Orange County",
  region: "North Orange County",
  zip: "92XXX",
  description: "...",
  landmarks: "...",
  propertyTypes: "...",
  waterDistrict: "..."
});
```
Rebuild → **8 new pages** auto-generate (1 city page + 8 service/city combos)

### Add a Service
Edit `lib/data.js`:
```javascript
services.push({
  slug: "new-service",
  name: "New Service",
  shortName: "Service",
  icon: "🌿",
  heroDescription: "...",
  description: "...",
  features: ["...", "..."],
  seoKeywords: ["...", "..."]
});
```
Rebuild → **19 new pages** auto-generate (1 service page + 18 service/city combos)

## SEO Features
✅ Unique title/meta per page
✅ JSON-LD schema (Service, FAQ, LocalBusiness)
✅ Auto-generated sitemap.xml
✅ robots.txt
✅ Breadcrumb navigation
✅ Internal linking grid (services ↔ cities)
✅ FAQ sections with schema
✅ Static HTML (fast Core Web Vitals)

## File Structure
```
app/
├── layout.js                     # Root layout with org schema
├── services/
│   ├── page.js                   # Services index
│   └── [serviceSlug]/
│       ├── page.js               # Service detail (x8)
│       └── [citySlug]/
│           └── page.js           # Service+City combo (x144) ← THE MONEY PAGES
├── locations/
│   ├── page.js                   # Locations index
│   └── [citySlug]/
│       └── page.js               # City detail (x18)
├── sitemap.js                    # Auto-generated sitemap
└── robots.js                     # robots.txt

lib/
└── data.js                       # THE ENGINE - all data lives here

components/
├── Header.js
└── Footer.js
```

## Page Count
- Static pages: 3 (services index, locations index, not-found)
- Service pages: 8
- Location pages: 18
- Service+City combos: 144
- **Total: 177 pages**

## Performance
All pages pre-rendered at build time:
- No database queries
- No API calls
- Pure static HTML
- Perfect Lighthouse scores

## Support
Brandon Kidd | Noble House Agency
# Force rebuild Sat Mar  7 23:21:28 PST 2026
