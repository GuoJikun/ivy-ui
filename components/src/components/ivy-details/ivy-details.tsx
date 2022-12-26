import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-details',
  styleUrl: 'ivy-details.css',
  shadow: true,
})
export class IvyDetails {
  @Prop() header: string = '详细信息';
  @Prop({
    attribute: 'open',
    mutable: true,
    reflect: true,
  })
  open: boolean = false;

  headerClick() {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
        <div class="header" onClick={this.headerClick.bind(this)}>
          <svg class="arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16">
            <path d="M4 5 L8 11 L12 5" stroke="#777" stroke-width="1px" fill="none"></path>
          </svg>
          <slot name="header">{this.header}</slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
