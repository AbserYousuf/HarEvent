import { useState } from "react";

const posts = [
  {
    id: 1,
    tag: "Wedding Tips",
    date: "12 Oct 2026",
    title: "How to Plan a Wedding on a Budget",
    image: "/images/events/wedding.jpg",
    excerpt: "Smart ways to save money without compromising on the big day.",
    more: "Start by fixing your total budget, then split it across venue, catering, decoration and photography. Compare at least three vendors in each category and book early to lock in better prices.",
  },
  {
    id: 2,
    tag: "Decoration",
    date: "05 Oct 2026",
    title: "Top Decoration Trends This Season",
    image: "/images/events/baby-shower.jpg",
    excerpt: "From floral arches to pastel balloon walls, see what is trending.",
    more: "Natural flowers, warm lighting and personalised entrance setups are popular this season. Ask your decorator for a mood board before finalising anything.",
  },
  {
    id: 3,
    tag: "Planning",
    date: "28 Sep 2026",
    title: "Questions to Ask Before Hiring a Vendor",
    image: "/images/events/corporate.jpg",
    excerpt: "A simple checklist to help you choose the right professional.",
    more: "Ask about availability, past work, what is included in the price, the cancellation policy and the payment schedule. Always confirm everything in writing.",
  },
];

function BlogCard({ post }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8b1e3f]">
          {post.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-gray-500">{post.date}</p>
        <h3 className="mt-1 text-lg font-playfair text-gray-900">{post.title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {post.excerpt} {open && post.more}
        </p>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-auto pt-4 text-left text-sm font-semibold text-[#8b1e3f] hover:text-[#6d1731]"
        >
          {open ? "Show less ←" : "Read more →"}
        </button>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-[#fdf8f3] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-playfair text-gray-900 md:text-4xl">
          From Our Blog
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
        <p className="mt-3 text-center text-gray-600">
          Tips, ideas and inspiration for your next celebration.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}