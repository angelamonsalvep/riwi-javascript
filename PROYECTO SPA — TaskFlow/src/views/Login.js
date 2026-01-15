import { store } from "../store/store.js"

store
export function Login() {
    return `
    <div class='bg-red-500 w-full h-screen flex justify-center items-center'>
        <form class="bg-gray-500 h-1/2 w-[70%] gap-4 border rounded flex flex-col justify-center items-center">
            <h1 class="">Login</h1>
            <input id="inpUser" class="p-1 rounded" id="userName" type="text" placeholder="Ingresar Usuario"/>
            <button id="btnLogin" class="bg-blue-200 rounded p-2">Ingresar</button>
        </form>
    </div>
    `
}

export function loginUser() {
    const btnLogin = document.getElementById('btnLogin')
    const inpUser = document.getElementById('inpUser')
    
    
    if (!store.user) {
        btnLogin.addEventListener('click', () => {
            store.user = inpUser.value
            location.hash = "#/home"
        })
    }

}

