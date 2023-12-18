import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import React from 'react'
import { ListItem, components } from '../../app/components/Nav/Navbar'
import { Separator } from '@radix-ui/react-separator'

const NavServices = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Services</AccordionTrigger>
        <AccordionContent>
        {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                  <Separator className="border border-gray-200 border-opacity-50 mt-2 dark:border-gray-900" />
                  </ListItem>
                ))}
        </AccordionContent>
      </AccordionItem>
    
    </Accordion>
  )
}

export default NavServices