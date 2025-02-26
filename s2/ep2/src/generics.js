function premierElement() {
    var tableau = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tableau[_i] = arguments[_i];
    }
    if (tableau.length <= 0)
        return undefined;
    return tableau[0];
}
var number = [1, 2, 3, 4, 5];
var string = ["str1", "str2", "str3", "str4", "str5"];
var obj = [{ nom: "Max", age: 22 }, { nom: "William", age: 25 }, { nom: "Maud", age: 20 }];
var arrayVide = [];
premierElement(number);
premierElement(string);
premierElement(obj);
premierElement(arrayVide);
