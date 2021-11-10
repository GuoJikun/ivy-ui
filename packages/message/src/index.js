import "../../icon/src/index.js";
import { type, isObject } from "../../ivy-ui/src/utils/type.js";
class Message extends HTMLElement {
    constructor(zIndex = 9000) {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: block;
                    box-sizing: border-box;
                    padding: 8px;
                    height: 54px;
                    text-align: center;
                    transition: height 0.3s ease-in-out,padding 0.3s ease-in-out;
                }
                 
                .message {
                    display: inline-flex;
                    pointer-events: all;
                    padding: 8px 16px;
                    border-radius: 4px;
                    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
                    background: #fff;
                    position: relative;
                }
                :host([show]) {
                    
                }
                .message-icon {
                    margin-right: 8px;
                }
            </style>
            <div class="message">
                <ivy-icon name="info" class="message-icon"></ivy-icon>
                <div class="message-content"></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.el = this._shadowRoot.querySelector(".message");
        this.wrap = this._shadowRoot.querySelector(".message-content");
    }
    static get observedAttributes() {
        return ["message", "show", "type"];
    }
    get message() {
        return this.getAttribute("message") || "";
    }
    get show() {
        return this.getAttribute("show");
    }

    set message(value) {
        this.setAttribute("message", value);
    }

    attributeChangedCallback(name, oldVal, val) {
        if (name === "message") {
            this.wrap.innerText = val;
        }
    }
    static show(opt = {}) {
        if (isObject(opt)) {
            const instance = new Message();
            const ivyBox = document.querySelector("#ivy-message-box");
            instance.message = opt.message || "";
            ivyBox.appendChild(instance);
            instance.setAttribute("show", "show");
            const timer = setTimeout(() => {
                ivyBox.removeChild(instance);
                clearTimeout(timer);
            }, opt.duration || 3000);
        } else {
            throw new Error("");
        }
    }
    static info(opt) {
        const typeStr = type(opt);
        const conf = {
            type: "info",
        };
        if (typeStr === "string") {
            this.show({ message: opt, ...conf });
        } else if (typeStr === "object") {
            this.show({ ...opt, ...conf });
        } else {
            throw new Error("");
        }
    }
    static success(opt) {
        const typeStr = type(opt);
        const conf = {
            type: "success",
        };
        if (typeStr === "string") {
            this.show({ message: opt, ...conf });
        } else if (typeStr === "object") {
            this.show({ ...opt, ...conf });
        } else {
            throw new Error("");
        }
    }
    static warning(opt) {
        const typeStr = type(opt);
        const conf = {
            type: "warning",
        };
        if (typeStr === "string") {
            this.show({ message: opt, ...conf });
        } else if (typeStr === "object") {
            this.show({ ...opt, ...conf });
        } else {
            throw new Error("");
        }
    }
    static error(opt) {
        const typeStr = type(opt);
        const conf = {
            type: "error",
        };
        if (typeStr === "string") {
            this.show({ message: opt, ...conf });
        } else if (typeStr === "object") {
            this.show({ ...opt, ...conf });
        } else {
            throw new Error("");
        }
    }
}

function addMessageBox() {
    const parent = document.createElement("div");
    parent.id = "ivy-message-box";
    parent.style.position = "fixed";
    parent.style.top = "24px";
    parent.style.left = "0";
    parent.style.zIndex = "10000";
    parent.style.width = "100%";
    parent.style.pointerEvents = "none";
    parent.style.fontSize = "14px";
    document.body.appendChild(parent);
}

if (!customElements.get("ivy-message")) {
    customElements.define("ivy-message", Message);
    window.onload = function () {
        addMessageBox();
        window.$message = Message;
    };
}
