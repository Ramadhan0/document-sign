import fs from 'fs';
import {degrees, PDFDocument, rgb, StandardFonts} from 'pdf-lib'
import path from 'path';


const editDocument = async () => {

  const filePath = path.join(__dirname, '../../dummy.pdf')

  // Load the existing PDF file
  const existingPdfBytes = fs.readFileSync(filePath)
  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  // Embed the Helvetica font
const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

// Get the first page of the document
const pages = pdfDoc.getPages()
const firstPage = pages[0]

// Get the width and height of the first page
const { width, height } = firstPage.getSize()

// Draw a string of text diagonally across the first page
firstPage.drawText('This text was added with JavaScript!', {
  x: 5,
  y: height / 2 + 300,
  size: 50,
  font: helveticaFont,
  color: rgb(0.95, 0.1, 0.1),
})

  // Serialize the modified PDF
  const modifiedPdfBytes = await pdfDoc.save();

  // Save the modified PDF to a new file
  fs.writeFileSync('modified.pdf', modifiedPdfBytes);
};

export default editDocument
