let phrase = prompt("Dis quelque chose au bot :");

if (phrase.endsWith("?")) {
  console.log("Ouais Ouais...");
} else if (phrase === phrase.toUpperCase() && phrase !== "") {
  console.log("Pwa, calme-toi...");
} else if (phrase.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (phrase === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}
