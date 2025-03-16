import React from 'react';
import clsx from 'clsx';

export function CenteredContent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center min-h-[calc(100vh-75px)] h-full w-full',
        className,
      )}
    >
      {children}
    </div>
  );
}
