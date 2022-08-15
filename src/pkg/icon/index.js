import iconList from "./src/icon";

class Icon extends HTMLElement {
  _shadowRoot;
  root;
  use;
  hiddenSvg;
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
            <style type="text/css">
                :host {
                    display: inline-flex;
                    color: inherit;
                    transition: 0.3s;
                    font-size: inherit;
                    align-items: center;
                    justify-content: center;
                }
                :host([spin]) .ivy-icon {
                    animation: spin 1.4s linear infinite;
                }
                .ivy-icon {
                    display: block;
                    width: 1em;
                    height: 1em;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                }
                
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                .ivy-icon-hidden {
                    width: 0;
                    height: 0;
                    overflow:hidden;
                    position: absolute;
                }
            </style>
            <svg aria-hidden="true" class="ivy-icon-hidden">
                
            </svg>
            <svg class="ivy-icon" style="font-size: ${this.size}px;color: ${this.color};">
                <use xlink:href="#ivy-icon-${this.name}" class="ivy-icon-inner"></use>
            </svg>
        `;
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.root = this._shadowRoot.querySelector(".ivy-icon");
    this.use = this._shadowRoot.querySelector(".ivy-icon-inner");
    this.hiddenSvg = this._shadowRoot.querySelector(".ivy-icon-hidden");
  }
  static get observedAttributes() {
    return ["size", "name", "color"];
  }
  get size() {
    return this.getAttribute("size") || 14;
  }
  get name() {
    return this.getAttribute("name") || "";
  }
  get color() {
    return this.getAttribute("color") || "";
  }

  set name(value) {
    this.setAttribute("name", value);
  }
  set color(value) {
    this.setAttribute("color", value);
  }
  set size(value) {
    this.setAttribute("size", value);
  }

  connectedCallback() {
    if (this.name !== null) {
      const curIcon = iconList[`ivy-icon-${this.name}`];
      if (curIcon) {
        this.hiddenSvg.innerHTML = curIcon;
      }
    }
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "color") {
      this.root.style.color = newVal;
    }
    if (name === "name") {
      const curIcon = iconList[`ivy-icon-${this.name}`];
      if (curIcon) {
        this.hiddenSvg.innerHTML = curIcon;
      }
      this.use.setAttribute("xlink:href", `#ivy-icon-${newVal}`);
    }
    if (name === "size") {
      this.root.style.fontSize = newVal;
    }
  }
}

if (!customElements.get("ivy-icon")) {
  customElements.define("ivy-icon", Icon);
}
