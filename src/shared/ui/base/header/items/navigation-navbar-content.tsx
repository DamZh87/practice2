import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';


export function NavigationNavbarContent() {
  const { t } = useTranslation('translation');
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {MENU_ITEMS.map(({ label, href }) => (
        <NavbarItem key={href} isActive={href === pathname}>
          <Link color="foreground" href={href}>
            {isClient ? t(`navigation.${label}`) : ''} 
          </Link>
          
        </NavbarItem>
      ))}

    </NavbarContent>
  );
}
