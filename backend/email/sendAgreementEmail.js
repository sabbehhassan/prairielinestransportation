// email/sendAgreementEmail.js

const nodemailer = require("nodemailer");

async function sendAgreementEmail(userEmail, pdfPath, formData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `PRAIRIE LINES TRANSPORTATION INC <${process.env.EMAIL_USER}>`,
    to: userEmail,
    cc: "gysin@prairielinestransportation.com",
    subject: "Your Carrier Agreement Has Been Submitted Successfully",

    html: `
    <div style="background:#f4f6fa;padding:40px 0;font-family:Arial,sans-serif;">
      <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 35px rgba(0,0,0,0.08);">

        <!-- Header -->
        <div style="background:#0b1f5f;padding:45px 30px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:30px;">
            PRAIRIE LINES TRANSPORTATION INC
          </h1>

          <p style="color:#dbe4ff;font-size:15px;margin-top:12px;">
            Your Carrier Agreement Has Been Confirmed
          </p>
        </div>

        <!-- Body -->
        <div style="padding:35px;">

          <p style="font-size:16px;color:#333;line-height:1.8;">
            Dear <strong>${formData.printName || "Carrier"}</strong>,
          </p>

          <p style="font-size:15px;color:#555;line-height:1.9;">
            Thank you for choosing <strong>PRAIRIE LINES TRANSPORTATION INC</strong>.
            Your agreement has been successfully received and is currently under review.
          </p>

          <!-- Reference Box -->
          <div style="background:#f2f7ff;border-radius:12px;padding:20px;margin:30px 0;">
            <p style="margin:0;font-size:15px;color:#333;">
              📄 <strong>Reference ID:</strong>
              PRAIRIE-${Date.now()}
            </p>

            <p style="margin-top:10px;font-size:15px;color:#333;">
              📅 <strong>Submitted:</strong>
              ${new Date().toLocaleString()}
            </p>
          </div>

          <!-- Summary -->
          <h2 style="font-size:24px;color:#0b1f5f;margin-bottom:20px;">
            Agreement Summary
          </h2>

          <table style="width:100%;border-collapse:collapse;margin-bottom:30px;">
            <tr>
              <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">
                Carrier Name
              </td>

              <td style="padding:12px;border-bottom:1px solid #eee;color:#555;">
                ${formData.carrierName || "N/A"}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">
                Company Name
              </td>

              <td style="padding:12px;border-bottom:1px solid #eee;color:#555;">
                ${formData.companyName || "N/A"}
              </td>
            </tr>

           <tr>
             <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">
               USDOT / MC
              </td>

                <td style="padding:12px;border-bottom:1px solid #eee;color:#555;">
                ${formData.mcDot || "N/A"}
                  </td>
               </tr>
               

            <tr>
              <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">
                Payment Method
              </td>

              <td style="padding:12px;border-bottom:1px solid #eee;color:#555;">
                ${formData.paymentMethod || "N/A"}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;">
                Signed By
              </td>

              <td style="padding:12px;border-bottom:1px solid #eee;color:#555;">
                ${formData.signature || "N/A"}
              </td>
            </tr>
          </table>

          <!-- Next Steps -->
          <div style="background:#eef6ff;border-radius:12px;padding:25px;margin-bottom:30px;">
            <h3 style="margin-top:0;color:#0b1f5f;">
              🚚 Next Steps
            </h3>

            <ol style="line-height:2;color:#555;padding-left:20px;">
              <li>Agreement verification started</li>
              <li>Dispatch onboarding review</li>
              <li>Carrier setup processing</li>
              <li>You will receive onboarding details shortly</li>
            </ol>
          </div>

          <!-- PDF Notice -->
          <div style="background:#f8fafc;border-left:4px solid #0b1f5f;padding:18px;border-radius:8px;margin-bottom:25px;">
            📎 <strong>Your signed agreement PDF is attached.</strong>
          </div>

          <p style="font-size:15px;color:#555;line-height:1.8;">
            If you have any questions, simply reply to this email.
          </p>

          <p style="font-size:15px;color:#555;margin-top:30px;">
            Best Regards,<br>
            <strong>PRAIRIE LINES TRANSPORTATION INC Team</strong>
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#f5f6fa;padding:25px;text-align:center;font-size:13px;color:#666;">
          PRAIRIE LINES TRANSPORTATION INC<br>
          54 1/2 street south fargo, ND  58103<br>
          info@prairielinestransportation.com<br>
          gysin@prairielinestransportation.com
        </div>

      </div>
    </div>
    `,

    attachments: [
      {
        filename: "Carrier-Agreement.pdf",
        path: pdfPath,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendAgreementEmail;
