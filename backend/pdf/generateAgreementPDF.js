const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const agreementTemplate = require("../templates/agreementTemplate");

async function generateAgreementPDF(formData) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  const html = agreementTemplate(formData);

  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  const pdfDir = path.join(__dirname, "../generated");

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