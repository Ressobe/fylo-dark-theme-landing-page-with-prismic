import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import clsx from "clsx";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "fallback",
    description: settings.data.meta_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          raleway.variable,
          openSans.variable,
          "bg-dark-blue1 text-white",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
