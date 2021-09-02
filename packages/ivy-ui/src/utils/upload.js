class Xhr {
    constructor(action, data = {}, config = {}) {
        this.action = action;
        this.data = data;
        this.config = config || {};

        this.instance = this.init() || null;
    }

    init() {
        const xhrInstance = new XMLHttpRequest();
        return xhrInstance;
    }

    setData() {
        const formData = new FormData();
        formData.append;
    }

    send() {
        this.instance.open(this.config.method, this.action);
        this.instance.send(this.data);
    }
}

class Uploader {
    constructor(action, name) {
        this.action = action;
        this.name = name || "file";
    }

    beforeUpload() {}

    change() {}

    uploadSuccess() {}

    uploadError() {}

    uploadComplete() {}
}

class Selector {
    constructor() {
        this.fileList = [];
    }

    init() {}

    createInput() {
        const inputEle = document.createElement("input");
        inputEle.type = "file";

        inputEle.addEventListener("change", ev => {
            const files = ev.target.files;

            this.fileList.push(...files);
        });
    }

    inputChange(ev, handler) {}
}
