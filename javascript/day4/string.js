// String Manipulation:-
    //1.String.length()
        let data="Some String Function";
        console.log(data.length)
        console.log(data)

    // 2.String.Uppercase()
        let value="hello i am good girls"
        console.log(value)   
        console.log(value.length)
        console.log(value.toUpperCase())
      //String.tolocaluppercase()
        console.log(value.toLocaleUpperCase())
    
    // 3.String.Lowercase()
        let function1="HIIIIIIIIIIIIIIIIIILLLLLLLLLLLLLLLLLLLLLL" 
        console.log(function1) 
        console.log(function1.length)
        console.log(function1.toLowerCase())  
      //String.tolocallowercase()
        console.log(function1.toLocaleLowerCase())

    // 4. String.trim()
        let a="                              Hello                                               "
        console.log(a)
        console.log(a.length)
        console.log(a.trim()) //stationry position  
        a =a.trim()
        console.log(a.length)

    // 5.String.ChartAt()
        let c="string i"
        console.log(c)
        console.log(c.length)
        console.log(c.charAt(0))
        console.log(c.charAt(1))
        console.log(c.charAt(2)) 
        console.log(c.charAt(3))
        console.log(c.charAt(4))
        console.log(c.charAt(5))
        console.log(c.charAt(6))  //space
        console.log(c.charAt(7))

    // 6.String.indexOf():-Same no. of letter return us a same value
        let b="helqos sot"
        console.log(b)
        console.log(b.length)
        console.log(b.indexOf("h"))
        console.log(b.indexOf("e"))
        console.log(b.indexOf("l")) 
        console.log(b.indexOf("p"))
        console.log(b.indexOf("o"))
        console.log(b.indexOf("s"))
        console.log(b.indexOf("p"))
        console.log(b.lastIndexOf("s"))

    //7.String.match():-letter and word lso be match the string.
        let d="Hey I am"
        console.log(d)
        console.log(d.length)
        console.log(d.match("I"))
        console.log(d.match("Hey"))
        console.log(d.match("e"))

    //8.String.replace()
        let e="Any data present in string."
        console.log(e)
        console.log(e.length)
        e = e.replace("A" , "a")
       //string.replaceAll() 
        e = e.replaceAll("data" , "Words")
        e = e.replace("in", "at" )
        console.log(e)

    // 9.String.Slice()
        let f="String Manipulation"
        let g =f.slice(0,9)
        console.log(f)
        console.log(f.length)
        console.log(g)

    //10.String.substring()        
        let h="String Manipulation"
        let i =h.slice(0,6)
        console.log(h)
        console.log(h.length)
        console.log(i)

