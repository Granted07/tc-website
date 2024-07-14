import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import {IconArrowBackUp, IconMenu2} from "@tabler/icons-react";

export default function SetNav() {
    const [nav, setNav] = useState(false)
    return (
        <div>
            <Button onClick={() => {
                setNav(true);
            }}
                    className={`sm:hidden right-5 scale-[1.9] top-10 fixed overflow-hidden`}
            >
                <IconMenu2></IconMenu2>
            </Button>

            <div
                className={`${nav && "nav"} fixed h-full w-0 z-20 top-0 bg-amber-500 ease-in-out duration-500 flex flex-col justify-start right-0 sm:hidden overflow-hidden}>`}>
                <Button onClick={() => {
                    setNav(false);
                }}
                        className={`sm:hidden`}
                >
                    <IconArrowBackUp></IconArrowBackUp>
                </Button>
            </div>

        </div>
    );
};

