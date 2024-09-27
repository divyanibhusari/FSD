function SelectionSort(array){
    let SortArray = array
    let min_index = 0
    let n = SortArray.length
    for(let i=0;i<n-1;i++){
        min_index = i
        for(let j=i;j<n;j++){
            if(SortArray[j]<SortArray[min_index]){
                min_index =j
            }
        }
        let temp =SortArray[i]
        SortArray[i]=SortArray[min_index]
        SortArray[min_index]=temp
    }
    return SortArray
}
let nums=[4,2,3,6,7,9,1,5,10]
console.log(SelectionSort(nums))

let names=["d","i","v","y","a","n","I"]
console.log(SelectionSort(names))