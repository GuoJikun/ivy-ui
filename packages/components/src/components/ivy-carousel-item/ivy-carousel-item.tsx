import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ivy-carousel-item',
  styleUrl: 'ivy-carousel-item.css',
  shadow: true,
})
export class IvyCarouselItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
