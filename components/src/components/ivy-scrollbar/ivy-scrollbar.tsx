import { Component, Host, h, Listen, State, Prop, Element, writeTask } from '@stencil/core';

@Component({
  tag: 'ivy-scrollbar',
  styleUrl: 'ivy-scrollbar.css',
  shadow: true,
})
export class IvyScrollbar {
  @Element() el: HTMLElement;
  scrollbarView: HTMLElement;
  @Prop() height = '100%';
  @Prop() maxHeight = '100%';

  @State() scrollTop: number = 0;
  @State() maxScrollTop: number = 0;

  @State() statusX = false;
  @State() statusY = false;

  @State() scrollbarSizeX = 0;
  @State() scrollbarSizeY = 0;

  @Prop({ attribute: 'min-size' }) minSize = 20;

  @Listen('mousewheel')
  handleMouseWheel(event: any) {
    const placement = event.wheelDelta;
    console.log(placement, event);
  }

  render() {
    return (
      <Host style={{ height: this.height, maxHeight: this.maxHeight }}>
        <div class="ivy-scrollbar__view" ref={el => (this.scrollbarView = el)}>
          <slot></slot>
        </div>
        <div class="ivy-scrollbar__bar is-vertical" style={{ height: `${this.scrollbarSizeY}px` }} data-show={this.statusY ? 'show' : ''}>
          <div class="el-scrollbar__thumb"></div>
        </div>
        <div class="ivy-scrollbar__bar is-horizontal" style={{ width: `${this.scrollbarSizeX}px` }} data-show={this.statusX ? 'show' : ''}>
          <div class="el-scrollbar__thumb"></div>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    writeTask(() => {
      const rootStyles = getComputedStyle(this.el);
      const width = rootStyles.getPropertyValue('width');
      const height = rootStyles.getPropertyValue('height');
      const scrollbarViewStyles = getComputedStyle(this.scrollbarView);
      const scrollbarViewWidth = scrollbarViewStyles.getPropertyValue('width');
      const scrollbarViewHeight = scrollbarViewStyles.getPropertyValue('height');
      if (parseFloat(scrollbarViewHeight) > parseFloat(height)) {
        this.statusY = true;
        this.scrollbarSizeY = Math.max(parseFloat(height) / (parseFloat(scrollbarViewHeight) / parseFloat(height)), this.minSize);
        console.log(this.scrollbarSizeY);
      }
      if (parseFloat(scrollbarViewWidth) > parseFloat(width)) {
        this.statusX = true;
      }
      console.log(width, height, scrollbarViewWidth, scrollbarViewHeight);
    });
  }
}
