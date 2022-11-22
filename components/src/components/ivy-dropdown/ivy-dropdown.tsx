import { Component, Host, h, Element, State, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ivy-dropdown',
  styleUrl: 'ivy-dropdown.css',
  shadow: true,
})
export class IvyDropdown {
  drop = null;

  @Element() el: HTMLElement;

  @State() visible = false;

  @Prop({
    attribute: 'disabled',
  })
  disabled: boolean = false;

  @Listen('click', {
    target: 'window',
    passive: true,
    capture: false,
  })
  windowClickHandler(ev) {
    if (!this.el.contains(ev.target)) this.hideHandler();
  }

  @Event({
    eventName: 'command',
  })
  command: EventEmitter<string>;

  eventClickHandler(ev: any) {
    const target = ev.target;
    const tagName = target.nodeName.toLowerCase();
    if (tagName === 'ivy-dropdown-item') {
      const optionValue = target.getAttribute('command');
      this.command.emit(optionValue);
      this.visible = false;
    }
  }

  focusHandler() {
    if (!this.disabled) this.visible = true;
  }

  hideHandler() {
    this.visible = false;
  }

  render() {
    return (
      <Host visible={this.visible}>
        <div class="ivy-input-inner" onClick={this.focusHandler.bind(this)}>
          <slot></slot>
        </div>
        <div class="select-option-wrap" ref={ev => (this.drop = ev)}>
          <div class="select-option-scroll">
            <div class="select-option" onClick={this.eventClickHandler.bind(this)}>
              <slot name="menu"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
