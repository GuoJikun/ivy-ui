import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ivy-text',
  styleUrl: 'ivy-text.css',
  shadow: true,
})
export class IvyText {
  @Prop({
    attribute: 'type',
    mutable: true,
    reflect: true
  })
  type: string

  @Prop({attribute: 'type',})
  truncated: boolean = false

  @Prop({
    attribute: 'line-clamp',
    mutable: true,
    reflect: true
  })
  lineClamp: string

  @State()
  className = ['text']
  render() {
    if(this.truncated){
      this.className.push('is-truncated')
    }
    if(this.lineClamp){
      this.className.push('is-line-clamp')
    }
    return (
      <Host type={this.type} line-clamp={this.lineClamp} truncated={this.truncated}>
        <div
          class={this.className.join(" ")}
          style={{'-webkit-line-clamp': this.lineClamp}}
          >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
