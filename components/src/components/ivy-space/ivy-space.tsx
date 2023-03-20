import { Component, Host, h, State, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-space',
  styleUrl: 'ivy-space.css',
  shadow: true,
})
export class IvySpace {
  @Element() el: HTMLElement;
  @State() slotList = [];

  wrap!: HTMLElement;

  @Prop() direction: string = 'horizontal';

  render() {
    return (
      <Host direction={this.direction}>
        <div class="inner">
          {this.slotList.map(c => {
            return <div class="item" innerHTML={c}></div>;
          })}
        </div>
        <div class="hide">
          <slot ref={el => (this.wrap = el as HTMLElement)}></slot>
        </div>
      </Host>
    );
  }

  componentWillLoad() {
    (this.el.childNodes as unknown as Array<HTMLElement>).forEach(c => {
      if (c.nodeType === 1) {
        this.slotList.push(c.outerHTML);
      } else {
        if (c.nodeType === 3 && !/^\s+$/.test(c.nodeValue)) {
          this.slotList.push(c.nodeValue);
        }
      }
    });
  }
}
