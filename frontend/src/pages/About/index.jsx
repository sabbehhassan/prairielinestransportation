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
    <section className="bg-[#f4f6f8] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[520px] md:h-[700px]">

        <img src={heroBg} className="w-full h-full object-cover" loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6">

            <span className="bg-[#0B7BEA] text-white px-4 py-2 rounded-full text-sm uppercase">
              About Our Company
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-bold mt-6">
              Logistics Solutions Built For Modern Business
            </h1>

            <p className="text-gray-200 mt-6 max-w-2xl">
              We provide reliable logistics, freight, warehousing, and transportation services globally.
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
            <div key={index} className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <div className="w-[65px] h-[65px] mx-auto bg-[#0B7BEA] text-white flex items-center justify-center rounded-2xl">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mt-4">{item.number}</h3>
              <p className="text-gray-600 text-sm">{item.label}</p>

            </div>
          ))}
        </div>
      </div>

      {/* ================= STORY ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <img src={storyImg} className="rounded-3xl shadow-lg h-[450px] object-cover" />

        <div>
          <span className="text-[#0B7BEA] uppercase text-sm font-semibold">Our Story</span>

          <h2 className="text-4xl font-bold mt-3">
            Building Trust Through Logistics Excellence
          </h2>

          <p className="text-gray-700 mt-6 leading-8">
            PRAIREI LINES TRANSPORTATION INC connects businesses with dependable freight
            carriers and supply chain solutions.
          </p>

          <p className="text-gray-700 mt-4 leading-8">
            We focus on secure transportation, optimized shipping, and scalable
            logistics operations that help businesses grow.
          </p>

        </div>
      </div>

      {/* ================= NEW FEATURES SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            Why Choose Our Logistics Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <FaDollarSign className="text-[#0B7BEA] text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-3">
              Competitive Pricing & Flexible Solutions
            </h3>

            <p className="text-gray-600 leading-8 text-sm">
              We provide competitive rates and flexible logistics solutions tailored 
              to businesses of all sizes. Our team works closely with clients to 
              understand their needs and deliver customized strategies.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <FaLock className="text-[#0B7BEA] text-3xl mb-4" />

            <h3 className="text-xl font-bold mb-3">
              Advanced Security & Safety
            </h3>

            <p className="text-gray-600 leading-8 text-sm">
              Our experienced team helps you navigate global shipping regulations, 
              tariffs, duties, and customs processes. We ensure your shipments 
              remain secure and compliant at every stage.
            </p>
          </div>

        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="text-[#0B7BEA] uppercase text-sm font-semibold">
            Mission & Vision
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Delivering Smarter Logistics Worldwide
          </h2>

          <p className="text-gray-700 mt-6 leading-8">
            Our mission is to simplify logistics while maintaining high-quality
            service and global transportation efficiency.
          </p>

          <div className="space-y-5 mt-8">

            {[
              { icon: <FaStar />, title: "Excellence", desc: "Premium service quality" },
              { icon: <FaHandshake />, title: "Integrity", desc: "Transparency & trust" },
              { icon: <FaShieldAlt />, title: "Reliability", desc: "Safe delivery" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl shadow">

                <div className="bg-[#0B7BEA] text-white p-3 rounded-xl">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

        <img src={missionImg} className="rounded-3xl shadow-lg h-[450px] object-cover" />
      </div>

      {/* ================= COMMITMENT SECTION ================= */}
      <div className="bg-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Commitment to Quality
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            We are dedicated to delivering top-quality international freight services.
            Your cargo is handled with the highest level of care, ensuring safe and 
            timely delivery.
          </p>

          <p className="text-gray-600 leading-8">
            Our team works closely with every client to provide efficient and 
            cost-effective logistics solutions. We continuously improve our services 
            to deliver excellence and reliability you can trust.
          </p>

        </div>

      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#0B7BEA] py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready To Optimize Your Logistics?
        </h2>

        <p className="mt-6 text-white/80">
          Let’s discuss your transportation needs today.
        </p>

        <Link to="/contact">
          <button className="mt-8 bg-white text-[#0B7BEA] px-7 py-3 rounded-xl flex items-center gap-2 mx-auto">
            Contact Us <FaArrowRight />
          </button>
        </Link>

      </div>

    </section>
  );
};

export default About;