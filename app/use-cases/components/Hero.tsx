import React from "react";
import bg_image from "@/assets/images/hero-bg.png";
import Image from "next/image";
import Link from "next/link";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/outline";
const values = [
  {
    icon: GlobeAltIcon,
    header: "Vast Industry",
    title: "2+ Years",
    caption: "Globally Empowering Business of all Domains",
  },
  {
    icon: ArrowPathRoundedSquareIcon,
    header: "Methodology",
    title: "Agile Method",
    caption: "Flexible Execution with Powerful Engagement",
  },
  {
    icon: UserGroupIcon,
    header: "In-house Pre-vetted Developers",
    title: "20+",
    caption: "Dedicated Web Developers for Hire",
  },
  {
    icon: BanknotesIcon,
    header: "Cost-Efficient Process",
    title: "50%",
    caption: "Save on Development and Maintenance Costs",
  },
];
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
        className="absolute inset-x-0  -z-10  bg-ex-blue/80 min-w-full min-h-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8  py-24 sm:py-32 lg:flex lg:gap-x-10 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
             From Our Usecases
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Learn how from examples of our recent projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
