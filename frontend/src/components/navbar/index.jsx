import { useState } from "react";
import { FiClock, FiMail } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import CarrierAgreementModal from "../CarrierAgreementModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAgreement, setOpenAgreement] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* Top Bar */}
        <div className="hidden lg:block bg-[#0F3D2E] border-b border-[#D4A017]/20 text-white">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-sm">

            <div className="flex items-center gap-8 text-[#d8e3db]">

              <div className="flex items-center gap-2 hover:text-[#D4A017] transition">
                <FiMail className="text-[#D4A017]" />
                <span>info@prairielinestransportation.com</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#D4A017] transition">
                <FiMail className="text-[#D4A017]" />
                <span>gysin@prairielinestransportation.com</span>
              </div>

            </div>

            <div className="flex items-center gap-2 text-[#d8e3db]">
              <FiClock className="text-[#D4A017]" />
              <span>Mon - Fri</span>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-[#F8F5EE]/95 backdrop-blur-xl shadow-lg border-b border-[#D4A017]/10">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex justify-between items-center h-[88px]">

              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="PRAIRIE LINES TRANSPORTATION INC"
                  className="w-40 object-contain"
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-3 bg-[#EEF3E8] p-2 rounded-full border border-[#D4A017]/10 shadow-sm">

                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-[#2E6B3D] text-white shadow-md"
                            : "text-[#0F3D2E] hover:bg-[#D4A017]/10 hover:text-[#2E6B3D]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}

              </ul>

              {/* Desktop Button */}
              <div className="hidden lg:block">
                <button
                  onClick={() => setOpenAgreement(true)}
                  className="bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] hover:scale-105 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Carrier Setup | Agreement
                </button>
              </div>

              {/* Mobile Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-11 h-11 rounded-xl bg-[#EEF3E8] flex items-center justify-center shadow-sm"
                >
                  {menuOpen ? (
                    <HiX className="text-3xl text-[#0F3D2E]" />
                  ) : (
                    <HiOutlineMenuAlt3 className="text-3xl text-[#0F3D2E]" />
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-[#F8F5EE] border-t shadow-xl animate-fadeDown">
              <div className="px-6 py-6 space-y-4">

                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-5 py-3 rounded-2xl text-sm font-semibold transition duration-300 ${
                        isActive
                          ? "bg-[#2E6B3D] text-white"
                          : "bg-[#EEF3E8] text-[#0F3D2E] hover:bg-[#D4A017]/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    setOpenAgreement(true);
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] text-white py-3 rounded-2xl font-semibold shadow-lg mt-4"
                >
                  Carrier Setup | Agreement
                </button>

              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Agreement Modal */}
      <CarrierAgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />
    </>
  );
};

export default Navbar;