import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import cta_image from "@/assets/images/img35.png";
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

export default function CTA() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="">
            <Image
              src={cta_image}
              alt="cta_image"
              width={500}
              height={500}
              className=" object-cover"
            />
          </div>
          <div className="">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-ex-blue">
                About Expelee
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-loose text-gray-900 sm:text-5xl">
                We&apos;re the world&apos;s best IT solutions company
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In a rapidly evolving digital landscape, Expelee stands as a
                beacon of innovation, reliability, and expertise. Founded on the
                principles of fostering growth and harnessing technology to
                facilitate success, we at Expelee dedicate ourselves to
                providing tailored IT services that meet and exceed the
                expectations of our clients.
                <br />
                <br />
                At Expelee, we envision a future where technology acts as a
                seamless bridge connecting your business ambitions to reality.
                Join us in building that future, one innovative solution at a
                time.
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
          </div>
        </div>
      </div>
    </div>
  );
}
