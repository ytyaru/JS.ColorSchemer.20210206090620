class CSS {
    static #id = 'style-auto-color'
    static #template
    static replace(colors) {
        const link = document.querySelector(`#${CSS.#id}`) || CSS.createStyle();
        console.log('link:', link);
        link.textContent = CSS.createTemplate(colors);
    }
    static createStyle(colors) {
        const style = document.createElement('style');
        style.id = CSS.#id;
        style.rel = 'stylesheet';
        document.head.appendChild(style);
        return style
    }
    static createTemplate(colors) {
        CSS.#template = `
            .auto-color {
                background-color: ${colors.back};
                color: ${colors.fore};
            }
            input[type="radio"]:focus + label {
                border-color: ${colors.shadow};
                box-shadow: 0 0 5px ${colors.shadow};
            }
            input[type="radio"] + label:hover {
                border-color: ${colors.shadow};
                box-shadow: 0 0 5px ${colors.shadow};
            }
            input[type="radio"]:checked + label {
                background-color: ${colors.selectedBack};
                color: ${colors.selectedFore};
            }
        `;
        return CSS.#template;
    }
    /*
    static #setColor(color, query) {
        for (let el of document.querySelectorAll()) {

        }
    }
    */
}
