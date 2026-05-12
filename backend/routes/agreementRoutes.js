const nodemailer = require("nodemailer");

const sendAgreementEmail = async (
  userEmail,
  pdfPath,
  formData
) => {

  // =========================
  // HOSTINGER SMTP
  // =========================
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // =========================
  // PDF ATTACHMENT
  // =========================
  const attachments = [
    {
      filename: "agreement.pdf",
      path: pdfPath,
    },
  ];

  // =====================================================
  // STEP 1
  // SEND MAIL TO USER
  // =====================================================
  await transporter.sendMail({
    from: `"Prairie Lines Transportation" <${process.env.EMAIL_USER}>`,

    to: userEmail,

    subject: "Your Agreement PDF",

    html: `
      <div style="font-family: Arial, sans-serif; padding:20px;">

        <h2 style="color:#0B7BEA;">
          Agreement Submitted Successfully
        </h2>

        <p>
          Hello ${formData.printName || formData.carrierName},
        </p>

        <p>
          Thank you for submitting your agreement.
        </p>

        <p>
          Your agreement PDF is attached with this email.
        </p>

        <br />

        <p>
          Regards,<br/>
          Prairie Lines Transportation
        </p>

      </div>
    `,

    attachments,
  });

  console.log("USER EMAIL SENT");

  // =====================================================
  // STEP 2
  // SEND MAIL TO HOSTINGER MAILBOX
  // =====================================================
  await transporter.sendMail({
    from: `"Prairie Lines Website" <${process.env.EMAIL_USER}>`,

    to: process.env.EMAIL_USER,

    replyTo: userEmail,

    subject: `New Agreement Submitted - ${formData.companyName}`,

    html: `
      <div style="font-family: Arial, sans-serif; padding:20px;">

        <h2 style="color:#0B7BEA;">
          New Agreement Submitted
        </h2>

        <table style="width:100%; border-collapse: collapse;">

          <tr>
            <td style="padding:10px; font-weight:bold;">Carrier Name:</td>
            <td style="padding:10px;">${formData.carrierName}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:bold;">Company Name:</td>
            <td style="padding:10px;">${formData.companyName}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:bold;">Email:</td>
            <td style="padding:10px;">${formData.email}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:bold;">Phone:</td>
            <td style="padding:10px;">${formData.phone}</td>
          </tr>

          <tr>
            <td style="padding:10px; font-weight:bold;">MC/DOT:</td>
            <td style="padding:10px;">${formData.mcDot}</td>
          </tr>

        </table>

        <div style="
          margin-top:20px;
          padding:20px;
          background:#f3f4f6;
          border-radius:10px;
        ">
          <p>
            Agreement PDF attached below.
          </p>
        </div>

      </div>
    `,

    attachments,
  });

  console.log("HOSTINGER MAILBOX EMAIL SENT");
};

module.exports = sendAgreementEmail;