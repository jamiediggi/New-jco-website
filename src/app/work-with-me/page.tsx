import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Whether you want to learn, plan, or implement — there's a way to work together that fits your situation.",
};

export default function WorkWithMePage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black">
            Let&apos;s make your marketing work.
          </h1>
          <p className="mt-6 text-lg text-grey-text max-w-2xl mx-auto">
            Whether you want to learn, plan, or implement &mdash; there&apos;s a
            way to work together that fits your situation.
          </p>
        </div>
      </section>

      {/* ─── Option 1: The Marketing Portal Membership ─── */}
      <section id="membership" className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Option 1: Learn
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              The Marketing Portal Membership
            </h2>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">&pound;97</span>
              <span className="text-grey-text">/month</span>
            </div>
            <p className="mt-4 text-xl text-grey-text italic">
              Ongoing support without the big commitment
            </p>
            <p className="mt-4 text-lg text-grey-text leading-relaxed">
              Monthly training, templates, and community support to implement
              marketing yourself. Perfect if you want guidance but prefer to do
              the work.
            </p>

            <h3 className="mt-8 text-lg font-bold text-black">
              What&apos;s Included:
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Monthly live training sessions",
                "Template library (emails, landing pages, content plans)",
                "Private community for questions and feedback",
                "Access to The Marketing Portal App",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-grey-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Join The Membership &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Option 2: The Blueprint (Core Offer) ─── */}
      <section id="blueprint" className="bg-grey-lighter scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Most Popular
            </div>
            <span className="block text-sm font-semibold text-secondary uppercase tracking-wider">
              Option 2: Plan
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              The Perfect Customer Journey Blueprint
            </h2>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">
                &pound;2,495
              </span>
            </div>
            <p className="mt-4 text-xl text-grey-text italic">
              Your complete marketing plan in 2 weeks
            </p>
            <p className="mt-4 text-lg text-grey-text leading-relaxed">
              Work with me 1-on-1 to audit your current marketing, map your
              customer journey, and build a 90-day action plan you can actually
              execute.
            </p>

            <h3 className="mt-8 text-lg font-bold text-black">
              What&apos;s Included:
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Deep-dive discovery session (90 mins)",
                "Complete customer journey audit",
                "Competitor and market analysis",
                "Messaging and positioning framework",
                "90-day prioritised action plan",
                "Website and content recommendations",
                "2x follow-up calls to answer questions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-grey-text">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-white border border-grey-light p-6">
              <h4 className="text-sm font-semibold text-black">
                Who It&apos;s For:
              </h4>
              <p className="mt-2 text-grey-text">
                Owner-led businesses with &pound;500k-5M revenue who are ready to
                stop guessing and start growing strategically.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Book A Discovery Call &rarr;
              </Link>
              <p className="mt-2 text-sm text-grey-text">
                Free 30-minute call to see if we&apos;re a good fit. No
                obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Option 3: Blueprint + Implementation ─── */}
      <section id="implementation" className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Option 3: Implement
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              Blueprint + Implementation Support
            </h2>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">
                &pound;4,995
              </span>
            </div>
            <p className="mt-4 text-xl text-grey-text italic">
              Strategy plus ongoing guidance
            </p>
            <p className="mt-4 text-lg text-grey-text leading-relaxed">
              Everything in the Blueprint, plus 90 days of support to help you
              implement. Weekly check-ins, feedback on your work, and someone in
              your corner.
            </p>

            <h3 className="mt-8 text-lg font-bold text-black">
              Additional to Blueprint:
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Weekly 30-minute check-in calls for 90 days",
                "Unlimited email support",
                "Review and feedback on all marketing materials",
                "Priority access for questions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-grey-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Book A Discovery Call &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Agency Services ─── */}
      <section id="agency" className="bg-grey-lighter scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Agency
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              Want us to do it for you?
            </h2>
            <p className="mt-4 text-lg text-grey-text leading-relaxed">
              If you&apos;d rather hand over implementation entirely, our agency
              team can execute your Blueprint. Website builds, content creation,
              email sequences, ad management &mdash; done for you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center text-base font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Learn about agency services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center">
            Not sure which is right?
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                label: "I want to learn and do it myself",
                target: "Membership",
                href: "#membership",
              },
              {
                label: "I need a clear plan first",
                target: "Blueprint",
                href: "#blueprint",
              },
              {
                label: "I want strategy AND support",
                target: "Blueprint + Implementation",
                href: "#implementation",
              },
              {
                label: "I want someone else to do it",
                target: "Agency",
                href: "#agency",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-grey-light p-6 hover:shadow-sm hover:border-primary transition-all"
              >
                <span className="font-medium text-black">
                  &ldquo;{item.label}&rdquo;
                </span>
                <span className="text-primary font-semibold">
                  {item.target} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-8">
            {[
              {
                q: "How do I know which option is right for me?",
                a: "Book a free discovery call. We'll talk through your situation and I'll honestly tell you which option fits — even if that's none of them.",
              },
              {
                q: "What if the Blueprint doesn't work for me?",
                a: "If you do the work and don't see value, I'll work with you until you do. I'm not interested in taking money for something that doesn't help.",
              },
              {
                q: "How long before I see results?",
                a: "The Blueprint gives you a 90-day plan. Most clients see improved clarity immediately and measurable results within 3-6 months of consistent implementation.",
              },
              {
                q: "Do you work with businesses outside the UK?",
                a: "Yes. I work with businesses in the US and elsewhere. Everything's done via video call — location doesn't matter.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-black">{faq.q}</h3>
                <p className="mt-2 text-grey-text leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
