import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function InsuranceApplicationAssistance({
  setOpenAgreement,
}) {

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0F3D2E] via-[#184735] to-[#0b241b] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl top-[-120px] left-[-120px]"></div>

      <div className="absolute w-[450px] h-[450px] bg-[#2E6B3D]/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Heading */}
        <div className="text-center mb-20">

          {/* Badge */}
          <span className="inline-block bg-[#D4A017] text-[#0F3D2E] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg mb-6">
            Insurance Support
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Insurance Application Assistance
          </h2>

          <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#D4A017] to-[#f2d06b] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-[#d7e3dc] max-w-2xl mx-auto leading-8">
            Fast-track your trucking insurance with expert guidance,
            full compliance, and hassle-free application support.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - FEATURES */}
          <div className="space-y-6">

            {[
              {
                icon: <ShieldCheck size={30} />,
                title: "Coverage Selection",
                desc: "Get help choosing liability, cargo, and physical damage coverage.",
              },
              {
                icon: <FileText size={30} />,
                title: "Paperwork Handling",
                desc: "We manage documents and filing so you avoid costly mistakes.",
              },
              {
                icon: <Clock size={30} />,
                title: "Quick Approval",
                desc: "Speed up your approval with our streamlined process.",
              },
              {
                icon: <CheckCircle size={30} />,
                title: "FMCSA Compliance",
                desc: "Stay compliant and ready to operate without delays.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group relative flex gap-5 bg-white/10 backdrop-blur-xl p-6 rounded-[28px] border border-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-[#D4A017]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4A017] to-[#b98708] flex items-center justify-center text-white shadow-xl shrink-0 group-hover:rotate-6 transition duration-500">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="relative">

                  <h3 className="font-bold text-xl">
                    {item.title}
                  </h3>

                  <p className="text-[#d7e3dc] text-sm mt-2 leading-7">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE - TIMELINE */}
          <div className="relative">

            {/* Line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4A017] via-[#ffffff40] to-transparent"></div>

            <div className="space-y-10">

              {[
                {
                  step: "Step 1",
                  title: "Consultation",
                  desc: "We understand your trucking needs and insurance requirements.",
                },
                {
                  step: "Step 2",
                  title: "Documentation",
                  desc: "Submit your business details and required documents.",
                },
                {
                  step: "Step 3",
                  title: "Application",
                  desc: "We file and manage your insurance application.",
                },
                {
                  step: "Step 4",
                  title: "Approval",
                  desc: "Get your certificate and start operating immediately.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="relative pl-14"
                >

                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-[#D4A017] to-[#b98708] border-4 border-[#0F3D2E] shadow-lg flex items-center justify-center text-[#0F3D2E] text-xs font-bold">
                    {index + 1}
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 hover:bg-white/15 transition duration-300">

                    <span className="text-[#D4A017] text-xs uppercase tracking-widest font-semibold">
                      {item.step}
                    </span>

                    <h4 className="font-bold text-xl mt-2">
                      {item.title}
                    </h4>

                    <p className="text-[#d7e3dc] text-sm mt-3 leading-7">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 text-center">

          <button
            onClick={() => setOpenAgreement(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4A017] to-[#b98708] hover:scale-[1.02] text-[#0F3D2E] px-9 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_12px_30px_rgba(212,160,23,0.35)]"
          >
            Apply For Insurance Assistance
          </button>

        </div>

      </div>

    </section>
  );
}