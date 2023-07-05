import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-description-item',
  styleUrl: 'ivy-description-item.css',
  shadow: true,
})
export class IvyDescriptionItem {
  @Prop({
    attribute: 'label',
  })
  label: string;

  @Prop({
    attribute: 'label-width',
    mutable: true,
    reflect: true,
  })
  labelWidth: string = '30%';

  @Prop({
    attribute: 'gutter',
    mutable: true,
    reflect: true,
  })
  gutter: string;

  @Prop({
    attribute: 'span',
    mutable: true,
    reflect: true,
  })
  span: string = '1';

  render() {
    return (
      <Host span={this.span}>
        <div class="label" style={{ flex: `0 0 ${this.labelWidth}`,minWidth: `${this.labelWidth}` }}>
          <slot name="label">{this.label}</slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
