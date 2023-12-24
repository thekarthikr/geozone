'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
export const Slides = ({ slice }: HeroProps): JSX.Element => {


  return (

    
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation={true}
        
          loop={true}
        
          pagination={{
            dynamicBullets: true,
            clickable:true,
          }}

          autoplay={true}
       
          modules={[Navigation, Pagination,Autoplay]}
        
          className='h-96 w-full rounded-lg'
        >


        
          {   slice.items.map(({images},index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={images.url || ""}
                  alt={images.alt || ''}
                  width={400}
                  height={400}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}