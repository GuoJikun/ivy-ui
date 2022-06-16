import { $_border_color_base, $_border_radius } from "@/utils/var";

class Tooltip extends HTMLElement {
    _shadowRoot: ShadowRoot;
    root: any;
    ref: any;
    ctx: any;
    contentSlot: any;
    timer: any;
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                .ivy-tooltip {
                    position: relative;
                }
                .ivy-tooltip-ref {
                    display: inline-flex;
                }
                .ivy-tooltip-content {
                    display: none;
                    position: absolute;
                    transition: opacity 0.3s;
                    opacity: 0;
                    z-index: 10;
                }
                .ivy-tooltip-arrow {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                }
                .ivy-tooltip-arrow::before,
                .ivy-tooltip-arrow::after {
                    content: "";
                    display: block;
                    position: absolute;
                    height: 0;
                    width: 0;
                    border: 6px solid transparent;
                }
                .ivy-tooltip-arrow::after {
                    border-width: 5px;
                }
                
                .ivy-tooltip-text {
                    padding: 8px 14px;
                    word-break: keep-all;
                    white-space: nowrap;
                    border: 1px solid var(--border-color, ${$_border_color_base});
                    border-radius: var(--border-radius, ${$_border_radius});
                    background-color: #fff;
                }

                :host([placement|="top"]) .ivy-tooltip-content {
                    bottom: calc(100% + 8px);
                }
                :host([placement|="top"]) .ivy-tooltip-arrow {
                    bottom: 0;
                    left: 50%;
                    margin-left: -6px;
                }
                :host([placement|="top"]) .ivy-tooltip-arrow::before {
                    top: 7px;
                    border-top-color: var(--border-color, ${$_border_color_base});
                }
                :host([placement|="top"]) .ivy-tooltip-arrow::after {
                    left: 1px;
                    top: 7px;
                    border-top-color: #ffffff;
                }

                
                :host([theme="dark"][placement|="top"]) .ivy-tooltip-arrow::before {
                    border-top-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="top"]) .ivy-tooltip-arrow::after {
                    border-top-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="top"]) .ivy-tooltip-text {
                    border: 1px solid rgb(70, 76, 91);
                    background-color: rgb(70, 76, 91);
                    color: white;
                }

                :host([placement|="bottom"]) .ivy-tooltip-content {
                    top: calc(100% + 8px);
                }
                :host([placement|="bottom"]) .ivy-tooltip-arrow {
                    top: -4px;
                    left: 50%;
                    margin-left: -6px;
                }
                :host([placement|="bottom"]) .ivy-tooltip-arrow::before {
                    top: -7px;
                    border-color: transparent transparent var(--border-color, ${$_border_color_base}) transparent;
                }
                :host([placement|="bottom"]) .ivy-tooltip-arrow::after {
                    left: 1px;
                    top: -5px;
                    border-color: transparent transparent #ffffff transparent;
                }
                :host([theme="dark"][placement|="bottom"]) .ivy-tooltip-arrow::before {
                    border-bottom-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="bottom"]) .ivy-tooltip-arrow::after {
                    border-bottom-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="bottom"]) .ivy-tooltip-text {
                    border: 1px solid rgb(70, 76, 91);
                    background-color: rgb(70, 76, 91);
                    color: white;
                }

                :host([placement$="-left"]) .ivy-tooltip-arrow {
                    left: 20px;
                }
                :host([placement$="-right"]) .ivy-tooltip-arrow {
                    left: calc(100% - 20px);
                }

                :host([placement|="left"]) .ivy-tooltip-content {
                    right: calc(100% + 8px);
                }
                :host([placement|="left"]) .ivy-tooltip-arrow {
                    right: -4px;
                    top: 50%;
                    margin-top: -6px;
                }
                :host([placement|="left"]) .ivy-tooltip-arrow::before {
                    right: -7px;
                    border-color: transparent transparent transparent var(--border-color, ${$_border_color_base});
                }
                :host([placement|="left"]) .ivy-tooltip-arrow::after {
                    top: 1px;
                    right: -5px;
                    border-color: transparent transparent transparent #ffffff;
                }
                :host([theme="dark"][placement|="left"]) .ivy-tooltip-arrow::before {
                    border-left-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="left"]) .ivy-tooltip-arrow::after {
                    border-left-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="left"]) .ivy-tooltip-text {
                    border: 1px solid rgb(70, 76, 91);
                    background-color: rgb(70, 76, 91);
                    color: white;
                }

                :host([placement|="right"]) .ivy-tooltip-content {
                    left: calc(100% + 8px);
                }
                :host([placement|="right"]) .ivy-tooltip-arrow {
                    left: -4px;
                    top: 50%;
                    margin-top: -6px;
                }
                :host([placement|="right"]) .ivy-tooltip-arrow::before {
                    left: -7px;
                    border-color: transparent var(--border-color, ${$_border_color_base}) transparent transparent;
                }
                :host([placement|="right"]) .ivy-tooltip-arrow::after {
                    top: 1px;
                    left: -5px;
                    border-color: transparent #ffffff transparent transparent;
                }


                :host([placement$="-top"]) .ivy-tooltip-arrow {
                    top: 12px;
                }
                :host([placement$="-bottom"]) .ivy-tooltip-arrow {
                    top: calc(100% - 12px);
                }
                :host([theme="dark"][placement|="right"]) .ivy-tooltip-arrow::before {
                    border-right-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="right"]) .ivy-tooltip-arrow::after {
                    border-right-color: rgb(70, 76, 91);
                }
                :host([theme="dark"][placement|="right"]) .ivy-tooltip-text {
                    border: 1px solid rgb(70, 76, 91);
                    background-color: rgb(70, 76, 91);
                    color: white;
                }
            </style>
            
            <div class="ivy-tooltip">
                <div class="ivy-tooltip-ref"><slot></slot></div>
                <div class="ivy-tooltip-content">
                    <div class="ivy-tooltip-arrow"></div>
                    <div class="ivy-tooltip-text"><slot name="content" class="ivy-tooltip-content-slot">${this.content}</slot></div>
                </span>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-tooltip");
        this.ref = this._shadowRoot.querySelector(".ivy-tooltip-ref");
        this.ctx = this._shadowRoot.querySelector(".ivy-tooltip-content");
        this.contentSlot = this._shadowRoot.querySelector(".ivy-tooltip-content-slot");

        this.timer = null;

        this.ref.addEventListener(
            "mouseover",
            (ev: any) => {
                clearTimeout(this.timer);
                this.ctx.style.display = "block";
                const sliderStyle = getComputedStyle(this.ctx);
                const placement = this.placement;

                if (/^(top|bottom)/.test(placement)) {
                    const width = getComputedStyle(ev.target)["width"];
                    const sliderWidth = sliderStyle["width"];
                    if (/-left$/.test(placement)) {
                        this.ctx.style.left = 0;
                    } else if (/-right$/.test(placement)) {
                        this.ctx.style.right = 0;
                    } else {
                        this.ctx.style.left = -(parseFloat(sliderWidth) - parseFloat(width)) / 2 + "px";
                    }
                } else {
                    const height = getComputedStyle(ev.target)["height"];
                    const sliderHeight = sliderStyle["height"];
                    if (/-top$/.test(placement)) {
                        this.ctx.style.top = 0;
                    } else if (/-bottom$/.test(placement)) {
                        this.ctx.style.bottom = 0;
                    } else {
                        this.ctx.style.top = -(parseFloat(sliderHeight) - parseFloat(height)) / 2 + "px";
                    }
                }

                this.ctx.style.opacity = "1";
            },
            true
        );
        this.ref.addEventListener("mouseleave", () => {
            this.ctx.style.opacity = "0";
            this.timer = setTimeout(() => {
                this.ctx.style.display = "none";
                clearTimeout(this.timer);
            }, 300);
        });
    }

    static get observedAttributes() {
        return ["content", "dark", "placement"];
    }

    get content() {
        return this.getAttribute("content") || "";
    }
    get dark() {
        return this.getAttribute("dark");
    }
    get placement() {
        return this.getAttribute("placement") || "top";
    }

    set content(value) {
        this.setAttribute("content", value);
    }
    set dark(value) {
        if (this.getAttribute("dark")) {
            this.setAttribute("dark", value || "");
        } else {
            this.removeAttribute("dark");
        }
    }
    set placement(value) {
        this.setAttribute("placement", value);
    }

    connectedCallback() {
        if (this.placement === null) {
            this.placement = "top";
        }
        this.contentSlot.textContent = this.content;
    }

    attributeChangedCallback(attr: string, oldVal: string, val: string) {}
}

if (!customElements.get("ivy-tooltip")) {
    customElements.define("ivy-tooltip", Tooltip);
}
