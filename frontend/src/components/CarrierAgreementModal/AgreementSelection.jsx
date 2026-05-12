import { X } from "lucide-react";

export default function AgreementSelection({
  setStep,
  onClose,
  agreementData,
  setAgreementData,
}) {

  const handleSelectAgreement = () => {
    setAgreementData({
      ...agreementData,
      agreementType: "Trucking Service Agreement",
    });

    setStep(2);
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 sm:px-6 md:px-8 min-h-[500px] bg-gradient-to-br from-[#F8F5EE] to-[#EEF3E8] rounded-[32px] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#D4A017]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white hover:bg-[#EEF3E8] border border-[#D4A017]/10 rounded-2xl p-2.5 shadow-md transition duration-300 hover:scale-105"
      >
        <X size={20} className="text-[#0F3D2E]" />
      </button>

      <div className="relative w-full max-w-2xl text-center">

        {/* Badge */}
        <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-6">
          Agreement Setup
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0F3D2E] mb-5 leading-tight">
          Select an Agreement
        </h2>

        {/* Subtitle */}
        <p className="text-[#5d6d63] text-sm sm:text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Please choose the type of agreement you want to proceed with.
        </p>

        {/* Agreement Card */}
        <div className="group relative bg-white rounded-[30px] border border-[#D4A017]/10 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">

          {/* Top Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E6B3D] to-[#D4A017]"></div>

          {/* Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2E6B3D]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <button
            onClick={handleSelectAgreement}
            className="relative w-full px-8 py-10 text-center transition duration-300"
          >

            {/* Icon */}
            <div className="w-[80px] h-[80px] mx-auto rounded-3xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center text-4xl shadow-xl group-hover:rotate-6 transition duration-500">
              🚚
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F3D2E] mt-6">
              Trucking Service Agreement
            </h3>

            {/* Description */}
            <p className="text-[#5d6d63] text-sm sm:text-base leading-7 mt-4 max-w-md mx-auto">
              Proceed with our professional trucking agreement setup
              for secure and reliable logistics partnerships.
            </p>

            {/* CTA */}
            <div className="mt-8 inline-flex items-center justify-center bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg group-hover:scale-105 transition duration-300">
              Continue Agreement
            </div>

          </button>

        </div>

      </div>

    </div>
  );
}