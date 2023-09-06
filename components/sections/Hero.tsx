import React from "react";
import bg_image from "@/assets/images/hero-bg.png";
import hero_thumbnail from "@/assets/images/hero-thumb01-999x1024.png";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <div className="relative isolate">
      <Image
        src={bg_image}
        alt="hero_bg_image"
        width={1000}
        height={1000}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-x-0  -z-10  bg-ex-blue/80 min-w-full min-h-full"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8  py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-white">
                IT solutions for the new era
              </span>
            </div>
          </div>
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Advanced IT solutions for the next generation
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            We implement a reliable network. A reliable network is important for
            a small business because it helps keep the business well organized.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/"
              className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-ex-blue shadow-sm hover:bg-ex-dark-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className=" w-full">
            <Image
              src={hero_thumbnail}
              alt="hero_thumbnail"
              width={500}
              height={500}
              className=" object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
