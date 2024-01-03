'use client'



import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

export const Slides = ({ slice }: HeroProps): JSX.Element => {


  return (
        <>
         {
          slice.variation === 'serviceHero' && (
            <section className='py-12'>
            <div className='container'>
              <Swiper
             
              
                loop={true}
              
                pagination={{
                  dynamicBullets: true,
                  clickable:true,
                }}
      
                autoplay={true}
             
                modules={[ Pagination,Autoplay]}
              
                className='h-96 w-full rounded-lg'
              >
              
                
                {   slice.items.map(({images},index) => (
                  <SwiperSlide key={index}>
                    <div className='flex h-full w-full items-center justify-center'>
                      <PrismicNextImage
       field={images}
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
        </>
    
    
  )
}