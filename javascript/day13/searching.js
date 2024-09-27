//Searching :-
//1.linear search
// let array = [1, 2, 3, 4, 5, 6]
// let searchingValue = 1
// let flag = false;
// let steps = 1
// let position = 0
// function linearSearch() {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == searchingValue) {
//             flag = true
//             position = i + 1
//             break;
//         }
//         steps++
//     }
// }
// console.log(steps)
// if (flag) {
//     console.log(`we found the element at position ${position} in ${steps} steps`)
// } else {
//     console.log(`we din't found the element at any position ${position} in ${steps} steps`)
// }

// console.log(linearSearch)

// let student=[
//     {name:"divyani" , phone:234528945 , course : ["web-development","java","python"]},
//     {name:"prachi" , phone:234528945 , course : ["java","python"]},
//     {name:"khushi" , phone:234528945 , course : ["web-development","python"]},
//     {name:"pallavi" , phone:234528945 , course : ["web-development","java"]},
//     {name:"prashant" , phone:234528945 , course : ["web-development","java","graphics designer"]},
//     {name:"bu" , phone:234528945 , course : ["web-development","java","ui/ux"]},


// ]
// let searchingValue="prashant"
// let steps=1
// let postition = 0
// let flag = false;
// for(let i=0;i<student.length;i++){
//     if(student[i].name==searchingValue){
//         postition=i+1
//         flag=true
//         break;
//     }
//     steps++
// }
// console.log(steps)
// if(flag){
//     console.log(`we found the element at position ${postition}  in ${steps} steps`)
// }else{
//     console.log(`we don't found the element at position ${postition} in ${steps} steps`)
// }

//2.binary searching algorithms
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let startingIndex = 0
// let endingIndex = array.length - 1
// let searchingValue = 75
// let position = "string"
// let flag = false
// let steps = 0
// while (startingIndex <= endingIndex) {
//     steps++
//     let midpoint = parseInt((startingIndex + endingIndex) / 2)
//     if (array[midpoint] < searchingValue) {             // when searchvalue is less than midpoint 
//         startingIndex = midpoint + 1
//     } else if (array[midpoint] > searchingValue) {      // when searchvalue is greater than midpoint 
//         endingIndex = midpoint - 1
//     } else if (array[midpoint] == searchingValue) {
//         position = midpoint + 1
//         flag = true
//         break;
//     }
// }
// console.log(steps)
// if (flag) {
//     console.log(`we found the element at position ${position} in ${steps} steps!`)

// } else {
//     console.log(`element not found at position ${position} in ${steps} steps!`)
// }

// let student = [
//     { name: "divyani", phone: 234528945, course: ["web-development", "java", "python"] },
//     { name: "prachi", phone: 234528945, course: ["java", "python"] },
//     { name: "khushi", phone: 234528945, course: ["web-development", "python"] },
//     { name: "pallavi", phone: 234528945, course: ["web-development", "java"] },
//     { name: "prashant", phone: 234528945, course: ["web-development", "java", "graphics designer"] },
//     { name: "bu", phone: 234528945, course: ["web-development", "java", "ui/ux"] }
// ]
// //sort() the function used
// student.sort((x, y) => {

//     if (x.name > y.name) {
//         return 1          // 1 is ascending order
//     } else {
//         return -1         //-1 is decending order  
//     }

// })
// // //calling function
// console.log(student)

// let startingIndex = 0;
// let endingIndex = student.length - 1;
// let searchingValue = "bu";
// let position = 0;
// let flag = false;
// let steps = 1;
// while (startingIndex <= endingIndex) {
//     steps++
//     let midpoint = parseInt((startingIndex + endingIndex) / 2)
//     if (student[midpoint].name < searchingValue) {             // when searchvalue is less than midpoint 
//         startingIndex = midpoint + 1
//     } else if (student[midpoint].name > searchingValue) {      // when searchvalue is greater than midpoint 
//         endingIndex = midpoint - 1
//     } else if (student[midpoint].name == searchingValue) {
//         position = midpoint + 1
//         flag = true
//         break;
//     }
// }
// console.log(steps)
// if (flag) {
//     console.log(`we found the element at position ${position} in ${steps} steps!`)

// } else {
//     console.log(`element not found at position ${position} in ${steps} steps!`)
// }

//Sorting:-
//1.bubble sort
// let array = [2, 5, 6, 8, 1, 5]
// let step =0
// for (let i = 0; i <= array.length; i++) {

//     for (let j = 0; j < array.length - i - 1; j++) {

//         if (array[j] > array[j + 1]) {
//             let temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//         }
//     }
//     step++
// }
// console.log(array)
// console.log(step)



// function bubbleSort(array){
// let array=[9,1,3,5,8,2,4]
// let step =0
// function array1(){
//     for (let i = 0; i <= array.length; i++) {

//     for (let j = 0; j < array.litength - i - 1; j++) {

//         if (array[j] > array[j + 1]) {
//             let temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//         }
//     }
//     step++
// }
// }
// array1()
// }
// console.log(array)
// console.log(step)