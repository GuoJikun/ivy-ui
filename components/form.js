import "./icon.js";
import { type } from "../utils/type.js";
import { $_border_color_base } from "../utils/var.js";
import { findElementsDownward } from "../utils/assist.js";

class Form extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                }
                
            </style>
            <form>
                <slot></slot>
            </form>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.tableHeader = this._shadowRoot.querySelector(".ivy-table-header");
        this.tableHeaderInner = this._shadowRoot.querySelector(".ivy-table-header-inner");
        this.tableBody = this._shadowRoot.querySelector(".ivy-table-body");
        this.tableBodyInner = this._shadowRoot.querySelector(".ivy-table-body-inner");

        this.columns = [];
    }
    static get observedAttributes() {
        return ["dataSource", "border"];
    }

    get dataSource() {
        return this.getAttribute("dataSource");
    }
    get border() {
        return this.getAttribute("border");
    }

    set dataSource(value) {
        this.setAttribute("dataSource", value);
    }
    set border(value) {
        this.setAttribute("border", value);
    }

    validate(cb) {
        const ivyFormItem = findElementsDownward(this, "ivy-form-item");
        const flag = ivyFormItem.every(item => {
            if (item.validator || item.message) {
                return item.status !== "error";
            } else {
                return true;
            }
        });
        cb(flag);
    }

    connectedCallback() {}

    attributeChangedCallback(attr, oldVal, val) {}
}

if (!customElements.get("ivy-form")) {
    customElements.define("ivy-form", Form);
}

class FormItem extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .ivy-form-item {
                    display: block;
                    position: relative;
                    margin-bottom: 20px;
                }
                .ivy-form-item-msg {
                    position: absolute;
                    left: 
                    bottom: -20px;
                    font-size: 12px;
                    line-height: 20px;
                    width: 100%;
                }
                .ivy-form-item-inner {
                    display: flex;
                    align-items: center;
                }
                .ivy-form-item-label {
                    margin-right: 10px;
                }
            </style>
            <div class="ivy-form-item">
                <div class="ivy-form-item-inner">
                    <div class="ivy-form-item-label">${this.label}</div>
                    <div>
                        <slot></slot>
                    </div>
                </div>
                <div class="ivy-form-item-msg">
                    这里是错误信息
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.msg = this._shadowRoot.querySelector(".ivy-form-item-msg");
    }

    static get observedAttributes() {
        return ["rule", "label", "required", "message", "validator", "event", "status"];
    }

    get prop() {
        return this.getAttribute("prop");
    }
    get label() {
        return this.getAttribute("label");
    }
    get required() {
        return this.getAttribute("required");
    }
    get required() {
        return this.getAttribute("required");
    }
    get message() {
        return this.getAttribute("message");
    }
    get validator() {
        return this.getAttribute("validator");
    }
    get event() {
        return this.getAttribute("event");
    }
    get status() {
        return this.getAttribute("status");
    }

    set prop(value) {
        this.setAttribute("prop", value);
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    set required(value) {
        this.setAttribute("required", value);
    }
    set message(value) {
        this.setAttribute("message", value);
    }
    set validator(value) {
        this.setAttribute("validator", value);
    }
    set event(value) {
        this.setAttribute("event", value);
    }
    set status(value) {
        this.setAttribute("status", value);
    }

    connectedCallback() {}

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "status") {
            if (val === "error") {
                this.msg.style.display = "block";
            } else {
                this.msg.style.display = "none";
            }
        }
    }
}

if (!customElements.get("ivy-form-item")) {
    customElements.define("ivy-form-item", FormItem);
}
