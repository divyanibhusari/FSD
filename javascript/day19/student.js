// function selectionSort(arr) {
//     const n = arr.length;
    
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
        
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j].addmisionyear < arr[minIndex].addmisionyear) {
//                 minIndex = j;
//             }
//         }
        
//         // Swap the found minimum element with the first element
//         if (minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }
// }

// // Example usage:
// let students1 = [
//     { name: "student1", phone: 234565678, addmisionyear: 2024 },
//     { name: "student2", phone: 134565678, addmisionyear: 2023 },
//     { name: "student3", phone: 324565678, addmisionyear: 2027 },
//     { name: "student4", phone: 454565678, addmisionyear: 2029 }
// ];

// selectionSort(students1);

// console.log(students1);



// let students = [
//     { name: "student1", phone: 234565678, addmisionyear: 2024 },
//     { name: "student2", phone: 134565678, addmisionyear: 2023 },
//     { name: "student3", phone: 324565678, addmisionyear: 2027 },
//     { name: "student4", phone: 454565678, addmisionyear: 2029 }
// ];

// const n = students.length;

// for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < n; j++) {
//         if (students[j].addmisionyear < students[minIndex].addmisionyear) {
//             minIndex = j;
//         }
//     }

//     // Swap the found minimum element with the first element
//     if (minIndex !== i) {
//         [students[i], students[minIndex]] = [students[minIndex], students[i]];
//     }
// }

// console.log(students);
