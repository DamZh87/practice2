import { Typography } from '@/shared/ui/typography';

export function FooterCopyright() {
  return (
    <Typography tag="small" className="block text-center pt-10">
      &copy; {new Date().getFullYear()} Technicorn. All rights reserved.
    </Typography>
  );
}
