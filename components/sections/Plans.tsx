import { CheckIcon } from "@heroicons/react/24/outline";

const tiers = [
  {
    name: "Standard Plan",
    id: "tier-basic",
    href: "#",
    price: { monthly: "$30", annually: "$12" },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Professional Plan",
    id: "tier-essential",
    href: "#",
    price: { monthly: "$85", annually: "$24" },
    description:
      "Everything in Basic, plus essential tools for growing your business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Enterprise Plan",
    id: "tier-growth",
    href: "#",
    price: { monthly: "$199", annually: "$48" },
    description:
      "Everything in Essential, plus collaboration tools and deeper insights.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

export default function Plans() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-ex-blue">
            Choose your best plan
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ex-dark-blue sm:text-6xl">
            We provide simple pricing plans for you
          </h2>
        </div>
        <div className="mt-20 flow-root">
          <div className=" isolate -mt-16 grid max-w-sm grid-cols-1 gap-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="group shadow-sm hover:shadow-lg lg:px-8 xl:px-14 hover:bg-white py-10 rounded-md"
              >
                <h3
                  id={tier.id}
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {tier.price.annually} per month if paid annually
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-full group-hover:bg-ex-blue bg-transparent ring-2 text-ex-blue group-hover:text-white ring-ex-blue px-6 py-4 text-center text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Choose plan
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-ex-dark-blue"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
