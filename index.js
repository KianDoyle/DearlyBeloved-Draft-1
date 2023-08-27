document.addEventListener('DOMContentLoaded', function () {
    const polaroidWrapper = document.getElementById('polaroid-wrapper');
    const removeButton = document.getElementById('remove-welcome-blurb');
    const imageWrapper = document.getElementById('portfolio-images');

    removeButton.addEventListener('click', () => {
        polaroidWrapper.style.cssText += "transform: translateX(-2000px);";
        imageWrapper.style.cssText += "opacity: 100%;"
    });
});