var firstName = "Faith";
var obj = {
    name: "Smith"
};

console.log(obj.name);
console.log(firstName);

function sayHello(param, firstName) {
    firstName = "viper";
    var prefix = "Hello ";
    param.name = "Renton";
    return prefix + param.name + " " + firstName;
}

console.log(sayHello(obj, firstName));
console.log(obj.name);
console.log(firstName);


function getFullName(firstName = "Mark", lastName = "Renton") {
    var prefix = "Hello ";
    return prefix + firstName + " " + lastName;
}

console.log(getFullName("John", "Romero"));
console.log(getFullName());


function showArg() {
    console.log(arguments);
    console.log(arguments[1]);
    var arg = arguments[1];
    console.log(typeof arg);
    return arg;
}

showArg(1, "tested");
var res = showArg("tested", true);

console.log(res);