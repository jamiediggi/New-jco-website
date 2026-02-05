import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Perfect Customer Journey",
  description:
    "6 stages that turn strangers into fans — and random marketing into a system that works.",
};

const stages = [
  {
    num: "1",
    title: "Get Noticed",
    doing: "Getting visible to the right people",
    experience: "They discover you exist",
    description:
      "People can't buy from you if they don't know you exist. This stage is about getting in front of your ideal customers — not everyone, just the right people.",
  },
  {
    num: "2",
    title: "Connect",
    doing: "Getting permission to follow up",
    experience: "They give you their details",
    description:
      "Getting noticed is great. But if someone sees your content and disappears forever — what have you achieved? This stage turns attention into connection.",
  },
  {
    num: "3",
    title: "Nurture",
    doing: "Building trust and demonstrating value",
    experience: "They start to believe you can help",
    description:
      "Just because someone gave you their email doesn't mean they trust you. This stage is about building the know, like, and trust that makes people want to buy.",
  },
  {
    num: "4",
    title: "Convert",
    doing: "Asking for the sale",
    experience: "They become a paying customer",
    description:
      "If you've done the previous stages well, this shouldn't feel like a hard sell. You're offering the next logical step to someone who already trusts you.",
  },
  {
    num: "5",
    title: "Deliver & Wow",
    doing: "Exceeding expectations",
    experience: "They feel they made the right choice",
    description:
      "Getting the sale isn't the finish line. It's the starting line. This is where you make them feel like they made the best decision of their life.",
  },
  {
    num: "6",
    title: "Create Fans",
    doing: "Turning customers into referrers",
    experience: "They tell others about you",
    description:
      "Happy customers are willing to recommend you. But they usually don't unless you ask. This stage makes it easy for them to spread the word.",
  },
];

const assessmentQuestions = [
  "How are the right people finding you?",
  "How are you capturing their details?",
  "How are you staying in touch and building trust?",
  "How are you asking for the sale?",
  "How are you exceeding expectations?",
  "How are you generating referrals?",
];

export default function PerfectCustomerJourneyPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black">
            The Perfect Customer Journey
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-grey-text max-w-2xl mx-auto">
            6 stages that turn strangers into fans &mdash; and random marketing
            into a system that works.
          </p>
        </div>
      </section>

      {/* ─── The Problem Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Why most marketing doesn&apos;t work
          </h2>
          <div className="mt-8 space-y-6 text-lg text-grey-text leading-relaxed">
            <p>
              Let&apos;s be honest: most small businesses struggle with
              marketing. Not because they&apos;re lazy. Not because they
              don&apos;t try. They&apos;re doing the work &mdash; posting on
              social media, updating the website, sending the occasional email.
            </p>
            <p>
              But nothing connects. Growth feels random. Leads come in dribs and
              drabs. Every month feels like starting from scratch.
            </p>
            <p className="font-medium text-black">
              Here&apos;s what most people miss: The problem isn&apos;t the
              tactics. It&apos;s the lack of a journey.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The Framework Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
            The 6 Stages
          </h2>
          <div className="mt-16 space-y-12">
            {stages.map((stage, i) => (
              <div
                key={stage.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                      {stage.num}
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      {stage.title}
                    </h3>
                  </div>
                  <div className="mb-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-black">
                        What you do:
                      </span>
                      <span className="text-grey-text">{stage.doing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-black">
                        They experience:
                      </span>
                      <span className="text-grey-text">{stage.experience}</span>
                    </div>
                  </div>
                  <p className="text-grey-text leading-relaxed text-lg">
                    {stage.description}
                  </p>
                </div>
                <div
                  className={`flex justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-full max-w-md h-48 rounded-xl bg-white border border-grey-light flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">
                        Stage {stage.num}
                      </div>
                      <div className="mt-2 text-grey-text">{stage.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Self-Assessment Section ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center">
            Where&apos;s your journey broken?
          </h2>
          <p className="mt-6 text-lg text-grey-text text-center leading-relaxed">
            For each stage, ask yourself: What do I have in place here? If
            you&apos;ve got nothing for a stage, that&apos;s a gap. That&apos;s
            where leads are leaking.
          </p>
          <div className="mt-12 space-y-4">
            {assessmentQuestions.map((question, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-grey-light p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-grey-text text-lg">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to map your journey?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources#guide"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-gray-100 transition-colors"
            >
              Download the free guide
            </Link>
            <Link
              href="/work-with-me#blueprint"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Work with me to build your plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
