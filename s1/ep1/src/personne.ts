interface Personne{
    nom: string,
    age: number
}

function afficherPersonne(personne: Personne): void{
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

const personne1: Personne = {nom: "Max", age: 22};

afficherPersonne(personne1);