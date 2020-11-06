import { iconfont } from "../icon.js";

import { $_border_radius, $_color_primary, $_border_color_base } from "../utils/var";
class Icon extends HTMLElement {
    constructor() {
        const hideSvg = document.querySelector("#ivy-icon-hidden");
        if (!hideSvg) {
            const svg = document.createElement("svg");
            svg.setAttribute("id", "ivy-icon-hidden");
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
            svg.setAttribute("hidden", "");
            svg.setAttribute("aria-hidden", "true");
            svg.innerHTML = iconfont;
            document.body.appendChild(svg);
        }
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: inline-block;
                    color: inherit;
                    transition: 0.3s;
                    font-size: inherit;
                }
                :host([spin]) .ivy-icon {
                    animation: spin 1.4s linear infinite;
                }
                .ivy-icon {
                    display: block;
                    width: 1em;
                    height: 1em;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                }
                
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
            <svg class="ivy-icon" aria-hidden="true" view="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="font-size: ${this.size}px;">
                <use xlink:href="#ivy-icon-${this.name}"></use>
            </svg>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-icon");
        console.log(this.name);
    }
    static get observedAttributes() {
        return ["size", "name"];
    }
    get size() {
        return this.getAttribute("size") || 14;
    }
    get name() {
        return this.getAttribute("name") || "";
    }

    set name(value) {
        this.setAttribute("name", value);
    }
    connectedCallback() {}
    attributeChangedCallback(name, oldVal, newVal) {}
}

if (!customElements.get("ivy-icon")) {
    customElements.define("ivy-icon", Icon);
}
