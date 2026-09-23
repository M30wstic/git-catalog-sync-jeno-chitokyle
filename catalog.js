function isValidLoan(daysLate) {
  return daysLate <= 1;
}

function calculateLateFee(daysLate, ratePerDay) {
  return Math.floor(daysLate * ratePerDay);
}

module.exports = { isValidLoan, calculateLateFee };
