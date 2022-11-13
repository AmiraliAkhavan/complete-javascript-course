// Coding Challenge #1
let marks_height = 1.69;
let marks_weight = 78;
let Johns_height = 1.95;
let Johns_weight = 92;
const BMIMark = marks_weight / marks_height ** 2;
const BMIJohn = Johns_weight / (Johns_height * Johns_height);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// Coding Challenge #2
if (BMIJohn > BMIMark) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Coding Challenge #3

let countOfMatch = 0;
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
while (countOfMatch < 3) {
  if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins won this match!`);
  } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas won this match!`);
  } else if (
    dolphinsAverage === koalasAverage &&
    dolphinsAverage >= 100 &&
    koalasAverage >= 100
  ) {
    console.log(`Draw`);
  }
  countOfMatch++;
  console.log(countOfMatch);
}

/**********************************************************************************************/

// Coding Challenge #1 - F-P 2

const bill = 275;
let tip;
let total;
bill >= 50 && bill <= 300
  ? (tip = (bill * 15) / 100)
  : (tip = (bill * 20) / 100);
total = bill + tip;
console.log(bill, tip, total);

// Coding Challenge #2 - F-P 2
