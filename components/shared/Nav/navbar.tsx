"use client";

import * as React from "react";
import Link from "next/link";

import logo from "@/app/icon.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

import NavMobile from "./nav-mobile";
import Image from "next/image";
import { createClient } from "@/prismicio";
import {
  NavigationDocumentDataServicesItem,
  Simplify,
} from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

export function Navbar() {


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
    <nav className="flex justify-between items-center max-w-5xl mx-auto py-4 px-3 md:px-0">
      <Link href="/">
        <Image src={logo} alt="Geozone logo" width={50} height={10} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#features   ">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                {services?.map(({ name, summary, link }, idx) => (
                  <li key={idx}>
                    <NavigationMenuLink asChild>
                    <PrismicNextLink field={link}>
                      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          {" "}
                          {name}{" "}
                        </div>
                        <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
                          {summary}
                        </p>
                      </div>
                    </PrismicNextLink>
                    </NavigationMenuLink>
                  
                  </li>
                ))}

            
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink>
              Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="ml-3">
          <NavigationMenuItem className="md:hidden">
            <NavMobile />
          </NavigationMenuItem>

          <ThemeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
