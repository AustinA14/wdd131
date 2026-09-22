// select an HTML element from the DOM
// save it to a local variable called heading
let heading = document.querySelector("h1");
console.log(heading);

heading.style.color = "blue";
heading.style.fontSize = "2.5em";

let list = document.querySelector(".list");

list.style.color = "red";

document.querySelector("p").style.color = "blue";

document.getElementById("topics");

console.log(document.querySelectorAll(".list"));

let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add(".special");
topicsClassList.toggle("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                