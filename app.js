/*
 * Author: Al Nahian (alnahian2003)
 * Author URI: https://alnahian2003.github.io
 * Project Name: Flagma
 * Project Type: Country Flags, Country Informations, API Integrations, Intermediate JavaScript Project etc.

 * Get In Touch:
 * https://alnahian2003.github.io
 * https://github.com/alnahian2003
 * https://facebook.com/alnahian2003
 * https://twitter.com/alnahian2003
 * https://behance.net/alnahian2003
 * mail me at: a.alnahian2003@gmail.com
*/

const topBarTitle = document.getElementById("totalCountries");
topBarTitle.innerText = "Total " + countries.length + " Countries";

// Display All The Countries Name and Flag
const flagContainer = document.getElementById("flags");

function displayFlags() {
  const len = countries.length;
  for (let i = 0; i < len; i++) {
    // Create a Div with class flag
    const flagDiv = document.createElement("div");
    flagDiv.className = "flag";

    // Create an Img Element for Showing Flags Image
    const flagImg = document.createElement("img");
    flagImg.className = "flag-img";
    flagImg.alt = countries[i].name;

    //convert country code to lowercase to meet the exact filepath name
    let lowr = countries[i].code;
    flagImg.src = "./flags/" + lowr.toLowerCase() + ".svg";
    //   Append the Img to the flagDiv
    flagDiv.appendChild(flagImg);

    flagContainer.appendChild(flagDiv);

    // Create h4 Element for the Country Name
    const countryName = document.createElement("h4");
    countryName.className = "country-name";
    countryName.innerText = countries[i].name;
    flagDiv.appendChild(countryName);

    // Create p Element for the Country Code
    const countryCode = document.createElement("p");
    countryCode.className = "country-code";
    countryCode.innerHTML = "<span>Country Code:</span> " + countries[i].code;
    flagDiv.appendChild(countryCode);
  }
}
displayFlags();

// Footer Dynamic Year
const yearContainer = document.getElementById("year");
let currentYear = new Date();
yearContainer.innerText = currentYear.getFullYear();
