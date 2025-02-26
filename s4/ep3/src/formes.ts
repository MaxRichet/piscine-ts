class Forme{
    largeur?: number | undefined;
    hauteur?: number | undefined;

    constructor(largeur?: number, hauteur?: number){
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(): void{
        if(this.largeur && this.hauteur)
        console.log(this.largeur * this.hauteur);
    }
}

class Cercle extends Forme{
    rayon: number;

    constructor(rayon: number){
        super();
        this.rayon = rayon;
    }
    calculerSurface(): void{
        console.log(Math.PI * this.rayon * this.rayon);
    }
}

const rectangle = new Forme(15, 15);
const cercle = new Cercle(15);

rectangle.calculerSurface();
cercle.calculerSurface();