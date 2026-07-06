const geneticCode = {
  UCU: "Sérine",
  UCC: "Sérine",
  UCA: "Sérine",
  UCG: "Sérine",
  AGU: "Sérine",
  AGC: "Sérine",

  CCU: "Proline",
  CCC: "Proline",
  CCA: "Proline",
  CCG: "Proline",

  UUA: "Leucine",
  UUG: "Leucine",

  UUU: "Phénylalanine",
  UUC: "Phénylalanine",

  CGU: "Arginine",
  CGC: "Arginine",
  CGA: "Arginine",
  CGG: "Arginine",
  AGA: "Arginine",
  AGG: "Arginine",

  UAU: "Tyrosine",
  UAC: "Tyrosine"
};

function translateARN(arn) {
  let proteines = [];

  for (let i = 0; i < arn.length; i += 3) {
    let codon = arn.slice(i, i + 3);

    if (geneticCode[codon]) {
      proteines.push(geneticCode[codon]);
    }
  }

  console.log(proteines.join("-"));
}

translateARN("CCGUCGUUGCGCUACAGC");
translateARN("CCUCGCCGGUACUUCUCG");