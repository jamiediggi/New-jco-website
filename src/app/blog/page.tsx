import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-English advice for business owners who don't have time for complicated.",
};

const categories = [
  { name: "All", slug: "all" },
  { name: "Strategy", slug: "strategy" },
  { name: "Foundations", slug: "foundations" },
  { name: "Action", slug: "action" },
  { name: "Systems", slug: "systems" },
];

const posts = [
  {
    title: "Why Your Marketing Isn't Working (And What to Do Instead)",
    excerpt:
      "If you've been doing all the things and seeing no results, the problem probably isn't effort. It's direction.",
    category: "Strategy",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "The 6-Stage Customer Journey Every Business Needs",
    excerpt:
      "Most businesses are missing at least 2 of these stages. Here's the complete framework.",
    category: "Strategy",
    readTime: "8 min read",
    slug: "#",
  },
  {
    title: "What to Do Before Hiring a Marketing Agency",
    excerpt:
      "Before you hand over thousands to an agency, make sure you've done these 5 things first.",
    category: "Foundations",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Marketing for Business Owners Who Hate Marketing",
    excerpt:
      "You don't need to love marketing. You just need a system that works without consuming your life.",
    category: "Action",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "How to Create a 90-Day Marketing Plan",
    excerpt:
      "A step-by-step guide to planning your next quarter of marketing — even if you've never done it before.",
    category: "Strategy",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "Why Simple Marketing Beats Clever Marketing",
    excerpt:
      "The businesses getting the best results aren't doing anything fancy. Here's why simplicity wins.",
    category: "Foundations",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "The Real Reason Your Website Doesn't Generate Leads",
    excerpt:
      "It's probably not the design. It's not the copy. It's the journey (or lack of one).",
    category: "Systems",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Stop Building Half-Finished Bridges",
    excerpt:
      "You keep starting marketing projects and never finishing them. Here's how to fix that pattern.",
    category: "Action",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "What I'd Do If I Was Starting Marketing Today",
    excerpt:
      "With 10+ years of experience, here's the exact order I'd do things if I was starting from scratch.",
    category: "Strategy",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "The Marketing Mistakes I Made (So You Don't Have To)",
    excerpt:
      "Agencies, funnels, shiny objects — I tried them all. Here's what actually worked.",
    category: "Action",
    readTime: "5 min read",
    slug: "#",
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "bg-red-50 text-primary",
  Foundations: "bg-blue-50 text-secondary",
  Action: "bg-yellow-50 text-yellow-700",
  Systems: "bg-green-50 text-green-700",
};

export default function BlogPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-grey-lighter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-black">
            Marketing made easier.
          </h1>
          <p className="mt-6 text-lg text-grey-text max-w-2xl mx-auto">
            Plain-English advice for business owners who don&apos;t have time for
            complicated.
          </p>
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section className="bg-white border-b border-grey-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat.slug === "all"
                    ? "bg-primary text-white"
                    : "bg-grey-lighter text-grey-text hover:bg-grey-light"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Blog Posts Grid ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="rounded-xl border border-grey-light overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-48 bg-grey-lighter flex items-center justify-center">
                  <span className="text-grey-text text-sm">
                    [Featured Image]
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        categoryColors[post.category] || "bg-grey-lighter text-grey-text"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-grey-text">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-black group-hover:text-primary transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-grey-text leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter CTA ─── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Get new posts straight to your inbox
          </h2>
          <p className="mt-2 text-white/80">
            No spam. Just useful marketing advice, once a week.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-md px-4 py-3 text-sm text-black placeholder:text-grey-text focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
