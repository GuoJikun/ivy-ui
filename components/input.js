import {
    $_color_primary,
    $_color_success,
    $_color_warn,
    $_color_error,
    $_color_info,
    $_border_base,
    $_border_radius,
} from "../utils/var.js";

class Input extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    width: 260px;
                    height: 34px;
                }
                :host([disabled="true"]) .ivy-input__inner {
                    cursor: not-allowed;
                }
                .ivy-input {
                    display: flex;
                    height: 34px;
                    line-height: 34px;
                    border-radius: 4px;
                    transition: border-color .3s, background-color .3s;
                    cursor: pointer;
                }
                .ivy-input__append,
                .ivy-input__prepend {
                    background-color: #f5f7fa;
                    color: #909399;
                    vertical-align: middle;
                    position: relative;
                    border: 1px solid #dcdfe6;
                    padding: 0 16px;
                    white-space: nowrap;
                    line-height: 34px;
                    border-radius: 4px 0 0 4px;
                }
                .ivy-input__prepend {
                    border-right: 0;
                }
                .ivy-input__append {
                    border-radius: 0 4px 4px 0;
                    border-left: 0;
                }
                .ivy-input__inner {
                    padding: 0 10px;
                    border: ${$_border_base};
                    border-radius: 0;
                    box-sizing: border-box;
                    outline-color: ${$_color_primary};
                    outline: none;
                }
                .ivy-input__inner:focus {
                    border-color: ${$_color_primary};
                }
            </style>
            <div class="ivy-input">
                <div class="ivy-input__prepend">
                    <slot name="prepend"></slot>
                </div>
                <input class="ivy-input__inner" type="${this.type}" value="${this.value}" />
                <div class="ivy-input__append">
                    <slot name="append"></slot>
                </div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$root = this._shadowRoot.querySelector(".ivy-input");
        this.input = this._shadowRoot.querySelector(".ivy-input__inner");
        this.input.addEventListener("input", ev => {
            this.value = ev.target.value;
        });
        new CustomEvent("input", ev => {
            ev.detail = this.value;
        });

        new CustomEvent("blur", ev => {
            ev.detail = this.value;
        });
    }

    static get observedAttributes() {
        return ["type", "value", "disabled"];
    }

    get type() {
        return this.getAttribute("value") || "text";
    }

    get value() {
        return this.getAttribute("value");
    }

    set value(value) {
        this.setAttribute("value", value);
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    connectedCallback() {}

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "disabled" && oldVal !== newVal) {
            if (newVal === "true") {
                this.input.setAttribute("disabled", "disabled");
            } else {
                this.input.removeAttribute("disabled");
            }
        }
    }
}
if (!customElements.get("ivy-input")) {
    customElements.define("ivy-input", Input);
}
