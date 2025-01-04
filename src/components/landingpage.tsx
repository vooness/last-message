"use client"; // Přidáno na začátek souboru

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [videoSource, setVideoSource] = useState("/video/Comp1.webm");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setVideoSource("/video/Comp4.webm"); // Video pro mobil
      } else {
        setVideoSource("/video/Comp1.webm"); // Video pro desktop/tablety
      }
    };

    handleResize(); // Nastavte video na základě aktuální šířky
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-6 md:px-12 xl:px-20"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src={videoSource}
        autoPlay
        loop
        muted
      />

      {/* Left Placeholder (Image/Illustration Space) */}
      <div className="hidden md:block"></div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto md:mr-auto md:ml-8 lg:ml-16 xl:ml-24 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl xl:text-6xl font-extrabold text-gray-900 mb-6 ">
          Uchovejte své poslední slova navždy
        </h1>
        <p className="text-base md:text-lg xl:text-xl text-gray-800 mb-8 leading-relaxed">
          Bezpečné, moderní a snadné řešení pro uchování vašich posledních vzkazů pro své blízké.
        </p>

       {/* Call to Action */}
<div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 z-10">
  <a
    href="#features"
    className="bg-[#E75654] text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-[#d64543] transition"
  >
    Zanechat zprávu ➔
  </a>
  <a
    href="#pricing"
    className="bg-gray-100 border border-[#E75654] text-[#E75654] px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:bg-[#f5d4d4] transition"
  >
    Zjistit více ➔
  </a>
</div>

      </div>
    </section>
  );
}
