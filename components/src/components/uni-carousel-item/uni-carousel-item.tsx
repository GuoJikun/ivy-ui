import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-carousel-item',
  styleUrl: 'uni-carousel-item.css',
  shadow: true,
})
export class UniCarouselItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
