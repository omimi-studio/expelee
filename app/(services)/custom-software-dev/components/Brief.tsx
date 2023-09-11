import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Brief() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expelee: Your Vision, Our Code.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Service:
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            At Expelee, we are your trusted partner for Custom Software
            Development. We specialize in tailoring software solutions that
            align perfectly with your unique business needs. Our dedicated team
            of developers and engineers is committed to turning your ideas into
            powerful, user-friendly software applications. With a blend of
            cutting-edge technologies and deep industry expertise, we create
            custom software that optimizes processes, enhances efficiency, and
            drives business growth. We prioritize your success, ensuring that
            the software we deliver not only meets but exceeds your
            expectations. When you choose Expelee, you're choosing a reliable
            technology partner dedicated to transforming your concepts into
            reality.
            <br />
            <br />
            Our Custom Software Development service is a collaborative journey.
            We begin with a consultation to understand your specific
            requirements and project objectives. From there, our talented team
            of developers and designers crafts a customized solution that
            prioritizes intuitive user interfaces and seamless functionality.
            Rigorous testing guarantees flawless performance, and our ongoing
            support ensures your software remains up-to-date and problem-free.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="text-base leading-7 text-gray-700 lg:col-span-full">
            <p className="font-bold text-xl mt-6">
              Three Small Steps to Implementing Our Service:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <PhoneIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Consulatation:
                  </strong>{" "}
                  Consultation: Start by scheduling a consultation with our
                  expert team. Share your software needs and objectives, and
                  we'll work closely with you to understand your vision and
                  define project goals
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Development & Design:
                  </strong>{" "}
                  Our talented developers and designers create a customized
                  software solution that aligns perfectly with your
                  requirements, emphasizing intuitive user interfaces and
                  seamless functionality.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Testing & Deployment:
                  </strong>{" "}
                  Rigorous testing ensures your software performs flawlessly
                  across various environments. Once we're confident in its
                  quality, we assist with deployment and continue to provide
                  support and updates.
                </span>
              </li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Us for Custom Software Development:
            </h2>
            <p className="mt-6">
              Choose Expelee for Custom Software Development, and you're
              choosing a partner dedicated to your success. Our experienced team
              brings technical expertise and creative innovation to every
              project. We view our clients as valued partners and work closely
              with you at every stage, ensuring your input shapes the final
              product. Our commitment extends beyond the launch, with continuous
              support and maintenance to keep your software up-to-date and
              problem-free. Expelee is more than just a development service;
              we're your pathway to creating software that optimizes your
              business processes, enhances efficiency, and helps your business
              thrive. When you partner with Expelee, you partner with excellence
              in Custom Software Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
