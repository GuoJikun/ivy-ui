import "../icon/index.js";
import { findElementUpward } from "@/utils/assist.js";
import { $_color_primary, $_border_radius } from "@/utils/var.js";
class Input extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .ivy-input {
                    position: relative;
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
                    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355,1);
                    width: 100%;
                }
                .ivy-input-inner::-webkit-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-input-inner::-moz-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-input-inner:-moz-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-input-inner:-ms-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
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
                .ivy-input-icon {
                    display: none;
                    position: absolute;
                    right: 0;
                    height: 100%;
                    width: 30px;
                    align-items: center;
                    justify-content: center;
                    pointer-events: none;
                }
                .ivy-input .ivy-input-icon-prefix {
                    left: 0;
                }
            </style>
            <div class="ivy-input">
                <span class="ivy-input-icon ivy-input-icon-prefix">
                    <ivy-icon name="loading" color="#c0c4cc"></ivy-icon>
                </span>
                <input class="ivy-input-inner" />
                <span class="ivy-input-icon ivy-input-icon-suffix">
                    <ivy-icon name="reading" color="#c0c4cc"></ivy-icon>
                </span>
            </div>
            
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.inputInner = this._shadowRoot.querySelector(".ivy-input-inner");
        this.preIcon = this._shadowRoot.querySelector(".ivy-input-icon-prefix");
        this.preIconInner = this._shadowRoot.querySelector(".ivy-input-icon-prefix ivy-icon");
        this.sufIcon = this._shadowRoot.querySelector(".ivy-input-icon-suffix");
        this.sufIconInner = this._shadowRoot.querySelector(".ivy-input-icon-suffix ivy-icon");

        this.inputInner.addEventListener("change", ev => {
            const target = ev.target;
            const value = target.value;
            const ivyFormItem = findElementUpward(this, "ivy-form-item");
            if (ivyFormItem !== null) {
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
            this.value = value;
            this.dispatchEvent(new CustomEvent("change", { detail: value }));
        });

        this.inputInner.addEventListener("focus", () => {
            this.focus = "";
            this.dispatchEvent(new CustomEvent("focus"));
        });
        this.inputInner.addEventListener("blur", () => {
            this.dispatchEvent(new CustomEvent("blur"));
        });
        this.inputInner.addEventListener("input", ev => {
            const target = ev.target;
            const value = target.value;
            this.value = value;
            this.dispatchEvent(new CustomEvent("change", { detail: value }));
        });
    }

    static get observedAttributes() {
        return ["status", "value", "disabled", "readonly", "focus", "prefix-icon", "suffix-icon", "placeholder"];
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
    get prefixIcon() {
        return this.getAttribute("prefix-icon");
    }
    get suffixIcon() {
        return this.getAttribute("suffix-icon");
    }
    get placeholder() {
        return this.getAttribute("placeholder");
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
    set prefixIcon(value) {
        this.setAttribute("prefix-icon", value);
    }
    set suffixIcon(value) {
        this.setAttribute("suffix-icon", value);
    }
    set placeholder(value) {
        this.setAttribute("placeholder", value);
    }

    connectedCallback() {
        if (this.disabled !== null) {
            this.inputInner.setAttribute("disabled", "disabled");
        }
        if (this.readonly !== null) {
            this.inputInner.setAttribute("readonly", "");
        }
        if (this.placeholder !== null) {
            this.inputInner.setAttribute("placeholder", this.placeholder);
        }
        if (this.prefixIcon !== null) {
            this.preIconInner.setAttribute("name", this.prefixIcon);
            this.preIcon.style.display = "inline-flex";
            this.inputInner.style.paddingLeft = "30px";
        }
        if (this.suffixIcon !== null) {
            this.sufIconInner.setAttribute("name", this.suffixIcon);
            this.sufIcon.style.display = "inline-flex";
            this.inputInner.style.paddingRight = "30px";
        }
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {
        if (attr === "disabled") {
            if (val === null) {
                this.inputInner.removeAttribute("disabled");
            } else {
                this.inputInner.setAttribute("disabled", "");
            }
        }
        if (attr === "prefix-icon") {
            if (val === null || val === "") {
                this.preIcon.style.display = "none";
                this.preIconInner.removeAttribute("name");
                this.inputInner.style.paddingLeft = "15px";
            } else {
                this.preIconInner.setAttribute("name", val);
                this.preIcon.style.display = "inline-flex";
                this.inputInner.style.paddingLeft = "30px";
            }
        }
        if (attr === "suffix-icon") {
            if (val === null || val === "") {
                this.sufIcon.style.display = "none";
                this.sufIconInner.removeAttribute("name");
                this.inputInner.style.paddingRight = "15px";
            } else {
                this.sufIconInner.setAttribute("name", val);
                this.sufIcon.style.display = "inline-flex";
                this.inputInner.style.paddingRight = "30px";
            }
        }
        if (attr === "placeholder") {
            if (val === null) {
                this.inputInner.removeAttribute("placeholder");
            } else {
                this.inputInner.setAttribute("placeholder", val);
            }
        }
    }
}

if (!customElements.get("ivy-input")) {
    customElements.define("ivy-input", Input);
}
