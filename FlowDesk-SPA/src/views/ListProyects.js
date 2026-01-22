import { render } from "../core/render.js"
import { getProjects } from "../services/projectsServices.js"
import { store } from "../state/store.js"

export async function ListProyects() {
    if (store.hasLoadedProjects) {
        store.loading = true
        render(ListProyects())

        try {
            store.projects = await getProjects()
            store.error = null
        } catch (error) {
            store.error = error
        }finally{
            store.loading = false
        }

        if (store.loading) return `<p>Cargando proyectos...</p>` 


  if (store.error) return `<p>Error: ${store.error}</p>`;

    }
    return `
    Lista de proyectos
    `
}