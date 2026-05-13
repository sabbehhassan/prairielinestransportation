import {
  Truck,
  ShieldCheck,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";

import trailerImg from "../../assets/new/6.png";

export default function RentedTrailerProgram({ setOpenAgreement }) {

  return (
    <section className="bg-gradient-to-b from-[#F8F5EE] to-[#EEF3E8] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE + FLOATING STATS */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

            <img
              src={trailerImg}
              alt="Trailer Rental"
              className="relative rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] w-full h-[520px] object-cover border border-[#D4A017]/10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-[#0F3D2E]/20 to-transparent"></div>

            {/* Floating Card 1 */}
            <div className="absolute -bottom-7 left-6 bg-white/95 backdrop-blur-xl border border-[#D4A017]/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center text-white shadow-lg">
                <Truck size={22} />
              </div>

              <div>
                <h4 className="font-bold text-[#0F3D2E] text-sm">
                  50+ Trailers
                </h4>

                <p className="text-xs text-[#6d7a72] mt-1">
                  Available Fleet
                </p>
              </div>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-7 right-6 bg-white/95 backdrop-blur-xl border border-[#D4A017]/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#b98708] flex items-center justify-center text-white shadow-lg">
                <DollarSign size={22} />
              </div>

              <div>
                <h4 className="font-bold text-[#0F3D2E] text-sm">
                  Affordable
                </h4>

                <p className="text-xs text-[#6d7a72] mt-1">
                  Pricing Plans
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT - CONTENT */}
          <div>

            {/* Badge */}
            <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-6">
              Rental Solutions
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] leading-tight">
              Rented Trailer Program
            </h2>

            {/* Line */}
            <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#2E6B3D] to-[#D4A017] rounded-full mt-6"></div>

            {/* Description */}
            <p className="mt-8 text-[#5d6d63] leading-8 text-base">
              Access a wide range of premium-quality trailers without heavy
              investment. Our rental program helps carriers scale operations,
              reduce upfront costs, and maintain flexibility.
            </p>

            {/* Feature List */}
            <div className="mt-10 space-y-6">

              {[
                {
                  icon: <Truck size={22} />,
                  title: "Multiple Trailer Options",
                  desc: "Flatbed, lowbed, and specialized trailers for all cargo types.",
                },
                {
                  icon: <DollarSign size={22} />,
                  title: "Cost Saving Model",
                  desc: "Avoid upfront investment and pay only for what you use.",
                },
                {
                  icon: <Clock size={22} />,
                  title: "Flexible Duration",
                  desc: "Daily, weekly, or long-term rental options available.",
                },
                {
                  icon: <ShieldCheck size={22} />,
                  title: "Maintained & Safe",
                  desc: "Regularly inspected equipment for maximum reliability.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="group bg-white border border-[#D4A017]/10 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 relative overflow-hidden"
                >

                  {/* Glow */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#2E6B3D]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center text-white shadow-lg shrink-0 group-hover:rotate-6 transition duration-500">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="relative">

                    <h4 className="font-bold text-[#0F3D2E] text-lg">
                      {item.title}
                    </h4>

                    <p className="text-sm text-[#6d7a72] mt-2 leading-7">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            {/* CTA BUTTON */}
            <div className="mt-12">

              <button
                onClick={() => setOpenAgreement(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] hover:scale-[1.02] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_12px_30px_rgba(46,107,61,0.25)]"
              >

                Apply For Trailer Agreement

                <ArrowRight size={20} />

              </button>

              <p className="text-sm text-[#6d7a72] mt-4 leading-7">
                Interested in renting a trailer?
                Fill out the agreement form to get started.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}