import {notifyError, notifyOk} from './notify';

document.querySelectorAll('.subscribe')
    .forEach(formElt => formElt.style.display = 'flex');

function subscribe(event) {
    try {
        const email = this.email.value;
        const doc = {email};
        firestore.collection('subscribers')
            .doc(email)
            .set(doc)
            .then(docref => notifyOk('Subscription saved', docref.id))
            .catch(notifyError);
    } catch (e) {
        notifyError('Oops!', e);
    }
    event.preventDefault();
    return false;
}

document.querySelectorAll('form.subscribe')
    .forEach(formElt => formElt.addEventListener('submit', subscribe, true));
