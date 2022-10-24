import { Component, Host, h, Listen, Prop, Element, Watch, State } from '@stencil/core';

@Component({
  tag: 'ivy-aspect-ratio',
  styleUrl: 'ivy-aspect-ratio.css',
  shadow: true,
})
export class IvyAspectRatio {
  @Element() el: HTMLElement;

  @Prop({
    attribute: 'aspect-ratio',
    reflect: true,
  })
  aspectRatio: string = '1/1';

  @Prop() width: string = '100%';

  @Watch('aspectRatio')
  watchAspectRatioHandler(newVal: string) {
    const tmp = newVal.split('/');
    if (tmp.length !== 2) {
      throw new Error('aspectRatio attribute is must like `1/2`');
    }
  }

  @Prop()
  mode: string = 'css';

  @Listen('resize', {
    target: 'window',
  })
  emitResizeHandler() {
    requestAnimationFrame(this.resize.bind(this));
  }

  @State() height: string;

  getAspectRatio() {
    const tmp = this.aspectRatio.split('/');
    return {
      widthRatio: parseFloat(tmp[0]) || 1,
      heightRatio: parseFloat(tmp[1]) || 1,
    };
  }

  resize() {
    const tmp = this.getAspectRatio();
    if (this.mode === 'js') {
      if (this.el) {
        const wrapJsWidth = this.width;
        const widthNumber = parseFloat(wrapJsWidth);
        const unit = wrapJsWidth.replace(widthNumber.toString(), '');
        const height = (widthNumber / tmp.widthRatio) * tmp.heightRatio;
        this.height = `${height}${unit}`;
      }
    } else {
      this.height = `calc(${this.width} / ${tmp.widthRatio} * ${tmp.heightRatio})`;
    }
  }

  render() {
    return (
      <Host style={{ width: this.width, height: this.height }}>
        <slot></slot>
      </Host>
    );
  }

  componentWillLoad() {
    this.resize();
  }
}
