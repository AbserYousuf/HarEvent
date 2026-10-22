export default function CTA({ onExplore, onJoin }) {
    return (
      <section id="join" className="scroll-mt-20 bg-[#8b1e3f] py-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center md:px-8 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-2xl font-playfair text-white md:text-4xl">
              Ready to Plan Your Dream Event?
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Join HarEvent today and make your celebration unforgettable.
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          <a
  href="#results"
  onClick={(e) => {
    e.preventDefault();
    onExplore?.();
  }}
  className="rounded-md bg-[#c9972b] px-6 py-3 font-semibold text-white transition hover:bg-[#a87b1f]"
>
  Explore Vendors
</a>
            <button
              type="button"
              onClick={() => onJoin?.("vendor")}
              className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#8b1e3f]"
            >
              Join as Vendor
            </button>
          </div>
        </div>
      </section>
    );
  }