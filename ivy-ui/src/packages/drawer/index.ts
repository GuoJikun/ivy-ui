import { $_border_color_base, $_mask_color } from "@/utils/var";

class Drawer extends HTMLElement {
    _shadowRoot: ShadowRoot;
    mask: any;
    $title: any;
    wrap: any;
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
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .ivy-mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    background-color: var(--mask-color, ${$_mask_color});
                }
                .ivy-drawer {
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 1;
                    height: 100%;
                    background-color: #ffffff;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s;
                    transform: translateX(${this.width}px)
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
            <div class="ivy-drawer" style="width: ${this.width}px">
                <div class="ivy-drawer-header"><slot name="title">${this.title}</slot></div>
                <div class="ivy-drawer-body"><slot></slot></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.mask = this._shadowRoot.querySelector(".ivy-mask");
        this.$title = this._shadowRoot.querySelector(".ivy-drawer-header");
        this.wrap = this._shadowRoot.querySelector(".ivy-drawer");

        this.mask.addEventListener("click", () => {
            if (this.maskClosable !== "false") {
                this.removeAttribute("show");
                new CustomEvent("close", { detail: { eventType: "maskClose" } });
            }
        });
    }
    static get observedAttributes() {
        return ["title", "width", "maskClosable", "show"];
    }

    get title() {
        return this.getAttribute("title") || "";
    }
    set title(value) {
        this.setAttribute("title", value);
    }

    get width() {
        return this.getAttribute("width") || "500";
    }
    get maskClosable() {
        return this.getAttribute("maskClosable");
    }
    set maskClosable(value) {
        if (this.getAttribute("maskClosable")) {
            this.setAttribute("maskClosable", value || "");
        } else {
            this.removeAttribute("maskClosable");
        }
    }

    get show() {
        return this.getAttribute("show");
    }

    connectedCallback() {
        this.$title.textContent = this.title;
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        if (name === "show") {
            if (newVal === null) {
                this.wrap.style.transform = `translateX(${this.width}px)`;
                this.style.opacity = `0`;
                let timer: any = setTimeout(() => {
                    this.style.display = "none";
                    clearTimeout(timer);
                    timer = undefined;
                }, 300);
            } else {
                this.style.display = "block";
                this.style.opacity = `1`;
                setTimeout(() => {
                    this.wrap.style.transform = `translateX(0)`;
                }, 1);
            }
        }
    }
}

if (!customElements.get("ivy-drawer")) {
    customElements.define("ivy-drawer", Drawer);
}
