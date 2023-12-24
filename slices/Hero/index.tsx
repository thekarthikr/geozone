import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/shared/bounded";
import { Button } from "@/components/ui/button";
import { Slides } from "@/components/shared/slides";
import ThumbnailSlides from "@/components/shared/thumbnail-slides";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (


    <>
    {
      slice.variation === 'default' && (
        <Bounded
        className="py-28"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
           
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
        
              <h1 className="text-4xl text-gray-800 dark:text-gray-200 font-extrabold font-heading md:text-5xl">
                 {slice.primary.heading}
              </h1>
              <p>
            {slice.primary.description}
              </p>
              <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
               <Button>
                 <PrismicNextLink field={slice.primary.button_one_link}>
                  {slice.primary.button_one_name}
                 </PrismicNextLink>
               </Button>
               <Button variant='outline'>
                 <PrismicNextLink field={slice.primary.button_two_link}>
                  {slice.primary.button_two_name}
                 </PrismicNextLink>
               </Button>
              </div>
            </div>
            <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
      
            <PrismicNextImage field={slice.primary.image} />
             
            </div>
          </div>
          
        </Bounded>
      )
    }
    
    {
      slice.variation === 'serviceHero' && (
        <Bounded
        className="py-28"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
           
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
        
              <h1 className="text-4xl text-gray-800 dark:text-gray-200 font-extrabold font-heading md:text-5xl">
                 {slice.primary.heading}
              </h1>
              <p>
            {slice.primary.description}
              </p>
              <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
               <Button variant="secondary">
                 <PrismicNextLink field={slice.primary.button_link}>
                  {slice.primary.button_one}
                 </PrismicNextLink>
               </Button>
              
              </div>
            </div>
            <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
      
            <Slides slice={slice} index={0} slices={[]} context={undefined}  />
             
            </div>
          </div>
        
        </Bounded>
      )
    }


{
      slice.variation === 'seriveHeroWithThumbnail' && (
        <Bounded
        className="py-28"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
           
          <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
            <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
        
              <h1 className="text-4xl text-gray-800 dark:text-gray-200 font-extrabold font-heading md:text-5xl">
                 {slice.primary.heading}
              </h1>
              <p>
            {slice.primary.description}
              </p>
              <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
               <Button variant="secondary">
                 <PrismicNextLink field={slice.primary.button_link}>
                  {slice.primary.button_one}
                 </PrismicNextLink>
               </Button>
              
              </div>
            </div>
            <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
      
            <ThumbnailSlides slice={slice} index={0} slices={[]} context={undefined}  />
             
            </div>
          </div>
        
        </Bounded>
      )
    }
    </>
   
  );
};

export default Hero;
