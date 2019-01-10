"use strict";
// Shuffle
Array.from(document.querySelectorAll('ul.shuffle'))
    .forEach(function (listElt) {
    for (var i = listElt.children.length; i >= 0; i--) {
        listElt.appendChild(listElt.children[Math.random() * i | 0]);
    }
});
// Subscription
Array.from(document.querySelectorAll('form.subscribe'))
    .forEach(function (formElt) {
    formElt.onsubmit = function () {
        var subscribe = window['subscribe'];
        if (subscribe && typeof subscribe == 'function') {
            var values = Array.from(formElt.querySelectorAll('input[name][value]'))
                .reduce(function (acc, elt) {
                var name = elt.name;
                if (name) {
                    acc[name] = elt.value;
                }
                return acc;
            }, {});
            subscribe(values);
        }
        else {
            console.error('Missing subscribe function', formElt);
        }
    };
});
