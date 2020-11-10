import { iconfont } from "../icon.js";

class Icon extends HTMLElement {
    constructor() {
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
            <svg aria-hidden="true" style="width: 0;height: 0;overflow:hidden;position: absolute;">
                ${iconfont.replace(
                    new RegExp(
                        `(.+)(<symbol id=\"ivy-icon-${this.name}\" viewBox=\"0 0 1024 1024\"><path d=\"[^\"]+"\ +><\/path><\/symbol>)(.+)`,
                        "g"
                    ),
                    "$2"
                )}
            </svg>
            <svg class="ivy-icon" style="font-size: ${this.size}px;color: ${this.color};">
                <use xlink:href="#ivy-icon-${this.name}"></use>
            </svg>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-icon");
    }
    static get observedAttributes() {
        return ["size", "name", "color"];
    }
    get size() {
        return this.getAttribute("size") || 14;
    }
    get name() {
        return this.getAttribute("name") || "";
    }
    get color() {
        return this.getAttribute("color") || "";
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
