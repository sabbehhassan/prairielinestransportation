import heroBg from "../../assets/hero.png";

const HeroSection = ({ setOpenAgreement }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Logistics Hero"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Extra Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2E]/90 via-[#0F3D2E]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <span className="inline-block bg-[#D4A017] text-[#0F3D2E] px-5 py-2 rounded-full text-sm font-bold mb-6 tracking-wide uppercase shadow-lg">
              Trusted Logistics Company
            </span>

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
              Fast & Reliable <br />
              Logistics Services
            </h1>

            <p className="text-[#e7efe9] text-lg leading-8 max-w-2xl mb-8">
              We deliver efficient transportation, warehousing, freight,
              and supply chain solutions across industries worldwide.
            </p>

            {/* Same Agreement Open Button */}
            <button
              onClick={() => setOpenAgreement(true)}
              className="bg-gradient-to-r from-[#D4A017] to-[#b8860b] hover:from-[#e0ad1d] hover:to-[#c99712] text-[#0F3D2E] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Get Started
            </button>

          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8F5EE] to-transparent"></div>

    </section>
  );
};

export default HeroSection;