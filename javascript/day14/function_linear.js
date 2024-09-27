let array=[1,2,3,4,5,6]
let flag = false
let position =0
let searchingElement = 4
let steps = 1

//function number(){
    for(let i=0;i<array.length;i++){
        if(array[i]==searchingElement){
        position =i+1
        flag=true
        break ;
        }
        steps++
    }
//}
console.log(steps)
//console.log(number)
if(flag){
    console.log(`we are element  found at position ${position} and steps ${steps}`)
}else{
    console.log(`we doesn't element  found at position ${position} and steps ${steps}`)
}