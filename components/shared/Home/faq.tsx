import React from 'react'
import { FAQAccordion } from './faq-accordion'
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';



export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;


const HomeFaqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
   <div>

<div className="space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl  font-semibold">
          {slice.primary.title}
        </h1>
        <p className=" max-w-lg mx-auto text-lg">
         {slice.primary.description}
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto mb-14">
     <FAQAccordion slice={slice} index={0} slices={[]} context={undefined}  />
      </div>
   </div>
  )
}

export default HomeFaqs