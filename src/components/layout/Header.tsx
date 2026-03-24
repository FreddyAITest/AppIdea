"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const t = useTranslations("Home");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b z-40 flex items-center justify-between px-4 lg:px-8">
        {/* App Logo / Title */}
        <div className="flex items-center gap-2">
          {/* A simple placeholder logo using our primary color */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold italic">
            K
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            {t("title")}
          </span>
        </div>

        {/* Animated Hamburger Icon */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 -mr-2 text-foreground hover:bg-muted rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center aria-label='Open Menu'"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Slide-in Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
