import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "fr", "es"] as const,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
