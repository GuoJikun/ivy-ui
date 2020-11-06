/* 公共颜色变量 */
const $_color_primary = "#409EFF";
const $_color_success = "#67C23A";
const $_color_warn = "#E6A23C";
const $_color_error = "#F56C6C";
const $_color_info = "#909399";

/****边框颜色 */
const $_border_color_base = "#DCDFE6";

/***圆角 */
const $_border_radius = "4px";

/*****阴影 */
const $_shadow_base = "0 1px 6px rgba(0,0,0, 0.2)";

/*****边框 */
const $_border_base = `1px solid ${$_border_color_base}`;

class Button extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host {
                    margin-left: 12px;
                    line-height: 32px;
                    display: inline-flex;
                }
                :host(:first-child){
                    margin-left: 0;
                }


                .ivy-button {
                    display: block;
                    overflow: hidden;
                    outline: none;
                    height: 34px;
                    line-height: 32px;
                    border: ${$_border_base};
                    border-radius: var(--border-radius, ${$_border_radius});
                    box-sizing: border-box;
                    padding: 0 20px;
                    background: white;
                    cursor: pointer;
                }

                .ivy-button:not([disabled]):hover,
                .ivy-button:not([disabled]):focus{
                    opacity: 0.8;
                }

                :host([disabled]) .ivy-button {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .ivy-button-primary {
                    border: 1px solid var(--color-primary, ${$_color_primary});
                    background-color: var(--color-primary, ${$_color_primary});
                    color: white;
                }
                .ivy-button-success {
                    border: 1px solid var(--color-success, ${$_color_success});;
                    background-color: var(--color-success, ${$_color_success});;
                    color: white;
                }
                .ivy-button-warn {
                    border: 1px solid var(--color-warn, ${$_color_warn});;
                    background-color: var(--color-warn, ${$_color_warn});;
                    color: white;
                }
                .ivy-button-danger {
                    border: 1px solid var(--color-danger, ${$_color_error});;
                    background-color: var(--color-danger, ${$_color_error});;
                    color: white;
                }
                .ivy-button-info {
                    border: 1px solid var(--color-info, ${$_color_info});;
                    background-color: var(--color-info, ${$_color_info});;
                    color: white;
                }
                #ivy-loading {
                    width: 1em;
                    height: 1em;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                    animation: rotate 1.4s linear infinite;
                    display: none;
                }
                @keyframes rotate{
                    to{
                        transform: rotate(360deg); 
                    }
                }
            </style>
            <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
                <symbol id="ivy-icon-loading" viewBox="0 0 1024 1024">
                    <path
                        d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"
                    ></path>
                </symbol>
            </svg>
            
            <button class="ivy-button">
                <svg view="0 0 1024 1024" class="ivy-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true" id="ivy-loading">
                    <use href="#ivy-icon-loading"></use>
                </svg>
                <span class="ivy-button-inner"><slot></slot></span>
            </button>
        `;

        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$button = this._shadowRoot.querySelector("button");
        this.$loading = this._shadowRoot.querySelector("#ivy-loading");
        this.$buttonInner = this._shadowRoot.querySelector(".ivy-button-inner");

        this.addEventListener("click", e => {});
    }
    connectedCallback() {
        if (this.type && this.$button) {
            this.$button.setAttribute("class", `${this.class} ivy-button-${this.type}`);
        }
    }

    get type() {
        return this.getAttribute("type");
    }

    set type(value) {
        this.setAttribute("type", value);
    }

    get loading() {
        return this.getAttribute("loading");
    }

    set loading(value) {
        this.setAttribute("loading", value);
    }

    get round() {
        return this.getAttribute("round");
    }

    set round(value) {
        this.setAttribute("round", value);
    }

    get disabled() {
        return this.getAttribute("disabled");
    }

    set disabled(value) {
        this.setAttribute("disabled", value);
    }

    static get observedAttributes() {
        return ["type", "round", "disabled", "loading"];
    }

    get class() {
        return this.$button.classList;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render(name);
    }
    render(name) {
        if (name === "round") {
            this.$button.style.borderRadius = "17px";
        }
        /* if (name === "disabled") {
            this.$button.style.cursor = "not-allowed";
            this.$button.style.opacity = "0.5";
        } */
        if (name === "loading") {
            this.$loading.style.display = "initial";
            this.$buttonInner.style.marginLeft = "4px";
            this.$button.style.cursor = "not-allowed";
            this.$button.style.opacity = "0.5";
        }
    }
}
if (!customElements.get("ivy-button")) {
    customElements.define("ivy-button", Button);
}

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

class Timeline extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                }
                :host([reverse]) .ivy-timeline {
                    flex-direction: column-reverse;
                }
                .ivy-timeline {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                }
            </style>
            <div class="ivy-timeline">
                <slot class="slot"></slot>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-timeline");
        this.slot = this._shadowRoot.querySelector(".slot");
    }
    static get observedAttributes() {
        return ["reverse"];
    }
    get reverse() {
        return this.getAttribute("reverse");
    }
    connectedCallback() {
        const reverse = this.reverse;
        const children = [...this.children];
        children.map(cur => {
            if (reverse !== null) cur.setAttribute("reverse", "");
        });
    }
    attributeChangedCallback(name, oldVal, newVal) {}
}

class TimelineItem extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    padding: 4px 0 20px 28px;
                }
                :host(:last-child) .ivy-timeline-line {
                    display: none;
                }
                :host([reverse]:first-child) .ivy-timeline-line {
                    display: none;
                }
                :host([reverse]:last-child) .ivy-timeline-line {
                    display: block;
                }
                :host([hide-timestamp]) .ivy-timeline-timestamp {
                    display: none;
                }
                :host([type="primary"]) .ivy-timeline-dot {
                    background-color: var(--color-primary, ${$_color_primary});
                }
                :host([type="success"]) .ivy-timeline-dot {
                    background-color: var(--color-success, ${$_color_success});
                }
                :host([type="warn"]) .ivy-timeline-dot {
                    background-color: var(--color-warn, ${$_color_warn});
                }
                :host([type="error"]) .ivy-timeline-dot {
                    background-color: var(--color-error, ${$_color_error});
                }
                .ivy-timeline-dot {
                    position: absolute;
                    left: -1px;
                    width: 12px;
                    height: 12px;
                    background-color: #e4e7ed;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                }
                .ivy-timeline-line {
                    position: absolute;
                    left: 4px;
                    height: 100%;
                    border-left: 2px solid #e4e7ed;
                }
                .ivy-timeline-timestamp {
                    line-height: 1em;
                    margin-bottom: 6px;
                    color: #666;
                }             
            </style>
            <div class="ivy-timeline-dot"></div>
            <div class="ivy-timeline-line"></div>
            <div class="ivy-timeline-ctx">
                <div class="ivy-timeline-timestamp">${this.timestamp}</div>
                <div><slot></slot></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ["timestamp"];
    }
    get timestamp() {
        return this.getAttribute("timestamp");
    }
    set timestamp(value) {
        this.setAttribute("timestamp", value);
    }
    connectedCallback() {}
    attributeChangedCallback(name, oldVal, newVal) {}
}

if (!customElements.get("ivy-timeline")) {
    customElements.define("ivy-timeline", Timeline);
}
if (!customElements.get("ivy-timeline-item")) {
    customElements.define("ivy-timeline-item", TimelineItem);
}

class Divider extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");

        template.innerHTML = `
            <style>
                :host{
                    padding: 28px 0;
                    display: block;
                }
                .ivy-divider {
                    height: 1px;
                    position: relative;
                    line-height: 1px;
                    background-color: transparent;
                    display: flex;
                }
                .ivy-divider::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 0px;
                    border-top: 1px solid var(--color-line-default, ${$_border_color_base});
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: -1;
                }
                :host([type="solid"]) .ivy-divider::before {
                    border-top-style: solid;
                }
                :host([type="dotted"]) .ivy-divider::before {
                    border-top-style: dotted;
                }
                :host([type="dashed"]) .ivy-divider::before {
                    border-top-style: dashed;
                }
                :host([type="double"]) .ivy-divider::before {
                    border-top-style: double;
                }
                :host([type="groove"]) .ivy-divider::before {
                    border-top-style: groove;
                }
                :host([type="ridge"]) .ivy-divider::before {
                    border-top-style: ridge;
                }
                :host([type="inset"]) .ivy-divider::before {
                    border-top-style: inset;
                }
                :host([type="outset"]) .ivy-divider::before {
                    border-top-style: outset;
                }
                .ivy-divider-text {
                    display: inline-block;
                    padding: 0 10px;
                    font-size: inherit;
                    background-color: white;
                    margin: 0 auto;
                }
                :host([hide-text]) .ivy-divider-text {
                    display: none;
                }
                :host([placement="center"]) .ivy-divider-text {
                    margin: 0 auto;
                }
                :host([placement="left"]) .ivy-divider-text{
                    margin: 0;
                    position: absolute;
                    left: 10%;
                }
                :host([placement="right"]) .ivy-divider-text{
                    margin: 0;
                    position: absolute;
                    right: 10%;
                }
            </style>
            <div class="ivy-divider">
                <div class="ivy-divider-text"><slot></slot></span>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "open",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-timeline");
    }
}

if (!customElements.get("ivy-divider")) {
    customElements.define("ivy-divider", Divider);
}

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
