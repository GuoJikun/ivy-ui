import { Component, Host, h, Prop } from '@stencil/core';
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

  handlerClick() {
    this.open = !this.open;
  }

  render() {
    const iconClass = ['details-icon'];
    if (this.open) {
      iconClass.push('is-open');
    }
    return (
      <Host>
        <div class="details">
          <div class="details-summary" onClick={this.handlerClick.bind(this)}>
            <ArrowRight class={iconClass.join(' ')} />
            <slot name="summary">{this.summary}</slot>
          </div>

          <div class="details-content" style={{ display: this.open ? 'initial' : 'none' }}>
            <div class="details-content-inner">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
