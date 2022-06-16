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
                    box-sizing: border-box;
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

    connectedCallback() {
        this.style.width = `0 0 calc(${(this.span / 24) * 100}% - ${this.gutter}px)`;
        this.style.flex = `0 0 calc(${(this.span / 24) * 100}% - ${this.gutter}px)`;
        this.style.margin = `0 ${this.gutter / 2}px`;
        if (this.offset) {
            this.style.marginLeft = `calc(${this.gutter / 2}px + ${(this.offset / 24) * 100}%)`;
        } else {
            this.style.marginLeft = `${this.gutter / 2}px`;
        }
    }
}

if (!customElements.get("ivy-row")) {
    customElements.define("ivy-row", Row);
}
if (!customElements.get("ivy-col")) {
    customElements.define("ivy-col", Col);
}
