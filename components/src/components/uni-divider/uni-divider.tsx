import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-divider',
  styleUrl: 'uni-divider.css',
  shadow: true,
})
export class UniDivider {
  render() {
    return (
      <Host>
        <div class="uni-divider-line"></div>
        <span class="uni-divider-text">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
