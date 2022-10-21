// //"A x B = E est positive/negative"
// const a = prompt('premier nombre');
// const b  = prompt('deuxieme nombre');

// const e =  a * b;
// if (e > 0) {
//     console.log(e +" est un nombre positive");
// }else{
//     console.log(e +" est un nombre negatif");
// }

// let i = 0;

//tant que

// while(i < 10 ) {
//     console.log("bonjour");
//     i = i + 1;
// }

const notes = [12, 13, 2, 16]
const personnes = {
    nom : "Jhon",
    prenom : "Deo"
}

//pour
// for (let i = 0; i < notes.length; i++){
//     console.log(notes[i]);
// }

//valable aussi pour les objets
// for(let i in notes) {
//     console.log(notes[i]);
// }

//ceci ne marche pas que si les chose sont iterable(donc sur le tableau uniiquement)
for (let note of notes){
    // console.log(note);
}

// const texts = "Bonjour"
// for(let letter of texts){
//     console.log(letter);
// }

// let nb = prompt("Entrer un nombre entre 0 et 10")
// console.log("Vous avez entrer le nombre :" + nb);

// if (nb > 0 && nb < 10) {
//     for(let i = nb; i >= 0; i--){
//         console.log(i);
//     }
// }else {
//     console.log("c'est le bon chiffre");
// }
// let i = 0;
// while (nb >= 0){
//     console.log(nb);
//     nb--;
// }

// let guess = 8
// let  chiffre

// while(chiffre !== guess) {
//     chiffre = prompt('Votre chiffre') * 1
//     if (chiffre !== guess) {
//         console.log("Dommage");
//     }
// }
// console.log("Bravo");


// function canDrive(age, pays) {
//     if(
//         (age >= 18 && pays === "FR") ||
//         (age >=16 && pays === "US")
//     ) {
//         return true;
//     }
//     return false;
// }

// console.log(canDrive(13, "FR"));

//on crée un nombre entre 0 & 10
//3 essaie pour deviner le mot
//isRight(n)
//guess()

// function getRandomInt(max){
//     return Math.floor(Math.random() * (max +1))
// }

// const solution = getRandomInt(10)
// // console.log(solution);

// function isRight(n) {
//     return solution === n
// }

// function guess() {
//     const number = prompt('entrer un nombre') * 1
//     return isRight(number)
// }

// for (i = 0; i < 3; i++){
//     if(guess()) {
//         console.log('Bravo');
//         break;
//     } else if(i === 2){
//         console.log("vous avez perdu");
//     }
// }

function isPremier(n) {
    return ((n % n === 0) && (n % 2 === 0));
}
console.log(isPremier(0));
console.log(isPremier(2));
console.log(isPremier(12));
console.log(isPremier(13));
console.log(isPremier(8));
