import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import cta_image from "@/assets/images/img28.png";
import Link from "next/link";

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

export default function CTA2() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:gap-20 lg:grid-cols-2 justify-between">
          <div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-ex-blue">
                Why choose us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We promise high quality IT services
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Supporting the growth of our clients is a fundamental reason why
                our IT Services is the chosen Austin IT partner for many.
              </p>
              <div className="mt-10 lg:mt-20 border-t border-t-gray-300 flex items-center space-x-10  py-12">
                <div className="w-32 h-32 rounded-full scale-100 border-4 border-ex-dark-blue flex items-center  justify-center ">
                  <p className="text-xl font-black tracking-tight text-gray-900 sm:text-4xl">
                    99%
                  </p>
                </div>
                <div>
                  <p className=" text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    Success Rate
                  </p>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    We help you achieve your goals
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={cta_image}
              alt="cta_image"
              width={500}
              height={500}
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
