import Image from "next/image";
import sbf from "@/assets/images/sbf-ftx.webp";
import ftx from "@/assets/images/ftx.webp";
export default function Article() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          4 min read · Nov 27, 2022
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The Reasons Behind FTX Collapse: True Story Revealed
        </h1>
        <p className="mt-6 text-xl leading-8">
          FTX collapse sent some rude shocking waves to everyone across the
          crypto industry. After all, it&apos;s not just any crypto exchange
          involved in the collapse saga, but the world&apos;s third-largest
          cryptocurrency exchange (sorry, it was the world&apos;s third-largest
          exchange). This exchange was touted to outgrow Binance as the largest
          crypto exchange. Unfortunately, that dream is in ashes now.
        </p>
        <div className="mt-10 max-w-4xl">
          <p>
            What really happened to FTX? A lot of people seem to have shallow
            information about the whole saga, but as discussed on Expelee&apos;s
            Twitter Space, we will, in this article, reflect on the Founder and
            what led to the collapse. Let&apos;s get started.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Who is the Founder of FTX?
          </h2>
          <p className="mt-6">
            Sam Bankman-Fried, popularly known by the initials SBF, is the
            founder of FTX. He is also the former CEO of the cryptocurrency
            exchange. FTX became one of the largest exchanges in three years,
            with a $32 billion valuation courtesy of SBF&apos;s aggressive and
            strategic marketing. <br />
            <br />
            SBF is the co-founder of a quantitative trading firm Alameda
            Research, a firm that specializes in yield farming and trading
            volatility. Although SBF denied claims that Alameda and FTX shared
            any close ties, it was eventually discovered that they had something
            in common. The link between the two companies eventually contributed
            to their downfall. <br />
            <br />
            Before the FTX saga, SBF was widely recognized as a key crypto
            frontrunner. He bailed out several crypto firms in distress. He
            facilitated deals worth $1 billion. Besides, he was popular in the
            political scene as a lobbyist.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            So, What Happened?
          </h2>
          <p className="mt-6">
            As revealed by an anonymous Wall Street Journal report, Alameda
            Research suffered huge losses between May and June 2022, which
            caused its sister company to lend the trading firm more than 50% of
            customers&apos; funds in reserves without permission from the
            customers. This decision was contrary to FTX&apos;s terms. Before we
            dive down into the Alameda crisis, let&apos;s discuss succinctly,
            the key reason behind FTX&apos;s demise — the FTT token.
            <br />
            <br />
            <figure className="flex items-center justify-center py-10">
              <Image
                width={500}
                height={500}
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src={sbf}
                alt=""
              />
            </figure>
            Following in the footsteps of Binance, FTX decided to create a
            digital token and announced that the FTT token would serve as the
            platform&apos;s backbone. With well-thought marketing techniques,
            the token had some perks attached to it. Customers who bought it at
            FTX could complete trades at a discount. FTT also served as
            collateral and holders were considered VIPs.
            <br />
            <br />
            However, a CoinDesk report released some shocking information. After
            revising Alameda&apos;s financial document, it was discovered that
            the company&apos;s balance sheet was full of FTT tokens, which means
            it was the largest owner of FTT. Remember, SBF had said FTX and
            Alameda were independent of each other, so the balance sheet raised
            many questions about Alameda&apos;s assets and why they were in FTT
            and not in fiat or any other cryptocurrency. This seems to be a red
            flag.
            <br />
            <br />
            On hearing this, Binance decided to sell off its portion of the
            token (about $500 million worth of FTT). After announcing this
            sell-off on Twitter, an upsurge in withdrawal on FTX followed. Of
            course, an announcement of this magnitude from an exchange like
            Binance is bound to cause chaos. Users withdrew over $6 billion in
            three days, and FTT lost its value. With no money to process
            withdrawals, FTX halted withdrawals and filed for bankruptcy
            protection.
            <figure className="flex items-center justify-center py-10">
              <Image
                width={500}
                height={500}
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src={ftx}
                alt=""
              />
            </figure>
            Binance offered FTX a lifeline to purchase the company in a
            non-binding agreement, but the bailout didn&apos;t work out. Binance
            blamed due diligence, the SEC, and the mishandling of
            customers&apos; funds as reasons for the pullout.
          </p>
        </div>

        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Conclusion
          </h2>
          <p className="mt-6">
            The spectacular collapse of FTX has further dented the image of the
            industry that&apos;s yet to recover from the Terra Collapse, falling
            prices caused by the Russia-Ukraine war and other macroeconomic
            factors. Even though, FTX&apos;s fall is a reminder of how yet risky
            and evolving crypto is, the event also strengthens the call for more
            regulations. Going back to TradFi is never a solution, but creation
            of more DeFi structures with high level of trust is much more the
            way forward.
          </p>
          <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
            About Expelee
          </h2>
          <p className="mt-8">
            Expelee is a product-based aspirational Web3 Start-up. Coping up
            with numerous solutions for blockchain Security and constructing a
            Web3 Ecosystem from Deal making platform to developer hosting open
            platform, while also developing our own commercial and sustainable
            blockchain.
          </p>
        </div>
      </div>
    </div>
  );
}
