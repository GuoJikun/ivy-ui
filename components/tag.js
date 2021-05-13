import { $_color_primary } from "../utils/var";

class Tag extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    padding: 0 14px;
                    display: inline-block;
                    border: 1px solid var(--color-primary, ${$_color_primary});
                    color: white;
                    background-color: var(--color-primary, ${$_color_primary});
                    font-size: 12px;
                    line-height: 30px;
                    height: 32px;
                    border-radius: 2px;
                    box-sizing: border-box;
                }
                :host() + :host() {
                    margin-left: 10px;
                }
                
            </style>
            <slot></slot>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

if (!customElements.get("ivy-tag")) {
    customElements.define("ivy-tag", Tag);
}
