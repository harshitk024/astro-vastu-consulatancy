"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Life Prediction", image: "/assets/life.jpeg" },
    { title: "Money Matters & Finance Problems", image: "/assets/money.jpeg" },
    { title: "Career & Business Guidance", image: "/assets/career.jpeg" },
    {
      title: "Marriage & Relationship Guidance",
      image: "/assets/relationship.jpeg",
    },
    { title: "Home Vastu (AstroVastu)", image: "/assets/home.jpeg" },
    { title: "Industry Vastu (AstroVastu)", image: "/assets/industry.jpeg" },
    { title: "Child Birth Guidance", image: "/assets/child.jpg" },
    { title: "Health", image: "/assets/health.jpeg" },
    { title: "Competition", image: "/assets/competition.jpeg" },
    { title: "Match Making", image: "/assets/match-making.jpeg" },
    { title: "Kundli Making", image: "/assets/kundali.jpeg" },
    { title: "Spiritual Coaching", image: "/assets/spiritual_coach.jpeg" },
    {
      title: "Vedic & Advanced Astrology Coaching",
      image: "/assets/vedic.jpeg",
    },
    { title: "Vastu Shastra Coaching", image: "/assets/vastu-shastra.jpeg" },
    { title: "AstroVastu Coaching", image: "/assets/astrovastu.jpeg" },
    { title: "Tantra And Mantra Vidya", image: "/assets/tantra.jpeg" },
    { title: "Reiki", image: "/assets/reiki.jpeg" },
    { title: "Interior Decoration", image: "/assets/interior_decoration.jpeg" },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const scrollAmount = slider.clientWidth * 0.85;

      if (
        slider.scrollLeft + scrollAmount >=
        slider.scrollWidth - slider.clientWidth
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-[#fffaf2] via-[#fff6e8] to-[#fdf2d7] px-4 relative overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#78350f] tracking-wide inline-block relative">
          Services Offered
          <span className="block h-[3px] w-24 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-5 rounded-full"></span>
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="
          max-w-[1200px] mx-auto
          flex gap-8
          overflow-x-auto
          scroll-smooth
          pb-8
          snap-x snap-mandatory
          touch-pan-x
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="
              snap-center
              min-w-[85%] sm:min-w-[320px] md:min-w-[360px]
              relative
              group
              transition-all duration-500
            "
          >
            {/* Gold glow border effect */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-300 opacity-30 blur-[8px] group-hover:opacity-60 transition duration-500"></div>

            <div
              className="
                relative
                bg-gradient-to-b from-white to-[#fffaf3]
                rounded-[28px]
                border border-[#f1e4c3]
                shadow-[0_10px_40px_rgba(120,53,15,0.15)]
                hover:shadow-[0_20px_60px_rgba(120,53,15,0.25)]
                transition-all duration-500
                hover:-translate-y-3
                overflow-hidden
              "
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden rounded-t-[28px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Mystical gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b1d00]/60 via-[#78350f]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="font-playfair font-semibold text-xl text-[#cc0e0e] tracking-wide leading-snug">
                  {service.title}
                </h3>

                <div className="mt-5 mx-auto h-[2px] w-16 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}