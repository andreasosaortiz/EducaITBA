const MATERIAS_DOM = document.getElementsByClassName('materias')[0]

const listaMaterias = [
    {
        nombre: 'Visualización e interfaces',
        link: '#'
    },
    {
        nombre: 'Diseños de Aplicaciones Web',
        link: '#'
    },
    {
        nombre: 'Base de Datos',
        link: '#'
    }
]

listaMaterias.forEach(materia => {

    const materiaElement = document.createElement('article')
    materiaElement.classList.add('materia')
    materiaElement.innerHTML = `
        <div class='materia__buttons'>
            <a class='materia__link' href='../contenido/contenidos.html'>
                <button class='materia__button'>
                    <svg class='materia__icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                        <path fill-rule='evenodd'
                            d='M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z' />
                        <path
                            d='M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z' />
                        <path
                            d='M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z' />
                    </svg>
                    <p class='materia__text'>Contenidos</p>
                </button>
            </a>
            <a class='materia__link' href=''>
                <button class='materia__button'>
                    <svg class='materia__icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                        <path
                            d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
                    </svg>
                    <p class='materia__text'>Mensajes</p>
                </button>
            </a>
            <a class='materia__link' href=''>
                <button class='materia__button'>
                    <svg class='materia__icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                        <path
                            d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                        <path
                            d='M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z' />
                    </svg>
                    <p class='materia__text'>Foro</p>
                </button>
            </a>
            <a class='materia__link' href=''>
                <button class='materia__button'>
                    <svg class='materia__icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                        <path
                            d='M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z' />
                    </svg>
                    <p class='materia__text'>Portafolio</p>
                </button>
            </a>
        </div>
        <div class='materia__titles'>
            <a class='mataria__link' href='${materia.link}'>
                <h2 class='materia__title'>${materia.nombre}</h2>
            </a>
            <a class='mataria__link' href=''>
                <h3 class='materia__subtitle'>Docentes</h3>
            </a>
        </div>
    `

    MATERIAS_DOM.appendChild(materiaElement)

})