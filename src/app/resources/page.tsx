import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "No fluff. No 47-page ebooks full of nothing. Just practical tools to make your marketing easier.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black">
            Free stuff that actually helps.
          </h1>
          <p className="mt-6 text-lg text-grey-text max-w-2xl mx-auto">
            No fluff. No 47-page ebooks full of nothing. Just practical tools to
            make your marketing easier.
          </p>
        </div>
      </section>

      {/* ─── Featured Resource ─── */}
      <section id="guide" className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Featured Resource
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
                The Perfect Customer Journey Guide
              </h2>
              <p className="mt-2 text-sm text-grey-text">PDF Download</p>
              <p className="mt-4 text-lg text-grey-text leading-relaxed">
                The complete framework explained. Understand the 6 stages,
                identify your gaps, and get the planning worksheet to map your
                own journey.
              </p>
              <form className="mt-8 flex flex-col gap-3 max-w-md">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-md border border-grey-light px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md border border-grey-light px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Get The Free Guide
                </button>
                <p className="text-xs text-grey-text">
                  No spam. Unsubscribe anytime. Just helpful stuff.
                </p>
              </form>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-96 rounded-xl bg-grey-lighter border border-grey-light flex items-center justify-center shadow-lg">
                <div className="text-center px-6">
                  <div className="text-primary font-bold text-lg">
                    The Perfect Customer Journey
                  </div>
                  <div className="mt-2 text-sm text-grey-text">
                    Free PDF Guide
                  </div>
                  <div className="mt-6 w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Additional Resources ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
            More free resources
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Marketing Health Check",
                description:
                  "10 questions to diagnose your marketing in 5 minutes.",
                format: "PDF",
              },
              {
                title: "90-Day Marketing Planner",
                description:
                  "Simple template to plan your next quarter of marketing activity.",
                format: "Template",
              },
              {
                title: "Website Conversion Checklist",
                description:
                  "15 things your website needs to generate leads consistently.",
                format: "PDF",
              },
              {
                title: "Email Welcome Sequence Template",
                description:
                  "The 4 emails every business should send to new subscribers.",
                format: "Template",
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="rounded-xl bg-white border border-grey-light p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-secondary bg-blue-50 px-2 py-1 rounded">
                    {resource.format}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black">
                  {resource.title}
                </h3>
                <p className="mt-2 text-grey-text leading-relaxed">
                  {resource.description}
                </p>
                <button className="mt-4 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  Download &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools Section (Future) ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Tools to make life easier
          </h2>
          <p className="mt-4 text-grey-text">
            Premium tools and templates coming soon.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Customer Journey Workbook", price: "£47" },
              { name: "Content Planning Templates", price: "£27" },
              { name: "Marketing GPTs", price: "Various" },
            ].map((tool, i) => (
              <div
                key={i}
                className="rounded-xl border border-dashed border-grey-light p-8 text-center"
              >
                <p className="font-bold text-black">{tool.name}</p>
                <p className="mt-1 text-sm text-grey-text">{tool.price}</p>
                <span className="mt-4 inline-block text-xs font-medium text-grey-text bg-grey-lighter px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
