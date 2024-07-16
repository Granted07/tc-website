"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Imajesl() {
  return (
    <div className="h-[17rem] rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
    {
        name: "lol_image_1"
    },
    {
        name: "lol_image_2"
    },
    {
        name: "lol_image_3"
    },
    {
        name: "lol_image_4"
    },
];
