import {
  CheckCircle2,
  Sparkles,
  MailCheck,
} from "lucide-react";

export default function AgreementSuccessStep({ setStep, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#0F3D2E]/50 backdrop-blur-sm px-4 py-4 overflow-y-auto">

      <div className="relative w-full max-w-xl bg-gradient-to-br from-[#F8F5EE] to-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden max-h-[90vh] overflow-y-auto border border-[#D4A017]/10">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#D4A017]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E6B3D] to-[#D4A017]"></div>

        <div className="relative px-6 sm:px-8 py-10 text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-6">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-[#2E6B3D] blur-3xl opacity-25 rounded-full animate-pulse"></div>

              {/* Main Circle */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center shadow-[0_15px_40px_rgba(46,107,61,0.35)]">

                <CheckCircle2
                  size={46}
                  className="text-white"
                />

              </div>

              {/* Sparkle */}
              <div className="absolute -top-1 -right-1 bg-[#FFF5D6] rounded-full p-2 shadow-md">

                <Sparkles
                  size={14}
                  className="text-[#D4A017]"
                />

              </div>

            </div>

          </div>

          {/* Badge */}
          <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-6">
            Agreement Completed
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F3D2E] mb-4">
            Agreement Submitted
          </h1>

          {/* Description */}
          <p className="text-[#5d6d63] leading-8 text-sm sm:text-base max-w-md mx-auto">
            Your trucking agreement has been submitted successfully.
            The agreement PDF has been sent to your email address.
          </p>

          {/* Email Card */}
          <div className="mt-8 bg-white border border-[#D4A017]/10 rounded-[28px] p-5 flex items-start gap-4 text-left shadow-lg relative overflow-hidden">

            {/* Glow */}
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#2E6B3D]/10 rounded-full blur-2xl"></div>

            {/* Icon */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2E6B3D] to-[#0F3D2E] flex items-center justify-center shadow-lg shrink-0">

              <MailCheck
                size={26}
                className="text-white"
              />

            </div>

            {/* Content */}
            <div className="relative">

              <h3 className="font-bold text-[#0F3D2E] mb-2 text-lg">
                Check Your Email
              </h3>

              <p className="text-sm text-[#5d6d63] leading-7">
                Please check your inbox or spam folder
                to view your agreement PDF.
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            {/* New Agreement */}
            <button
              onClick={() => setStep(1)}
              className="w-full sm:w-1/2 bg-[#EEF3E8] hover:bg-[#e3ecdc] text-[#0F3D2E] text-sm font-semibold py-4 rounded-2xl transition-all duration-300 border border-[#D4A017]/10"
            >
              New Agreement
            </button>

            {/* Done */}
            <button
              onClick={onClose}
              className="w-full sm:w-1/2 bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] hover:scale-[1.02] text-white text-sm font-semibold py-4 rounded-2xl shadow-xl transition-all duration-300"
            >
              Done
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}