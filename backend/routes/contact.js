const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail Template
    const mailOptions = {
      from: `"${name}" <${email}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Contact Form Message From ${name}`,

      html: `
    <div style="font-family: Arial, sans-serif; padding:20px;">
      
      <h2 style="color:#0B7BEA;">
        New Contact Form Submission
      </h2>

      <table style="width:100%; border-collapse: collapse;">

        <tr>
          <td style="padding:10px; font-weight:bold;">Name:</td>
          <td style="padding:10px;">${name}</td>
        </tr>

        <tr>
          <td style="padding:10px; font-weight:bold;">Email:</td>
          <td style="padding:10px;">${email}</td>
        </tr>

        <tr>
          <td style="padding:10px; font-weight:bold;">Phone:</td>
          <td style="padding:10px;">${phone}</td>
        </tr>

      </table>

      <div style="
        margin-top:20px;
        padding:20px;
        background:#f3f4f6;
        border-radius:10px;
      ">
        <h3>Message</h3>

        <p style="line-height:1.8;">
          ${message}
        </p>
      </div>

    </div>
  `,
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

module.exports = router;
