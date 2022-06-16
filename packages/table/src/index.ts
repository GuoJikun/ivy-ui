import "../../icon/src/index.js";
import { type } from "../../../ivy-ui/src/utils/type.js";
import { $_border_color_base } from "../../../ivy-ui/src/utils/var.js";

class Table extends HTMLElement {
    _shadowRoot: ShadowRoot;
    table: any;
    tableHeader: any;
    tableHeaderInner: any;
    tableBody: any;
    tableBodyInner: any;
    columns: any[];
    data: any[];
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                }
                .ivy-table {
                    position: relative;
                }
                .ivy-table-header,
                .ivy-table-body {
                    width: 100%;
                }
                .ivy-table-loading {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: none;
                    opacity: 1;
                    transition: opacity 0.3s;
                    background-color: hsla(0, 0%, 100%, 0.9);
                    justify-content: center;
                    align-items: center;
                }
                .ivy-table-column-cell .ivy-cell {
                    box-sizing: border-box;
                    padding-left: 10px;
                    padding-right: 10px;
                }
                .ivy-table td {
                    padding: 8px 0;
                    min-width: 0;
                    box-sizing: border-box;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    text-align: left;
                }
                .ivy-table-body .ivy-table-column-cell {
                    border-top: 1px solid var(--border-color, ${$_border_color_base});
                }
                table {
                    border-collapse: collapse;
                }
                :host([loading]) .ivy-table-loading {
                    display: flex;
                }
            </style>
            <div class="ivy-table">
                <table class="ivy-table-header">
                    <tbody class="ivy-table-header-inner">
                        
                    </tbody>
                </table>
                <table class="ivy-table-body">
                    <tbody class="ivy-table-body-inner">
                        <slot></slot>
                    </tbody>
                </table>
                <div class="ivy-table-loading">
                    <slot name="loading">
                        <ivy-icon name="loading" size="18" color="gray" spin></ivy-icon>
                    </slot>
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.table = this._shadowRoot.querySelector(".ivy-table");
        this.tableHeader = this._shadowRoot.querySelector(".ivy-table-header");
        this.tableHeaderInner = this._shadowRoot.querySelector(".ivy-table-header-inner");
        this.tableBody = this._shadowRoot.querySelector(".ivy-table-body");
        this.tableBodyInner = this._shadowRoot.querySelector(".ivy-table-body-inner");

        this.data = [];
        this.columns = [];
    }
    static get observedAttributes() {
        return ["data-source", "border", "loading"];
    }

    get dataSource() {
        return this.getAttribute("data-source");
    }
    get border() {
        return this.getAttribute("border");
    }
    get loading() {
        return this.getAttribute("loading");
    }

    set dataSource(value) {
        if (this.getAttribute("dataSource")) {
            this.setAttribute("dataSource", value || "");
        } else {
            this.removeAttribute("dataSource");
        }
    }
    set border(value) {
        if (this.getAttribute("border")) {
            this.setAttribute("border", value || "");
        } else {
            this.removeAttribute("border");
        }
    }
    set loading(value) {
        if (this.getAttribute("loading")) {
            this.setAttribute("loading", value || "");
        } else {
            this.removeAttribute("loading");
        }
    }

    renderHeader(label: string, i: number) {
        return `<td class="ivy-table-column-${i} ivy-table-column-cell  ivy-table-column-cell-header"><div class="ivy-cell">${label}</div></td>`;
    }

    renderCol(width: number, i: number) {
        return `<col width='${width}' class="ivy-table-column-${i}">`;
    }

    renderBody(data: any[], columns: any[]) {
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

    connectedCallback() {
        const children = [...this.children];

        const tableStyle = getComputedStyle(this);
        const tableWidth = tableStyle["width"];
        this.tableHeader.style.width = tableWidth;
        this.tableBody.style.width = tableWidth;

        let fixWidth = 0;
        let minWidth = 0;
        let autoWidthCount = 0;

        let columns = children.map(cur => {
            const width = cur.getAttribute("width");
            const minWidths = cur.getAttribute("minWidth");
            if (width !== null) {
                fixWidth += parseFloat(width);
            } else {
                autoWidthCount++;
                if (minWidths !== null) {
                    minWidth += parseFloat(minWidths);
                }
            }

            return {
                prop: cur.getAttribute("prop"),
                label: cur.getAttribute("label"),
                width: width,
                minWidth: cur.getAttribute("minWidth"),
            };
        });
        this.columns = columns;

        const tableWidthMin = parseFloat(tableWidth) - fixWidth;

        let header: any[] = [];
        let colgroup: any[] = [];

        columns.map((cur, i) => {
            header.push(this.renderHeader(cur.label as string, i));
            let width = 0;
            if (cur.width !== null) {
                width = parseFloat(cur.width);
            } else {
                if (cur.minWidth !== null) {
                    width = (parseFloat(cur.minWidth) / minWidth) * tableWidthMin;
                } else {
                    width = tableWidthMin / autoWidthCount;
                }
            }

            colgroup.push(this.renderCol(width, i));
        });

        const colgroupEle = document.createElement("colgroup");
        const colgroupEleClone = document.createElement("colgroup");
        colgroupEle.innerHTML = colgroup.join("");
        colgroupEleClone.innerHTML = colgroup.join("");
        this.tableHeader.insertBefore(colgroupEle, this.tableHeaderInner);
        this.tableBody.insertBefore(colgroupEleClone, this.tableBodyInner);
        this.tableHeaderInner.innerHTML = `<tr>${header.join("")}</tr>`;

        if (this.dataSource !== null) {
            try {
                const tableBody = this.renderBody(JSON.parse(this.dataSource), columns);
                this.tableBodyInner.innerHTML = tableBody.join("");
            } catch (error) {
                throw "ivy-table组件的data-source属性必须是JSON字符串";
            }
        }
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {
        if (attr === "data-source") {
            try {
                const data = JSON.parse(val);
                const tableBody = this.renderBody(data, this.columns);
                this.tableBodyInner.innerHTML = tableBody.join("");
            } catch (error) {
                throw "ivy-table组件的data-source属性必须是JSON字符串";
            }
        }
    }
}

if (!customElements.get("ivy-table")) {
    customElements.define("ivy-table", Table);
}

class TableColumn extends HTMLElement {
    _shadowRoot: ShadowRoot;
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {}
            </style>
            <div>
                <slot></slot>
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
        return this.getAttribute("label") || "";
    }
    get width() {
        return this.getAttribute("width");
    }
    get minWidth() {
        return this.getAttribute("minWidth");
    }

    set prop(value) {
        if (this.getAttribute("prop")) {
            this.setAttribute("prop", value || "");
        } else {
            this.removeAttribute("prop");
        }
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    set width(value) {
        if (this.getAttribute("width")) {
            this.setAttribute("width", value || "");
        } else {
            this.removeAttribute("width");
        }
    }
    set minWidth(value) {
        if (this.getAttribute("minWidth")) {
            this.setAttribute("minWidth", value || "");
        } else {
            this.removeAttribute("minWidth");
        }
    }
}

if (!customElements.get("ivy-table-column")) {
    customElements.define("ivy-table-column", TableColumn);
}
