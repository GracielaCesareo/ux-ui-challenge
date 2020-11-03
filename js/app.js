const searchButton = document.getElementById('searchButton') 

const toogleClassButton = () => {
    const element    = document.getElementById('inputSearch');
    const searchIcon = document.getElementsByClassName('fa-search')[0];
    const closeIcon  = document.getElementsByClassName('fa-times')[0];

    element.classList.toggle("active");

    element.classList.contains('active')
    ? 
    (closeIcon.style.display = 'block', searchIcon.style.display = 'none') 
    :
    (closeIcon.style.display = 'none', searchIcon.style.display = 'block', element.value = "" )
}

searchButton.addEventListener('click', toogleClassButton)