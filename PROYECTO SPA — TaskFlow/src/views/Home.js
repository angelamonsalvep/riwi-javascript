import { store } from "../store/store.js"

export function Home (){
    return `
    <div class="h-[calc(100vh-40px)] flex flex-col justify-center items-center">
        <h1 class="text-6xl">Bienvenido</h1>
        <p class="text-3xl">${sessionStorage.getItem('user')}</p>
    </div>`
}