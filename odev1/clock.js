let time =document.querySelector("#time");
let personName = document.querySelector("#name");


let enterName = prompt("isminizi girin")
let upper =enterName.replace(enterName[0],enterName.slice(0,1).toUpperCase()) 
personName.innerHTML=`${upper}`

let getTime = setInterval(()=>{
    time.textContent=new Date().toLocaleTimeString()
},1000)