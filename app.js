let num1 = Number(prompt("Enter your obtained marks"));
let num2 = Number(prompt("Enter your total marks"));
let num3 = (num1 * 100) / num2;
alert("Your percentage is " + num3.toFixed(3) + "%");
if (num3 >= 90) {
  alert("Your grade is A⁺");
} else if (num3 >= 80) {
  alert("Your grade is A");
} else if (num3 >= 70) {
  alert("Your grade is B");
} else if (num3 >= 60) {
  alert("Your grade is C");
} else if (num3 >= 50) {
  alert("Your grade is D");
} else if (num3 >= 40) {
  alert("Your grade is E");
} else {
  alert("You are Fail");
}
