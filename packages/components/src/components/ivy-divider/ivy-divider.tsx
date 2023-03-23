import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ivy-divider',
  styleUrl: 'ivy-divider.css',
  shadow: true,
})
export class IvyDivider {
  render() {
    return (
      <Host>
        <div class="ivy-divider-line"></div>
        <span class="ivy-divider-text">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
