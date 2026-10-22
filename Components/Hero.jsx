

const events = ["Wedding", "Engagement", "Birthday Party", "Corporate Event", "Baby Shower", "Other"];
const categories = ["Venues", "Photography", "Catering", "Decoration", "Makeup Artists", "Mehndi Artists"];
const cities = ["Mumbai", "Delhi", "Jaipur", "Bengaluru", "Hyderabad", "Jammu"];

export default function Hero({onSearch,onFilterChange, filters}) {
  
  

  const handleChange = (e) =>{
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const selectClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-[#8b1e3f] focus:outline-none focus:ring-1 focus:ring-[#8b1e3f]";

  return (
    <section id="home" className="relative overflow-hidden bg-[#fdf8f3]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-8 lg:grid-cols-2 lg:py-20">
        {/* Left: text */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c9972b]">
            Plan. Connect. Celebrate.
          </p>
          <h1 className="mt-2 text-4xl font-playfair leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Every Celebration{" "}
            <span className="text-[#8b1e3f] font-playfair">Starts with the Right Choice.</span>
          </h1>
          <p className="mt-4 max-w-md text-base font-poppins text-gray-600 md:text-lg">
            Find trusted vendors, compare services and plan your perfect
            wedding or event, all in one place.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#vendors"
              className="rounded-md bg-[#8b1e3f] px-6 py-3 font-semibold text-white transition hover:bg-[#6d1731]"
            >
              Explore Vendors
            </a>
            <a
              href="#how"
              className="rounded-md border border-[#8b1e3f] bg-white px-6 py-3 font-semibold text-[#8b1e3f] transition hover:bg-[#8b1e3f] hover:text-white"
            >
              How It Works
            </a>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-3 rounded-xl bg-white p-4 shadow-lg sm:grid-cols-3"
          >
            <select name="event" value={filters.event} onChange={handleChange} className={selectClass}>
              <option value="">Event</option>
              {events.map((e) => <option key={e}>{e}</option>)}
            </select>
            <select name="category" value={filters.category} onChange={handleChange} className={selectClass}>
              <option value="">Vendor Category</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select name="city" value={filters.city} onChange={handleChange} className={selectClass}>
              <option value="">City</option>
              {cities.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button
              type="submit"
              className="rounded-md bg-[#8b1e3f] px-6 py-2 font-semibold text-white transition hover:bg-[#6d1731] sm:col-span-3"
            >
              Search
            </button>
          </form>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-500">Trusted Vendors</p>
            </div>
            <div className="border-l border-gray-300 pl-8">
              <p className="text-2xl font-bold text-gray-900">300+</p>
              <p className="text-sm text-gray-500">Cities Covered</p>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <img
          src="/images/Wedding.jpg"
          alt="Happy couple at their wedding celebration"
          className="h-80 w-full rounded-t-[200px] rounded-b-3xl object-cover shadow-xl md:h-[420px] lg:h-[500px]"
        />
      </div>
    </section>
  );
}