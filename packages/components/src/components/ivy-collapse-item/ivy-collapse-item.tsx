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
  active: boolean = false;

  @Prop({
    attribute: 'header',
    mutable: true,
    reflect: true,
  })
  header: string;

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
    this.active = !this.active;
  }

  @Watch('active')
  watchPropHandler(val: string) {
    if (val) {
      this.el.setAttribute('active', 'true');
      if(this.bodyEl)
      this.bodyEl.style.height = this.height;
    } else {
      this.el.setAttribute('active', 'false');
      if(this.bodyEl)
      this.bodyEl.style.height = 0;
    }
  }

  render() {
    return (
      <Host index={this.index}>
        <div class="ivy-collapse-item-header" onClick={this.headerClickHandler.bind(this)}>
          <slot name="header">{this.header}</slot>
          <span class="arrow"></span>
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
    if (!this.active) {
      this.bodyEl.style.height = 0;
    } else {
      this.bodyEl.style.height = height;
    }
  }
}
