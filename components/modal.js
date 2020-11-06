import { $_border_radius, $_color_primary, $_border_color_base } from "../utils/var";
class Modal extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 9000;
                    display: none;
                    width: 100vw;
                    height: 100vh;
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
                .ivy-modal {
                    width: 500px;
                    margin: 14vh auto 0;
                    background-color: #ffffff;
                    border-radius: var(--border-radius, ${$_border_radius});
                    position: relative;
                    animation: shows 0.3s forwards;
                }
                .ivy-modal-header {
                    padding: 12px 16px;
                    border-bottom: 1px solid var(--border-color, ${$_border_color_base});
                }
                .ivy-modal-content {
                    padding: 16px;
                }
                .ivy-modal-footer {
                    padding: 12px 16px;
                    border-top: 1px solid var(--border-color, ${$_border_color_base});
                    text-align: right;
                }
                .ivy-modal-button {
                    line-height: 1em;
                    font-size: 14px;
                    padding: 8px 20px;
                    border: 1px solid #dcdfe6;
                    outline: none;
                    display: inline-block;
                    border-radius: 4px;
                    cursor: pointer;
                    background-color: #fff;
                    transition: all 0.1s;
                }
                .ivy-modal-button:hover {
                    color: #409eff;
                    border-color: #c6e2ff;
                    background-color: #ecf5ff;
                }
                .ivy-modal-button + .ivy-modal-button {
                    margin-left: 10px;
                }
                .ivy-modal-button-primary {
                    background-color: #2d8cf0;
                    border-color: #2d8cf0;
                    color: white;
                    
                }
                .ivy-modal-button-primary:hover {
                    background-color: #66b1ff;
                    border-color: #66b1ff;
                    color: #fff;
                }
                .ivy-modal-close {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                    z-index: 1;
                }
                .ivy-modal-close::before,
                .ivy-modal-close::after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 8px;
                    top: 0;
                    width: 1px;
                    height: 16px;
                    background-color: #999;
                    border-radius: 0.5px;
                    transform: rotate(-45deg);
                    z-index: -1;
                }
                .ivy-modal-close::before {
                    transform: rotate(45deg);
                }
                .ivy-modal-close:hover::before,
                .ivy-modal-close:hover::after {
                    background-color: #444;
                }
                @keyframes shows {
                    0% {
                        display: none;
                        margin: 0 auto 0;
                    }
                    100% {
                        display: block;
                        margin: 14vh auto 0;
                    }
                }
            </style>
            <div class="ivy-mask"></div>
            <div class="ivy-modal">
                <div class="ivy-modal-header">
                    <slot name="header">${this.title}</slot>
                </div>
                <div class="ivy-modal-content">
                    <slot></slot>
                </div>
                <div class="ivy-modal-footer">
                    <slot name="footer">
                        <button class="ivy-modal-button ivy-modal-button-cancel">取消</button>
                        <button class="ivy-modal-button ivy-modal-button-primary">确定</button>
                    </slot>
                </div>
                <div class="ivy-modal-close"></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "closed",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-modal");
        document.body.appendChild(this);
        /**
         * 自定义事件
         */
        const onclose = new CustomEvent("close", { bubbles: false, cancelable: true, composed: false });
        const onCancel = new CustomEvent("cancel", { bubbles: false, cancelable: true, composed: false });
        const onSure = new CustomEvent("sure", { bubbles: false, cancelable: true, composed: false });

        const closeBtn = this._shadowRoot.querySelector(".ivy-modal-close");
        const cancelBtn = this._shadowRoot.querySelector(".ivy-modal-button-cancel");
        const sureBtn = this._shadowRoot.querySelector(".ivy-modal-button-primary");

        closeBtn.addEventListener("click", () => {
            this.dispatchEvent(onclose);
            this.removeAttribute("show");
        });
        cancelBtn.addEventListener("click", () => {
            this.dispatchEvent(onCancel);
            this.removeAttribute("show");
        });
        sureBtn.addEventListener("click", () => {
            this.dispatchEvent(onSure);
            console.log(onSure);
            this.removeAttribute("show");
        });
    }
    static get observedAttributes() {
        return ["show", "title"];
    }
    get show() {
        return this.getAttribute("show");
    }
    get title() {
        return this.getAttribute("title") || "";
    }

    set show(value) {
        this.setAttribute("show", value);
    }
    set title(value) {
        this.setAttribute("title", value);
    }
    connectedCallback() {}
    attributeChangedCallback(name, oldVal, newVal) {}
}

if (!customElements.get("ivy-modal")) {
    customElements.define("ivy-modal", Modal);
}
