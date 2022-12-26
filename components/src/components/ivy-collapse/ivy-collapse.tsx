import { Component, Host, h, getElement, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-collapse',
  styleUrl: 'ivy-collapse.css',
  shadow: true,
})
export class IvyCollapse {
  @Prop({
    attribute: 'active',
    mutable: true,
    reflect: true,
  })
  active: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
  connectedCallback() {
    const active = this.active;
    const childList = getElement(this).children || [];
    const children = [...(childList as Array<HTMLElement>)];
    children.forEach((cur, i) => {
      const index = cur.getAttribute('index');
      if (index === undefined) {
        if (active === i.toString()) {
          cur.setAttribute('active', '');
        }
      } else {
        if (active === index) {
          cur.setAttribute('active', 'active');
        }
      }
    });
  }
}
