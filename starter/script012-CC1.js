/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.

// 2. Calculez le BMI de chacun.

// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.

// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
//
// BONNE CHANCE 😀

const markWeight = 78;
const markHeight = 180;
const johnWeight = 80;
const johnHeight = 180;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnHeight / (johnWeight * johnWeight);µ

if (markBMI > johnBMI){
    console.log("Le BMI de Mark est plus élevé que celui de John")
} else {
    console.log("Le BMI de John est plus élevé que celui de Mark")
}