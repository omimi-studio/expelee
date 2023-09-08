"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import logo from "@/assets/images/expelee_logo_light.png";
import {
  Bars3Icon,
  ChartPieIcon,
  ChevronRightIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const core_services = [
  {
    name: "Mobile App Development",
    href: "mobile-app-dev",
  },
  {
    name: "Custom Software Development",
    href: "custom-software-dev",
  },
  { name: "AI/ML Development", href: "ai-ml-dev" },
  {
    name: "Blockchain Development",
    href: "blockchain-dev",
  },
  {
    name: "Digital Transformation Services",
    href: "digital-transformation",
  },
  {
    name: "DevOps Consulting",
    href: "devops-consulting",
  },
];
const secondary_services = [
  { name: "MEAN Stack Development ", href: "#" },
  { name: "Jamstack Development", href: "#" },
  { name: "Saas Development", href: "#" },
  { name: "Front-end Development", href: "#" },
  { name: "UI/UX Design Testing & QA", href: "#" },
  { name: "Web App Development", href: "#" },
];
const others_services = [
  { name: "Product Development  ", href: "#" },
  { name: "MVP Development", href: "#" },
  { name: "eCommerce Development", href: "#" },
  { name: "Web Development", href: "#" },
  { name: "IOT App Development", href: "#" },
  { name: "AR/VR Development", href: "#" },
];

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 border-b-[0.3px] border-gray-900 isolate z-50 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={logo}
              alt="expelee logo light"
              width={150}
              height={150}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-white">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-gradient-to-b from-transparent from-1% via-white via-1%  to-white pt-16 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-14 lg:grid-cols-2 lg:px-8">
                  <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                    <div>
                      <h3 className="text-xl font-bold leading-6 text-gray-900">
                        Core Services
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="my-2">
                          {core_services.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                            >
                              <ChevronRightIcon className="w-4 " />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-6 text-gray-900">
                        Other Services
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="my-2">
                          {secondary_services.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold leading-6 text-gray-900 hidden">
                        Other Services
                      </h3>
                      <div className="mt-12 flow-root">
                        <div className="-my-2">
                          {others_services.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <article className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
                      <div className="relative flex-none ">
                        <h3 className="text-lg font-bold text-black ">
                          Pioneer disruptive business innovation with high-end
                          creativity and world-class alliance.
                        </h3>
                      </div>
                      <div>
                        <h4 className="mt-1 text-sm font-semibold leading-6 text-gray-900">
                          Contact Us
                        </h4>
                        <p className="mt-2 leading-6 text-gray-900">
                          +971 558957731
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                          Email Us
                        </h4>
                        <p className="mt-2 leading-6 text-gray-900">
                          business@expelee.com
                        </p>
                        <p className="mt-1 leading-6 text-gray-690">
                          careers@expelee.com
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="#team"
            className="text-base font-semibold leading-6 text-white"
          >
            Team
          </Link>
          <Link
            href="#testimonials"
            className="text-base font-semibold leading-6 text-white"
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-base font-semibold leading-6 text-white"
          >
            Our Works
          </Link>

          <Link
            href="#"
            className="text-base font-semibold leading-6 text-white"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-base font-semibold leading-6 text-white"
          >
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/"
            className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-ex-blue shadow-sm hover:bg-ex-dark-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-ex-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <Image
                src={logo}
                alt="expelee logo light"
                width={100}
                height={50}
                className="object-cover"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100 bg-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-100 hover:bg-ex-dark-blue">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[
                          ...core_services,
                          ...secondary_services,
                          ...others_services,
                        ].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/#team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Team
                </Link>
                <Link
                  href="#team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Testimonials
                </Link>
                <Link
                  href="#testimonial"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Our Works
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-ex-blue shadow-sm hover:bg-ex-dark-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
