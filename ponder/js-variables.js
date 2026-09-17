let age = 33;
let name = "Juan";

console.log(age);

age = 34;

console.log(age);

let favoriteColor = "Green";

const eyeColor = "blue";
const policyDisclaimers = "Exclusions apply to vehicles registered in Michigan";

// scope is where variables can be referenced
if (age == 34) {
    // we are now in a different scope
    // inside this scope, we can reference variables declared outside this scope
    console.log(name);
    let culprit = "Bro Warner";
    console.log(culprit);
}

let culprit = "Bro Warner";
console.log(culprit);

// pull something from the HTML page
document.querySelector("h1").style.color = favoriteColor;