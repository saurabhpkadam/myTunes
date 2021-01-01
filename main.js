const btn = document.querySelector('.menu-btn');
const navList = document.querySelectorAll('.hidden-li');
const nav = document.querySelector('.navbar');

btn.addEventListener('click', () =>{
    nav.classList.toggle('h-resp');
    nav.classList.toggle('c-resp');
});

let menu = false;

btn.addEventListener('click', toggle);

function toggle() {
    if(!menu){
        navList.forEach(item => item.classList.add('show'));

        menu = true;
    }else{
        navList.forEach(item => item.classList.remove('show'));

        menu = false;
    }
}