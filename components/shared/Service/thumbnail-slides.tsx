'use client'


import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SwiperClass } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';


export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
export const ThumbnailSlides = ({ slice }: HeroProps): JSX.Element => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className='min-h-screen bg-black py-12'>
      <div className='container'>
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={true}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs,Autoplay]}
          className='h-96 w-full rounded-lg'
        >
          {slice.items.map(({images},index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <PrismicNextImage
                 field={images}
                
                  width={500}
                  height={500}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
         {slice.items.map(({images},index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
              <PrismicNextImage
                 field={images}
                
                  width={500}
                  height={500}
                  className='block h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ThumbnailSlides;
