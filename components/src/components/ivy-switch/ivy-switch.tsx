import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ivy-switch',
  styleUrl: 'ivy-switch.css',
  shadow: true,
})
export class IvySwitch {
  @Prop({
    attribute: 'checked',
    reflect: true,
    mutable: true,
  })
  checked: boolean = false;

  @Prop({
    attribute: 'disabled',
    reflect: true,
  })
  disabled: boolean = false;

  @Event({
    eventName: 'change',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  change: EventEmitter<boolean>;

  changeHandler() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
  render() {
    return (
      <Host>
        <label class="ivy-switch">
          <input id="ivy-switch" type="checkbox" checked={this.checked} disabled={this.disabled} hidden onChange={this.changeHandler.bind(this)} />
        </label>
      </Host>
    );
  }
}
