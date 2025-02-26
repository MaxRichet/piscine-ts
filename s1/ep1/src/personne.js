function afficherPersonne(personne) {
    console.log("Bonjour, je m'appelle ".concat(personne.nom, " et j'ai ").concat(personne.age, " ans."));
}
var personne1 = { nom: "Max", age: 22 };
afficherPersonne(personne1);
