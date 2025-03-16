import { NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import { ThemeSwitcher } from '@/features/theme/theme-switcher';
import React from 'react';
import { LanguageSwitcher } from '@/shared/components/language-switcher';
type Props = {
  isMenuOpen: boolean;
};

export function RightNavbarContent({ isMenuOpen }: Props) {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="flex items-center">
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden block h-8 "
          type="button"
        />
      </NavbarItem>
      
      <NavbarItem >
        <LanguageSwitcher />
      </NavbarItem>

    </NavbarContent>
  );
}
