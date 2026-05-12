import { useState } from "react";

export default function FinalSubmissionStep({
  setStep,
  agreementData,
  setAgreementData,
}) {

  const today = new Date().toISOString().split("T")[0];

  const [, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!agreementData.signature?.trim()) {
      newErrors.signature = "Signature is required";
    }

    if (!agreementData.printName?.trim()) {
      newErrors.printName = "Print Name is required";
    }

    if (!agreementData.email?.trim()) {
      newErrors.email = "Email is required";
    }

    if (!agreementData.paymentMethod) {
      newErrors.paymentMethod = "Select payment method";
    }

    if (!agreementData.bankName?.trim()) {
      newErrors.bankName = "Bank Name required";
    }

    if (!agreementData.accountNumber?.trim()) {
      newErrors.accountNumber = "Account Number required";
    }

    if (!agreementData.routingNumber?.trim()) {
      newErrors.routingNumber = "Routing Number required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {

    if (!validateForm()) return;

    setIsLoading(true);

    const finalData = {
      ...agreementData,
      date: today,
    };

    console.log(finalData);

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/submit-agreement`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        },
      );

      const data = await response.json();

      if (data.success) {
        setStep(6);
      }

    } catch (error) {
      console.error(error);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-4 bg-gradient-to-br from-[#F8F5EE] to-[#EEF3E8]">

      <div className="relative w-full max-w-5xl bg-white rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden border border-[#D4A017]/10">

        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2E6B3D]/10 rounded-full blur-3xl"></div>

        {/* Accent Line */}
        <div className="h-1.5 bg-gradient-to-r from-[#2E6B3D] via-[#D4A017] to-[#2E6B3D]"></div>

        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">

          {/* Back Button */}
          <button
            onClick={() => setStep(4)}
            className="text-[#2E6B3D] text-sm font-semibold mb-8 hover:text-[#D4A017] transition duration-300"
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-center mb-10">

            <span className="inline-block bg-[#2E6B3D]/10 text-[#2E6B3D] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#2E6B3D]/10 mb-5">
              Final Agreement
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F3D2E] uppercase leading-tight">
              Trucking Service Agreement
            </h1>

            <p className="text-[#6d7a72] mt-4 text-base">
              Final Agreement Submission
            </p>

          </div>

          {/* Progress */}
          <div className="w-full h-3 bg-[#e6ece7] rounded-full mb-12 overflow-hidden">

            <div className="w-full h-full bg-gradient-to-r from-[#2E6B3D] to-[#D4A017] rounded-full"></div>

          </div>

          {/* Step Title */}
          <h2 className="text-3xl font-bold text-[#0F3D2E] mb-8">
            Step 4: Final Submission
          </h2>

          {/* Terms Box */}
          <div className="bg-[#EEF3E8] border border-[#D4A017]/10 rounded-[28px] p-6 mb-10">

            <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
              Terms
            </h2>

            <p className="text-[#5d6d63] leading-8">
              The term of this Agreement shall be <strong>180 days</strong>,
              commencing on the date listed above. If not cancelled,
              it will automatically renew.
            </p>

          </div>

          {/* Form */}
          <div className="space-y-6">

            {/* Signature */}
            <div>
              <label className="block mb-3 font-semibold text-[#0F3D2E]">
                Signature
              </label>

              <input
                type="text"
                placeholder="Signature"
                value={agreementData.signature || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    signature: e.target.value,
                  })
                }
                className="w-full border border-[#dce5df] rounded-2xl px-5 py-4 bg-[#fafbf9] focus:border-[#2E6B3D] focus:ring-4 focus:ring-[#2E6B3D]/10 outline-none transition duration-300"
              />
            </div>

            {/* Print Name */}
            <div>
              <label className="block mb-3 font-semibold text-[#0F3D2E]">
                Print Name
              </label>

              <input
                type="text"
                placeholder="Print Name"
                value={agreementData.printName || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    printName: e.target.value,
                  })
                }
                className="w-full border border-[#dce5df] rounded-2xl px-5 py-4 bg-[#fafbf9] focus:border-[#2E6B3D] focus:ring-4 focus:ring-[#2E6B3D]/10 outline-none transition duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-3 font-semibold text-[#0F3D2E]">
                Email
              </label>

              <input
                type="email"
                placeholder="Email"
                value={agreementData.email || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    email: e.target.value,
                  })
                }
                className="w-full border border-[#dce5df] rounded-2xl px-5 py-4 bg-[#fafbf9] focus:border-[#2E6B3D] focus:ring-4 focus:ring-[#2E6B3D]/10 outline-none transition duration-300"
              />
            </div>

            {/* Payment Method */}
            <div>

              <label className="block mb-4 font-semibold text-[#0F3D2E]">
                Payment Method
              </label>

              <div className="space-y-4">

                {[
                  "Factoring",
                  "ACH Direct Deposit Method",
                  "Cash On Delivery",
                  "2% for Quick Pay (Same Day)",
                  "No Fees for 24 Hours Deposit",
                ].map((method) => (

                  <label
                    key={method}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300
                      ${
                        agreementData.paymentMethod === method
                          ? "border-[#2E6B3D] bg-[#EEF3E8]"
                          : "border-[#dce5df] hover:border-[#2E6B3D]/40"
                      }
                    `}
                  >

                    <input
                      type="radio"
                      checked={agreementData.paymentMethod === method}
                      onChange={() =>
                        setAgreementData({
                          ...agreementData,
                          paymentMethod: method,
                        })
                      }
                      className="accent-[#2E6B3D] w-5 h-5"
                    />

                    <span className="text-[#0F3D2E] font-medium">
                      {method}
                    </span>

                  </label>
                ))}

              </div>

            </div>

            {/* Bank Info */}
            {[
              {
                label: "Bank Name",
                key: "bankName",
                placeholder: "Bank Name",
              },
              {
                label: "Account Number",
                key: "accountNumber",
                placeholder: "Account Number",
              },
              {
                label: "Routing Number",
                key: "routingNumber",
                placeholder: "Routing Number",
              },
            ].map((field) => (
              <div key={field.key}>

                <label className="block mb-3 font-semibold text-[#0F3D2E]">
                  {field.label}
                </label>

                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={agreementData[field.key] || ""}
                  onChange={(e) =>
                    setAgreementData({
                      ...agreementData,
                      [field.key]: e.target.value,
                    })
                  }
                  className="w-full border border-[#dce5df] rounded-2xl px-5 py-4 bg-[#fafbf9] focus:border-[#2E6B3D] focus:ring-4 focus:ring-[#2E6B3D]/10 outline-none transition duration-300"
                />

              </div>
            ))}

          </div>

          {/* TERMS */}
          <div className="mt-14 space-y-8 text-[#5d6d63] leading-8">

            <div className="bg-white border border-[#D4A017]/10 rounded-[28px] p-6 shadow-md">

              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Broker Obligations
              </h2>

              <p>
                Broker shall pay CARRIER for services rendered in accordance
                with agreed rates in Load Confirmations.
              </p>

            </div>

            {/* Slot Fee */}
            {agreementData.carrierType !== "old" && (
              <div className="bg-[#FFF8E6] border border-[#D4A017]/20 rounded-[28px] p-6">

                <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                  Slot Fee (Refundable)
                </h2>

                <p>
                  Carrier shall pay a refundable security deposit of $485
                  via instant payment.
                </p>

              </div>
            )}

            {/* Carrier Obligations */}
            <div className="bg-white border border-[#D4A017]/10 rounded-[28px] p-6 shadow-md">

              <h2 className="text-2xl font-bold text-[#0F3D2E] mb-4">
                Carrier Obligations
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Carrier must check-in on time at shipper/receiver</li>
                <li>Submit documents within 24 hours</li>
                <li>Notify broker after 60 minutes delay</li>
                <li>Provide signed BOL and Rate confirmation</li>
              </ul>

            </div>

          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">

            {/* Previous */}
            <button
              onClick={() => setStep(4)}
              className="w-full sm:w-1/2 bg-[#EEF3E8] hover:bg-[#e3ecdc] text-[#0F3D2E] font-semibold py-4 rounded-2xl transition duration-300 border border-[#D4A017]/10"
            >
              ← Previous
            </button>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`
                w-full sm:w-1/2 py-4 rounded-2xl font-semibold
                flex items-center justify-center gap-3
                transition-all duration-300 shadow-xl

                ${
                  isLoading
                    ? "bg-[#7ea789] cursor-not-allowed text-white"
                    : "bg-gradient-to-r from-[#2E6B3D] to-[#0F3D2E] hover:scale-[1.02] text-white"
                }
              `}
            >

              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                "Submit Agreement"
              )}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}