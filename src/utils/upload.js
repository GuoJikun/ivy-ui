interface Config {
  method: () => void;
}

class Xhr {
  action;
  data: {};
  config: Config;
  instance: XMLHttpRequest;
  constructor(action, data = {}, config: Config) {
    this.action = action;
    this.data = data;
    this.config = config || { method: () => {} };

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
}

export class Uploader {
  action;
  name;
  constructor(action, name?) {
    this.action = action;
    this.name = name || "file";
  }

  beforeUpload() {}

  change() {}

  uploadSuccess() {}

  uploadError() {}

  uploadComplete() {}
}

export class Selector {
  fileList: never[];
  constructor() {
    this.fileList = [];
  }

  init() {}

  createInput() {
    const inputEle: HTMLInputElement = document.createElement("input");
    inputEle.type = "file";

    inputEle.addEventListener("change", (ev) => {});
  }
}
