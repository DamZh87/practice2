import { Header } from '@/shared/ui/base/header/header';
import { geistMono, geistSans } from '../../../../config/fonts';
import { Footer } from '@/shared/ui/base/footer/footer';
import React from 'react';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-full min-h-screen w-full font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <div className="py-10 min-h-[calc(100vh-520px)] lg:min-h-[calc(100vh-356px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
