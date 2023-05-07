//task 1- hire me
const ul = document.querySelector('ul');
const li = document.createElement('li');
const a  = document.createElement('a')

ul.append(li)
li.append(a)
a.innerText='hire-me'



// task 2- placeholder

let b =document.querySelector(".search-field input");
b.placeholder="Search my project";


//task 3 = working as a employee



let employee=document.querySelectorAll(".hero-left-section p span");
employee[1].innerText = "employee";
employee[2].innerText = "ineuron Intellegent private ltd"





// task 4 img change

let image= document.querySelector(".hero-right-section img")
image.src="./avtar.png"
console.log(image)




// task 5- about file change





//task 5 - create support me button

let btn=document.createElement("button")
let btn2=document.querySelector(".hero-right-section-btns")
btn2.append(btn)
btn.innerText= "support me"




////assignment 2 

//is in about sections
