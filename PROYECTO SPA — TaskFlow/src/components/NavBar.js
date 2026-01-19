export function NavBar() {
  return `
    <nav class="w-full flex justify-center items-center gap-12 p-3">
      <a href="#/home">Home</a>
      <a href="#/tasks">Lista de tareas</a>
      <a href="#/add-task">Añadir Tarea</a>
      <a id="logout" class="bg-red-500 text-white p-2 rounded cursor-pointer">logout</a>
      <div>
        <label class="flex gap-2">
          <input id="toggle-dark-mode" class="sr-only peer" type="checkbox" value>
          <div id="toggle-component" class="relative w-14 h-7 bg-gray-200 rounded-full after:content-[''] after:h-6 after:w-6 after:top-[2px] after:start-[4px] after:transition-all after:bg-white after:absolute after:rounded-full peer-checked:bg-red-400 peer-checked:after:translate-x-full">
          </div>
          <span id="icon-dark-mode" class="material-symbols-outlined">
          light_mode
          </span>
        </label>
      </div>
    </nav>
  `;
}

export function logoutUser() {
  const logout = document.getElementById('logout')
  logout.addEventListener('click', () => {
    // store.user = null
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('listTask')
    location.hash = '#/login'
  })
}

