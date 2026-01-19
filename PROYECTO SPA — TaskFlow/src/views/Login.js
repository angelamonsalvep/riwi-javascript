import { store } from "../store/store.js"

store
export function Login() {
    return `
    <div class='w-full h-screen flex justify-center items-center'>
        <form class="bg-stone-100 h-1/2 w-[70%] gap-4 border rounded flex flex-col justify-center items-center">
            <h1 class="">Login</h1>
            <input id="inpUser" class="p-1 rounded" id="userName" type="text" placeholder="Ingresar Usuario"/>
            <button id="btnLogin" class="bg-rose-200 rounded p-2">Ingresar</button>
        </form>
    </div>
    `
}

export function loginUser() {
    const btnLogin = document.getElementById('btnLogin')
    const inpUser = document.getElementById('inpUser')
    

    if (/* !store.user */ !sessionStorage.getItem('user')) {
        btnLogin.addEventListener('click', () => {
            sessionStorage.setItem('user', inpUser.value)
            // store.user = inpUser.value
            location.hash = "#/home"
        })
    }

}

