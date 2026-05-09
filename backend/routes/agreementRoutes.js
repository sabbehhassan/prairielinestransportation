const express = require("express");
const router = express.Router();

const generateAgreementPDF = require("../pdf/generateAgreementPDF");
const sendAgreementEmail = require("../email/sendAgreementEmail");

router.post("/submit-agreement", async (req, res) => {
  try {
    const body = req.body;

    const formData = {
      // Step 1
      agreementType: body.agreementType,

      // Step 2
      selectedDispatch: body.selectedDispatch,
      agreementDate: body.agreementDate,

      // Step 3
      carrierName: body.carrierName,
      companyName: body.companyName,
      mcDot: body.mcDot,
      phone: body.phone,
      carrierType: body.carrierType,
      selectedServices: body.selectedServices || [],
      paymentTermsMethod: body.paymentTermsMethod,

      // Step 4 / Payment
      paymentMethod: body.paymentMethod,
      bankName: body.bankName,
      accountNumber: body.accountNumber,
      routingNumber: body.routingNumber,
      driverName: body.driverName,
      driverPhone: body.driverPhone,
      licenseNumber: body.licenseNumber,

      // Step 5
      email: body.email,
      signature: body.signature,
      printName: body.printName,

      // Date fallback
      date: body.date,
    };

    console.log("FINAL ROUTE DATA:", formData);

    const pdfPath = await generateAgreementPDF(formData);

    await sendAgreementEmail(
      formData.email,
      pdfPath,
      formData
    );

    res.status(200).json({
      success: true,
      message: "Agreement submitted successfully",
      pdfPath,
    });
  } catch (error) {
    console.error("Agreement Route Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message, // Add this line
      stack: error.stack,   // And this line (optional, for debugging)
    });
  }
});

module.exports = router;