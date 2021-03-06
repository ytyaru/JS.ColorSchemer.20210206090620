class CSS {
    static #id = 'style-auto-color'
    static #query = '.auto-color'
    static #template
    static replace(colors, id='style-auto-color', query='.auto-color') {
        CSS.#id = id;
        CSS.#query = query;
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
            ${CSS.#query} {
                background-color: ${colors.back};
                color: ${colors.fore};
            }
            ${CSS.#query} input[type="radio"]:focus + label {
                border-color: ${colors.shadow};
                box-shadow: 0 0 5px ${colors.shadow};
            }
            ${CSS.#query} input[type="radio"]:hover + label,
            ${CSS.#query} input[type="radio"] + label:hover {
                border-color: ${colors.shadow};
                box-shadow: 0 0 5px ${colors.shadow};
            }
            ${CSS.#query} input[type="radio"]:checked + label {
                background-color: ${colors.selectedBack};
                color: ${colors.selectedFore};
            }
            ${CSS.#query} input[type="radio"]:disabled + label {
                cursor: not-allowed;
                opacity: 0.5;
            }
        `;
        return CSS.#template;
    }
}
