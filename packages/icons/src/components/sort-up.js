class IvyIconSortUp extends HTMLElement {
        constructor() {
          super();
          const host = this.attachShadow({ mode: 'open' });
          const style = `<style>:host{ display: inline-block; width: 1em;height: 1em;color: currentColor;font-size: inherit; }</style>`;
          const html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"/></svg>`;

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
      export default IvyIconSortUp;
      function install(){
        if(window.customElements.get('ivy-icon-sort-up')) return;
        window.customElements.define('ivy-icon-sort-up', IvyIconSortUp);
      }
      export { install as registerComponent }