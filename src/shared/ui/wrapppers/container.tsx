import React from 'react';
import clsx from 'clsx';
import AnimateBackgroundBigGradientParticles from '@/shared/ui/animate-background-big-gradient-particles';

export function Container({
  children,
  className,
  flares = false,
}: {
  children?: React.ReactNode;
  className?: string;
  flares?: boolean;
}) {
  return (
    <div className={clsx('container relative z-[2]', className)}>
      {children}
      {flares && (
        <div className="relative">
          <AnimateBackgroundBigGradientParticles className="absolute top-0 left-0 w-full h-full z-0" />
        </div>
      )}
    </div>
  );
}
