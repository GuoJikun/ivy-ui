import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ivy-description',
  styleUrl: 'ivy-description.css',
  shadow: true,
})
export class IvyDescription {
  @Prop({
    attribute: 'header',
  })
  header: string;

  @Prop({
    attribute: 'border',
    mutable: true,
    reflect: true,
  })
  border: boolean = false;

  @Prop({
    attribute: 'columns',
    reflect: true,
    mutable: true,
  })
  columns: number = 3;

  @Prop({
    attribute: 'label-width',
    reflect: true,
  })
  labelWidth: string;

  @Prop({
    attribute: 'gutter',
  })
  gutter: string = '32';

  @Element() el: HTMLElement;

  render() {
    return (
      <Host border={this.border}>
        <div class="header" style={{ padding: `12px ${parseFloat(this.gutter) / 2}px`, display: this.header ? null : 'none' }}>
          {this.header}
        </div>
        <div class="wrap">
          <slot></slot>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    const list = this.el.querySelectorAll('ivy-description-item');
    const len = list.length;
    for (let index = 0; index < len; index++) {
      const element = list[index];
      const curLabelWidth = element.getAttribute('label-width');
      const elementSpan = Number(element.span || '1');

      element.style.width = elementSpan >= this.columns ? '100%' : `${(elementSpan / this.columns) * 100}%`;
      const gutter = `${parseInt(this.gutter) / 2}px`;
      element.setAttribute('gutter', gutter);
      if ([undefined,null, ''].includes(curLabelWidth) && this.labelWidth) {
        element.setAttribute('label-width', this.labelWidth);
      }
      const curIndex = index + 1;
      if (curIndex % this.columns === 0 || len === curIndex) {
        element.style.borderRight = 'none';
      }
      const tmp = len / this.columns;
      if (tmp * this.columns <= curIndex) {
        element.style.borderBottom = 'none';
      }
      if (this.border) {
        element.setAttribute('border', 'true');
      }
    }
  }
}
