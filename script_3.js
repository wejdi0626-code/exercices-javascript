let etages = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

for (let i = 1; i <= etages; i++) {
  let espaces = " ".repeat(etages - i);
  let briques = "#".repeat(i);

  console.log(espaces + briques);
}
