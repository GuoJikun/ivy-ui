import { Component, Host, h, Element, Prop, Listen, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ivy-select',
  styleUrl: 'ivy-select.css',
  shadow: true,
})
export class IvySelect {
  drop = null;

  @Element() el: HTMLElement;

  @State() visible = false;

  @Prop({
    attribute: 'value',
    mutable: true,
    reflect: true,
  })
  value: string;

  @Prop({
    attribute: 'placeholder',
    mutable: true,
    reflect: true,
  })
  placeholder: string;

  @Prop({
    attribute: 'disabled',
  })
  disabled: boolean = false;

  // @Listen('scroll', {
  //   target: 'window',
  // })
  // windowScrollHandler() {
  //   console.log('windowScroll');
  // }

  @Listen('click', {
    target: 'window',
    passive: true,
    capture: false,
  })
  windowClickHandler(ev) {
    if (!this.el.contains(ev.target)) this.hideHandler();
  }

  @Event({
    eventName: 'change',
  })
  changed: EventEmitter<string>;

  eventClickHandler(ev: any) {
    const target = ev.target;
    const tagName = target.nodeName.toLowerCase();
    if (tagName === 'ivy-option') {
      const optionValue = target.getAttribute('value');
      if (optionValue !== this.value) {
        this.value = optionValue;
        this.changed.emit(optionValue);
      }
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
        <input type="text" placeholder={ this.placeholder } readonly value={this.value} class="ivy-input-inner" onFocus={this.focusHandler.bind(this)} />
        <div class="select-option-wrap" ref={ev => (this.drop = ev)}>
          <div class="select-arrow"></div>
          <div class="select-option-scroll">
            <div class="select-option" onClick={this.eventClickHandler.bind(this)}>
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
