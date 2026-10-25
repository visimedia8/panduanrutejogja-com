export interface LineBadge {
  code: string;
  bg: string;
  text: string;
  label: string;
  categorySlug: 'trans-jogja' | 'kereta-bandara' | 'tiket-wisata';
}

export const LINE_ORDER = [
  '1A',
  '2A',
  '3A',
  '4A/B',
  '5A/B',
  'KRL',
  'YIA',
  'PRM',
  'DAMRI',
  'TB'
] as const;

export type LineCode = typeof LINE_ORDER[number];

export const LINES: Record<string, LineBadge> = {
  '1A': {
    code: '1A',
    bg: 'bg-transit-tj',
    text: 'text-white',
    label: 'Trans Jogja 1A',
    categorySlug: 'trans-jogja'
  },
  '2A': {
    code: '2A',
    bg: 'bg-transit-tj',
    text: 'text-white',
    label: 'Trans Jogja 2A',
    categorySlug: 'trans-jogja'
  },
  '3A': {
    code: '3A',
    bg: 'bg-transit-tj',
    text: 'text-white',
    label: 'Trans Jogja 3A',
    categorySlug: 'trans-jogja'
  },
  '4A/B': {
    code: '4A/B',
    bg: 'bg-transit-ringroad',
    text: 'text-white',
    label: 'Ring Road 4',
    categorySlug: 'trans-jogja'
  },
  '5A/B': {
    code: '5A/B',
    bg: 'bg-transit-ringroad',
    text: 'text-white',
    label: 'Ring Road 5',
    categorySlug: 'trans-jogja'
  },
  'KRL': {
    code: 'KRL',
    bg: 'bg-transit-krl',
    text: 'text-white',
    label: 'KRL Commuter',
    categorySlug: 'kereta-bandara'
  },
  'YIA': {
    code: 'YIA',
    bg: 'bg-transit-yia',
    text: 'text-white',
    label: 'Kereta Bandara',
    categorySlug: 'kereta-bandara'
  },
  'PRM': {
    code: 'PRM',
    bg: 'bg-transit-prameks',
    text: 'text-white',
    label: 'KA Prameks',
    categorySlug: 'kereta-bandara'
  },
  'DAMRI': {
    code: 'DAMRI',
    bg: 'bg-transit-damri',
    text: 'text-white',
    label: 'Bus DAMRI',
    categorySlug: 'kereta-bandara'
  },
  'TB': {
    code: 'TB',
    bg: 'bg-transit-tb',
    text: 'text-white',
    label: 'Teman Bus',
    categorySlug: 'trans-jogja'
  },
  'TJ': {
    code: 'TJ',
    bg: 'bg-keraton-800',
    text: 'text-jogja-300',
    label: 'Transit Jogja',
    categorySlug: 'trans-jogja'
  }
};

export function getLineBadge(title: string, category?: string): LineBadge {
  const t = title.toUpperCase();
  if (t.includes('1A')) return LINES['1A'];
  if (t.includes('2A')) return LINES['2A'];
  if (t.includes('3A')) return LINES['3A'];
  if (t.includes('4A') || t.includes('4B')) return LINES['4A/B'];
  if (t.includes('5A') || t.includes('5B')) return LINES['5A/B'];
  if (t.includes('KRL') || t.includes('COMMUTER')) return LINES['KRL'];
  if (t.includes('BANDARA') || t.includes('YIA')) return LINES['YIA'];
  if (t.includes('PRAMEKS')) return LINES['PRM'];
  if (t.includes('DAMRI')) return LINES['DAMRI'];
  if (t.includes('TEMAN BUS') || t.includes('PERINTIS')) return LINES['TB'];

  if (category === 'kereta-bandara') {
    return {
      code: 'KA',
      bg: 'bg-transit-yia',
      text: 'text-white',
      label: 'Kereta Bandara',
      categorySlug: 'kereta-bandara'
    };
  }

  if (category === 'tiket-wisata') {
    return {
      code: 'TIK',
      bg: 'bg-keraton-800',
      text: 'text-jogja-300',
      label: 'Tiket & Wisata',
      categorySlug: 'tiket-wisata'
    };
  }

  return LINES['TJ'];
}

export function getArticleLine(entry: { data: { title: string; category: string } }): LineBadge {
  return getLineBadge(entry.data.title, entry.data.category);
}
