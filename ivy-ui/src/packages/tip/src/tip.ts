import { $_color_primary, $_color_success, $_color_warn, $_color_error, $_color_info } from "@/utils/var.js";

export default class Tip extends HTMLElement {
    _shadowRoot: ShadowRoot;
    $title: any;
    constructor() {
        super();

        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    padding: 12px 24px;
                    box-sizing: border-box;
                    overflow: hidden;
                    background-color: var(--ivy-tip-bg-color, #f4f4f5);
                    color: var(--ivy-tip-color, ${$_color_info});
                    border-radius: var(--ivy-tip-border-radius, 4px);
                }
                :host([line]) {
                    border-left-width: var(--icy-tip-line-width, 4px);
                    border-left-style: solid;
                    border-left-color: var(--ivy-tip-line-color);
                }
                p{
                    margin: 0;
                }
                .title{
                    font-weight: 600;
                    font-size: var(--ivy-tip-title-font-size, 15px);
                    display: none;
                    margin-bottom: 6px;
                }
                .content {
                    font-size: var(--ivy-tip-font-size, 13px);
                }
                :host([type="info"]) {
                    background-color: rgb(236, 245, 255);
                    color: var(--color-primary, ${$_color_primary});
                }
                :host([type="info"][line]) {
                    border-left-color: var(--color-primary, ${$_color_primary});
                }
                :host([type="success"])  {
                    background-color: #f0f9eb;
                    color: var(--color-success, ${$_color_success});
                }
                :host([type="success"][line]) {
                    border-left-color: var(--color-success, ${$_color_success});
                }
                :host([type="warning"])  {
                    background-color: #fdf6ec;
                    color: var(--color-warning, ${$_color_warn});
                }
                :host([type="warning"][line]) {
                    border-left-color: var(--color-warn, ${$_color_warn});
                }
                :host([type="error"])  {
                    background-color: #fef0f0;
                    color: var(--color-error, ${$_color_error});
                }
                :host([type="error"][line]) {
                    border-left-color: var(--color-error, ${$_color_error});
                }

            </style>
            <p class="title"></p>
            <p class="content">
                <slot></slot>
            </p>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$title = this._shadowRoot.querySelector(".title");
    }

    static get observedAttributes() {
        return ["line", "title", "type"];
    }

    get line() {
        return this.getAttribute("line");
    }
    set line(value) {
        if (this.getAttribute("line")) {
            this.setAttribute("line", value || "");
        } else {
            this.removeAttribute("line");
        }
    }

    get title() {
        return this.getAttribute("title") || "";
    }
    set title(text) {
        this.setAttribute("title", text);
    }

    get type() {
        return this.getAttribute("type");
    }
    set type(value) {
        if (this.getAttribute("type")) {
            this.setAttribute("type", value || "");
        } else {
            this.removeAttribute("type");
        }
    }

    valueReg = /^\d+$/;

    attributeChangedCallback(attr: string, oldVal: string, val: string) {
        if (attr === "title" && val !== oldVal) {
            this.$title.textContent = val;
            if (val) {
                this.$title.style.display = "block";
            } else {
                this.$title.style.display = "none";
            }
        }
    }

    connectedCallback() {
        // if (this.type === null) {
        //     this.type = "info";
        // }
    }
}
