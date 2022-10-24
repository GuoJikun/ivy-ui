import { Component, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'ivy-breadcrumb-item',
  styleUrl: 'ivy-breadcrumb-item.css',
  shadow: true,
})
export class IvyBreadcrumbItem {
  @Prop({
    attribute: 'separator',
    mutable: true,
    reflect: true,
  })
  separator: string = '/';

  @Prop({
    attribute: 'href',
    mutable: true,
    reflect: true,
  })
  href: string;

  @Prop({
    attribute: 'blank',
    mutable: true,
    reflect: true,
  })
  blank: boolean = false;

  routeJump() {
    if (this.blank) {
      window.open(this.href);
    } else {
      window.location.href = this.href;
    }
  }

  render() {
    return (
      <Host>
        <div class="separator" part="separator">
          {this.separator}
        </div>
        <div class="content" onClick={this.routeJump.bind(this)}>
          <slot></slot>
        </div>
      </Host>
    );
  }

  @Method()
  async setSeparator(val: string) {
    this.separator = val;
  }
}
