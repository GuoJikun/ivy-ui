import {
  $_color_primary,
  $_color_success,
  $_color_warning,
  $_color_danger,
  $_color_info,
} from "@/utils/var.js";
import { colorBlend } from "@/utils/assist.js";

class Tag extends HTMLElement {
  _shadowRoot;
  constructor() {
    super();
    const template = document.createElement("template");

    template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    font-size: 12px;
                    border-radius: 4px;
                    box-sizing: border-box;
                    margin-left: 10px;
                }
                :host(:first-child) {
                    margin-left:0;
                }

                :host,
                :host([size="large"]) {
                    line-height: 30px;
                    height: 32px;
                    padding: 0 12px;
                }
                :host([size="medium"]) {
                    line-height: 26px;
                    height: 28px;
                    padding: 0 10px;
                }
                :host([size="small"]) {
                    line-height: 22px;
                    height: 24px;
                    padding: 0 8px;
                }
                :host([size="mini"]) {
                    line-height: 18px;
                    height: 20px;
                    padding: 0 6px;
                }

                :host,
                :host([color="primary"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_primary,
                      0.8
                    )};
                    color: ${$_color_primary};
                    background-color: ${colorBlend(
                      "#ffffff",
                      $_color_primary,
                      0.9
                    )};
                }
                :host([color="success"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_success,
                      0.8
                    )};
                    color: ${$_color_success};
                    background-color: ${colorBlend(
                      "#ffffff",
                      $_color_success,
                      0.9
                    )};
                }
                :host([color="warning"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_warning,
                      0.8
                    )};
                    color: ${$_color_warning};
                    background-color: ${colorBlend(
                      "#ffffff",
                      $_color_warning,
                      0.9
                    )};
                }
                :host([color="error"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_danger,
                      0.8
                    )};
                    color: ${$_color_danger};
                    background-color: ${colorBlend(
                      "#ffffff",
                      $_color_danger,
                      0.9
                    )};
                }
                :host([color="info"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_info,
                      0.8
                    )};
                    color: ${$_color_info};
                    background-color: ${colorBlend(
                      "#ffffff",
                      $_color_info,
                      0.9
                    )};
                }

                :host([theme="plain"]),
                :host([theme="plain"][color="primary"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_primary,
                      0.6
                    )};
                    color: ${$_color_primary};
                    background-color: #ffffff;
                }
                :host([theme="plain"][color="success"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_success,
                      0.6
                    )};
                    color: ${$_color_success};
                    background-color: #ffffff;
                }
                :host([theme="plain"][color="warning"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_warning,
                      0.6
                    )};
                    color: ${$_color_warning};
                    background-color: #ffffff;
                }
                :host([theme="plain"][color="error"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_danger,
                      0.6
                    )};
                    color: ${$_color_danger};
                    background-color: #ffffff;
                }
                :host([theme="plain"][color="info"]){
                    border: 1px solid ${colorBlend(
                      "#ffffff",
                      $_color_info,
                      0.6
                    )};
                    color: ${$_color_info};
                    background-color: #ffffff;
                }

                :host([theme="dark"]),
                :host([theme="dark"][color="primary"]){
                    border: 1px solid ${$_color_primary};
                    color: #ffffff;
                    background-color: ${$_color_primary};
                }
                :host([theme="dark"][color="success"]){
                    border: 1px solid ${$_color_success};
                    color: #ffffff;
                    background-color: ${$_color_success};
                }
                :host([theme="dark"][color="warning"]){
                    border: 1px solid ${$_color_warning};
                    color: #ffffff;
                    background-color: ${$_color_warning};
                }
                :host([theme="dark"][color="error"]){
                    border: 1px solid ${$_color_danger};
                    color: #ffffff;
                    background-color: ${$_color_danger};
                }
                :host([theme="dark"][color="info"]){
                    border: 1px solid ${$_color_info};
                    color: #ffffff;
                    background-color: ${$_color_info};
                }
            </style>
            <slot></slot>
        `;
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
  static get observedAttributes() {
    return ["color", "theme"];
  }

  set color(value) {
    this.setAttribute("color", value);
  }
  get color() {
    return this.getAttribute("color") || $_color_primary;
  }

  set theme(value) {
    if (this.getAttribute("theme")) {
      this.setAttribute("theme", value || "");
    } else {
      this.removeAttribute("theme");
    }
  }
  get theme() {
    return this.getAttribute("theme");
  }

  generatorColor(color, theme) {
    if (theme === "plain") {
      this.style.color = color || "#ffffff";
      this.style.backgroundColor = "#FFFFFF";
      this.style.borderColor = colorBlend("#ffffff", color, 0.6);
    } else if (theme === "dark") {
      this.style.color = "#FFFFFF";
      this.style.backgroundColor = color;
      this.style.borderColor = color;
    } else {
      this.style.color = color || "#FFFFFF";
      this.style.backgroundColor = colorBlend("#ffffff", color, 0.9);
      this.style.borderColor = colorBlend("#ffffff", color, 0.8);
    }
  }

  attributeChangedCallback(attr, oldVal, val) {
    if (attr === "color") {
      const theme = this.theme;
      if (!["primary", "success", "warning", "error", "info"].includes(val)) {
        this.generatorColor(val, theme);
      }
    } else if (attr === "theme") {
      const color = this.color;
      if (
        this.color &&
        !["primary", "success", "warning", "error", "info"].includes(this.color)
      ) {
        this.generatorColor(color, val);
      }
    }
  }
}

if (!customElements.get("ivy-tag")) {
  customElements.define("ivy-tag", Tag);
}
