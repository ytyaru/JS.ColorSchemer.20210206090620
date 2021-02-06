class ColorSchemer {
    static scheme(backColor='#FFFFFF', id='style-auto-color') {
        const colors = Color.getColors(backColor);
        CSS.replace(colors, id);
        return colors;
    }
}
