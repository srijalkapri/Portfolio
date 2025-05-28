let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


let titles = ["Machine learner . . .", "Web Developer . . .", ]; 
let titleElement = document.getElementById("changing-text");
let titleIndex = 0;
let charIndex = 0;
let typingDelay = 75;
let erasingDelay = 50;
let newTitleDelay = 700; 

function typeTitle() {
    if (charIndex < titles[titleIndex].length) {
        titleElement.textContent += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, typingDelay);
    } else {
        setTimeout(eraseTitle, newTitleDelay);
    }
}

function eraseTitle() {
    if (charIndex > 0) {
        titleElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseTitle, erasingDelay);
    } else {
       
        let nextIndex;
        do {
            nextIndex = (titleIndex + 1) % titles.length;
        } while (nextIndex === titleIndex); 

        titleIndex = nextIndex; 
        setTimeout(typeTitle, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeTitle, newTitleDelay);
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    
    reset: true,
    distance :'80px',
    duration : 2000,
    delay :50

 });

 ScrollReveal().reveal('.home-content, .heading', { origin : "left"});
 ScrollReveal().reveal('.home-img,.about-img , .services-container, .portfolio-box, .contact form', { origin : "buttom"});
 ScrollReveal().reveal('.home-content h1', { origin : "left"});
 ScrollReveal().reveal('.home-content p , .about-content', { origin : "right"});
 
