// conditional statements
//  if,if-else,if else-if,nested if,ladder if ,tenary operators,switch case.

//1.if
    // let a =20
    // let b=30
    // if(a<b){
    //     console.log("a is smaller ")
    // }
//2.if-else
    // let c =50
    // let d =40
    // if(c<d){
    //     console.log("c is smaller")
    // }else{
    //     console.log("d is smaller")
    // }   
//3.if else-if,nested if 
    // let e =12
    // let f =34
    // let g = 67
    // let h =23
    // if(e<f){
    //     if(e<g){
    //         if(e<h){
    //             console.log("e is smaller")
    //         }else{
    //             console.log("h is smaller")
    //         }
    //     }else if(g<h){
    //        console.log(" g is smaller")
    //     }else{
    //           console.log("h is smaller")
    //      }
        
    // }    

// wap in js to get smaller of 4 numbers
let a = 100
let b = 500  
let c = 80
let d = 100

if(a < b){
    if(a < c){
        if(a < d){
            console.log("A is smaller A1!")
        }else{
            console.log("D is smaller D1!")
        }
    }else if(c < d){
        console.log("C is smaller C1!")
    }else{
        console.log("D is smaller D2!")
    }
}else if(b < c){
    if(b < d){
        console.log("B is smaller B1!")
    }else{
        console.log("D is smaller D3!")
     }
}else if(c < d){
    console.log("C is smaller C2!")
 }else{
    console.log("D is smaller D4!")
}    

// wap in js to find odd/even numbers

//  let number = Number(prompt("Enter a number"))

//  if (number % 4 == 0) {
//      console.log(number + " is a even number !")
//  }else{
//      console.log(number + " is a odd number !")
//  }

// wap in js to check if age of driver is valid or not

 let age = Number(prompt("enter the age"))
 if(age >=18){
    console.log("driver is valid")
 }else{
    console.log("driver is not valid")
 }


// wap in js to check if age of voting is valid or not

// let age = Number(prompt("enter the age"))
// if(age >=18){
//    console.log("voting is valid")
// }else{
//    console.log("voting is not valid")
// } 



// wap in js to make a switch case for finding out vowels and consolants
    let choice = "i"
    switch(choice){
    case 'a': console.log("a is a vowel ")
    break;
    case 'e': console.log("e is a vowel ")
    break;
    case 'i': console.log("i is a vowel ")
    break;
    case 'o': console.log("o is a vowel ")
    break;
    case 'u': console.log("u is a vowel ")
    break;
    default: console.log("Remaining letter are consonants")
    }


