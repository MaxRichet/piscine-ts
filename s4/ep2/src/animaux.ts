interface IAnimal{
    nom: string;

    seDeplacer(): void;
}

class Animal implements IAnimal{
    nom: string;

    constructor(nom: string){
        this.nom = nom;
    }

    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

class Chien extends Animal{
    constructor(nom: string){
        super(nom);
    }

    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court.`);
    }
}

class Chat extends Animal{
    constructor(nom: string){
        super(nom);
    }

    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

const animal = new Animal("Ravus");
const array: IAnimal[] = [new Chat("Daniel"), new Chien("Philipe"), new Chat("Josef")];

function faireSeDeplacer(animaux: IAnimal[]): void{
    for(let i: number = 0; i < animaux.length; i++){
        animaux[i].seDeplacer();
    }
}
faireSeDeplacer(array);
animal.seDeplacer();