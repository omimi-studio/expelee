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
            Expelee: Pioneering Your Blockchain Journey
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Service:
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Expelee is your trusted partner for Blockchain Development, leading
            the way in revolutionizing businesses through decentralized
            technologies. Our dedicated team of blockchain experts is committed
            to creating innovative solutions that leverage the power of
            blockchain to enhance transparency, security, and efficiency. With a
            deep understanding of blockchain's potential, we craft tailored
            applications that address your unique needs, whether it's in
            finance, supply chain, healthcare, or any other sector. We pride
            ourselves on staying at the forefront of blockchain advancements,
            ensuring that your project not only keeps up with industry standards
            but also sets new standards of excellence.
            <br />
            <br />
            Our Blockchain Development service is a collaborative journey. We
            initiate it with a consultation to understand your specific
            requirements and business goals. Our skilled team then designs and
            develops a customized blockchain solution that seamlessly integrates
            into your existing systems. Rigorous testing guarantees its security
            and functionality. We assist with deployment and continue to provide
            ongoing support and maintenance to ensure your blockchain
            application remains at the cutting edge of technology.
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
                  Kickstart your blockchain journey with a consultation. Share
                  your business goals, and we'll work closely with you to
                  understand how blockchain can enhance your operations and
                  processes.
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
                  Our team of blockchain specialists designs and develops a
                  customized solution that aligns perfectly with your needs,
                  emphasizing security and efficiency.
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
                  Rigorous testing ensures your blockchain application is secure
                  and functional. We assist with seamless deployment and provide
                  ongoing support and maintenance to keep your blockchain
                  solution running smoothly.
                </span>
              </li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Us for Blockchain Development:
            </h2>
            <p className="mt-6">
              Choose Expelee for Blockchain Development, and you're choosing a
              partner dedicated to your success in the decentralized world. Our
              experienced team brings technical expertise and creative
              innovation to every blockchain project. We view our clients as
              valued collaborators and work closely with you at every stage,
              ensuring your blockchain solution aligns perfectly with your
              goals. Our commitment extends beyond the launch, with continuous
              support, monitoring, and updates to keep your blockchain
              application secure and efficient. Expelee is more than just a
              development service; we're your pathway to leveraging blockchain's
              transformative power to enhance your business's transparency,
              security, and efficiency. When you partner with Expelee, you
              partner with excellence in Blockchain Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
