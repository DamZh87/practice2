import { Spinner } from '@nextui-org/react';
import { CenteredContent } from '@/shared/ui/wrapppers/centered-content';

export function PageLoader() {
  return (
    <CenteredContent>
      <Spinner classNames={{ wrapper: 'w-32 h-32' }} size="lg" />
    </CenteredContent>
  );
}
