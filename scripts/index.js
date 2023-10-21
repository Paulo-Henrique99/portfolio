const elementProjects = document.getElementById('project__content')

const createImage = (projectImage) => {
    const elemPicture = document.createElement('picture')
    const elemImg  =document.createElement('img')

    elemImg.setAttribute('src', projectImage)

    elemImg.appendChild(elemImg)

    return elemPicture
}

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = projectName

    return elemStrong
}

const createTags = (projectTags) => {
    const elemTags = document.createElement('div')

    projectTags.forEach(tag => {
        const elemTag = document.createElement('span')
        elemTag.innerText = tag

        elemTags.appendChild(elemTag)
    })

    return elemTags
}

const createProject = (project) => {
    const elementProject = document.createElement('a')

    elemProject.setAttribute('href', project.link)
    elemProject.setAttribute('target', '_blank')

    elemProject.classList.add('project')

    // add imagem da capa
    elemProject.appendChild(createStrong(project.image))

    // add nome do projeto
    elemProject.appendChild(createStrong(project.name))

    // add tags do projeto
    elemProject.appendChild(createTags(project.tags))

    return elemProject
}

const loadProjects = (projects) => {
    projects.forEach(project => {
        elemProjects.appendChild(createProject(project))
    })
}

fetch('./projects.json').then(Response => Response.json()).then(loadProjects)