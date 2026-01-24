export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-t from-[#fff3d6] to-[#f7b733] animate-[sunrise_4s_ease-in-out]">
      <div className="text-center max-w-[800px] px-5">
        <h1 className="font-playfair text-[2.8rem] mb-5">
          Astrology, Vastu & Healing
          <br />
          for Clarity and Balance
        </h1>

        <p className="text-[1.1rem] mb-8">
          Personalized AstroVastu guidance rooted in ancient wisdom and practical solutions.
        </p>

        <a
          href="#contact"
          className="inline-block bg-[#d97706] text-white px-7 py-3 rounded-full font-medium"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
