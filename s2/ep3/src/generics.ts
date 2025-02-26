type Obj = {nom: string, age: number};

interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const maVoiture: Voiture = {marque: "BMW", modele: "M8", annee: 2025};

const getAnnee : number = getProperty(maVoiture, "annee");
const getMarque : string = getProperty(maVoiture, "marque");
// const getErreur : string = getProperty(maVoiture, "erreur");

console.log(`J'ai une ${getMarque} qui est de ${getAnnee}.`);