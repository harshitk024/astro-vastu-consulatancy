"use client";
import Image from "next/image";

const expertise = [
  "PhD in Planet & Nakshatra",
  "Acharya in Vastu Shastra",
  "Lal Kitab",
  "KP Astrology",
  "Vedic Astrology",
  "Vastu Shastra",
  "Numerology",
  "Yantra & Mantra",
  "Chakra Healing",
  "AstroVastu Science",
];

export default function About() {
  return (
    <section className="py-[70px] px-5 bg-[#fff3e0]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          {/* Heading */}
          <div className="space-y-5">
            <h2 className="font-playfair font-extrabold text-2xl sm:text-3xl md:text-5xl text-[#78350f] whitespace-nowrap text-center">
              About Dr. Neetu Mohan
            </h2>

            <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-[#fde68a] to-[#f59e0b] mx-auto md:mx-0 rounded-full"></div>

            <p className="font-serif text-[#4a3f35] text-base md:text-lg leading-relaxed max-w-[620px] mx-auto md:mx-0">
              I am Dr. Neetu Mohan, a professional Astrologer and Vastu
              Consultant with{" "}
              <strong>10+ years of professional experience</strong> in Vedic
              Astrology, Kundli Analysis, and Vastu Shastra for homes and
              businesses. My mission is to provide simple, practical, and
              ethical guidance—without fear, superstition, or false promises.
            </p>
          </div>

          {/* Experience & Certifications */}
          <div className="mt-10">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-[#78350f] mb-6 text-center md:text-left">
              Experience, Certifications & Expertise
            </h3>

            <div
              className="
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
    max-w-[720px] mx-auto md:mx-0
    max-h-[260px] overflow-y-auto
    md:max-h-none md:overflow-visible
    pr-1
    minimal-scroll
  "
            >
              {expertise.map((item) => (
                <div
                  key={item}
                  className="
          h-[72px]
          flex items-center
          px-6
          bg-white
          border border-[#fde68a]/70
          rounded-2xl
          shadow-sm
          text-[#4a3f35]
          font-medium
          text-base
          transition
          hover:shadow-md
          hover:border-[#f59e0b]
        "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="
      relative
      w-[300px] sm:w-[360px] md:w-[420px]
      h-[480px] md:h-[520px]
      mx-auto md:mx-0
    "
          >
            {/* soft background glow */}
            <div className="absolute -top-6 -left-6 w-56 h-56 bg-gradient-to-br from-[#fde68a]/50 to-[#f59e0b]/40 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-white">
              <Image
                src="/assets/about.jpeg"
                alt="Dr. Neetu Mohan"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
