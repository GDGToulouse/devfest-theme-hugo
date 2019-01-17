// Shuffle
document.querySelectorAll('ul.shuffle')
    .forEach(listElt => {
        for (let i = listElt.children.length; i >= 0; i--) {
            listElt.appendChild(listElt.children[Math.random() * i | 0]);
        }
    });
