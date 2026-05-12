import DispatchStep from "./DispatchStep";
import { Building2, Globe, Mail, Truck } from "lucide-react";

const today = new Date().toLocaleDateString("en-CA");

export default function TruckingAgreement({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const handleDispatchChange = (value) => {
    setAgreementData({
      ...agreementData,
      selectedDispatch: value,
      agreementDate: today,
    });
  };

  return (
    <div className="flex items-center justify-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

        <div className="max-h-[88vh] overflow-y-auto">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#2E6B3D] to-[#2E6B3D] px-6 sm:px-10 py-8 text-white relative">

            <button
              onClick={() => setStep(1)}
              className="absolute left-6 top-6 flex items-center gap-2 text-white/90 hover:text-white transition text-sm sm:text-base font-medium"
            >
              ← Back
            </button>

            <div className=" flex items-center gap-3 justify-center mb-3">
              <div className="bg-white/10 p-3 rounded-xl">
                <Truck size={28} />
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center">
                Trucking Agreement
              </h1>
            </div>

            <p className="text-center text-white/80 text-sm sm:text-base">
              Dedicated Lanes, Dispatch, Trailer Rental & Setup Services
            </p>

            <div className="mt-6">
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-[25%] h-full bg-emerald-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 py-8">

            {/* Intro */}
            <div className="mb-8">
              <p className="text-gray-600 text-sm sm:text-base leading-7">
                This agreement is made and entered into on{" "}
                <span className="font-semibold text-[#02053D]">
                  {today}
                </span>{" "}
                between the client and the logistics company.
              </p>
            </div>

            {/* Company Card */}
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#02053D] text-white p-3 rounded-xl">
                  <Building2 size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#02053D]">
                    PRAIRIE LINES TRANSPORTATION INC
                  </h3>

                  <p className="text-sm text-gray-500">
                    Official Logistics Provider
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-600">
                <div className="flex items-start gap-3">
                  <Building2 size={18} className="mt-1 text-[#02053D]" />
                  <span>54 1/2 street south fargo, ND  58103</span>
                </div>

                <div className="flex items-start gap-3">
                  <Globe size={18} className="mt-1 text-[#02053D]" />
                  <span className="text-blue-600">
                    www.prairielinestransportation.com
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-[#02053D]" />
                  <span>info@prairielinestransportation.com</span>
                </div>
              </div>
            </div>

            {/* Dispatch */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <DispatchStep
                selectedDispatch={agreementData.selectedDispatch}
                setSelectedDispatch={handleDispatchChange}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={() => setStep(1)}
                className="w-full sm:w-1/2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-2xl transition"
              >
                ← Previous
              </button>

              <button
                onClick={() => setStep(3)}
                className="w-full sm:w-1/2 bg-[#023d0f] hover:bg-[#0a7a62] text-white font-semibold py-3 rounded-2xl shadow-lg transition"
              >
                Next →
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}