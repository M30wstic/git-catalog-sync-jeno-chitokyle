function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if(daysLate <= 1) {
    return 0;
  }
  fee = daysLate * ratePerDay;

  if(fee > 0 && fee < 1) {
    return 1;
  }

  return fee;
}

module.exports = { isValidLoan, calculateLateFee };
