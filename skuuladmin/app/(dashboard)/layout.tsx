import PageTransition from "@/components/animations/page-transitions";
import HeaderSection from "@/components/headers/header";
import { AppSidebar } from "@/components/navBar/app-sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider
        style={{
          "--sidebar-width": "14rem",
          "--sidebar-width-mobile": "16rem",
        }}
        // SIDEBAR_KEYBOARD_SHORTCUT="b"
      >
        <AppSidebar />
        <PageTransition>
          <ThemeProvider>
            <main className="relative">
              <div className="flex shadow-md h-15 px-5 bg-sidebar sticky rounded-none top-0 z-10 shrink-0 transition-[width,height] ease-linear">
                <SidebarTrigger />
                <HeaderSection />
              </div>
              <div className="mx-5 overflow-y-scroll no-scrollbar">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </PageTransition>
        <Toaster />
      </SidebarProvider>
    </>
  );
}
