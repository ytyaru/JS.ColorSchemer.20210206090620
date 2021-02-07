class Loader {
    static async load(path) {
        const response = await fetch(path);
        if (response.status !== 200) { throw new Error(`ファイル取得エラー: ${response.status} Loader.load(${path})`); }
        return await response.text();
    }
    /*
    static load(path) {
        fetch(codeTag.getAttribute('src'))
            .then((response) => {
                if (response.status !== 200) { return ''; }
                return response.text();
            })
            .then(text => codeTag.innerHTML = hljs.highlightAuto(text).value);
    }

    var client = new XMLHttpRequest();
    client.open('GET', '/foo.txt');
    client.onreadystatechange = function() {
      alert(client.responseText);
    }
    client.send();
    */
}
