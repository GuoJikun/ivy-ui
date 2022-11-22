import { Component, Host, h, Element, Prop, State, Event, EventEmitter, writeTask } from '@stencil/core';
import { findElementsDownward } from 'src/utils/utils';

@Component({
  tag: 'ivy-tabs',
  styleUrl: 'ivy-tabs.css',
  shadow: true,
})
export class IvyTabs {
  @State() x: number = 0;
  @State() w: number = 0;
  @State() headerList: Array<Element> = [];
  tabHeaderWrap: HTMLElement;
  tableInnerEl: HTMLElement;
  btnLeft: HTMLElement;
  btnRight: HTMLElement;
  @Element() el: HTMLElement;

  @Prop({
    attribute: 'active',
    mutable: true,
    reflect: true,
  })
  active: string = '0';

  @Event({
    eventName: 'tab-click',
  })
  tabClick: EventEmitter<string>;

  headerItemClick(ev: any) {
    const target = ev.target;
    const index = target.getAttribute('data-index');
    this.headerList.forEach(el => {
      if (el.getAttribute('index') === index) {
        (el as any).show = true;
        const rect = target.getBoundingClientRect();
        this.w = rect.width;
        this.x = (target as any).offsetLeft;
      } else {
        (el as any).show = false;
      }
    });
    this.tabClick.emit(index);
  }

  scrollLeft() {
    const left = getComputedStyle(this.tableInnerEl)['left'];
    const leftN = parseFloat(left);
    console.log(left, leftN, 'left');
    if (leftN < -60) {
      (this.tableInnerEl as any).style.left = `${leftN + 60}px`;
    } else {
      (this.tableInnerEl as any).style.left = 0;
    }
  }
  scrollRight() {
    const innerStyle = getComputedStyle(this.tableInnerEl);
    const left = innerStyle['left'];
    const width = innerStyle['width'];
    const leftN = parseFloat(left);
    const widthN = parseFloat(width);
    const wrapWidth = parseFloat(getComputedStyle(this.tabHeaderWrap)['width']);
    console.log(widthN, leftN, wrapWidth, 'right');
    if (wrapWidth - leftN < widthN - 60) {
      (this.tableInnerEl as any).style.left = `${leftN - 60}px`;
    } else {
      (this.tableInnerEl as any).style.left = `-${widthN - wrapWidth}px`;
    }
  }

  render() {
    return (
      <Host active={this.active}>
        <div class="ivy-tab-header">
          <div class="ivy-tab-header-arrow ivy-tab-header-arrow-left" ref={el => (this.btnLeft = el)} onClick={this.scrollLeft.bind(this)}></div>
          <div class="ivy-tab-wrap" ref={el => (this.tabHeaderWrap = el)}>
            <div class="ivy-tab-wrap-inner" ref={el => (this.tableInnerEl = el)}>
              {this.headerList.map((el, index) => {
                let classList = ['ivy-tab-wrap-item'];
                if (index === 0) {
                  classList.push('ivy-tab-wrap-item-first');
                } else if (index === this.headerList.length - 1) {
                  classList.push('ivy-tab-wrap-item-last');
                }
                const elIndex = el.getAttribute('index');
                return (
                  <div class={classList.join(' ')} data-index={elIndex} onClick={this.headerItemClick.bind(this)}>
                    {el.getAttribute('label')}
                  </div>
                );
              })}
              <div class="ivy-tab-wrap-line" style={{ width: `${this.w}px`, left: `${this.x}px` }}></div>
            </div>
          </div>
          <div class="ivy-tab-header-arrow ivy-tab-header-arrow-right" ref={el => (this.btnRight = el)} onClick={this.scrollRight.bind(this)}></div>
        </div>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }

  componentWillLoad() {
    const list = findElementsDownward(this.el, 'ivy-tab-pane');
    this.headerList = list.map((el, index) => {
      const elIndex = el.getAttribute('index');
      if (!elIndex) {
        el.setAttribute('index', index.toString());
      }
      if (this.active === el.getAttribute('index')) {
        (el as any).show = true;
      } else {
        (el as any).show = false;
      }
      return el;
    });
  }

  componentDidLoad() {
    writeTask(() => {
      const children = this.tableInnerEl.children;
      for (let index = 0; index < children.length; index++) {
        const el = children[index];
        if (this.active === el.getAttribute('data-index')) {
          const rect = el.getBoundingClientRect();
          this.w = rect.width;

          this.x = (el as any).offsetLeft;
        }
      }

      const tableWrapInnerWidth = getComputedStyle(this.tableInnerEl)['width'];
      const tableWrapWidth = getComputedStyle(this.tabHeaderWrap)['width'];

      if (parseFloat(tableWrapWidth) < parseFloat(tableWrapInnerWidth)) {
        this.tabHeaderWrap.style.flex = '0 0 calc(100% - 60px)';

        (this.btnLeft as any).style.display = 'inline-block';
        (this.btnRight as any).style.display = 'inline-block';
      }
    });
  }
}
