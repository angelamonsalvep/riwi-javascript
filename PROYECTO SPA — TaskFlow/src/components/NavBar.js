import { store } from "../store/store.js";

export function NavBar() {
    return `
    <nav class="w-full flex justify-center gap-12">
      <a href="#/home">Home</a>
      <a href="#/tasks">Lista de tareas</a>
      <a href="#/add-task">Añadir Tarea</a>
      <a id="logout" class="bg-red-200 p-2 rounded cursor-pointer">logout</a>
    </nav>
  `;
}

export function logoutUser(){
    const logout = document.getElementById('logout')
    logout.addEventListener('click', () => {
        // store.user = null
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('listTask')
        location.hash = '#/login'
    })
}

