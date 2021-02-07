class ColorSchemer {
    #files
    #css
    constructor() {
        this.#files = [];
//        this.#css = new CSS();
        this.#css = [];
    }
    async schemeFromFile(backColor='#FFFFFF', url='./auto-color.css') {
        let id = null;
        let template = null;
        const files = this.#files.filter(obj=>obj.url === url);
        if (0 === files.length) {
            template = await Loader.load(url);
            // id重複ならサフィックス付与する
            const preId = FileName.getBaseName(url);  // 仮ID＝ファイル名（拡張子省く）
//            const preId = url.split('/').slice(-1)[0]; // 仮ID＝ファイル名
            const sameIdFiles = this.#files.filter(obj=>obj.url !== url && obj.preId === id);
            id = (0 == sameIdFiles.length) ? preId : preId + '-' + sameIdFiles.length;
            this.#files.push({url:url, preId:preId, id:id, template:template});
            const query = `.${id}`; // '.auto-color'
            this.#css.push(new CSS(id, query, template));
        } else {
            id = files[0].id;
            template = files[0].template;
        }
        return this.scheme(backColor);
    }
    scheme(backColor='#FFFFFF') {
        const result = [];
        const colors = Color.getColors(backColor);
        for (let css of this.#css) {
            result.push({id: css.replace(colors), colors: colors});
        }
        return result;
    }
}
