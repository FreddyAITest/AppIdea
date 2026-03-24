import { useTranslations } from "next-intl";
import { Star, Clock } from "lucide-react";

export function CommunityRated() {
  const t = useTranslations("Home");

  // Mock data for community recipes
  const mockRecipes = Array.from({ length: 6 }).map((_, ix) => ({
    id: ix,
    title: `Community Rezept ${ix + 1}`,
    prepTime: 30 + ix * 10,
    rating: (5 - ix * 0.2).toFixed(1),
    imageUrl: `https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`
  }));

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("community_rated")}
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group flex flex-col bg-card rounded-2xl border overflow-hidden hover:border-primary/50 transition-colors hover:shadow-md"
          >
            {/* Image */}
            <div className="h-48 w-full bg-muted relative overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-background/90 backdrop-blur-md rounded-full text-sm font-medium text-foreground">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>{recipe.rating}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-xl mb-3 line-clamp-2">{recipe.title}</h3>
              <div className="mt-auto flex items-center text-sm text-muted-foreground gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{t("prep_time", { min: recipe.prepTime })}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
