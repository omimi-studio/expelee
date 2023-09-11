import Image from "next/image";
import security_icon from "@/assets/icons/s_icon01.png";
import mobile_security_icon from "@/assets/icons/s_icon02.png";
import web_icon from "@/assets/icons/s_icon03.png";
import cloud_icon from "@/assets/icons/s_icon04.png";
import line from "@/assets/images/lines.png";

const cards = [
  {
    name: "Choose a service",
    description: "Great service providers listen first, listen and well",
    icon: security_icon,
    link: "/",
  },
  {
    name: "Request a meeting",
    description: "Feel free to prefer another time and location for you",
    icon: mobile_security_icon,
    link: "/",
  },
  {
    name: "Get custom plans",
    description: "Purchasing a custom drawn home plan ensures you get",
    icon: web_icon,
    link: "/",
  },
  {
    name: "Successfully done",
    description: "Successfully done a project most popular phrase service",
    icon: cloud_icon,
    link: "/",
  },
];

export default function Process() {
  return (
    <div id="works" className="relative isolate overflow-hidden bg-ex-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-ex-blue">
            Our work process
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ex-dark-blue sm:text-6xl">
            We follow a simple work process for work
          </h2>
        </div>
        <div className="relative mt-16  flex flex-col lg:flex-row items-center justify-between gap-10 sm:mt-20 ">
          <div className=" absolute lg:top-[50%] lg:right-0 right-[50%] border-t-0 border-r-2 lg:border-r-0 lg:border-t-2 border-dashed -z-10 border-ex-blue h-full lg:w-full px-20" />
          {cards.map((card, id) => (
            <div
              key={card.name}
              className="flex group items-center justify-center bg-ex-gray flex-col gap-x-4 rounded-xl hover:bg-white p-6   ring-gray-200 hover:ring-0 shadow-sm hover:shadow-lg"
            >
              <div className="bg-white font-semibold text-2xl text-center group-hover:text-white text-ex-blue mt-4 group-hover:bg-ex-dark-blue  w-14 h-14 flex items-center justify-center rounded-full">
                {id}
              </div>

              <div className="text-base text-center leading-7">
                <h3 className="font-semibold text-2xl text-ex-dark-blue mt-4">
                  {card.name}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
