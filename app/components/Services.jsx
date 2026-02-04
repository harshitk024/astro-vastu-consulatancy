"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Life Prediction", image: "/assets/life.jpeg" },
    { title: "Money Matters & Finance Problems", image: "/assets/money.jpeg" },
    { title: "Career & Business Guidance", image: "/assets/career.jpeg" },
    { title: "Marriage & Relationship Guidance", image: "/assets/relationship.jpeg" },
    { title: "Home Vastu (AstroVastu)", image: "/assets/home.jpeg" },
    { title: "Industry Vastu (AstroVastu)", image: "/assets/industry.jpeg" },
    { title: "Child Birth Guidance", image: "/assets/child.jpg" },
    { title: "Health", image: "/assets/health.jpeg" },
    { title: "Competition", image: "/assets/competition.jpeg" },
    { title: "Match Making", image: "/assets/match-making.jpeg" },
    { title: "Kundli Making", image: "/assets/kundali.jpeg" },
    { title: "Spiritual Coaching", image: "/assets/spiritual_coach.jpeg" },
    { title: "Vedic & Advanced Astrology Coaching", image: "/assets/vedic.jpeg" },
    { title: "Vastu Shastra Coaching", image: "/assets/vastu-shastra.jpeg" },
    { title: "AstroVastu Coaching", image: "/assets/astrovastu.jpeg" },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (window.innerWidth < 640) return; // mobile = manual swipe only

    const interval = setInterval(() => {
      const scrollBy = 360 + 24;

      if (
        slider.scrollLeft + scrollBy >=
        slider.scrollWidth - slider.clientWidth
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollBy, behavior: "smooth" });
      }
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#fffaf2] px-4">
      <h2 className="text-center font-playfair text-3xl md:text-4xl mb-14 text-[#78350f] tracking-wide">
        Services Offered
      </h2>

      <div
        ref={sliderRef}
        className="
          max-w-[1200px] mx-auto
          flex gap-6
          overflow-x-auto
          snap-x snap-mandatory
          scroll-smooth
          overscroll-x-contain
          minimal-scroll
          pb-6
        "
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="
              snap-center
              min-w-[90%] sm:min-w-[320px] md:min-w-[360px]
              mx-auto
              bg-white
              rounded-[28px]
              overflow-hidden
              border border-[#f3e8d8]
              shadow-sm
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-2xl
              group
            "
          >
            {/* Image */}
            <div className="relative h-[220px] overflow-hidden">
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

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="font-playfair text-base text-[#7c2d12] tracking-wide">
                {service.title}
              </h3>

              <div className="mt-3 mx-auto h-[2px] w-10 bg-[#d97706] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
