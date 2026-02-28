const drop = document.getElementById('dropdown')
const dropList = document.getElementById('dropdownCont')

drop.addEventListener('click', ()=> {
    dropList.classList.toggle('show');
    
})