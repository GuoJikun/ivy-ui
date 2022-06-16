import { $_border_color_base, $_color_primary } from "@/utils/var.js";
import "../icon/index.js";

class Tab extends HTMLElement {
    _shadowRoot: ShadowRoot;
    tableWrap: any;
    tableWrapInner: any;
    arrowLeft: any;
    arrowRight: any;
    tableWrapLine: HTMLElement;
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .ivy-tab {}
                .ivy-tab-header {
                    margin-bottom: 15px;
                    display: flex;
                    position: relative;
                }
                .ivy-tab-header::after {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    content: "";
                    display: block;
                    width: 100%;
                    height: 1px;
                    background-color: var(--border-color, ${$_border_color_base});
                    z-index: -1;
                }
                .ivy-tab-header-arrow {
                    flex: 0 0 30px;
                    width: 30px;
                    align-content: center;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    display: none;
                }
                .ivy-tab-header-arrow:hover ivy-icon[name="^arrow"] {
                    color: var(--color-primary, $_color_primary) !important;
                }
                .ivy-tab-wrap {
                    flex: 0 0 100%;
                    overflow: hidden;
                    display: inline-flex;
                }
                .ivy-tab-wrap-inner {
                    display: flex;
                    position: relative;
                    transition: left 0.3s;
                    left: 0;
                }
                .ivy-tab-wrap-item {
                    padding: 0 20px;
                    height: 40px;
                    box-sizing: border-box;
                    line-height: 40px;
                    display: inline-block;
                    list-style: none;
                    font-size: 14px;
                    font-weight: 500;
                    color: #303133;
                    position: relative;
                    cursor: pointer;
                    word-break: keep-all;
                }
                .ivy-tab-wrap-item-first {
                    padding-left: 0;
                }
                .ivy-tab-wrap-item-last {
                    padding-right: 0;
                }
                .ivy-tab-wrap-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 1px;
                    background-color: var(--color-primary, ${$_color_primary});
                    transition: left 0.3s, width 0.3s;
                }
            </style>
            <div class="ivy-tab">
                <div class="ivy-tab-header">
                    <div class="ivy-tab-header-arrow ivy-tab-header-arrow-left">
                        <ivy-icon name="arrow-left"></ivy-icon>
                    </div>
                    <div class="ivy-tab-wrap">
                        <div class="ivy-tab-wrap-inner">
                            <div class="ivy-tab-wrap-line"></div>
                        </div>
                    </div>
                    <div class="ivy-tab-header-arrow ivy-tab-header-arrow-right">
                        <ivy-icon name="arrow-right"></ivy-icon>
                    </div>
                </div>
                <div>
                    <slot></slot>
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.tableWrap = this._shadowRoot.querySelector(".ivy-tab-wrap");
        this.tableWrapInner = this._shadowRoot.querySelector(".ivy-tab-wrap-inner");
        this.arrowLeft = this._shadowRoot.querySelector(".ivy-tab-header-arrow-left");
        this.arrowRight = this._shadowRoot.querySelector(".ivy-tab-header-arrow-right");
        this.tableWrapLine = this;

        this.tableWrapInner.addEventListener("click", (ev: any) => {
            const target = ev.target;
            const classList = [...target.classList];

            const name = target.getAttribute("name");
            const children = [...this.children];
            if (classList.includes("ivy-tab-wrap-item")) {
                children.map(cur => {
                    if (cur.getAttribute("name") === name) {
                        cur.setAttribute("active", "");
                        this.active = name;
                    } else {
                        cur.removeAttribute("active");
                    }
                });
            }
            // this.dispatchEvent(new CustomEvent("change", { detail: name }));
            const width = getComputedStyle(target)["width"];
            const paddingLeft = getComputedStyle(target)["paddingLeft"];
            const paddingRight = getComputedStyle(target)["paddingRight"];
            const lastWidth = parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight);
            const offset = target.offsetLeft;
            this.tableWrapLine.style.width = `${lastWidth}px`;
            this.tableWrapLine.style.left = `${offset + parseFloat(paddingLeft)}px`;
        });

        this.arrowLeft.addEventListener("click", (ev: any) => {
            const left = getComputedStyle(this.tableWrapInner)["left"];
            const leftN = parseFloat(left);
            if (leftN < -60) {
                this.tableWrapInner.style.left = `${leftN + 60}px`;
            } else {
                this.tableWrapInner.style.left = 0;
            }
        });
        this.arrowRight.addEventListener("click", (ev: any) => {
            const innerStyle = getComputedStyle(this.tableWrapInner);
            const left = innerStyle["left"];
            const width = innerStyle["width"];
            const leftN = parseFloat(left);
            const widthN = parseFloat(width);
            const wrapWidth = parseFloat(getComputedStyle(this.tableWrap)["width"]);
            if (wrapWidth - leftN < widthN - 60) {
                this.tableWrapInner.style.left = `${leftN - 60}px`;
            } else {
                this.tableWrapInner.style.left = `-${widthN - wrapWidth}px`;
            }
        });
    }
    static get observedAttributes() {
        return ["active"];
    }

    get active() {
        return this.getAttribute("active") || "0";
    }

    set active(value) {
        this.setAttribute("active", value);
    }

    connectedCallback() {
        const titles = ['<div class="ivy-tab-wrap-line"></div>'];
        const children = [...this.children];
        children.map((ele, i) => {
            const key = ele.getAttribute("name");
            if (i === 0) {
                if (this.active === null) {
                    if (key === null) {
                        ele.setAttribute("name", String(i));
                        this.active = "0";
                    } else {
                        this.active = key;
                    }
                    ele.setAttribute("active", "");
                } else {
                    if (key === null) {
                        ele.setAttribute("name", String(i));
                        if (this.active === String(i)) {
                            ele.setAttribute("active", "");
                        }
                    } else {
                        if (key === this.active) {
                            ele.setAttribute("active", "");
                        }
                    }
                }
            } else {
                if (key === null) {
                    ele.setAttribute("name", String(i));
                    if (this.active === String(i)) {
                        ele.setAttribute("active", "");
                    }
                } else {
                    if (key === this.active) {
                        ele.setAttribute("active", "");
                    }
                }
            }

            titles.push(
                `<div class="ivy-tab-wrap-item ${i === 0 ? "ivy-tab-wrap-item-first" : ""} ${
                    i === children.length - 1 ? "ivy-tab-wrap-item-last" : ""
                }" name="${ele.getAttribute("name")}">${ele.getAttribute("title")}</div>`
            );
        });
        this.tableWrapInner.innerHTML = titles.join("");

        this.tableWrapLine = this._shadowRoot.querySelector(".ivy-tab-wrap-line") as HTMLElement;

        const tableWrapInnerWidth = getComputedStyle(this.tableWrapInner)["width"];
        const tableWrapWidth = getComputedStyle(this.tableWrap)["width"];

        if (parseFloat(tableWrapWidth) < parseFloat(tableWrapInnerWidth)) {
            this.tableWrap.style.flex = "0 0 calc(100% - 60px)";

            (this._shadowRoot.querySelector(".ivy-tab-header-arrow-left") as HTMLElement).style.display = "inline-flex";
            (this._shadowRoot.querySelector(".ivy-tab-header-arrow-right") as HTMLElement).style.display = "inline-flex";
        }

        let headers = [...this.tableWrapInner.children];
        headers = headers.map(v => {
            const flag = v.getAttribute("name") === this.active;
            if (flag) {
                const style = getComputedStyle(v);
                const width = style["width"];
                const offset = v.offsetLeft;
                const paddingLeft = style["paddingLeft"];
                const paddingRight = style["paddingRight"];
                const lastWidth = parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight);
                this.tableWrapLine.style.width = `${lastWidth}px`;
                this.tableWrapLine.style.left = `${offset + parseFloat(paddingLeft)}px`;
            }
        });
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {
        if (attr === "active") {
            const children = [...this.children];
            const headerList = [...this.tableWrapInner.children].filter(item => {
                const classList = [...item.classList];
                return classList.includes("ivy-tab-wrap-item");
            });
            children.map(cur => {
                if (cur.getAttribute("name") === val) {
                    cur.setAttribute("active", "");
                } else {
                    cur.removeAttribute("active");
                }
            });

            headerList.map(cur => {
                const name = cur.getAttribute("name");
                if (val === name) {
                    const width = getComputedStyle(cur)["width"];
                    const paddingLeft = getComputedStyle(cur)["paddingLeft"];
                    const paddingRight = getComputedStyle(cur)["paddingRight"];
                    const lastWidth = parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight);
                    const offset = cur.offsetLeft;
                    this.tableWrapLine.style.width = `${lastWidth}px`;
                    this.tableWrapLine.style.left = `${offset + parseFloat(paddingLeft)}px`;
                }
            });

            this.dispatchEvent(new CustomEvent("change", { detail: val }));
        }
    }
}

if (!customElements.get("ivy-tab")) {
    customElements.define("ivy-tab", Tab);
}

class TabPane extends HTMLElement {
    _shadowRoot: ShadowRoot;
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: none;
                }
                :host([active]) {
                    display: block;
                }
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
        return ["title", "name", "active"];
    }

    get title() {
        return this.getAttribute("title") || "";
    }

    get name() {
        return this.getAttribute("name");
    }

    get active() {
        return this.getAttribute("active");
    }

    set title(value) {
        this.setAttribute("title", value);
    }

    set name(value) {
        if (this.getAttribute("name")) {
            this.setAttribute("name", value || "");
        } else {
            this.removeAttribute("name");
        }
    }

    set active(value) {
        if (this.getAttribute("active")) {
            this.setAttribute("active", value || "");
        } else {
            this.removeAttribute("active");
        }
    }

    connectedCallback() {}

    attributeChangedCallback(attr: string, oldVal: string, val: string) {}
}

if (!customElements.get("ivy-tab-pane")) {
    customElements.define("ivy-tab-pane", TabPane);
}
