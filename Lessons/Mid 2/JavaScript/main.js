var language = "JavaScript";
console.log(language);

function showGlobalVar() {
    console.log(language);
}


function displayMessage() {
    var name = "John";
    console.log(name);
}


var object = {
    programLanguage: "Java Script from this",
    returnProgLang: function() {
        console.log(this.programLanguage);
    }
}


function outer(param) {
    var a = param;
    
    function nested() {
        console.log(a);
    }
    
    nested();
}


function greet(name) {
    var name = name;

    function showGreeting() {
        console.log("Hello " + name);
    }

    showGreeting();
}


function showName() {
    var name = "Renton";

    return function() {
        console.log(name + " - inner function");
    }
}

showGlobalVar();
displayMessage();
object.returnProgLang();
outer(5);
greet("Vento");

var getName = showName();
getName();