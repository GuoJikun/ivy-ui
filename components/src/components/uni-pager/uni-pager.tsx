import { Component, Host, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'uni-pager',
  styleUrl: 'uni-pager.css',
  shadow: true,
})
export class UniPager {
  @Prop() layout: string = 'prev,pager,next';

  @Prop({
    attribute: 'defaultPage',
    mutable: true,
    reflect: true,
  })
  defaultPage: string = '1';

  @State() currentPage = '1';

  @State() startPage = 1;
  @State() pageCount = 7;

  @Watch('defaultPage')
  watchPropHandler(newVal: string) {
    this.currentPage = newVal;
  }

  connectedCallback() {
    this.currentPage = this.defaultPage;
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
    eventName: 'pageChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  pageChange: EventEmitter<string>;
  pageChangedHandler(curPage) {
    if (this.currentPage != curPage) {
      this.currentPage = curPage;
      const event = this.pageChange.emit(curPage);
      if (!event.defaultPrevented) {
        // if not prevented, do some default handling code
      }
    }
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
}
