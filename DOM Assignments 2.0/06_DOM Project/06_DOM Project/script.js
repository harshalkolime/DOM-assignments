let img = document.querySelector(".logo")

img.src="./assets/ineuron-logo.png"




///innerhtml problem below code

let apprice= document.querySelector(".app_price span")

apprice.innerHTML="10$"



//linked 

let linkedin = document.querySelector('.footer_social')
let div =document.createElement("div")
let i = document.createElement("i")

div.classList="footer_social_ico"
i.classList="fa-brands fa-linkedin"


div.append(i)

linkedin.append(div)

console.log(linkedin)









