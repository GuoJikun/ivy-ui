import "../../../icon/src/index.js";
import { type } from "../utils/type.js";
import { $_border_color_base, $_border_radius, $_color_primary, $_shadow_base } from "../utils/var.js";
import { findElementsDownward } from "../utils/assist.js";
import { createPopper } from "@popperjs/core";

class Select extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 224px;
                    position: relative;
                }
                .ivy-select {
                    display: block;
                    position: relative;
                }
                .ivy-select-input-box {
                    position: relative;
                }
                .ivy-select-input-box ivy-icon {
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    margin-top: -7px;
                    transition: transform 0.3s;
                    transform: rotate(0);
                    color: #C0C4CC;
                    pointer-events: none;
                }
                :host([show]) .ivy-select-input-box ivy-icon {
                    transform: rotate(-180deg);
                }
                .ivy-select-input {
                    background-color: #fff;
                    background-image: none;
                    border-radius: var(--border-radius, ${$_border_radius});
                    border: 1px solid var(--border-color, ${$_border_color_base});
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    font-size: inherit;
                    height: 34px;
                    line-height: 34px;
                    outline: none;
                    padding: 0 30px 0 15px;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 100%;
                }
                .ivy-select-input::-webkit-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-select-input::-moz-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-select-input:-moz-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-select-input:-ms-input-placeholder {
                    color: #C0C4CC;
                    font-size: 14px;
                }
                .ivy-select-input:active,
                .ivy-select-input:hover,
                .ivy-select-input:focus {
                    border-color: var(--color-primary, ${$_color_primary});
                }
                :host([disabled]) {
                    cursor: not-allowed;
                }
                :host([disabled]) .ivy-select-input {
                    background-color: #f5f7fa;
                    border-color: #e4e7ed;
                    color: #c0c4cc;
                    cursor: not-allowed;
                }
                .ivy-drop {
                    display: none;
                    opacity: 0;
                    transition: opacity 0.3s;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }
                .ivy-drop-body {
                    background-color: white;
                    box-shadow: var(--box-shadow, ${$_shadow_base});
                    padding: 6px 0;
                    box-sizing: border-box;
                    overflow: hidden;
                }
                .ivy-arrow {
                    border-width: 6px;
                    filter: drop-shadow(0 2px 12px rgba(0,0,0, 0.03));
                }
                
                .ivy-arrow::after {
                    position: absolute;
                    display: block;
                    width: 0;
                    height: 0;
                    border-color: transparent;
                    border-style: solid;
                }
                .ivy-arrow::after {
                    content: "";
                    border-width: 6px;
                }

                :host([placement|="bottom"]) .ivy-arrow::after {
                    top: 1px;
                    margin-left: -6px;
                    border-top-width: 0;
                    border-bottom-color: red;
                }
            </style>
            <div class="ivy-select">
                <div class="ivy-select-input-box">
                    <input class="ivy-select-input"></input>
                    <ivy-icon name="arrow-down"></ivy-icon>
                </div>
                <div class="ivy-drop">
                    <div class="ivy-arrow" data-popper-arrow></div>
                    <div class="ivy-drop-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.select = this._shadowRoot.querySelector(".ivy-select");
        this.drop = this._shadowRoot.querySelector(".ivy-drop");
        this.selectInput = this._shadowRoot.querySelector(".ivy-select-input");

        this.timer = null;
        this.selectInput.addEventListener("click", this.showHandler);
        this.selectInput.addEventListener("keypress", this.showHandler);

        this.drop.addEventListener("click", ev => {
            const target = ev.target;
            const label = target.label;
            const value = target.value;
            const nodeName = target.nodeName.toLowerCase();
            const children = [...this.children];
            if (nodeName === "ivy-option") {
                this.value = value || label || "";
                children.map(cur => {
                    cur.removeAttribute("active");
                });
                target.active = "";
                this.selectInput.value = label || value || "";
            }
        });
        this.popper = createPopper(this, this.drop, {
            placement: "bottom",
            modifiers: [
                {
                    name: "arrow",
                    options: {
                        element: this._shadowRoot.querySelector(".ivy-arrow"),
                        padding: 5,
                    },
                },
                {
                    name: "offset",
                    options: {
                        offset: ({ placement }) => {
                            if (/^(left|right)/.test(placement)) {
                                return [12, 0];
                            } else {
                                return [0, 12];
                            }
                        },
                    },
                },
            ],
        });
    }
    static get observedAttributes() {
        return ["value", "placeholder", "disabled", "show"];
    }

    get value() {
        return this.getAttribute("value");
    }
    get placeholder() {
        return this.getAttribute("placeholder");
    }
    get disabled() {
        return this.getAttribute("disabled");
    }
    get show() {
        return this.getAttribute("show");
    }

    set value(value) {
        this.setAttribute("value", value);
    }
    set placeholder(value) {
        this.setAttribute("placeholder", value);
    }
    set disabled(value) {
        this.setAttribute("disabled", value);
    }
    set show(value) {
        this.setAttribute("show", value);
    }

    showHandler = ev => {
        const type = ev.type;
        const which = ev.which;
        const isEnter = type === "keypress" && which === 13;
        if (isEnter || type === "click") {
            this.show = "";
            if (this.timer !== null) {
                clearTimeout(this.timer);
            }
            this.drop.style.display = "block";
            this.popper.update();
            this.drop.style.opacity = 1;
        }
    };

    hideHandler = () => {
        this.removeAttribute("show");
        this.drop.style.opacity = 0;
        this.timer = setTimeout(() => {
            this.drop.style.display = "none";
            clearTimeout(this.timer);
            this.timer = null;
        }, 300);
        this.popper.update();
    };

    validate(cb) {
        const ivyFormItem = findElementsDownward(this, "ivy-form-item");
        const flag = ivyFormItem.every(item => {
            if (item.validator || item.message) {
                return item.status !== "error";
            } else {
                return true;
            }
        });
        cb(flag);
    }

    connectedCallback() {
        this.popper.update();
        if (this.disabled !== null) {
            this.selectInput.setAttribute("disabled", "disabled");
        }

        this.selectInput.setAttribute("placeholder", this.placeholder || "请选择");
        document.body.addEventListener("click", this.hideHandler, true);
    }

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "value") {
            this.selectInput.value = val;
        }
    }

    disconnectedCallback() {
        document.body.removeEventListener("click", this.hideHandler);
    }
}

if (!customElements.get("ivy-select")) {
    customElements.define("ivy-select", Select);
}

class Option extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .ivy-option {
                    display: block;
                    font-size: 14px;
                    padding: 0 20px;
                    position: relative;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #606266;
                    height: 34px;
                    line-height: 34px;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .ivy-option:hover {
                    background-color: #f5f7fa;
                }
                :host([active]) .ivy-option {
                    color: var(--color-primary, ${$_color_primary});
                }
            </style>
            <div class="ivy-option">
                <slot">${this.label}</slot>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.msg = this._shadowRoot.querySelector(".ivy-form-item-msg");
    }

    static get observedAttributes() {
        return ["active", "label", "required", "message", "validator", "event", "status"];
    }

    get active() {
        return this.getAttribute("active");
    }
    get label() {
        return this.getAttribute("label");
    }
    get required() {
        return this.getAttribute("required");
    }
    get required() {
        return this.getAttribute("required");
    }
    get message() {
        return this.getAttribute("message");
    }
    get validator() {
        return this.getAttribute("validator");
    }
    get event() {
        return this.getAttribute("event");
    }
    get status() {
        return this.getAttribute("status");
    }

    set active(value) {
        this.setAttribute("active", value);
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    set required(value) {
        this.setAttribute("required", value);
    }
    set message(value) {
        this.setAttribute("message", value);
    }
    set validator(value) {
        this.setAttribute("validator", value);
    }
    set event(value) {
        this.setAttribute("event", value);
    }
    set status(value) {
        this.setAttribute("status", value);
    }

    connectedCallback() {}

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "status") {
            if (val === "error") {
                this.msg.style.display = "block";
            } else {
                this.msg.style.display = "none";
            }
        }
    }
}

if (!customElements.get("ivy-option")) {
    customElements.define("ivy-option", Option);
}
