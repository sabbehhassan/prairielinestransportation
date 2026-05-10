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
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden">
        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">
          <button
            onClick={() => setStep(4)}
            className="text-blue-600 text-sm font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 mt-2">Final Agreement Submission</p>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mb-10">
            <div className="w-full h-full bg-emerald-500 rounded-full"></div>
          </div>

          <h2 className="text-2xl font-bold text-[#02053D] mb-8">
            Step 4: Final Submission
          </h2>
          <h2 className="text-2xl font-bold text-[#02053D]">Terms</h2>

          <p>
            The term of this Agreement shall be <strong>180 days</strong>,
            commencing on the date listed above. If not cancelled, it will
            automatically renew.
          </p>
          <br />

          <div className="space-y-5">
            {/* Signature */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
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
                className="w-full border rounded-xl px-5 py-4"
              />
            </div>

            {/* Print Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
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
                className="w-full border rounded-xl px-5 py-4"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
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
                className="w-full border rounded-xl px-5 py-4"
              />
            </div>

            {/* Payment */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Payment Method
              </label>

              <div className="space-y-3">
                {[
                  "Factoring",
                  "ACH Direct Deposit Method",
                  "Cash On Delivery",
                  "2% for Quick Pay (Same Day)",
                  "No Fees for 24 Hours Deposit",
                ].map((method) => (
                  <label key={method} className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={agreementData.paymentMethod === method}
                      onChange={() =>
                        setAgreementData({
                          ...agreementData,
                          paymentMethod: method,
                        })
                      }
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bank */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Bank Name
              </label>
              <input
                type="text"
                placeholder="Bank Name"
                value={agreementData.bankName || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    bankName: e.target.value,
                  })
                }
                className="w-full border rounded-xl px-5 py-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                placeholder="Account Number"
                value={agreementData.accountNumber || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    accountNumber: e.target.value,
                  })
                }
                className="w-full border rounded-xl px-5 py-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Routing Number
              </label>
              <input
                type="text"
                placeholder="Routing Number"
                value={agreementData.routingNumber || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    routingNumber: e.target.value,
                  })
                }
                className="w-full border rounded-xl px-5 py-4"
              />
            </div>
          </div>
          {/* ================= TERMS & POLICY ================= */}

          <div className="mt-12 space-y-6 text-gray-700 leading-8">
            <h2 className="text-2xl font-bold text-[#02053D]">
              Broker Obligations
            </h2>

            <p>
              Broker shall pay CARRIER for services rendered in accordance with
              agreed rates in Load Confirmations. Carrier must submit proof of
              delivery with invoices. Broker is responsible only for arranging
              transportation and not physically transporting freight.
            </p>


            {/* Show Slot Fee only for new carriers */}
            {agreementData.carrierType !== "old" && (
              <>
                <h2 className="text-2xl font-bold text-[#02053D]">
                  Slot Fee (Refundable)
                </h2>
                <p>
                  Carrier shall pay a refundable security deposit of $485 via
                  instant payment. This fee will be refunded after the first
                  completed delivery.
                </p>
              </>
            )}

            <h2 className="text-2xl font-bold text-[#02053D]">
              Carrier Obligations
            </h2>

            <ul className="list-disc pl-6">
              <li>Carrier must check-in on time at shipper/receiver</li>
              <li>Submit documents within 24 hours</li>
              <li>Notify broker after 60 minutes delay</li>
              <li>Provide signed BOL and Rate confirmation after contract setup completed</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={() => setStep(4)}
              className="w-full sm:w-1/2 bg-gray-200 py-4 rounded-2xl"
            >
              ← Previous
            </button>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full sm:w-1/2 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                isLoading
                  ? "bg-emerald-400 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
              }`}
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
