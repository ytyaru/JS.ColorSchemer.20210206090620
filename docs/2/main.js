window.addEventListener('load', (event) => {
    document.querySelector(`#back-color`).addEventListener('change', (event) => {
        const colors = ColorSchemer.scheme(event.target.value);
        document.querySelector(`#fore-color`).setAttribute('value', colors.fore);
        document.querySelector(`#selected-back-color`).setAttribute('value', colors.selectedBack);
        document.querySelector(`#selected-fore-color`).setAttribute('value', colors.selectedFore);
        document.querySelector(`#shadow-color`).setAttribute('value', colors.shadow);
    });
});
