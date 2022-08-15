import {
  $_color_primary,
  $_color_primary_light_3,
  $_color_primary_light_5,
  $_color_primary_light_9,
  $_color_success,
  $_color_success_light_3,
  $_color_success_light_5,
  $_color_warning,
  $_color_warning_light_3,
  $_color_warning_light_5,
  $_color_danger,
  $_color_danger_light_3,
  $_color_danger_light_5,
  $_color_info,
  $_color_info_light_3,
  $_color_info_light_5,
  $_border_base,
  $_border_radius,
  $_font_size,
} from "../../utils/var.js";

export class Button extends HTMLElement {
  _shadowRoot;
  $button;
  $loading;
  $buttonInner;
  constructor() {
    super();
    const template = document.createElement("template");

    template.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    line-height: 1;
                    height: 32px;
                    white-space: nowrap;
                    cursor: pointer;
                    // color: var(--el-button-text-color);
                    text-align: center;
                    box-sizing: border-box;
                    outline: none;
                    transition: all .1s;
                    // font-weight: var(--el-button-font-weight);
                    user-select: none;
                    vertical-align: middle;
                    -webkit-appearance: none;
                    // background-color: var(--el-button-bg-color);
                    border: var(--el-border, ${$_border_base});
                    padding: 8px 15px;
                    font-size: var(--el-font-size, ${$_font_size});
                    border-radius: var(--ivy-border-radius, ${$_border_radius});
                    margin-left: 12px;
                    tab-index: 1;
                }
                :host(:hover) {
                    border: 1px solid var(--color-primary, ${$_color_primary_light_5});
                    background-color: var(--color-primary, ${$_color_primary_light_9});
                    color: var(--color-primary, ${$_color_primary});
                }
                :host(:first-child){
                    margin-left: 0;
                }
                
                :host([round]){
                    border-radius: 16px;
                }

                :host([type="primary"]) {
                    border: 1px solid var(--color-primary, ${$_color_primary});
                    background-color: var(--color-primary, ${$_color_primary});
                    color: white;
                }
                :host([type="primary"]:hover) {
                    border: 1px solid var(--color-primary-light-3, ${$_color_primary_light_3});
                    background-color: var(--color-primary-light-3, ${$_color_primary_light_3});
                    color: white;
                }
                :host([type="success"]) {
                    border: 1px solid var(--color-success, ${$_color_success});;
                    background-color: var(--color-success, ${$_color_success});;
                    color: white;
                }
                :host([type="success"]:hover) {
                    border: 1px solid var(--color-success-light-3, ${$_color_success_light_3});
                    background-color: var(--color-success-light-3, ${$_color_success_light_3});
                    color: white;
                }
                :host([type="warning"]) {
                    border: 1px solid var(--color-warning, ${$_color_warning});;
                    background-color: var(--color-warning, ${$_color_warning});;
                    color: white;
                }
                :host([type="warning"]:hover) {
                    border: 1px solid var(--color-warning-light-3, ${$_color_warning_light_3});
                    background-color: var(--color-warning-light-3, ${$_color_warning_light_3});
                    color: white;
                }
                :host([type="danger"]) {
                    border: 1px solid var(--color-danger, ${$_color_danger});;
                    background-color: var(--color-danger, ${$_color_danger});;
                    color: white;
                }
                :host([type="danger"]:hover) {
                    border: 1px solid var(--color-danger-light-3, ${$_color_danger_light_3});
                    background-color: var(--color-danger-light-3, ${$_color_danger_light_3});
                    color: white;
                }
                :host([type="info"]) {
                    border: 1px solid var(--color-info, ${$_color_info});;
                    background-color: var(--color-info, ${$_color_info});;
                    color: white;
                }
                :host([type="info"]:hover) {
                    border: 1px solid var(--color-info-light-3, ${$_color_info_light_3});
                    background-color: var(--color-info-light-3, ${$_color_info_light_3});
                    color: white;
                }
                :host([disabled]){
                    cursor: not-allowed;
                    border-color: #e4e7ed;
                    background-color: white;
                    color: #a8abb2;
                }
                :host([disabled][type="primary"]){
                    cursor: not-allowed;
                    border: 1px solid var(--color-primary-light-5, ${$_color_primary_light_5});
                    background-color: var(--color-primary-light-5, ${$_color_primary_light_5});
                    color: white;
                }
                :host([disabled][type="success"]){
                    cursor: not-allowed;
                    border: 1px solid var(--color-success-light-5, ${$_color_success_light_5});
                    background-color: var(--color-success-light-5, ${$_color_success_light_5});
                    color: white;
                }
                :host([disabled][type="warning"]){
                    cursor: not-allowed;
                    border: 1px solid var(--color-warning-light-5, ${$_color_warning_light_5});
                    background-color: var(--color-warning-light-5, ${$_color_warning_light_5});
                    color: white;
                }
                :host([disabled][type="danger"]){
                    cursor: not-allowed;
                    border: 1px solid var(--color-danger-light-5, ${$_color_danger_light_5});
                    background-color: var(--color-danger-light-5, ${$_color_danger_light_5});
                    color: white;
                }
                :host([disabled][type="info"]){
                    cursor: not-allowed;
                    border: 1px solid var(--color-info-light-5, ${$_color_info_light_5});
                    background-color: var(--color-info-light-5, ${$_color_info_light_5});
                    color: white;
                }

                :host([loading]) {
                    position: relative;
                    pointer-events: none;
                }
                :host([loading])::before {
                    z-index: 1;
                    pointer-events: none;
                    content: "";
                    position: absolute;
                    left: -1px;
                    top: -1px;
                    right: -1px;
                    bottom: -1px;
                    border-radius: inherit;
                    background-color: var(--el-mask-color-extra-light, hsla(0,0%,100%, 0.35));
                }
                #ivy-loading {
                    width: 1em;
                    height: 1em;
                    vertical-align: text-top;
                    fill: currentColor;
                    overflow: hidden;
                    animation: rotate 1.8s linear infinite;
                    display: none;
                    margin-right: 8px;
                }
                @keyframes rotate{
                    to{
                        transform: rotate(360deg); 
                    }
                }
                :host([loading]) #ivy-loading{
                    display: initial;
                }
            </style>
            <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
                <symbol id="ivy-icon-loading" viewBox="0 0 1024 1024">
                    <path
                        d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"
                    ></path>
                </symbol>
            </svg>
            <slot name="icon">
                <svg view="0 0 1024 1024" class="ivy-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true" id="ivy-loading">
                    <use href="#ivy-icon-loading"></use>
                </svg>
            </slot>
            <span class="ivy-button-inner"><slot></slot></span>
        `;

    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector("button");
    this.$loading = this._shadowRoot.querySelector("#ivy-loading");
    this.$buttonInner = this._shadowRoot.querySelector(".ivy-button-inner");
  }
  connectedCallback() {}

  get type() {
    return this.getAttribute("type");
  }

  set type(value) {
    if (this.getAttribute("type") === null) {
      this.removeAttribute("type");
    } else {
      this.setAttribute("type", value || "");
    }
  }

  get loading() {
    return this.getAttribute("loading");
  }

  set loading(value) {
    if (this.getAttribute("loading")) {
      this.setAttribute("loading", value || "");
    } else {
      this.removeAttribute("loading");
    }
  }

  get round() {
    return this.getAttribute("round");
  }

  set round(value) {
    if (this.getAttribute("round")) {
      this.setAttribute("round", value || "");
    } else {
      this.removeAttribute("round");
    }
  }

  get disabled() {
    return this.getAttribute("disabled");
  }

  set disabled(value) {
    if (this.getAttribute("disabled")) {
      this.setAttribute("disabled", value || "");
    } else {
      this.removeAttribute("disabled");
    }
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
    // if (name === "round") {
    //   this.$button.style.borderRadius = "17px";
    // }
    /* if (name === "disabled") {
            this.$button.style.cursor = "not-allowed";
            this.$button.style.opacity = "0.5";
        } */
    // if (name === "loading") {
    //     this.$loading.style.display = "initial";
    //     this.$buttonInner.style.marginLeft = "4px";
    //     this.$button.style.cursor = "not-allowed";
    //     this.$button.style.opacity = "0.5";
    // }
  }
}
if (!customElements.get("ivy-button")) {
  customElements.define("ivy-button", Button);
}
