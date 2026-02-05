import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black">
                Marketing doesn&apos;t have to feel this hard.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-grey-text leading-relaxed max-w-xl">
                I help owner-led businesses build marketing that actually works
                &mdash; without the jargon, overwhelm, or wasted spend.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/resources#guide"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Get The Free Guide
                </Link>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center text-base font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Or see how I can help &rarr;
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-grey-light flex items-center justify-center">
                <span className="text-grey-text text-sm">
                  [Jamie&apos;s Photo]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <section className="bg-gray-100 border-y border-grey-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm font-medium text-grey-text">
            Trusted by 50+ UK businesses
          </p>
          <div className="mt-4 flex items-center justify-center gap-10 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-24 rounded bg-grey-light flex items-center justify-center"
              >
                <span className="text-xs text-grey-text">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem / Agitation Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
            Sound familiar?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-grey-light p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-grey-text leading-relaxed">
                You&apos;ve tried agencies, courses, tactics &mdash; and nothing
                sticks. You&apos;re starting to wonder if marketing just
                doesn&apos;t work for your business.
              </p>
            </div>
            <div className="rounded-xl border border-grey-light p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-grey-text leading-relaxed">
                Everyone&apos;s telling you something different. SEO! LinkedIn!
                Ads! Content! You don&apos;t know what to do first &mdash; so you
                do nothing.
              </p>
            </div>
            <div className="rounded-xl border border-grey-light p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <p className="text-grey-text leading-relaxed">
                You&apos;re great at what you do. But explaining it? Getting
                found? Turning interest into clients? That&apos;s where it falls
                apart.
              </p>
            </div>
          </div>
          <p className="mt-12 text-center text-xl font-medium text-black italic">
            Here&apos;s the thing: You don&apos;t have a marketing problem. You
            have a clarity problem.
          </p>
        </div>
      </section>

      {/* ─── Solution Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
            There&apos;s a simpler way.
          </h2>
          <p className="mt-6 text-center text-lg text-grey-text max-w-3xl mx-auto leading-relaxed">
            Most marketing fails because it&apos;s disconnected. Random posts.
            Half-finished campaigns. Tactics without strategy. What you need
            isn&apos;t more marketing &mdash; it&apos;s a journey. A clear path
            that takes strangers from &lsquo;never heard of you&rsquo; to
            &lsquo;telling everyone about you.&rsquo;
          </p>

          {/* The 6 Stages */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Get Noticed",
                desc: "They discover you exist",
              },
              {
                num: "2",
                title: "Connect",
                desc: "They give you their details",
              },
              {
                num: "3",
                title: "Nurture",
                desc: "They start to trust you",
              },
              {
                num: "4",
                title: "Convert",
                desc: "They become a customer",
              },
              {
                num: "5",
                title: "Deliver & Wow",
                desc: "They feel they made the right choice",
              },
              {
                num: "6",
                title: "Create Fans",
                desc: "They tell others about you",
              },
            ].map((stage) => (
              <div
                key={stage.num}
                className="rounded-xl bg-white p-6 border border-grey-light hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                  {stage.num}
                </div>
                <h3 className="mt-4 text-lg font-bold text-black">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm text-grey-text">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/perfect-customer-journey"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Learn The Full Framework &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Social Proof Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
            Real results for real businesses
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "From 3 enquiries a month to 15. Jamie made it feel simple.",
                name: "Sarah Thompson",
                title: "Managing Director",
                company: "Bright Training Solutions",
                industry: "Training",
              },
              {
                quote:
                  "Finally have a marketing plan I actually understand and can follow.",
                name: "Mark Davies",
                title: "Owner",
                company: "Davies Engineering",
                industry: "Engineering",
              },
              {
                quote:
                  "Stopped wasting money on random tactics. Everything connects now.",
                name: "Claire Wilson",
                title: "Founder",
                company: "Wilson Consulting",
                industry: "Professional Services",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded-xl border border-grey-light p-8 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-grey-text leading-relaxed italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-grey-light flex items-center justify-center">
                    <span className="text-xs text-grey-text font-medium">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-grey-text">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-secondary bg-blue-50 px-2 py-1 rounded">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl bg-grey-light flex items-center justify-center">
                <span className="text-grey-text text-sm">
                  [Jamie - casual photo]
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg text-grey-text leading-relaxed">
                I&apos;m Jamie. I&apos;ve spent 10+ years helping businesses grow
                &mdash; and I&apos;ve made every marketing mistake going. Now I
                help owner-led businesses skip the pain and get straight to what
                works.
              </p>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                No jargon. No fluff. No dancing on TikTok. Just clear, practical
                marketing that fits your real life.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-base font-medium text-primary hover:text-primary-dark transition-colors"
              >
                More about me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How I Help Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
            Choose your path
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-grey-light p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <svg className="h-7 w-7 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-black">Learn</h3>
              <p className="mt-3 text-grey-text">
                Free resources to get started
              </p>
              <Link
                href="/resources"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Browse resources &rarr;
              </Link>
            </div>
            <div className="rounded-xl border-2 border-primary p-8 text-center hover:shadow-md transition-shadow relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-black">Plan</h3>
              <p className="mt-3 text-grey-text">
                Work with me to build your strategy
              </p>
              <Link
                href="/work-with-me#blueprint"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                See the Blueprint &rarr;
              </Link>
            </div>
            <div className="rounded-xl border border-grey-light p-8 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <svg className="h-7 w-7 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.169c-.776.458-1.73-.215-1.573-1.11l1.029-6.001-4.359-4.249c-.629-.611-.289-1.677.573-1.802l6.03-.876 2.695-5.461c.389-.789 1.517-.789 1.906 0l2.695 5.461 6.03.876c.862.125 1.202 1.191.573 1.802l-4.36 4.249 1.03 6.001c.156.895-.797 1.568-1.574 1.11L12 15.17l-.58.341z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-black">Implement</h3>
              <p className="mt-3 text-grey-text">
                Ongoing support to execute
              </p>
              <Link
                href="/work-with-me#implementation"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to make marketing easier?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Download The Perfect Customer Journey guide and see exactly where
            your marketing is leaking leads.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 rounded-md px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-md px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Send Me The Guide
            </button>
          </form>
          <p className="mt-4 text-sm text-white/60">
            No spam. Unsubscribe anytime. Just helpful stuff.
          </p>
        </div>
      </section>
    </>
  );
}
