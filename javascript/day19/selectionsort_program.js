let student = [
    {
        name: "student1",
        phone: 234565678,
        addmisionyear: 2024
    },
    {
        name: "student2",
        phone: 134565678,
        addmisionyear: 2023
    },
    {
        name: "student3",
        phone: 324565678,
        addmisionyear: 2027
    },
    {
        name: "student4",
        phone: 454565678,
        addmisionyear: 2029
    },
    {
        name: "student1",
        phone: 234565678,
        addmisionyear: 2025
    },
    {
        name: "student2",
        phone: 134565678,
        addmisionyear: 2020
    },
    {
        name: "student3",
        phone: 324565678,
        addmisionyear: 2012
    },
    {
        name: "student4",
        phone: 454565678,
        addmisionyear: 2011
    }
];

let n = student.length
for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
       

        if (student[j].addmisionyear < student[minIndex].addmisionyear) {
            minIndex = j
        }
    }
    if (minIndex !== i) {
        // Create a temporary object to hold the current element
        let temp = student[i];
        student[i] = student[minIndex];
        student[minIndex] = temp;
    }
}

console.log(student)