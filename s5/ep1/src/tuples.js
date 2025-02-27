function creerScore(nom, nombre) {
    return [nom, nombre];
}
var score = creerScore("Max", 15);
function afficherScore(score) {
    console.log("Le joueur ".concat(score[0], " a un score de ").concat(score[1], "."));
}
afficherScore(score);
