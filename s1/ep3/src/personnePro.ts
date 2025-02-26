interface Employe{
    nom: string,
    poste: string
}

interface Client{
    nom: string,
    entreprise: string
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(personne: PersonnePro): void{
    if("poste" in personne)
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    else
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
}

const employe1: PersonnePro = {nom: "Max", poste: "Développeur"};
const client1: PersonnePro = {nom: "Max", entreprise: "PricingHub"};

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);