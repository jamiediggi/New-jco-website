import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got a question? Want to see if we're a good fit? Drop me a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Contact Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black">
                Let&apos;s talk.
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                Got a question? Want to see if we&apos;re a good fit? Drop me a
                message.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-text">
                    Email
                  </h3>
                  <a
                    href="mailto:jamie@jamieclarke.online"
                    className="mt-1 text-lg text-primary hover:text-primary-dark transition-colors"
                  >
                    jamie@jamieclarke.online
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-text">
                    Book a call
                  </h3>
                  <p className="mt-1 text-lg text-grey-text">
                    <a
                      href="#"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      Schedule a free 30-minute discovery call
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-text">
                    Response time
                  </h3>
                  <p className="mt-1 text-grey-text italic">
                    I reply to every message personally, usually within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-grey-light">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-grey-light px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-grey-light px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-md border border-grey-light px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-y"
                    placeholder="Tell me a bit about your business and what you're looking for..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="source"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    How did you find me?{" "}
                    <span className="text-grey-text font-normal">
                      (optional)
                    </span>
                  </label>
                  <select
                    id="source"
                    name="source"
                    className="w-full rounded-md border border-grey-light px-4 py-3 text-sm text-grey-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social media</option>
                    <option value="blog">Blog post</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
