import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { Configs } from "@/Constants/Languages";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Configs.languages,

  // Used when no locale matches
  defaultLocale: Configs.principal,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
