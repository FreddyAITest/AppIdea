"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Home, CalendarDays, Users, User, LogOut, LogIn } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const t = useTranslations("Navigation");

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: t("home"), href: "/" },
    { icon: <CalendarDays className="w-5 h-5" />, label: t("weekly_plan"), href: "/weekly-plan" },
    { icon: <Users className="w-5 h-5" />, label: t("community"), href: "/community" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50"
          />

          {/* Slide-in Panel */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-card border-l shadow-2xl z-50 flex flex-col pt-6 pb-8"
          >
            {/* Header: Close Button */}
            <div className="flex justify-start px-6">
              <button
                onClick={onClose}
                className="p-2 -ml-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center aria-label='Close Menu'"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex-1 mt-8 space-y-2 px-4">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium hover:bg-muted transition-colors active:scale-95 text-foreground"
                  >
                    <span className="text-muted-foreground">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bottom Section: Profile & Logout */}
            <div className="px-4 mt-auto space-y-2 pt-6 border-t border-border">
              <Link
                href="/profile"
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium hover:bg-muted transition-colors text-foreground"
              >
                <span className="text-muted-foreground"><User className="w-5 h-5" /></span>
                {t("profile")}
              </Link>
              <button
                className="flex w-full items-center gap-4 px-4 py-3 rounded-lg text-lg font-medium text-destructive hover:bg-destructive/10 transition-colors"
                onClick={() => {
                  // TODO: Implement Supabase Logout
                  onClose();
                }}
              >
                <span className="text-destructive/80"><LogOut className="w-5 h-5" /></span>
                {t("logout")}
              </button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
