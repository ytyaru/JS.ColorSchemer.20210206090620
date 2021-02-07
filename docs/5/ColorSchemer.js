class ColorSchemer {
    #files
    constructor() {
        this.#files = [];
    }
    async schemeFromFile(backColor='#FFFFFF', url='./auto-color.css') {
        let id = null;
        let template = null;
        const files = this.#files.filter(obj=>obj.url === url);
        if (0 === files.length) {
            template = await Loader.load(url);
            // id重複ならサフィックス付与する
            const preId = url.split('/').slice(-1)[0]; // 仮ID＝ファイル名
            const sameIdFiles = this.#files.filter(obj=>obj.url !== url && obj.preId === id);
            id = (0 == sameIdFiles.length) ? preId : preId + '-' + sameIdFiles.length;
            files.push({url:url, preId:preId, id:id, template:template});
        } else {
            id = files[0].id;
            template = files[0].template;
        }
        return this.scheme(backColor, id, '.auto-color', template);
    }
    scheme(backColor='#FFFFFF', id='style-auto-color', query='.auto-color', template='') {
        const colors = Color.getColors(backColor);
        CSS.replace(colors, id, query, template);
        return colors;
    }
}
