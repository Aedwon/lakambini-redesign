export interface DivisionData {
  id: string; // e.g., "01"
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  ctaHeadline: string;
  heroImage: string; // Used in individual page heroes
  cardImage: string; // Used in the DivisionsEditorial component originally
}

export const divisions: DivisionData[] = [
  {
    id: "01",
    slug: "tanghal",
    name: "TANGHAL",
    subtitle: "Live Entertainment & Talent",
    description: "Live events, concerts, music festivals, and artist management. We handle the stage so the talent can perform.",
    capabilities: ["Concerts", "Music Festivals", "Virtual Events", "Event Performances", "Talent Management"],
    ctaHeadline: "Have a show in mind? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1540039155732-d68875508a8e?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbv1OB_6Oj23D-XZv0lvjPKdm4BQ1eHFX4oUpX44-zkDmxm6KFpW64k-gm7peUFj6GdzNkKVZWu-n92kdjHDJvWYFWvp4PQnF2M82ybViOAwruZ_MwEtp5ZSGBsmLCp0sj0AGbei7YDjeJvRRLZ91I14HNLbXRrBEmDey9wY9SCB7RM3PiYl-UrSKQN1HmZsYHnsXesVqCmgFfjPeoP6ZeJPGdTr2rH3Y9EiOVghbKxt7qmRVuesm8mleR0t76bJng7kPyaD1yZw"
  },
  {
    id: "02",
    slug: "likha",
    name: "LIKHA",
    subtitle: "Multimedia Production",
    description: "End-to-end video production, motion graphics, and sound design — from brand campaigns and music videos to event coverage and commercial content.",
    capabilities: ["Video Production", "Music Videos", "Video Editing", "Motion Graphics", "Sound Design"],
    ctaHeadline: "Have a production in mind? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1601506521937-0130bf7c20c4?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk3X5pFAKmN_1Rk31CZjq-lEk_sir7NP4wfJj33ZPzmjWe-JiB2wmT2CEGhB_IddzsVHpqHG1BxFpXTIyvbJ4pKoCu_0ycU6KASBHDyhgH3CFiK0QhXKSeNQNDwZaq8Mxkq6KAOQTmqGIthLm0Rq8pdrKGkg38l5rFttUiSf2942uAvzZV4lWAfIm7dm1E8RLiEdZ7pAsjeUEeioLGQepZJhjgRi1x6hspiunI8LcCfiI7ujyKn5IQPFpyoNuiDSZoAoJYecdslA"
  },
  {
    id: "03",
    slug: "merkato",
    name: "MERKATO",
    subtitle: "Experiential Marketing",
    description: "Product sampling, pop-up activations, street teams, and guerrilla campaigns — direct-to-consumer marketing strategies that drive real engagement and move product.",
    capabilities: ["Product Sampling", "Pop-Up Shops", "Experiential Marketing", "Street Teams", "Guerrilla Marketing", "In-Store Demos"],
    ctaHeadline: "Planning an activation? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4IYflde-5uKG4_IdDA5sFMqbKLCdrctITGSYZU35Q4BhXnH-I2S1psPfJ1oAq5wsKTfLegW0vkBLZPs9EMM6J7KfqMotWB0WpiQ5qLM4na-RXhtUjFQxcHPjYvUDbUGPOghTV3z-7Hyp9BRdnCjdzN8_aKJMHkGsiVJh0xmI1H8fnqV8V-5IrcdArp3jbM0LpiznWBHH3r4lljx1H3b-X1FtM5RWHUSJBpWrunBai4VjDCohTd3At9cFJWbzB2__4Hqo4EGVyBw"
  },
  {
    id: "04",
    slug: "tipon",
    name: "TIPON",
    subtitle: "Event Production & Management",
    description: "Trade shows, sponsorship activations, fun runs, and mall events. Reliable logistics from load-in to strike.",
    capabilities: ["Trade Shows", "Conventions", "Company Events", "Mall Activations", "Live Streaming", "Outdoor Events"],
    ctaHeadline: "Have an event coming up? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0JQyRqRzmsdQgM9zFFVQO2MiQVAWuZ2HXcqQJlYaSQIPFubppg0tZEdLlprMhZ6elBZa2_rUUpDoO0TG5oE1xRGNqXe9Z8mHisWVa8aQGKiTN1qSKXMqpfhDMLAz8YxScwHwByckpCGi8eRQ7uM2DXHAm4nHR0iD0ionIJ4XUmSwl8ewlxytgjMyumz3BDTD2rXwC0QK9Iii--IifmI2rkF6tRXpjbQ_AcinDNkGHaLIf2-KAp0YChShrxUpZM8VO3K4LCCzdDQ"
  },
  {
    id: "05",
    slug: "sibol",
    name: "SIBOL",
    subtitle: "Learning & Development",
    description: "Corporate workshops, team-building programs, trainings, and conferences. Practical sessions your teams will actually use.",
    capabilities: ["Workshops", "Trainings", "Team Building", "Conferences", "Team Development"],
    ctaHeadline: "Planning a workshop or training? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwGoXmXtDTzSMsNY100PVeu86ZIRqp8UKZrTWPibWIZoWW1nY437fO6H7FJp2GYungB8gdbvU_hxMOTCJqyD9svCq6w1EelZIy-Qn9_NUxx0NLxJK1QXfCV2PR-AFEuQGP_Chq79EEaIqnlJX8nquoHIJOm3wxjQAdDHTP5dff_dES3llGTbntxLtry6UD4DRmm3YqMPSf1mbnbCYCweQEbif4Vp9ylXOfB6FefDyRzjHC5RQq9kSOT42Fiscp7pPeyF8Jg5k12A"
  },
  {
    id: "06",
    slug: "guhit",
    name: "GUHIT",
    subtitle: "Design & Visual Identity",
    description: "Graphic design, branding, out-of-home advertising, and illustration — building cohesive visual identities for brands, campaigns, and events alike.",
    capabilities: ["Graphic Design", "Logo Creation", "Branding", "Billboard Ads", "Illustration"],
    ctaHeadline: "Need a visual identity? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv0LWNdkItCApsrlddI8l3cjZhgBXE9NjxyWCxLFVQHMaIAhO0seLBPlBa3TpKnShjj8ZJEZkKr_NlAQUk2twoEmsZZO2fTRDycIlHlY4hX39jdVzChfmOZs2fb5tT72iUsRsdjHtah_aYXSjc6NMn-0OGEfLgPeDhIwgrXyCKSbuPvdL5DZBGCerKIU5-HEntwEaDvnphXFdZGtEzRGDN7OxLDzBMWKCja47n3pqqWlGg5Ok61cdLckK97goMQhW4wkATZQw-bA"
  },
  {
    id: "07",
    slug: "ugnay",
    name: "UGNAY",
    subtitle: "Community Management & Growth",
    description: "End-to-end community management, audience development, and influencer partnerships — building and retaining engaged digital communities across any platform.",
    capabilities: ["Community Management", "Audience Retention", "Grassroots Engagement", "Channel Moderation", "Influencer Seeding"],
    ctaHeadline: "Building a community? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4eiDfctMeJcVk7HYvs8UAhmIMJ67kILBLt0frvq8_F7QH4o4jF4eB5QtSZ4vazKyqHTy0V7duiw3zCsuHt_M8f8omwr3JA3kEYOdxCnfcwE9pEnhpoQOs6NdynD3wy8KgD5m_6GHBAJ8C2TAc94G3f-ErERsIyLtn4vMm-wZ3WxENNcdcPPWZDvwb6GDaMRjfFBrfjI82Cq5XltalzhJZo06eT89sR4QrPs5Wc8X7Lmizn-eAS_2L5PyOlFp29cHFpfAERr-8xw"
  },
  {
    id: "08",
    slug: "daloy",
    name: "DALOY",
    subtitle: "Technology & Development",
    description: "Full-stack web and mobile development, custom software solutions, and workflow automation — from business platforms and SaaS products to event-day applications.",
    capabilities: ["Web & Mobile Apps", "Custom Software", "Workflow Automation", "Analytics Dashboards", "Interactive Kiosks"],
    ctaHeadline: "Need custom tech for your next project? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzw4ZgmWsekGVodBLQvlhHSXj3NXu3sArxBpxrWulOgFKfL1KQXMd3FNG_6ttmzUeMnM60_XoDuqrC0vRVhf2c2wTgZYORPds7On4ArJkBj1JQYjjYxCEQiJiprq7Ve2FJZ0ege1kQ-x7Vg4Ckgq_2_a42URTOPCzasIVOJ850KEUkf0gf76rSAKA89_JVc0cB7W_keklDu1Kv6IfveNAiEjZnlGtax_IkVQf6PtjihCn1terSwCR8NyF2Pe4tEuD3KlTLssdTGw"
  },
  {
    id: "09",
    slug: "tayo",
    name: "TAYO",
    subtitle: "Experiential Architecture",
    description: "Custom fabrication, spatial design, and large-scale builds — from event stages and exhibition booths to permanent retail spaces and immersive environments.",
    capabilities: ["Stage Fabrication", "Custom Booths", "Spatial Design", "Props & Theming", "Permanent Installations"],
    ctaHeadline: "Have a space to transform? Let's talk.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCRQvVUwENj6Ab7rpzOh20L0PfdPVBg7tIiyF4tkJEvnqicqqBSXxvG-IhpnyjzZBZMIE9a1VqPlhss74l8AsZmXJrIj92VbbdVGKiAQSme2nIy2P5wM972D6x4AWoem_1Y2L4zWHfwP4HqlBCcCtOEd1sR1Iw-mRgF5Z8quJOIzPXFu2YFtbmUfw4KcQkEvvKirK5K9NWPmax9muMq-r5mWTcPMoDewR2bAPBJp0Fdup7aF2H_5FotfeNeRfrYXTROTrKX6JCSg"
  }
];

export function getDivisionBySlug(slug: string): DivisionData | undefined {
  return divisions.find(d => d.slug === slug);
}
