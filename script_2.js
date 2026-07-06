function factorielle(nombre) {
  let resultat = 1;

  for (let i = nombre; i >= 1; i--) {
    resultat *= i;
  }

  return resultat;
}

let nombre = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
console.log("Le résultat est : " + factorielle(nombre));