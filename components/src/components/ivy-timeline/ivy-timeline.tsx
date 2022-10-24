import { Component, Host, h, Prop, getElement } from '@stencil/core';

@Component({
  tag: 'ivy-timeline',
  styleUrl: 'ivy-timeline.css',
  shadow: true,
})
export class IvyTimeline {
  @Prop({
    attribute: 'reverse',
    reflect: true,
  })
  reverse: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  connectedCallback() {
    const reverse = this.reverse;
    const childList = getElement(this).children || [];
    const children = [...(childList as Array<HTMLElement>)];
    children.map(cur => {
      if (reverse !== undefined && cur.nodeName === 'UNI-TIMELINE-ITEM') cur.setAttribute('reverse', 'reverse');
    });
  }
}
