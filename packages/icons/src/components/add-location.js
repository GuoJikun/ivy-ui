class IvyIconAddLocation extends HTMLElement {
        constructor() {
          super();
          const host = this.attachShadow({ mode: 'open' });
          const style = `<style>:host{ display: inline-block; width: 1em;height: 1em;color: currentColor;font-size: inherit; }</style>`;
          const html = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/></svg>`;

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
              this.style.fontSize = newVal;
              break;
            case 'color':
              this.color = newVal;
              this.style.color = newVal;
              break;
          }
        }
      }
      export default IvyIconAddLocation;
      function install(){
        if(window.customElements.get('ivy-icon-add-location')) return;
        window.customElements.define('ivy-icon-add-location', IvyIconAddLocation);
      }
      export { install as registerComponent }