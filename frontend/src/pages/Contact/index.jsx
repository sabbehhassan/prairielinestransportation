import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

import contactHero from "../../assets/images/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8F5EE] overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[450px]">
        <img
          src={contactHero}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="inline-block bg-[#D4A017] text-[#0F3D2E] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg mb-6">
              Contact Prairie Lines
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Contact Us
            </h1>

            <p className="text-[#e7efe9] text-base md:text-lg mt-6 max-w-2xl mx-auto leading-8">
              Get in touch with our logistics specialists
            </p>
          </div>
        </div>
      </div>

      {/* Contact Area */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <span className="bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D2E] mt-6 leading-tight">
              Let’s Talk Logistics
            </h2>

            <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#2E6B3D] to-[#D4A017] mt-6 rounded-full"></div>

            <p className="text-[#5d6d63] text-sm md:text-base leading-8 mt-8 max-w-lg">
              Reach out to our team for freight inquiries, partnerships,
              shipment details, or logistics consultation.
            </p>

            {/* Info Cards */}
            <div className="space-y-5 mt-10">
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: (
                    <p>
                      info@prairielinestransportation.com
                      <br />
                      gysin@prairielinestransportation.com
                    </p>
                  ),
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Address",
                  value: "54 1/2 street south fargo, ND 58103",
                },
                {
                  icon: <FaClock />,
                  title: "Working Hours",
                  value: "Mon - Fri | 24/7 Support",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#D4A017]/10 p-5 flex gap-4 items-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-500"
                >
                  <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center text-white text-lg shadow-lg shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#0F3D2E]">
                      {item.title}
                    </h4>

                    <p className="text-sm text-[#5d6d63] mt-1 leading-7">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-[#D4A017]/10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <h3 className="text-3xl font-bold text-[#0F3D2E] mb-2">
                Send Message
              </h3>

              <p className="text-[#6d7a72] text-sm mb-8">
                Fill the form below and our team will contact you shortly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full border border-[#d8dfd9] rounded-2xl px-5 py-4 text-sm outline-none bg-[#fafbf9]
                    transition-all duration-300
                    group-hover:border-[#2E6B3D]
                    focus:border-[#2E6B3D]
                    focus:shadow-[0_0_15px_rgba(46,107,61,0.18)]"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border border-[#d8dfd9] rounded-2xl px-5 py-4 text-sm outline-none bg-[#fafbf9]
                    transition-all duration-300
                    group-hover:border-[#2E6B3D]
                    focus:border-[#2E6B3D]
                    focus:shadow-[0_0_15px_rgba(46,107,61,0.18)]"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full border border-[#d8dfd9] rounded-2xl px-5 py-4 text-sm outline-none bg-[#fafbf9]
                    transition-all duration-300
                    group-hover:border-[#2E6B3D]
                    focus:border-[#2E6B3D]
                    focus:shadow-[0_0_15px_rgba(46,107,61,0.18)]"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full border border-[#d8dfd9] rounded-2xl px-5 py-4 text-sm outline-none bg-[#fafbf9] resize-none
                    transition-all duration-300
                    group-hover:border-[#2E6B3D]
                    focus:border-[#2E6B3D]
                    focus:shadow-[0_0_15px_rgba(46,107,61,0.18)]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E]
                  hover:scale-[1.02]
                  text-white px-8 py-4 rounded-2xl text-sm font-semibold
                  transition duration-300 w-full disabled:opacity-70 shadow-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-[32px] overflow-hidden shadow-xl border border-[#D4A017]/10">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=320+N+Meridian+St,+Indianapolis,+IN+46204&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
