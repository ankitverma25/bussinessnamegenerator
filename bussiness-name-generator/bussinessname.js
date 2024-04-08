console.log("welcome to bussiness name generator")

let x = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

console.log(x)

let first;
let second;
let third;

if(x<4){
    first = "cool"
}
else if(x<7 && x>3){
    first="sticky"
}
else{
    first ="hardy"
}
x = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

if(x<4){
    second = "brand"
}
else if(x<7 && x>3){
    second="mine"
}
else{
    second ="noice"
}
x=Math.floor(Math.random() * (10 - 1 + 1) ) + 1;

if(x<4){
    third = "coporation"
}
else if(x<7 && x>3){
    third="bussiness"
}
else{
     third="limited"
}

console.log(`The generated business name is ${first}${second}${third}.`)

