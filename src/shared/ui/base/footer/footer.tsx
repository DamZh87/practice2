import { Container } from '@/shared/ui/wrapppers/container';
import { FooterSocials } from '@/shared/ui/base/footer/items/socials';
import { FooterHelp } from '@/shared/ui/base/footer/items/help';
import { FooterMenu } from '@/shared/ui/base/footer/items/menu';
import { FooterCopyright } from '@/shared/ui/base/footer/items/copyright';
import { FooterCompany } from '@/shared/ui/base/footer/items/company';

export function Footer() {
  return (
    <footer className="py-5 bg-secondary text-secondary-foreground">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-5">
          <FooterCompany />
          <FooterMenu />
          <FooterHelp />
          <FooterSocials />
        </div>
        <FooterCopyright />
      </Container>
    </footer>
  );
}
