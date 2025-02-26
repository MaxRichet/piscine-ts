var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    Rectangle.prototype.calculerSurface = function () {
        return this.largeur * this.hauteur;
    };
    return Rectangle;
}());
var Cercle = /** @class */ (function () {
    function Cercle(rayon) {
        this.rayon = rayon;
    }
    Cercle.prototype.calculerSurface = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    return Cercle;
}());
function afficherSurface(forme) {
    if (forme instanceof Rectangle)
        console.log("Ceci est un rectangle de : ".concat(forme.calculerSurface(), "."));
    else
        console.log("Ceci est un cercle de : ".concat(forme.calculerSurface(), "."));
}
var rectangle1 = new Rectangle(15, 15);
var cercle1 = new Cercle(15);
afficherSurface(rectangle1);
afficherSurface(cercle1);
