let sideMenu = document.querySelector('#side-menu');

function openMenu(){
    sideMenu.style.right = '0';
}
function closeMenu(){
    sideMenu.style.right = '-100%'
    console.log('clicked')
}