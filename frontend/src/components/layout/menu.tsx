import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import Link from "next/link";
  
export default function NavigationMenu() {
    return (
        <Menubar>
    <MenubarMenu>
    <MenubarTrigger>Menu</MenubarTrigger>
    <MenubarContent>
    <Link href='/'>                        
      <MenubarItem>
        Home
      </MenubarItem>
    </Link>
    <Link href='/create'>                        
      <MenubarItem>
        New Apartment
      </MenubarItem>
    </Link>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
    )
}