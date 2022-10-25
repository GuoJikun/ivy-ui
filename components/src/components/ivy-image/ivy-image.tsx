import { Component, Host, h, Prop, State, Listen, Element } from '@stencil/core';

@Component({
  tag: 'ivy-image',
  styleUrl: 'ivy-image.css',
  shadow: true,
})
export class IvyImage {
  @Element() el: HTMLElement;
  @Prop({
    attribute: 'src',
    reflect: true,
  })
  src: string;
  @Prop() alt: string;

  @Prop() lazy: boolean = false;

  @State() imgSrc = '';

  @Listen('scroll', {
    target: 'window',
  })
  listenScrollHandler() {
    if (this.lazy) {
      requestAnimationFrame(this.scrollHandler);
    }
  }
  scrollHandler = () => {
    console.log(this);
    const observer = new IntersectionObserver((entries, observer) => {
      console.log(observer);
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.disconnect();
          this.imgSrc = this.src;
          console.log(1, this);
        }
        // 每个成员都是一个IntersectionObserverEntry对象。
        // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
        // entry.boundingClientRect //目标元素的位置信息
        // entry.intersectionRatio //目标元素的可见比例
        // entry.intersectionRect //交叉部分的位置信息
        // entry.isIntersecting
        // entry.rootBounds //根元素的位置
        // entry.target
        // entry.time //时间戳
      });
    });
    observer.observe(this.el);
  };

  componentWillLoad() {
    if (this.lazy) {
      this.imgSrc = '';
    } else {
      this.imgSrc = this.src;
    }
  }

  render() {
    return (
      <Host>
        <img class="image-inner" src={this.imgSrc} alt={this.alt} />
      </Host>
    );
  }
}
