let tasks = [{ TaskName: "Divyani", Taskdescription: "Hello i am good", TaskDate: "21/3/2032", TaskTime: "12:34", TaskFeedBack: "less" }]
let task = {}

let form = document.getElementById("form1")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log(event.target[0].value)
    console.log(event.target.length - 1)
       for(let i=0;i<event.target.length-1;i++){
        console.log(event.target[i].name + ":" +event.target[i].value)
        let name = event.target[i].name
        let value = event.target[i].value
        // let TaskFeedBack = event.target[i].TaskFeedBack
         task = {
            ...task,[name]:value,
            // ...task,[TaskFeedBack]:value,
        }
       }
       console.log("new task")
       console.log(task)
       console.log(task)
       tasks.push(task)
       console.log(tasks)
       refreshTbody()
       displayFunction(tasks)
});
let refreshTbody = ()=>{
    let tasktable = document.getElementById("tasktable")
    let rows =document.querySelectorAll("#tasktable > tr")
    for(let row of rows){
        tasktable.removeChild(row)
    }
}


let displayFunction = (tasks) => {
    let tasktable = document.getElementById("tasktable")
    for(let task of tasks){
        let newTaskRow = document.createElement("tr")
        for (let key in task){
            let column = document.createElement("td")
            column.innerText = task[key]
            newTaskRow.appendChild(column)
        }
        tasktable.appendChild(newTaskRow)
    }
}
displayFunction(tasks)
let targetbtn = document.getElementById("Target-Btn-From");

let popupform = document.getElementById("popupform");

let ClosePopUpBtn = document.getElementById("popupform-close");


targetbtn.addEventListener("click", (event) => {
    event.preventDefault()
    popupform.style.display = "inline-block";

});
ClosePopUpBtn.addEventListener("click", () => {
    popupform.style.display = "none";
});





