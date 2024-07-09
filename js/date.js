/*
  * Author: Nathan Boisleux 2024 *
*/
//year for the footer
let year = new Date().getFullYear()
let copyright = document.createElement("h4")
let footer = document.querySelector("footer")

copyright.textContent = `\u00A9 ${year} BOISLEUX Nathan. All Rights Reserved.`
footer.appendChild(copyright)