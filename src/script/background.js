import './konami';

const elt = document.querySelector('.home .jumbo');
if (elt) {
    const i = 1 + (Math.random() * 4 | 0);
    elt.style.setProperty('--bg-img', `url(/images/backgrounds/back-${i}.jpg)`);
}

new Konami(function () {
    const elt = document.querySelector('.jumbo');
    if (elt) {
        elt.style.setProperty('--bg-img', 'url(/images/wtf/serious.jpg)');
    }
});