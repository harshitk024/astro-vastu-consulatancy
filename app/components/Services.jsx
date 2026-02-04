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

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 300;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#fffaf0] px-5">
      <h2 className="text-center font-playfair text-3xl md:text-4xl mb-12 text-[#78350f]">
        Services Offered
      </h2>

      <div
        ref={sliderRef}
        className="max-w-[1200px] mx-auto flex gap-6 overflow-x-auto scrollbar-hide px-1"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[260px] bg-white rounded-3xl overflow-hidden
                       border border-[#f1e7d8]
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-[180px] w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover
                "
              />
            </div>

            {/* Title */}
            <div className="p-5 text-center">
              <h3 className="text-sm font-semibold text-[#3f2f23] leading-snug">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
