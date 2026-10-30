export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    steam?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Task Bar Cube Wiki",
  shortName: "Task Bar Cube",
  logoText: "T",
  tagline: "Builds, Gear, Pets & Progression Guides",
  description: "Task Bar Cube guides covering heroes, pets, equipment, gear fusion, gem socketing, farming, prestige, and desktop idle RPG progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://taskbarcube.top",
  supportEmail: "support@taskbarcube.top",
  gameUrl: "https://store.steampowered.com/app/5084200/Task_Bar_Cube/",
  heroVideoId: "c-8HdNU3_4I", // Task Bar Cube gameplay walkthrough
  social: {
    discord: "https://discord.gg/VKs2rK5QzX",
    youtube: "https://www.youtube.com/@DarkRookInteractive",
    steam: "https://steamcommunity.com/app/5084200/",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
