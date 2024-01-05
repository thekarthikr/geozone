import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import image1 from '@/public/images/heroImg.webp'
import { Button } from '@/components/ui/button'
import { SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;


const ServiceCardLink = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 ">
      <div className="grid w-full grid-cols-1 gap-6 place-content-center items-start justify-center mx-auto md:grid-cols-2 lg:grid-cols-3  ">
        {slice.items.map(({title,description,link,image},index)=>(
   <div key={index} className="p-4 bg-gray-100/20 dark:bg-black/20 rounded-sm shadow-lg border border-gray-300/50 dark:border-gray-500/10">
   <PrismicNextImage
   field={image}
     className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
    
   />

   <h3 className="mx-auto mb-8 text-lg font-semibold leading-none tracking-tighter  lg:text-xl">
    {title} 
   </h3>
   <p className="mx-auto text-base line-clamp-3 leading-relaxed ">
    {description}
   </p>
  
  
{
  link.link_type == 'Any' ? <Dialog>
  <DialogTrigger>  <span
  
    className="inline-flex items-center mt-4 font-semibold text-red-600 lg:mb-0 "
    title="read more"
  >
    Read More »
  </span></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='font-heading text-center text-xl'>Rental Services</DialogTitle>
      <DialogDescription className='flex flex-col gap-3'>
        <p>
        Geo Zone offers Rental Services as well. We expertise in rental field and provide latest drones, computers and laptop throughout. 
        </p>
        <p>
        We rent our drones for Construction sites, Mining Sites, Precision agriculture, Professional Cinematography, Building inspection, Land survey, Energy, Utility, Power and Public service.

        </p>
      
<p>
We rent laptops as well High-end computers, A machine that will run all of the games, processing projects at all of the highest graphics settings, and continue to do so for all time. Portable without compromising performance, the laptops and computers are ideal for processing, office works.

</p>
<p>
Shipping available to any location in Tamilnadu.

</p>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
 : <div className="mt-4">
  <PrismicNextLink
    field={link}
    className="inline-flex items-center mt-4 font-semibold text-red-600 lg:mb-0 "
    title="read more"
  >
    Read More »
  </PrismicNextLink>
</div>
}
   
 </div>
        )) 
}
      </div>
    </div>

 
  </section>
  )
}

export default ServiceCardLink
