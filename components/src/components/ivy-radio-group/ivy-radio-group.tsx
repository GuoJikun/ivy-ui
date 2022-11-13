import { Component, Host, h, Prop, Element, Event, EventEmitter, Method } from '@stencil/core';
import { findElementsDownward } from 'src/utils/utils';

@Component({
  tag: 'ivy-radio-group',
  styleUrl: 'ivy-radio-group.css',
  shadow: true,
})
export class IvyRadioGroup {
  @Element() el: HTMLElement;
  @Prop({
    attribute: 'value',
    reflect: true,
    mutable: true,
  })
  value: string;

  @Prop() disabled: boolean = false;

  @Event({
    eventName: 'change',
  })
  change: EventEmitter<string>;
  customChangeHandler(val: string) {
    this.change.emit(val);
  }

  render() {
    return (
      <Host disabled={this.disabled}>
        <slot></slot>
      </Host>
    );
  }

  componentDidLoad() {
    const checkboxList = findElementsDownward(this.el, 'ivy-radio');
    checkboxList.map(cur => {
      const checked = cur.getAttribute('checked');
      if (checked) {
        this.value = cur.getAttribute('value');
      }
      if (this.disabled) {
        cur.setAttribute('disabled', '');
      }
    });
  }

  @Method()
  async dispatchEventChange(val: string) {
    this.change.emit(val);
  }
}
