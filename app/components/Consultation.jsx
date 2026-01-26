export default function Consultation() {
  const formats = [
    "Face-to-Face",
    "Phone",
    "Chat",
    "Video Consultation",
  ];

  return (
    <section className="py-20 px-6 text-center bg-[#fffaf0]">
      <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-[#78350f]">
        Consultation Formats
      </h2>

      <p className="max-w-[720px] mx-auto text-[#4a3f35]/80 text-base md:text-lg mb-12">
        Choose the consultation format that feels most comfortable and
        aligned with your needs.
      </p>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {formats.map((format, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl py-8 px-4
                       shadow-sm border border-black/5
                       transition-all duration-500
                       hover:-translate-y-2 hover:shadow-lg"
          >
            <span className="block text-lg font-medium text-[#4a3f35]
                             group-hover:text-[#78350f] transition">
              {format}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
