import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitch } from "@/components/theme-switcher"
import {NavigationMenuDemo} from "@/components/navbar"
const inter = Montserrat({ subsets: ["latin"] });
import ico from "./favicon.png"
import bg from '../../public/bg.png'

export const metadata: Metadata = {
  title: "Tech Club Website",
};


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
              <section className="md:h-screen relative w-full h-full bg-cover bg-no-repeat bg-backLight dark:bg-backDark">
                <div className="z-50 bottom-10 left-5 fixed bg-background rounded-lg"><ThemeSwitch></ThemeSwitch></div>
                {/* <div className="flex justify-around flex-row text-center py-4 bg-background">
                      <div className="col">
                          <div className="font-bold">Upcoming Events</div>
                          <div>Logique '24</div>
                      </div>
                      <div className="col">
                          <div className="font-bold">Upcoming Events</div>
                          <div>Logique '24</div>
                      </div>
                </div> */}
                <div className="flex flex-row justify-between py-2 z-10 bg-background">
                  <div className="px-7 flex flex-row">
                    <div style={{
                          backgroundImage: `url(${ico.src})`,
                          width: '80px',
                          height: '80px',
                          scale: '50%'
                        
                        }} className=" border-none bg-cover bg-no-repeat" ></div>
                      <div className=" my-auto">
                        <span className="font-bold text-xl text-nowrap">Tech Club</span>
                        <p>of <a href="dpskolkata.com" className=" decoration-1 underline">DPS RPK</a></p>
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
