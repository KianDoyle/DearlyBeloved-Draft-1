const logoText = document.querySelector("#logo-text");
const background = document.querySelector("#background");
const logoImg = document.querySelector("#logo-img");
const polaroid = document.querySelector("#polaroid-wrapper");

document.addEventListener('DOMContentLoaded', function () {
    document.body.style.visibility = 'visible';
    const polaroidWrapper = document.getElementById('polaroid-wrapper');
    const removeButton = document.getElementById('remove-welcome-blurb');
    const imageWrapper = document.getElementById('portfolio-images');

    // Move logo text
    const anim1 = gsap.timeline();
    anim1.to(logoText, {
        opacity: 0,
        y: "100%",
        display: "none",
        duration: 0.5,
        ease: "ease.out",
        delay: 1,
    });

    // Check for window size
    if (window.innerWidth > 800) {
        // Background animation
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

        // Logo image animation
        const anim3 = gsap.timeline();
        anim3.to(logoImg, {
            width: "825px", 
            filter: "blur(15px)", 
            duration: 1, 
            ease: "power2.inOut", 
            delay: 1.5, 
        });

        console.log(window.innerWidth);
    } 
    // Polaroid animation
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

    removeButton.addEventListener('click', () => {
        requestAnimationFrame(() => {
            polaroidWrapper.style.transform = "translateX(-2000px)";
            imageWrapper.style.opacity = "100%";
        });
    });
});

