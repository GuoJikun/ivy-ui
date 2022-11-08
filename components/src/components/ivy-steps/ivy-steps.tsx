import { Component, Host, h, Prop, writeTask, Element, Watch } from '@stencil/core';
import { findChildrenElements } from 'src/utils/utils';

@Component({
  tag: 'ivy-steps',
  styleUrl: 'ivy-steps.css',
  shadow: true,
})
export class IvySteps {
  @Element() el: HTMLElement;
  @Prop() status: string = 'process';
  @Prop({
    attribute: 'current',
    reflect: true,
    mutable: true,
  })
  current: string = '0';

  @Watch('current')
  watchCurrentHandler(val: string) {
    if (parseInt(val).toString() !== val) {
      throw new Error('属性current必须是字符串类型的数字');
    } else {
      this.init();
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  init() {
    const children = findChildrenElements(this.el, 'ivy-step');
    const current = parseInt(this.current);
    children.forEach((el, index) => {
      (el as any).setIndex(index + 1);
      if (index < current) {
        (el as any).setAttribute('status', 'finish');
      } else if (index === current) {
        (el as any).setAttribute('status', 'process');
      } else {
        (el as any).setAttribute('status', 'wait');
      }
    });
  }

  componentWillLoad() {
    writeTask(this.init.bind(this));
  }
}
