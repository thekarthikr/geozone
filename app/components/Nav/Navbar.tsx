"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
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

import NavMobile from "../../../components/shared/nav-mobile";

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mobile LiDAR Mapping",
    description: "Enhancing Topographical Maps with Mobile LiDAR",
    href: "/mobile-mapping",
  },
  {
    title: "Airborne LiDAR Mapping",
    description: "Aerial Solutions for Topographical Mapping",
    href: "/airborne-mapping",
  },
  {
    title: "UAV (Drone) Surveying & Mapping",
    description: "Capturing Imagery, Transforming Data    ",
    href: "/drone-survey",
  },
  {
    title: "Photogrammetric  ",
    description:
      "Harnessing the Power of Aerial Photography and Ensuring Consistency in Point Clouds     ",
    href: "/photogrammetric",
  },
  {
    title: " Point Cloud Matching ",
    description: " Ensuring Consistency in Point Clouds     ",
    href: "/point-cloud",
  },
  {
    title: "2D Mapping & Satellite Imagery",
    description: "  Crafting Seamless Satellite Maps    ",
    href: "/2d-mapping",
  },
  {
    title: "Training",
    description: "Expert Training for Geospatial Excellence    ",
    href: "/training",
  },
];

export function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-5xl mx-auto py-2 px-3 md:px-0">
      <Link href="/">Geozone</Link>

      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <Link href="/docs">
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
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
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
              <NavigationMenuLink >
              <Button variant='default'> Contact</Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
       <NavigationMenuList className="ml-3">
        <NavigationMenuItem className="md:hidden">
        <NavMobile/>
        </NavigationMenuItem>
     
       <ThemeToggle />
       </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
