const steps = [
    {
      title: "Search",
      icon: "/images/icons/search.png",
      text: "Search for vendors or events in your city.",
    },
    {
      title: "Compare",
      icon: "/images/icons/swap.png",
      text: "Compare prices, reviews and services.",
    },
    {
      title: "Connect",
      icon: "/images/icons/social-network.png",
      text: "Connect with vendors and discuss your needs.",
    },
    {
      title: "Celebrate",
      icon: "/images/icons/confetti.png",
      text: "Enjoy your event, hassle-free.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section id="how" className="scroll-mt-20 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-center text-3xl font-playfair text-gray-900 md:text-4xl">
            How HarEvent Works
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
          <p className="mt-3 text-center text-gray-600">
            Four simple steps to your perfect event.
          </p>
  
          {/* Steps */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#fbe9ee] text-3xl">
                  <span aria-hidden="true"><img
                  className="w-10 h-10"
                  src={step.icon}
                  /></span>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#8b1e3f] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
  
                <h3 className="mt-4 text-lg font-playfair text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm text-gray-600">
                  {step.text}
                </p>             
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }