/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
   const markWeight=70;
   const johnWeight=80;

   const markHeight=1.80;
   const johnHeight=1.90;

// 2. Calculez le BMI de chacun.
const johnBmi = johnWeight / (johnHeight*johnHeight);
const markBmi= markWeight/(markHeight*markHeight);
console.log(johnBmi);
console.log(markBmi);

// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
// Ici, on compare, donc il faut mettre un signe de comparaison >
const isMarkBmiHigher = markBmi > johnBmi;
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
console.log(`Le BMI de Mark est plus élevé que celui de John: ${isMarkBmiHigher}`);
// BONNE CHANCE 😀