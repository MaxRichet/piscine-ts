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
var Animal = /** @class */ (function () {
    function Animal(nom) {
        this.nom = nom;
    }
    Animal.prototype.seDeplacer = function () {
        console.log("L'animal ".concat(this.nom, " se d\u00E9place."));
    };
    return Animal;
}());
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom) {
        return _super.call(this, nom) || this;
    }
    Chien.prototype.seDeplacer = function () {
        console.log("Le chien ".concat(this.nom, " court."));
    };
    return Chien;
}(Animal));
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom) {
        return _super.call(this, nom) || this;
    }
    Chat.prototype.seDeplacer = function () {
        console.log("Le chat ".concat(this.nom, " saute."));
    };
    return Chat;
}(Animal));
var animal = new Animal("Ravus");
var array = [new Chat("Daniel"), new Chien("Philipe"), new Chat("Josef")];
function faireSeDeplacer(animaux) {
    for (var i = 0; i < animaux.length; i++) {
        animaux[i].seDeplacer();
    }
}
faireSeDeplacer(array);
animal.seDeplacer();
