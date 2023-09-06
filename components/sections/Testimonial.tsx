"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More testimonials...
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const handlePrevClick = () => {
    if (scrollRef.current) {
      // @ts-ignore
      scrollRef.current.scrollBy({
        // @ts-ignore
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      // @ts-ignore
      scrollRef.current.scrollBy({
        // @ts-ignore
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-ex-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-ex-blue">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ex-dark-blue sm:text-6xl">
            See what people are saying about us
          </h2>
        </div>
        <div className="relative mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div
            ref={scrollRef}
            className="scrollbar relative snap-mandatory py-5  flex snap-x max-w-7xl space-x-4 mt-5 overflow-x-scroll"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="py-8 px-4 snap-start snap-always flex-shrink-0  ring-1 ring-gray-300 rounded-md"
              >
                <figure className="mx-auto max-w-sm ">
                  <p className="sr-only">5 out of 5 stars</p>
                  <div className="flex gap-x-1 text-yellow-400">
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                  </div>
                  <blockquote className="mt-10 text-lg font-normal leading-8 tracking-tight text-gray-900 sm:text-xl sm:leading-9">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div className="text-sm leading-6">
                      <div className="font-semibold text-gray-900">
                        {" "}
                        {testimonial.author.name}
                      </div>
                      <div className="mt-0.5 text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrevClick}
            className="hidden absolute top-[50%] -left-5 items-center justify-center lg:flex  w-10 h-10 shadow-xl  bg-white text-black rounded-full"
          >
            <ChevronLeftIcon className="h-6 w-6 text-black" />
          </button>
          <button
            onClick={handleNextClick}
            className="hidden absolute top-[50%] -right-5 items-center justify-center lg:flex  w-10 h-10 shadow-xl  bg-white text-black rounded-full"
          >
            <ChevronRightIcon className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
