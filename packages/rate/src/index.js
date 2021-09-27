import "../../icon/src/index.js";
import { $_color_primary } from "../../ivy-ui/src/utils/var.js";
import { findElementsDownward } from "../../ivy-ui/src/utils/assist.js";

class Rate extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: inline-block;
                }
                .ivy-rate {
                    display: flex;
                    align-items: center;
                    line-height: 1em;
                }
                .ivy-rate>ivy-icon {
                    transform: scale(1);
                    transition: transform 0.3s;
                    cursor: pointer;
                    box-sizing: border-box;
                }
                .ivy-rate>ivy-icon:hover {
                    transform: scale(1.2);
                }
                :host([disabled])>.ivy-rate>ivy-icon:hover {
                    transform: scale(1);
                    cursor: auto;
                }
            </style>
            <div class="ivy-rate">
                <ivy-icon name="${this.icon}" color="#eeeeee" size="${this.size}"></ivy-icon>
                <ivy-icon name="${this.icon}" color="#eeeeee" size="${this.size}"></ivy-icon>
                <ivy-icon name="${this.icon}" color="#eeeeee" size="${this.size}"></ivy-icon>
                <ivy-icon name="${this.icon}" color="#eeeeee" size="${this.size}"></ivy-icon>
                <ivy-icon name="${this.icon}" color="#eeeeee" size="${this.size}"></ivy-icon>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-rate");

        this.root.addEventListener("click", ev => {
            if (this.disabled !== null) return;
            const target = ev.target;
            const nodeName = target.nodeName.toLowerCase();
            const children = [...this.root.children];
            if (nodeName === "ivy-icon") {
                for (let i of children) {
                    i.setAttribute("color", this.color || $_color_primary);
                    if (target === i) {
                        this.value = children.indexOf(target) + 1;
                        this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
                        break;
                    }
                }
            }
        });
        this.root.addEventListener(
            "mouseenter",
            ev => {
                if (this.disabled !== null) return;
                const target = ev.target;
                const nodeName = target.nodeName.toLowerCase();
                const children = [...this.root.children];
                if (nodeName === "ivy-icon") {
                    for (let i of children) {
                        i.setAttribute("color", this.color || $_color_primary);
                        if (target === i) {
                            break;
                        }
                    }
                }
            },
            true
        );
        this.root.addEventListener(
            "mouseleave",
            ev => {
                if (this.disabled !== null) return;
                const target = ev.target;
                const nodeName = target.nodeName.toLowerCase();
                const children = [...this.root.children];
                if (nodeName === "ivy-icon") {
                    for (let i in children) {
                        if (this.value <= i) {
                            children[i].setAttribute("color", "#eeeeee");
                        }
                    }
                }
            },
            true
        );
    }
    static get observedAttributes() {
        return ["size", "icon", "color", "value", "disabled"];
    }
    get size() {
        return this.getAttribute("size") || 20;
    }
    get icon() {
        return this.getAttribute("icon") || "star-on";
    }
    get color() {
        return this.getAttribute("color") || "";
    }
    get value() {
        return this.getAttribute("value") || "0";
    }
    get disabled() {
        return this.getAttribute("disabled");
    }

    set color(value) {
        this.setAttribute("color", value);
    }
    set value(value) {
        this.setAttribute("value", value);
    }
    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    connectedCallback() {
        const children = findElementsDownward(this.root, "ivy-icon");
        [...children].map((ele, i) => {
            if (i < this.value) {
                ele.setAttribute("color", this.color || $_color_primary);
            }
        });
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "value") {
            const children = findElementsDownward(this.root, "ivy-icon");
            [...children].map((ele, i) => {
                if (i < this.value) {
                    ele.setAttribute("color", this.color || $_color_primary);
                }
            });
        }
    }
}

if (!customElements.get("ivy-rate")) {
    customElements.define("ivy-rate", Rate);
}
