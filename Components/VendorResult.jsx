import { useEffect, useMemo } from "react";
import vendors from "../src/vendor";
import { WHATSAPP_NUMBER } from "../src/constant";
export default function VendorResults({ filters, onClear }) {
  
  const results = useMemo(
    () =>
      vendors.filter(
        (v) =>
          (!filters.event || v.events.includes(filters.event)) &&
          (!filters.category || v.category === filters.category) &&
          (!filters.city || v.city === filters.city)
      ),
    [filters]
  );

  const activeFilters = Object.values(filters).filter(Boolean);

  return (
    <section id="results" className="scroll-mt-20 bg-[#fbf3f5] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl font-playfair text-gray-900 md:text-4xl">
          Vendors for You
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
        <p className="mt-3 text-center text-gray-600">
          {results.length} {results.length === 1 ? "vendor" : "vendors"} found
        </p>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {activeFilters.map((f) => (
              <span
                key={f}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#8b1e3f] shadow-sm"
              >
                {f}
              </span>
            ))}
            <button
              type="button"
              onClick={onClear}
              className="text-sm font-semibold text-[#8b1e3f] underline hover:text-[#6d1731]"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Results */}
        {results.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((v) => (
              <article
                key={v.id}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8b1e3f]">
                    {v.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-playfair text-gray-900">{v.name}</h3>
                  <div className="mt-1 flex items-center justify-between text-sm text-gray-600">
                    <span>📍 {v.city}</span>
                    <span>⭐ {v.rating}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {v.events.map((e) => (
                      <span
                        key={e}
                        className="rounded bg-[#fdf8f3] px-2 py-0.5 text-[11px] text-gray-600"
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#8b1e3f]">
                    {v.price}
                  </p>

                  <div className="mt-auto pt-4">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi, I found ${v.name} on HarEvent and would like to know more.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-md bg-[#8b1e3f] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#6d1731]"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl bg-white px-6 py-12 text-center shadow-md">
           <p className="text-lg font-playfair text-gray-900">No vendors found</p>
            <p className="mt-2 text-gray-600">
              Try a different city, category or event.
            </p>
            <button
              type="button"
              onClick={onClear}
              className="mt-5 rounded-md bg-[#8b1e3f] px-6 py-2 font-semibold text-white transition hover:bg-[#6d1731]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}