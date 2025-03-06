const num = Number(1238)
console.log(num.toFixed(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// Math

/**
 * Math.amx
 * Math.mix
 * ceil
 * floot
 * round
 * random
 * 
 */

const otpGenrator = function () {
    console.log(Math.floor(1000 + Math.random() * 9000))
}
otpGenrator();