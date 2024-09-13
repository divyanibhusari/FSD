// do-while
// let marks = 100
// do {
//     console.log(marks)
//     marks ++
// }while(marks < 100)

// let greet = () => {
//     console.log("hello i am great function")
// }
// let choice  = "no"
// do{
//     greet()
//     choice = prompt("enter yes /no")
// }while(choice == "yes")

//  console.log("program complete")   


// for 
// for(let i =0; i <=100 ; i++ ){
//     console.log(i)
// }



// let number ;
// let orgnumber;
// let reverse = 0;
// for (number = orgnumber = 198 ; number != 0 ; number=parseInt(number/10)){
//     let d = number % 10
//     reverse = reverse * 10 + d
// }
// console.log(reverse)
// console.log(orgnumber)
// // ternary operators
// orgnumber === reverse ? console.log("is palindrome number") : console.log("is not palindrome number") 




// // wap to count leap year from 0 - 2024
// for(let  year = counter = notCounter = 0; year <= 2024 ; year ++ ){
//     if((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)){
//         counter ++
//     }else{
//         notCounter ++   
//     }
// }
// console.log("from 0 to 2024 total leap years are : "+ counter + " and comman years are : " + notCounter)



// year reverse 2024 - 0 
// function reverseYear(year){
//     let output = ""
//     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//          output = year + " is a leap year !"
//              } else {
//                  output = year + " is not a leap year !"
//              }
//              return output
// }
// for(let leapyear = 2024 ;leapyear >=0 ; leapyear --){
//     console.log(reverseYear(leapyear))
// }

//reverse leap year

// let year;
// let output
// for (year = 2024; year >= 0; year--) {

//     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//         output = year + " is a leap year !"
//     } else {
//         output = year + " is not a leap year !"
 
//     }
//     console.log(output)
// }


// string 
// let str = "divyani"
// for(let length=0 ; str[length] != undefined; length ++){
//     console.log(str.length)
    
// }

// console.log(str)

// revrse string:-
let string = "divyani"
let revstr = ""
for(let length=string.length ; length != 0 ; length --){
    revstr = revstr + string[length-1]
    console.log(string.length)   //only index no.
  //  console.log(length)       // index number 
}
console.log(revstr)

let str = Number(prompt("Enter the name"))
for(let length=0 ; str[length] != undefined ; length ++){
    console.log(str)
}