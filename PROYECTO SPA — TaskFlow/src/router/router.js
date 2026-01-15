import { store } from "../store/store.js"
import { render } from "../../app.js"
/* components */
import { Login, Home, Services, Contact } from "../views/index.js"
import { loginUser } from "../views/Login.js"
import { logoutUser } from "../components/NavBar.js"


export function router(){
    let route
    route = !store.user ? location.hash = "#/login" : location.hash
    switch (route) {
        case '#/login':
            render(Login())
            loginUser()
            break;
        case '#/home':
            render(Home())
            logoutUser()
            break;
        case '#/services':
            render(Services())
            logoutUser()
            break;
        case '#/contact':
            render(Contact())
            logoutUser()
            break;
        default:
            break;
    }
}





// return `${!user ? `<div>${login()}</div>` : '<p>logued</p>'}`

