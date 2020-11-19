import "./icon.js";
class Message extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: block;
                    pointer-events: all;
                    margin-top: 20px;
                    pointer-events: inherit;
                    height: 0;
                    transition: all 0.3s;
                }
                .ivy-message {
                    padding: 11px 30px;
                    position: relative;
                    display: inline-flex;
                    align-content: center;
                    align-items: center;
                    cursor: pointer;
                    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
                    border-radius: 4px;
                    min-width: 200px;
                    background: #fff;
                    pointer-events: initial;
                    box-sizing: border-box;
                }
                .ivy-message-type {
                    position: absolute;
                    left: 8px;
                }
                .ivy-message-content {
                    line-height: 1em;
                }
            </style>
            <div class="ivy-message">
                <ivy-icon name="info" class="ivy-message-type"></ivy-icon>
                <div class="ivy-message-content"></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.el = this._shadowRoot.querySelector(".ivy-message");
        this.wrap = this._shadowRoot.querySelector(".ivy-message-content");
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
        if (name === "show") {
            if (val === null) {
                this.style.height = "0";
            } else {
                this.style.height = "36px";
            }
        }
    }
}

if (!customElements.get("ivy-message")) {
    customElements.define("ivy-message", Message);
    window.onload = function () {
        window.$ivy = {};
        window.$ivy.message = function (opt = {}) {
            const ivyBox = document.getElementById("ivy-message-box");
            if (ivyBox === null) {
                const parent = document.createElement("div");
                parent.id = "ivy-message-box";
                parent.style.position = "fixed";
                parent.style.top = "0";
                parent.style.left = "0";
                parent.style.zIndex = "1000";
                parent.style.width = "100vw";
                parent.style.pointerEvents = "none";
                parent.style.textAlign = "center";

                const instance = document.createElement("ivy-message");
                instance.message = opt.message || "";
                parent.appendChild(instance);
                instance.setAttribute("show", "");
                document.body.appendChild(parent);
                const timer = setTimeout(() => {
                    parent.removeChild(instance);
                    clearTimeout(timer);
                }, 180000);
            } else {
                const instance = document.createElement("ivy-message");
                instance.message = opt.message || "";
                ivyBox.appendChild(instance);
                instance.setAttribute("show", "");
                const timer = setTimeout(() => {
                    ivyBox.removeChild(instance);
                    clearTimeout(timer);
                }, 1800);
            }
        };
    };
}
