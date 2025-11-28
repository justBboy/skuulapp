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
          "--sidebar-width": "16rem",
          "--sidebar-width-mobile": "18rem",
        }}
        // SIDEBAR_KEYBOARD_SHORTCUT="b"
      >
        <AppSidebar />
        <PageTransition>
          <ThemeProvider>
            <main>
              <div className="flex shadow-md h-15 px-5 bg-sidebar">
                <SidebarTrigger />
                <HeaderSection />
              </div>
              {children}
            </main>
          </ThemeProvider>
        </PageTransition>
        <Toaster />
      </SidebarProvider>
    </>
  );
}
