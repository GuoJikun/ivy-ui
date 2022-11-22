import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ivy-dropdown-item',
  styleUrl: 'ivy-dropdown-item.css',
  shadow: true,
})
export class IvyDropdownItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
