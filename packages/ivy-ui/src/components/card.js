import { $_border_base, $_border_radius, $_shadow_base } from "../utils/var.js";

class Card extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                :host([shadow]) .ins-card {
                    box-shadow: var(--box-shadow, ${$_shadow_base});
                    border-color: #eee;
                }
                .ins-card {
                    border: ${$_border_base};
                    border-radius: var(--border-radius, ${$_border_radius});
                }
                .ins-card-header {
                    border-bottom: ${$_border_base};
                    padding: 12px 16px;
                }
                .ins-card-body {
                    padding: 16px;
                }
            </style>
            <div class="ins-card">
                <div class="ins-card-header">
                    <slot name="header" id="header">${this.header}</slot>
                </div>
                <div class="ins-card-body">
                    <slot></slot>
                </div>
            </div>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$el = this._shadowRoot.querySelector(".ins-card");
        this.$header = this._shadowRoot.querySelector(".ins-card-header").children[0];
    }

    static get observedAttributes() {
        return ["shadow", "header"];
    }

    get shadow() {
        return this.getAttribute("shadow");
    }

    get header() {
        return this.getAttribute("header") || "";
    }

    set header(value) {
        this.setAttribute("header", value);
    }

    connectedCallback() {
        /* console.log(this.firstChild, "this.firstChild");
        const flag = this.firstElementChild.slot === "header";
        if (!flag) {
            this.$el.children[0].children[0].innerHTML = this.header;
        } */
        // this.header = this.haeder;
    }

    attributeChangedCallback(name, oldVal, val) {
        if (name === "header" && this.firstElementChild.slot !== "header") {
            const header = val ? val : oldVal;
            this.$header.innerHTML = header;
        }
    }
}

if (!customElements.get("ins-card")) {
    customElements.define("ins-card", Card);
}
