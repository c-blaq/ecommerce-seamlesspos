import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce SeamlessPOS",
  description:
    "Empowering seamless shopping experiences with our Ecommerce Point of Sale - Where convenience meets quality, and every purchase is a delight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={twMerge(
            inter.className,
            "bg-[#f5f5f5] flex flex-col min-h-screen"
          )}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
