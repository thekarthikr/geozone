import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import React from 'react'
import { Separator } from '@radix-ui/react-separator'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import { NavigationDocumentDataServicesItem, Simplify } from '@/prismicio-types'
import { GroupField } from '@prismicio/client'
import { SheetClose } from '../../ui/sheet'
import { ChevronDown } from 'lucide-react'



const NavServices =  () => {
 

  const [services, setServices] = React.useState<GroupField<
    Simplify<NavigationDocumentDataServicesItem>
  > | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const client = createClient(); 
     
        const {
          data: { services },
        } = await client.getSingle("navigation");
        setServices(services);
     
    };

    fetchData();
  }, []);

  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem  value="item-1">
        <AccordionTrigger  className='flex gap-2 font-semibold'>Services <ChevronDown className='text-sm ' /> </AccordionTrigger>
        <AccordionContent  className='flex flex-col '>
        {services?.map((component) => (
                
                <PrismicNextLink key={component.name} field={component.link}>
                  <SheetClose className='text-md py-2 text-left'>
                 
                  {component.name}
                 
                <Separator className="border border-gray-200 border-opacity-50 mt-2 dark:border-gray-900" />
                  </SheetClose>
               
                </PrismicNextLink>
                 
                 
                ))}
        </AccordionContent>
      </AccordionItem>
    
    </Accordion>
  )
}

export default NavServices