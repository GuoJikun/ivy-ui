import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-tab-pane',
  styleUrl: 'ivy-tab-pane.css',
  shadow: true,
})
export class IvyTabPane {
  @Prop({
    attribute: 'label',
    reflect: true,
  })
  label: string;

  @Prop({
    attribute: 'index',
    reflect: true,
    mutable: true
  })
  index: string;

  @Prop({
    attribute: 'show',
    reflect: true,
  })
  show: boolean = false;

  render() {
    return (
      <Host index={this.index} label={this.label} show={this.show}>
        <slot></slot>
      </Host>
    );
  }
}
