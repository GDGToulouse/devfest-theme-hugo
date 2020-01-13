// Shuffle
document.querySelectorAll('ul.shuffle')
  .forEach(listElt => {
    if (listElt.children.length) {
      for (let i = listElt.children.length; i >= 0; i--) {
        listElt.appendChild(listElt.children[Math.random() * i | 0]);
      }
    }
  });
