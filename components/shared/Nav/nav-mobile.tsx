
import {
    Sheet,
    SheetContent,
  
    SheetHeader,
  
    SheetTrigger,
  } from "@/components/ui/sheet"

import { LayoutGrid } from "lucide-react"
import NavItems from "./nav-item"
  

const NavMobile
 = () => {
  return (
    <Sheet >
    <SheetTrigger><LayoutGrid /></SheetTrigger>
    <SheetContent>
      <SheetHeader>
       <NavItems/>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  )
}

export default NavMobile
