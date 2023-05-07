let subbtn= document.createElement('a')
subbtn.innerText="pro-subscription"
subbtn.classList="btn"

let b = document.querySelectorAll('div.nav-center').item(0).childNodes[5]

b.appendChild(subbtn)



let chinesediv = document.querySelectorAll("div.tags-container").item(0).children[1]
let chinese = document.createElement("a")
chinese.innerText="chinese (7)"


chinesediv.append(chinese)


let six = document.querySelectorAll("div.recipe-gallery").item("0")
let cardiv= document.createElement('div')
six.appendChild(cardiv)
cardiv.classList="card"























