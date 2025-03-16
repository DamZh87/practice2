import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { LanguageSwitcher } from '@/shared/components/language-switcher';

export function MenuNavbarContent() {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null; 

  const locale = i18n.language;

  const getColor = (index: number) => {
    const colors = {
      primary: index === 2,
      danger: index === MENU_ITEMS.length - 1,
      foreground: true,
    };

    return Object.entries(colors).find(([_, condition]) => condition)?.[0] as
      | 'primary'
      | 'danger'
      | 'foreground';
  };

  return (
    <NavbarMenu>
      {MENU_ITEMS.map(({ label, href }, index) => (
        <NavbarMenuItem key={`${href}-${index}`}>
          <Link color={getColor(index)} className="w-full" href={`/${locale}${href}`} size="lg">
            {t(`${label}`)}
          </Link>
         
        </NavbarMenuItem>

      ))}
  
    </NavbarMenu>
  );
}
