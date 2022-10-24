import { Component, Host, h, Prop, Element } from '@stencil/core';
import { getType } from '../../utils/utils';

@Component({
  tag: 'uni-breadcrumb',
  styleUrl: 'uni-breadcrumb.css',
  shadow: true,
})
export class UniBreadcrumb {
  @Prop({
    attribute: 'separator',
    mutable: true,
    reflect: true,
  })
  separator: string = '/';

  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  componentDidRender() {
    const childList = this.el.children;
    for (const item in childList) {
      const tmp = childList[item];
      if (getType(tmp) === 'HTMLElement') {
        tmp.setAttribute('separator', this.separator);
      }
    }
  }
}
