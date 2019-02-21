import './konami';

new Konami(function () {
    const elt = document.querySelector('.jumbo');
    if (elt) {
        elt.style.backgroundImage = 'url(/images/wtf/serious.jpg)';
    }
});