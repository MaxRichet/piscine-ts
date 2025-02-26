var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Forme = /** @class */ (function () {
    function Forme(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    Forme.prototype.calculerSurface = function () {
        if (this.largeur && this.hauteur)
            console.log(this.largeur * this.hauteur);
    };
    return Forme;
}());
var Cercle = /** @class */ (function (_super) {
    __extends(Cercle, _super);
    function Cercle(rayon) {
        var _this = _super.call(this) || this;
        _this.rayon = rayon;
        return _this;
    }
    Cercle.prototype.calculerSurface = function () {
        console.log(Math.PI * this.rayon * this.rayon);
    };
    return Cercle;
}(Forme));
var rectangle = new Forme(15, 15);
var cercle = new Cercle(15);
rectangle.calculerSurface();
cercle.calculerSurface();
