import { Component, Host, h, Prop, getElement, State, Watch, Element } from '@stencil/core';
import { genArrowRight as ArrowRight } from 'src/utils/icon';

@Component({
  tag: 'ivy-details',
  styleUrl: 'ivy-details.css',
  shadow: true,
})
export class IvyDetails {
  @Prop() summary: string = '详细信息';
  @Prop({
    attribute: 'open',
    mutable: true,
    reflect: true,
  })
  open: boolean = false;

  @Prop() removeTransition: boolean = false;

  @State() height: string;

  bodyEl = null;

  @Element() el: HTMLElement;

  handlerClick() {
    this.open = !this.open;
  }

  @Watch('open')
  watchPropHandler(val: string) {
    if (val) {
      this.el.setAttribute('open', 'true');
      if (this.bodyEl) this.bodyEl.style.height = this.height;
    } else {
      this.el.setAttribute('open', 'false');
      if (this.bodyEl) this.bodyEl.style.height = 0;
    }
  }

  render() {
    let iconClass = ['details-icon', 'has-transition'];
    let contentClass = ['details-content', 'has-transition'];
    if (this.open) {
      iconClass.push('is-open');
    }
    console.log(this.removeTransition);
    if (this.removeTransition) {
      contentClass = contentClass.filter(item => item !== 'has-transition');
      iconClass = iconClass.filter(item => item !== 'has-transition');
    }
    return (
      <Host>
        <div class="details">
          <div class="details-summary" onClick={this.handlerClick.bind(this)}>
            <ArrowRight class={iconClass.join(' ')} />
            <slot name="summary">{this.summary}</slot>
          </div>

          <div class={contentClass.join(' ')}>
            <div class="details-content-inner">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    const root = getElement(this);
    const body = root.shadowRoot.querySelector('.details-content');
    const bodyStyle = getComputedStyle(body);
    const height = bodyStyle['height'];
    this.height = height;
    this.bodyEl = body;
    if (!this.open) {
      this.bodyEl.style.height = 0;
    } else {
      this.bodyEl.style.height = height;
    }
  }
}
