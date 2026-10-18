export interface Client {
  name: string;
  slug: string;
  logo: string | null; // Path under /public, or null to render the name as text
}

export const clients: Client[] = [
  { name: "Moonton", slug: "moonton", logo: "/images/clients/moonton.svg" },
  { name: "Honor of Kings", slug: "honor-of-kings", logo: "/images/clients/honor-of-kings.png" },
  { name: "PUBG Mobile", slug: "pubg-mobile", logo: null }, // TODO: no current PUBG MOBILE logo with transparent background found (only a 240px app icon)
  { name: "OPPO", slug: "oppo", logo: "/images/clients/oppo.svg" },
  { name: "Infinix", slug: "infinix", logo: "/images/clients/infinix.svg" },
  { name: "Jollibee", slug: "jollibee", logo: "/images/clients/jollibee.svg" },
  { name: "Milo", slug: "milo", logo: null }, // TODO: official MILO logo is a badge that merges into a blob when silhouetted
  { name: "Alorica", slug: "alorica", logo: "/images/clients/alorica.svg" },
  { name: "Gokongwei Group", slug: "gokongwei", logo: null }, // TODO: no trustworthy official file found
  { name: "Verizon", slug: "verizon", logo: "/images/clients/verizon.svg" },
  { name: "JCI", slug: "jci", logo: "/images/clients/jci.svg" },
  { name: "ONIC Esports", slug: "onic", logo: null }, // TODO: only an icon-only, fair-use mark was found; needs an official wordmark
];
