const reasons = [
    {
      title: "Trusted Vendors",
      icon: "/images/icons/cashier.png",
      text: "Only verified and trusted professionals.",
    },
    {
      title: "Best Prices",
      icon: "/images/icons/best-price.png",
      text: "Compare prices and get the best deals.",
    },
    {
      title: "Easy & Quick Booking",
      icon: "/images/icons/calendar.png",
      text: "Plan your event in a few simple steps.",
    },
    {
      title: "All in One Place",
      icon: "/images/icons/computer-worker.png",
      text: "Everything you need for your perfect event.",
    },
    {
      title: "Customer Support",
      icon: "/images/icons/customer-service.png",
      text: "We are always here to help you.",
    },
  ];
  
  export default function WhyChoose() {
    return (
      <section id="why" className="scroll-mt-20 bg-[#fdf8f3] py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: heading + cards */}
          <div>
            <h2 className="text-3xl font-playfair text-gray-900 md:text-4xl">
              Why Choose HarEvent?
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
  
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-xl bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fbe9ee] text-2xl">
                    <span aria-hidden="true">
                        <img
                      className="w-10 h-10"
                      src={r.icon}
                        />
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-playfair text-gray-900 md:text-base">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 md:text-sm">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right: image */}
          <img
            src="/images/mandap.jpg"
            alt="Beautifully decorated wedding stage"
            loading="lazy"
            className="h-72 w-full rounded-3xl object-cover shadow-xl lg:h-[420px] lg:rounded-l-[120px]"
          />
        </div>
      </section>
    );
  }