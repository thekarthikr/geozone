import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Bounded from "@/components/shared/bounded";
import ServiceCta from "@/components/shared/Service/service-cta";
import { PrismicNextLink } from "@prismicio/next";


export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;


const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
   

 <>

 {
  slice.variation === 'default' && (
    <Bounded
    className="relative py-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
   <div className="w-full h-full rounded-full  dark:bg-gradient-to-r from-gray-700 to-gray-900 absolute inset-0 blur-2xl opacity-10"></div>
      <div className="max-w-xl mx-auto text-center relative">
        <div className="py-4">
          <h3 className="text-3xl text-foreground font-semibold md:text-4xl">
          {slice.primary.title}
          </h3>
          <p className="text-foreground-600 leading-relaxed mt-3">
         {slice.primary.description}
          </p>
        </div>
     
          <Button variant="destructive">
           <PrismicNextLink field={slice.primary.button_link} >
            {slice.primary.button_text}
           </PrismicNextLink>
          </Button>
         
    
      </div>
    </Bounded>

  )
 }

 
  {
    slice.variation ==="serviceCta" && (
      <Bounded
     
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
     <ServiceCta slice={slice} index={0} slices={[]} context={undefined} />
      </Bounded>
    )
  }
 </>
  );
};

export default CallToAction;
