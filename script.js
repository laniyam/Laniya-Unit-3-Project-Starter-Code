/* Declare variables below to save the different sections (divs) of your story*/

let h1 = document.querySelector("h1");
let button1 = document.querySelector(".door1");
let button2 = document.querySelector(".door2");
let jaguar = document.querySelector(".option-one-screen");
let jaguar2 = document.querySelector(".option-one-end");
let crocodile = document.querySelector(".option-two-screen");
let crocodile2 = document.querySelector(".option-two-end");


button1.onclick=function(){
    jaguar.style.display="block";
    jaguar2.style.display="block";
    h1.innerHTML ="You chose door 1";
};

button2.onclick=function(){
    crocodile.style.display="block";
    crocodile2.style.display="block";
    h1.innerHTML ="You chose door 2";
};

