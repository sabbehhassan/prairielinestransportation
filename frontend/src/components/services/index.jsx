import {
  FaKey,
  FaAmazon,
  FaBuilding,
} from "react-icons/fa";

import service1 from "../../assets/new/7.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/new/4.png";

const servicesData = [
  {
    icon: <FaKey />,
    image: service1,
    title: "Dedicated Lanes",
    desc: "Reliable trucking routes designed for consistent delivery performance and long-term freight partnerships.",
  },
  {
    icon: <FaAmazon />,
    image: service2,
    title: "Amazon Loads",
    desc: "Efficient Amazon freight handling with fast pickups, secure transport, and on-time deliveries.",
  },
  {
    icon: <FaBuilding />,
    image: service3,
    title: "Government Contracts",
    desc: "Professional logistics solutions for government transportation projects and secure freight operations.",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#F8F5EE] to-[#EEF3E8] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10">
            Logistics Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] mt-6 leading-tight">
            Premium Freight & Transportation Services
          </h2>

          <p className="text-[#5d6d63] text-base leading-8 mt-6">
            Delivering reliable logistics, transportation, and freight solutions
            tailored for businesses worldwide.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#D4A017]/10"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/70 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-6 left-6 w-[70px] h-[70px] rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2E6B3D] text-2xl shadow-lg group-hover:bg-[#2E6B3D] group-hover:text-white group-hover:rotate-6 transition duration-500">
                  {service.icon}
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#0F3D2E]">
                  {service.title}
                </h3>

                <p className="text-[#5d6d63] text-sm leading-7 mt-4">
                  {service.desc}
                </p>

              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E6B3D] to-[#D4A017]"></div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-[#D4A017]/30 transition duration-500"></div>

              {/* Glow Effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2E6B3D]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;