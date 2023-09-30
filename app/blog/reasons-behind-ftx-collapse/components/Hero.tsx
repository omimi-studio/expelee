import React from "react";
import bg_image from "@/assets/images/sbf.webp";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative isolate">
      <Image
        src={bg_image}
        alt="hero_bg_image"
        width={1000}
        height={500}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-x-0  -z-10  bg-ex-blue/40 min-w-full min-h-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8  py-24 sm:py-32 lg:flex lg:gap-x-10 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Reasons Behind FTX Collapse: True Story Revealed
            </h2>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
