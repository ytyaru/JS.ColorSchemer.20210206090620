window.addEventListener('load', async(event) => {
    const shemer = new ColorSchemer();
    async function getColors(back) {
//        return ColorSchemer.scheme(back, id='id-style-auto-color-scheme', query='.auto-color-scheme');
//        return ColorSchemer.schemeFromFile(back, './css/auto-color-radio-button.css');
        return await shemer.schemeFromFile(back, './css/auto-color-radio-button.css');
    }
    function setColorInput(colors) {
        console.log(colors);
        for (let color of colors) {
            document.querySelector(`#fore-color`).setAttribute('value', color.colors.fore);
            document.querySelector(`#selected-back-color`).setAttribute('value', color.colors.selectedBack);
            document.querySelector(`#selected-fore-color`).setAttribute('value', color.colors.selectedFore);
            document.querySelector(`#shadow-color`).setAttribute('value', color.colors.shadow);
        }
        /*
        document.querySelector(`#fore-color`).setAttribute('value', colors.fore);
        document.querySelector(`#selected-back-color`).setAttribute('value', colors.selectedBack);
        document.querySelector(`#selected-fore-color`).setAttribute('value', colors.selectedFore);
        document.querySelector(`#shadow-color`).setAttribute('value', colors.shadow);
        */
    }
    document.querySelector(`#back-color`).addEventListener('change', async(event) => {
        setColorInput(await getColors(event.target.value));
    });
    setColorInput(await getColors(document.querySelector('#back-color').getAttribute('value')));
});
