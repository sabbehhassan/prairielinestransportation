import {
  FaStar,
  FaHandshake,
  FaShieldAlt,
  FaArrowRight,
  FaTruckMoving,
  FaGlobe,
  FaWarehouse,
  FaDollarSign,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import heroBg from "../../assets/images/about.png";
import storyImg from "../../assets/images/about-story.jpg";
import missionImg from "../../assets/images/about-mission.jpg";

const About = () => {
  return (
    <section className="bg-[#F8F5EE] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[520px] md:h-[700px]">

        <img
          src={heroBg}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2E]/90 to-[#0F3D2E]/60"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6">

            <span className="bg-[#D4A017] text-[#0F3D2E] px-5 py-2 rounded-full text-sm uppercase font-semibold shadow-lg">
              About Our Company
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Logistics Solutions Built For Modern Business
            </h1>

            <p className="text-[#e6efe9] mt-6 max-w-2xl text-lg leading-8">
              We provide reliable logistics, freight, warehousing,
              and transportation services globally.
            </p>

          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { icon: <FaTruckMoving />, number: "15K+", label: "Monthly Shipments" },
            { icon: <FaGlobe />, number: "120+", label: "Countries Covered" },
            { icon: <FaWarehouse />, number: "98%", label: "Client Satisfaction" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center border border-[#D4A017]/10 hover:-translate-y-2 transition duration-500"
            >

              <div className="w-[65px] h-[65px] mx-auto bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] text-white flex items-center justify-center rounded-2xl shadow-lg">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mt-4 text-[#0F3D2E]">
                {item.number}
              </h3>

              <p className="text-[#5d6d63] text-sm">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* ================= STORY ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <img
          src={storyImg}
          className="rounded-3xl shadow-2xl h-[450px] object-cover"
        />

        <div>

          <span className="text-[#D4A017] uppercase text-sm font-semibold tracking-wide">
            Our Story
          </span>

          <h2 className="text-4xl font-bold mt-3 text-[#0F3D2E] leading-tight">
            Building Trust Through Logistics Excellence
          </h2>

          <p className="text-[#5d6d63] mt-6 leading-8">
            PRAIRIE LINES TRANSPORTATION INC connects businesses with dependable freight
            carriers and supply chain solutions.
          </p>

          <p className="text-[#5d6d63] mt-4 leading-8">
            We focus on secure transportation, optimized shipping,
            and scalable logistics operations that help businesses grow.
          </p>

        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <span className="bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-[#0F3D2E] mt-6">
            Why Choose Our Logistics Services
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#D4A017]/10 hover:-translate-y-2 transition duration-500">

            <FaDollarSign className="text-[#2E6B3D] text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-3 text-[#0F3D2E]">
              Competitive Pricing & Flexible Solutions
            </h3>

            <p className="text-[#5d6d63] leading-8 text-sm">
              We provide competitive rates and flexible logistics solutions tailored
              to businesses of all sizes.
            </p>

          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#D4A017]/10 hover:-translate-y-2 transition duration-500">

            <FaLock className="text-[#2E6B3D] text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-3 text-[#0F3D2E]">
              Advanced Security & Safety
            </h3>

            <p className="text-[#5d6d63] leading-8 text-sm">
              We ensure your shipments remain secure and compliant
              at every stage of transportation.
            </p>

          </div>

        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="text-[#D4A017] uppercase text-sm font-semibold tracking-wide">
            Mission & Vision
          </span>

          <h2 className="text-4xl font-bold mt-3 text-[#0F3D2E] leading-tight">
            Delivering Smarter Logistics Worldwide
          </h2>

          <p className="text-[#5d6d63] mt-6 leading-8">
            Our mission is to simplify logistics while maintaining
            high-quality service and transportation efficiency.
          </p>

          <div className="space-y-5 mt-8">

            {[
              { icon: <FaStar />, title: "Excellence", desc: "Premium service quality" },
              { icon: <FaHandshake />, title: "Integrity", desc: "Transparency & trust" },
              { icon: <FaShieldAlt />, title: "Reliability", desc: "Safe delivery" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white p-5 rounded-2xl shadow-lg border border-[#D4A017]/10"
              >

                <div className="bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] text-white p-3 rounded-xl shadow-md">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F3D2E]">
                    {item.title}
                  </h4>

                  <p className="text-[#5d6d63] text-sm">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        <img
          src={missionImg}
          className="rounded-3xl shadow-2xl h-[450px] object-cover"
        />

      </div>

      {/* ================= COMMITMENT ================= */}
      <div className="bg-[#EEF3E8] py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6 text-[#0F3D2E]">
            Our Commitment to Quality
          </h2>

          <p className="text-[#5d6d63] leading-8 mb-6">
            We are dedicated to delivering top-quality international freight services.
            Your cargo is handled with the highest level of care.
          </p>

          <p className="text-[#5d6d63] leading-8">
            Our team works closely with every client to provide efficient and
            cost-effective logistics solutions.
          </p>

        </div>

      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] py-20 text-center text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[#D4A017]/5"></div>

        <div className="relative">

          <h2 className="text-4xl font-bold">
            Ready To Optimize Your Logistics?
          </h2>

          <p className="mt-6 text-[#d7e3dc]">
            Let’s discuss your transportation needs today.
          </p>

          <Link to="/contact">
            <button className="mt-8 bg-[#D4A017] hover:bg-[#e0ad1d] text-[#0F3D2E] px-7 py-3 rounded-xl flex items-center gap-2 mx-auto font-semibold transition duration-300 shadow-xl">
              Contact Us <FaArrowRight />
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default About;