import "../../icon/src/index.js";

class Image extends HTMLElement {
    _shadowRoot: ShadowRoot;
    root: any;
    image: any;
    loadEle: any;
    errEle: any;
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style type="text/css">
                :host {
                    display: inline-block;
                }
                .ivy-image {
                    display: block;
                    box-sizing: border-box;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                }
                .ivy-image-inner {
                    display: block;
                    vertical-align: top;
                    width: 100%;
                    height: 100%;
                    display: none;
                    background-color: white;
                }
                .ivy-image-error,
                .ivy-image-placeholder {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: all 0.3s;
                    z-index: -1;
                    background: #f5f7fa;
                }
                .ivy-image-placeholder {
                    z-index: 1;
                    opacity: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: #c0c4cc;
                    vertical-align: middle;
                }
                .ivy-image-error {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: #c0c4cc;
                    vertical-align: middle;
                }
            </style>
            <div class="ivy-image">
                <img src="${this.src}" class="ivy-image-inner" />
                <div class="ivy-image-error">
                    <slot name="error">加载失败</slot>
                </div>
                <div class="ivy-image-placeholder">
                    <slot name="placeholder">
                        <ivy-icon name="loading" spin size="28"></ivy-icon>
                    </slot>
                </div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-image");
        this.image = this._shadowRoot.querySelector(".ivy-image-inner");
        this.loadEle = this._shadowRoot.querySelector(".ivy-image-placeholder");
        this.errEle = this._shadowRoot.querySelector(".ivy-image-error");

        this.image.addEventListener("error", () => {
            this.loadEle.style.opacity = 0;
            this.loadEle.style.zIndex = -1;
            this.errEle.style.zIndex = 1;
            this.errEle.style.opacity = 1;
        });
        this.image.addEventListener("load", () => {
            this.image.style.display = "block";
            this.loadEle.style.opacity = 0;
            this.loadEle.style.zIndex = -1;
        });
    }
    static get observedAttributes() {
        return ["fit", "src"];
    }
    get fit() {
        return this.getAttribute("fit");
    }
    get src() {
        return this.getAttribute("src");
    }

    set src(value) {
        if (this.getAttribute("src")) {
            this.setAttribute("src", value || "");
        } else {
            this.removeAttribute("src");
        }
    }
    set fit(value) {
        if (this.getAttribute("fit")) {
            this.setAttribute("fit", value || "");
        } else {
            this.removeAttribute("fit");
        }
    }

    connectedCallback() {
        if (this.fit !== null) {
            this.image.style.objectFit = this.fit;
        }
    }
    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        if (name === "fit") {
            this.image.style.objectFit = newVal;
        }
        if (name === "src") {
            this.image.src = newVal;
        }
    }
}

if (!customElements.get("ivy-image")) {
    customElements.define("ivy-image", Image);
}
