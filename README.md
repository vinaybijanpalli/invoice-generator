# Invoice Generator - React App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

Added redux to store the created invoices, display a list of these invoices, and provided options to view, edit, clone and delete them.

### Live Demo

https://invoice-generator-three.vercel.app/

### Screenshots

<img src="https://i.imgur.com/exbfHfP.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/MNEhMSZ.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/6sHgJsu.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/1vtgKkV.png" style="max-width: 100px; width: 100%; height: auto;">

### Installation

```
git clone https://github.com/johnuberbacher/invoice-generator

npm install

npm start / npm run build
```

### To-Do
- [x] Integrate Redux

- [x] Display Invoices List

- [x] Calculate Tax and Discounts

- [x] Store invoices in Redux


### Meta

Forked from John Uberbacher – [johnuberbacher.com](https://johnuberbacher.com)
