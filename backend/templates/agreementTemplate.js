module.exports = function agreementTemplate(formData) {
  const agreementDate =
    formData.agreementDate ||
    formData.date ||
    new Date().toLocaleDateString("en-CA");

  const carrierType = String(formData.carrierType || "").toLowerCase();

  const carrierTypeLabel =
    carrierType === "new"
      ? "New Carrier"
      : carrierType === "old"
        ? "Old Carrier"
        : "N/A";

  const formattedServices = (formData.selectedServices || []).map((service) => {
    if (carrierType === "old") {
      return service.split(" - $")[0];
    }
    return service;
  });

  return `
  <html>
  <head>
    <style>

      body {
        font-family: Georgia, serif;
        margin: 0;
        padding: 0;
        font-size: 14px;
        line-height: 1.9;
        color: #2c2c2c;
        background: #f4f7fb;
        position: relative;
      }

      /* WATERMARK */
      body::before {
        content: "";
        position: fixed;
        top: 30%;
        left: 20%;
        width: 500px;
        height: 500px;
        background: url("https://loblawtransportus.vercel.app//logo.png") no-repeat center;
        background-size: contain;
        opacity: 0.03;
        z-index: -1;
      }

      /* PAGE CONTAINER */
      .page {
        padding: 40px;
      }

      /* HERO HEADER */
      .header {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: white;
        padding: 30px;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
        .header-email {
  margin-top: 12px;
  font-size: 13px;
  opacity: 0.95;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.logo-section {
  text-align: center;
}

.company-address {
  margin-top: 10px;
  font-size: 11px;
  max-width: 220px;
  line-height: 1.5;
  font-weight: 500;
}

      .title {
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .logo {
        width: 110px;
      }

      /* GRID LAYOUT */
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      /* CARD STYLE */
      .card {
        background: #ffffff;
        border-radius: 12px;
        padding: 18px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.06);
        border-top: 4px solid #2563eb;
      }
        .info-box {
  background: #f3f7ff;
  border-left: 4px solid #2563eb;
  padding: 12px 14px;
  margin-bottom: 12px;
  border-radius: 10px;
}

.info-label {
  display: block;
  font-size: 12px;
  color: #1e3a8a;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}

.info-value {
  display: block;
  font-size: 15px;
  color: #111827;
  font-weight: bold;
}

      /* FULL WIDTH */
      .full {
        grid-column: span 2;
      }

      /* SECTION TITLE */
      .section-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #1e3a8a;
        text-transform: uppercase;
      }

      table {
        width: 100%;
      }

      td {
        padding: 6px 0;
      }

      .label {
        font-weight: bold;
        color: #111;
        width: 40%;
      }

      ul {
        padding-left: 18px;
      }

      .highlight {
        font-weight: bold;
        color: #000;
      }

      /* SIGNATURE */
      .signature-box {
        margin-top: 30px;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #ddd;
      }

      .signature-header {
        background: #1e3a8a;
        color: white;
        padding: 10px;
        text-align: center;
        font-weight: bold;
      }

      .signature-body {
        display: flex;
      }

      .signature-col {
        flex: 1;
        padding: 15px;
        border-right: 1px solid #ddd;
      }

      .signature-col:last-child {
        border-right: none;
      }

      /* PAGE BREAK */
      .page-break {
        page-break-before: always;
      }

      /* CERTIFICATE */
      .certificate {
        text-align: center;
        padding: 40px;
      }

      .certificate img {
        width: 100%;
        max-width: 750px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

    </style>
  </head>

  <body>

  <div class="header">
  
  <div>
    <div class="title">BROKER / CARRIER AGREEMENT</div>

    <div class="header-email">
      info@loblawtransportusinc.com
    </div>
  </div>

  <div class="logo-section">
    <img src="https://loblawtransportus.vercel.app//logo.png" class="logo"/>

    <div class="company-address">
      320 N MERIDIAN ST. 3RD FLOOR SUITE INDIANAPOLIS, IN 46204
    </div>
  </div>

</div>

  <div class="page">

    <div class="grid">

      <!-- BROKER -->
<div class="card">
  <div class="section-title">Broker Information</div>

  <div class="info-box">
    <span class="info-label">Company</span>
    <span class="info-value">LOBLAW TRANSPORT US INC</span>
  </div>

  <div class="info-box">
    <span class="info-label">MC</span>
    <span class="info-value">MC-1710508</span>
  </div>

  <div class="info-box">
    <span class="info-label">USDOT</span>
    <span class="info-value">4368282</span>
  </div>

  <div class="info-box">
    <span class="info-label">Email</span>
    <span class="info-value">info@loblawtransportusinc.com</span>
  </div>
</div>

      <!-- CARRIER -->
      <div class="card">
        <div class="section-title">Carrier Information</div>
        <table>
          <tr><td class="label">Name</td><td>${formData.carrierName}</td></tr>
          <tr><td class="label">Company</td><td>${formData.companyName}</td></tr>
          <tr><td class="label">MC/DOT</td><td>${formData.mcDot}</td></tr>
          <tr><td class="label">Phone</td><td>${formData.phone}</td></tr>
          <tr><td class="label">Driver</td><td>${formData.driverName}</td></tr>
          <tr><td class="label">Driver Phone</td><td>${formData.driverPhone}</td></tr>
          <tr><td class="label">License</td><td>${formData.licenseNumber}</td></tr>
          <tr><td class="label">Type</td><td>${carrierTypeLabel}</td></tr>
          <tr><td class="label">Date</td><td>${agreementDate}</td></tr>
        </table>
      </div>

      <!-- SERVICES -->
      <div class="card full">
        <div class="section-title">Selected Services</div>
        <ul>
          ${formattedServices.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>

      <!-- PAYMENT -->
      <div class="card">
        <div class="section-title">Payment Terms</div>
        <p><b>Selected Option:</b> ${formData.paymentTermsMethod || "N/A"}</p>
      </div>

      <!-- CLIENT -->
      <div class="card">
        <div class="section-title">Client Responsibilities</div>
        <ul>
          <li>Provide accurate information</li>
          <li>Maintain insurance & authority</li>
          <li>Professional communication</li>
          <li>No fraud or chargebacks</li>
        </ul>
      </div>

      <!-- LIABILITY -->
      <div class="card full">
        <div class="section-title">Limitation of Liability</div>
        <p>The company is not liable for delays or market changes.</p>
      </div>

      <!-- PAYMENT INFO -->
      <div class="card full">
        <div class="section-title">Payment Information</div>
        <table>
          <tr><td class="label">Method</td><td>${formData.paymentMethod}</td></tr>
          <tr><td class="label">Bank</td><td>${formData.bankName}</td></tr>
          <tr><td class="label">Account</td><td>${formData.accountNumber}</td></tr>
          <tr><td class="label">Routing</td><td>${formData.routingNumber}</td></tr>
        </table>
      </div>

      <!-- TERMS -->
      <div class="card full">
        <div class="section-title">Terms</div>
        <p>
    The term of this Agreement shall be <b>180 days</b>, commencing on the date listed above. 
    If not cancelled by one of the Parties, the Agreement shall automatically renew itself 
    for consecutive one-year terms.
  </p>

  <p>
    The Agreement can be terminated at any time by either of the Parties with 
    <b>thirty (30) days' written or electronic notice</b> to the other party, 
    provided all balances are settled.
  </p>

  <p>
    This Agreement cannot, by law, exempt the 
    <span class="highlight">CARRIER / BROKER</span> from any regulatory sanctions 
    in the event that discrepancies are discovered during a physical examination 
    of cargo or the review of documents associated with the carrier's Customs transactions.
  </p>

  <p>
    Nothing in the Agreement relieves 
    <span class="highlight">CARRIER / BROKER</span> of any responsibilities with respect to 
    Canadian and United States law, including Customs Regulations.
  </p>
      </div>

      <!-- OBLIGATIONS -->
      <div class="card full">
        <div class="section-title">Broker Obligations</div>
        <p>
    <span class="highlight">BROKER</span> shall pay 
    <span class="highlight">CARRIER</span> for services rendered in an amount equal to the 
    rates and charges agreed to as set forth on any Load Confirmation(s) that is issued 
    and that supplements and amends this Agreement to the extent its terms conflict 
    with those in this Agreement.
  </p>

  <p>
    This Agreement or the Load Confirmation also governs all assessorial services 
    which may be required or performed. 
    <span class="highlight">CARRIER</span> shall not bill for any accessorial or other charge 
    not approved in this Agreement or in any Load Confirmation(s).
  </p>

  <p>
    Rates may be amended orally but must be confirmed in writing within 
    <b>five working days</b> of the modification in order to remain binding 
    between the PARTIES.
  </p>

  <p>
    As a condition precedent to payment, 
    <span class="highlight">CARRIER</span> must submit proof of delivery with its invoices, 
    and the invoices must reflect that CARRIER delivered the freight to its final destination.
  </p>

  <p>
    <b>a.</b> <span class="highlight">BROKER</span> agrees to arrange for the transportation 
    of a shipper's freight with <span class="highlight">CARRIER</span> pursuant to the terms 
    of this Agreement, and to comply with all federal, state, and local laws and regulations 
    about the brokerage services covered by this Agreement.
  </p>

  <p>
    The Parties agree that <span class="highlight">BROKER'S</span> responsibilities under this 
    Agreement are limited to arranging for the transportation of a shipper's freight with 
    <span class="highlight">CARRIER</span>, and not actually performing the transportation services, 
    possessing the freight, or controlling the means or methods of the transportation.
  </p>
      </div>

    </div>

    <!-- SIGNATURE -->
    <div class="signature-box">
      <div class="signature-header">Signatures</div>
      <div class="signature-body">
        <div class="signature-col">
          <b>BROKER</b><br/>
          LOBLAW TRANSPORT US INC
        </div>
        <div class="signature-col">
          <b>CARRIER</b><br/>
          ${formData.companyName}
        </div>
      </div>
    </div>

  </div>

  <!-- PAGE BREAK -->
  <div class="page-break"></div>

  <div class="certificate">
    <img src="https://loblawtransportus.vercel.app//certificate.png"/>
  </div>

  </body>
  </html>
  `;
};
