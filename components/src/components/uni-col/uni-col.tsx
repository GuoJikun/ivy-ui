import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-col',
  styleUrl: 'uni-col.css',
  shadow: true,
})
export class UniCol {
  @Prop({
    reflect: true,
  })
  span: string = '24';

  render() {
    return (
      <Host style={{ flex: `0 0 ${(parseInt(this.span) / 24) * 100}%` }}>
        <slot></slot>
      </Host>
    );
  }
}
