"use strict";

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function calculateDiscount(discountPercent, priceBeforeDiscount) {
    var discountAmount = 0;
    discountAmount = discountPercent * priceBeforeDiscount;
    return parseFloat (discountAmount);
}

function applyDiscount() {
    var priceSubTotal = Number(prompt('What is the price? (without the $ symbol please)')).toFixed(2);
    var percentDiscount = Number(prompt('What is the discount? (in decimal please)')).toFixed(2);
    var calculatedDiscount = Number(calculateDiscount(priceSubTotal, percentDiscount).toFixed(2));
    var priceWithDiscount = priceSubTotal - calculatedDiscount;
    alert('The discount amount is $' + calculatedDiscount + ' so your price with discount is $' + priceWithDiscount);
    return;
}

applyDiscount();