import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ivy-tooltip',
  styleUrl: 'ivy-tooltip.css',
  shadow: true,
})
export class IvyTooltip {
  timer = null;

  @Prop({
    attribute: 'show',
    reflect: true,
    mutable: true,
  })
  show: boolean = false;

  @Prop({
    attribute: 'content',
    reflect: true,
    mutable: true,
  })
  content: string = '';

  @Prop({
    attribute: 'placement',
    reflect: true,
    mutable: true,
  })
  placement: string = 'top';

  @Watch('placement')
  propPlacementHandler(val: string) {
    const flag = /^(top|right|bottom|left)(-(start|end)$)/.test(val);
    if (!flag) {
      throw new Error('theme must is top/top-start/top-end/right/right-start/right-end/bottom/bottom-start/bottom-end/left/left-start/left-end');
    }
  }

  @Prop({
    attribute: 'theme',
    reflect: true,
    mutable: true,
  })
  theme: string = 'light';

  @Watch('theme')
  propThemeHandler(val: string) {
    const flag = ['dark', 'light'].includes(val);
    if (!flag) {
      throw new Error('theme must is light/dark');
    }
  }

  @Prop({
    reflect: true,
    mutable: true,
  })
  delay: string = '10';

  @Element() el: HTMLElement;

  open = ()=> {
    if (this.timer === null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      this.show = true;
    }, parseInt(this.delay) || 10);
  }

  close = () => {
    this.show = false;
  }

  render() {
    return (
      <Host show={this.show}>
        <div class="ivy-tooltip-ref" onMouseEnter={this.open} onMouseOut={this.close}>
          <slot></slot>
        </div>
        <div class="ivy-tooltip-content">
          <div class="ivy-tooltip-arrow"></div>
          <div class="ivy-tooltip-text">
            <slot name="content">{this.content}</slot>
          </div>
        </div>
      </Host>
    );
  }
}
