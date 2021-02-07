window.addEventListener('load', (event) => {
    const shemer = new ColorSchemer();
    function getColors(back) {
//        return ColorSchemer.scheme(back, id='id-style-auto-color-scheme', query='.auto-color-scheme');
//        return ColorSchemer.schemeFromFile(back, './css/auto-color-radio-button.css');
        return shemer.schemeFromFile(back, './css/auto-color-radio-button.css');
    }
    function setColorInput(colors) {
        document.querySelector(`#fore-color`).setAttribute('value', colors.fore);
        document.querySelector(`#selected-back-color`).setAttribute('value', colors.selectedBack);
        document.querySelector(`#selected-fore-color`).setAttribute('value', colors.selectedFore);
        document.querySelector(`#shadow-color`).setAttribute('value', colors.shadow);
    }
    document.querySelector(`#back-color`).addEventListener('change', (event) => {
        setColorInput(getColors(event.target.value));
    });
    setColorInput(getColors(document.querySelector('#back-color').getAttribute('value')));
});
