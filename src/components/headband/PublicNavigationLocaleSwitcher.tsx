"use client";

import { useLocale } from "next-intl";
import { Locale } from "@/config";
import { Link, usePathname } from "@/i18n/routing";
import { Icon } from "@iconify/react";

const localeIcons = {
  es: "material-symbols:language-spanish-rounded",
  en: "material-symbols:language-us-rounded",
};

export default function PublicNavigationLocaleSwitcher() {
  const currentLocale = useLocale();
  return (
    <div className="flex gap-3 py-5">
      {currentLocale !== "es" && <LocaleLink locale="es" />}
      {currentLocale !== "en" && <LocaleLink locale="en" />}
    </div>
  );
}

function LocaleLink({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isActive = useLocale() === locale;

  return (
    <Link
      className={isActive ? "underline" : undefined}
      href={pathname}
      locale={locale}
    >
      <Icon icon={localeIcons[locale]} width="25" height="25" />
    </Link>
  );
}
