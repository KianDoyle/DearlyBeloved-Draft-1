const logoText = document.querySelector("#logo-text");
const background = document.querySelector("#background");
const logoImg = document.querySelector("#logo-img");
const polaroid = document.querySelector("#polaroid-wrapper");

const anim1 = gsap.timeline();
anim1.to(logoText, {
    opacity: 0,
    y: "100%", 
    display: "none", 
    duration: 0.5, 
    ease: "ease.out", 
    delay: 1, 
});

const anim2 = gsap.timeline();
anim2.to(background, {
    width: "825px", 
    duration: 1, 
    ease: "power2.inOut", 
    delay: 1.5, 
    onComplete: function () {
        background.style.overflow = "visible";
    }
});

const anim3 = gsap.timeline();
anim3.to(logoImg, {
    width: "825px", 
    filter: "blur(15px)", 
    duration: 1, 
    ease: "power2.inOut", 
    delay: 1.5, 
});

const anim4 = gsap.timeline();
anim4.to(polaroid, {
    top: "90px",
    duration: 0.9, 
    ease: "ease.inOut",
    delay: 2.2,
}).to(polaroid, {
    top: "100px",
    duration: 0.2,
    ease: "bounce.out",
});

document.addEventListener('DOMContentLoaded', function () {
    const polaroidWrapper = document.getElementById('polaroid-wrapper');
    const removeButton = document.getElementById('remove-welcome-blurb');
    const imageWrapper = document.getElementById('portfolio-images');

    anim1.play();
    anim2.play();
    anim3.play();    
    anim4.play();

    removeButton.addEventListener('click', () => {
        requestAnimationFrame(() => {
            polaroidWrapper.style.transform = "translateX(-2000px)";
            imageWrapper.style.opacity = "100%";
        });
    });
});
