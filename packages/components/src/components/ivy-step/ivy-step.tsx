import { Component, Host, h, Prop, Method, State } from '@stencil/core';

@Component({
  tag: 'ivy-step',
  styleUrl: 'ivy-step.css',
  shadow: true,
})
export class IvyStep {
  @Prop() status: string = 'wait';
  @Prop() content: string = '';

  @State() __index: string;

  render() {
    return (
      <Host class={`is-${this.status}`}>
        <div class="step-inner">
          <div class="step-icon">{this.__index}</div>
          <div class="step-wrap">
            <h2 class="step-title">
              <slot></slot>
            </h2>
            <p class="step-content">
              <slot name="content">{this.content}</slot>
            </p>
          </div>
        </div>
        <div class="step-line"></div>
      </Host>
    );
  }

  @Method()
  async setIndex(val: string) {
    this.__index = val;
  }
}
