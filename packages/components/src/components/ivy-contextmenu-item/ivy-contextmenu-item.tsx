import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ivy-contextmenu-item',
  styleUrl: 'ivy-contextmenu-item.css',
  shadow: true,
})
export class IvyContextmenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
