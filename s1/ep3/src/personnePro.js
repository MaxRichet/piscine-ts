function afficherInfoProfessionnelle(personne) {
    if ("poste" in personne)
        console.log("Employ\u00E9: ".concat(personne.nom, " travaille comme ").concat(personne.poste, "."));
    else
        console.log("Client: ".concat(personne.nom, " est associ\u00E9 \u00E0 l'entreprise ").concat(personne.entreprise, "."));
}
var employe1 = { nom: "Max", poste: "Développeur" };
var client1 = { nom: "Max", entreprise: "PricingHub" };
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
