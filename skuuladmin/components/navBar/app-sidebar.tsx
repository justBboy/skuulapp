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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import skuulLogo from "@/public/SkuulBusLogo1.png";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LiaUserTieSolid } from "react-icons/lia";
import {
  ChevronRight,
  CircleQuestionMark,
  CircleUser,
  DollarSign,
  LogOut,
  Settings,
} from "lucide-react";
import { PiStudentDuotone, PiBookOpenTextDuotone } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { RiParentLine } from "react-icons/ri";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function AppSidebar() {
  const pathname = usePathname();
  const { state, open } = useSidebar();
  const isVisible = state === "expanded" && open;

  /* ---------------- ACTIVE ROUTE LOGIC ---------------- */
  const isActive = (url?: string, exact = false) => {
    if (!url || url === "#") return false;
    if (exact) return pathname === url;
    return pathname === url || pathname.startsWith(url + "/");
  };

  /* ---------------- POLISHED ACTIVE STYLES ---------------- */
  const activeMenuItem =
    "relative text-yellow-700 bg-primary/10 transition-all duration-300 ease-out " +
    "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 " +
    "before:origin-top before:scale-y-100 before:transition-transform before:duration-300";

  const inactiveItem =
    "relative transition-all duration-300 ease-out hover:bg-primary/5";

  const activeSubMenuItem =
    "relative text-yellow-700 bg-primary/5 transition-all duration-300 ease-out " +
    "before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-yellow-400/70 " +
    "before:origin-top before:scale-y-100 before:transition-transform before:duration-300";

  //     activeMenuItem
  // activeSubMenuItem
  // menuItemBase
  /* ---------------- MENU DATA ---------------- */
  const menuList = {
    dashBoard: {
      title: "DashBoard",
      url: "#",
      items: [
        { title: "Overview", url: "/overview" },
        { title: "Logs", url: "#" },
      ],
    },
    courses: {
      title: "Courses",
      url: "/courses",
      icon: PiBookOpenTextDuotone,
    },
    classes: {
      title: "Classes",
      url: "/classes",
      icon: SiGoogleclassroom,
    },
    dropdownList: {
      firstDropDownList: [
        {
          title: "Teachers",
          icon: LiaUserTieSolid,
          items: [
            { title: "Overview", url: "/teachers" },
            { title: "Directory", url: "/teachers/directory" },
            { title: "Attendance", url: "#" },
          ],
        },
        {
          title: "Students",
          icon: PiStudentDuotone,
          items: [
            { title: "Overview", url: "/students" },
            { title: "Directory", url: "/students/directory" },
            { title: "Enrollment", url: "#" },
            { title: "Attendance", url: "#" },
          ],
        },
      ],
      secondDropDownList: [
        {
          title: "Parents",
          icon: RiParentLine,
          items: [
            { title: "Add", url: "#" },
            { title: "View", url: "#" },
          ],
        },
        {
          title: "Fees & Payments",
          icon: DollarSign,
          items: [
            { title: "Fee Management", url: "#" },
            { title: "Wallet & Transactions", url: "#" },
            { title: "Revenue Tracking", url: "#" },
          ],
        },
      ],
    },
  };

  const footerList = [
    { title: "Profile", url: "/profile", icon: CircleUser },
    { title: "Help", url: "/help", icon: CircleQuestionMark },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      {/* HEADER */}
      <SidebarHeader className="p-2">
        <div className="flex justify-center">
          {isVisible && (
            <Image src={skuulLogo} alt="logo" className="w-36 md:w-28" />
          )}
        </div>
      </SidebarHeader>

      <Separator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* DASHBOARD */}
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="cursor-not-allowed">
                  <Link href="#">DashBoard</Link>
                </SidebarMenuButton>

                <SidebarMenuSub>
                  {menuList.dashBoard.items.map((item) => {
                    const active = isActive(item.url, true);
                    return (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={active ? activeSubMenuItem : inactiveItem}
                        >
                          <Link href={item.url} className="text-xs">
                            {item.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>

            {/* FIRST DROPDOWN */}
            <SidebarMenu>
              {menuList.dropdownList.firstDropDownList.map((item) => {
                const parentActive = item.items.some((sub) =>
                  isActive(sub.url, true)
                );

                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={parentActive}
                  >
                    <SidebarMenuItem className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={
                            parentActive ? activeMenuItem : inactiveItem
                          }
                        >
                          <item.icon className="text-current" />
                          <span>{item.title}</span>

                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((sub) => {
                            const active = isActive(sub.url, true);
                            return (
                              <SidebarMenuSubItem key={sub.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={
                                    active ? activeSubMenuItem : inactiveItem
                                  }
                                >
                                  <Link href={sub.url} className="text-xs">
                                    {sub.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>

            {/* COURSES */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className={
                  isActive(menuList.courses.url) ? activeMenuItem : inactiveItem
                }
              >
                <Link href={menuList.courses.url}>
                  <menuList.courses.icon className="text-current" />
                  <span>{menuList.courses.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* CLASSES */}
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className={
                  isActive(menuList.classes.url) ? activeMenuItem : inactiveItem
                }
              >
                <Link href={menuList.classes.url}>
                  <menuList.classes.icon className="text-current" />
                  <span>{menuList.classes.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* SECOND DROPDOWN */}
            <SidebarMenu>
              {menuList.dropdownList.secondDropDownList.map((item) => {
                const parentActive = item.items.some((sub) =>
                  isActive(sub.url, true)
                );

                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={parentActive}
                  >
                    <SidebarMenuItem className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={
                            parentActive ? activeMenuItem : inactiveItem
                          }
                        >
                          <item.icon className="text-current" />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((sub) => {
                            const active = isActive(sub.url, true);
                            return (
                              <SidebarMenuSubItem key={sub.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={
                                    active ? activeSubMenuItem : inactiveItem
                                  }
                                >
                                  <Link href={sub.url} className="text-xs">
                                    {sub.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* OTHERS */}
        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerList.map((item) => {
                const active = isActive(item.url, true);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={active ? activeMenuItem : inactiveItem}
                    >
                      <Link href={item.url}>
                        <item.icon className="text-current" />
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
        <Separator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="text-red-500 hover:bg-red-500/10 transition-all"
            >
              <Link href="/auth/login">
                <LogOut />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
