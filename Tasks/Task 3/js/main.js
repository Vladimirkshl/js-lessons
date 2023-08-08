function checkLeapYear(number) {
    var number = +number;
    if (typeof number == "number") {
        return checkNumber(number);
    } else {
        return "Data is not a number.";
    }
}

function checkNumber(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}


console.log(checkLeapYear(2004));
console.log(checkLeapYear(2024));
console.log(checkLeapYear("1999"));