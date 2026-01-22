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


export {
    getProjects
}