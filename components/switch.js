import {
  $_color_primary,
  $_color_success,
  $_color_warn,
  $_color_error,
  $_color_info,
  $_border_base,
  $_border_radius,
} from "../utils/var.js";

class Switch extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");

    template.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                }


                .fox-switch {
                    display: inline-block;
                    position: relative;
                    width: 40px;
                    height: 20px;
                    background: #ccc;
                    border-radius: 10px;
                    transition: border-color .3s, background-color .3s;
                    cursor: pointer;
                }
                .fox-switch::after{
                    content: '';
                    display: inline-block;
                    width: 1rem;
                    height:1rem;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0, 0, 2px, #999;
                    transition:.4s;
                    top: 2px;
                    position: absolute;
                    left: 2px;
                }
                .fox-switch.is-checked{
                    background: var(--color-primary, ${$_color_primary});
                }
                .fox-switch.is-checked::after{
                    content: '';
                    position: absolute;
                    left: 55%;
                    top: 2px;
                }
            </style>
            <span class="fox-switch"></span>
        `;

    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$switch = this._shadowRoot.querySelector(".fox-switch");

    this.addEventListener("click", (e) => {
      this.$switch.classList.toggle("is-checked");
    });
  }

  static get observedAttributes() {
    return ["checked", "disabled"];
  }

  get checked() {
    return this.getAttribute("checked");
  }

  set checked(value) {
    this.setAttribute("checked", value);
  }

  get disabled() {
    return this.getAttribute("disabled");
  }

  set disabled(value) {
    this.setAttribute("disabled", value);
  }

  //   connectedCallback() {
  //     console.log(this.checked, this.checked === "true");
  //     if (this.$switch && (this.checked === "" || this.checked === "true")) {
  //       console.log(this.$switch, "this.$switch");
  //       this.$switch.classList.toggle("is-checked");
  //     }
  //   }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "checked") {
      this.$switch.classList.toggle("is-checked");
    }
  }
}
if (!customElements.get("fox-switch")) {
  customElements.define("fox-switch", Switch);
}
