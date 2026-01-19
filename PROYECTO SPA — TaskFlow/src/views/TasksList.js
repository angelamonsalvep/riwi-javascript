import { render } from "../../app.js"
import { TaskCard } from "../components/TaskCard.js"
import { store } from "../store/store.js"

TaskCard

export function TasksList() {
    const taskList = JSON.parse(sessionStorage.getItem('listTask')) || []

    return `
    <ul id="taskList" class="py-9 px-20">
        ${taskList.length
            ? taskList.map(e => TaskCard(e)).join("")
            : "<li>La lista está vacía</li>"
        }
    </ul>
    `
}



export function mountTasksList() {
    const taskList = JSON.parse(sessionStorage.getItem('listTask')) || []
    const list = document.getElementById("taskList")
    list.addEventListener("click", (e) => {
        if (e.target.type == "checkbox") {
            const id = e.target.dataset.id

            const item = taskList.find(t => t.id == id)
            item.state = e.target.checked

            const listItem = document.querySelector(`div[data-id="${id}"]`)
            const itemText = listItem.querySelector('p:last-child')
            if (item.state) {
                itemText.textContent = "Completado"
                itemText.classList.remove("text-red-500")
                itemText.classList.add("text-green-500")
            }
            else{
                itemText.textContent = "No completado"
                itemText.classList.remove("text-green-500")
                itemText.classList.add("text-red-500")
            }
            sessionStorage.setItem("listTask", JSON.stringify(taskList))
        }
        //Delete
        if (e.target.tagName == 'SPAN') {            
            const id = e.target.dataset.id
            const idToDelete =  taskList.findIndex( t => t.id == id)
            taskList.splice(idToDelete,1)
            sessionStorage.setItem("listTask", JSON.stringify(taskList))
            render(TasksList())
        }
        
    })
}





/* (() => {
            const li = document.createElement('li')
            li.innerText = "La lista está vacia"
            ul.appendChild(li)
        })() */