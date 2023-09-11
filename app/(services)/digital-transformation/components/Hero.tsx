import React from "react";
import bg_image from "@/assets/images/hero-bg.png";
import Image from "next/image";
import Link from "next/link";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import {BanknotesIcon} from "@heroicons/react/24/outline";
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
    caption: "xpert Dedicated Web Developers for Hire",
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
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ">
              <span className="font-semibold text-white">
              Expelee: Unleash Your Digital Potential.
              </span>
            </div>
          </div>
          <h1 className="mt-2 max-w-lg text-4xl font-bold tracking leading-relaxed text-white sm:text-6xl">
          Digital Transformation Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            On the way to build and offer numerous products and services that
            will empower IT Industry in upcoming years
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
          <div className=" w-full flex flex-col justify-center items-center gap-10">
            {values.map((value, id) => (
              <div
                key={id}
                className="bg-black w-full flex items-center rounded-xl"
              >
                <div className="p-10 bg-orange-600 rounded-l-xl rounded-r-full h-full aspect-square">
                  <value.icon className="w-10 h-10 text-white" />
                </div>{" "}
                <div className="text-white px-7 py-2">
                  <p>{value?.header}</p>
                  <h3 className="text-3xl font-bold py-1">{value?.title}</h3>
                  <p>{value?.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
