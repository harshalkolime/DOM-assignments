let a = document.querySelectorAll(".clash-card__unit-stats")
let b =document.querySelectorAll(".one-third")
let j =document.querySelectorAll(".clash-card").item(1).children[1]

j.innerHTML="The Archer"
console.log(j)

let k=document.querySelectorAll(".clash-card").item(3).children[1]
k.innerHTML="The Goblin"
console.log(k)

let d=document.getElementsByTagName("div")
let thearcher=d.item(21)
thearcher.innerText="The Archer"




let theGoblin=d.item(53)
theGoblin.innerText="The Goblin"





b.forEach(element => {
    element.style.color ="white"
    element.style.borderColor ="Black"
    
  });

 let barbarian = a.item(0)
barbarian.style.backgroundColor = "orange"
console.log(barbarian)

let archer = a.item(1)
archer.style.backgroundColor = "#E08B"
console.log(archer)

let gaint = a.item(2)
gaint.style.backgroundColor = "#E07C24"
console.log(gaint)


let goblin = a.item(3)
goblin.style.backgroundColor = "#38CC77"
console.log(goblin)

let wizrad = a.item(4)
wizrad.style.backgroundColor = "#23C4ED"
console.log(wizrad)





  
