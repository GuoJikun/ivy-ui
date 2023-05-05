import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-col',
  styleUrl: 'ivy-col.css',
  shadow: true,
})
export class IvyCol {
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
