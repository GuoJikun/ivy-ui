import { Component, Host, h, Element, State, Prop, Watch, writeTask } from '@stencil/core';
import { findElementsDownward, getBrotherElements } from '../../utils/utils';

@Component({
  tag: 'ivy-carousel',
  styleUrl: 'ivy-carousel.css',
  shadow: true,
})
export class IvyCarousel {
  @Element() root: HTMLElement;
  @State() slotEl: Element;

  @State() slotChildren: HTMLElement[] = [];

  @State() carouselItemList: NodeListOf<Element>;

  @Prop() defaultActive: string = '1';

  @Watch('defaultActive')
  propDefaultActiveWatcher(val: any) {
    if (Number(val) != val) {
      throw new Error('prop defaultActive type is must be string number,like this "1"');
    }
  }

  handlerClick(ev) {
    const target = ev.target;
    const nodeName = target.nodeName;
    const className = target.getAttribute('class');
    console.log(nodeName, className);
    if (nodeName === 'A' && className === 'indicator-item') {
      const index = target.getAttribute('data-index');
      const wrap = this.root.shadowRoot.querySelector('.wrap');
      const children = wrap.children;
      console.log(wrap, index, children);
      (wrap as any).style.transform = `translateX(-${(Number(index) / children.length) * 100}%)`;
      target.setAttribute('data-active', '');
      const itemList = getBrotherElements(target);
      itemList.forEach(c => {
        c.removeAttribute('data-active');
      });
    }
  }

  render() {
    return (
      <Host>
        <div class="wrap"></div>
        <div class="wrap__hide">
          <slot ref={el => (this.slotEl = el)}></slot>
        </div>
        <div class="indicator">
          <slot name="indicator">
            <div class="indicator-default" onClick={this.handlerClick.bind(this)}>
              {this.slotChildren.map((_c, i) => {
                if (Number(this.defaultActive) == i + 1) {
                  return <a data-active data-index={i + 1} class="indicator-item"></a>;
                } else {
                  return <a data-index={i + 1} class="indicator-item"></a>;
                }
              })}
            </div>
          </slot>
        </div>
      </Host>
    );
  }

  componentWillLoad() {
    writeTask(() => {
      this.slotChildren = findElementsDownward(this.root, 'ivy-carousel-item');
      // this.slotChildren.forEach(c => {
      //   console.log(c.assignedSlot);
      // });
      // const tmp = (this.slotEl as any).assignedElements();
      // console.log(tmp);
      const carouselItemList = this.root.querySelectorAll('ivy-carousel-item');
      const len = carouselItemList.length;
      const firstChild: any = carouselItemList.item(0).cloneNode(true);
      const lastChild: any = carouselItemList.item(len - 1).cloneNode(true);
      const tmpBox = document.createElement('div');
      const itemFlex = (1 / (len + 2)) * 100;
      firstChild.style.flex = `0 0 ${itemFlex}%`;
      lastChild.style.flex = `0 0 ${itemFlex}%`;
      tmpBox.appendChild(firstChild);
      carouselItemList.forEach(c => {
        c.style.flex = `0 0 ${itemFlex}%`;
        tmpBox.appendChild(c);
      });

      tmpBox.appendChild(lastChild);
      const wrap = this.root.shadowRoot.querySelector('.wrap');
      if (wrap) {
        (wrap as any).style.width = `${(carouselItemList.length + 2) * 100}%`;
        wrap.innerHTML = tmpBox.innerHTML;
        (wrap as any).style.transform = `translateX(-${(Number(this.defaultActive) / (len + 2)) * 100}%)`;
      }
    });
  }
}
