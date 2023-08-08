function cutString(string) {
    console.log(string.length);
    var stringLength = string.length;

    if (stringLength >= 15) {
        var shortString = string.substring(0, 15);
        console.log(shortString);
        return shortString + "...";
    } else {
        return string;
    }   
}


console.log(cutString("This is important news!"));
console.log(cutString("Attention! It's very important!"));
console.log(cutString("Hello!"));
console.log("John is here.");
