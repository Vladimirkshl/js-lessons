const element = document.querySelector("#main");
console.log(element.getAttribute("style"));
console.log(element.style);

let hasAttr = element.hasAttribute("style");


if (hasAttr) {
    let button = document.querySelector("button");
    button.setAttribute("id", "my-btn");
    let attrValue = button.getAttribute("id");
}

element.removeAttribute("style");
hasAttr = element.hasAttribute("style");

console.log(hasAttr);



var newDiv = document.querySelector(".header");
console.log(newDiv.style.width);
newDiv.style.width = "150px";
console.log(newDiv.style.width);
newDiv.style.marginTop = "15px";
console.log(newDiv.style.marginTop);



console.log(newDiv.getAttribute("style"));
console.log(newDiv.style.cssText);
console.log(newDiv.className);



var classes = newDiv.classList;
console.log(classes);

classes.add("left-side-bar", "right-side-bar");
console.log(classes);

classes.toggle("header");
console.log(classes);

classes.remove("right-side-bar");
console.log(classes);



console.log(element.innerHTML);
console.log(element.outerHTML);



var secondElement = document.querySelector(".second");
secondElement.innerHTML = "<span>Inner HTML Text</span>";



for (var i = 0; i < secondElement.childNodes.length ; i++) {
    console.log(secondElement.childNodes[i].nodeName);
}

for (var i = 0; i < secondElement.childNodes.length; i++) {
    console.log(secondElement.childNodes[i].tagName);
}



var thirdElement = document.querySelector(".third");
thirdElement.innerHTML = thirdElement.clientHeight;



var secondButton = document.createElement("button");
var buttonText = document.createTextNode("My button");
secondButton.id = "random";
secondButton.disabled = "disabled";

secondButton.appendChild(buttonText);
thirdElement.appendChild(secondButton);