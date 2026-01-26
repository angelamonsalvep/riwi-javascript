
class Project {
    constructor(name, city, longitude, latitude, state) {
        this.name = name
        this.city = city
        this.longitude = longitude
        this.latitude = latitude
        this.state = state
    }
}

async function createProject(name, city, longitude, latitude, state) {
    const project = new Project(name, city, longitude, latitude, state)
    try {
        const response = fetch('http://localhost:3000/projects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        })
        console.log(response);
        if (!response.ok) throw new Error('Error to create project')

    } catch (error) {
        console.error(error);
    }
}

async function getProjects() {
    if (sessionStorage.getItem('projects'))
        return JSON.parse(sessionStorage.getItem('projects'))
    try {
        const response = await fetch('http://localhost:3000/projects')
        const data = await response.json()
        sessionStorage.setItem('projects', JSON.stringify(data))
        return data
    } catch (error) {
        console.log(error);
    }
}

async function filterProjects(projects) {
    projects = await getProjects()
    const actives = projects.filter(a => a.state == 'active')
    const pendings = projects.filter(a => a.state == 'pending')
    const finisheds = projects.filter(a => a.state == 'finished')
    return {
        projectsActives: {
            projects: actives,
            amount: actives.length
        },
        projectsPending: {
            projects: pendings,
            amount: pendings.length
        },
        projectsFinished: {
            projects: finisheds,
            amount: finisheds.length
        }
    }
}

export {
    getProjects,
    filterProjects,
    createProject
}