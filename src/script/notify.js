export const notifyOk = (title, message) => {
    console.info('[OK]', title, message);
};

export const notifyError = err => {
    console.error('[ERROR]', err);
};
