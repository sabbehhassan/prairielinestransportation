const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");
const agreementTemplate = require("../templates/agreementTemplate");

async function generateAgreementPDF(formData) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  const html = agreementTemplate(formData);
  await page.setContent(html, { waitUntil: "networkidle0" });

  // In serverless, write to /tmp
  const pdfDir = process.env.NODE_ENV === 'production'
    ? "/tmp"
    : path.join(__dirname, "../generated");

  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir);
  }

  const fileName = `Agreement_${Date.now()}.pdf`;
  const pdfPath = path.join(pdfDir, fileName);

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "20px",
      right: "20px",
      bottom: "20px",
      left: "20px",
    },
  });

  await browser.close();
  return pdfPath;
}

module.exports = generateAgreementPDF;