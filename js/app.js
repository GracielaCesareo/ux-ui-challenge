/* Dynamic Projects Load*/ 

import projectsData from './data.js';

const cardTemplate = (card) => {

    return `
            <div class="card-project">
                <span class="mark-project"><i class="fas fa-star"></i></span>
                <p class="name-project">${card.title}</p>
                <p class="date-project">${card.date}</p>
                <p class="description-project">${card.description}</p>
                <p class="estimation-project">
                Total Estimates: <span>${card.estimation}</span>  
                </p>
            </div>
    `

}

document.getElementById('contentProjects').innerHTML = `${projectsData.map(cardTemplate).join('')}`

/* Search interaction for desktop */ 
const searchButton = document.getElementById('searchButton') 

const toggleClassButtonSearch = () => {
    const element    = document.getElementById('inputSearch');
    const searchIcon = document.getElementsByClassName('fa-search')[0];
    const closeIcon  = document.getElementsByClassName('fa-times')[1];

    element.classList.toggle("active");

    element.classList.contains('active')
    ? 
    (closeIcon.style.display = 'block', searchIcon.style.display = 'none') 
    :
    (closeIcon.style.display = 'none', searchIcon.style.display = 'block', element.value = "" )
}

searchButton.addEventListener('click', toggleClassButtonSearch)

/* Sing up button container interaction */ 
const chevronButton = document.getElementById('downArrow')

const toggleClassButtonArrow = () =>{
    const containerButton  = document.getElementsByClassName('cta-sing-out')[0]

    chevronButton.classList.toggle("open")
}

chevronButton.addEventListener('click', toggleClassButtonArrow)

/* Mobile menu interaction */ 
const mobileMenuButton = document.getElementById('mobileMenu')

const toggleClassMobileButton = () => {
    const navigationContainer = document.getElementsByClassName('navigation-container')[0]
    const closeIconButton     = document.getElementsByClassName('close')[0]
    const menuIcon            = document.getElementsByClassName('menu')[0]

    mobileMenuButton.classList.toggle("open-menu")
    mobileMenuButton.classList.contains('open-menu')
    ?
    (navigationContainer.style.opacity = 1, closeIconButton.style.display = 'block', menuIcon.style.display = 'none')
    :
    (navigationContainer.style.opacity = 0, closeIconButton.style.display = 'none', menuIcon.style.display = 'block')
}

mobileMenuButton.addEventListener('click', toggleClassMobileButton)