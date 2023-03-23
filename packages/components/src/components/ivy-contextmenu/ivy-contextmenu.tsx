import { Component, Host, h, State, Prop, Event, EventEmitter, writeTask } from '@stencil/core';

@Component({
  tag: 'ivy-contextmenu',
  styleUrl: 'ivy-contextmenu.css',
  shadow: true,
})
export class IvyContextmenu {
  @State() x = 0;
  @State() y = 0;
  @Prop({
    attribute: 'visible',
    mutable: true,
    reflect: true,
  })
  visible = false;

  wrap: boolean = false;

  contextmenuHandler(ev: any) {
    ev.preventDefault();
    this.close();
    writeTask(() => {
      const x = ev.layerX;
      const y = ev.layerY;
      this.openHandler({ x, y });
    });
  }

  @Event({
    eventName: 'command',
  })
  command: EventEmitter<string>;

  commandHandler(ev: any) {
    const target = ev.target;
    if (target.nodeName.toLowerCase() === 'ivy-contextmenu-item') {
      const command = target.getAttribute('command');
      this.command.emit(command);
      this.close();
    }
  }

  render() {
    return (
      <Host visible={this.visible} onContextmenu={this.contextmenuHandler.bind(this)}>
        <slot></slot>
        <div class="menu" style={{ top: `${this.y}px`, left: `${this.x}px` }} onClick={this.commandHandler.bind(this)}>
          <slot name="menu"></slot>
        </div>
      </Host>
    );
  }

  openHandler(position = { x: 0, y: 0 }) {
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
    window.addEventListener('scroll', this.scrollHandler.bind(this));
    window.addEventListener('click', this.scrollHandler.bind(this));

    window.addEventListener('contextmenu', this.scrollHandler.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
    window.removeEventListener('click', this.scrollHandler.bind(this));

    window.removeEventListener('contextmenu', this.scrollHandler.bind(this));
  }
}
