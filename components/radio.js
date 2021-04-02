import { $_text_color, $_color_primary } from "../utils/var.js";
import { findElementUpward, findElementsDownward, findBrothersElements } from "../utils/assist.js";

class Radio extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    margin-right: 30px;
                }
                :host(:last-of-type) {
                    margin-right: 0;
                }
                .ivy-radio {
                    color: var(--text-color, ${$_text_color});
                    font-weight: 500;
                    font-size: 14px;
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    user-select: none;
                }
                .ivy-radio-input {
                    white-space: nowrap;
                    cursor: pointer;
                    outline: none;
                    display: inline-flex;
                    align-items: center;
                    line-height: 1;
                    position: relative;
                }
                .ivy-radio-inner {
                    border: 1px solid #dcdfe6;
                    border-radius: 100%;
                    width: 14px;
                    height: 14px;
                    background-color: #fff;
                    position: relative;
                    cursor: pointer;
                    display: inline-block;
                    box-sizing: border-box;
                }
                .ivy-radio-inner::after {
                    width: 4px;
                    height: 4px;
                    border-radius: 100%;
                    background-color: #fff;
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%) scale(0);
                    transition: transform .15s ease-in;
                }
                :host([checked]) .ivy-radio-inner {
                    background-color: var(--color-primary, ${$_color_primary});
                    border-color: var(--color-primary, ${$_color_primary});
                }
                :host([checked]) .ivy-radio-inner::after {
                    transform: translate(-50%, -50%) scale(1);
                }
                :host([disabled]) .ivy-radio-inner {
                    background-color: #edf2fc;
                    border-color: #dcdfe6;
                    cursor: not-allowed;
                }
                :host([disabled][checked]) .ivy-radio-inner {
                    background-color: #f2f6fc;
                    border-color: #dcdfe6;
                }
                :host([disabled][checked]) .ivy-radio-inner::after {
                    border-color: #c0c4cc;
                }
                .ivy-radio-original {
                    opacity: 0;
                    outline: none;
                    position: absolute;
                    margin: 0;
                    width: 0;
                    height: 0;
                    z-index: -1;
                }
                .ivy-radio-label {
                    display: inline-block;
                    padding-left: 8px;
                    line-height: 19px;
                    font-size: 14px;
                }
            </style>
            <label class="ivy-radio">
                <span class="ivy-radio-input">
                    <span class="ivy-radio-inner"></span>
                    <input class="ivy-radio-original" type="checkbox" aria-hidden="false" />
                </span>
                <span class="ivy-radio-label">
                    <slot></slot>
                </span>
            </label>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.root = this._shadowRoot.querySelector(".ivy-radio");
        this.checkOriginal = this._shadowRoot.querySelector(".ivy-radio-original");

        this.checkOriginal.addEventListener("change", ev => {
            const checkboxGroup = findElementUpward(this, "ivy-radio-group");
            const brother = findBrothersElements(this, "ivy-radio");
            const checked = ev.target.checked;
            if (checkboxGroup !== null) {
                if (checked) {
                    brother.map(c => {
                        const checked = c.checkOriginal.checked;
                        console.log(checked, "checked");
                        if (checked) {
                            c.root.click();
                            console.log(c.checkOriginal.checked, "c.checkOriginal.checked");
                            c.removeAttribute("checked");
                        }
                    });
                    this.checked = "";
                    checkboxGroup.value = this.label;
                }
                checkboxGroup.dispatchEvent(new CustomEvent("change", { detail: { value: checkboxGroup.value } }));
            } else {
                if (checked) {
                    this.checked = "";
                    this.value = this.trueLabel || true;
                } else {
                    this.removeAttribute("checked");
                    this.value = this.falseLabel || false;
                }
                this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }));
            }
        });
    }

    static get observedAttributes() {
        return ["value", "checked", "label", "true-label", "false-label", "disabled"];
    }

    get value() {
        return this.getAttribute("value");
    }
    get checked() {
        return this.getAttribute("checked");
    }
    get label() {
        return this.getAttribute("label");
    }
    get trueLabel() {
        return this.getAttribute("true-label");
    }
    get falseLabel() {
        return this.getAttribute("false-label");
    }
    get disabled() {
        return this.getAttribute("disabled");
    }

    set value(value) {
        this.setAttribute("value", value);
    }
    set checked(value) {
        this.setAttribute("checked", value);
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    set trueLabel(value) {
        this.setAttribute("true-label", value);
    }
    set falseLabel(value) {
        this.setAttribute("false-label", value);
    }
    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    connectedCallback() {
        if (this.checked !== null) {
            this.checkOriginal.setAttribute("checked", "checked");
            const checkboxGroup = findElementUpward(this, "ivy-radio-group");
            if (checkboxGroup === null) {
                this.value = this.label || true;
            }
        } else {
            this.value = this.falseLabel || false;
        }
        if (this.disabled !== null) {
            this.checkOriginal.setAttribute("disabled", "disabled");
        }
    }

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "disabled") {
            if (val === null) {
                this.checkOriginal.removeAttribute("disabled");
            } else {
                this.checkOriginal.setAttribute("disabled", "disabled");
            }
        }
    }

    disconnectedCallback() {}
}

if (!customElements.get("ivy-radio")) {
    customElements.define("ivy-radio", Radio);
}

class RadioGroup extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {}
            </style>
            <slot></slot>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.value = null;
    }

    static get observedAttributes() {
        return ["disabled"];
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    connectedCallback() {
        const checkboxList = findElementsDownward(this, "ivy-radio");
        checkboxList.map(cur => {
            const checked = cur.getAttribute("checked");
            if (checked !== null) {
                this.value = cur.getAttribute("label");
            }
            if (this.disabled !== null) {
                cur.setAttribute("disabled", "");
            }
        });
    }

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "disabled") {
            const checkboxList = findElementsDownward(this, "ivy-radio");
            if (val === null) {
                checkboxList.map(cur => {
                    cur.removeAttribute("disabled");
                });
            } else {
                checkboxList.map(cur => {
                    cur.setAttribute("disabled", "");
                });
            }
        }
    }

    disconnectedCallback() {}
}

if (!customElements.get("ivy-radio-group")) {
    customElements.define("ivy-radio-group", RadioGroup);
}
