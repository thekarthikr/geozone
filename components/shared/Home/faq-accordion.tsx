import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;


export const FAQAccordion = ({ slice:{items} }: FaqsProps): JSX.Element => {
   
    return (
      <Accordion type="single" collapsible className="w-full">
        {
            items.map(({answer,question},idx)=>(
<AccordionItem  value={`${question}-1`} key={idx}>
          <AccordionTrigger> {question} </AccordionTrigger>
          <AccordionContent>
        {answer}
          </AccordionContent>
        </AccordionItem>
            ))
        }
        
      
      </Accordion>
    )
  }
  