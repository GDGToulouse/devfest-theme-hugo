import './konami';

new Konami(function () {
    const elt = document.querySelector('.jumbo');
    if (elt) {
        elt.style.setProperty('--bg-img', 'url(/images/wtf/serious.jpg)');
    }
});