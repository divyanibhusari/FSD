//1.
// let a =0
// while(a<=10){
//     console.log(a)
//     a++
// }

//2.leap year
// let year =Number(prompt("enter the year"))
// if(year % 100 !== 0){
//     if(year % 4 == 0){
        
//             console.log(year +"is a leap year")
//         }else{
//             console.log(year +"is not a leap year")
//         }
        
//     }else if(year % 400 == 0){
//         console.log(year +"is a leap year")
// }else{
//     console.log(year +"is not a leap year")
// }

// if((year % 100 !== 0)&&(year % 4 == 0) ||(year % 400 ==0)){
//     console.log(year +" is a leap year ")
// }else{
//     console.log(year +" is not a leap year")
// }





//wap to check years for leap year or not from 0 - now(2024)

// function checkYear(year) {

//     let answer = ""

//     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//         answer = year + " is a leap year !"
//     } else {
//         answer = year + " is not a leap year !"
//     }

//     return answer

// }
// console.log(checkYear(2021))

// let leapyear= 0
// while(leapyear <= 2024){
//     console.log(checkYear(leapyear))
//     leapyear++
// }




// // make it reverse i.e. 2024 - 0
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



// // wap to count leap year from 0 - 2024

// let year = 0    
// let counter = 0
// let notCounter = 0

// while (year <= 2024) {
//     if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
//        counter++
//     }else{
//         notCounter++
//     }
//     year++
// }
// //template litrals
// console.log(`from 0 to 2024 total leap years are : ${counter} and comman years are : ${notCounter}`)
//console.log("from 0 to 2024 total leap years are : "+ counter + " and comman years are : " + notCounter)




// let leapYearCounter = (start, end) => {

//     let startingYear = start
//     let counter = 0
//     let notCounter = 0

//     while (start <= end) {
//         (start % 100 !== 0) && (start % 4 == 0) || (start % 400 == 0) ? counter++ : notCounter++
//         start++
//     }

//     // console.log("from " + startingYear + " to " + end + " total leap years are : " + counter + " and comman years are : " + notCounter)
//     // this is a template litral es6 module
//     console.log(`from ${startingYear} to ${end} total leap years are : ${counter} and comman years are : ${notCounter}`)

//     // '' "" ``

// }

// leapYearCounter(2000, 2024)


// wap in js to check a number is palindrome or not make a function for it 
let number = samenumber = 141
let reverse = 0
let d = 0
while(number != 0){
    d = number % 10
    reverse = reverse *10+d
    number=parseInt(number/10)
}
console.log(reverse)