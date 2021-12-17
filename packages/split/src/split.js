import { buildShadowRoot } from "../../ivy-ui/src/utils/assist.js";
import { $_text_color, $_border_color_base } from "../../ivy-ui/src/utils/var.js";

class Split extends HTMLElement {
    constructor() {
        super();
        const html = `
            <style>
                :host {
                    display: block;
                    color: var(--color-text, ${$_text_color});
                }
                .horizontal,
                .vertical {
                    display: flex;
                    border: 1px solid ${$_border_color_base};
                }
                .left,
                .right{
                    min-width: 50px;
                    flex: auto;
                }
                .top,
                .bottom{
                    min-height: 50px;
                    width: 100%;
                    flex: auto;
                }
                .trigger{
                    width: 2px;
                    background-color: ${$_border_color_base};
                    cursor: e-resize;;
                }
                .vertical {
                    flex-direction: column;
                }
                .vertical .trigger {
                    width: 100%;
                    height: 2px;
                    cursor: n-resize;
                }
            </style>
            <div class="horizontal">
                <div class="left"><slot name="left"></slot></div>
                <div class="trigger"><slot name="trigger"></slot></div>
                <div class="right"><slot name="right"></slot></div>
            </div>
            <div class="vertical">
                <div class="top"><slot name="top"></slot></div>
                <div class="trigger"><slot name="trigger"></slot></div>
                <div class="bottom"><slot name="bottom"></slot></div>
            </div>
        `;
        buildShadowRoot(html, this);
        this.$el = {
            horizontal: this.shadowRoot.querySelector(".horizontal"),
            vertical: this.shadowRoot.querySelector(".vertical"),
            left: this.shadowRoot.querySelector(".left"),
            right: this.shadowRoot.querySelector(".right"),
            top: this.shadowRoot.querySelector(".top"),
            bottom: this.shadowRoot.querySelector(".bottom"),
        };
    }

    static get observedAttributes() {
        return ["vertical", "value", "min", "max"];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "vertical":
                if (newVal) {
                    this.$el.horizontal.style.display = "none";
                    this.$el.vertical.style.display = "flex";
                } else {
                    this.$el.vertical.style.display = "none";
                    this.$el.horizontal.style.display = "flex";
                }
                break;
            case "value":
                if (newVal) {
                    this.$el.horizontal.style.display = "none";
                    this.$el.vertical.style.display = "block";
                } else {
                    this.$el.vertical.style.width = `${newVal * 100}%`;
                    this.$el.horizontal.style.display = `${100 - newVal * 100}%`;
                }
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        if (this.vertical) {
            this.$el.horizontal.style.display = "none";
            this.$el.vertical.style.display = "flex";
        } else {
            this.$el.vertical.style.display = "none";
            this.$el.horizontal.style.display = "flex";
        }
    }

    get vertical() {
        return this.getAttribute("vertical");
    }
    set vertical(val) {
        if (val) {
            this.setAttribute("vertical", val);
        } else {
            this.removeAttribute("vertical");
        }
    }

    get value() {
        return this.getAttribute("value");
    }
    set value(val) {
        if (val) {
            this.setAttribute("value", val);
        } else {
            this.removeAttribute("value");
        }
    }

    get min() {
        return this.getAttribute("min");
    }
    set min(val) {
        if (val) {
            this.setAttribute("min", val);
        } else {
            this.removeAttribute("min");
        }
    }

    get max() {
        return this.getAttribute("max");
    }
    set max(val) {
        if (val) {
            this.setAttribute("max", val);
        } else {
            this.removeAttribute("max");
        }
    }
}

export default Split;
