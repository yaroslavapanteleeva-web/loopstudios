window.addEventListener('DOMContentLoaded', () => {
    // hamburger menu
    const $hamburger = document.querySelector('.hamburger');
    const $header = document.querySelector('#header');

    $hamburger.addEventListener('click', () => {
        $hamburger.classList.toggle('open');
        $header.classList.toggle('open');
    });
});


