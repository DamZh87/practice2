"use client";

import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { services } from '@/shared/constants/services';
export default function Services() {
const { t } = useTranslation('translation');
const [isClient, setIsClient] = useState(false);


  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container flares={true} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
      {t(`services.services_label`)}
      </Typography>
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 25500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
       // onSwiper={(swiper) => console.log(swiper)}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
<Card className="aspect-[12/16] flex relative group overflow-hidden">
  <Image
    removeWrapper
    alt="Card background"
    className="z-0 w-full h-full object-cover dark:filter dark:brightness-75"
    src={service.image}
  />
  <CardHeader className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
    <h4 className="text-lg text-white/90 uppercase font-bold">
      {t(`services.${service.name}`)}
    </h4>
    <div className='rounded-lg p-2'>
    <p className="text-white/70 font-medium   backdrop-blur-sm text-sm text-balance overflow-hidden line-clamp-3 transition-all duration-300 group-hover:line-clamp-none group-hover:backdrop-blur-sm">
      {t(`services.${service.descr}`)}
   </p>
    </div>
  </CardHeader>
</Card>


          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
