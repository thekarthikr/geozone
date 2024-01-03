import {  NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import React from 'react'
import NavServices from './nav-services'
import { Button } from '../../ui/button'
import { SheetClose } from '../../ui/sheet'
import Link from 'next/link'
const NavItems = () => {
  return (
    <NavigationMenu className='pt-10 text-xl font-heading font-bold  text-left'>
    <NavigationMenuList className="space-y-5">
      <NavigationMenuItem>
      
       <Link href="/">
       <SheetClose>
          <NavigationMenuLink >
            Home
          </NavigationMenuLink>
          </SheetClose>
        </Link>
    
     
      </NavigationMenuItem>
  

      <NavServices />

      <NavigationMenuItem>
        <Link href="/about"  >
         <SheetClose>
         <NavigationMenuLink >
            About
          </NavigationMenuLink>
         </SheetClose>
         
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/contact"  >
        <SheetClose>
        <NavigationMenuLink >
       Contact
          </NavigationMenuLink>
        </SheetClose>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
 
  </NavigationMenu>
  )
}

export default NavItems