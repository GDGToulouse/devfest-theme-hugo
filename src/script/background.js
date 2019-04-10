import './konami';

new Konami(function () {
    const elt = document.querySelector('.jumbo');
    if (elt) {
        elt.style.backgroundImage = 'url(/images/wtf/serious.jpg)';
    }
});

setTimeout(function () {
    const jumboOverlay = document.querySelector('#jumbo-overlay');
    if (jumboOverlay) {
        jumboOverlay.classList.add('show');
    }
}, 500);
