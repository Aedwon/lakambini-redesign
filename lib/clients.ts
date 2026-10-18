export interface Client {
  name: string;
  slug: string;
  logo: string | null; // Path under /public, or null to render the name as text
}

export const clients: Client[] = [
  { name: "Moonton", slug: "moonton", logo: null },
  { name: "OPPO", slug: "oppo", logo: null },
  { name: "realme", slug: "realme", logo: null },
  { name: "Infinix", slug: "infinix", logo: null },
  { name: "vivo", slug: "vivo", logo: null },
  { name: "Alorica", slug: "alorica", logo: null },
  { name: "Globe", slug: "globe", logo: null },
  { name: "ABS-CBN", slug: "abs-cbn", logo: null },
  { name: "GCash", slug: "gcash", logo: null },
];
