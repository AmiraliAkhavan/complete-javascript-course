// First one
const country = "iran";
const continent = "Asia";
let population = 80;
console.log(country);
console.log(continent);
console.log(population);
/***************************************************************/
// Second one
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
/***************************************************************/
// Third one
language = "Farsi";
// isIsland = true; // doesnt change because of const
/***************************************************************/
// Forth one
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  " is in " +
  continent +
  ", and it has " +
  population +
  " million people speak " +
  language;
console.log(description1);
/***************************************************************/
// Fifth one
const description2 = `${country} is in ${continent}, and it has ${population} million people speak ${language}`;
console.log(description2);
/***************************************************************/
// Sixth one
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is  ${33 - population} million below average`
  );
}
/***************************************************************/
// Seventh one
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
/***************************************************************/
// Eighth one
const numNeighbours = "How many neighbour countries does your country have?";
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
/***************************************************************/
// Ninth one
const name = "Sarah";
if (language === `English` && population < 50) {
  console.log(`You should live in ${country} :) `);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
/***************************************************************/
// Number 10
const switchLanguage = `chinese`;
switch (switchLanguage) {
  case `chinese`:
  case `mandarin`:
    console.log("MOST number of native speakers!");
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
}
/***************************************************************/
// Number 11
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
