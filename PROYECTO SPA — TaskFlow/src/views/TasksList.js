import { render } from "../../app.js"
import { store } from "../store/store.js"

export function TasksList() {
    const taskList = JSON.parse(sessionStorage.getItem('listTask')) || []

    return `
    <ul id="taskList" class="p-9">
        ${taskList.length
            ? taskList.map(plantillaCard).join("")
            : "<li>La lista está vacía</li>"
        }
    </ul>
    `
}

const plantillaCard = (element) => {
    return `
    <div data-id=${element.id} class="flex items-center justify-between border rounded p-4 m-2">
        <input ${element.state ? "checked" : ""} data-id=${element.id} id="taskState" type="checkbox"/>
        <div>
            <p>${element.name}</p>
            <p class="${element.state ? "text-green-500" : "text-red-500"}">${element.state ? "Completado" : "No completado"} </p>
        </div>
        <span data-id=${element.id} class="text-red-500 cursor-pointer material-symbols-outlined">
        delete
        </span>
    </div>`
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
        if (e.target.tagName == 'SPAN') {
            const id = e.target.dataset.id
            taskList.pop(id)
            console.log(e.target);
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