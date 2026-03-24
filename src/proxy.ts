import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { updateSession } from './lib/supabase/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // First, run the next-intl middleware for routing
  const response = intlMiddleware(request);

  // Then, run Supabase auth middleware to refresh session
  return await updateSession(request, response);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*']
};
