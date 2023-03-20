import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { findElementUpward } from 'src/utils/utils';

@Component({
  tag: 'ivy-checkbox',
  styleUrl: 'ivy-checkbox.css',
  shadow: true,
})
export class IvyCheckbox {
  @Element() el: HTMLElement;

  @Prop({
    attribute: 'checked',
    mutable: true,
    reflect: true,
  })
  checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop() trueValue: string;
  @Prop() falseValue: string;

  @Event({
    eventName: 'changed',
  })
  changed: EventEmitter<boolean>;
  customChangeHandler(val: boolean) {
    this.changed.emit(val);
  }

  clickHandler() {
    if (this.disabled) {
      return false;
    }
    const checkboxGroup = findElementUpward(this.el, 'ivy-checkbox-group');
    const checked = this.checked;
    if (checkboxGroup) {
      if (checked) {
        this.checked = false;
        (checkboxGroup as any).removeValue(this.value);
      } else {
        this.checked = true;
        (checkboxGroup as any).setValue(this.value);
      }
      this.customChangeHandler(this.checked);
    } else {
      if (checked) {
        this.checked = false;
      } else {
        this.checked = true;
      }
      this.customChangeHandler(this.checked);
    }
  }

  render() {
    return (
      <Host checked={this.checked} disabled={this.disabled}>
        <label class="ivy-checkbox">
          <span class="ivy-checkbox-input">
            <span class="ivy-checkbox-inner"></span>
            <input class="ivy-checkbox-original" onChange={this.clickHandler.bind(this)} type="checkbox" aria-hidden="false" />
          </span>
          <span class="ivy-checkbox-label">
            <slot></slot>
          </span>
        </label>
      </Host>
    );
  }
}
