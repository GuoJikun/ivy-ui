import { $_color_primary } from "../utils/var.js";

class Switch extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                }
                .ivy-switch {
                    display: inline-block;
                    position: relative;
                    width: 40px;
                    height: 20px;
                    background: #ccc;
                    border-radius: 10px;
                    transition: border-color 0.3s, background-color 0.3s;
                    cursor: pointer;
                }
                .ivy-switch::after{
                    content: '';
                    display: inline-block;
                    width: 1rem;
                    height:1rem;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0, 0, 2px, #999;
                    transition:.4s;
                    top: 2px;
                    position: absolute;
                    left: 2px;
                }
                :host([checked]) .ivy-switch {
                    background: var(--color-primary, ${$_color_primary});
                }
                :host([checked]) .ivy-switch::after{
                    content: '';
                    position: absolute;
                    left: 55%;
                    top: 2px;
                }
                :host([disabled]) {
                    opacity: 0.6;
                }
                :host([disabled]) .ivy-switch {
                    cursor: not-allowed;
                }
            </style>
            <label class="ivy-switch">
                <input id="ivy-switch" type="checkbox" ${this.checked} ${this.disabled} hidden>
            </label>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$switch = this._shadowRoot.querySelector(".ivy-switch");
        this.input = this._shadowRoot.querySelector("#ivy-switch");
    }

    static get observedAttributes() {
        return ["checked", "disabled", "value"];
    }

    get value() {
        return this.getAttribute("value");
    }

    get checked() {
        return this.getAttribute("checked");
    }

    set checked(value) {
        this.setAttribute("checked", value);
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    connectedCallback() {
        this.input.addEventListener("change", e => {
            if (this.disabled !== null) {
                return false;
            }
            const checked = e.target.checked;
            if (checked) {
                this.removeAttribute("checked");
            } else {
                this.setAttribute("checked", "");
            }
            this.dispatchEvent(new CustomEvent("change", { bubbles: false, cancelable: true, composed: false, detail: !checked }));
        });
    }

    attributeChangedCallback(name, oldVal, newVal) {}
}
if (!customElements.get("ivy-switch")) {
    customElements.define("ivy-switch", Switch);
}
