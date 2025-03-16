import { Container } from '@/shared/ui/wrapppers/container';
import { Link } from '@nextui-org/react';
import { Image } from '@nextui-org/image';
import { Atropos } from 'atropos/react';

export function OurWorksPage() {
  return (
    <Container>
      OUR WORKS PAGE
      <div className="grid grid-cols-3 gap-2">
        <div className="w-full aspect-[4/5] relative border rounded-lg overflow-hidden flex justify-center items-center">
          <Atropos className="max-w-[125%] min-w-[125%] w-[125%] h-[125%]">
            <div className="w-full h-full" data-atropos-offset="-1">
              <Image
                property="lazy"
                loading="lazy"
                width={500}
                height={500}
                className="w-full h-full top-0 left-0 object-cover"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt="image"
              />
            </div>

            <h3
              className="text-3xl text-shadow-xl font-bold absolute top-10 right-1/2"
              data-atropos-offset="20"
            >
              Text title
            </h3>
            <Image
              width={80}
              height={80}
              className="w-20 h-20 absolute top-10 right-10"
              src="https://cdn-icons-png.flaticon.com/512/337/337948.png"
              data-atropos-offset="0"
              alt="image"
            />
          </Atropos>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Link key={item} href={'/our-works/' + item}>
            item {item}
          </Link>
        ))}
      </div>
    </Container>
  );
}
