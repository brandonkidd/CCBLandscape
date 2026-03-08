# CCB Landscape: Hybrid Done Right

## Mission
Build a website that is:
- ✅ **Pretty** - Framer's professional design
- ✅ **Technical** - Full SEO stack (schema, tables, FAQ)  
- ✅ **Automated** - Easy to update and maintain
- ✅ **Identical** - Framer marketing pages = Next.js SEO pages visually

## The Problem We Solved
**Attempt 1:** Deploy to Framer via API → Rate limits, formatting issues
**Attempt 2:** Manually recreate Framer design in Next.js → Failed to match visual quality
**Solution:** Export Framer's actual React components → Use in Next.js

## Architecture

### Framer Marketing Pages (6 pages)
- Home
- About
- Services Overview
- Projects
- Testimonials
- Contact

**Purpose:** Beautiful, conversion-focused marketing
**Built in:** Framer visual editor (drag & drop)

### Next.js SEO Engine (177 pages)
- 8 service detail pages
- 18 city pages
- 144 service+city combination pages
- All other programmatic SEO content

**Purpose:** Rank for every possible search term
**Built with:** Framer's exported components + SEO content

## Technical Implementation

### Phase 1: Export Framer Components
**What we need from Framer:**
1. Hero component (full-screen background, overlay, text, buttons)
2. Card component (service cards, feature cards)
3. Grid layout component
4. Navigation component
5. Footer component
6. Stats/metrics component

**Export method:**
- Framer Code Export (if available)
- Component Library export
- Manual code extraction from published site

### Phase 2: Integrate into Next.js
**File structure:**
```
/components/framer/
  ├── Hero.jsx          (exported from Framer)
  ├── ServiceCard.jsx   (exported from Framer)
  ├── GridLayout.jsx    (exported from Framer)
  ├── Navigation.jsx    (exported from Framer)
  └── Footer.jsx        (exported from Framer)
```

### Phase 3: Build SEO Pages
**Template for all 177 pages:**
```jsx
import { Hero } from '@/components/framer/Hero'
import { ServiceCard } from '@/components/framer/ServiceCard'
import { GridLayout } from '@/components/framer/GridLayout'

export default function ServicePage({ service, city }) {
  return (
    <>
      <Hero 
        title={`${service.name} in ${city.name}`}
        subtitle="Professional commercial landscape maintenance"
        backgroundImage="/images/hero-landscape.jpg"
      />
      
      <GridLayout>
        {/* SEO content with schema markup */}
        <MainContent service={service} city={city} />
        
        {/* FAQ schema */}
        <FAQ questions={service.faqs} />
        
        {/* Comparison tables */}
        <ComparisonTable data={service.pricing} />
        
        {/* Related services */}
        <ServiceCards services={relatedServices} />
      </GridLayout>
    </>
  )
}
```

### Phase 4: SEO Technical Stack
**Every page includes:**
- ✅ Schema.org markup (LocalBusiness, Service, FAQ)
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Structured data (JSON-LD)
- ✅ Comparison tables
- ✅ FAQ sections
- ✅ Internal linking
- ✅ Breadcrumbs
- ✅ Sitemap inclusion

## Visual Consistency
**Same components everywhere:**
- Framer marketing pages use: Framer editor
- Next.js SEO pages use: Exported Framer components

**Result:** Visitor cannot tell the difference between Framer and Next.js pages.

## Domain Setup
```
ccblandscape.com → Vercel (main host)
  ├── /              → Framer (homepage)
  ├── /about         → Framer  
  ├── /contact       → Framer
  ├── /projects      → Framer
  ├── /blog          → Framer
  └── /services/*    → Next.js (177 SEO pages)
      ├── /services/commercial-landscape-maintenance
      ├── /services/commercial-landscape-maintenance/yorba-linda
      └── ... (175 more pages)
```

**Technical implementation:**
```javascript
// vercel.json
{
  "rewrites": [
    { "source": "/", "destination": "https://precious-variations-468600.framer.app/" },
    { "source": "/about", "destination": "https://precious-variations-468600.framer.app/about" },
    { "source": "/contact", "destination": "https://precious-variations-468600.framer.app/contact" },
    { "source": "/projects", "destination": "https://precious-variations-468600.framer.app/projects" },
    { "source": "/blog/:path*", "destination": "https://precious-variations-468600.framer.app/blog/:path*" }
  ]
}
```

## Maintenance & Updates
**To update design:**
1. Edit in Framer visual editor
2. Re-export components
3. Deploy to Next.js
4. Both Framer + Next.js pages updated

**To add content:**
1. Add to content files (services.js, cities.js)
2. Next.js auto-generates new pages
3. No manual page building

## Timeline
**One-time build:** 4-6 hours
- Export components: 1 hour
- Integration: 2 hours  
- Testing: 1 hour
- Deployment: 1 hour
- Final review: 1 hour

**Result:** Built once, maintained easily forever

## Success Criteria
✅ All pages visually identical (Framer design)
✅ 177 SEO pages ranking for target keywords
✅ Full schema markup on every page
✅ Fast loading (Next.js static export)
✅ Easy to update (component-based)
✅ Scalable (add more pages easily)

## Next Steps
1. Export Framer components
2. Integrate into Next.js
3. Build first page as proof of concept
4. Brandon reviews
5. Deploy all 177 pages
6. Connect domain
7. Go live
