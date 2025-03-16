import { Typography } from '@/shared/ui/typography';
import { SOCIAL_ITEMS } from '@/shared/constants/navigation';
import { Link } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function FooterSocials() {
  const { t } = useTranslation('translation');
  const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
      }, []);
      
      if (!isClient) {
        return null; 
      }
  return (
    <div className="flex flex-col gap-2">
      <Typography tag="h5">{t(`footer.social_n`)}</Typography>
      {SOCIAL_ITEMS.map(({ label, href }) => (
        <Link key={label} className="text-inherit" href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
