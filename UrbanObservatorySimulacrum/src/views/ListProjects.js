import { CardProject } from "../components/CardProject.js";
import { getWeather } from "../services/meteoServices.js";
import { getProjects } from "../services/projectsServices.js";


export async function ListProyect() {
    const projects = await getProjects()
    // const projects = sessionStorage.getItem('projects') ? JSON.parse(sessionStorage.getItem('projects')) : await getProjects()

    //obtener la lista en base a la lista de projectos
    const weather = await Promise.all(
        projects.map(p => getWeather(p.longitude, p.latitude))
    )

    /* en el .map() NO OLVIDAR EL join('') PARA QUE FUNCIONE*/
    return `
    <section class="container">
            <div class="projects-grid">
               ${projects.map((p, i) => CardProject(p, weather[i])).join('')}
            </div>
        </section>
    `
}