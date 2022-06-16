import { $_text_color, $_color_primary } from "../../../ivy-ui/src/utils/var.js";
import { findElementUpward, findElementsDownward } from "../../../ivy-ui/src/utils/assist.js";

class Checkbox extends HTMLElement {
    _shadowRoot: ShadowRoot;
    checkOriginal: any;
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
                .ivy-checkbox {
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
                .ivy-checkbox-input {
                    white-space: nowrap;
                    cursor: pointer;
                    outline: none;
                    display: inline-flex;
                    align-items: center;
                    line-height: 1;
                    position: relative;
                }
                .ivy-checkbox-inner {
                    display: inline-block;
                    position: relative;
                    border: 1px solid #dcdfe6;
                    border-radius: 2px;
                    box-sizing: border-box;
                    width: 14px;
                    height: 14px;
                    background-color: #fff;
                    z-index: 1;
                    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
                }
                .ivy-checkbox-inner::after {
                    box-sizing: content-box;
                    content: "";
                    border: 1px solid #fff;
                    border-left: 0;
                    border-top: 0;
                    height: 7px;
                    left: 4px;
                    position: absolute;
                    top: 1px;
                    transform: rotate(45deg) scaleY(0);
                    width: 3px;
                    transition: transform 0.15s ease-in 0.05s;
                    transform-origin: center;
                }
                :host([checked]) .ivy-checkbox-inner {
                    background-color: var(--color-primary, ${$_color_primary});
                    border-color: var(--color-primary, ${$_color_primary});
                }
                :host([checked]) .ivy-checkbox-inner::after {
                    transform: rotate(45deg) scaleY(1);
                }
                :host([disabled]) .ivy-checkbox-inner {
                    background-color: #edf2fc;
                    border-color: #dcdfe6;
                    cursor: not-allowed;
                }
                :host([disabled][checked]) .ivy-checkbox-inner {
                    background-color: #f2f6fc;
                    border-color: #dcdfe6;
                }
                :host([disabled][checked]) .ivy-checkbox-inner::after {
                    border-color: #c0c4cc;
                }
                .ivy-checkbox-original {
                    opacity: 0;
                    outline: none;
                    position: absolute;
                    margin: 0;
                    width: 0;
                    height: 0;
                    z-index: -1;
                }
                .ivy-checkbox-label {
                    display: inline-block;
                    padding-left: 8px;
                    line-height: 19px;
                    font-size: 14px;
                }
            </style>
            <label class="ivy-checkbox">
                <span class="ivy-checkbox-input">
                    <span class="ivy-checkbox-inner"></span>
                    <input class="ivy-checkbox-original" type="checkbox" aria-hidden="false" />
                </span>
                <span class="ivy-checkbox-label">
                    <slot></slot>
                </span>
            </label>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.checkOriginal = this._shadowRoot.querySelector(".ivy-checkbox-original");

        this.checkOriginal.addEventListener("change", () => {
            const checkboxGroup = findElementUpward(this, "ivy-checkbox-group");
            const checked = this.checkOriginal.checked;
            if (checkboxGroup !== null) {
                console.log(checkboxGroup);
                if (checked) {
                    this.checked = "";
                    checkboxGroup.value.push(this.label);
                } else {
                    this.removeAttribute("checked");
                    const index = checkboxGroup.value.indexOf(this.label);
                    checkboxGroup.value.splice(index, 1);
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
        if (this.getAttribute("value")) {
            this.setAttribute("value", value || "");
        } else {
            this.removeAttribute("value");
        }
    }
    set checked(value) {
        if (this.getAttribute("checked")) {
            this.setAttribute("checked", value || "");
        } else {
            this.removeAttribute("checked");
        }
    }
    set label(value) {
        if (this.getAttribute("label")) {
            this.setAttribute("label", value || "");
        } else {
            this.removeAttribute("label");
        }
    }
    set trueLabel(value) {
        if (this.getAttribute("trueLabel")) {
            this.setAttribute("trueLabel", value || "");
        } else {
            this.removeAttribute("trueLabel");
        }
    }
    set falseLabel(value) {
        if (this.getAttribute("falseLabel")) {
            this.setAttribute("falseLabel", value || "");
        } else {
            this.removeAttribute("falseLabel");
        }
    }
    set disabled(value) {
        if (this.getAttribute("disabled")) {
            this.setAttribute("disabled", value || "");
        } else {
            this.removeAttribute("disabled");
        }
    }

    connectedCallback() {
        if (this.checked !== null) {
            this.checkOriginal.setAttribute("checked", "checked");
            const checkboxGroup = findElementUpward(this, "ivy-checkbox-group");
            if (checkboxGroup === null) {
                this.value = this.trueLabel || true;
            }
        } else {
            this.value = this.falseLabel || false;
        }
        if (this.disabled !== null) {
            this.checkOriginal.setAttribute("disabled", "disabled");
        }
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {
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

if (!customElements.get("ivy-checkbox")) {
    customElements.define("ivy-checkbox", Checkbox);
}

class CheckboxGroup extends HTMLElement {
    _shadowRoot: ShadowRoot;
    value: any[];
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
        this.value = [];
    }

    static get observedAttributes() {
        return ["disabled"];
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        if (this.getAttribute("disabled")) {
            this.setAttribute("disabled", value || "");
        } else {
            this.removeAttribute("disabled");
        }
    }

    connectedCallback() {
        const checkboxList = findElementsDownward(this, "ivy-checkbox");
        checkboxList.map(cur => {
            const checked = cur.getAttribute("checked");
            if (checked !== null) {
                this.value.push(cur.getAttribute("label"));
            }
            if (this.disabled !== null) {
                cur.setAttribute("disabled", "");
            }
        });
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {
        if (attr === "disabled") {
            const checkboxList = findElementsDownward(this, "ivy-checkbox");
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

if (!customElements.get("ivy-checkbox-group")) {
    customElements.define("ivy-checkbox-group", CheckboxGroup);
}
