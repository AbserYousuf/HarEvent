import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Event Categories", href: "#events" },
    { label: "Vendor Categories", href: "#vendors" },
    { label: "Blog", href: "#blog" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];
  
  const customerLinks = [
    { label: "Browse Vendors", href: "#vendors" },
    { label: "How It Works", href: "#how" },
    { label: "Event Ideas", href: "#events" },
    { label: "Help & Support", href: "#contact" },
  ];
  
  const vendorLinks = [
    { label: "Join as Vendor", action: "vendor" },
    { label: "Vendor Login", action: "vendor" },
    { label: "Vendor Benefits", href: "#why" },
    { label: "Pricing Plans", href: "#why" },
  ];
  function LinkColumn({ title, links, onLogin }) {
    return (
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">{title}</h3>
        <ul className="space-y-2 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              {l.action ? (
                <button type="button" onClick={() => onLogin?.(l.action)} className="transition hover:text-[#c9972b]">
                  {l.label}
                </button>
              ) : (
                <a href={l.href} className="transition hover:text-[#c9972b]">{l.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default function Footer({ onLogin }) {
    return (
      <footer id="contact" className="scroll-mt-20 bg-[#4a0f22] text-white/80">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#home" className="text-2xl font-playfair text-white">
                Har<span className="text-[#c9972b]">Event</span>
              </a>
              <p className="mt-3 max-w-xs text-sm">
                HarEvent is your one-stop platform to find trusted vendors for
                weddings and every other celebration.
              </p>
            </div>
  
            <LinkColumn title="Quick Links" links={quickLinks} />
            <LinkColumn title="For Customers" links={customerLinks} />
            <LinkColumn title="For Vendors" links={vendorLinks} onLogin={onLogin} />
  
            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-5">
              <h3 className="mb-4 text-sm font-playfair uppercase tracking-wide text-white">
                Contact
              </h3>
              <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
  <FaMapMarkerAlt className="mt-0.5 text-[#c9972b]" /> Srinagar, India
</li>
<li className="flex items-start gap-2 text-sm">
  <FaPhoneAlt className="mt-0.5 text-[#c9972b]" /> +91 98765 43210
</li>
<li className="flex items-start gap-2 text-sm">
  <FaEnvelope className="mt-0.5 text-[#c9972b]" /> support@harevent.com
</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/60 sm:flex sm:justify-between sm:text-left">
            <p>© 2026 HarEvent LLP. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
    );
  }