import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'ivy-space',
  styleUrl: 'ivy-space.css',
  shadow: true,
})
export class IvySpace {
  @State() children = [];
  @Element() el: HTMLElement;
  render() {
    return (
      <Host>
        <div class="space">
          {this.children.map(c => {
            return (
              <div class="space-item">
                {c.nodeType === 3
                  ? c.textContent
                  : h(
                      c.nodeName.toLowerCase(),
                      {
                        ...c,
                      },
                      c.textContent,
                    )}
              </div>
            );
          })}
        </div>
        <div class="hidden">
          <slot></slot>
        </div>
      </Host>
    );
  }

  componentWillLoad() {
    this.children = [];
    this.el.childNodes.forEach(el => {
      console.log(el.nodeType);
      if (el.nodeType === 1) {
        this.children.push(el);
      } else if (el.nodeType === 3 && el.textContent.trim() !== '') {
        this.children.push(el);
      }
    });
    console.log(this.children);
  }
}
