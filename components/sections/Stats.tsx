import people from "@/assets/icons/c_icon01.png";
import bulb from "@/assets/icons/c_icon02.png";
import spark from "@/assets/icons/c_icon03.png";
import Image from "next/image";
const stats = [
  { id: 1, name: "Successful Projects", value: "500+", icon: people },
  { id: 2, name: "Cost Advantage", value: "60%", icon: bulb },
  { id: 3, name: "Services", value: "25+", icon: spark },
];

export default function Stats() {
  return (
    <div className="bg-ex-dark-blue py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left max- ">
            <h2 className="mt-4 text-3xl font-bold trackinG text-white sm:text-5xl">
              By the Numbers: <br /> Expelee&apos;s Story of Success
            </h2>
          </div>
          <dl className="flex mt-12 lg:mt-0 flex-col lg:flex-row items-center justify-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center gap-6 p-8"
              >
                <div>
                  <Image
                    src={stat.icon}
                    alt="cta_image"
                    width={50}
                    height={50}
                    className=" object-cover "
                  />
                </div>
                <dd className=" text-5xl font-bold tracking-tight text-white">
                  {stat.value}
                </dd>
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
