import {
  ShieldCheck,
  FileText,
  Clock,
  Truck,
} from "lucide-react";

export default function TwicCardAssistance({ setOpenAgreement }) {

  return (
    <section className="relative bg-gradient-to-b from-[#F8F5EE] to-[#EEF3E8] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          {/* Badge */}
          <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-6">
            Port Access Assistance
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] leading-tight">
            TWIC Card Assistance
          </h2>

          <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#2E6B3D] to-[#D4A017] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-[#5d6d63] max-w-2xl mx-auto leading-8">
            Get professional assistance in obtaining your TWIC card and unlock
            access to high-paying port loads and secure maritime facilities.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: <ShieldCheck size={34} />,
              title: "Secure Port Access",
              desc: "Gain authorized access to ports and restricted maritime facilities without delays.",
            },
            {
              icon: <FileText size={34} />,
              title: "Application Assistance",
              desc: "We guide you through the entire TWIC application process including enrollment and verification.",
            },
            {
              icon: <Clock size={34} />,
              title: "Fast Processing Guidance",
              desc: "Avoid delays with expert support and get your TWIC card approved quickly.",
            },
            {
              icon: <Truck size={34} />,
              title: "More Load Opportunities",
              desc: "Access premium-paying port freight and increase your earning potential.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="group relative bg-white rounded-[30px] p-8 shadow-lg border border-[#D4A017]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#2E6B3D]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E6B3D] to-[#D4A017]"></div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition duration-500">

                {item.icon}

              </div>

              {/* Content */}
              <div className="relative">

                <h3 className="text-xl font-bold text-[#0F3D2E] mt-6 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#6d7a72] leading-7 text-sm mt-4">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Process Section */}
        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#D4A017]/10 mb-5">
              Simple Process
            </span>

            <h3 className="text-4xl font-bold text-[#0F3D2E]">
              How It Works
            </h3>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your application online or at an enrollment center.",
              },
              {
                step: "02",
                title: "Verification",
                desc: "Provide documents, fingerprints, and background verification.",
              },
              {
                step: "03",
                title: "Approval",
                desc: "TSA reviews your application and approves your credentials.",
              },
              {
                step: "04",
                title: "Get Your Card",
                desc: "Receive your TWIC card and access secure facilities.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="relative bg-white rounded-[30px] p-8 border border-[#D4A017]/10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
              >

                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#D4A017]/10 rounded-full blur-2xl"></div>

                {/* Step Number */}
                <div className="relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D4A017] to-[#b98708] flex items-center justify-center text-[#0F3D2E] text-lg font-bold shadow-xl">
                  {item.step}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-[#0F3D2E] mt-6">
                  {item.title}
                </h4>

                <p className="text-[#6d7a72] text-sm mt-4 leading-7">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] p-12 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

          <div className="relative">

            <span className="inline-block bg-[#D4A017] text-[#0F3D2E] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg mb-6">
              Start Today
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your TWIC Card?
            </h3>

            <p className="max-w-2xl mx-auto leading-8 text-[#d7e3dc]">
              Let our team help you complete the process quickly
              and start accessing premium freight opportunities.
            </p>

            <button
              onClick={() => setOpenAgreement(true)}
              className="mt-10 bg-gradient-to-r from-[#D4A017] to-[#b98708] hover:scale-[1.02] text-[#0F3D2E] px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_12px_30px_rgba(212,160,23,0.35)]"
            >
              Apply For TWIC Assistance
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}