import { Component, Host, h, Prop, Watch, State, Element, writeTask } from '@stencil/core';

@Component({
  tag: 'ivy-grid',
  styleUrl: 'ivy-grid.css',
  shadow: true,
})
export class IvyGrid {
  @Element() $el: HTMLElement;

  @State() styles: { [key: string]: string } = {
    '--ivy-grid-item-width': `33.3333333%`,
  };

  @Prop() square: boolean = false;
  @Prop({
    attribute: 'border',
    reflect: true,
  })
  border: boolean = false;

  @Prop() col: string = '3';

  @Watch('col')
  watchColHandler(val: string) {
    const tmp = parseInt(val);
    if (tmp.toString() !== val) {
      throw new Error(`type attr is must be string number`);
    }
  }

  componentWillLoad() {
    writeTask(() => {
      let wrapWidth = this.$el.getBoundingClientRect().width;
      if (this.border) {
        wrapWidth -= 1;
      }
      const widthNumber = wrapWidth / parseInt(this.col);
      const width = parseInt((widthNumber * 1000).toString()) / 1000;
      if (this.square) {
        this.styles = {
          '--ivy-grid-item-width': `${width}px`,
          '--ivy-grid-item-height': `${width}px`,
        };
      } else {
        this.styles = { '--ivy-grid-item-width': `${width}px` };
      }
    });
  }

  render() {
    return (
      <Host style={this.styles}>
        <slot></slot>
      </Host>
    );
  }
}
