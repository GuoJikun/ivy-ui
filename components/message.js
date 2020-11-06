import { $_border_radius, $_color_primary, $_border_color_base } from "../utils/var";
class Message extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                :host {
                    
                }
                :host([show]){
                    display: block;
                }
                .ivy-message {
                    background-color: #ffffff;
                    padding: 20px;
                }
                .ivy-message-content {
                    padding-left: 14px;
                }
                @keyframes shows {
                    0% {
                        margin-top: 0;
                    }
                    100% {
                        margin-top: 20px;
                    }
                }
            </style>
            <div class="ivy-message">
                <div class="ivy-message-content">
                    
                    ${message}
                </div>
                <div class="ivy-message-close"></div>
            </div>
        `;
        this._shadowRoot = this.attachShadow({
            mode: "closed",
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.root = this._shadowRoot.querySelector(".ivy-message");

        const ivyMessageBox = document.querySelector("div[date-ivy-message]");
        if (!ivyMessageBox) {
            const div = document.createElement("div");
            div.setAttribute("hide", true);
            div.setAttribute("date-ivy-message", "");
            document.body.appendChild(div);
        }
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

if (!customElements.get("ivy-message")) {
    customElements.define("ivy-message", Message);
}
