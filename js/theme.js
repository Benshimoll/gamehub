const distinct = document.body.id
const dark = document.getElementById('darkMode')
const light = document.getElementById('lightMode')
const root = document.documentElement;
const arrow = document.getElementById('arrowDropdown')


function aplicarTemaClaro() {
    localStorage.setItem('theme', 'light')
    root.setAttribute('data-theme', 'light')
    if(distinct === 'paginaInicio'){
        arrow.src = 'assets/icons/arrow_dropdown_dark.png'
    } else {
        arrow.src = '../assets/icons/arrow_dropdown_dark.png'
    }
}

function aplicarTemaOscuro() {
    localStorage.removeItem('theme', 'light')
    root.removeAttribute('data-theme')
    if (distinct === 'paginaInicio') {
        arrow.src = 'assets/icons/arrow_drop_down_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
    } else {
        arrow.src = '../assets/icons/arrow_drop_down_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
    }
}


light.addEventListener('click', aplicarTemaClaro)
dark.addEventListener('click', aplicarTemaOscuro)


const theme = localStorage.getItem('theme')

if (theme === 'light') {
    aplicarTemaClaro() 
} else {
    aplicarTemaOscuro()
}