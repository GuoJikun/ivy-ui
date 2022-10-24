import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'uni-badge',
  styleUrl: 'uni-badge.css',
  shadow: true,
})
export class UniBadge {
  @Prop({
    attribute: 'max',
    mutable: true,
    reflect: true,
  })
  max: string = '99';

  @Prop({
    attribute: 'value',
    mutable: true,
    reflect: true,
  })
  value: string = '0';

  @Prop({
    attribute: 'type',
    mutable: true,
    reflect: true,
  })
  type: string;

  @Prop({
    attribute: 'is-dot',
    mutable: true,
    reflect: true,
  })
  isDot: boolean = false;

  @Watch('max')
  watchPropMaxHandler(newVal: string) {
    const max = parseInt(newVal);
    if (isNaN(max)) {
      throw new Error('attr max is must number string');
    }
  }

  render() {
    const value = parseInt(this.value);
    const max = parseInt(this.max);
    if (!isNaN(value) && value > max) {
      return (
        <Host>
          <sup class="uni-badge-content">{`${this.max}+`}</sup>
          <slot></slot>
        </Host>
      );
    } else {
      return (
        <Host>
          <sup class="uni-badge-content">{this.value}</sup>
          <slot></slot>
        </Host>
      );
    }
  }
}
