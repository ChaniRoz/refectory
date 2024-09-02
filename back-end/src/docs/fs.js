const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(userName, date, diners, type, design) {
    const doc = new PDFDocument();
    const outputPath = `PDF/${userName}_${date}_output.pdf`; // Output file based on user name and date

    doc.pipe(fs.createWriteStream(outputPath));
    
    doc.fontSize(20);
    doc.text(`Dear ${userName},\n\n`);
    doc.text(`This is to confirm your reservation for ${diners} diners on ${date}.\n`);
    doc.text(`Type: ${type}\n`);
    doc.text(`Design: ${design}\n\n`);
    doc.text('Thank you for choosing our service.');

    doc.end();

    console.log(`PDF generated and saved as: ${outputPath}`);

    return outputPath;
}

module.exports = generatePDF;
