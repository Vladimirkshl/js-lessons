let firstUser = {
    firstName: "John",
    secondName: "Connor"
}

delete firstUser.secondName;
console.log(firstUser.secondName);


let secondUser = {};

firstUser.firstName = "John";
firstUser["secondName"] = "Connor";


// let object = {};
// let newObject = new Object();
// let createObject = Object.create();


let thirdUser = {
    firstName: "John",
    secondName: "Connor",
    login: "T2",
    password: "Doomsday",
    age: 25
}


let name = thirdUser.firstName;
let secondName = thirdUser["secondName"];

console.log(thirdUser.password);

thirdUser.password = "doom";
thirdUser.password = "world end";

console.log(thirdUser.password);

console.log(name);


// for (key in thirdUser) {
//     console.log(key);
//     console.log("Loop key in " + thirdUser[key]);
// }


var objWithFunction = {
    sex: "M",
    age: 21,
    greating: function(name) {
        return "Hello " + name;
    }
}

console.log(objWithFunction.greating("Renton"));


let objInObj = {
    firsName: "Smith",
    age: 25,
    info: {
        birthDay: "21/11/20",
        lang: "English"
    },
    showMessage: function(message) {
        console.log(message);
    },
    getBirthDay: function(birthDay) {
        return this.info.birthDay;
    }
}

console.log(objInObj.info.lang);
objInObj.showMessage("Test message");
console.log(objInObj.getBirthDay(1));


var jackPot = 777;
var bingo = jackPot;

console.log(jackPot);
console.log(bingo);

jackPot = null;

console.log(jackPot);
console.log(bingo);


var original = {
    number: 777
}

var linked = original;

original.number = 888;

console.log(linked.number);


let userA = {
    age: 25,
    sex: "male"
}

let userB = {
    age: 25,
    sex: "male"
}

console.log(userA == userB);
console.log(userA === userB);


console.log("======================");
console.log("Copy objects");

let products = {
    fruit: "banana",
    vegetable: "carrot",
    juice: "orange"
}

let key;
let newProducts = {};

for (key in products) {
    newProducts[key] = products[key];
}

for (key in newProducts) {
    console.log(newProducts[key]);
}


let allProducts = Object.assign({}, newProducts, products);
console.log(allProducts);
for (key in allProducts) {
    console.log(allProducts[key]);
}


for (let item in products) {
    console.log("Key " + item + ", value: " + products[item]);
}