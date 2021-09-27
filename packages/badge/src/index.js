import { $_color_primary, $_color_success, $_color_warn, $_color_error, $_color_info } from "../../ivy-ui/src/utils/var.js";

class Badge extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                }
                :slot {
                    position: relative;
                    z-index: 0;
                }
                .ivy-badge-content {
                    position: absolute;
                    top: 0;
                    right: 10px;
                    z-index: 10;
                    transform: translateX(100%) translateY(-50%);
                    background-color: #f56c6c;
                    border-radius: 10px;
                    color: #fff;
                    display: inline-block;
                    font-size: 12px;
                    height: 18px;
                    line-height: 18px;
                    padding: 0 6px;
                    text-align: center;
                    white-space: nowrap;
                    border: 1px solid #fff;
                }
                :host(type="primary") .ivy-badge-content {
                    background-color: var(--color-primary, ${$_color_primary});
                    color: white;
                }
                :host(type="success") .ivy-badge-content {
                    background-color: var(--color-primary, ${$_color_success});
                    color: white;
                }
                :host(type="warning") .ivy-badge-content {
                    background-color: var(--color-warning, ${$_color_warn});
                    color: white;
                }
                :host(type="error") .ivy-badge-content {
                    background-color: var(--color-error, ${$_color_error});
                    color: white;
                }
                :host(type="info") .ivy-badge-content {
                    background-color: var(--color-info, ${$_color_info});
                    color: white;
                }

                :host([is-dot]) sup.ivy-badge-content {
                    height: 8px;
                    width: 8px;
                    line-height: 8px;
                    padding: 0;
                    right: 5px;
                    border-radius: 50%;
                    color: transparent;
                }
            </style>
            <sup class="ivy-badge-content">${this.value > this.max ? this.max + "+" : this.value}</sup>
            <slot></slot>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$sup = this._shadowRoot.querySelector(".ivy-badge-content");
    }

    static get observedAttributes() {
        return ["value", "max", "type", "hidden", "is-dot"];
    }

    connectedCallback() {}

    get value() {
        return this.getAttribute("value") || 0;
    }

    set value(text) {
        this.setAttribute("value", text);
    }

    get max() {
        return this.getAttribute("max") || 99;
    }

    set max(text) {
        this.setAttribute("max", text);
    }

    get type() {
        return this.getAttribute("type");
    }

    set type(text) {
        this.setAttribute("type", text);
    }

    get hidden() {
        return this.getAttribute("hidden");
    }

    set hidden(text) {
        this.setAttribute("hidden", text);
    }

    get isDot() {
        return this.getAttribute("is-dot");
    }

    set isDot(text) {
        this.setAttribute("is-dot", text);
    }

    valueReg = /^\d+$/;

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "value" && oldVal !== val) {
            this.$sup.innerText = this.valueReg.test(val) ? (val > this.max ? `${this.max}+` : this.value) : this.value;
        }
        if (attr === "max" && oldVal !== val) {
            this.$sup.innerText = this.valueReg.test(val) ? (val > this.max ? `${this.max}+` : this.value) : this.value;
        }
    }
}

if (!window.customElements.get("ivy-badge")) {
    window.customElements.define("ivy-badge", Badge);
}
