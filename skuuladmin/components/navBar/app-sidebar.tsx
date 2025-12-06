"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/public/purple-dices.png";
import skuulLogo from "@/public/skuulLogo1.png";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LiaUserTieSolid } from "react-icons/lia";
import {
  ChartColumn,
  CircleQuestionMark,
  CircleUser,
  DollarSign,
  LogOut,
  Settings,
} from "lucide-react";
import { PiStudentDuotone, PiBookOpenTextDuotone } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

export function AppSidebar() {
  const pathname = usePathname();
  const { state, open } = useSidebar();

  // Sidebar expanded state
  const isVisible = state === "expanded" && open;

  const menuList = [
    { title: "Overview", url: "/overview", icon: ChartColumn },
    { title: "Teachers", url: "/teachers", icon: LiaUserTieSolid },
    { title: "Students", url: "/students", icon: PiStudentDuotone },
    { title: "Courses", url: "/courses", icon: PiBookOpenTextDuotone },
    { title: "Classes", url: "/classes", icon: SiGoogleclassroom },
    { title: "Fees & Payments", url: "/fees", icon: DollarSign },
  ];

  const footerList = [
    { title: "Profile", url: "/profile", icon: CircleUser },
    { title: "Help", url: "/help", icon: CircleQuestionMark },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  const isActive = (url: string) => pathname === url;
  const activeStyle =
    "bg-primary/10 border-l-4 border-yellow-500 text-primary font-medium";

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      {/* HEADER */}
      <SidebarHeader className="p-2">
        <div className="flex items-center gap-3 justify-center transition-all duration-300">
          <Image src={logo} alt="logo" width={40} height={40} />
          {isVisible && (
            <Image
              src={skuulLogo}
              alt="logo"
              className="w-36 md:w-28 transition-all duration-300"
            />
          )}
        </div>
      </SidebarHeader>

      <Separator />

      <SidebarContent>
        {/* MAIN NAVIGATION */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuList.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`
                        h-10
                        transition-all duration-200
                        ${
                          active ? activeStyle : "border-l-4 border-transparent"
                          // active
                          //   ? "bg-primary/10 border-l-4 border-primary text-primary font-medium"
                          //   : "border-l-4 border-transparent"
                        }
                      `}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* OTHER LINKS */}
        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerList.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`
                        h-10
                        transition-all duration-200
                        ${
                          active ? activeStyle : "border-l-4 border-transparent"
                          // active
                          //   ? "bg-primary/10 border-l-4 border-primary text-primary font-medium"
                          //   : "border-l-4 border-transparent"
                        }
                      `}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <SidebarGroup>
          <Separator />
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 text-red-500 hover:bg-red-500/10 transition-all"
                >
                  <Link href="/auth/login">
                    <LogOut />
                    <span>Log Out</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}

// "use client";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import Image from "next/image";
// import logo from "@/public/purple-dices.png";
// import skuulLogo from "@/public/skuulLogo1.png";
// import { Separator } from "../ui/separator";
// import { CommandDialogSearch } from "../command-menu/command-menu";
// import { LiaUserTieSolid } from "react-icons/lia";
// import {
//   ChartColumn,
//   CircleQuestionMark,
//   CircleUser,
//   DollarSign,
//   LayoutDashboard,
//   LogOut,
//   Settings,
// } from "lucide-react";
// import { PiStudentDuotone } from "react-icons/pi";
// import { SiGoogleclassroom } from "react-icons/si";
// import { PiBookOpenTextDuotone } from "react-icons/pi";
// import Link from "next/link";

// export function AppSidebar() {
//   const {
//     state,
//     open,
//     setOpen,
//     openMobile,
//     setOpenMobile,
//     isMobile,
//     toggleSidebar,
//   } = useSidebar();

//   // const isVisible = state === "expanded" && open === true;
//   const isVisible = state === "expanded" && open;

//   console.log("The company Logo" + isVisible);

//   const menuList = [
//     {
//       title: "Overview",
//       url: "#",
//       icon: ChartColumn,
//       // icon: LayoutDashboard,
//     },
//     {
//       title: "Teachers",
//       url: "#",
//       icon: LiaUserTieSolid,
//     },
//     {
//       title: "Student",
//       url: "#",
//       icon: PiStudentDuotone,
//     },
//     {
//       title: "Courses",
//       url: "#",
//       icon: PiBookOpenTextDuotone,
//     },
//     {
//       title: "Classes",
//       url: "#",
//       icon: SiGoogleclassroom,
//     },
//     {
//       title: "Fees & Payments",
//       url: "#",
//       icon: DollarSign,
//     },
//   ];
//   const footerList = [
//     {
//       title: "Profile",
//       url: "#",
//       icon: CircleUser,
//     },
//     {
//       title: "Help",
//       url: "#",
//       icon: CircleQuestionMark,
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings,
//     },
//   ];

//   return (
//     <Sidebar collapsible="icon" variant="sidebar">
//       <SidebarHeader className="p-1">
//         <div className=" flex items-center gap-4 justify-center">
//           <Image src={logo} alt="logo" width={50} height={50} />
//           {isVisible ? (
//             <Image src={skuulLogo} alt="logo" className="w-40 md:w-32" />
//           ) : (
//             " "
//           )}
//         </div>
//       </SidebarHeader>
//       <Separator className="" />
//       <SidebarContent>
//         {/* <CommandDialogSearch /> */}

//         <SidebarGroup>
//           <SidebarGroupLabel>Navigation</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {menuList.map((item) => (
//                 <SidebarMenuItem key={item.title} className="">
//                   <SidebarMenuButton asChild className=" h-10">
//                     <Link href={item.url}>
//                       <item.icon />
//                       <span className="text-md font-medium">{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//         {/* OTHERS */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Others</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {footerList.map((item) => (
//                 <SidebarMenuItem key={item.title} className="">
//                   <SidebarMenuButton asChild className=" h-10">
//                     <Link href={item.url}>
//                       <item.icon />
//                       <span className="text-md font-medium">{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       {/* FOOTER PAGE */}
//       <SidebarFooter>
//         <SidebarGroup>
//           <Separator />
//           <SidebarGroupContent>
//             <SidebarMenu>
//               <SidebarMenuItem className="cursor-pointer">
//                 <SidebarMenuButton asChild className=" h-10 text-red-500">
//                   <Link href={"#"}>
//                     <LogOut />
//                     <span className="text-md font-medium">Log Out</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }
