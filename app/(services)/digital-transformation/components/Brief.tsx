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
            Expelee: Unleash Your Digital Potential.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Service:
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Expelee is your strategic ally for Digital Transformation Services,
            dedicated to reimagining your business for the digital age. Our
            seasoned team of experts understands that successful digital
            transformation goes beyond technology; it's about reshaping
            processes, cultures, and strategies to thrive in a rapidly evolving
            landscape. We work collaboratively with you to craft a tailored
            transformation roadmap that leverages the latest digital
            innovations. Whether you aim to enhance customer experiences,
            optimize operations, or harness data-driven insights, Expelee
            empowers your organization to unlock its full digital potential.
            With a deep commitment to excellence and a track record of
            successful transformations, we are the catalyst for your digital
            success.
            <br />
            <br />
            Our Digital Transformation Services involve a holistic approach to
            change. It starts with a comprehensive assessment of your current
            state and goals. Our expert team then devises a strategy that aligns
            technology, processes, and culture with your objectives.
            Implementation follows, with careful execution and monitoring to
            ensure a seamless transition. We provide continuous support,
            training, and refinement to keep your digital transformation on
            track and adaptive to market shifts.
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
                    Assessment & Strategy:
                  </strong>{" "}
                  We begin by assessing your current state, challenges, and
                  digital objectives. Based on this assessment, we craft a
                  tailored digital transformation strategy aligned with your
                  goals.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Implementation & Monitoring:
                  </strong>{" "}
                  With a well-defined strategy in place, we execute the
                  transformation plan, closely monitoring progress and making
                  real-time adjustments as needed to ensure a seamless
                  transition.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Support & Refinement:
                  </strong>{" "}
                  Our commitment extends beyond the implementation. We provide
                  continuous support, training, and refinement to keep your
                  digital transformation adaptive, efficient, and aligned with
                  your evolving business needs.
                </span>
              </li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Us for Digital Transformation Services:
            </h2>
            <p className="mt-6">
              Choose Expelee for Digital Transformation Services, and you're
              selecting a partner committed to your digital evolution. Our
              experienced team brings a blend of technical expertise and
              strategic vision to every transformation project. We see our
              clients as collaborative partners and work closely with you to
              co-create a digital future that aligns with your unique
              objectives. Our commitment extends beyond initial implementation,
              with ongoing support, training, and refinement to ensure your
              digital transformation remains agile and effective in an
              ever-changing landscape. Expelee is not just a service provider;
              we're your catalyst for a successful digital future, helping your
              organization thrive in the digital age. When you partner with
              Expelee, you partner with excellence in Digital Transformation
              Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
