import { findElementUpward } from "../utils/assist.js";
import { $_color_primary, $_border_radius } from "../utils/var.js";
class Input extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                .ivy-input-inner {
                    background-color: #fff;
                    background-image: none;
                    border-radius: var(--border-radius, ${$_border_radius});
                    border: 1px solid #dcdfe6;
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    font-size: inherit;
                    height: 34px;
                    line-height: 34px;
                    outline: none;
                    padding: 0 15px;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 100%;
                }
                .ivy-input-inner:active,
                .ivy-input-inner:hover,
                .ivy-input-inner:focus {
                    border-color: var(--color-primary, ${$_color_primary});
                }
                :host([disabled]) {
                    cursor: not-allowed;
                }
                :host([disabled]) .ivy-input-inner {
                    background-color: #f5f7fa;
                    border-color: #e4e7ed;
                    color: #c0c4cc;
                    cursor: not-allowed;
                }
                :host([readonly]) {
                    cursor: not-allowed;
                }
            </style>
            <div class="ivy-input">
                <input class="ivy-input-inner" />
            </div>
            
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.inputInner = this._shadowRoot.querySelector(".ivy-input-inner");

        const iFocus = new CustomEvent("focus", {});

        this.inputInner.addEventListener("change", ev => {
            this.dispatchEvent(this.iFocus);
            const target = ev.target;
            const value = target.value;
            const ivyFormItem = findElementUpward(this, "ivy-form-item");
            console.log(ivyFormItem, "ivyFormItem");
            if (ivyFormItem !== null) {
                console.log(ivyFormItem.message);
                const validator = ivyFormItem.validator;
                if (validator === null) {
                    const message = ivyFormItem.message;
                    if (message !== null) {
                        if (value === null || value === "") {
                            ivyFormItem.status = "error";
                            this.status = "error";
                        }
                    }
                }
            }
            this.dispatchEvent(new CustomEvent("change", { detail: value }));
            this.dispatchEvent(new CustomEvent("change", { detail: value }));
        });

        this.inputInner.addEventListener("focus", () => {
            this.focus = "";
            this.dispatchEvent(this.iFocus);
        });
        this.inputInner.addEventListener("blur", () => {
            this.focus = null;
            this.dispatchEvent(this.iFocus);
        });
    }

    static get observedAttributes() {
        return ["status", "value", "disabled", "readonly", "focus"];
    }

    get status() {
        return this.getAttribute("status");
    }
    get value() {
        return this.getAttribute("value");
    }
    get disabled() {
        return this.getAttribute("disabled");
    }
    get readonly() {
        return this.getAttribute("readonly");
    }
    get focus() {
        return this.getAttribute("focus");
    }

    set status(value) {
        this.setAttribute("status", value);
    }
    set value(value) {
        this.setAttribute("value", value);
    }
    set disabled(value) {
        this.setAttribute("disabled", value);
    }
    set readonly(value) {
        this.setAttribute("readonly", value);
    }
    set focus(value) {
        this.setAttribute("focus", value);
    }

    connectedCallback() {
        if (this.disabled !== null) {
            this.inputInner.setAttribute("disabled", "disabled");
        }
        if (this.readonly !== null) {
            this.inputInner.setAttribute("readonly", "");
        }
    }

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "disabled") {
            if (val === null) {
                this.inputInner.removeAttribute("disabled");
            } else {
                this.inputInner.setAttribute("disabled", "");
            }
        }
    }
}

if (!customElements.get("ivy-input")) {
    customElements.define("ivy-input", Input);
}
