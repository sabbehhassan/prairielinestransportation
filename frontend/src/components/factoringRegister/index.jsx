import {
  FileText,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function FactoringRegistration({
  setOpenAgreement,
}) {

  return (
    <section className="relative bg-gradient-to-b from-[#F8F5EE] to-[#EEF3E8] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">

          {/* Badge */}
          <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-6">
            Financial Support
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] leading-tight">
            Factoring Registration
          </h2>

          <div className="w-[120px] h-[4px] bg-gradient-to-r from-[#2E6B3D] to-[#D4A017] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-[#5d6d63] max-w-3xl mx-auto leading-8">
            Improve your cash flow and get paid faster by registering with our
            trusted factoring partners. We simplify the onboarding process so
            you can focus on growing your trucking business.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT - STEPS FLOW */}
          <div className="space-y-6">

            {[
              {
                step: "1",
                title: "Submit Application",
                desc: "Provide your business details and required documents to begin the factoring process.",
              },
              {
                step: "2",
                title: "Verification",
                desc: "Your company details and documents are reviewed and verified for approval.",
              },
              {
                step: "3",
                title: "Approval",
                desc: "Once approved, you are ready to start factoring your invoices.",
              },
              {
                step: "4",
                title: "Get Paid Faster",
                desc: "Receive quick payments on your loads and improve your cash flow.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group relative flex items-start gap-5 bg-white border border-[#D4A017]/10 rounded-[28px] p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >

                {/* Glow */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#2E6B3D]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Number */}
                <div className="relative w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] text-white flex items-center justify-center font-bold text-lg shadow-xl group-hover:rotate-6 transition duration-500">

                  {item.step}

                </div>

                {/* Content */}
                <div className="relative">

                  <h3 className="font-bold text-xl text-[#0F3D2E]">
                    {item.title}
                  </h3>

                  <p className="text-[#6d7a72] text-sm mt-3 leading-7">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* RIGHT - BENEFITS PANEL */}
          <div className="space-y-8">

            {/* Highlight Box */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] text-white p-10 rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

              <div className="relative">

                <span className="inline-block bg-[#D4A017] text-[#0F3D2E] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg mb-5">
                  Fast Payments
                </span>

                <h3 className="text-3xl font-bold leading-tight">
                  Why Choose Factoring?
                </h3>

                <p className="text-[#d7e3dc] mt-6 leading-8">
                  Factoring helps carriers maintain steady cash flow without
                  waiting weeks for payments. It’s one of the fastest ways
                  to scale trucking operations efficiently.
                </p>

              </div>

            </div>

            {/* Benefits List */}
            <div className="bg-white p-8 rounded-[32px] border border-[#D4A017]/10 shadow-lg space-y-6 relative overflow-hidden">

              {/* Glow */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

              {[
                {
                  icon: <CheckCircle />,
                  text: "Get paid within 24 hours instead of waiting weeks",
                },
                {
                  icon: <Truck />,
                  text: "Keep your trucks moving without cash flow delays",
                },
                {
                  icon: <FileText />,
                  text: "Simple documentation and easy onboarding process",
                },
                {
                  icon: <CheckCircle />,
                  text: "Quick, hassle-free setup with minimal paperwork",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="relative flex items-start gap-4"
                >

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A017] to-[#b98708] flex items-center justify-center text-white shadow-md shrink-0">
                    {item.icon}
                  </div>

                  <p className="text-[#5d6d63] text-sm leading-7">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 text-center">

          <button
            onClick={() => setOpenAgreement(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] hover:scale-[1.02] text-white px-9 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_12px_30px_rgba(46,107,61,0.25)]"
          >
            Apply For Factoring Registration
          </button>

        </div>

      </div>

    </section>
  );
}