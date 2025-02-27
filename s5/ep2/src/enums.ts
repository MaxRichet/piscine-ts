enum Direction{
    Nord,
    Sud,
    Est,
    Ouest
}

function vecteurDirection(direction: Direction): [number, number]{
    if(direction === Direction.Nord)
        return [0, 1];
    else if(direction === Direction.Sud)
        return [0, -1];
    else if(direction === Direction.Est)
        return [1, 0];
    else(direction === Direction.Ouest)
        return [-1, 0];
}

console.log(vecteurDirection(Direction.Nord));
console.log(vecteurDirection(Direction.Sud));
console.log(vecteurDirection(Direction.Est));
console.log(vecteurDirection(Direction.Ouest));