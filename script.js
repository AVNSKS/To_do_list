const body=document.body
const input=document.getElementById("searchbar");
let taskName=""
const button=document.getElementById("addbutton")
const taskContainer=document.getElementById("task-container")

const delButton = document.getElementById("delButton");
input.addEventListener("keyup",(e)=>{
    taskName=e.target.value
    console.log(taskName)
})

button.addEventListener("click" ,()=>{
    const taskItem=document.createElement("div")

    const deleteButton =document.createElement("div")
    deleteButton.innerHTML="❌";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click",(e)=>
    {
        e.target.parentElement.remove();
    })

    taskItem.classList.add("task-item")
    taskItem.innerHTML=taskName
    taskItem.append(deleteButton)
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("selected");
    });
    taskContainer.append(taskItem)
    taskName=""
    input.value=""
})

delButton.addEventListener("click", () => {
    const selectedItems = document.querySelectorAll(".task-item.selected");
    selectedItems.forEach(item => item.remove());
    console.log("hello");
});



