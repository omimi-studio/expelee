import Image from "next/image";
import security_icon from "@/assets/icons/s_icon01.png";
import mobile_security_icon from "@/assets/icons/s_icon02.png";
import web_icon from "@/assets/icons/s_icon03.png";
import cloud_icon from "@/assets/icons/s_icon04.png";
import app_security_icon from "@/assets/icons/s_icon05.png";
import risk_icon from "@/assets/icons/s_icon06.png";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
const cards = [
  {
    name: "Network Security",
    description:
      "Network Security protects your network and data from breaches, intrusions and other threats. This is a vast",
    icon: security_icon,
    link: "/",
  },
  {
    name: "Mobile Security",
    description:
      "Network Security protects your network and data from breaches, intrusions and other threats. This is a vast",
    icon: mobile_security_icon,
    link: "/",
  },
  {
    name: "Web Solutions",
    description:
      "Technically a web solution is a program distributed over a network & accessible through a common web browser.",
    icon: web_icon,
    link: "/",
  },
  {
    name: "Cloud Security",
    description:
      "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    icon: cloud_icon,
    link: "/",
  },
  {
    name: "Application Security",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: app_security_icon,
    link: "/",
  },
  {
    name: "Risk Management",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: risk_icon,
    link: "/",
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-ex-blue">
            Our latest services
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ex-dark-blue sm:text-6xl">
            Services that help keep your organization secure
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are pioneers of the digital approach, using leading-edge
            technology to simplify procedures and apply executive for your
            business
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex hover:scale-105 ease-in-out items-center justify-center flex-col gap-x-4 rounded-xl bg-white p-6  ring-1 ring-inset ring-gray-200 hover:ring-0 shadow-sm hover:shadow-lg"
            >
              <Image
                src={card.icon}
                alt={card.name}
                width={100}
                height={100}
                className=" object-cover w-20 h-20"
              />
              <div className="text-base text-center leading-7">
                <h3 className="font-semibold text-2xl text-ex-dark-blue mt-4">
                  {card.name}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
              <Link
                href={card.link}
                className="inline mt-4 font-medium text-ex-dark-blue"
              >
                Read More{" "}
                <ArrowLongRightIcon className="w-6 font-thin inline-flex" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
