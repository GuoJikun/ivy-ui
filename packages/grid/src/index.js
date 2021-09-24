class Row extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                }
                
            </style>
            <slot></slot>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ["offset", "gutter"];
    }

    get gutter() {
        return this.getAttribute("gutter") || 0;
    }
    set gutter(val) {
        this.setAttribute("gutter", val);
    }

    connectedCallback() {
        const gutter = this.gutter;
        const children = [...this.children];
        children.map(cur => {
            if (gutter !== null) cur.setAttribute("gutter", gutter);
        });
    }
}

if (!customElements.get("ivy-row")) {
    customElements.define("ivy-row", Row);
}

class Col extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    flex: 0 0 ${(this.span / 24) * 100}%;
                    width: ${(this.span / 24) * 100}%;
                    margin: 0 ${this.gutter / 2}px;
                    margin-left: calc(${this.gutter / 2}px + ${(this.offset / 24) * 100}%);
                }
                :host(:first-child) {
                    margin-left: 0 !important;
                }
                :host(:last-child) {
                    margin-right: 0 !important;
                }
                
            </style>
            <slot></slot>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["span", "offset", "gutter"];
    }

    get span() {
        return this.getAttribute("span") || 24;
    }

    set span(val) {
        this.setAttribute("span", val);
    }

    get offset() {
        return this.getAttribute("offset") || 0;
    }

    set offset(val) {
        this.setAttribute("offset", val);
    }

    get gutter() {
        return this.getAttribute("gutter") || 0;
    }
    set gutter(val) {
        this.setAttribute("gutter", val);
    }
}

if (!customElements.get("ivy-col")) {
    customElements.define("ivy-col", Col);
}
