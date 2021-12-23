import { findElementsDownward, buildShadowRoot } from "../../ivy-ui/src/utils/assist.js";
import { $_color_primary } from "../../ivy-ui/src/utils/var.js";

export class Breadcrumb extends HTMLElement {
    constructor() {
        super();
        const html = `
            <style>:host{font-size: 0;}</style>
            <slot></slot>
        `;
        buildShadowRoot(html, this);
    }

    static get observedAttributes() {
        return ["separator"];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "separator":
                this.render(newVal);
                break;
            default:
                break;
        }
    }

    get separator() {
        return this.getAttribute("separator") || "/";
    }
    set separator(val) {
        if (val) {
            this.setAttribute("separator", val);
        } else {
            this.removeAttribute("separator");
        }
    }

    render(separator) {
        const stepList = findElementsDownward(this, "ivy-breadcrumb-item");
        if (stepList && stepList.length) {
            stepList.map((co, i) => {
                co.setAttribute("separator", separator || "/");
            });
        }
    }
}

export class BreadcrumbItem extends HTMLElement {
    constructor() {
        super();
        const html = `
            <style>
                :host {
                    display: inline-flex;
                    align-items: center;
                    align-content: center;
                }
                .separator {
                    margin: 0 9px;
                    color: #c0c4cc;
                    font-size: 14px;
                    font-style: normal;
                }
                :host(:last-child) .separator {
                    display: none;
                }
                .item{
                    text-decoration: none;
                    color: #606266;
                    transition: color 0.3s ease-in;
                    font-size: 14px;
                }
                :host([href]) .item {
                    color: #303133;
                    cursor: pointer;
                }
                :host([href]:hover) .item {
                    color: var(--color-primary, ${$_color_primary});
                }
            </style>
            <a class="item"><slot></slot></a>
            <i class="separator"></i>
        `;
        this.$shadowRoot = buildShadowRoot(html, this);
        this.$separator = this.$shadowRoot.querySelector(".separator");
        this.$link = this.$shadowRoot.querySelector(".item");
    }

    static get observedAttributes() {
        return ["separator", "href"];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "separator":
                this.$separator.textContent = newVal;
                break;
            case "href":
                this.$link.setAttribute("href", newVal);
                break;
            default:
                break;
        }
    }

    get separator() {
        return this.getAttribute("separator") || "/";
    }
    set separator(val) {
        if (val) {
            this.setAttribute("separator", val);
        } else {
            this.removeAttribute("separator");
        }
    }

    get href() {
        return this.getAttribute("href");
    }
    set href(val) {
        if (val) {
            this.setAttribute("href", val);
        } else {
            this.removeAttribute("href");
        }
    }

    connectedCallback() {
        this.$separator.textContent = this.separator;
    }
}
