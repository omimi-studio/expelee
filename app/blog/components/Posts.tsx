import Link from "next/link";
import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";
import blog3 from "@/assets/images/blog-3.png";
import blog4 from "@/assets/images/blog-4.png";
import blog5 from "@/assets/images/blog-5.png";
import blog6 from "@/assets/images/blog-6.png";
import blog7 from "@/assets/images/blog-7.png";
import blog8 from "@/assets/images/blog-8.png";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Reasons Behind FTX Collapse: True Story Revealed",
    href: "blog/reasons-behind-ftx-collapse",
    description:
      "FTX collapse sent some rude shocking waves to everyone across the crypto industry. After all, it’s not just any crypto...",
    imgUrl: blog5,
    date: "Nov 2022",
  },
  {
    id: 2,
    title: "Metaweb: The Future Internet",
    href: "https://medium.com/@expelee/metaweb-the-future-internet-dbc8d0b5c008",
    description:
      "It is safe to say that we are all past the uncertainty regarding web 3.0 & whether it will be able…",
    imgUrl: blog1,
    date: "March 2023",
  },
  {
    id: 3,
    title: "Major ‘E’ Concepts in the Crypto Space",
    href: "https://medium.com/@expelee/want-to-go-deep-dive-into-web3-here-are-major-e-concepts-in-the-crypto-space-261563142f82",
    description:
      "Web3 is a growing domain with the latest trends and concepts coming in. To help you stay informed…",
    imgUrl: blog2,
    date: "Feb 2023",
  },
  {
    id: 4,
    title: "Web3 & Finance Tips to Note in 2023",
    href: "https://medium.com/@expelee/16-web3-and-18-financial-intelligence-tips-to-note-in-2023-2bdac9c3309c",
    description:
      "Happy New Year, everyone! We are glad to welcome you onboard our editorials in 2023....",
    imgUrl: blog3,
    date: "Jan 2023",
  },
  {
    id: 5,
    title: "9 Ways to Identify Scams in the Crypto Space",
    href: "https://medium.com/@expelee/9-ways-to-identify-scams-in-the-crypto-space-b7f92f0c1480",
    description:
      "One of the most popular investment advice in the DeFi space is to first carry out a deep research..",
    imgUrl: blog4,
    date: "Dec 2022",
  },
  {
    id: 5,
    title: "How much Supercomputer power does a Bitcoin Server have?",
    href: "https://medium.com/@expelee/how-much-supercomputer-power-does-a-bitcoin-server-have-4141c3361d8d",
    description:
      "A supercomputer can process one quadrillion of FLOPS, i.e., Floating Point...",
    imgUrl: blog6,
    date: "Oct 2022",
  },
  {
    id: 5,
    title: "What Is NFT all about?",
    href: "https://medium.com/@expelee/what-is-nft-all-about-4c103aa7763a",
    description:
      "NFT or Non-fungible token is a digital asset that portrays real-world objects such as videos, music, art, in-game items, and even memes. You can buy and sell NFTs online more often with...",
    imgUrl: blog7,
    date: "Sep 2022",
  },
  {
    id: 5,
    title: "Breaking into the Blockchain Space",
    href: "https://medium.com/@expelee/breaking-into-the-blockchain-space-246e3940401d",
    description:
      "The financial and social globe has evolved in a very unique way in the past decade, making data the most precious...",
    imgUrl: blog8,
    date: "Aug 2022",
  },

  // More posts...
];

export default function Posts() {
  return (
    <div className="bg-white py-24  relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-auto  lg:w-64 lg:shrink-0">
                  <Image
                    src={post.imgUrl}
                    alt=""
                    width={500}
                    height={500}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-covr"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">{post.date}</time>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <Link
                        href={post.href}
                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold border border-ex-blue hover:text-white text-ex-blue shadow-sm hover:bg-ex-blue focus-visible:outline  "
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
