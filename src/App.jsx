import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import VendorCategories from '../Components/VendorC';
import EventCategories from '../Components/EventC';
import { WHATSAPP_NUMBER } from "../src/constant";
import HowItWorks from '../Components/howitworks';
import WhyChoose from '../Components/chooseharevent';
import CTA from '../Components/Cta';
import About from '../Components/About';
import Blog from '../Components/Blog';
import Footer from '../Components/footer';

import LoginModal from '../Components/LoginModal';
import { FaWhatsapp } from "react-icons/fa";
import VendorResults from '../Components/VendorResult';
const emptyFilters={event:"",category:"",city:""}

const App = () => {
  const [filters, setFilters] = useState(emptyFilters);
  const [showResults, setShowResults] = useState(false);
  const [scrollTick, setScrollTick] = useState(0);
  const [loginType, setLoginType] = useState(null);
  const closeLogin = useCallback(() => setLoginType(null), []);
  
  const log = (x) => console.log(x);
  useEffect(() => {
    if (scrollTick === 0) return;
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  }, [scrollTick]);

  const openResults = (nextFilters) => {
    if (nextFilters) setFilters(nextFilters);
    setShowResults(true);
    setScrollTick((t) => t + 1);
  };  
  return (
    <>
      <Navbar onLogin={setLoginType} />
      <Hero
        filters={filters}
        onFilterChange={setFilters}
        onSearch={() => openResults()}
      />
      <VendorCategories
        onSelectCategory={(name) => openResults({ ...emptyFilters, category: name })}
        onViewAll={() => openResults(emptyFilters)}
      />
      <EventCategories
        onSelectEvent={(name) => openResults({ ...emptyFilters, event: name })}
        onViewAll={() => openResults(emptyFilters)}
      />
      {showResults && (
  <VendorResults
    filters={filters}
    onClear={() => {
      setFilters(emptyFilters);
      setShowResults(false);
    }}
  />
)}
<HowItWorks />
<WhyChoose />
    <About />
    <Blog />
    <CTA onExplore={() => openResults(emptyFilters)} onJoin={setLoginType} />
      <Footer onLogin={setLoginType} />
  
      {loginType && <LoginModal type={loginType} onClose={closeLogin} />}
  
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi HarEvent, I need help planning an event.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}
export default App;