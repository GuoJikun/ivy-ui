class IvyIconMoreFilled extends HTMLElement {
        constructor() {
          super();
          const host = this.attachShadow({ mode: 'open' });
          const style = `<style>:host{ display: inline-block; width: 1em;height: 1em;color: currentColor;font-size: inherit; }</style>`;
          const html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"/></svg>`;

          const template = createElement('template');
          template.innerHTML = style + html;
          host.appendChild(template.content.cloneNode(true));
        }

        static get observedAttributes() {
          return ['size', 'color'];
        }

        get size() {
          return this.getAttribute('size');
        }

        set size(val) {
          this.setAttribute('size', val);
        }

        get color() {
          return this.getAttribute('color');
        }

        set color(val) {
          this.setAttribute('color', val);
        }

        attributeChangedCallback(attr, oldVal, newVal) {
          if (oldVal === newVal) return;

          switch (attr) {
            case 'size':
              this.size = newVal;
              break;
            case 'color':
              this.color = newVal;
              break;
          }
        }
      }
      export default IvyIconMoreFilled;
      function install(){
        if(window.customElements.get('ivy-icon-more-filled')) return;
        window.customElements.define('ivy-icon-more-filled', IvyIconMoreFilled);
      }
      export { install as registerComponent }