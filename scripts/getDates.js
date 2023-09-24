// Kathryn Lambert WDD 230

// add year to footer copyright
const today = new Date();
let year = today.getFullYear();
let yearElement = document.querySelector("#year");
yearElement.textContent = year.toString();

// add the date the document was last modified
let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
