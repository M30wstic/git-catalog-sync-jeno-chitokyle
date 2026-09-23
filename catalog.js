function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  let fee = daysLate * ratePerDay;
  
  if (fee > 20) {
    return 20;
  }
  
  return fee;
}

module.exports = { isValidLoan, calculateLateFee };