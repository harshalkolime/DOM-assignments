//drop down menu

let btn = document.querySelector('.navbar-toggler')
let menu = document.querySelector('#navbarTogglerDemo01')

console.log(menu)

btn.addEventListener('click', listener1);
function listener1 () {
  if(menu.style.display== "none"){
    menu.style.display = "block"
  }
  else {    menu.style.display = "none"
}
}



// remove background texture

let body = document.querySelector("body")

body.style.backgroundImage ="linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) )"




// side sections 


let aside = document.getElementsByTagName("aside").item("0")

aside.style.border= "solid red 5px"
aside.style.overflow= "hidden"
aside.style.overflowY= "scroll"


let p= document.createElement("p")
let htwo= document.createElement("h2")
let hr= document.createElement("hr")

hr.classList="hr-line"
htwo.classList="new-head"
p.classList="new-p"

hr.classList="hr-line"
htwo.innerText="new-head"
p.innerText="lorem ipsum"



aside.appendChild(htwo)
aside.appendChild(p)
aside.appendChild(hr)


console.log(hr)
console.log(htwo)
console.log(aside)















