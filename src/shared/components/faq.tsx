import { FAQ_ITEMS } from "@/shared/constants/faq";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Typography } from "@/shared/ui/typography";
import { Container } from "@/shared/ui/wrapppers/container";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/providers/i18n";

export default function Faq({ flares = false }: { flares?: boolean }) {
  const { t } = useTranslation("translation");
  const currentLanguage = i18n.language;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container flares={flares} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
        {t(`question_block.question`)}
        <span className="animate-pulse">/</span>
        {t(`question_block.answer`)}
      </Typography>
      <Accordion defaultExpandedKeys={["1"]}>
        {FAQ_ITEMS[currentLanguage].map(
          ({ id, title, description, content }) => (
            <AccordionItem
              key={id}
              aria-label={title}
              subtitle={description}
              title={title}
            >
              <Typography className="pb-10">{content}</Typography>
            </AccordionItem>
          )
        )}
      </Accordion>
    </Container>
  );
}
