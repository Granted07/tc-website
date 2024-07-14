// import type { Metadata } from "next";
"use client"

import {Montserrat} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import {ThemeSwitch} from "@/components/theme-switcher"
import {NavigationMenuDemo} from "@/components/navbar"
import {FloatingNav} from "@/components/ui/floating-navbar";
import {IconArticle, IconUser, IconUsers} from "@tabler/icons-react";
import ico from "./favicon.png";
import React from "react";
import SetNav from "@/components/ui/nav-button";

const inter = Montserrat({ subsets: ["latin"] });

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
                  className="md:h-screen w-full h-full overflow-scroll overflow-x-hidden no-scrollbar">
                  <div
                      className="z-50 bottom-10 left-5 fixed bg-background rounded-lg scale-75 lg:scale-100">
                      <ThemeSwitch></ThemeSwitch>
                  </div>
                  <FloatingNav navItems={navItems}/>
                  <div className="flex flex-row justify-between py-2 z-10">

                      <div className="px-7 py-7 sm:flex flex-row">
                          <div style={{
                              backgroundImage: `url(${ico.src})`,

                          }}
                               className=" border-none bg-cover w-[40px] h-[40px] my-auto bg-no-repeat sm:hidden lg:inline-block"></div>
                          <div className="px-4 my-auto">
                              <span className="font-bold lg:text-xl text-nowrap sm:inline-block hidden text-sm">Tech Club</span><br/>
                              <p className={`sm:inline-block hidden text-nowrap text-xs`}>of <a href="https://dpskolkata.com"
                                       className="underline decoration-1">DPS RPK</a></p>
                          </div>
                      </div>
                      <div className="flex justify-center">
                          <NavigationMenuDemo></NavigationMenuDemo>
                      </div>
                      <div className="mx-5 py-4 my-auto bg-foreground rounded-full sm:inline hidden">
                          <span
                              className="text-background text-center px-4 lg:px-10 py-2 text-base font-semibold text-nowrap">Contact Us</span>
                      </div>
                  </div>
                  <div className={`overflow-hidden max-w-fit max-h-fit`}><SetNav></SetNav></div>
                  {children}
              </section>
          </ThemeProvider>

      </body>
    </html>
  );
}
