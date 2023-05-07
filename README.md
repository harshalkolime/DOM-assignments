
# DOM assignment 1

w
## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/Screenshot%20(8).png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

## task one solution-


```javascript
const ul = document.querySelector('ul');
const li = document.createElement('li');
const a  = document.createElement('a')

ul.append(li)
li.append(a)
a.innerText='hire-me'

```


## task two after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

## task two solution-


```javascript


let b =document.querySelector(".search-field input");
b.placeholder="Search my project";


```


## task three after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

## task three solution-


```javascript

let employee=document.querySelectorAll(".hero-left-section p span");
employee[1].innerText = "employee";
employee[2].innerText = "ineuron Intellegent private ltd"



```

## task four after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

## task four solution-


```javascript


let image= document.querySelector(".hero-right-section img")
image.src="./avtar.png"
console.log(image)

```



## task five after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

## task five solution-


```javascript

let btn=document.createElement("button")
let btn2=document.querySelector(".hero-right-section-btns")
btn2.append(btn)
btn.innerText= "support me"


```

# DOM Assignment 2



## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/Screenshot%20(9).png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

## task one solution-


```javascript
accordian.forEach(element => {
  element.style.backgroundColor="#d1a5f0"
});


```


## task two after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

## task two solution-


```javascript


const p = document.createElement("p")
const q = document.createElement("h3")
const r = document.querySelector(".accordian-wrapper")
const s = document.createElement("div")


r.appendChild(s)
s.appendChild(q)
s.appendChild(p)

s.classList.add("accordian" )

q.classList.add()
q.innerText="Skills"

r.classList.add()
p.innerText="I posses a vert good command over full stack development technologies like MERN which can be seen in my work over the Github."

```



# DOM Assignment 3

## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/Screenshot%20(10).png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

## task one solution-


```javascript
const a= document.querySelector(".enterName")
a.placeholder="FSJS 2.0"
console.log(a)
const b= document.querySelector(".enterMail")
b.placeholder="fsjs@ineuron.ai"
console.log(b)
const c= document.querySelector(".enterMessage")
c.placeholder="Hello world"
console.log(c)


//right section

const d= document.querySelector(".userName")
d.placeholder="FSJS 2.0"
console.log(d)
const e= document.querySelector(".userEmail")
e.placeholder="fsjs@ineuron.ai"
console.log(e)
const f= document.querySelector(".userMessage")
f.placeholder="Hello world"
console.log(f)
const g=document.querySelector(".logo")
element.style.fontFamily = 'Arial, sans-serif';
console.log(g)




```
# DOM Assignment 4 
## assignment 4 tasks

## assignment 4 before-

![App Screenshot](./DOM%20Assignments%202.0/04_DOM%20Project/04_DOM%20Project/Output/Screenshot%20(11).png)

## assignment after -
![App Screenshot](./DOM%20Assignments%202.0/04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

## assignment solution-


```javascript

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



```
# assignment 5

## Assigment output-

![App Screenshot](./DOM%20Assignments%202.0/05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)


## Assignment 5 solution-


```javascript

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


```
# Assignment 6


## Assignment 6 tasks-

<!-- ## task one before-

![App Screenshot]() -->

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

## task one solution-


```javascript

let img = document.querySelector(".logo")
img.src="./assets/ineuron-logo.png"

```




<!-- ## task two before-

![App Screenshot]() -->

## task two after-
![App Screenshot](./DOM%20Assignments%202.0/06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

## task two solution-


```javascript

let apprice= document.querySelector(".app_price span")
apprice.innerHTML="10$"

let linkedin = document.querySelector('.footer_social')
let div =document.createElement("div")
let i = document.createElement("i")

div.classList="footer_social_ico"
i.classList="fa-brands fa-linkedin"


div.append(i)
linkedin.append(div)
console.log(linkedin)

```





# Assignment 7

## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P7/DOM%20P7/ass7.2-before.png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P7/DOM%20P7/ass7.2-after.png)

## task one solution-


```javascript
let a = document.getElementsByTagName("a")
console.log(a)

let one = a[1];
one.remove();
console.log(one)

let two = a[2];
two.remove();
console.log(a)

let five = a[3];
five.remove();
console.log(five)

let seven = a[4];
seven.remove();
console.log(seven)

let eight = a[5];
eight.remove();
console.log(eight)

```

## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P7/DOM%20P7/ass7.1-before.png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P7/DOM%20P7/ass7.1-after.png)

## task one solution-


```javascript

let text = document.querySelector('input')
text.disabled = false;
console.log(text)
let sub = document.querySelector('.main__form-btn')
sub.disabled = false;
console.log(sub)

```






## Assignment 8
## assignment  8 tasks

## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P8/DOM%20P8/ass8.3-before.png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P8/DOM%20P8/ass8.3-after.png)

## task one solution-


```javascript


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


```



## task two before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P8/DOM%20P8/ass8.2-before.png)

## task two after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P8/DOM%20P8/ass8.2-after.png)

## task two solution-


```javascript

let body = document.querySelector("body")

body.style.backgroundImage ="linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) )"



```




## task three before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P8/DOM%20P8/ass8.1-before.png)

## task three after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P8/DOM%20P8/ass8.1-after.png)

## task three solution-


```javascript


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



```


## Assigment 9
## assignment  8 tasks

## task one before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P9/DOM%20P9/ass9.2-before.png)

## task one after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P9/DOM%20P9/ass9.2-after.png)

## task one solution-


```javascript

let btn = document.querySelector(".add-to-cart")

btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor = "red";
  });

  btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "hsl(158, 36%, 37%)";
  });


```



## task two before-

![App Screenshot](./DOM%20Assignments%202.0/DOM%20P9/DOM%20P9/ass9.1-before.png)

## task two after-
![App Screenshot](./DOM%20Assignments%202.0/DOM%20P9/DOM%20P9/ass9.1-after.png)

## task two solution-


```javascript
let title = document.querySelector("h1.title")
title.style.color="red"
title.style.fontWeight="100"

console.log(title)



```

