import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Event Categories", href: "#events" },
  { label: "Vendor Categories", href: "#vendors" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar({onLogin}) {
  
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center  ">
          <img
          alt="Logo"
          className='w-auto h-12 cursor-pointer  '
          src='/HarEvent.png' 
          
          />
            
            
        <a href="#home" className="text-2xl font-bold text-[#8b1e3f]">
          Har<span className="text-[#c9972b]">Event</span>
        </a>
        </div>
        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-amber-200 transition-colors hover:text-red-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
        <button
  onClick={() => onLogin("vendor")}
  className="rounded-md bg-[#8b1e3f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6d1731]"
>
  Login as Vendor
</button>
<button
  onClick={() => onLogin("customer")}
  className="rounded-md bg-[#c9972b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a87b1f]"
>
  Login as Customer
</button>
        </div>

        {/* HamBurger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-2xl text-amber-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t bg-white px-4 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#8b1e3f]"
            >
              {l.label}
            </a>
          ))}
         <button
  onClick={() => onLogin("vendor")}
  className="rounded-md bg-[#8b1e3f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6d1731]"
>
  Login as Vendor
</button>
<button
  onClick={() => onLogin("customer")}
  className="rounded-md bg-[#c9972b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a87b1f]"
>
  Login as Customer
</button>
        </div>
      )}
    </header>
  );
}