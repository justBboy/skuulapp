"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/public/purple-dices.png";
import skuulLogo from "@/public/skuulLogo1.png";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  const isVisible = state === "expanded" && open === true;
  console.log("The company Logo" + isVisible);

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-4">
        <div className=" flex items-center gap-4 justify-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          {isVisible ? (
            <Image src={skuulLogo} alt="logo" className="md:w-40 w-50" />
          ) : (
            " "
          )}
        </div>
      </SidebarHeader>
      {/* <Separator /> */}
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
