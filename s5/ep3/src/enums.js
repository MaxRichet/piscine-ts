var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
    if (direction === Direction.Nord)
        return [0, 1];
    else if (direction === Direction.Sud)
        return [0, -1];
    else if (direction === Direction.Est)
        return [1, 0];
    else
        return [-1, 0];
}
var depart = [5, 5];
function deplacer(point, direction) {
    var _a = vecteurDirection(direction), dx = _a[0], dy = _a[1];
    return [point[0] + dx, point[1] + dy];
}
console.log(deplacer(depart, Direction.Nord));
console.log(deplacer(depart, Direction.Sud));
console.log(deplacer(depart, Direction.Est));
console.log(deplacer(depart, Direction.Ouest));
