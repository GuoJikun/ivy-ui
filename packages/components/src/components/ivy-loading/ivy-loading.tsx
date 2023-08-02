import { Component, Host, h, Prop } from '@stencil/core';
import { genLoading } from '../../utils/icon';

@Component({
  tag: 'ivy-loading',
  styleUrl: 'ivy-loading.css',
  shadow: true,
})
export class IvyLoading {
  @Prop() text: string;
  @Prop() loading: boolean = false;

  render() {
    return (
      <Host loading={this.loading}>
        <div class="loading">
          <div part="icon" class="icon">
            <slot name="icon">{genLoading({ class: 'icon-loading' })}</slot>
          </div>
          {this.text ? <div class="text">{this.text}</div> : null}
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
