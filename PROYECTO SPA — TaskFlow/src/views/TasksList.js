import { render } from "../../app.js"
import { store } from "../store/store.js"

export function TasksList() {
    return `
    <ul id="taskList">
        ${store.tasks.length
            ? store.tasks.map(plantillaCard).join("")
            : "<li>La lista está vacía</li>"
        }
    </ul>
    `
}

const plantillaCard = (element) => {
    return `
    <div data-id=${element.id} class="border rounded p-2">
        <input data-id=${element.id} id="taskState" type="checkbox"/>
        <p>${element.name}</p>
        <p>${element.state ? "Completado" : "No Completado"}</p>
    </div>`
}


/* export function mountTasksList() {
    const list = document.getElementById("taskList")
    list.addEventListener('click', (e) =>{
        if (e.target.type == "checkbox") {
            const id = e.target.dataset.id
            const task = store.tasks.find(t => t.id == id)
            task.state = e.target.checked
            const item = list.querySelector(`div[data-id="${id}"]`)
            const stateText = item.querySelector('p:last-child') 
            task.state ? stateText.textContent = "Completado" : stateText.textContent = "No Completado" 
            console.log(e.target.checked);
            render(TasksList())      // re-render
            mountTasksList()
            
            
        }
        
    })
} */
export function mountTasksList() {
  const list = document.getElementById("taskList")

  list.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const id = Number(e.target.dataset.id)
      const task = store.tasks.find(t => t.id === id)

      task.state = e.target.checked   // ✅ ASIGNACIÓN

      render(TasksList())             // 🔁 re-render
      mountTasksList()                // ✅ solo UNA vez tras render
    }
  })
}





/* (() => {
            const li = document.createElement('li')
            li.innerText = "La lista está vacia"
            ul.appendChild(li)
        })() */