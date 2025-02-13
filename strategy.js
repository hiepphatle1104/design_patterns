/*

  Description: This code is used to simulate the strategy pattern.
  Context: Calculating the sales prices of products.

*/

// Black Friday
const blackFriday = (originalPrice) => originalPrice * 0.5;

// Christmas
const christmas = (originalPrice) => originalPrice * 0.7;

// Lunar New Year
const lunarNewYear = (originalPrice) => originalPrice * 0.8;

// Store the functions in an object
const type = {
	black_friday: blackFriday,
	christmas: christmas,
	new_year: lunarNewYear,
};

const calculatePrice = (originalPrice, discountType) =>
	type[discountType](originalPrice);

const result = calculatePrice(100, "christmas");

console.log(result);
