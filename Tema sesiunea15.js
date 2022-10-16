// 1. Creeaza o functie care primeste ca parametru doua numere si returneaza rezultatul ridicarii primului numar la puterea celui de-al doilea numar.
// CHALLENGE: Incearca sa nu o functie predefinita, sau un operator care deja face asta. Foloseste structuri repetitive.
// Ex: power(2, 4) => 16
// 2*2*2*2 = 16
let number1 = 2;
let number2 = 4;
let power = 16;
function pow (number1, number2) {
    return number1 * number1 * number1 * number1;
}
if (power >= 16) {
    console.log (power);
} else (number2 * number2); {
    console.log (power);
}

// power(5, 2) => 25
// 5*5=25
let number3 = 5;
let number4 = 2;
let powerFive = 25;
function pow (number3, number4) {
    return number3 * number3;
}
if (power >= 25) {
} 
console.log (powerFive);


// 2. Creeaza o functie care primeste ca parametru un sir de caractere, ce poate avea urmatoarele valori:
// "patrat", caz in care functia va returna formula de calcul a ariei patratului
const formulas = (formulaGeometrica) => {

    if (formulaGeometrica === 'patrat') {
       formula = 'latura la patrat';
   } else if (formulaGeometrica === 'dreptunghi') {
       formula = 'lungime * latime';
   } else if (formulaGeometrica === 'cerc') {
       formula = 'PI * raza * raza';
   } else {
      console.log ("Va rugam sa alegeti una dintre urmatoarele valori: 'patrat', 'dreptunghi' sau 'cerc'.");
   }
       return formula
   }
   console.log (formulas ('patrat'));

// "dreptunghi", caz in care functia va returna formula de calcul a ariei dreptunghiului

const formulas2 = (formulaGeometrica) => {

    if (formulaGeometrica === 'patrat') {
       formula = 'latura la patrat';
   } else if (formulaGeometrica === 'dreptunghi') {
       formula = 'lungime * latime';
   } else if (formulaGeometrica === 'cerc') {
       formula = 'PI * raza * raza';
   } else {
      console.log ("Va rugam sa alegeti una dintre urmatoarele valori: 'patrat', 'dreptunghi' sau 'cerc'.");
   }
       return formula
   }
   console.log (formulas2 ('dreptunghi'));

// "cerc", caz in care functia va returna formula de calcul a ariei cercului

const formulas3 = (formulaGeometrica) => {

    if (formulaGeometrica === 'patrat') {
       formula = 'latura la patrat';
   } else if (formulaGeometrica === 'dreptunghi') {
       formula = 'lungime * latime';
   } else if (formulaGeometrica === 'cerc') {
       formula = 'PI * raza * raza';
   } else {
      console.log ("Va rugam sa alegeti una dintre urmatoarele valori: 'patrat', 'dreptunghi' sau 'cerc'.");
   }
       return formula
   }
   console.log (formulas3 ('cerc'));

// Orice alta valoare a parametrului, va rezulta in returnarea unui sir gol si afisarea la consola a mesajului "Va rugam sa alegeti una dintre urmatoarele valori: 'patrat', 'dreptunghi' sau 'cerc'."

const formulas4 = (formulaGeometrica) => {

    if (formulaGeometrica === 'patrat') {
       formula = 'latura la patrat';
   } else if (formulaGeometrica === 'dreptunghi') {
       formula = 'lungime * latime';
   } else if (formulaGeometrica === 'cerc') {
       formula = 'PI * raza * raza';
   } else {
      
   }
 }
 console.log ("Va rugam sa alegeti una dintre urmatoarele valori: 'patrat', 'dreptunghi' sau 'cerc'.");

// BONUS: Scrie aceeasi functie in toate cele 3 sintaxe discutate la curs.
//Patrat
// normal
function aria (latura1, latura2) {
    return latura1 * latura2;
}
let result = aria (2, 2);
console.log (result);

//anonim

let ariaPatrat = function (latura1, latura2) {
    return latura1 * latura2;
}
let result2 = ariaPatrat (2,2);
console.log (result2);

//aroww
let arrowPatrat = (latura1, latura2) => {
    let aria = latura1 * latura2;
    return aria;
}

let result3 = arrowPatrat (2,2);

console.log(result3);

// Dreptunghi
// normal
function ariaDreptunghi (lungimeD, latimeD) {
    return lungimeD * latimeD;
}
let result4 = ariaDreptunghi (3, 2);
console.log (result4);

//anonim

let ariaDreptunghi1 = function (lungimeD, latimeD) {
    return lungimeD * latimeD;
}
let result5 = ariaDreptunghi1 (3,2);
console.log (result5);

//aroww
let arrowDreptunghi = (latura1, latura2) => {
    let aria = lungimeD * latimeD;
    return aria;
}

let result6 = arrowPatrat (3,2);

console.log(result6);

// Cerc
// normal
function ariaCerc (PI, raza) {
    return PI * raza * raza;
}
let result7 = ariaCerc (3.14, 25);
console.log (result7);

//anonim

let ariaCerc2 = function (PI, raza) {
    return PI * raza * raza;
}
let result8 = ariaCerc2 (3.14, 25);
console.log (result8);

//aroww
let arrowCerc = (PI, raza) => {
    let aria = PI * raza * raza;
    return aria;
}

let result9 = arrowCerc (3.14, 25);

console.log(result9);