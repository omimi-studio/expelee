"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const faqs = [
  {
    question: "How can we help your business to provide IT service?",
    answer:
      "Our IT support services, customers can be assisted from multiple channels & it gives end-users more for they can reach a business.",
  },
  {
    question: "How can we help your business to provide IT service?",
    answer:
      "Our IT support services, customers can be assisted from multiple channels & it gives end-users more for they can reach a business.",
  },
  {
    question: "How can we help your business to provide IT service?",
    answer:
      "Our IT support services, customers can be assisted from multiple channels & it gives end-users more for they can reach a business.",
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-base font-semibold leading-7 text-ex-blue">
              Need more information
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-ex-dark-blue sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When we talk to clients about our IT services for their company, a
              few of the same questions come up.
            </p>
            <div className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
              <Link
                href="/"
                className="rounded-full hover:bg-white px-10 py-4 text-sm font-semibold border-2 border-ex-blue text-white hover:text-ex-blue shadow-sm bg-ex-blue r:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 sm:mt-0">
            <dl className=" space-y-5">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="">
                  {({ open }) => (
                    <div className="bg-transparent hover:bg-white hover:ring-0 ring-1 ring-gray-500/50 px-8 py-4 rounded-md">
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6 text-ex-blue"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6 text-ex-blue"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
