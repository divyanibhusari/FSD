//with using prompt:-
   //1.addition     
        //let num1 =Number(prompt("enter num1"))
        //let num2 =Number(prompt ("enter num2"))
        //let sum = num1 + num2
        //console.log("the sum" + num1 + "and " + num2 + "is" +sum)

        //let num1 =Number(prompt("enter num1"))
        //let num2 =Number(prompt ("enter num2"))
        //console.log("the sum" + num1 + "and " + num2 + "is" +(num1 + num2))


        //let answer = Number(prompt("Enter number 1")) +Number(prompt("Enter number 2"))
        //console.log(answer)
    //2.subtraction
        //let num1 =Number(prompt("enter num1"))
        //let num2 =Number(prompt ("enter num2"))
        //let sub = num1 - num2
        //console.log("the sub" + num1 + "and " + num2 + "is" +sub)

        //let num1 =Number(prompt("enter num1"))
        //let num2 =Number(prompt ("enter num2"))
        //console.log("the sub" + num1 + "and " + num2 + "is" +(num1 - num2))

        //let answer = Number(prompt("Enter number 1")) +Number(prompt("Enter number 2"))
        //console.log(answer)

    //3.Multiplication
        //let a=Number(prompt("enter a"))
        //let b=Number(prompt("enter b"))
        //let c=a*b
        //console.log("the mul" + a + "and" +b + "is" +c)
    //4.division
        //let a=Number(prompt("enter a"))
        //let b=Number(prompt("enter b"))
        //let c=a/b
        //console.log("the div" + a + "and" + b + "is" +c)
    //5.modulus    
       //let a=Number(prompt("enter a"))
       //let b=Number(prompt("enter b"))
       //let c=a%b
       //console.log("the mod" + a + "and" + b + "is" +c)

    //two line answer
    // wap in js take 2 number using prompt type cast then into numbers then perfor the addition and console.log the output.
    // try to make the code is lesser line possible
        //let answer = Number(prompt("Enter number 1")) +Number(prompt("Enter number 2"))
        //console.log(answer)


//Without using prompt:-
       //1.addition
         //let a=50;
         //let b=20;
         //console.log(a+b)


         //2.subtraction
         //let a=10;
         //let b=20;
         //console.log(a-b)

         //3.Multiplication
         //let a=50;
         //let b=20;
         //console.log(a*b)

         //4.division
         //let a=20;
         //let b=20;
         //console.log(a/b)


           //5.Modulus
         //let a=70;
         //let b=20;
         //console.log(a%b)

//Concatenation:-
                // prompt always returns us a string we have to typecast it for a different data type.

                // string + number = string
                // number + string = string
                // number + number = number
                // string + string = string
                
    //1.addition(string+string)
    // let fname="Divyani";
    // let lname="Bhusari";
    // let name =fname+lname;
    // console.log(name)

    // let fname="divyani"
    // let lname=20
    // let name =fname+lname;
    // console.log(name)

// TypeCasting:-// changing a data type of data to other data type
                // example casting a number to a string or vice-versa
                // number(int, float), string, boolean
    // number ->  string, number -> boolean
 
    // string -> number, string -> boolean

    // boolean -> number , boolean -> string

        // 1) number -> string
                // let data = 12345
                // console.log(" data type before "+typeof(data))

                // data = String(data)
                // data = data.toString()

                // console.log(" data type after "+typeof(data))

        // 2) number to boolean
                let data=1234
                console.log(" data type before "+typeof(data))

                 data = Boolean(data)
                console.log(data)

                // if value if greater than 0 then true else false

                 console.log(" data type after "+typeof(data))

        // 3) string -> number

            // let data = ""

            // console.log(" data type before "+typeof(data))

            // if a string is alpha numeric then the value will become NaN.
            // data = Number(data)

            // console.log(data)

            // console.log(" data type after "+typeof(data))

        // 4) string -> boolean
 
            // // if empty string then false, if the string has only false then false and if it has true then true

            // data = Boolean(data)
            // console.log(data)

            // console.log(" data type after "+typeof(data))


        // 5) Boolean -> number

            // let data = true

            // console.log(" data type before "+typeof(data))

            // data = Number(data)

            // if boolean has true then number will be 1 else 0

            // console.log(data)

            // console.log(" data type after "+typeof(data))

        // 6) boolean -> string

            //let data = false

            //console.log(" data type before "+typeof(data))

            //data = String(data)
            //data = data.toString()

            // if boolean has true then string will be true else false

            //console.log(data)

            //console.log(" data type after "+typeof(data))