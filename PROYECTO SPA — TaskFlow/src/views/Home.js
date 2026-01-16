
export function Home (){
    return `
    <div class="h-[calc(100vh-64px)] flex flex-col justify-center items-center">
        <h1 class="text-6xl">Bienvenido a tú lista de tareas</h1>
        <p class="italic text-3xl">${sessionStorage.getItem('user')}</p>
        <a class="text-white bg-rose-500 p-2 mt-6 rounded" href="#/tasks">Ver mis tareas</a>
    </div>`
}

