class Anchor extends HTMLElement {
  anchorList = [];
  targetList = [];
  _shadowRoot = null;
  $wrap;
  $mark;
  constructor() {
    super();

    const style = `
            <style>
                :host{
                    display: flex;
                    font-size: 12px;
                }
                .anchor-line {
                    height: 100%;
                }
                .anchor-mark {
                    height: 12px;
                    width: 3px;
                    background-color: #409eff;
                    transform: translateY(6px);
                    transition: transform 0.3s ease-out;
                    border-radius: 1.5px;
                }
                .anchor-wrap{
                    padding-left: 12px;
                }
                .anchor-item{
                    font-size: 12px;
                    line-height: 24px;
                    display: block;
                    text-decoration: none;
                    color: #444;
                    cursor: default;
                }
            </style>
        `;

    const template = document.createElement("template");
    template.innerHTML = `
            ${style}
            <div class="anchor-line">
                <div class="anchor-mark"></div>
            </div>
            <div class="anchor-wrap"></div>
        `;
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$wrap = this._shadowRoot.querySelector(".anchor-wrap");
    this.$mark = this._shadowRoot.querySelector(".anchor-mark");
  }

  static get observedAttributes() {
    return ["affix", "container", "offset"];
  }

  get affix() {
    return this.getAttribute("affix");
  }
  set affix(val) {
    this.setAttribute("affix", val);
  }

  get container() {
    return this.getAttribute("container");
  }
  set container(val) {
    this.setAttribute("container", val);
  }

  get offset() {
    return this.getAttribute("offset") || "0";
  }
  set offset(val) {
    this.setAttribute("offset", val);
  }

  containerScrollMethod = (ev) => {
    const self = this;
    const target = ev.target;
    requestAnimationFrame(() => {
      self.targetList.map((c, i) => {
        if (c !== null) {
          if (c - target.scrollTop - Number(this.offset) < 10) {
            self.$mark.style.transform = `translateY(${i * 24 + 5}px)`;
          }
        }
      });
    });
  };

  connectedCallback() {
    const scrollContainer =
      document.querySelector(this.container) || document.body;
    const scrollContainerStyle = getComputedStyle(scrollContainer);

    if (
      !["relative", "absolute", "sticky"].includes(
        scrollContainerStyle.position
      )
    ) {
      scrollContainer.style.position = "relative";
    }
    const children = this.children;
    [...children].forEach((element) => {
      const href = element.getAttribute("href");
      const name = element.getAttribute("title");
      this.anchorList.push({
        href: href,
        name: name,
      });
      const targetEl = document.querySelector(href);
      if (targetEl) {
        this.targetList.push(targetEl.offsetTop);
      } else {
        this.targetList.push(null);
      }
    });

    this.$wrap.innerHTML = this.renderHtml(this.anchorList).join("");
    scrollContainer.addEventListener("scroll", this.containerScrollMethod);

    this.$wrap.addEventListener("click", (ev) => {
      const target = ev.target;
      if (target.classList.contains("anchor-item")) {
        const jumpEl = document.querySelector(target.getAttribute("href"));
        scrollContainer.scrollTop = jumpEl.offsetTop - Number(this.offset);
      }
    });

    if (this.affix) {
      this.style.position = "sticky";
    }
  }

  renderHtml(arr) {
    return arr.map((c) => {
      return `<div class="anchor-item" href="${c.href}">${c.name}</div>`;
    });
  }
  disConnectedCallback() {
    const scrollContainer = document.querySelector(this.container) || window;
    scrollContainer.removeEventListener("scroll", this.containerScrollMethod);
  }
}

class AnchorItem extends HTMLElement {
  _shadowRoot;
  constructor() {
    super();

    const template = document.createElement("template");

    template.innerHTML = ``;

    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["href", "title"];
  }
}

if (!customElements.get("ivy-anchor")) {
  customElements.define("ivy-anchor", Anchor);
  customElements.define("ivy-anchor-item", AnchorItem);
}
