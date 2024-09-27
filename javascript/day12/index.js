//1.Tranversing array:-
//wap in js to tranverse a array , square the element and store it to new array.

// let number=[1,2,3,4,5,6,7]
// let sq_num=[] 
// for(let i=0;i<number.length;i++){
//     sq_num.push(number[i]*number[i])
// }
// console.log(sq_num)

//wap in js to tranverse a array , cube the element and store it to new array.

// let number=[1,2,3,4,5,6,7]
// let cube_num=[] 
// for(let i=0;i<number.length;i++){
//     cube_num.push(number[i]*number[i]*number[i])
// }
// console.log(cube_num)

//push user defined function

// function addElement(element,array){
//     array[array.length]=element;
// }
// let array=[1,2,3]
// addElement(5,array)
// console.log(array)


//pop user defined function

function removeElement(array){
    let element=array[array.length-1];
    array.length = array.length > 0 ? array.length - 1 : 0;
    return element;
}
function logger(ary){
    console.log("Original array: " + ary.join(", "), "\n\tItem popped off: " + removeElement(ary), "\n\tArray contents now: " + ary.join(", "));
  }
var ary=[1,2,3,4];
logger(ary);




//2d array

// let i,j;
// let number = [[1,2,3],[4,5,6],[7,8,9]]
// for(i=0;i<number.length;i++){
//     for(j=0;j<number[i].length;j++){
//         console.log(number[i][j])
//     }
// }