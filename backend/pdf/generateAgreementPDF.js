const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const agreementTemplate = require("../templates/agreementTemplate");

async function generateAgreementPDF(formData) {

  let browser;

  try {

    // =========================================
    // LAUNCH BROWSER
    // =========================================
    browser = await puppeteer.launch({
      args: chromium.args,

      executablePath:
        await chromium.executablePath(),

      headless: chromium.headless,
    });

    // =========================================
    // CREATE PAGE
    // =========================================
    const page = await browser.newPage();

    // =========================================
    // GENERATE HTML
    // =========================================
    const html = agreementTemplate(formData);

    // =========================================
    // LOAD HTML
    // =========================================
    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    // =========================================
    // PDF DIRECTORY
    // =========================================
    const pdfDir =
      process.env.NODE_ENV === "production"
        ? "/tmp"
        : path.join(
            __dirname,
            "../generated"
          );

    // =========================================
    // CREATE DIRECTORY IF NOT EXISTS
    // =========================================
    if (!fs.existsSync(pdfDir)) {

      fs.mkdirSync(pdfDir, {
        recursive: true,
      });

    }

    // =========================================
    // PDF FILE PATH
    // =========================================
    const fileName = `Agreement_${Date.now()}.pdf`;

    const pdfPath = path.join(
      pdfDir,
      fileName
    );

    console.log(
      "GENERATING PDF =>",
      pdfPath
    );

    // =========================================
    // GENERATE PDF
    // =========================================
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

    // =========================================
    // WAIT TO ENSURE FILE IS WRITTEN
    // =========================================
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    // =========================================
    // VERIFY FILE EXISTS
    // =========================================
    if (!fs.existsSync(pdfPath)) {

      throw new Error(
        "PDF generation failed. File not found."
      );

    }

    console.log(
      "PDF GENERATED SUCCESSFULLY"
    );

    // =========================================
    // RETURN PDF PATH
    // =========================================
    return pdfPath;

  } catch (error) {

    console.error(
      "PDF GENERATION ERROR =>",
      error
    );

    throw error;

  } finally {

    // =========================================
    // CLOSE BROWSER
    // =========================================
    if (browser) {

      await browser.close();

      console.log(
        "BROWSER CLOSED"
      );

    }

  }

}

module.exports = generateAgreementPDF;