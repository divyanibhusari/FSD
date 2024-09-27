// Math :- it is not create a instance
//An intrinsic object that provides basic mathematics functionality and constants.
//proprty:-
console.log(Math.PI)        //PI:-This is the ratio of the circumference of a circle to its diameter.
console.log(Math.E)         //E:-The mathematical constant e. This is Euler's number, the base of natural logarithms
console.log(Math.SQRT1_2)   //SQRT1_2:-The square root of 0.5, or, equivalently, one divided by the square root of 2.
console.log(Math.LOG10E)
console.log(Math.LOG2E)

// Method:-

console.log(Math.abs(3))    //Returns the absolute value of a number (the value without regard to whether it is positive or negative).
                            //For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.abs(-3))    //same value return in this method
let num = 3
console.log(Math.sqrt(3))
console.log(Math.sqrt(4))
console.log(Math.cbrt(125))


// round of:- 1.3 1.5 2.1

console.log(Math.round(12.5))   //12.5 it's exist then round up 13
console.log(Math.round(21.1))   //21.1 it's exist then round up 21
console.log(Math.round(12.345267899))
console.log(Math.round(12.52457))
console.log(Math.round(-12.52457))


// floor :- round up the value is front side
            //Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.floor(12.34467878))

console.log(Math.floor(14.99999))


// ceil:- round up the value is back side
        //Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.ceil(12.0001))

console.log(Math.ceil(13.99999))

//  power(pow) :- square of the number
                //Returns the value of a base expression taken to a specified power.
console.log(Math.pow(2,2))            

console.log(Math.pow(2,4))             // x — The base value of the expression.

console.log(Math.pow(2,8))              // y — The exponent value of the expression.


// max :-Math.max() The largest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN.Returns -Infinity if no parameters are provided.    
                    //syntax:-
                        // Math.max(value1)
                        // Math.max(value1, value2)
                        // Math.max(value1, value2, /* …, */ valueN)
console.log(Math.max(1,3,5))

//destrutive
let arr1 = [21,34,56]
console.log(Math.max(...arr1))

//min:-
console.log(Math.min(21,67,98))


let arr2 = [23,54,1]
console.log(Math.min(...arr2))


//ramdom:-Returns a pseudorandom number between 0 and 1.
console.log(Math.random(1))
console.log(Math.random().toFixed())  //tofixed:-Returns a string representing a number in fixed-point notation.


