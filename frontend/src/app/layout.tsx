import "@/styles/globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartment listing app",
  description: "Apartment listing app",
};

import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import NavigationMenu from "@/components/layout/menu";
import { ApartmentsProvider } from "@/store/ApartmentProvider";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "p-5 min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <>
          <NavigationMenu />
          <div className="flex justify-center items-center">
          <ApartmentsProvider>
          {children}
          </ApartmentsProvider>
          </div>
          </>
          </body>
    </html>
  );
}
