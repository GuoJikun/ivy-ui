export default class Notification extends HTMLElement {
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
                    animation: fadeInDown 0.3s ease-in-out;
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate3d( -100%,0, 0);
                    }

                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                    }
                .notification {
                    display: inline-flex;
                    pointer-events: all;
                    padding: 8px 16px;
                    border-radius: 4px;
                    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
                    background: #fff;
                    position: relative;
                }
                :host([type="success"]) {
                    
                }
                .notification-icon {
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
        return ["message", "show", "type", "icon"];
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
                    animation: fadeInDown 0.3s ease-in-out;
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate3d(0, -100%, 0);
                    }

                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
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
                :host([type="success"]) {
                    
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
        return ["message", "show", "type", "icon"];
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

    connectedCallback() {
        this.Icon = window.customElements.get("ivy-icon");
        if (this.Icon) {
        } else {
            console.warm("ivy-icon is not a element");
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
