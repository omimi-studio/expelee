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
    name: "Mobile App Development",
    description:
      "Crafting unparalleled mobile experiences tailored to your business needs",
    icon: app_security_icon,
    link: "mobile-app-dev",
  },
  {
    name: "Custom Software Development",
    description:
      "Bespoke solutions that transform your unique vision into dynamic software.",
    icon: mobile_security_icon,
    link: "custom-software-dev",
  },
  {
    name: "AI/ML Development",
    description:
      "Harness the power of AI and ML to drive innovation and foster intelligent business growth.",
    icon: risk_icon,
    link: "ai-ml-dev",
  },
  {
    name: "Blockchain Development",
    description:
      "everaging blockchain technology to build transparent, secure, and innovative solutions for your business.",
    icon: security_icon,
    link: "blockchain-dev",
  },
  {
    name: "Digital Transformation Services",
    description:
      "Reimagine your business in the digital age with strategies that are forward-thinking and transformative.",
    icon: web_icon,
    link: "digital-transformation",
  },
  {
    name: "DevOps Consulting",
    description:
      "Expert guidance to streamline your operations and foster a culture of continuous improvement with DevOps.",
    icon: cloud_icon,
    link: "devops-consulting",
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-ex-blue">
            Discover Our Latest Services
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ex-dark-blue sm:text-6xl">
            Unleash Potential: Your Gateway to Next-Gen IT Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a suite of services designed to take your business into the
            future.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <Link
              href={card.link}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
