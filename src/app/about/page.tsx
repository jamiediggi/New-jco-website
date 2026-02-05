import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Jamie Clarke. I help business owners stop drowning in marketing advice — and start seeing results.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black">
                Marketing shouldn&apos;t feel like a foreign language.
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed max-w-xl">
                I&apos;m Jamie Clarke. I help business owners stop drowning in
                marketing advice &mdash; and start seeing results.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 rounded-2xl bg-grey-light flex items-center justify-center">
                <span className="text-grey-text text-sm">
                  [Jamie - natural setting photo]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Story Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Here&apos;s how I got here
          </h2>
          <div className="mt-10 space-y-8 text-lg text-grey-text leading-relaxed">
            <p>
              I&apos;ve been running businesses for over 10 years. And I&apos;ll
              be honest &mdash; the early years were brutal. 20-hour days. Seven
              days a week. Never knowing where the next payday was coming from.
            </p>
            <p>
              I tried everything the marketing gurus said. Built funnels. Posted
              constantly. Spent money on agencies who promised the world and
              delivered... reports. None of it connected. I was busy doing
              marketing, but I wasn&apos;t getting anywhere.
            </p>
            <p>
              Then I realised something. The problem wasn&apos;t the tactics. It
              was that I had no journey. No clear path for people to follow from
              &lsquo;who are you?&rsquo; to &lsquo;take my money.&rsquo; Once I
              mapped that out, everything changed.
            </p>
            <p>
              Now I help other business owners skip the pain I went through. I
              take the complicated stuff and make it simple. No jargon. No fluff.
              Just marketing that works for people with real businesses and real
              lives.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Credibility Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            The boring bits that matter
          </h2>
          <ul className="mt-10 space-y-4">
            {[
              "Creator of The Perfect Customer Journey framework",
              "Founder of The Marketing Portal (training + agency)",
              "Worked with 50+ UK businesses across B2B services, training, engineering, and professional services",
              "Based in the North of England (not a London agency with London prices)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg text-grey-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Personal Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                When I&apos;m not simplifying marketing...
              </h2>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                You&apos;ll find me on the golf course (working on my handicap),
                watching Wigan Athletic (the highs and lows), or on the sidelines
                at Shevington FC where I volunteer with the youth teams. I&apos;m
                a dad, a husband, and someone who believes business should give
                you more life, not less.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 h-72 rounded-2xl bg-grey-light flex items-center justify-center">
                <span className="text-grey-text text-sm">
                  [Personal photo]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Want to work together?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-me"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              See how I can help &rarr;
            </Link>
            <Link
              href="/resources#guide"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Get the free guide &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
