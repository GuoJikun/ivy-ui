import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ivy-input',
  styleUrl: 'ivy-input.css',
  shadow: true,
})
export class IvyInput {
  @State() isComposition = false;

  @Prop() disabled = false;
  @Prop() readonly = false;
  @Prop({
    attribute: 'auto-focus',
  })
  autoFocus = false;
  @Prop({
    attribute: 'type',
  })
  type: string = 'text';
  @Prop() placeholder: string;
  @Prop({
    mutable: true,
  })
  value: string = '';

  @Event({
    eventName: 'changed',
  })
  changed: EventEmitter<string | number | boolean>;

  changeHandler(ev: any) {
    if (!this.isComposition) {
      this.value = ev.target.value;
      this.changed.emit(ev.target.value);
    }
  }
  compositionStartHandler() {
    this.isComposition = true;
  }
  compositionEndHandler(ev: any) {
    this.isComposition = false;
    this.value = ev.target.value;
    this.changed.emit(ev.target.value);
  }

  @Event({
    eventName: 'focus',
  })
  focus: EventEmitter<any>;
  focusHandler() {
    this.focus.emit();
  }

  @Event({
    eventName: 'blur',
  })
  blur: EventEmitter<any>;
  blurHandler() {
    this.blur.emit();
  }

  render() {
    return (
      <Host>
        <input
          class="ivy-input-inner"
          autoFocus={this.autoFocus}
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onInput={this.changeHandler.bind(this)}
          onCompositionstart={this.compositionStartHandler.bind(this)}
          onCompositionend={this.compositionEndHandler.bind(this)}
        />
      </Host>
    );
  }
}
