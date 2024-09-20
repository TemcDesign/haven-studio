import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async (params) => {
  const { locale } = params as { locale: Locale };
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
