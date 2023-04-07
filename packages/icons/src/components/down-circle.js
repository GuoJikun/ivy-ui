class IvyIconDownCircle extends HTMLElement {
        constructor() {
          super();
          const host = this.attachShadow({ mode: 'open' });
          const style = `<style>:host{ display: inline-block; width: 1em;height: 1em;color: currentColor;font-size: inherit; }</style>`;
          const html = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#9b9b9b"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m33 21-9 9-9-9" data-follow-stroke="#9b9b9b"/></svg>`;

          const template = document.createElement('template');
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
      export default IvyIconDownCircle;
      function install(){
        if(window.customElements.get('ivy-icon-down-circle')) return;
        window.customElements.define('ivy-icon-down-circle', IvyIconDownCircle);
      }
      export { install as registerComponent }