// @ts-check

const WORK_DAY = 8;
const BILLABLE_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * WORK_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let leftoverDays = numDays % BILLABLE_DAYS;
  let fullMonths = numDays - leftoverDays;

  let disountedRate = ratePerHour - ratePerHour * discount;

  let leftoverDaysPrice = dayRate(ratePerHour) * leftoverDays;
  let fullMonthsPrice = dayRate(disountedRate) * fullMonths;

  return Math.ceil(leftoverDaysPrice + fullMonthsPrice);
}
