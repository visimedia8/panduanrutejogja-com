import { getCollection } from 'astro:content';
import { getLineBadge } from './lines';

export interface HalteRouteItem {
  slug: string;
  title: string;
  lineCode: string;
  lineBg: string;
  lineText: string;
}

export interface HalteIndexItem {
  name: string;
  location?: string;
  transit?: string;
  routes: HalteRouteItem[];
}

export async function getHalteIndex(): Promise<HalteIndexItem[]> {
  const allPanduan = await getCollection('panduan');
  const halteMap = new Map<string, HalteIndexItem>();

  for (const article of allPanduan) {
    const haltes = article.data.halteList || [];
    const badge = getLineBadge(article.data.title, article.data.category);

    for (const h of haltes) {
      if (!h.name) continue;
      const normalizedKey = h.name.trim().toLowerCase();
      
      const routeInfo: HalteRouteItem = {
        slug: article.slug,
        title: article.data.title,
        lineCode: badge.code,
        lineBg: badge.bg,
        lineText: badge.text
      };

      if (!halteMap.has(normalizedKey)) {
        halteMap.set(normalizedKey, {
          name: h.name.trim(),
          location: h.location?.trim() || undefined,
          transit: h.transit?.trim() || undefined,
          routes: [routeInfo]
        });
      } else {
        const existing = halteMap.get(normalizedKey)!;
        // Avoid duplicate route slug for the same halte
        if (!existing.routes.some(r => r.slug === routeInfo.slug)) {
          existing.routes.push(routeInfo);
        }
        if (!existing.location && h.location) {
          existing.location = h.location.trim();
        }
        if (!existing.transit && h.transit) {
          existing.transit = h.transit.trim();
        }
      }
    }
  }

  // Return sorted alphabetically by halte name
  return Array.from(halteMap.values()).sort((a, b) => a.name.localeCompare(b.name, 'id'));
}
