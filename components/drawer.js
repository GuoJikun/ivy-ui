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
                    width: 100%;
                    height: 100%;
                    display: none;
                }
                :host([show]){
                    display: block;
                }
                .ivy-mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(55, 55, 55, 0.6);
                }
                .ivy-drawer {
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 1;
                    width: 500px;
                    height: 100%;
                    background-color: #ffffff;
                    display: flex;
                    flex-direction: column;
                }
                .ivy-drawer-header {
                    padding: 12px 16px;
                    border-bottom: 1px solid var(--border-color, ${$_border_color_base});
                }
                :host([hide-title]) .ivy-drawer-header {
                    display: none;
                }
                .ivy-drawer-body {
                    padding: 16px;
                    flex: auto;
                }
            </style>
            <div class="ivy-mask"></div>
            <div class="ivy-drawer">
                <div class="ivy-drawer-header"><slot name="title">${this.title}</slot></div>
                <div class="ivy-drawer-body"><slot></slot></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.mask = this._shadowRoot.querySelector(".ivy-mask");
        this.mask.addEventListener("click", () => {
            console.log("s");
            this.removeAttribute("show");
        });
        // document.body.appendChild(this);
    }
    static get observedAttributes() {
        return ["title", "gutter"];
    }

    get title() {
        return this.getAttribute("title") || "";
    }

    connectedCallback() {}
}

if (!customElements.get("ivy-drawer")) {
    customElements.define("ivy-drawer", Drawer);
}
