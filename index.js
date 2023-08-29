document.addEventListener('DOMContentLoaded', function () {
    const polaroidWrapper = document.getElementById('polaroid-wrapper');
    const removeButton = document.getElementById('remove-welcome-blurb');
    const imageWrapper = document.getElementById('portfolio-images');

    removeButton.addEventListener('click', () => {
        polaroidWrapper.style.cssText += "transform: translateX(-2000px);";
        imageWrapper.style.cssText += "opacity: 100%;"
    });
});

// const nav = document.getElementById('nav');
// const navLinks = document.getElementById('nav-links');

// nav.addEventListener('click', () => {
//     if (window.innerWidth <= 600) {
//         if (navLinks.classList.contains('not-active-link')) {
//             navLinks.classList.add('active-link');
//             navLinks.classList.remove('not-active-link');
//             navLinks.style.cssText += "transform: translateY(20px);display:inline-block;"
//         } else {
//             navLinks.classList.add('not-active-link');
//             navLinks.classList.remove('active-link');
//             navLinks.style.cssText += "transform: translateY(-20px);display:inline-block;"
//         }
//     }
// });