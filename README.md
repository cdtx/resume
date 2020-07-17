Project for creating and hosting my resume as a webpage using Twitter Bootstrap framework

Reduce PDF size after print : 
ghostscript -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress  -sOutputFile=output.pdf input.pdf
Quality level settings are "/screen," the lowest resolution and lowest file size, but fine for viewing on a screen; "/ebook," a mid-point in resolution and file size; "/printer" and "/prepress," high-quality settings used for printing PDFs.


# Dependencies
| link | Use |
| ----- | ----- |
| https://github.com/Natshah/bootstrap-print | Allows col-p-xx for printing format |
| https://larsjung.de/jquery-qrcode/ | QRCode generator |

