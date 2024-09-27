// // // wap in js to get smaller of 4 numbers
// let a = 100
// let b = 500  
// let c = 80
// let e = 100

// if(a < b){
//     if(a < c){
//         if(a < e){
//             console.log("A is smaller A1!")
//         }else{
//             console.log("e is smaller E1!")
//         }
//     }else if(c < e){
//         console.log("C is smaller C1!")
//     }else{
//         console.log("e is smaller E2!")
//     }
// }else if(b < c){
//     if(b < e){
//         console.log("B is smaller B1!")
//     }else{
//         console.log("e is smaller E3!")
//      }
// }else if(c < e){
//     console.log("C is smaller C2!")
//  }else{
//     console.log("e is smaller E4!")
// }
// // // wap in js to check if age of driver is valid or not

//  let age = Number(prompt("enter the age"))
//  if(age >=18){
//     console.log("driver is valid")
//  }else{
//     console.log("driver is not valid")
//  }

// // // wap in js to make a switch case for finding out vowels and consolants
// let choice =Number(prompt("enter the choice value:-"))
// switch(choice){
// case 'a': console.log("a is a vowel ")
// break;
// case 'e': console.log("e is a vowel ")
// break;
// case 'i': console.log("i is a vowel ")
// break;
// case 'o': console.log("o is a vowel ")
// break;
// case 'u': console.log("u is a vowel ")
// break;
// default: console.log("Remaining letter are consonants")
// }

// // //1. make it reverse i.e. 2024 - 0
// function reverseYear(year) {

//     let output = ""

//     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//         output = year + " is a leap year !"
//     } else {
//         output = year + " is not a leap year !"
//     }

//     return output

// }


// let leapyear= 2024
// while(leapyear >= 0){
//     console.log(reverseYear(leapyear))
//     leapyear--
// }

// // //2. wap in js to check a number is palindrome or not make a function for it 

let number = samenumber = 141
let reverse = 0
let d = 0
while(number != 0){
    d = number % 10
    reverse = reverse * 10 + d
    number=parseInt(number/10)
}
console.log(reverse)