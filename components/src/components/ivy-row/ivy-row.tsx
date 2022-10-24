import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ivy-row',
  styleUrl: 'ivy-row.css',
  shadow: true,
})
export class IvyRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
