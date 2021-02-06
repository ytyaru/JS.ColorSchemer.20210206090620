class ColorSchemer {
    static scheme(backColor='#FFFFFF', id='style-auto-color', query='.auto-color') {
        const colors = Color.getColors(backColor);
        CSS.replace(colors, id, query);
        return colors;
    }
}
