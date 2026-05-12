import { useState } from "react";

export default function DispatchStep({
  selectedDispatch,
  setSelectedDispatch,
}) {

  const [error, setError] = useState("");

  const dispatchCompanies = [
    "3D Dispatch",
    "GO Lane Dispatch",
    "Logity Dispatch",
    "AFT Dispatch",
    "Solace Dispatch",
  ];

  return (
    <div className="mt-8">

      {/* Badge */}
      <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-5">
        Agreement Process
      </span>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3D2E] mb-4 leading-tight">
        Step 1: Dispatch Company
      </h2>

      {/* Description */}
      <p className="text-[#5d6d63] text-sm sm:text-base mb-8 leading-8 max-w-2xl">
        Select your preferred dispatch company from the list below
        to continue your trucking agreement setup process.
      </p>

      {/* Selection Card */}
      <div className="relative bg-white border border-[#D4A017]/10 rounded-[28px] p-6 shadow-lg overflow-hidden">

        {/* Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

        {/* Label */}
        <label className="relative block text-sm sm:text-base font-semibold text-[#0F3D2E] mb-3">
          Dispatch Company Name *
        </label>

        {/* Select */}
        <div className="relative">

          <select
            value={selectedDispatch}
            onChange={(e) => {
              setSelectedDispatch(e.target.value);
              setError("");
            }}
            className={`
              relative w-full rounded-2xl px-5 py-4 text-sm sm:text-base
              bg-[#fafbf9] outline-none transition-all duration-300
              appearance-none cursor-pointer
              shadow-sm

              ${
                error
                  ? "border border-red-400 focus:ring-2 focus:ring-red-300"
                  : `
                    border border-[#dce5df]
                    hover:border-[#2E6B3D]
                    focus:border-[#2E6B3D]
                    focus:ring-4 focus:ring-[#2E6B3D]/10
                  `
              }
            `}
          >

            <option value="">
              Select Dispatch Company
            </option>

            {dispatchCompanies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}

          </select>

          {/* Custom Arrow */}
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#2E6B3D]">
            ▼
          </div>

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-3">
            {error}
          </p>
        )}

      </div>

    </div>
  );
}