
import { Button } from "../../ui/button";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { Slides } from "./slides";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;


const ServiceHero = ({ slice }: HeroProps): JSX.Element => {
  return (

    <>
     {
      slice.variation === 'serviceHero' && (
        <div className="px-4 py-14 text-center lg:text-left mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {slice.primary.tag}
                </p> */}
              </div>
              <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
               {slice.primary.heading}
              </h2>
              <p className="text-base  md:text-lg">
              {slice.primary.description}
              </p>
            </div>
            <div>
             <Button variant='destructive' >
               <PrismicNextLink field={slice.primary.button_link}>
                {slice.primary.button_one}
               </PrismicNextLink>
             </Button>
            </div>
          </div>
          <div className="relative px-3 w-[100%] lg:w-1/2">
         <Slides slice={slice} index={0} slices={[]} context={undefined} />
        
          </div>
        </div>
        </div>
      )
     }
    </>
   
  );
};

export default ServiceHero;
