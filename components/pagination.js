import "./icon.js";
import { $_color_primary, $_color_info_disabled } from "../utils/var.js";

class Pagination extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: inline-block;
                    font-size: inherit;
                }
                .ivy-pagination {
                    display: flex;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    align-items: center;
                }
                .ivy-pagination-pager {
                    display: inline-flex;
                }
                .ivy-pagination-item {
                    cursor: pointer;
                    font-size: 1em;
                    width: 1.8em;
                    height: 1.8em;
                    flex: 0 0 1.8em;
                    display: inline-flex;
                    align-item: center;
                    justify-content: center;
                }
                .ivy-pagination-item-active,
                .ivy-pagination-item:hover {
                    color: var(--color-primary-hover, ${$_color_primary});
                }

                .ivy-pagination-prev,
                .ivy-pagination-next {
                    cursor: pointer;
                    width: 1.8em;
                    height: 1.8em;
                    flex: 0 0 1.8em;
                    display: inline-flex;
                    align-item: center;
                    align-content: center;
                    justify-content: center;
                }
                .is-disabled {
                    cursor: not-allowed;
                    color: ${$_color_info_disabled};
                }
            </style>
            <div class="ivy-pagination">
                <div class="ivy-pagination-prev">
                    <slot name="prev">
                        <ivy-icon name="arrow-left"></ivy-icon>
                    </slot>
                </div>
                <div class="ivy-pagination-pager">
                    <div class="ivy-pagination-item">1</div>
                    <div class="ivy-pagination-item">2</div>
                    <div class="ivy-pagination-item">3</div>
                    <div class="ivy-pagination-item">4</div>
                    <div class="ivy-pagination-item">5</div>
                </div>
                <div class="ivy-pagination-next">
                    <slot name="next">
                        <ivy-icon name="arrow-right"></ivy-icon>
                    </slot>
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-pagination");
        this.prev = this._shadowRoot.querySelector(".ivy-pagination-prev");
        this.next = this._shadowRoot.querySelector(".ivy-pagination-next");

        this.prev.addEventListener("click", () => {
            const classes = [...this.prev.classList];
            if (classes.includes("is-disabled")) {
                return false;
            }
            console.log("点击上一页");
        });
        this.next.addEventListener("click", () => {
            console.log("点击下一页");
        });
    }
    static get observedAttributes() {
        return ["current", "size"];
    }
    get current() {
        return this.getAttribute("current");
    }
    get size() {
        return this.getAttribute("size");
    }

    set current(value) {
        this.setAttribute("current", value);
    }
    set size(value) {
        this.setAttribute("size", value);
    }

    connectedCallback() {
        if (this.current === null) {
            this.current = 1;
        }
        if (this.size === null) {
            this.size = 10;
        }
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "current") {
            if (newVal === 1 || newVal === "1") {
                this.prev.classList.add("is-disabled");
            }
        }
    }
}

if (!customElements.get("ivy-pagination")) {
    customElements.define("ivy-pagination", Pagination);
}
