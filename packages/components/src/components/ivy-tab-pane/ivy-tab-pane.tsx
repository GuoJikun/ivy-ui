import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-tab-pane',
  styleUrl: 'ivy-tab-pane.css',
  shadow: true,
})
export class IvyTabPane {
  @Prop({
    attribute: 'label',
  })
  label: string;

  @Prop({
    attribute: 'index',
  })
  index: string;

  @Prop({
    attribute: 'show',
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
