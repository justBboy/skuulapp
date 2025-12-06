import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import PageTransition from "@/components/animations/page-transitions";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skuul Global | Admin",
  description: "Developed by Lawson Samson > Shipman Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme="light" style={{ colorScheme: "light" }}
    <html lang="en" suppressHydrationWarning>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
