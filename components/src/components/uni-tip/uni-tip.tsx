import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-tip',
  styleUrl: 'uni-tip.css',
  shadow: true,
})
export class UniTip {
  @Prop({
    attribute: 'name',
    mutable: true,
    reflect: true,
  })
  name: string;

  @Prop({
    attribute: 'type',
    reflect: true,
  })
  type: string = 'primary';

  render() {
    if (this.name) {
      return (
        <Host type={this.type}>
          <p class="title">{this.name}</p>
          <p class="content">
            <slot></slot>
          </p>
        </Host>
      );
    } else {
      return (
        <Host type={this.type}>
          <p class="content">
            <slot></slot>
          </p>
        </Host>
      );
    }
  }
}
