import { Component, Host, h, Prop, Event, EventEmitter, State, Watch, Method } from '@stencil/core';

interface Pager {
  current: number;
  size: number;
  sizes: number[];
  total: number;
  layout: string[];
  maxPage: number;
}
@Component({
  tag: 'ivy-pager',
  styleUrl: 'ivy-pager.css',
  shadow: true,
})
export class IvyPager {
  private pager: Pager = {
    current: 1,
    size: 10,
    sizes: [],
    total: 0,
    layout: [],
    maxPage: 0,
  };
  @Prop() layout: string = 'prev,pager,next';

  @Prop({
    attribute: 'defaultPage',
    mutable: true,
    reflect: true,
  })
  defaultPage: string = '1';

  @Prop({
    attribute: 'size',
    mutable: true,
    reflect: true,
  })
  size: string = '10';

  @Prop({
    attribute: 'sizes',
    mutable: true,
    reflect: true,
  })
  sizes: string = '';

  @Prop({
    attribute: 'total',
    mutable: true,
    reflect: true,
  })
  total: string = '0';

  @State() currentPage = '1';

  @State() startPage = 1;
  @State() pageCount = 7;

  @Watch('defaultPage')
  watchPropHandler(newVal: string) {
    this.currentPage = newVal;
  }

  connectedCallback() {
    this.currentPage = this.defaultPage;
    this.pager.current = parseInt(this.defaultPage);
    this.pager.size = parseInt(this.size);
    this.pager.sizes = this.sizes.split(',').map(c => parseInt(c.trim())) || [];
    const maxPage = parseInt((this.pager.total / this.pager.size).toFixed(0));
    this.pager.maxPage = this.pager.total % this.pager.size === 0 ? maxPage : maxPage + 1;
  }

  @Watch('currentPage')
  watchStateHandler(newVal: string, oldVal: string) {
    const cur = parseInt(newVal);
    const remainder = cur % this.pageCount;
    if (remainder === 0) {
      if (this.startPage === cur && oldVal > newVal) {
        this.startPage = cur - this.pageCount + 1;
      } else {
        this.startPage = cur;
      }
    }
  }

  @Event({
    eventName: 'current-change',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  currentChange: EventEmitter<number>;
  pageChangedHandler(curPage) {
    if (this.currentPage != curPage) {
      this.currentPage = curPage;
      const event = this.currentChange.emit(curPage);
      if (!event.defaultPrevented) {
        // if not prevented, do some default handling code
      }
    }
  }

  componentWillRender() {
    this.pager.total = parseInt(this.total);
  }

  renderPagerItem(start: number, count: number) {
    return new Array(count).fill(start).map((c, i) => {
      const curPage: number = i + c;
      const className = ['pager-item'];
      if (this.currentPage == curPage.toString()) {
        className.push('pager-item-active');
      }
      return (
        <li
          class={className.join(' ')}
          onClick={() => {
            this.pageChangedHandler(curPage);
          }}
        >
          {curPage}
        </li>
      );
    });
  }

  render() {
    return (
      <Host>
        <div
          class="pager-btn"
          onClick={() => {
            const cur = parseInt(this.currentPage);
            if (cur !== 1) {
              this.pageChangedHandler(cur - 1);
            }
          }}
        >
          <slot name="prev">
            <span>Prev</span>
          </slot>
        </div>
        <ul>{this.renderPagerItem(this.startPage, this.pageCount)}</ul>
        <div
          class="pager-btn"
          onClick={() => {
            const cur = parseInt(this.currentPage);
            this.pageChangedHandler(cur + 1);
          }}
        >
          <slot name="next">
            <span>Next</span>
          </slot>
        </div>
      </Host>
    );
  }

  @Method()
  async setTotal(total: number) {
    if (total < 0) {
      throw new Error('total 属性必须是正整数');
    }
    this.pager.total = total;
  }
}
