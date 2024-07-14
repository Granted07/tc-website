import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitch } from "@/components/theme-switcher"
import {NavigationMenuDemo} from "@/components/navbar"
const inter = Montserrat({ subsets: ["latin"] });
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconArticle, IconUser, IconUsers } from "@tabler/icons-react";
import ico from "./favicon.png"
import React from "react";

export const metadata: Metadata = {
  title: "Tech Club Website",
};

const navItems = [
    {
        name: "Blog",
        link: "/",
        icon: <IconArticle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Members",
        link: "/",
        icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Alumni",
        link: "/",
        icon: (
            <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
];


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
              <section
                  className="md:h-screen relative w-full h-full bg-cover bg-no-repeat bg-backLight dark:bg-backDark overflow-scroll overflow-x-hidden no-scrollbar">
                  <div
                      className="z-50 bottom-10 left-5 fixed bg-background rounded-lg scale-30 sm:scale-50 md:scale-75 lg:scale-100">
                      <ThemeSwitch></ThemeSwitch></div>
                  <FloatingNav navItems={navItems}/>
                  <div className="flex flex-row justify-between py-2 z-10">
                      <div className="px-7 flex flex-row">
                          <div style={{
                              backgroundImage: `url(${ico.src})`,
                              width: '80px',
                              height: '80px',
                              scale: '50%'

                          }} className=" border-none bg-cover bg-no-repeat"></div>
                          <div className=" my-auto">
                              <span className="font-bold text-xl text-nowrap">Tech Club</span>
                              <p>of <a href="https://dpskolkata.com" className=" decoration-1 underline">DPS RPK</a></p>
                          </div>
                      </div>
                      <div className="flex justify-center">
                          <NavigationMenuDemo></NavigationMenuDemo>
                      </div>
                      <div className="mx-7 py-4 my-auto  bg-foreground rounded-full">
                          <span className="text-background text-center px-10 py-2 text-base font-semibold text-nowrap">Contact Us</span>
                      </div>
                  </div>
                  {children}
              </section>
          </ThemeProvider>

      </body>
    </html>
  );
}
