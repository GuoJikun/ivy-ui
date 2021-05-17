import { $_color_primary, $_color_success, $_color_warn, $_color_error, $_color_info } from "../utils/var";
import { Selector, Uploader } from "../utils/upload.js";

class Upload extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                
            </style>
            <slot></slot>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ["action", "name"];
    }

    set action(value) {
        this.setAttribute("action", value);
    }
    get action() {
        return this.getAttribute("action");
    }

    set name(value) {
        this.setAttribute("name", value);
    }
    get name() {
        return this.getAttribute("name");
    }

    connectedCallback() {
        this.addEventListener("click", ev => {
            new Selector();
        });
    }

    attributeChangedCallback(attr, oldVal, val) {}
}

if (!customElements.get("ivy-upload")) {
    customElements.define("ivy-upload", Upload);
}
