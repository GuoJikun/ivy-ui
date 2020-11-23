class Input extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .ivy-form-item {
                    display: block;
                    position: relative;
                    margin-bottom: 20px;
                }
                .ivy-input-inner {
                    background-color: #fff;
                    background-image: none;
                    border-radius: 4px;
                    border: 1px solid #dcdfe6;
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    font-size: inherit;
                    height: 34px;
                    line-height: 34px;
                    outline: none;
                    padding: 0 15px;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 100%;
                }
            </style>
            <div class="ivy-input">
                <input class="ivy-input-inner" />
            </div>
            
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["prop", "label", "width", "minWidth"];
    }

    get prop() {
        return this.getAttribute("prop");
    }
    get label() {
        return this.getAttribute("label");
    }
    get width() {
        return this.getAttribute("width");
    }
    get minWidth() {
        return this.getAttribute("minWidth");
    }

    set prop(value) {
        this.setAttribute("prop", value);
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    set width(value) {
        this.setAttribute("width", value);
    }
    set minWidth(value) {
        this.setAttribute("minWidth", value);
    }
}

if (!customElements.get("ivy-input")) {
    customElements.define("ivy-input", Input);
}
