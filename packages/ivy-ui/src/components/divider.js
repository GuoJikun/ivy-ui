import { $_border_color_base } from "../utils/var.js";

class Divider extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host{
                    padding: 28px 0;
                    display: block;
                }
                .ivy-divider {
                    height: 1px;
                    position: relative;
                    line-height: 1px;
                    background-color: transparent;
                    display: flex;
                    z-index: 0;
                }
                .ivy-divider::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 0px;
                    border-top: 1px solid var(--color-line-default, ${$_border_color_base});
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: -1;
                }
                :host([type="solid"]) .ivy-divider::before {
                    border-top-style: solid;
                }
                :host([type="dotted"]) .ivy-divider::before {
                    border-top-style: dotted;
                }
                :host([type="dashed"]) .ivy-divider::before {
                    border-top-style: dashed;
                }
                :host([type="double"]) .ivy-divider::before {
                    border-top-style: double;
                }
                :host([type="groove"]) .ivy-divider::before {
                    border-top-style: groove;
                }
                :host([type="ridge"]) .ivy-divider::before {
                    border-top-style: ridge;
                }
                :host([type="inset"]) .ivy-divider::before {
                    border-top-style: inset;
                }
                :host([type="outset"]) .ivy-divider::before {
                    border-top-style: outset;
                }
                .ivy-divider-text {
                    display: inline-block;
                    padding: 0 10px;
                    font-size: inherit;
                    background-color: white;
                    margin: 0 auto;
                }
                :host([hide-text]) .ivy-divider-text {
                    display: none;
                }
                :host([placement="center"]) .ivy-divider-text {
                    margin: 0 auto;
                }
                :host([placement="left"]) .ivy-divider-text{
                    margin: 0;
                    position: absolute;
                    left: 10%;
                }
                :host([placement="right"]) .ivy-divider-text{
                    margin: 0;
                    position: absolute;
                    right: 10%;
                }
            </style>
            <div class="ivy-divider">
                <div class="ivy-divider-text"><slot></slot></span>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });

        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-divider");
    }

    static get observedAttributes() {
        return ["type"];
    }

    get type() {
        return this.getAttribute("type");
    }

    set type(value) {
        this.setAttribute("type", value);
    }
}

if (!customElements.get("ivy-divider")) {
    customElements.define("ivy-divider", Divider);
}
