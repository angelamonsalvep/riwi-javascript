import { store } from "../store/store.js"
import { render } from "../../app.js"
/* components */
import { Login, Home, TasksList, AddTask, addTask, mountTasksList } from "../views/index.js"
import { loginUser } from "../views/Login.js"
import { logoutUser } from "../components/NavBar.js"



export function router(){
    let route
    // route = !store.user ? location.hash = "#/login" : location.hash
    route = !sessionStorage.getItem('user') ? location.hash = "#/login" : location.hash
    switch (route) {
        case '#/login':
            render(Login())
            loginUser()
            sessionStorage.clear()
            break;
        case '#/home':
            render(Home())
            logoutUser()
            break;
        case '#/tasks':
            render(TasksList())
            logoutUser()
            mountTasksList()
            break;
        case '#/add-task':
            render(AddTask())
            logoutUser()
            addTask()
            break;
        default:
            break;
    }
}





// return `${!user ? `<div>${login()}</div>` : '<p>logued</p>'}`

