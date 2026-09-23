function isValidLoan(daysLate) {
  return daysLate >= 1;
}

function calculateLateFee(daysLate, ratePerDay) {
  if(daysLate <= 1) {
    return 0;
  }
  return Math.floor(daysLate * ratePerDay);
}

module.exports = { isValidLoan, calculateLateFee };
