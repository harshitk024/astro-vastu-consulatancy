"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-[70px] px-5 bg-[#fff3e0] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="font-playfair font-extrabold text-3xl md:text-5xl text-[#78350f] fade-in">
            About Dr. Neetu Mohan
          </h2>

          {/* Underline */}
          <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-[#fde68a] to-[#f59e0b] mx-auto md:mx-0 rounded-full fade-in delay-200"></div>

          <p className="font-serif text-[#4a3f35] text-base md:text-lg leading-relaxed max-w-[600px] mx-auto md:mx-0 fade-in delay-400">
            Dr. Neetu Mohan is a renowned AstroVastu Consultant with over{" "}
            <strong>8+ years of professional experience</strong> in Vedic Astrology,
            Vastu Shastra, and holistic healing sciences. She combines ancient wisdom
            with practical guidance to help individuals find clarity, balance, and
            harmony in their lives.
          </p>
        </div>

        {/* Right: Phone-shaped Image with floating background */}
        <div className="flex-1 relative w-[220px] sm:w-[260px] md:w-[300px] h-[500px] md:h-[550px] mx-auto md:mx-0 fade-in delay-600">
          
          {/* Floating background shape */}
          <div className="absolute -top-10 -left-10 w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-gradient-to-r from-[#fde68a]/50 to-[#f59e0b]/50 rounded-full blur-3xl animate-float -z-10"></div>

          {/* Phone-shaped container */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/assets/person.jpeg"
              alt="Dr. Neetu Mohan"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s forwards;
        }
        .fade-in.delay-200 { animation-delay: 0.2s; }
        .fade-in.delay-400 { animation-delay: 0.4s; }
        .fade-in.delay-600 { animation-delay: 0.6s; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
