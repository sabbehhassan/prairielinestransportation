import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F3D2E] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-87.5 h-87.5 bg-[#D4A017]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-87.5 h-87.5 bg-[#2E6B3D]/20 rounded-full blur-[120px]"></div>

      {/* Top Border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent"></div>

      {/* Footer Container */}
      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-6">

        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 border-b border-[#ffffff15] pb-10 text-center md:text-left">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start md:-ml-4 -mt-4">

            <img
              src={logo}
              alt="PRAIRIE LINES TRANSPORTATION INC"
              className="w-44 mb-4"
            />

            <p className="text-[#d7e3dc] text-sm leading-7 max-w-65">
              PRAIRIE LINES TRANSPORTATION INC delivers dependable logistics and freight
              services designed to keep shipments moving efficiently, securely,
              and always on schedule.
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">

            <h3 className="text-xl font-semibold mb-8 relative inline-block text-white">
              Quick Links

              <span className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -bottom-2 w-12 h-0.5 bg-[#D4A017] rounded-full"></span>
            </h3>

            <ul className="space-y-4 text-[#d7e3dc]">

              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-center md:justify-start gap-3 hover:text-[#D4A017] transition duration-300"
                  >
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">

            <h3 className="text-xl font-semibold mb-8 relative inline-block text-white">
              Services

              <span className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -bottom-2 w-12 h-0.5 bg-[#D4A017] rounded-full"></span>
            </h3>

            <ul className="space-y-4 text-[#d7e3dc]">

              {[
                "International Freight",
                "Amazon Loads",
                "Dedicated Loads",
                "Truck Dispatching",
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-[#D4A017] transition duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">

            <h3 className="text-xl font-semibold mb-8 relative inline-block text-white">
              Contact Info

              <span className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -bottom-2 w-12 h-0.5 bg-[#D4A017] rounded-full"></span>
            </h3>

            <div className="space-y-6 w-full">

              {/* Address */}
              <div className="flex items-start justify-center md:justify-start gap-4 text-center md:text-left">

                <div className="w-12 h-12 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-[#d7e3dc] text-sm leading-7">
                  54 1/2 street south fargo, ND 58103
                </p>

              </div>

              {/* Email */}
              <div className="flex items-start justify-center md:justify-start gap-4 text-center md:text-left">

                <div className="w-12 h-12 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>

                <p className="text-[#d7e3dc] text-sm leading-7 break-all">
                  info@prairielinestransportation.com
                  <br />
                  gysin@prairielinestransportation.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">

          <p className="text-sm text-[#b7c7bf]">
            © 2026 PRAIRIE LINES TRANSPORTATION INC. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;