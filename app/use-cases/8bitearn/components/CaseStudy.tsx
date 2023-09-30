import Image from "next/image";
import sbf from "@/assets/images/1.webp";
import {
  ArrowPathIcon,
  ShareIcon,
  PlusCircleIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Staking",
    description:
      "This staking platform can be used to stake and earn more 8Bit tokens.",
    icon: ServerIcon,
  },
  {
    name: "Credit Facility",
    description: "This is designed to give BUSD as a credit to people",
    icon: PlusCircleIcon,
  },
  {
    name: "Token Distribution",
    description: "Designed to claim the tokens vested or rewards",
    icon: ShareIcon,
  },
  {
    name: " DAO Governance",
    description:
      "Proposals can be created and people can vote to pass the proposal",
    icon: LockClosedIcon,
  },
  {
    name: "Rewards Simulator",
    description: "Helps in distribution of rewards to the people",
    icon: ArrowPathIcon,
  },
];

export default function Article() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <div className="max-w-4xl">
          <figure>
            <Image
              width={1000}
              height={1000}
              className="aspect-auto rounded-xl object-cover"
              src={sbf}
              alt=""
            />
          </figure>
        </div>
        <p className="mt-6 text-xl leading-8">
          Introducing our custom dApp for 8BitEARN, offering a suite of features
          including Staking, DAO, and Credit facilities. We meticulously
          designed and developed this advanced dApp, prioritizing security and
          user-friendly functionality.
          <br />
          <br />
          Experience seamless transactions, enhanced governance, and convenient
          credit options through our meticulously crafted dApp for 8BitEARN. Our
          expert team implemented cutting-edge security measures and intuitive
          features to provide an exceptional user experience.
          <br />
          <br />
          Unlock the full potential of 8BitEARN with our bespoke dApp solution.
          Seamlessly stake your assets, participate in decentralized governance,
          and access credit facilities, all within a secure and user-friendly
          environment. Benefit from our expertise in creating tailored
          blockchain solutions.
        </p>
        <div>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Project Highlights
          </h2>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="block">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
