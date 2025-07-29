import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Semibold.eot",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "HeyAmith",
  description: "Personal portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clashDisplay.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}

          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
