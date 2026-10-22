const eventCategories = [
    { name: "Weddings", value: "Wedding", image: "/images/events/wedding.jpg" },
    { name: "Engagements", value: "Engagement", image: "/images/events/engagement.jpg" },
    { name: "Birthday Parties", value: "Birthday Party", image: "/images/events/birthday.jpg" },
    { name: "Corporate Events", value: "Corporate Event", image: "/images/events/corporate.jpg" },
    { name: "Baby Showers", value: "Baby Shower", image: "/images/events/baby-shower.jpg" },
    { name: "Other Events", value: "Other", image: "/images/events/other.jpg" },
  ];
  
  export default function EventCategories({ onSelectEvent, onViewAll}) {
    return (
      <section id="events" className="scroll-mt-20 bg-[#fdf8f3] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-center text-3xl font-playfair text-gray-900 md:text-4xl">
            Event Categories
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
          <p className="mt-3 text-center text-gray-600">
            Whatever you are celebrating, we have vendors for it.
          </p>
  
          {/* Cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
            {eventCategories.map((ev) => (
              <button
                key={ev.name}
                type="button"
                onClick={() => onSelectEvent?.(ev.value)}
                className="group overflow-hidden rounded-xl bg-white text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b1e3f]"
              >
                <div className="overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="px-2 py-3 text-center text-sm font-semibold text-gray-800 group-hover:text-[#8b1e3f]">
                  {ev.name}
                </p>
              </button>
            ))}
          </div>
  
          {/* View all */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onViewAll}
              className="rounded-md border border-[#8b1e3f] bg-white px-8 py-3 font-semibold text-[#8b1e3f] transition hover:bg-[#8b1e3f] hover:text-white"
            >
              View All Events
            </button>
          </div>
        </div>
      </section>
    );
  }