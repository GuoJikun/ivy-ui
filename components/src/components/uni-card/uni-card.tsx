import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-card',
  styleUrl: 'uni-card.css',
  shadow: true,
})
export class UniCard {
  @Prop({
    attribute: 'header',
    reflect: true,
    mutable: true,
  })
  header: string = '';

  render() {
    return (
      <Host>
        <div class="uni-card-header">
          <slot name="header">{this.header}</slot>
        </div>
        <div class="uni-card-body">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
