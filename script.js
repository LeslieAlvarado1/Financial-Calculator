"use strict";

function calculateMortgage() {
  // Get input values
  let principal = Number(document.getElementById("loanAmount").value);
  let annualRate = Number(document.getElementById("annualRate").value);
  let years = Number(document.getElementById("loanLength").value);

  let L_months = years * 12; // Convert loan length from years to months
  let i_monthly = annualRate / 12 / 100; // Convert annual interest rate to a monthly rate and percentage

  // Calculate monthly payment
  let monthlyPayment =
    (principal * i_monthly) / (1 - Math.pow(1 + i_monthly, -L_months));

  // Display result
  document.getElementById("result").innerHTML =
    "<em>$</em>" + monthlyPayment.toFixed(2);
}

function calculateValue() {
  // Get input values
  let principal = Number(document.getElementById("depositAmount").value);
  let annualRate = Number(document.getElementById("interestRate").value);
  let years = Number(document.getElementById("numberOfYears").value);

  // Calculate future value
  let r = annualRate / 100; // Convert annual interest rate to decimal
  let n = 365; // Compounding occurs daily
  let t = years;

  let futureValue = principal * Math.pow(1 + r / n, n * t);

  // Calculate total interest earned
  let totalInterest = futureValue - principal;

  // Display results
  document.getElementById("futureValue").innerHTML =
    "$" + futureValue.toFixed(2);
  document.getElementById("totalInterest").innerHTML =
    "$" + totalInterest.toFixed(2);
}

/* Examples */

// Function to execute Final Flash attack
function finalFlash(characterName) {
  console.log(characterName + " executes Final Flash!");
}

// Function to calculate total power level
function calculateTotalPower(attackPower, defensePower) {
  let totalPower = attackPower - defensePower;
  return totalPower;
}

// Calling finalFlash function with a character's name
finalFlash("Vegeta"); // Outputs: "Vegeta executes Final Flash!"

// Calling calculateTotalPower function with arbitrary attack and defense powers
let attack = 10000;
let defense = 5000;
let totalPower = calculateTotalPower(attack, defense);
console.log("Total Power Level: " + totalPower); // Outputs: "Total Power Level: 5000"
