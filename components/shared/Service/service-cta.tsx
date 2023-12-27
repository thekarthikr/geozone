import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import tick from '@/public/images/tick.svg'
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;


const ServiceCta = ({ slice }: CallToActionProps): JSX.Element => {
  return (
 
     

      
        <div className="flex rounded-md max-w-4xl mx-auto flex-col items-center bg-card border border-gray-300 dark:border-gray-900 border-opacity-70 px-4 py-10 text-center md:py-14">
       
          <h2 className="mb-6 flex-col text-3xl font-bold  md:text-5xl  ">
           {slice.primary.title}
          </h2>
        
          
          <div className="mx-auto">
            <ul className="mb-6 flex flex-col flex-nowrap gap-3  md:flex-row ">
             
             {
                slice.items.map(({key_feature},idx)=>(
                    <li key={idx} className="ml-2 mr-2 flex flex-row items-center md:mx-4">
                    <Image
                       src={tick}
                       alt="Tick "
                      className="mr-2 inline-block h-4 w-4"
                    />
                    <p>{key_feature} </p>
                  </li>
                ))
             }
             
             
            </ul>
          </div>
         
         <Button variant='outline' className="border border-red-300 dark:border-red-500 text-red-500">
          <PrismicNextLink field={slice.primary.button_link}>
            {slice.primary.button_text}
          </PrismicNextLink>
         </Button>

        
        </div>
     
   
  );
};

export default ServiceCta;
