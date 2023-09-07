import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import person from "@/assets/images/hero-thumb01-999x1024.png";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person,
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person,
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person,
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person,
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person,
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: person,
  },

  // More people...
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 lg:grid-cols-2">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Meet members of our creative team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We work to create the most attractive & meaningful place for small
            businesses. Our Team always ready to help you.
          </p>
          <div className="mt-10 flex items-center lg:items-start justify-start lg:justify-center flex-col gap-y-4  text-center lg:text-left">
            <p className="text-lg font-bold leading-8 text-gray-900 inline-flex">
              <CheckCircleIcon className="w-8 h-8 text-ex-blue mr-2" />A team
              consisting of skilled members
            </p>
            <p className="text-lg font-bold leading-8 text-gray-900 inline-flex">
              <CheckCircleIcon className="w-8 h-8 text-ex-blue mr-2" />A team
              Ready to help you 24/7 support
            </p>
          </div>
        </div>
        <div>
          <ul
            role="list"
            className="grid gap-x-6 gap-y-12  sm:gap-y-16  sm:grid-cols-2  lg:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center  justify-center flex-col gap-x-6">
                  <Image
                    className="h-32 w-32 rounded-full"
                    src={person.imageUrl}
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-lg font-semibold leading-6 text-gray-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
