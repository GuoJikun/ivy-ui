import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-tag',
  styleUrl: 'ivy-tag.css',
  shadow: true,
})
export class IvyTag {
  @Prop({ attribute: 'type', reflect: true }) type: string = 'primary';
  @Prop({ attribute: 'size', reflect: true }) size: string = 'medium';
  @Prop({ attribute: 'theme', reflect: true }) theme: string;
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
