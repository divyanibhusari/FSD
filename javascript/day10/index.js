//obeject & array
// array of object:-
// 1.array :- coolection of object
let student = {
    name : "divyani",
    phone : 2345869770,
    email : "xyz@gmail.com", 
    regural : true ,
    //call by value
     xyz : () => {
        console.log(" i'm from student object")
     } ,
     //nsested object
     subject : {
        math : 20 ,
        english : 23 ,
        science : 25 ,

     }
}
console.log(student.name)
console.log(student.phone)
console.log(student.email)
console.log(student.subject.english)
console.log(student.subject.math)
console.log(student.subject.science)

student.xyz()