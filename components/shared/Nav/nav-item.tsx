import {  NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import React from 'react'
import NavServices from './nav-services'
import { Button } from '../../ui/button'
import { SheetClose } from '../../ui/sheet'
import Link from 'next/link'
const NavItems = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList className="space-y-3">
      <NavigationMenuItem>
      
       <Link href="/">
       <SheetClose>
          <NavigationMenuLink >
            Home
          </NavigationMenuLink>
          </SheetClose>
        </Link>
    
     
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/#features   ">
        <SheetClose>
        <NavigationMenuLink >
            Features
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
          <Button variant='default'> Contact</Button>
          </NavigationMenuLink>
        </SheetClose>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
 
  </NavigationMenu>
  )
}

export default NavItems