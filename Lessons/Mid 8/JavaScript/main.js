var list = ["firstItem", "secondItem", "thirdItem"];
var newList = ["String", true, false, 10, null, "TEST STRING"];
var numbersList = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

for (let value of list) {
    console.log(value);
}




var arr = [];
var array = [];

for (var i = 0; i < 5; i++) {
    //arr[i] = `value ${i}`;
    arr.push(`value ${i}`);
    console.log(arr[i]);
}

for (let value of list) {
    array.push(value);
}

for (let value of array) {
    console.log(`This is ${value} form coppied array`);
}




for (let value of newList) {
    if (typeof value === "string") {
        console.log("This is string " + value);
        continue;
    };

    if (value === null) {
        break;
    } ;

    console.log(value);
}




newList.forEach(function(item) {
    console.log(`This is forEach - ${item}`);
})

newList.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
})

newList.forEach((item, index) => {
    console.log(`${index} : ${item}`);
})




var doubleNumbers = numbersList.map(function(number) {
    return number * 2;
})

doubleNumbers.forEach((item, index) => {
    console.log(`${index} : ${item}`);
})




var filteredArr = newList.filter(item => typeof item === "string");

filteredArr.forEach((item, index) => {
    console.log(`${index} : ${item}`);
})




var newNumbers = numbersList.filter(item => {
    let newNubmer = item * 2;
    return newNubmer > 10;
})

newNumbers.forEach((item, index) => {
    console.log(`${index} : ${item}`);
})




var everyArr = numbersList.every(item => {
    return item < 10;
})

console.log(everyArr);




var newEveryArr = numbersList.some(item => {
    return item == 1;
})

console.log(newEveryArr);