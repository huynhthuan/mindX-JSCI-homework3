const getDateNow = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return (today = mm + '/' + dd + '/' + yyyy);
};

// Clear all input
const clearInputForm = (form_el) => {
    form_el.querySelectorAll('input').forEach((item) => {
        {
            item.value = '';
        }
    });
};

export { getDateNow, clearInputForm };
