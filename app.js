
// Variables for slides buttons
const rightBtn = document.querySelector('.right-arrow');
const leftBtn = document.querySelector('.left-arrow');
const slides = document.querySelector('.slides');

// Variables for slides icons
const iconsText = document.getElementsByClassName('icons-text');
const icon = document.getElementsByClassName('icon');

// Slides buttons functions
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

//Slides icons functions

for(let i = 0; i< icon.length; i++){
    icon[i].addEventListener('mouseenter',() => {
       iconsText[i].style.display = 'block';
    })
    icon[i].addEventListener('mouseleave',() => {
        iconsText[i].style.display = 'none';
     })
}