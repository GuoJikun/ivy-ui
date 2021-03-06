import { $_color_primary } from "../utils/var";
class Progress extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: flex;
                }
                .ivy-progress {
                    display: block;
                    width: 100%;
                    border-radius: ${this.size / 2}px;
                    overflow: hidden;
                    background-color: #f3f3f3;
                }
                .ivy-progress-inner {
                    height: 100%;
                    border-radius: ${this.size / 2}px;
                }
                
            </style>
            <div class="ivy-progress" style="height: ${this.size}px">
                <div class="ivy-progress-inner" style="background-color: ${this.color};width: ${this.value}%;"></div>
            </div>
            
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-progress");
    }
    static get observedAttributes() {
        return ["value", "size", "color"];
    }
    get value() {
        return this.getAttribute("value") || "0";
    }
    get size() {
        return this.getAttribute("size") || "10";
    }
    get color() {
        return this.getAttribute("color") || $_color_primary;
    }

    set value(value) {
        this.setAttribute("value", value);
    }
    connectedCallback() {}
    attributeChangedCallback(name, oldVal, newVal) {}
}

if (!customElements.get("ivy-progress")) {
    customElements.define("ivy-progress", Progress);
}
