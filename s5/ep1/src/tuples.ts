function creerScore(nom: string, nombre: number): [string, number]{
    return [nom, nombre];
}

const score: [string, number] = creerScore("Max", 15);

function afficherScore(score: [string, number]): void{
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}

afficherScore(score);