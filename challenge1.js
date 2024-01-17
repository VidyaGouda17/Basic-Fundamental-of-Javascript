//Challenge 1
// Mark and John are trying to compare their BMI( Body Mass Index ), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / ( height * height )( mass in kg
// and height in meter ).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables;
// 2. Calculate both their BMIs using the formula( you can even implement both
// versions );
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall;

let marksHeight = 1.69;
let johnHeight = 1.95;
let markMass = 78;
let johnMass = 92;
let BMIMark = markMass / ( marksHeight * marksHeight );
let BMIJohn = johnMass / ( johnHeight * johnHeight );
console.log( BMIMark );
console.log( BMIJohn );
let markHigherBMI = BMIMark > BMIJohn;
console.log( markHigherBMI );

// Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI.The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

//   Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

//     Note: Don't round the BMI values. Leave them as they are.;
if ( BMIMark > BMIJohn )
{
  console.log( `Mark's BMI ${ BMIMark } is higher than John's ${ BMIJohn }` );

} else
{
  console.log( `John's BMI ${ BMIJohn } is higher than Mark's ${ BMIMark }` );
}

// Challenge #3
// There are two gymnastics teams: Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below.The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:;

// "Dolphins win the trophy" if Dolphins win, or;

// "Koalas win the trophy" if Koalas win, or;

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.;
/* Write your code below. Good luck! 🙂 */

let scoreDolphins = ( 96 + 108 + 89 ) / 3;
let scoreKoalas = ( 88 + 91 + 110 ) / 3;
if ( scoreDolphins > scoreKoalas )
{
  console.log( "Dolphins win the trophy" );
} else if ( scoreDolphins === scoreKoalas )
{
  console.log( "Both win the trophy" );
} else
{
  console.log( "Koalas win the trophy 💕" );
}

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value.Create a variable called tip for this.It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value( bill + tip ).

//   Example: The bill was 275, the tip was 41.25, and the total value 316.25.

//     Note: Use the values of the bill and tip variables to construct this string.Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430;

const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log( `The bill was ${ bill }, the tip was ${ tip }, and the total value ${ bill + tip }` );