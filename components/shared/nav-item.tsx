import { Link, NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import React from 'react'
import NavServices from './nav-services'
import { Button } from '../ui/button'

const NavItems = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList className="space-y-3">
      <NavigationMenuItem>
        <Link href="/">
          <NavigationMenuLink >
            Home
          </NavigationMenuLink>
        </Link>
     
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/#features   ">
          <NavigationMenuLink >
            Features
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavServices/>

      <NavigationMenuItem>
        <Link href="/about"  >
          <NavigationMenuLink >
            About
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/contact"  >
          <NavigationMenuLink >
          <Button variant='default'> Contact</Button>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
 
  </NavigationMenu>
  )
}

export default NavItems