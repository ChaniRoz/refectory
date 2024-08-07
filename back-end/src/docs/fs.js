const PDFDocument = require('pdfkit');

const fs = require('fs');


// Create a new PDF document

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));


// Add content to the PDF document

doc.fontSize(20);

doc.text('Hello, World! This is a PDF created using pdfkit.');


// Finalize the PDF document

doc.end();