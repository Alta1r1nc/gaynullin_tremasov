"use strict"
// let num = 2
// console.log(num)

// let str = "привет"
// console.log(Number(str))

// let num = Math.min(1,2,5)

// for(i = 0; i<5; i++ ){

// }

// let num = 0
// while(num<5){
//     console.log(num)
//     num++
// }

// let num = 0
//     do {
//         console.log(num)
//     num++
//     } while(num<5)

// let arr = [1,2,3,4,5];

// arr.forEach(function(item){
//     console.log(item)
// })

// for (let element of arr) {
//     console.log(element)
// }

// let arr = {
//     1: 'a',
//     2: 'b',
//     3: 'c'
// }

// for (let key in arr){
//     console.log (key + ':' key[arr])
// }

// function (name){
//     return 'привет' + name
// }

// console.log(echo('Альберт'))

// const echo = function(name) {
//     console.log('привет' + name)
// }

// echo('Альберт')

// const echo= (name)=>{
//     console.log('привет' + name)
// }
// echo('альберт')


// let num = 8
// console.log(num)

// function echo(){
//     let num2 = 8
//     console.log(num20)
// }
// num2 = 10
// echo()

// let block = document.getElementById('block')
// console.log(block)

// document.appendChild(document.createElement('div'))

// function echo(element){
//     console.log(element.value);
// }

let block = document.querySelector("#block")

// block.style.backgroundColor = 'gray'
// block.style.color = 'white'

block.style.cssText = 'background-color: #000'

block.style.background = 'fff'

block.classList.add("block")
block.classList.remove("block")

//если надо то создаст если он есть то удалит
block.classList.toggle("block")

let result = block.classList.contains("block")
console.log(result)

block.getComputedStyle();

