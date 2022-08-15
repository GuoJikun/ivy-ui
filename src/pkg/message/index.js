import "../icon/index.js";
import { type, isObject } from "../../utils/type.js";
import {
  $_color_danger,
  $_color_danger_light_8,
  $_color_danger_light_9,
  $_color_success,
  $_color_success_light_8,
  $_color_success_light_9,
  $_color_warning,
  $_color_warning_light_8,
  $_color_warning_light_9,
  $_color_info,
  $_color_info_light_8,
  $_color_info_light_9,
} from "../../utils/var.js";
class Message extends HTMLElement {
  constructor(zIndex = 9000) {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
            <style type="text/css">
                :host {
                    display: block;
                    box-sizing: border-box;
                    padding: 8px;
                    height: 54px;
                    text-align: center;
                    animation: fadeInDown 0.3s ease-in-out;
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate3d(0, -100%, 0);
                    }

                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                    }
                .message {
                    display: inline-flex;
                    pointer-events: all;
                    padding: 8px 16px;
                    border-radius: 4px;
                    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
                    background: #fff;
                    position: relative;
                    border-width: 1px;
                    border-style: solid;
                    min-width: 200px;
                }
                
                .message-icon {
                    margin-right: 8px;
                }

                :host([type="success"]) .message {
                    background-color: var(--color-success-light-9, ${$_color_success_light_9});
                    border-color: var(--color-success-light-8, ${$_color_success_light_8});
                    color: var(--color-success, ${$_color_success});
                }
                :host([type="warning"]) .message {
                    background-color: var(--color-warning-light-9, ${$_color_warning_light_9});
                    border-color: var(--color-warning-light-8, ${$_color_warning_light_8});
                    color: var(--color-warning, ${$_color_warning});
                }
                :host([type="error"]) .message {
                    background-color: var(--color-danger-light-9, ${$_color_danger_light_9});
                    border-color: var(--color-danger-light-8, ${$_color_danger_light_8});
                    color: var(--color-danger, ${$_color_danger});
                }
                :host([type="info"]) .message {
                    background-color: var(--color-info-light-9, ${$_color_info_light_9});
                    border-color: var(--color-info-light-8, ${$_color_info_light_8});
                    color: var(--color-info, ${$_color_info});
                }
            </style>
            <div class="message">
                <ivy-icon name="info" class="message-icon"></ivy-icon>
                <div class="message-content"></div>
            </div>
        `;
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.el = this._shadowRoot.querySelector(".message");
    this.wrap = this._shadowRoot.querySelector(".message-content");
  }
  static get observedAttributes() {
    return ["message", "show", "type", "icon"];
  }
  get message() {
    return this.getAttribute("message") || "";
  }
  get show() {
    return this.getAttribute("show");
  }

  set message(value) {
    this.setAttribute("message", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
  get type() {
    return this.getAttribute("type");
  }

  attributeChangedCallback(name, oldVal, val) {
    if (name === "message") {
      this.wrap.innerText = val;
    }
  }
  static show(opt = {}) {
    if (isObject(opt)) {
      const instance = new Message();
      const ivyBox = document.querySelector("#ivy-message-box");
      instance.type = opt.type || "info";
      console.log(instance);
      instance.message = opt.message || "";
      ivyBox.appendChild(instance);
      instance.setAttribute("show", "show");
      const timer = setTimeout(() => {
        ivyBox.removeChild(instance);
        clearTimeout(timer);
      }, opt.duration || 3000);
    } else {
      throw new Error("");
    }
  }
  static info(opt) {
    const typeStr = type(opt);
    const conf = {
      type: "info",
    };
    if (typeStr === "string") {
      this.show({ message: opt, ...conf });
    } else if (typeStr === "object") {
      this.show({ ...opt, ...conf });
    } else {
      throw new Error("");
    }
  }
  static success(opt) {
    const typeStr = type(opt);
    const conf = {
      type: "success",
    };
    if (typeStr === "string") {
      this.show({ message: opt, ...conf });
    } else if (typeStr === "object") {
      this.show({ ...opt, ...conf });
    } else {
      throw new Error("");
    }
  }
  static warning(opt) {
    const typeStr = type(opt);
    const conf = {
      type: "warning",
    };
    if (typeStr === "string") {
      this.show({ message: opt, ...conf });
    } else if (typeStr === "object") {
      this.show({ ...opt, ...conf });
    } else {
      throw new Error("");
    }
  }
  static error(opt) {
    const typeStr = type(opt);
    const conf = {
      type: "error",
    };
    if (typeStr === "string") {
      this.show({ message: opt, ...conf });
    } else if (typeStr === "object") {
      this.show({ ...opt, ...conf });
    } else {
      throw new Error("");
    }
  }
}

function addMessageBox() {
  const parent = document.createElement("div");
  parent.id = "ivy-message-box";
  parent.style.position = "fixed";
  parent.style.top = "24px";
  parent.style.left = "0";
  parent.style.zIndex = "10000";
  parent.style.width = "100%";
  parent.style.pointerEvents = "none";
  parent.style.fontSize = "14px";
  document.body.appendChild(parent);
}

if (!customElements.get("ivy-message")) {
  customElements.define("ivy-message", Message);
  window.onload = function () {
    addMessageBox();
    window.$message = Message;
  };
}
