import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-card',
  styleUrl: 'ivy-card.css',
  shadow: true,
})
export class IvyCard {
  @Prop({
    attribute: 'header',
    reflect: true,
    mutable: true,
  })
  header: string = '';

  render() {
    return (
      <Host>
        <div class="ivy-card-header">
          <slot name="header">{this.header}</slot>
        </div>
        <div class="ivy-card-body">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
