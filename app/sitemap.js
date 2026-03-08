import { services, cities } from '@/lib/data'

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://ccblandscape.com';
  
  // Static pages
  const routes = [
    '',
    '/services',
    '/locations',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.9,
  }));

  // Service pages
  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Location pages
  const locationRoutes = cities.map(city => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Service+City combo pages (THE MONEY PAGES)
  const comboRoutes = [];
  services.forEach(service => {
    cities.forEach(city => {
      comboRoutes.push({
        url: `${baseUrl}/services/${service.slug}/${city.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...routes, ...serviceRoutes, ...locationRoutes, ...comboRoutes];
}
