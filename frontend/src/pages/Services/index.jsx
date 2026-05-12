import { useState } from "react";
import {
  FaTruckMoving,
  FaWarehouse,
  FaBoxes,
  FaArrowRight,
} from "react-icons/fa";

import heroBg from "../../assets/servicesvid.mp4";
import serviceTruck from "../../assets/new/3.png";

import RentedTrailerProgram from "../../components/rentalTrailer";
import TwicCardAssistance from "../../components/twicCard";
import InsuranceApplicationAssistance from "../../components/insuranceApplication";
import FactoringRegistration from "../../components/factoringRegister";

import AgreementModal from "../../components/CarrierAgreementModal";

const services = [
  {
    icon: <FaTruckMoving />,
    title: "Ground Freight",
    desc: "Reliable trucking and road freight services with fast delivery schedules and secure cargo handling.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    desc: "Secure storage facilities with inventory management and distribution support.",
  },
  {
    icon: <FaBoxes />,
    title: "Packaging Solutions",
    desc: "Professional packaging services to ensure your products remain protected in transit.",
  },
];

const Services = () => {
  const [openAgreement, setOpenAgreement] = useState(false);

  return (
    <>
      <section className="bg-[#F8F5EE]">

        {/* Hero */}
        <div className="relative h-[620px] overflow-hidden">

          <video
            autoPlay
            loop
            muted
            src={heroBg}
            alt="Services Hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div>

              <span className="inline-block bg-[#D4A017] text-[#0F3D2E] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg mb-6">
                Logistics Expertise
              </span>

              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                Our Services
              </h1>

              <p className="text-[#e7efe9] text-base md:text-lg mt-6 max-w-2xl mx-auto leading-8">
                Premium logistics services designed to move your business forward.
              </p>

            </div>

          </div>

        </div>

        {/* Intro */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D2E] leading-tight">
            Logistics Solutions Built For Modern Business
          </h2>

          <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#2E6B3D] to-[#D4A017] mx-auto mt-6 rounded-full"></div>

          <p className="text-[#5d6d63] text-base leading-8 max-w-3xl mx-auto mt-8">
            We provide comprehensive transportation and logistics services
            with a strong focus on reliability, efficiency, and customer satisfaction.
          </p>

        </div>

        {/* Featured Service */}
        <div className="max-w-6xl mx-auto px-6 pb-20">

          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[36px] shadow-xl overflow-hidden border border-[#D4A017]/10">

            <div className="relative overflow-hidden">

              <img
                src={serviceTruck}
                alt="Featured Service"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/60 to-transparent"></div>

            </div>

            <div className="p-10">

              <span className="text-[#D4A017] font-semibold uppercase tracking-wider text-sm">
                Featured Service
              </span>

              <h2 className="text-3xl font-bold text-[#0F3D2E] mt-3 leading-tight">
                End-to-End Freight Transportation Services
              </h2>

              <p className="text-[#5d6d63] leading-8 text-sm md:text-base mt-6">
                We specialize in efficient freight movement across local and
                international markets. Our logistics network ensures fast,
                secure, and cost-effective transportation.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-[#EEF3E8] rounded-2xl p-5 text-center border border-[#D4A017]/10">

                  <h3 className="text-2xl font-bold text-[#2E6B3D]">
                    24/7
                  </h3>

                  <p className="text-sm text-[#5d6d63] mt-1">
                    Support
                  </p>

                </div>

                <div className="bg-[#EEF3E8] rounded-2xl p-5 text-center border border-[#D4A017]/10">

                  <h3 className="text-2xl font-bold text-[#2E6B3D]">
                    120+
                  </h3>

                  <p className="text-sm text-[#5d6d63] mt-1">
                    Countries
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto px-6 pb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[30px] p-8 shadow-md border border-[#D4A017]/10 hover:shadow-2xl hover:-translate-y-3 transition duration-500 relative overflow-hidden"
              >

                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E6B3D] to-[#D4A017]"></div>

                {/* Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2E6B3D]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative">

                  <div className="w-[70px] h-[70px] rounded-2xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center text-white text-2xl shadow-lg group-hover:rotate-6 transition duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F3D2E] mt-6">
                    {service.title}
                  </h3>

                  <p className="text-[#5d6d63] text-sm leading-7 mt-4">
                    {service.desc}
                  </p>

                  <button className="mt-6 text-[#2E6B3D] text-sm font-semibold flex items-center gap-2 group-hover:gap-4 group-hover:text-[#D4A017] transition-all duration-300">
                    Explore Service
                    <FaArrowRight />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Components */}
        <RentedTrailerProgram
          setOpenAgreement={setOpenAgreement}
        />

        <TwicCardAssistance
          setOpenAgreement={setOpenAgreement}
        />

        <InsuranceApplicationAssistance
          setOpenAgreement={setOpenAgreement}
        />

        <FactoringRegistration
          setOpenAgreement={setOpenAgreement}
        />

      </section>

      {/* AGREEMENT MODAL */}
      <AgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />
    </>
  );
};

export default Services;