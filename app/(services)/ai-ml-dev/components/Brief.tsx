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
            Expelee: Where AI Meets Your Vision.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Service:
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            At Expelee, we are your go-to partner for AI/ML Development. We
            specialize in harnessing the power of Artificial Intelligence and
            Machine Learning to transform your business operations and drive
            innovation. Our dedicated team of AI/ML experts is committed to
            creating intelligent solutions that cater to your specific needs. We
            understand the dynamic landscape of AI and ML, and we leverage this
            knowledge to craft tailored applications that streamline processes,
            optimize decision-making, and propel your business forward. Our
            mission is to make AI/ML accessible to businesses of all sizes, and
            we achieve this through a blend of cutting-edge technologies and a
            deep understanding of your industry.
            <br />
            <br />
            Our AI/ML Development service is a collaborative journey. It starts
            with a consultation to understand your unique requirements and
            objectives. From there, our team of AI/ML specialists designs and
            develops a customized solution that aligns perfectly with your
            goals. Rigorous testing ensures the model's accuracy and
            performance. We then assist with the integration and provide ongoing
            support and fine-tuning to ensure your AI/ML application continues
            to deliver value.
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
                  Begin with a consultation with our AI/ML experts. Share your
                  objectives and requirements, and we'll work closely with you
                  to understand your vision and goals.
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
                  Our team designs and develops a customized AI/ML solution that
                  aligns perfectly with your needs, emphasizing accuracy and
                  performance.
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
                  Rigorous testing ensures the AI/ML model performs with
                  precision. We assist with seamless integration and provide
                  ongoing support and fine-tuning to ensure sustained value.
                </span>
              </li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Us for AI/ML Development:
            </h2>
            <p className="mt-6">
              Choose Expelee for AI/ML Development, and you're choosing a
              partner dedicated to your success. Our experienced team brings
              deep expertise and creative innovation to every AI/ML project. We
              view our clients as valued collaborators and work closely with you
              at every stage, ensuring your input shapes the final solution. Our
              commitment extends beyond the initial deployment, with continuous
              support, monitoring, and optimization to keep your AI/ML
              application at its peak performance. Expelee is more than just a
              development service; we're your pathway to leveraging the full
              potential of AI and ML to drive business growth and innovation.
              When you partner with Expelee, you partner with excellence in
              AI/ML Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
