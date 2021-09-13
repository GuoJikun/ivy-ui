import { $_color_primary, $_color_success, $_color_warn, $_color_error, $_color_info } from "../utils/var.js";

class ContentMenu extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                }
                .ivy-menu {
                    position: absolute;
                    z-index: 1000;
                    display: none;
                }
            </style>
            <slot></slot>
            
                <slot name="menu" class="ivy-menu"></slot>
            
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$menu = this._shadowRoot.querySelector(".ivy-menu");

        this.addEventListener("contextmenu", ev => {
            ev.preventDefault();
            const parentPosition = this.getBoundingClientRect();
            const x = ev.x - parentPosition.left;
            const y = ev.y - parentPosition.top;
            this.$menu.style.top = `${y}px`;
            this.$menu.style.left = `${x}px`;
            this.$menu.style.display = `block`;
        });

        this.addEventListener("click", ev => {
            this.$menu.style = "none";
        });
    }

    static get observedAttributes() {
        return ["value"];
    }

    connectedCallback() {}

    get value() {
        return this.getAttribute("value") || 0;
    }

    set value(text) {
        this.setAttribute("value", text);
    }

    attributeChangedCallback(attr, oldVal, val) {}
}

if (!window.customElements.get("ivy-content-menu")) {
    window.customElements.define("ivy-content-menu", ContentMenu);
}
