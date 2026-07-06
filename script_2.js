let nombre = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
let resultat = 1;

for (let i = nombre; i >= 1; i--) {
  resultat = resultat * i;
}

console.log("Le résultat est : " + resultat);
