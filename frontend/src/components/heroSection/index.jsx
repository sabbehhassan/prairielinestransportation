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
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-6 tracking-wide uppercase">
              Trusted Logistics Company
            </span>

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
              Fast & Reliable <br />
              Logistics Services
            </h1>

            <p className="text-gray-200 text-lg leading-8 max-w-2xl mb-8">
              We deliver efficient transportation, warehousing, freight,
              and supply chain solutions across industries worldwide.
            </p>

            {/* Same Agreement Open Button */}
            <button
              onClick={() => setOpenAgreement(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-semibold transition duration-300"
            >
              Get Started
            </button>

          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
};

export default HeroSection;