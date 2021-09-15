let open = document.querySelector('.active');
let close = document.querySelector('.exist');
let hom = document.querySelector('.ho')
let tl = gsap.timeline();



tl.to('.overlay', {opacity: 1  ,x:0, scale:1, pointerEvents:'auto', duration:.3});
tl.to('.stagger', {x:0,opacity:1, stagger:.2 }, "-=.3");
tl.pause();

open.addEventListener('click', () => {
    tl.play();
});
close.addEventListener('click', () => {
    tl.reverse();
});

hom.addEventListener('click', () => {
    tl.reverse();
}); 
// function to get time today