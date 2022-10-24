import { Component, Host, h, Prop, Element, Watch, getElement } from '@stencil/core';

@Component({
  tag: 'ivy-collapse-item',
  styleUrl: 'ivy-collapse-item.css',
  shadow: true,
})
export class IvyCollapseItem {
  @Prop({
    attribute: 'active',
    mutable: true,
    reflect: true,
  })
  active: string = '';

  @Prop({
    attribute: 'name',
    mutable: true,
    reflect: true,
  })
  name: string;

  @Prop({
    attribute: 'index',
    mutable: true,
    reflect: true,
  })
  index: string;

  height: string;

  @Element() el: HTMLElement;

  bodyEl = null;

  headerClickHandler() {
    if (this.active === 'active') {
      this.active = '';
    } else {
      this.active = 'active';
    }
  }

  @Watch('active')
  watchPropHandler(val: string) {
    if (val) {
      this.el.setAttribute('active', 'active');
      this.bodyEl.style.height = this.height;
    } else {
      this.el.setAttribute('active', '');
      this.bodyEl.style.height = 0;
    }
  }

  render() {
    return (
      <Host>
        <div class="ivy-collapse-item-header" onClick={this.headerClickHandler.bind(this)}>
          <slot name="name">{this.name}</slot>
        </div>
        <div class="ivy-collapse-item-body">
          <div class="ivy-collapse-item-body-inner">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    const root = getElement(this);
    const body = root.shadowRoot.querySelector('.ivy-collapse-item-body');
    const bodyStyle = getComputedStyle(body);
    const height = bodyStyle['height'];
    this.height = height;
    this.bodyEl = body;
    if (this.active !== 'active') {
      this.bodyEl.style.height = 0;
    } else {
      this.bodyEl.style.height = height;
    }
  }
}
