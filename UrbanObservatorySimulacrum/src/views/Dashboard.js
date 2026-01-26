import { filterProjects, getProjects } from "../services/projectsServices.js";
import { ListProyect } from "./ListProjects.js";
import { render } from '../core/render.js'
let stats = null
let status = 'all'
export async function Dashboard(listaProjects = JSON.parse(sessionStorage.getItem('projects'))) {
    stats = await filterProjects()

    return `
    <!-- Main Content -->
    <main>
        <!-- Search Section -->
        <section class="search-section">
            <div class="container">
                <div class="search-container">
                    <form class="search-form">
                        <div class="search-input-wrapper">
                            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <input type="text" class="search-input" placeholder="Buscar ciudad o proyecto...">
                        </div>
                        <div class="search-filters">
                            <select class="select-input">
                                <option value="">Todos los estados</option>
                                <option value="active">Activo</option>
                                <option value="finished">Finalizado</option>
                                <option value="pending">Pendiente</option>
                            </select>
                            <button type="button" class="filter-button">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="container">
            <div class="stats-grid">
                <div class="stat-card green">
                    <p class="stat-label">Proyectos Activos</p>
                    <p class="stat-value">${stats.projectsActives.amount}</p>
                </div>
                <div class="stat-card yellow">
                    <p class="stat-label">En Desarrollo</p>
                    <p class="stat-value">${stats.projectsPending.amount}</p>
                </div>
                <div class="stat-card gray">
                    <p class="stat-label">Finalizados</p>
                    <p class="stat-value">${stats.projectsFinished.amount}</p>
                </div>
            </div>
        </section>

        <!-- Projects Grid -->
        ${await ListProyect(listaProjects)}
    </main>

    `
}

document.addEventListener('change', async (e) => {
    if (e.target.classList.contains('select-input')) {
        let status = e.target.value
        console.log(status);
        switch (status) {
            case '':
                render(await Dashboard(stats.projectsActives.projects.concat(stats.projectsPending.projects, stats.projectsFinished.projects)))
                break;
            case 'pending':
                render(await Dashboard(stats.projectsPending.projects))
                break;
            case 'finished':
                render(await Dashboard(stats.projectsFinished.projects))
                break;
            case 'active':
                render(await Dashboard(stats.projectsActives.projects))
                break;
            default:
                render(await Dashboard(stats.projectsActives.projects.concat(stats.projectsPending.projects, stats.projectsFinished.projects)))
                break;
        }
        
        //filtro los proyectos por estado
        //vuelvo a renderizar la vista con los proyectos filtrados
    }
})
