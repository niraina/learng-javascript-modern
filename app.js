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