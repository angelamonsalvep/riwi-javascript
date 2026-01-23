async function getProjects(){
    try {
        const response = await fetch('http://localhost:3000/projects')
        const data = await response.json()
        sessionStorage.setItem('projects', JSON.stringify(data))
        return data
    } catch (error) {
        console.log(error);
    }
}

function filterProjects(projects) {    
    const actives = projects.filter(a => a.state == 'active')
    const pendings = projects.filter(a => a.state == 'pending')
    const finisheds = projects.filter(a => a.state == 'finished')
    return {
        projectsActives : {
            projects: actives,
            amount : actives.length
        },
        projectsPending:{
            projects:pendings,
            amount:pendings.length
        },
        projectsFinished:{
            projects:finisheds,
            amount:finisheds.length
        }
    }
} 

export {
    getProjects,
    filterProjects
}