import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ivy-scrollbar',
  styleUrl: 'ivy-scrollbar.css',
  shadow: true,
})
export class IvyScrollbar {
  render() {
    return (
      <Host>
        <div class="ivy-scrollbar__view">
          <slot></slot>
        </div>
        <div class="ivy-scrollbar__bar is-vertical">
          <div class="el-scrollbar__thumb"></div>
        </div>
        <div class="ivy-scrollbar__bar is-horizontal">
          <div class="el-scrollbar__thumb"></div>
        </div>
      </Host>
    );
  }
}
