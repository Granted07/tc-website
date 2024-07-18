import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import {IconArrowBackUp, IconMenu2} from "@tabler/icons-react";

export default function SetNav() {
    const [nav, setNav] = useState(false)
    return (
        <div>
            <div onClick={() => {setNav(true);}} className={`sm:hidden right-5 scale-[1.9] top-10 fixed overflow-hidden hover:cursor-pointer`}>
                <IconMenu2></IconMenu2>
            </div>

            <div className={`${nav && "nav"} -right-6 fixed flex flex-col gap-8 h-full w-0 z-100 top-0 bg-background bg-opacity-55 backdrop-blur-md amber-500 ease-in-out duration-500 justify-start sm:hidden overflow-hidden}>`}>
                <div onClick={() => {setNav(false);}} className={`sm:hidden pt-10 hover:cursor-pointer mx-auto`}>
                    <IconArrowBackUp></IconArrowBackUp>
                </div>
                <Button variant={"ghost"} className={`mx-12`}>
                    Blog
                </Button>
                <Button variant={"ghost"} className={`mx-12`}>
                    Members
                </Button>
                <Button variant={"ghost"} className={`mx-12`}>
                    Alumni
                </Button>
                <Button variant={"secondary"}className={`mx-12`}>
                    Contact Us
                </Button>
            </div>

        </div>
    );
};

