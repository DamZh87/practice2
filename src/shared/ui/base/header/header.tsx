import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { Logotype } from '@/shared/ui/logotype';
import { RightNavbarContent } from '@/shared/ui/base/header/items/right-navbar-content';
import { NavigationNavbarContent } from '@/shared/ui/base/header/items/navigation-navbar-content';
import { MenuNavbarContent } from '@/shared/ui/base/header/items/menu-navbar-content';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="2xl" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Logotype variant="full" />
        </NavbarBrand>
      </NavbarContent>
      <NavigationNavbarContent />
      <RightNavbarContent isMenuOpen={isMenuOpen} />
      <MenuNavbarContent />
    </Navbar>
  );
}
