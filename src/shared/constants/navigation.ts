import { ROUTES } from '@/shared/constants/routes';

export const MENU_ITEMS = [
  {
    label: 'home',
    href: ROUTES.HOME,
  },
  {
    label: 'our_works',
    href: ROUTES.OUR_WORKS,
  },
  {
    label: 'prices',
    href: ROUTES.PRICES,
  },
  {
    label: 'about_us',
    href: ROUTES.ABOUT,
  },
] as const;

export const CONTACTS_ITEMS = [
  {
    label: '+7 (702) 813 18 08',
    href: 'tel:+77028131808',
  },
  {
    label: ' info@technicorn.kz',
    href: 'mailto:info@technicorn.kz',
  },
] as const;

export const HELP_ITEMS = [
  {
    label: 'reviews',
    href: ROUTES.TESTIMONIALS,
  },
  {
    label: 'faq',
    href: ROUTES.FAQ,
  },
  {
    label: 'team',
    href: ROUTES.OUR_TEAM,
  },
  // {
  //   label: 'rights_docs',
  //   href: ROUTES.DOCUMENTS,
  // },
] as const;

export const SOCIAL_ITEMS = [
  {
    label: 'LinkedIn',
    href: " https://www.linkedin.com/company/technicornkz/",
    
  },
  // {
  //   label: 'YouTube',
  //   href: ROUTES.HOME,
  // },
  // {
  //   label: 'VK',
  //   href: "https://vk.com/",
  // },
  // {
  //   label: 'X',
  //   href: "https://x.com/" ,
  // },
] as const;
