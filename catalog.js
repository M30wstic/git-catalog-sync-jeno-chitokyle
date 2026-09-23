function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }

  let fee = daysLate * ratePerDay;

  if (fee > 0 && fee < 1) {
    return 1;
  } else {
    fee = Math.round(fee);
  }

  if(fee > 20) {
    return 20;
  }

  return fee;
}

module.exports = { isValidLoan, calculateLateFee };
