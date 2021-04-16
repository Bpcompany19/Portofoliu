const lightbox = document.createElement ('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll ('.img');
images.forEach (image => {
    image.addEventListener('click', e => {
        lightbox.classList.add ('activ');
        const img = document.createElement('img') ;
        img.src = image.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img) ; 
    })
})

lightbox.addEventListener('click', e =>{
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('activ');
})

//  script for hamburger

const togglebutton = document.getElementsByClassName('toggle-btn') [0];
const links = document.getElementsByClassName('links') [0];
const span =document.getElementsByClassName('red-text')[0];
const site=document.querySelectorAll('body');

togglebutton.addEventListener('click', () => {
    links.classList.toggle('activ-ham');
    site.style.opacity('0.7');
    
})

// clasa
togglebutton.addEventListener('click', () =>{
    span.classList.remove('red-text');
})

