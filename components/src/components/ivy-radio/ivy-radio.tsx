import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { findBrothersElements, findElementUpward } from 'src/utils/utils';

@Component({
  tag: 'ivy-radio',
  styleUrl: 'ivy-radio.css',
  shadow: true,
})
export class IvyRadio {
  @Element() el: HTMLElement;
  @Prop() value: string;

  @Prop({
    attribute: 'disabled',
    mutable: true,
    reflect: true,
  })
  disabled: boolean = false;

  @Prop({
    attribute: 'checked',
    mutable: true,
    reflect: true,
  })
  checked: boolean = false;

  @Event({
    eventName: 'change',
  })
  change: EventEmitter<boolean>;
  customChangeHandler(val: boolean) {
    this.change.emit(val);
  }

  clickHandler() {
    if (this.disabled) {
      return false;
    }
    const checkboxGroup = findElementUpward(this.el, 'ivy-radio-group');
    const checked = this.checked;
    if (checkboxGroup === null) {
      if (checked) {
        return;
      } else {
        this.checked = true;
      }
      this.customChangeHandler(true);
    } else {
      const brother = findBrothersElements(this.el, 'ivy-radio', false);
      if (!checked) {
        brother.map(el => {
          const isChecked = el.checked;
          if (isChecked !== null) {
            el.removeAttribute('checked');
          }
        });
        this.checked = true;
        this.customChangeHandler(true);
        (checkboxGroup as any).setAttribute('value', this.value);
        (checkboxGroup as any).dispatchEventChange(this.value);
      }
    }
  }
  render() {
    return (
      <Host disabled={this.disabled} onClick={this.clickHandler.bind(this)}>
        <span class="ivy-radio-input">
          <span class="ivy-radio-inner"></span>
        </span>
        <span class="ivy-radio-label">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
