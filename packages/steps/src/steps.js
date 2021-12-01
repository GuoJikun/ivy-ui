import { findElementsDownward } from "../../ivy-ui/src/utils/assist.js";

export class Steps extends HTMLElement {
    constructor() {
        super();

        const style = `
        <style>
            host {
                display: block;
            }
            .steps {
                display: flex;
            }
            .step {
                display: inline-flex;
                flex: 1 0 auto;
                flex-direction: column;
                position: relative;
                
            }
            .step + .step {
                margin-left: 12px;
            }
            .step:last-child {
                flex: none;
            }
            .step-inner {
                display: flex;
                position: relative;
                z-index: 1;
                flex-direction: column;
            }
            .step-title {
                height: 24px;
                font-size: 16px;
                font-weight: 500;
                color: rgba(32, 44, 61, 0.6);
                line-height: 24px;
                background-color: #fff;
                padding-left: 8px;
                padding-right: 12px;
            }
            .step-desc {
                font-size: 14px;
                margin: 12px 0 0;
                color: rgba(32, 44, 61, 0.6);
                padding-left: 36px;
            }
            .step-no {
                box-sizing: border-box;
                width: 28px;
                height: 28px;
                border-radius: 14px;
                border: 1px solid rgba(32, 44, 61, 0.4);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(32, 44, 61, 0.4);
                font-style: normal;
                background-color: #fff;
            }
            .step-line {
                width: 100%;
                height: 1px;
                background: rgba(32, 44, 61, 0.16);
                flex: auto;
                position: absolute;
                top: 14px;
            }
            .step:last-child .step-line {
                display: none;
            }
            .step.is-active .step-no {
                border-color: rgba(0, 102, 255, 1);
                color: rgba(0, 102, 255, 1);
            }
            .step.is-active .step-title {
                color: rgba(32, 44, 61, 1);
            }
            .step.is-finish .step-line {
                background-color: rgba(0, 102, 255, 1);
            }
            .step.is-finish .step-title {
                border-color: rgba(0, 102, 255, 1);
                color: rgba(0, 102, 255, 1);
            }
            .step.is-finish .step-no {
                background-color: rgba(0, 102, 255, 1);
                border-color: rgba(0, 102, 255, 1);
                color: white;
            }
        </style>
        `;
        const html = `<div class="steps"></div>`;

        const template = document.createElement("template");
        template.innerHTML = `${style}${html}`;
        const shadowDom = this.attachShadow({
            mode: "open",
        });
        shadowDom.appendChild(template.content.cloneNode(true));

        this.$steps = shadowDom.querySelector(".steps");
    }

    static get observedAttributes() {
        return ["active"];
    }

    get active() {
        return this.getAttribute("active") || 0;
    }
    set active(val) {
        if (![undefined, null].includes(val)) {
            this.setAttribute("active", val);
        } else {
            this.removeAttribute("active");
        }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "active":
                this.init(newVal);
                break;
            default:
                break;
        }
    }

    init(active) {
        const stepList = findElementsDownward(this, "ivy-step");
        const targetList = [];
        if (stepList && stepList.length) {
            stepList.map((co, i) => {
                const title = co.getAttribute("title");
                const icon = `<i class="step-no">${i + 1}</i>`;
                let stepClass = "step";
                if (i < active) {
                    stepClass += " is-finish";
                } else if (i == active) {
                    stepClass += " is-active";
                }
                targetList.push(`
                    <div class="${stepClass}">
                        <div class="step-inner">
                            <div>
                                ${icon}<span class="step-title">${title}</span>
                            </div>
                            <p class="step-desc">${co.innerHTML}</p>
                        </div>
                        <div class="step-line"></div>
                    </div>
                `);
            });
        }

        this.$steps.innerHTML = targetList.join("");
    }

    connectedCallback() {
        console.log(this.active);
        this.init(this.active);
    }
}

export class Step extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `<slot></slot>`;
        const shadowDom = this.attachShadow({
            mode: "open",
        });
        shadowDom.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["title"];
    }

    get title() {
        return this.getAttribute("title");
    }
    set title(val) {
        if (val) {
            this.setAttribute("title", val);
        } else {
            this.removeAttribute("title");
        }
    }
}
