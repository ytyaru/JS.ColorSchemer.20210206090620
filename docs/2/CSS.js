class CSS {
    static #id = 'style-auto-color'
    static #template
    static replace(colors, id='style-auto-color') {
        CSS.#id = id;
        const style = document.querySelector(`#${CSS.#id}`) || CSS.createStyle();
        console.log('style:', style);
        style.textContent = CSS.createTemplate(colors);
    }
    static createStyle(colors) {
        const style = document.createElement('style');
        style.id = CSS.#id;
        document.head.appendChild(style);
        return style;
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
}
