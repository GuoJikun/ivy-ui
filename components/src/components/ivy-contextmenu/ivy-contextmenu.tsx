import { Component, Host, h, Method, State, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-contextmenu',
  styleUrl: 'ivy-contextmenu.css',
  shadow: true,
})
export class IvyContextmenu {
  @State() x = 0;
  @State() y = 0;
  @State() visible = false;

  @Prop() target: string;
  @Prop() wrap: boolean = false;

  contextmenuHandler(ev: Event) {
    ev.preventDefault();
    console.log(ev, 2);
    // this.open()
  }

  render() {
    if (this.wrap) {
      return (
        <Host onContextmenu={this.contextmenuHandler.bind(this)} class="is-container">
          <slot></slot>
          <div class="menu" style={{ top: `${this.y}px`, left: `${this.x}px` }} onClick={}>
            <slot name="menu"></slot>
          </div>
        </Host>
      );
    } else {
      return (
        <Host class="menu" style={{ top: `${this.y}px`, left: `${this.x}px` }}>
          <slot></slot>
        </Host>
      );
    }
  }

  @Method()
  async open(position = { x: 0, y: 0 }) {
    this.x = position.x;
    this.y = position.y;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  scrollHandler() {
    this.visible = false;
  }

  componentDidLoad() {
    if (this.target) {
      document.querySelector(this.target).addEventListener('scroll', this.scrollHandler.bind(this));
    } else {
      window.addEventListener('scroll', this.scrollHandler.bind(this));
    }
  }

  disconnectedCallback() {
    if (this.target) {
      document.querySelector(this.target).removeEventListener('scroll', this.scrollHandler.bind(this));
    } else {
      window.removeEventListener('scroll', this.scrollHandler.bind(this));
    }
  }
}
