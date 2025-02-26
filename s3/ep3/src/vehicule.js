function isVehicule(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.marque === "string" &&
        typeof obj.annee === "number");
}
function afficherVehicule(obj) {
    if (isVehicule(obj))
        console.log("Le v\u00E9hicule ".concat(obj.marque, " de l'ann\u00E9e ").concat(obj.annee, " est valide."));
    else
        console.log("Objet invalide pour un véhicule.");
}
var obj = { test: "test", test1: 1 };
var voiture = { marque: "BMW", annee: 2025 };
afficherVehicule(obj);
afficherVehicule(voiture);
