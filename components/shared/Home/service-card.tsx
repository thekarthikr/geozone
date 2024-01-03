import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import image1 from '@/public/images/heroImg.webp'
import { Button } from '@/components/ui/button'
import { SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'



export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;


const ServiceCardLink = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="grid w-full grid-cols-1 gap-6 place-items-center items-center justify-center mx-auto lg:grid-cols-3">
        {slice.items.map(({title,description,link,image},index)=>(
   <div key={index} className="p-6">
   <PrismicNextImage
   field={image}
     className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
    
   />

   <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  lg:text-3xl">
    {title}
   </h1>
   <p className="mx-auto text-base line-clamp-3 leading-relaxed ">
    {description}
   </p>

   <div className="mt-4">
     <PrismicNextLink
       field={link}
       className="inline-flex items-center mt-4 font-semibold text-red-600 lg:mb-0 "
       title="read more"
     >
       Read More »
     </PrismicNextLink>
   </div>
 </div>
        )) 
}
      </div>
    </div>

 
  </section>
  )
}

export default ServiceCardLink