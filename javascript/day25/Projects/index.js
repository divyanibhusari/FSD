let tasks = []
let task = {}


let form = document.getElementById("form1")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event.target)

    console.log(event.target.length - 1)
    for (let i = 0; i < event.target.length - 1; i++) {
        console.log(event.target[i].name + ":" + event.target[i].value)
        let name = event.target[i].name
        let value = event.target[i].value
        task = {
            ...task, [name]: value,

        }
    }


    let TaskFeedBacks = document.getElementsByClassName("TaskFeedBack")

    let feedBackValue = ""

    for (let TaskFeedBack of TaskFeedBacks) {
        if (TaskFeedBack.checked) {
            feedBackValue = TaskFeedBack.value
        }
    }

    task.importance = feedBackValue

    console.log("new task feedback value is :", feedBackValue)
    console.log(task)

    tasks.push(task)
    console.log(tasks)
    refreshTbody()
    displayFunction(tasks)

});

//delete 
function deleteButton(dellindex) {
    console.log("delete button called by  ", dellindex)
   
    tasks = tasks.filter((task, index)=>{

    
        return dellindex !== index;
        

    })
    refreshTbody()
    displayFunction(tasks)
   
}
let refreshTbody = () => {
    let tasktable = document.getElementById("tasktable")
    let rows = document.querySelectorAll("#tasktable > tr")
    for (let row of rows) {
        tasktable.removeChild(row)
    }
}


let displayFunction = (tasks) => {
    let tasktable = document.getElementById("tasktable")
    let index = 0;
    for (let task of tasks) {
        let newTaskRow = document.createElement("tr")

        for (let key in task) {
            let column = document.createElement("td")
            column.innerText = task[key]
            newTaskRow.appendChild(column)
        }

        let deleteButton = document.createElement("td")
        deleteButton.innerHTML =  `<button id='deleteBtn' onclick='deleteButton (${index})'>delete</button>`

        newTaskRow.appendChild(deleteButton)
        tasktable.appendChild(newTaskRow)
        index++
    }
}
displayFunction(tasks)



let targetbtn = document.getElementById("Target-Btn-From");

let popupform = document.getElementById("popupform");

let ClosePopUpBtn = document.getElementById("popupform-close");

let removeButton = document.getElementById("Remove-btn");
targetbtn.addEventListener("click", (event) => {

    event.preventDefault()
    popupform.style.display = "inline-block";

});
ClosePopUpBtn.addEventListener("click", (event) => {
    event.preventDefault()
    popupform.style.display = "none";
});
