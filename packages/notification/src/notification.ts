import { style } from "../../../ivy-ui/src/utils/assist.js";
import { isObject, type } from "../../../ivy-ui/src/utils/type.js";

interface Conf {
    message: string;
    type?: string;
    duration: number;
}

export default class Notification extends HTMLElement {
    _shadowRoot: ShadowRoot;
    el: any;
    wrap: any;
    constructor(zIndex = 9000) {
        super();
        const template = document.createElement("template");
        const css = style`
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
            }`;

        template.innerHTML = `
            ${css}
            <div class="notification">
                <ivy-icon name="info" class="notification-icon"></ivy-icon>
                <div class="notification-content"></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.el = this._shadowRoot.querySelector(".notification");
        this.wrap = this._shadowRoot.querySelector(".notification-content");
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

    attributeChangedCallback(name: string, oldVal: string, val: string) {
        if (name === "message") {
            this.wrap.innerText = val;
        }
    }
    static show(opt: Conf = { duration: 3000, message: "" }) {
        if (isObject(opt)) {
            const instance = new Notification();
            const ivyBox = document.querySelector("#ivy-message-box") as HTMLElement;
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
    static info(opt: any) {
        const typeStr = type(opt);
        const conf = {
            type: "info",
            duration: 3000,
            message: "",
        };
        if (typeStr === "string") {
            conf.message = opt;
            this.show(conf);
        } else if (typeStr === "object") {
            this.show({ ...conf, ...opt });
        } else {
            throw new Error("");
        }
    }
    static success(opt: any) {
        const typeStr = type(opt);
        const conf = {
            type: "success",
            duration: 3000,
            message: "",
        };
        if (typeStr === "string") {
            conf.message = opt;
            this.show(conf);
        } else if (typeStr === "object") {
            this.show({ ...conf, ...opt });
        } else {
            throw new Error("");
        }
    }
    static warning(opt: any) {
        const typeStr = type(opt);
        const conf: Conf = {
            type: "warning",
            duration: 3000,
            message: "",
        };
        if (typeStr === "string") {
            conf.message = opt;
            this.show(conf);
        } else if (typeStr === "object") {
            this.show({ ...conf, ...opt });
        } else {
            throw new Error("");
        }
    }
    static error(opt: any) {
        const typeStr = type(opt);
        const conf = {
            type: "error",
            duration: 3000,
            message: "",
        };
        if (typeStr === "string") {
            conf.message = opt;
            this.show(conf);
        } else if (typeStr === "object") {
            this.show({ ...conf, ...opt });
        } else {
            throw new Error("");
        }
    }
}
