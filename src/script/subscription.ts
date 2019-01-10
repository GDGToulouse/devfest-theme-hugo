// Subscription

interface Window {
    [key: string]: any;
}

interface FormValue {
    [key: string]: string;
}

Array.from(document.querySelectorAll<HTMLFormElement>('form.subscribe'))
    .forEach(formElt => {
        formElt.onsubmit = () => {
            const subscribe = window['subscribe'];
            if (subscribe && typeof subscribe == 'function') {

                const values = Array.from<HTMLInputElement>(formElt.querySelectorAll('input[name][value]'))
                    .reduce(
                        (acc, elt: HTMLInputElement) => {
                            const name = elt.name;
                            if (name) {
                                acc[name] = elt.value;
                            }
                            return acc;
                        },
                        {} as FormValue);
                subscribe(values);
            } else {
                console.error('Missing subscribe function', formElt);
            }
        };
    });
