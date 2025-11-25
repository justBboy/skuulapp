import PageTransition from "@/components/animations/page-transitions";
import { AppSidebar } from "@/components/navBar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageTransition>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
          <Toaster />
        </SidebarProvider>
      </PageTransition>
    </>
  );
}
