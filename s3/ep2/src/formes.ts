class Rectangle{
    largeur: number;
    hauteur: number;

    constructor(largeur, hauteur){
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(){
        return this.largeur * this.hauteur;
    }
}

class Cercle{
    rayon: number;

    constructor(rayon){
        this.rayon = rayon;
    }

    calculerSurface(){
        return Math.PI * this.rayon * this.rayon;
    }
}

function afficherSurface(forme: Rectangle | Cercle): void{
    if(forme instanceof Rectangle)
        console.log(`Ceci est un rectangle de : ${forme.calculerSurface()}.`)
    else
        console.log(`Ceci est un cercle de : ${forme.calculerSurface()}.`)
}

const rectangle1 = new Rectangle(15, 15);
const cercle1 = new Cercle(15);

afficherSurface(rectangle1);
afficherSurface(cercle1);