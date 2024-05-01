"use strict";

function calculateMortgage() {
  // Get input values
  let principal = Number(document.getElementById("loanAmount").value);
  let annualRate = Number(document.getElementById("annualRate").value);
  let loanLengthYears = Number(document.getElementById("loanLength").value);

  let L_months = loanLengthYears * 12; // Convert loan length from years to months
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
