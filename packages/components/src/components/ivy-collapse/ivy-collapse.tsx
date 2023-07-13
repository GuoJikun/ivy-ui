import { Component, Host, h, getElement, Prop } from '@stencil/core';
import {findElementsDownward} from "../../utils/utils";

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
  componentDidLoad() {
    const active = this.active;
    const el = getElement(this)
    const childList = findElementsDownward(el, 'ivy-collapse-item')

    const children = [...(childList as Array<HTMLElement>)];
    children.forEach((cur, i) => {
      const index = cur.getAttribute('index');

      if (index) {
        if (active === index) {
          cur.setAttribute('active', 'true');
        }
      } else {
        cur.setAttribute('index', i.toString())
        if (active === i.toString()) {
          cur.setAttribute('active', 'true');
        }
      }
    });
  }
}
