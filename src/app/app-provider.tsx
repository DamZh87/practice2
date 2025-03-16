import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/query-client';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { Toaster } from '@/shared/ui/toaster';
import { BaseLayout } from '@/shared/ui/layouts/base-layout';
import LocalizeProvider from '@/providers/localize-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <LocalizeProvider>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <BaseLayout>
            {children}
            <Toaster position="top-center" />
          </BaseLayout>
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
    </LocalizeProvider>
  );
}
