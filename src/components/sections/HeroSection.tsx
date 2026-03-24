import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-primary/10 border-2 border-primary/20 aspect-video max-h-[400px] flex items-center justify-center mb-12">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-background/10 z-0" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-sm">
          {t("hero_headline")}
        </h1>
        <Link
          href="/recipes"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {t("hero_cta")}
        </Link>
      </div>
    </section>
  );
}
