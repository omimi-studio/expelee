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
            Expelee: Bridging Your DevOps Divide.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Service:
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Expelee is your trusted partner for DevOps Consulting, empowering
            organizations to bridge the gap between development and operations
            seamlessly. Our dedicated team of DevOps experts understands that
            successful DevOps implementation is more than just a set of tools;
            it&apos;s a culture, a mindset, and a methodology that accelerates
            delivery, improves quality, and fosters collaboration. With
            Expelee&apos;s DevOps Consulting, we guide you through the entire DevOps
            journey, from assessment and strategy to implementation and
            continuous improvement. Our mission is to help you achieve agility,
            streamline processes, and enhance your ability to respond to market
            demands effectively. We prioritize your success and bring a wealth
            of experience to create a tailored DevOps solution that aligns with
            your business goals and objectives.
            <br />
            <br />
            Our DevOps Consulting service follows a systematic approach to
            transformation. It commences with an in-depth assessment of your
            current processes and needs. Based on this assessment, our expert
            team devises a comprehensive DevOps strategy tailored to your unique
            challenges. The implementation phase involves meticulous execution
            and monitoring, ensuring a smooth transition. We remain committed to
            continuous improvement, providing ongoing support, training, and
            optimization to ensure your DevOps transformation remains aligned
            with your evolving business requirements.
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
                  Our journey together begins with a thorough assessment of your
                  existing processes and challenges. Based on the assessment, we
                  develop a customized DevOps strategy that aligns with your
                  unique objectives.
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
                  With a solid strategy in place, we move on to the
                  implementation phase, focusing on meticulous execution and
                  continuous monitoring to ensure a seamless transition to
                  DevOps practices.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Support & Optimization:
                  </strong>{" "}
                  Our commitment extends well beyond implementation. We provide
                  ongoing support, training, and optimization to fine-tune your
                  DevOps practices, ensuring they remain efficient and aligned
                  with your ever-evolving business needs.
                </span>
              </li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Us for DevOps Consulting:
            </h2>
            <p className="mt-6">
              Selecting Expelee for DevOps Consulting means choosing a partner
              dedicated to catalyzing your DevOps transformation. Our
              experienced team brings a blend of technical expertise and
              strategic vision to every engagement. We don&apos;t just offer
              solutions; we work collaboratively with you to co-create a DevOps
              culture that accelerates your software development lifecycle and
              enhances your operational efficiency. Our commitment extends
              beyond initial implementation, with continuous support, training,
              and optimization to ensure your DevOps practices remain agile and
              effective in an ever-changing technological landscape. When you
              partner with Expelee, you&apos;re choosing excellence in DevOps
              Consulting, enabling your organization to thrive in today&apos;s
              fast-paced software development environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
