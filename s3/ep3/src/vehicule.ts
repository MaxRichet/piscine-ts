interface Vehicule{
    marque: string;
    annee: number;
}

interface TestError{
    test: string;
    test1: number;
}

function isVehicule(obj: any): obj is Vehicule {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.marque === "string" &&
        typeof obj.annee === "number"
    );
}

function afficherVehicule(obj: any): void{
    if(isVehicule(obj))
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    else
        console.log("Objet invalide pour un véhicule.")
}

const obj: TestError = {test: "test", test1: 1};
const voiture: Vehicule = {marque: "BMW", annee: 2025};

afficherVehicule(obj);
afficherVehicule(voiture);