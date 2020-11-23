import "./icon.js";
import { type } from "../utils/type.js";
import { $_border_color_base } from "../utils/var.js";

class Form extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                }
                
            </style>
            <form>
                
            </form>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.tableHeader = this._shadowRoot.querySelector(".ivy-table-header");
        this.tableHeaderInner = this._shadowRoot.querySelector(".ivy-table-header-inner");
        this.tableBody = this._shadowRoot.querySelector(".ivy-table-body");
        this.tableBodyInner = this._shadowRoot.querySelector(".ivy-table-body-inner");

        this.columns = [];
    }
    static get observedAttributes() {
        return ["dataSource", "border"];
    }

    get dataSource() {
        return this.getAttribute("dataSource");
    }
    get border() {
        return this.getAttribute("border");
    }

    set dataSource(value) {
        this.setAttribute("dataSource", value);
    }
    set border(value) {
        this.setAttribute("border", value);
    }

    renderHeader(label, i) {
        return `<td class="ivy-table-column-${i} ivy-table-column-cell  ivy-table-column-cell-header"><div class="ivy-cell">${label}</div></td>`;
    }

    renderCol(width, i) {
        return `<col width='${width}' class="ivy-table-column-${i}">`;
    }

    renderBody(data, columns) {
        return data.map(cur => {
            const trInner = columns
                .map((item, i) => {
                    return `<td class="ivy-table-column-${i} ivy-table-column-cell"><div class="ivy-cell">${
                        cur[item.prop] || ""
                    }</div></td>`;
                })
                .join("");

            return `<tr>${trInner}</tr>`;
        });
    }

    connectedCallback() {}

    attributeChangedCallback(attr, oldVal, val) {}
}

if (!customElements.get("ivy-form")) {
    customElements.define("ivy-form", Form);
}

class FormItem extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .ivy-form-item {
                    display: block;
                    position: relative;
                    margin-bottom: 20px;
                }
                .ivy-form-item-msg {
                    position: absolute;
                    bottom: 100%;
                    font-size: 12px;
                }
            </style>
            <div class="ivy-form-item">
                <div class="ivy-form-item-inner">
                    <slot></slot>
                </div>
                <div class="ivy-form-item-msg"></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["prop", "label", "width", "minWidth"];
    }

    get prop() {
        return this.getAttribute("prop");
    }
    get label() {
        return this.getAttribute("label");
    }
    get width() {
        return this.getAttribute("width");
    }
    get minWidth() {
        return this.getAttribute("minWidth");
    }

    set prop(value) {
        this.setAttribute("prop", value);
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    set width(value) {
        this.setAttribute("width", value);
    }
    set minWidth(value) {
        this.setAttribute("minWidth", value);
    }
}

if (!customElements.get("ivy-form-item")) {
    customElements.define("ivy-form-item", FormItem);
}
