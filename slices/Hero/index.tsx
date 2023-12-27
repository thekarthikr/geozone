import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/shared/bounded";
import { Button } from "@/components/ui/button";
import { Slides } from "@/components/shared/Service/slides";
import ThumbnailSlides from "@/components/shared/Service/thumbnail-slides";
import Home from '@/components/shared/Home/hero'
import ServiceHero from "@/components/shared/Service/service-hero";


export type HeroProps = SliceComponentProps<Content.HeroSlice>;


const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (


    <>
    {
      slice.variation === 'default' && (
     
           <section>
           <Home slice={slice} index={0} slices={[]} context={undefined} />
           </section>
         
        
       
      )
    }
    
   
       <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
           
         <ServiceHero slice={slice} index={1} slices={[]} context={undefined}  />
        
        </section>
   



    </>
   
  );
};

export default Hero;
