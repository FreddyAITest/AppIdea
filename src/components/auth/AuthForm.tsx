"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function AuthForm() {
  const t = useTranslations("Navigation");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto bg-card border rounded-3xl p-8 shadow-sm">
      <div className="flex justify-center mb-8">
        {/* Placeholder Logo */}
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold italic text-xl">
          K
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {isLogin ? "Willkommen zurück" : "Konto erstellen"}
      </h2>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${
            isLogin ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Anmelden
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${
            !isLogin ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Registrieren
        </button>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            placeholder="deine.email@beispiel.de"
            className="w-full h-12 px-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Passwort</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full h-12 px-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <button className="w-full h-12 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm mt-2">
          {isLogin ? "Anmelden" : "Konto erstellen"}
        </button>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Oder fortfahren mit</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button className="w-full h-12 flex items-center justify-center gap-3 border rounded-xl hover:bg-muted transition-colors font-medium text-foreground">
            {/* Minimal Google Icon SVG */}
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
          <button className="w-full h-12 flex items-center justify-center gap-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity font-medium">
            {/* Minimal Apple Icon SVG */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M16.365 1.43c0 0-2.03.116-3.784 1.258-.87.568-1.624 1.5-1.93 2.574-.29.986-.18 2.02.04 2.656 1.84.09 3.69-1.01 4.54-2.26.74-1.12 1.34-2.58 1.12-4.228zm1.096 6.35c-1.84.09-3.328 1.15-4.148 1.15-.85 0-2.14-1.02-3.66-1.02-1.9 0-3.664 1.09-4.634 2.8-1.96 3.43-.5 8.55 1.41 11.3 1.01 1.46 2.21 3.11 3.82 3.06 1.54-.04 2.14-.98 4.02-.98 1.86 0 2.4.98 4.03.95 1.65-.03 2.68-1.5 3.63-2.9 1.1-1.6 1.55-3.16 1.58-3.24-.03-.01-3.03-1.16-3.06-4.65-.03-2.93 2.39-4.33 2.51-4.4-1.37-2.02-3.48-2.25-4.52-2.31z"/>
            </svg>
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}
