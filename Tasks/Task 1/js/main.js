function getCorrectFormOfCrow(number) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return `На ветке сидит ${number} ворона`;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return `На ветке сидит ${number} вороны`;
    } else {
        return `На ветке сидит ${number} ворон`;
    }
}


console.log(getCorrectFormOfCrow(1));
console.log(getCorrectFormOfCrow(33));
console.log(getCorrectFormOfCrow(11));
console.log(getCorrectFormOfCrow(99));