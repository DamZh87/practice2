import { Typography } from '@/shared/ui/typography';
import { HELP_ITEMS } from '@/shared/constants/navigation';
import { Link } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function FooterHelp() {
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
      <Typography tag="h5">{t(`footer.help`)}</Typography>
      {HELP_ITEMS.map(({ label, href }) => (
        <Link key={label} className="text-inherit" href={href}>
         {t(`footer.${label}`)} 
        </Link>
      ))}
    </div>
  );
}
