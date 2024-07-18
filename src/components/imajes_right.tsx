"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Imajesr() {
  return (
    <div className="flex flex-col bg-background dark:bg-grid-white/[0.05]">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [    
  {
    name: "<img src='C:/Users/anjis/Desktop/vsc/tc-website/src/app/assets/display/1.jpeg'/>"
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
