import { Component, Host, h, Element, Prop, State, Event, EventEmitter } from '@stencil/core';
import { findElementsDownward } from 'src/utils/utils';

@Component({
  tag: 'ivy-tabs',
  styleUrl: 'ivy-tabs.css',
  shadow: true,
})
export class IvyTabs {
  @State() headerList: Array<Element> = [];
  tableInnerEl: HTMLElement;
  @Element() el: HTMLElement;

  @Prop() active: string = '0';

  @Event({
    eventName: 'tab-click',
  })
  tabClick: EventEmitter<string>;

  headerItemClick(ev: any) {
    const index = ev.target.getAttribute('data-index');
    this.headerList.forEach(el => {
      if (el.getAttribute('index') === index) {
        (el as any).show = true;
      } else {
        (el as any).show = false;
      }
    });
    this.tabClick.emit(index);
  }

  render() {
    return (
      <Host active={this.active}>
        <div class="ivy-tab-header">
          <div class="ivy-tab-header-arrow ivy-tab-header-arrow-left"></div>
          <div class="ivy-tab-wrap">
            <div class="ivy-tab-wrap-inner">
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
              <div class="ivy-tab-wrap-line"></div>
            </div>
          </div>
          <div class="ivy-tab-header-arrow ivy-tab-header-arrow-right"></div>
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
}
