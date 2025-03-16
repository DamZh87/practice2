"use client";

import AnimateWaves from '@/shared/ui/animate-waves';
import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Image } from '@nextui-org/image';
import phoneImage from '@/shared/assets/images/hero/phone.png';
import { Button, ButtonGroup } from '@nextui-org/button';
import AnimateBackgroundParticles from '@/shared/ui/animate-background-particles';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RiShakeHandsLine } from 'react-icons/ri';
import { Tooltip } from '@nextui-org/tooltip';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const { t } = useTranslation('translation');
  const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; 
    }
  
  return (
    
    <section className="relative mb-32 bg-blend-difference">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <AnimateBackgroundParticles className="absolute top-0 left-0 w-full h-full" />
      </div>
      <Container flares={true} className="relative -mb-32 z-[2]">
        <div className="flex items-start justify-between">
          <div>
            <Typography tag="h1" className='text-5xl'>
            {t(`hero_block.hero_main`)}
            </Typography>
            <Typography className="text-foreground bg-blend-difference mix-blend-difference my-5">
            {t(`hero_block.hero_descr`)}
            </Typography>
            <Typography tag="h5" className="text-text-foreground bg-blend-difference mix-blend-difference my-5">
            {t(`hero_block.hero_text`)}
            </Typography>
            <div className="flex flex-col justify-center items-center gap-1">
              <ButtonGroup className="shadow-xl">
                <Button className="pointer-events-none" disabled={true}>
                {t(`hero_block.hero_connect_us`)}
                </Button>
                <Tooltip placement="bottom" content={t(`hero_block.write_whatsapp`)}>
                  <Button className="bg-green-400 color-white fill-white"  onClick={() => window.open('https://wa.me/+77028131808', '_blank')}>
                    <BsWhatsapp className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" content={t(`hero_block.write_telegram`)}>
                  <Button className="bg-blue-400 color-white fill-white"   onClick={() => window.open('https://t.me/@KKAsteve', '_blank')}>
                    <LiaTelegramPlane className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" content={t(`hero_block.send_mail`)}>
                  <Button className="bg-orange-400 color-white fill-white" onClick={() => window.open('mailto:info@technicorn.kz ', '_blank')}>
                    <MdOutlineAlternateEmail className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" content={t(`hero_block.leave_order`)}>
                  <Button className="bg-purple-400 color-white fill-white" >  
                    <RiShakeHandsLine className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
          <Image className="animate-flying" src={phoneImage.src} />
        </div>
      </Container>
      <AnimateWaves className="absolute bottom-0 left-0 w-full bg-blend-difference z-[1]" />
    </section>
  );
}
