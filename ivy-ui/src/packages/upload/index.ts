import { $_color_primary, $_color_success, $_color_warn, $_color_error, $_color_info } from "@/utils/var";
import { Selector } from "@/utils/upload";

class Upload extends HTMLElement {
    _shadowRoot: ShadowRoot;
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

    // set name(value) {
    //     this.setAttribute("name", value);
    // }
    // get name() {
    //     return this.getAttribute("name");
    // }

    connectedCallback() {
        this.addEventListener("click", ev => {
            new Selector();
        });
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {}
}

if (!customElements.get("ivy-upload")) {
    customElements.define("ivy-upload", Upload);
}
