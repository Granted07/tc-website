"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

export function Imajesl() {
  return (
    <div className="h-[17rem] rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
        name: "C://Users/anjis/Desktop/vsc/tc-website/src/app/assets/display/1.jpeg"
    },
    {
        name: "C://Users/anjis/Desktop/vsc/tc-website/src/app/assets/display/1.jpeg"
    },
    {
        name: "C://Users/anjis/Desktop/vsc/tc-website/src/app/assets/display/1.jpeg"
    },
    {
        name: "C://Users/anjis/Desktop/vsc/tc-website/src/app/assets/display/1.jpeg"
    },
];
