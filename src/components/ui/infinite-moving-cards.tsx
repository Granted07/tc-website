"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/app/assets/display/1.jpeg"
import img2 from "@/app/assets/display/2.jpeg"
import img3 from "@/app/assets/display/3.jpeg"
import img4 from "@/app/assets/display/4.jpeg"
import img5 from "@/app/assets/display/5.jpeg"
import img6 from "@/app/assets/display/6.jpeg"
import img7 from "@/app/assets/display/7.jpeg"
import img8 from "@/app/assets/display/8.jpeg"
import img9 from "@/app/assets/display/9.jpeg"
import img10 from "@/app/assets/display/10.jpeg"
import img11 from "@/app/assets/display/11.jpeg"



export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    name: any;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          // scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "400s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0  py-4 w-[1300rem] flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div key={item.name} className="flex justify-around py-7 flex-row h-[20rem] mx-[0.1]">
            
            <img className=" rounded-2xl" src={img8.src}/>
            <img className=" rounded-2xl" src={img4.src}/>
            <img className=" rounded-2xl" src={img10.src}/>
            <img className=" rounded-2xl" src={img5.src}/>
            <img className=" rounded-2xl" src={img6.src}/>
            <img className=" rounded-2xl" src={img7.src}/>
            <img className=" rounded-2xl" src={img9.src}/>
            <img className=" rounded-2xl" src={img1.src}/>
            <img className=" rounded-2xl" src={img11.src}/>
            <img className=" rounded-2xl" src={img3.src}/>
            <img className=" rounded-2xl" src={img2.src}/>
          </div>
        ))}
      </ul>
    </div>
  );
};
