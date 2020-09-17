import {
  $_color_primary,
  $_color_success,
  $_color_warn,
  $_color_error,
  $_color_info,
  $_border_base,
  $_border_radius,
} from "../utils/var.js";

class Button extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");

    template.innerHTML = `
            <style>
                :host {
                    margin-left: 20px;
                    line-height: 32px;
                    display: inline-flex;
                }
                :host(:first-child){
                    margin-left: 0;
                }


                .cp-button {
                    display: block;
                    overflow: hidden;
                    outline: none;
                    line-height: 32px;
                    border: ${$_border_base};
                    box-sizing: border-box;
                    border-radius: ${$_border_radius};
                    padding: 0 20px;
                    background: white;
                }

                .cp-button:not([disabled]):hover,
                .cp-button:not([disabled]):focus{
                    opacity: 0.8;
                }

                :host([disabled]) .cp-button {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .cp-button-primary {
                    border: 1px solid ${$_color_primary};
                    background-color: ${$_color_primary};
                    color: white;
                }
                .cp-button-success {
                    border: 1px solid ${$_color_success};
                    background-color: ${$_color_success};
                    color: white;
                }
                .cp-button-warning {
                    border: 1px solid ${$_color_warn};
                    background-color: ${$_color_warn};
                    color: white;
                }
                .cp-button-danger {
                    border: 1px solid ${$_color_error};
                    background-color: ${$_color_error};
                    color: white;
                }
                .cp-button-info {
                    border: 1px solid ${$_color_info};
                    background-color: ${$_color_info};
                    color: white;
                }
                #cp-loading {
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
                <symbol id="cp-icon-loading" viewBox="0 0 1024 1024">
                    <path
                        d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"
                    ></path>
                </symbol>
            </svg>
            
            <button class="cp-button">
                <svg view="0 0 1024 1024" class="cp-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true" id="cp-loading">
                    <use href="#cp-icon-loading"></use>
                </svg>
                <span class="cp-button-inner"><slot></slot></span>
            </button>
        `;

    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector("button");
    this.$loading = this._shadowRoot.querySelector("#cp-loading");
    this.$buttonInner = this._shadowRoot.querySelector(".cp-button-inner");

    this.addEventListener("click", (e) => {});
  }
  connectedCallback() {
    if (this.type && this.$button) {
      this.$button.setAttribute(
        "class",
        `${this.class} cp-button-${this.type}`
      );
    }
    console.log(this.class);
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
if (!customElements.get("fox-button")) {
  customElements.define("fox-button", Button);
}
