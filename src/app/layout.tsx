import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { SearchProvider } from "@/context/searchContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "237 Logos",
  description:
    "An open source collection of high quality, optimised logos of Cameroonian companies.Search and download logos in PNG and SVG formats",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space_grotesk.variable}`}
      suppressHydrationWarning
    >
      <body className={cn("gridBackground absolute")}>
        <ToastContainer />
        <SearchProvider>
          <Navbar />
          <div className="container">{children}</div>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
