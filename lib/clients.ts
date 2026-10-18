export interface Client {
  name: string;
  slug: string;
  logo: string | null; // Path under /public, or null to render the name as text
}

export const clients: Client[] = [
  { name: "Moonton", slug: "moonton", logo: "/images/clients/moonton.svg" },
  { name: "OPPO", slug: "oppo", logo: "/images/clients/oppo.svg" },
  { name: "realme", slug: "realme", logo: "/images/clients/realme.svg" },
  { name: "Infinix", slug: "infinix", logo: "/images/clients/infinix.svg" },
  { name: "vivo", slug: "vivo", logo: "/images/clients/vivo.svg" },
  { name: "Alorica", slug: "alorica", logo: "/images/clients/alorica.svg" },
  { name: "Globe", slug: "globe", logo: "/images/clients/globe.svg" },
  { name: "ABS-CBN", slug: "abs-cbn", logo: null }, // TODO: needs a one-colour logo; the stacked ring mark merges into a blob when silhouetted
  { name: "GCash", slug: "gcash", logo: "/images/clients/gcash.svg" },
];
