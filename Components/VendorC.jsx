const vendorCategories = [
    { name: "Venues", image: "/images/vendors/venue.jpg", icon: "/images/vendors/vendorIcons/location.png" },
    { name: "Photography", image: "/images/vendors/Photography.jpg", icon: "/images/vendors/vendorIcons/photography.png" },
    { name: "Catering", image: "/images/vendors/Caterine.jpg", icon: "/images/vendors/vendorIcons/catering.png" },
    { name: "Decoration", image: "/images/vendors/Decoration.jpg", icon: "/images/vendors/vendorIcons/wedding-arch.png" },
    { name: "Makeup Artists", image: "/images/vendors/makeup.jpg", icon: "/images/vendors/vendorIcons/make-up.png" },
    { name: "Mehndi Artists", image: "/images/vendors/Mehndi.jpg", icon: "/images/vendors/vendorIcons/henna.png" },
  ];
  
  export default function VendorCategories({ onSelectCategory, onViewAll}) {
    return (
      <section id="vendors" className="scroll-mt-20 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Heading */}
          <h2 className="text-center text-3xl font-playfair text-gray-900 md:text-4xl">
            Vendor Categories
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9972b]" />
          <p className="mt-3 text-center text-gray-600">
            Find the right professionals for every part of your event.
          </p>
  
          {/* Cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
            {vendorCategories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => onSelectCategory?.(cat.name)}
                className="group overflow-hidden rounded-xl bg-white text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b1e3f]"
              >
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-32 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-36"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-gray-800 group-hover:text-[#8b1e3f]">
                  <span aria-hidden="true"><img 
                  src={cat.icon} className='w-5 h-5'/></span>
                  {cat.name}
                </div>
              </button>
            ))}
          </div>
  
          {/* View all */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onViewAll}
              className="rounded-md bg-[#8b1e3f] px-8 py-3 font-semibold text-white transition hover:bg-[#6d1731]"
            >
              View All Vendors
            </button>
          </div>
        </div>
      </section>
    );
  }