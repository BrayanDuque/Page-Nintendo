const menuButton = document.getElementById('mobile-menu');


menuButton.addEventListener('click', ()=>{
    const menu = document.querySelector('.mobile-links');
    menu.classList.toggle('hidden');
})