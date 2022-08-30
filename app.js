const rightBtn = document.querySelector('.right-arrow');
const leftBtn = document.querySelector('.left-arrow');
const slides = document.querySelector('.slides');

rightBtn.addEventListener('click', () => {
    
    if(window.innerWidth > 1440){
        slides.style.marginLeft = '-1440px';
    } else {
        slides.style.marginLeft = '-100vw'
    }
    
})

leftBtn.addEventListener('click', () => {
    slides.style.marginLeft = '0'
})