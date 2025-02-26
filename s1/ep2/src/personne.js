function afficherPersonneAvancee(personne) {
    if (personne.adresse)
        console.log("Bonjour, je m'appelle ".concat(personne.nom, " (ID: ").concat(personne.id, ") et j'ai ").concat(personne.age, " ans et j'habite au ").concat(personne.adresse.rue, ", ").concat(personne.adresse.ville, "."));
    else
        console.log("Bonjour, je m'appelle ".concat(personne.nom, " (ID: ").concat(personne.id, ") et j'ai ").concat(personne.age, " ans."));
}
var adresse = { rue: "avenue des Champs-Élysées", ville: "Paris" };
var personne1 = { id: 5, nom: "Max", age: 22, adresse: adresse };
afficherPersonneAvancee(personne1);
