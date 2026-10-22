const highlights = [
    { value: "500+", label: "Verified Vendors" },
    { value: "300+", label: "Cities Covered" },
    { value: "10k+", label: "Events Planned" },
  ];
  
  export default function About() {
    return (
      <section id="about" className="scroll-mt-20 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2">
          {/* Image */}
          <img
            src="/images/events/wedding.jpg"
            alt="Beautifully arranged wedding celebration"
            loading="lazy"
            className="h-72 w-full rounded-3xl object-cover shadow-xl lg:h-[420px] lg:rounded-r-[120px]"
          />
  
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c9972b]">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-playfair text-gray-900 md:text-4xl">
              Making Every Celebration Effortless
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
  
            <p className="mt-5 text-gray-600">
              HarEvent is a one-stop platform that connects people with trusted
              event professionals. From venues and photographers to caterers and
              makeup artists, you can find, compare and contact the right vendors
              in a few clicks.
            </p>
            <p className="mt-3 text-gray-600">
              We believe planning a wedding or any celebration should be
              exciting, not stressful. That is why every vendor on HarEvent is
              verified, and every price is transparent.
            </p>
  
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-xl bg-[#fdf8f3] p-4 text-center shadow-sm">
                  <p className="text-2xl font-playfair text-[#8b1e3f]">{h.value}</p>
                  <p className="mt-1 text-xs text-gray-600 md:text-sm">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }