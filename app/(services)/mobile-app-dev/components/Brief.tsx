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
            Expelee: Your App, Our Expertise!
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Service:
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            At Expelee, we specialize in crafting cutting-edge mobile
            applications that redefine user experiences and drive business
            success. With a deep-rooted commitment to innovation, our dedicated
            team of developers, designers, and strategists collaborates closely
            with you to transform your app concepts into reality. We understand
            the evolving demands of the digital landscape and create tailor-made
            solutions that not only meet but exceed industry standards. Our
            relentless pursuit of excellence and user-centric design ensures
            that your app will stand out in today&apos;s competitive marketplace.
            <br />
            <br />
            Expelee is not just a mobile application development service; it&apos;s
            your partner in achieving your mobile app goals. From ideation to
            deployment, we provide end-to-end support and expertise. We
            prioritize quality, rigorous testing, and ongoing support to ensure
            your app performs seamlessly across various platforms and devices.
            With years of experience, a collaborative approach, and a passion
            for turning ideas into exceptional mobile experiences, Expelee is
            the smart choice for those who demand excellence in mobile app
            development.
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
                  Consultation: Begin by scheduling a consultation with our
                  expert team. Share your app concept, goals, and expectations.
                  We&apos;ll provide valuable insights, refine your idea, and devise
                  a custom development plan tailored to your vision.
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
                  Our talented designers and developers will craft a visually
                  stunning, user-friendly mobile app that aligns perfectly with
                  your vision. We prioritize seamless user experiences to keep
                  your users engaged.
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
                  Rigorous testing guarantees that your app functions flawlessly
                  across various platforms and devices. Once we&apos;ve verified its
                  quality, we assist with launching it on the App Store and/or
                  Google Play, and we continue to provide support and updates.
                </span>
              </li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Us for Mobile Application Development:
            </h2>
            <p className="mt-6">
              Choose Expelee for mobile application development, and you&apos;re
              choosing a partner dedicated to your success. With a track record
              of excellence, our team brings technical expertise and creative
              innovation to every project. We view our clients as valued
              partners and work closely with you at every stage, ensuring your
              input shapes the final product. Our commitment extends beyond the
              launch, with continuous support and maintenance to keep your app
              up-to-date and problem-free. Expelee is more than just a
              development service; we&apos;re your pathway to creating a mobile app
              that captivates users and drives your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
