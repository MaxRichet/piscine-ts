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
    else
        return [-1, 0];
}

let depart: [number, number] = [5, 5];

function deplacer(point: [number, number], direction: Direction): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}


console.log(deplacer(depart, Direction.Nord));
console.log(deplacer(depart, Direction.Sud));
console.log(deplacer(depart, Direction.Est));
console.log(deplacer(depart, Direction.Ouest));