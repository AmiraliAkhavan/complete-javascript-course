// // Coding Challenge #1
// let marks_height = 1.69;
// let marks_weight = 78;
// let Johns_height = 1.95;
// let Johns_weight = 92;
// const BMIMark = marks_weight / marks_height ** 2;
// const BMIJohn = Johns_weight / (Johns_height * Johns_height);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// // Coding Challenge #2
// if (BMIJohn > BMIMark) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// // Coding Challenge #3

// let countOfMatch = 0;
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// while (countOfMatch < 3) {
//   if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//     console.log(`Dolphins won this match!`);
//   } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//     console.log(`Koalas won this match!`);
//   } else if (
//     dolphinsAverage === koalasAverage &&
//     dolphinsAverage >= 100 &&
//     koalasAverage >= 100
//   ) {
//     console.log(`Draw`);
//   }
//   countOfMatch++;
//   console.log(countOfMatch);
// }

// /**********************************************************************************************/

// // Coding Challenge #4

// const bill = 275;
// let tip;
// let total;
// bill >= 50 && bill <= 300
//   ? (tip = (bill * 15) / 100)
//   : (tip = (bill * 20) / 100);
// total = bill + tip;
// console.log(bill, tip, total);

// Coding Challenge #2 - F-P 2

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
calcTip(100);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

//  Coding Challenge #3 - F-P 2

const markObj = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnObj = {
  fullName: " John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markObj.calcBMI();
johnObj.calcBMI();
console.log(markObj.bmi, johnObj.bmi);

if (markObj.bmi > johnObj.bmi) {
  console.log(
    `${markObj.fullName}'s BMI ${markObj.bmi} is higher than ${johnObj.fullName}'s ${johnObj.bmi}!`
  );
} else if (markObj.bmi < johnObj.bmi) {
  console.log(
    `Mark's BMI ${johnObj.bmi} is higher than John's ${markObj.bmi}!`
  );
}
