import { useTranslations } from "next-intl";
import { Clock } from "lucide-react";

export function WeeklyPlan() {
  const t = useTranslations("Home");

  // Mock data for the 7 days
  const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
  const mockPlan = days.map((day, ix) => ({
    id: ix,
    day,
    title: `Leckeres Gericht ${ix + 1}`,
    prepTime: 20 + ix * 5,
    imageUrl: `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`
  }));

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("weekly_plan")}
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar scroll-smooth snap-x">
        {mockPlan.map((item) => (
          <div
            key={item.id}
            className="flex-none w-64 snap-center relative rounded-2xl overflow-hidden border bg-card text-card-foreground shadow-sm group hover:border-primary/50 transition-colors"
          >
            {/* Image */}
            <div className="h-40 w-full bg-muted relative overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-semibold text-foreground">
                {item.day}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg line-clamp-1 mb-2">{item.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{t("prep_time", { min: item.prepTime })}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
