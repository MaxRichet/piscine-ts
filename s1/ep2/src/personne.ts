interface Adresse{
    rue: string,
    ville: string
}

interface Personne{
    readonly id: number,
    nom: string,
    age: number,
    adresse?: Adresse,
}

function afficherPersonneAvancee(personne: Personne): void{
    if(personne.adresse)
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    else
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}) et j'ai ${personne.age} ans.`);
}

const adresse: Adresse = {rue: "avenue des Champs-Élysées", ville: "Paris"};
const personne1: Personne = {id: 5, nom: "Max", age: 22, adresse: adresse};

afficherPersonneAvancee(personne1);