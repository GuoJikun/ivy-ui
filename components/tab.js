import { $_border_color_base } from "../utils/var.js";

class Tab extends HTMLElement {
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
                    border-bottom: 1px solid var(--border-color, ${$_border_color_base});
                }
                .ivy-tab-wrap-inner {
                    display: flex;
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
                }
                .ivy-tab-wrap-item-first {
                    padding-left: 0;
                }
                .ivy-tab-wrap-item-last {
                    padding-right: 0;
                }
            </style>
            <div class="ivy-tab">
                <div class="ivy-tab-header">
                    <div></div>
                    <div class="ivy-tab-wrap">
                        <div class="ivy-tab-wrap-inner"></div>
                    </div>
                    <div></div>
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

        this.tableWrapInner = this._shadowRoot.querySelector(".ivy-tab-wrap-inner");

        this.tableWrapInner.addEventListener("click", ev => {
            const target = ev.target;
            const classList = [...target.classList];
            const name = target.getAttribute("name");
            const children = [...this.children];
            console.log(classList, "classList");
            if (classList.includes("ivy-tab-wrap-item")) {
                children.map(cur => {
                    if (cur.getAttribute("name") === name) {
                        cur.setAttribute("active", "");
                    } else {
                        cur.removeAttribute("active");
                    }
                });
            }
        });
    }
    static get observedAttributes() {
        return ["active", "offset", "gutter"];
    }

    get active() {
        return this.getAttribute("active");
    }

    set active(value) {
        this.getAttribute("active", value);
    }

    connectedCallback() {
        const titles = [];
        const children = [...this.children];
        children.map((ele, i) => {
            const key = ele.getAttribute("name");
            if (this.active === null && i === 0) {
                this.active = key || "0";
            }
            if (key === null) {
                ele.setAttribute("name", String(i));
            }
            if (ele.getAttribute("name") === this.active) {
                ele.setAttribute("active");
            }
            titles.push(
                `<div class="ivy-tab-wrap-item ${i === 0 ? "ivy-tab-wrap-item-first" : ""} ${
                    i === children.length - 1 ? "ivy-tab-wrap-item-last" : ""
                }" name="${ele.getAttribute("name")}">${ele.getAttribute("title")}</div>`
            );
        });
        this.tableWrapInner.innerHTML = titles.join("");
    }
}

if (!customElements.get("ivy-tab")) {
    customElements.define("ivy-tab", Tab);
}

class TabPane extends HTMLElement {
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
        this.setAttribute("name", value);
    }

    set active(value) {
        this.setAttribute("active", value);
    }

    connectedCallback() {}

    attributeChangedCallback(attr, oldVal, val) {
        if (attr === "title") {
        }
    }
}

if (!customElements.get("ivy-tab-pane")) {
    customElements.define("ivy-tab-pane", TabPane);
}
