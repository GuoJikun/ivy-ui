import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-row',
  styleUrl: 'uni-row.css',
  shadow: true,
})
export class UniRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
