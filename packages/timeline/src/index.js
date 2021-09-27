import { $_color_primary, $_color_success, $_color_error, $_color_warn } from "../../ivy-ui/src/utils/var.js";

class Timeline extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                }
                .ivy-timeline {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                }
                :host([reverse]) .ivy-timeline {
                    flex-direction: column-reverse;
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
        // this.slot = this._shadowRoot.querySelector(".slot");
    }
    static get observedAttributes() {
        return ["reverse"];
    }
    get reverse() {
        return this.getAttribute("reverse");
    }
    set reverse(value) {
        this.setAttribute("reverse", value);
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
        this.timestampEle = this._shadowRoot.querySelector(".ivy-timeline-timestamp");
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
    connectedCallback() {
        this.timestampEle.textContent = this.timestamp;
    }
    attributeChangedCallback(name, oldVal, newVal) {}
}

if (!customElements.get("ivy-timeline")) {
    customElements.define("ivy-timeline", Timeline);
}
if (!customElements.get("ivy-timeline-item")) {
    customElements.define("ivy-timeline-item", TimelineItem);
}
