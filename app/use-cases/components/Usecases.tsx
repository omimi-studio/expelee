import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import bitearn from "@/assets/images/1.webp";
import forge from "@/assets/images/2.webp";
import space from "@/assets/images/3.webp";
import dex from "@/assets/images/5.webp";
import logo1 from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import logo3 from "@/assets/images/logo3.png";
import logo5 from "@/assets/images/logo5.png";
const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Usecases() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-10 lg:space-y-20">
        {/* bitearn */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <Image
                src={logo1}
                alt="Product screenshot"
                className="w-24 rounded-full  h-24  mb-5"
                width={100}
                height={100}
              />
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The 8BitEARN dApp built by Expelee
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Introducing our custom dApp for 8BitEARN, offering a suite of
                features including Staking, DAO, and Credit facilities. We
                meticulously designed and developed this advanced dApp,
                prioritizing security and user-friendly functionality.
              </p>
              <div className="mt-10">
                <Link
                  href="/use-cases/8bitearn"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold border border-ex-blue hover:text-white text-ex-blue shadow-sm hover:bg-ex-blue focus-visible:outline  "
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={bitearn}
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl "
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* forge */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <Image
              src={forge}
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl "
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex items-start justify-end order-first">
            <div className="lg:max-w-lg">
              <Image
                src={logo2}
                alt="Product screenshot"
                className="w-24 rounded-full  h-24  mb-5"
                width={100}
                height={100}
              />
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Defi Forge
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Introducing our revolutionary DApp for Defi Forge, aimed at
                transforming the DeFi landscape with enhanced utilities for a
                safer and user-friendly experience. Our team seamlessly
                integrated two innovative DApps with their website, amplifying
                their platform&apos;s capabilities.
              </p>
              <div className="mt-10">
                {/* <Link
                  href="/"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold border border-ex-blue hover:text-white text-ex-blue shadow-sm hover:bg-ex-blue focus-visible:outline  "
                >
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* space */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <Image
                src={logo3}
                alt="Product screenshot"
                className="w-24 rounded-full  h-24  mb-5"
                width={100}
                height={100}
              />
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Space Warriors dApp built by Expelee
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Introducing our groundbreaking DApp, Space Warriors, a staking
                and rewards platform that enables users to earn rewards by
                staking their tokens. We developed this innovative solution to
                provide a seamless and rewarding experience for our client and
                their users.
              </p>
              <div className="mt-10">
                {/* <Link
                  href="/"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold border border-ex-blue hover:text-white text-ex-blue shadow-sm hover:bg-ex-blue focus-visible:outline  "
                >
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={space}
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl "
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* dex */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <Image
              src={dex}
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl "
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex items-start justify-end order-first">
            <div className="lg:max-w-lg">
              <Image
                src={logo5}
                alt="Product screenshot"
                className="w-24 rounded-full  h-24  mb-5"
                width={100}
                height={100}
              />
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The 8BitEARN(DEX) built by Expelee
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We have created a decentralized exchange (DEX) exclusively for
                8BitEARN, offering a secure and efficient platform for trading
                their native token. Built on robust blockchain technology, our
                DEX ensures transparent and tamper-proof transactions, providing
                a seamless experience for buying, selling, and trading 8BitEARN
                tokens
              </p>
              <div className="mt-10">
                {/* <Link
                  href="/"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold border border-ex-blue hover:text-white text-ex-blue shadow-sm hover:bg-ex-blue focus-visible:outline  "
                >
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
