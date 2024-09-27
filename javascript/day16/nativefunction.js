//Native Function :-
     //shift,unshift,push,pop
    //array.length
  // 1.for of (loop):-
        // let array=[1,2,3,4,5,6]
        //     for(let element of array){
        //     console.log(element)
        //     }
            
            // let nums = ["divyani",9,8,7,6,5,4,3,2,1,0]
            
            //     for(let num of nums){
            //         console.log(num)
            //     }

            // let students = ["s1","s2","s3","s4","s5"]    
            //     for(let student of students){
            //         console.log(student)
            //     }
            
            // let numbers = [[1,2,3],[4,5,6],[7,8,9]]
            //     for(let number of numbers){
            //         for(let element of number){
            //             console.log(element)
            //         } 
            //     }   
  //2.forEach():-
        //syntax
        // array.forEach(()=>{})
        // nums.forEach((element, index) => {
        //      console.log(`${element} at ${index}`)
        //  })
        //let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        //this is square of two number
        // let makeSqaureNumber = (num) =>{
        //     console.log (num*num)  
        // }
        //this only return same number
        // let makeSqaureNumber = (num) =>{
        //   return num*num
        // }
        // nums.forEach(makeSqaureNumber)    //will not return a new array
        // console.log(nums)
  //3.map():-
        //syntax
        //array.map(function) this returns a new array
    //    const array1=[1,4,9,16,25,36,49,64,81]
    //    const map1 =array1.map((x) => x * 1 );
    //    const map2 =array1.map((y) => Math.sqrt(y) );
    //    console.log(map1) 
    //    console.log(map2)

  //sort():-
    // let numbers = [1,2,4,5,7,8,9,3,6]
    // numbers.sort((prev,next)=>{
    //     // return prev - next
    //     return next -prev
    // })
    // console.log(numbers)

    // let strings = ["D","I","v","y","n","I"]
    // strings.sort((prev,next)=>{
    //     if(prev.toLowerCase > next.toLowerCase){
    //       return 1
    //     }else{
    //       return -1
    //     } 
    // })
    // console.log(strings)


    // let strings1 = ["Z","b","c","d","a","f","Z","e","A"]
// A - 65 , B - 66
// shift - 32
// a - 97
// strings1.sort((prev,next)=>{
//   if( prev > next){
//     return 1
//   }else{
//     return -1
//   }
    
// })
// console.log(strings1)

  //4.filter():-  
  //array.filter(()=>{}) return the element of array based on the filter conditions
  let nums = [1,2,3,4,5,6,7,8,9,10]
//   let evenNumber = nums.filter((num)=>{
//         return num %2 == 0

//   })
//   let oddNumber = nums.filter((num)=>{
//     return num %2 != 0
    
//   })
//   console.log(evenNumber)
//   console.log(oddNumber)

// //
let searchValue = 1
let answer = nums.((num,index)=>{
  console.log(index)
    if(num == searchValue){
      return index
    }
})
console.log(answer)
// nums = nums.filter((num)=>{
//     return num % 3 != 0
// })
// console.log(nums)

let strings2 = ["d",1,2,3,4,"i",5,6,7]
let OnlyString = strings2.filter((element)=>{
    if(typeof(element) == "string"){
      return element
    }
})

let OnlyNumber = strings2.filter((element)=>{
  if(typeof(element) == "number"){
    return element
  }
})
console.log(OnlyString)
console.log(OnlyNumber)