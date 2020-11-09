import { $_border_color_base } from "../utils/var.js";

class Drawer extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 8000;
                }
                :host([show]){
                    display: block;
                }
                .ivy-mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: -1;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(55, 55, 55, 0.6);
                }
                .ivy-drawer {
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 1;
                    width: 500px;
                    height: 100vh;
                    background-color: #ffffff;
                }
                .ivy-drawer-header {
                    padding: 12px 16px;
                    border-bottom: 1px solid var(--border-color, ${$_border_color_base});
                }
                .ivy-drawer-body {
                    padding: 16px;
                }
                .ivy-drawer-footer {
                    padding: 12px 16px;
                    border-top: 1px solid var(--border-color, ${$_border_color_base});
                    text-align: right;
                }
            </style>
            <div class="ivy-mask"></div>
            <div class="ivy-drawer">
                <div class="ivy-drawer-header"><slot name="header"></slot></div>
                <div class="ivy-drawer-body"><slot></slot></div>
                <div class="ivy-drawer-footer"><slot name="footer"></slot></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        document.body.appendChild(this);
    }
    static get observedAttributes() {
        return ["span", "offset", "gutter"];
    }

    get gutter() {
        return this.getAttribute("gutter") || 0;
    }

    connectedCallback() {
        const gutter = this.gutter;
        console.log(gutter);
        const children = [...this.children];
        children.map(cur => {
            if (gutter !== null) cur.setAttribute("gutter", gutter);
        });
    }
}

if (!customElements.get("ivy-drawer")) {
    customElements.define("ivy-drawer", Drawer);
}
