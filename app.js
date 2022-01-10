/*
 * Author: Al Nahian (alnahian2003)
 * Author URI: https://alnahian2003.github.io
 * Project Name: Flagma
 * Project Type: Country Flags, Country Informations, API Integrations, Intermediate JavaScript Project etc.
 */

// Footer Dynamic Year
const yearContainer = document.getElementById("year");
let currentYear = new Date();
yearContainer.innerText = currentYear.getFullYear();
